const { expect } = require('chai');
const profilePage = require('../../../pageObjects/profilePage');
const baseObject = require('../../../pageObjects/basePage');
const homeObject = require('../../../pageObjects/homePage');
const loginObject = require('../../../pageObjects/loginPage');

const testCase = {
	describe: `Ralali Mobile Apps | Profil - Refund Detail`,
	positive: [
		'ATAPPS-32 As a user, I can see refund detail'
	]
};

describe(testCase.describe, async () => {
	it(testCase.positive[0], async () => {
		//Login with yedijaezra
		await loginObject.txtApprove.click();
		await loginObject.txtMulaiBelanja.click();
		await homeObject.txtCoachmarkSkip.click();
		await baseObject.iconProfile.click();
		await expect(loginObject.txtMasukHeader.isDisplayed(5000));
		await loginObject.inputEmailField.setValue('yedijaezra@yopmail.com');
		await loginObject.inputPasswordField.setValue('Test123!');
		await loginObject.btnLogin.click();
		// This workaround is for handling you're login with valid credential but failed to login
		if (await loginObject.txtPopupLoginFailed.isDisplayed(2000)) {
			await loginObject.btnLoginFailedRetry.click();
			await loginObject.btnLogin.click();
		}
		//Test Case
		await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Pengembalian Saya")').click();
		await expect(profilePage.btnRefundDone.isDisplayed(5000));
		await profilePage.btnRefundDone.click();
		await expect(profilePage.txtRefundSuccess.isDisplayed(5000));
		});
	});