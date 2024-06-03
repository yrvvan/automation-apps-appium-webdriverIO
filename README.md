# webdriverio-appium-app-browserstack
This repository demonstrates how to run Appium tests using [WebdriverIO](http://webdriver.io/) on BrowserStack App Automate.

<div align="center">
<img src = "https://www.browserstack.com/images/layout/browserstack-logo-600x315.png" > <br>
<img src = "https://webdriver.io/img/webdriverio.png" height="140px">
</div>

Code samples to get started with Appium tests for your Native App using WebdriverIO.

## Setup

### Requirements

1. Install the latest stable version of Android Studio from [https://developer.android.com/studio](https://developer.android.com/studio) if you use Android virtual device (optional)
2. Install android-platform-tools from CLI [https://developer.android.com/tools](https://developer.android.com/tools)
3. Install appium [https://appium.io/docs/en/2.0/quickstart/install/](https://appium.io/docs/en/2.0/quickstart/install/)
4. Install appium inspector [https://github.com/appium/appium-inspector/releases](https://github.com/appium/appium-inspector/releases)
5. Install JDK latest stable version from here [https://www.oracle.com/java/technologies/javase-jdk16-downloads.html](https://www.oracle.com/java/technologies/javase-jdk16-downloads.html)
6. VS Code [https://code.visualstudio.com/download](https://code.visualstudio.com/download) or other IDE’s
7. Allure for Report Generation from [https://docs.qameta.io/allure/](https://docs.qameta.io/allure/) (optional)
8. Install the latest LTS Node.js - [https://nodejs.org/en/download](https://nodejs.org/en/download/)

### Install the dependencies

First thing first, setup your environment. We will using `appium-doctor` to check which dependencies that needed to be installed. if you haven't install it yet, you can install it globally by npm. After installed then run this command :
```sh
npm appium-doctor --android
```
You'll given this information :
![image](https://github.com/yrvvan/appium-webdriverIO-automation-apps/assets/5118370/77b82a6a-598e-467e-8dbb-ef9b6e1be35b)

We should set environment variables and install necessary dependencies that `appium-doctor` gives us. For example `JAVA_HOME`, `ANDROID_HOME`, etc

For Android tests, run the following command in project's base directory :
```sh
mv package-android.json package.json
npm i
```

## Getting Started

Getting Started with Appium tests using WebdriverIO on BrowserStack couldn't be easier!

### Appium
  - Run your Appium server to enable inspecting element on Appium Inspector by running `appium -p 7070` (for example we're using port 7070)
  - Open your `Appium Inspector` and set your compatibilities like this :
    <img width="1095" alt="Screen Shot 2024-06-03 at 20 38 41" src="https://github.com/yrvvan/appium-webdriverIO-automation-apps/assets/5118370/bb36e8b5-5cfd-4719-b524-659c0e0c098a">
  - You can get `udid` value by run this command `adb devices` (you can use real device by enabling USB debugging in developer options or run virtual device from Android studio)
  - After that click `Start Session`
  - Then you can inspecting your apps element

### Android
  - Local config is available in `wdio.local.conf.js` directory under [Android Config](android/config/)
  - Browserstack config is available in `wdio.browserstack.conf.js` directory under [Android Config](android/config/)
  - Follow the steps outlined in the documentation - [Get Started with your first test on App Automate](https://www.browserstack.com/docs/app-automate/appium/getting-started/nodejs/webdriverio)
  - Give your attention to the value that referred to `.env`, you can add the required value in `.env` file or statically state it in your `...conf.js`

**Note**: For other test frameworks supported by App-Automate refer our [Developer documentation](https://www.browserstack.com/docs/)

## Running your tests
- To run local test, run `npm run local`
- To run parallel tests, run `npm run browserstack`

 Understand how many parallel sessions you need by using our [Parallel Test Calculator](https://www.browserstack.com/automate/parallel-calculator?ref=github)

## Getting Help

If you are running into any issues or have any queries, please check [Browserstack Support page](https://www.browserstack.com/support/app-automate)
