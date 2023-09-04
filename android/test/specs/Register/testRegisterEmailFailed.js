const { expect } = require('chai');
const baseObject = require('../../../pageObjects/basePage');
const homeObject = require('../../../pageObjects/homePage');
const loginObject = require('../../../pageObjects/loginPage');
const registerObject = require('../../../pageObjects/registerPage');

const testCase = {
	describe: `Ralali Mobile Apps | Register Flow`,
	negative: {
		failed: `ATAPPS-55 As a user, I shouldn't be able to register using invalid email`
	}
};

describe(testCase.describe, async () => {
	it(testCase.negative.failed, async () => {
		// Starting apps
		await loginObject.txtApprove.click();
		await loginObject.txtMulaiBelanja.click();
		await homeObject.txtCoachmarkSkip.click();

		// Test case
		await baseObject.iconProfile.click();
		await loginObject.txtSignup.click();
		await expect(registerObject.txtRegistrasiHeader.isDisplayed());
		await registerObject.inputFieldRegister[0].addValue('AT-APPS User');
		await registerObject.inputFieldRegister[1].addValue('at-apps#gmail.com');
		await registerObject.btnLanjutkan.isEnabled(false);
	});
});