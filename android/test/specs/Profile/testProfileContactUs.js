const { expect } = require('chai');
const profilePage = require('../../../pageObjects/profilePage');
const loginModule = require('../moduleLogin');

const testCase = {
	describe: `Ralali Mobile Apps | Profil - Contact Us`,
	positive: [
		'ATAPPS-36 As a user, I can see contact us'
	]
};

describe('Ralali Mobile Apps', async () => {
	describe(testCase.describe, async () => {
		before('Login', async () => {
			await loginModule.loginBuyer('ROSE');
		});
		it(testCase.positive[0], async () => {
			await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Hubungi Kami")').click();
			await expect(profilePage.txtContactUsEmail.isDisplayed(5000));
			await expect(profilePage.txtContactUsPhone.isDisplayed(5000));
		});
	});
});