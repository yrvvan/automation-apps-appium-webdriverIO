const { expect } = require('chai');
const profilePage = require('../../../pageObjects/profilePage');
const loginModule = require('../moduleLogin');

const testCase = {
	describe: `Ralali Mobile Apps | Profil - Business Profile`,
	positive: [
		'ATAPPS-26 As a user, I can see Digital Goods order status'
	]
};

describe('Ralali Mobile Apps', async () => {
	describe(testCase.describe, async () => {
		before('Login', async () => {
			await loginModule.loginBuyer('ROSE');
		});
		it(testCase.positive[0], async () => {
			await expect(profilePage.txtWaitingForPayment[1].isDisplayed(5000));
			await expect(profilePage.txtPaid[1].isDisplayed(5000));
			await expect(profilePage.txtSuccess.isDisplayed(5000));
			await expect(profilePage.txtRejected.isDisplayed(5000));
			await profilePage.txtWaitingForPayment[1].click();
			await expect(profilePage.txtDigitalWaitingForPaymentOrder.isDisplayed(5000));
			await driver.back();
			await profilePage.txtRejected.click();
			await expect(profilePage.txtRejected.isDisplayed(5000));
			await profilePage.txtFailed.click();
			await expect(profilePage.txtFailedOrder.isDisplayed(5000));
		});
	});
});