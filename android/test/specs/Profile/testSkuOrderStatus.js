const { expect } = require('chai');
const profilePage = require('../../../pageObjects/profilePage');
const loginModule = require('../moduleLogin');

const testCase = {
	describe: `Ralali Mobile Apps | Profil - Business Profile`,
	positive: [
		'ATAPPS-25 As a user, I can see SKU order status'
	]
};

describe('Ralali Mobile Apps', async () => {
	describe(testCase.describe, async () => {
		before('Login', async () => {
			await loginModule.loginBuyer('ROSE');
		});
		it(testCase.positive[0], async () => {
			await expect(profilePage.txtWaitingForPayment[0].isDisplayed(5000));
			await expect(profilePage.txtPaid[0].isDisplayed(5000));
			await expect(profilePage.txtDelivery.isDisplayed(5000));
			await expect(profilePage.txtReviewed.isDisplayed(5000));
			await profilePage.txtWaitingForPayment[0].click();
			await expect(profilePage.txtWaitingForPaymentOrder.isDisplayed(5000));
			await profilePage.txtPaid[0].click();
			await expect(profilePage.txtPaidOrder.isDisplayed(5000));
			await driver.back();
			await profilePage.txtDelivery.click();
			await expect(profilePage.txtDeliveryOrder.isDisplayed(5000));
			await profilePage.txtReviewed.click();
			await expect(profilePage.txtReviewedOrder.isDisplayed(5000));
		});
	});
});