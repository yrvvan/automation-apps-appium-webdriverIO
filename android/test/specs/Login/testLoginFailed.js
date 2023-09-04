const { expect } = require('chai');
const baseObject = require('../../../pageObjects/basePage');
const homeObject = require('../../../pageObjects/homePage');
const loginObject = require('../../../pageObjects/loginPage');

const testCase = {
	describe: `Ralali Mobile Apps | Login FLow`,
	negative: [
		'ATAPPS-2 As a user, I can not login with wrong email credential'
	]
};

describe('Ralali Mobile Apps', async () => {
	describe(testCase.describe, async () => {
		it(testCase.negative[0], async () => {
			await loginObject.txtApprove.click();
			await loginObject.txtMulaiBelanja.click();
			await homeObject.txtCoachmarkSkip.click();
			await baseObject.iconProfile.click();
			await expect(loginObject.txtMasukHeader.isDisplayed(5000));
			await loginObject.inputEmailField.setValue('nanana@yeye.com');
			await loginObject.inputPasswordField.setValue('skididdiw');
			await loginObject.btnLogin.click();
			await expect(loginObject.txtPopupLoginFailed.isDisplayed(5000));
		});
	});
});