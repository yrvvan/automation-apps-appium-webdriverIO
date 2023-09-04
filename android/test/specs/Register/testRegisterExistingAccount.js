require('dotenv').config();
const { expect } = require('chai');
const baseObject = require('../../../pageObjects/basePage');
const homeObject = require('../../../pageObjects/homePage');
const loginObject = require('../../../pageObjects/loginPage');
const registerObject = require('../../../pageObjects/registerPage');

const testCase = {
	describe: `Ralali Mobile Apps | Register FLow`,
	negative: [
		'ATAPPS-57 As a user, I can not register using existing account'
	]
};

describe(testCase.describe, async () => {
	it(testCase.negative[0], async () => {
		// Starting apps
		await loginObject.txtApprove.click();
		await loginObject.txtMulaiBelanja.click();
		await homeObject.txtCoachmarkSkip.click();
		// Test case
		await baseObject.iconProfile.click();
		await loginObject.txtSignup.click();
		await expect(registerObject.txtRegistrasiHeader.isDisplayed());
        await registerObject.txtBusinessType.click();
		await registerObject.inputFieldRegister[0].addValue('yeye');
		await registerObject.inputFieldRegister[1].addValue('yedijaezra@yopmail.com');
        await registerObject.inputFieldPassword.setValue('@Xeesoxee123');
        await registerObject.inputFieldConfirmPassword.setValue('@Xeesoxee123');
        await registerObject.checkboxTermAndConditions.click();
		await registerObject.btnLanjutkan.click();
        await expect(registerObject.txtPopupAccountAlreadyExist.isDisplayed());
	});
});