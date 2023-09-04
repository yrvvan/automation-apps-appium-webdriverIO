/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const axios = require('axios');
let browserstackResponse = {};
let repo = 'appium-webdriverIO-automation-apps';
const bstackUsername = process.env.BROWSERSTACK_USERNAME;
const bstackAccessKey = process.env.BROWSERSTACK_ACCESS_KEY;

// Get latest build runner from Browserstack
const getLastBuild = function () {
  const options = {
    method: 'GET',
    url: 'https://api.browserstack.com/app-automate/builds.json',
    auth: {
      username: bstackUsername,
      password: bstackAccessKey
    },
    responseType: 'json'
  };

  axios(options)
    .then(response => {
      if (response.status !== 200) {
        console.log(`Failed!, ${response.data.message}`);
      }
      // Send the build hash id to get all sessions inside of latest build
      getLastSession(response.data[0].automation_build.hashed_id, response.data[0].automation_build.public_url);
    })
    .catch(error => {
      console.log(`Failed!, ${error.message}`);
    });
};

// Get latest session run from latest build runner
const getLastSession = function (buildID, buildURL) {
  const options = {
    method: 'GET',
    url: `https://api.browserstack.com/app-automate/builds/${buildID}/sessions.json`,
    auth: {
      username: bstackUsername,
      password: bstackAccessKey
    },
    responseType: 'json'
  };

  axios(options)
    .then(response => {
      if (response.status !== 200) {
        console.log(`Failed!, ${response.data.message}`);
      } else {
        let overallDuration = 0;
        let device = [];
        let os_version = [];

        // Accumulate total of duration, used device, and os_versions, in latest build run
        for (let i = 0; i < response.data.length; i++) {
          overallDuration = overallDuration + response.data[i].automation_session.duration
          device[i] = response.data[i].automation_session.device
          os_version[i] = response.data[i].automation_session.os_version
        }

        // Getting clean array from duplication
        let devices = Array.from(new Set(device));
        let os_versions = Array.from(new Set(os_version));

        browserstackResponse.project_name = response.data[0].automation_session.project_name;
        browserstackResponse.duration = overallDuration;
        browserstackResponse.os = response.data[0].automation_session.os;
        browserstackResponse.os_version = os_versions.toString().replace(',',', ');
        browserstackResponse.device = devices.toString().replace(',',', ');
        browserstackResponse.app_name = response.data[0].automation_session.app_details.app_name;
        browserstackResponse.app_version = response.data[0].automation_session.app_details.app_version;
        browserstackResponse.url = buildURL;
        paramBuilder(browserstackResponse);
      }
    })
    .catch(error => {
      console.log(`Failed!, ${error.message}`);
    });
};

// Push test result notification to Mattermost
const _pushNotificationMattermost = function (payload) {
  let message = `#### Automation Apps Results\n<!channel>\nName: ${payload.project_name}\nDuration: ${payload.duration} seconds\nOS Name: ${payload.os}\nOS Version: ${payload.os_version}\nDevice Name: ${payload.device}\nApp Name: ${payload.app_name}\nApp Version: ${payload.app_version}\nBrowserstack Report URL: [Latest build](${payload.url})\nTest Report URL: [HTML Report](${payload.test_html_file})\nSuccess Rate: ${payload.test_coverage}%\nTest Passed: ${payload.test_passed}\nTest Failed: ${payload.test_failed}\nTest Skipped: ${payload.test_skipped}`;
  const notifPayload = {
    'username': 'at-apps-notif',
    'icon_url': 'https://static-00.iconduck.com/assets.00/browserstack-icon-512x511-xfk7rgj2.png',
    'text': message
  }
  const webhookMattermost = process.env.MATTERMOST_ATAPPS_WEBHOOK;
  const options = {
    method: 'POST',
    url: webhookMattermost,
    headers: {
      'Content-Type': 'application/json'
    },
    data: notifPayload,
    responseType: 'json'
  };

  axios(options)
    .then(response => {
      console.log(`Successfully - Pushed into Mattermost, ${response.data}.!`);
    })
    .catch(error => {
      console.log(`Failed! - Pushed into Mattermost, ${error.message}.!`);
    });
};

// Push test result to Hasura
const _pushCoverageAtapiHasura = function (payload) {
  const hasuraAccessKey = process.env.HASURA_ACCESS_KEY;
  const hasuraApiUrl = process.env.HASURA_COVERAGE_ATAPPS_URL;

  const data = {
    'project_name': payload.project_name,
    'app_name': payload.app_name,
    'app_version': payload.app_version,
    'os': payload.os,
    'os_version': payload.os_version,
    'device': payload.device,
    'test_passed': payload.test_passed,
    'test_failed': payload.test_failed,
    'test_skipped': payload.test_skipped,
    'success_rate': payload.test_coverage,
    'browserstack_duration': payload.duration,
    'browserstack_report_url': payload.url,
    'test_report_url': payload.test_html_file,
    'total_test_scenarios': payload.total_test_scenarios
  };

  const options = {
    method: 'POST',
    url: hasuraApiUrl,
    headers: {
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': hasuraAccessKey
    },
    "data": { coverages: [data] },
    responseType: 'json'
  };

  axios(options)
    .then(response => {
      console.log(`Successfully - Pushed into Coverage AT - Apps Hasura and server responded with Status Code ${response.status} and Result: ${response.data.insert_quality_engineer_coverage_atapps.affected_rows} Affected Rows`);
    })
    .catch(error => {
      console.log(`Failed! - Coverage AT-Apps Hasura ${error}`);
      console.log(`Failed! - Coverage AT-Apps Hasura Server responded with Status Code ${error.response.status}, with detail: ${error.response.data.error} in path ${error.response.request.path}`);
    });
};

// Combine report from Browserstack and Light reporter into one json
const paramBuilder = function (payload) {
  const directoryPath = path.join('./report/');
  let jsonFile = fs.readdirSync(directoryPath).filter(fn => fn.endsWith('.json'));
  let htmlFile = fs.readdirSync(directoryPath).filter(fn => fn.endsWith('.html'));
  fs.readFile(`./report/${jsonFile[0]}`, { encoding: 'utf-8' }, async function (err, data) {
    if (err) {
      console.log('Failed! - There is no Json file ' + err);
    }

    let mocha = JSON.parse(data);
    let stats = mocha.stats;

    // General Payload for API using HTTP Request
    let information = {
      'test_html_file': `https://bucket-domain-here/folder-here/${htmlFile[0]}`,
      'service': repo,
      'repository_name': repo,
      'test_coverage': `${parseFloat((stats.passes / (stats.passes + stats.failures)) * 100).toFixed(2)}`,
      'test_passed': stats.passes,
      'test_failed': stats.failures,
      'test_skipped': stats.skipped,
      'total_test_scenarios': stats.tests
    };
    let combinedReport = Object.assign(payload, information);

    _pushNotificationMattermost(combinedReport);
    _pushCoverageAtapiHasura(combinedReport);
  });
}

getLastBuild();
