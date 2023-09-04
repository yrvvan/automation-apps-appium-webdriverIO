const { expect } = require('chai');
const baseObject = require('../../../pageObjects/basePage');
const loginObject = require('../../../pageObjects/loginPage');
const registerObject = require('../../../pageObjects/registerPage');
const skipModule = require('../moduleSkipCoachmark');

const testCase = {
	describe: `Ralali Mobile Apps | Login FLow`,
	negative: [
		'ATAPPS-4 As a user, I can not login with invalid OTP'
	]
};

describe('Ralali Mobile Apps', async () => {
	describe(testCase.describe, async () => {
		it(testCase.negative[0], async () => {
			// Starting apps
			await skipModule.skipCoachmark();

			// Test case
			await baseObject.iconProfile.click();
			await expect(loginObject.txtMasukHeader.isDisplayed(5000));
			await loginObject.inputEmailField.setValue('088888888889');
			await loginObject.btnLogin.click();
			await expect(registerObject.txtVerificationMethodHeader.isDisplayed(5000));
			await registerObject.txtSmsVerificationMethod.click();
			await expect(registerObject.txtVerificationPageHeader.isDisplayed(5000));
			for (var i = 0; i < 7; i++) {
				await driver.pressKeyCode(9);
			}
			await expect(loginObject.txtPopupLoginFailed.isDisplayed());
			await expect(loginObject.txtWrongKodeOTP.isDisplayed());
			await loginObject.btnLoginFailedRetry.click();
			await expect(registerObject.txtVerificationPageHeader.isDisplayed(5000));
		});
	});
});