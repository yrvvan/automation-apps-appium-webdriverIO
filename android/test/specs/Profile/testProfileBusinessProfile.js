const { expect } = require('chai');
const profilePage = require('../../../pageObjects/profilePage');
const loginModule = require('../moduleLogin');

const testCase = {
	describe: `Ralali Mobile Apps | Profil - Business Profile`,
	positive: [
		'ATAPPS-35 As a user, I can see business profile page'
	]
};

describe('Ralali Mobile Apps', async () => {
	describe(testCase.describe, async () => {
		before('Login', async () => {
			await loginModule.loginBuyer('ROSE');
		});
		it(testCase.positive[0], async () => {
			await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Profil Usaha")').click();
			await expect(profilePage.txtBusinessProfileType.isDisplayed(5000));
			await expect(profilePage.txtBusinessProfileBrandName.isDisplayed(5000));
		});
	});
});