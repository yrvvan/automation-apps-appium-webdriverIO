require('dotenv').config();
var today = new Date();
var todayDate = today.toISOString().slice(0, 10);
var time = today.toLocaleTimeString('it-IT');

exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  hostname: 'hub.browserstack.com',
  services: [
    [
      'browserstack',
      {
        browserstackLocal: true,
        opts: { forcelocal: false, localIdentifier: "webdriverio-appium-app-browserstack-repo" },
        app: process.env.APP_PATH,
      }
    ]
  ],

  capabilities: [
    {
      'bstack:options': {
        deviceName: process.env.ANDROID_DEVICE_NAME,
        platformVersion: process.env.ANDROID_DEVICE_VERSION,
        platformName: 'Android',
        disableCorsRestrictions : 'true'
      }
    }
  ],

  commonCapabilities: {
    'bstack:options': {
      projectName: "Automation Apps",
      buildName: `[Android] Automation Apps build ${todayDate}-${time}`,
      sessionName: 'Automation Apps',
      debug: true,
      networkLogs: true,
      source: 'webdriverio:appium-sample-sdk:v1.0'
    }
  },
  reporters: [
    [
      'light', {
        outputDir: './report',
        outputFile: `report-${todayDate}`// html report file will be name this
      }
    ]
  ],
  maxInstances: 1,

  updateJob: true,
  specs: [
    'android/test/specs/*/*.js'
  ],
  exclude: [
    'android/test/specs/Checkout/testCheckout.js'
  ],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 120000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 220000
  },
  onComplete: function () {
    const mergeResults = require("wdio-light-reporter/src/mergeResults"); //you can add this on top of the file
    mergeResults("./report");
  }
};

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (let key in exports.config.commonCapabilities)
    caps[key] = { ...caps[key], ...exports.config.commonCapabilities[key] };
});
