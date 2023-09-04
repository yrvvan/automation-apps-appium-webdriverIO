const { expect } = require('chai');
const settingPage = require('../../../pageObjects/settingsPage');
const registerObject = require('../../../pageObjects/registerPage');
const loginModule = require('../moduleLogin');

const testCase = {
	describe: `Ralali Mobile Apps | Settings - Update Profile`,
	positive: [
		'ATAPPS-18 As a user, I can update my profile in setting'
	]
};

describe('Ralali Mobile Apps', async () => {
	describe(testCase.describe, async () => {
		before('Login', async () => {
			await loginModule.loginBuyer('ROSE');
		});
		it(testCase.positive[0], async () => {
			await settingPage.iconSetting.click();
			await expect(settingPage.txtSettingsHeader.isDisplayed(5000));
			await settingPage.txtProfileMenu.click();
			await expect(settingPage.txtProfileHeader.isDisplayed(5000));
			await settingPage.txtProfileGender.click();
			await settingPage.txtProfileMale.click();
			await settingPage.txtProfileHandphone.click();
			await expect(registerObject.txtVerificationMethodHeader.isDisplayed(5000));
			await registerObject.txtEmailVerificationMethod.click();
			await expect(registerObject.txtVerificationPageHeader.isDisplayed(5000));
		});
	});
});