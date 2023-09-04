const { expect } = require('chai');
const settingPage = require('../../../pageObjects/settingsPage');
const loginModule = require('../moduleLogin');

const testCase = {
	describe: `Ralali Mobile Apps | Settings - Update Address`,
	positive: [
		'ATAPPS-19 As a user, I can update my address in setting'
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
			await settingPage.txtAddressMenu.click();
			await expect(settingPage.txtAddressHeader.isDisplayed(5000));
			await settingPage.btnAddressChange[1].click();
			await expect(settingPage.txtAddressChangeHeader.isDisplayed(5000));
			await settingPage.inputAddressAlias.setValue('Address Alias AT-Apps');
			await settingPage.inputAddressName.setValue('Address Name AT-Apps');
			await settingPage.inputAddressDescription.setValue('Complete Address AT-Apps');
			await settingPage.btnAddressSubmit.click();
			await expect(settingPage.txtAddressHeader.isDisplayed(5000));
		});
	});
});