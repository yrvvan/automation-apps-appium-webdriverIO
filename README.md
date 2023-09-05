# webdriverio-appium-app-browserstack
This repository demonstrates how to run Appium tests using [WebdriverIO](http://webdriver.io/) on BrowserStack App Automate.

<div align="center">
<img src = "https://www.browserstack.com/images/layout/browserstack-logo-600x315.png" > <br>
<img src = "https://webdriver.io/img/webdriverio.png"  height="140px">
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

For Android tests, run the following command in project's base directory :

```sh
mv package-android.json package.json
npm i
```

## Getting Started

Getting Started with Appium tests using WebdriverIO on BrowserStack couldn't be easier!

### Android:
  - Local config is available in `wdio.local.conf.js` directory under [Android Config](android/config/)
  - Browserstack config is available in `wdio.browserstack.conf.js` directory under [Android Config](android/config/)
  - Follow the steps outlined in the documentation - [Get Started with your first test on App Automate](https://www.browserstack.com/docs/app-automate/appium/getting-started/nodejs/webdriverio)

**Note**: For other test frameworks supported by App-Automate refer our [Developer documentation](https://www.browserstack.com/docs/)

## Running your tests
- To run local test, run `npm run local`
- To run parallel tests, run `npm run browserstack`

 Understand how many parallel sessions you need by using our [Parallel Test Calculator](https://www.browserstack.com/automate/parallel-calculator?ref=github)

## Getting Help

If you are running into any issues or have any queries, please check [Browserstack Support page](https://www.browserstack.com/support/app-automate)
