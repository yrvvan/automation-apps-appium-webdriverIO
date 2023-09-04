const { expect } = require('chai');
const profilePage = require('../../../pageObjects/profilePage');
const homeObject = require('../../../pageObjects/homePage');
const loginModule = require('../moduleLogin');

const testCase = {
	describe: `Ralali Mobile Apps | Profil - Logout`,
	positive: [
		'ATAPPS-54 As a user, I can logout'
	]
};

describe('Ralali Mobile Apps', async () => {
	describe(testCase.describe, async () => {
		before('Login', async () => {
			await loginModule.loginBuyer('ROSE');
		});
		it(testCase.positive[0], async () => {
			await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Keluar")').click();
			await expect(profilePage.txtLogoutConfirmation.isDisplayed(5000));
			await profilePage.txtLogoutConfirmationYes.click();
			await expect(homeObject.inputSearchBarHomepage.isDisplayed(5000));
		});
	});
});