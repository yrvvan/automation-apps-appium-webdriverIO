require('dotenv').config();
const { expect } = require('chai');
const baseObject = require('../../../pageObjects/basePage');
const pavilionPage = require('../../../pageObjects/pavilionPage.js');
const loginModule = require('../moduleLogin');

const testCase = {
	describe: `Ralali Mobile Apps | Pavilion`,
	positive: {
		success: 'ATAPPS-10 As a user, I can access Pavilion Horeca page'
	}
};

describe(testCase.describe, async () => {
	before('Login', async () => {
		await loginModule.loginBuyer('ROSE');
	});
	it(testCase.positive.success, async () => {
		await baseObject.iconHome.click();
		await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Kebutuhan Bisnis")').click();
		await pavilionPage.btnPavilion[1].click();
		await pavilionPage.btnPavilion[0].click();
		await pavilionPage.btnPavilion[2].click();
		await expect(pavilionPage.imgBusinessSolution.isDisplayed(5000));
	});
});