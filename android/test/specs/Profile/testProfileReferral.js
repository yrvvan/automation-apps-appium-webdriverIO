const { expect } = require('chai');
const profilePage = require('../../../pageObjects/profilePage');
const loginModule = require('../moduleLogin');

const testCase = {
	describe: `Ralali Mobile Apps | Profil - Referral`,
	positive: [
		'ATAPPS-33 As a user, I can see my referral page'
	]
};

describe('Ralali Mobile Apps', async () => {
	describe(testCase.describe, async () => {
		before('Login', async () => {
			await loginModule.loginBuyer('ROSE');
		});
		it(testCase.positive[0], async () => {
			await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Pengembalian Saya")').click();
			await expect(profilePage.txtReferralCaption.isDisplayed(5000));
			await expect(profilePage.txtReferralCode.isDisplayed(5000));
		});
	});
});