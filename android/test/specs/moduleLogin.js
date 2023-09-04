require('dotenv').config();
const { expect } = require('chai');
const baseObject = require('../../pageObjects/basePage');
const homeObject = require('../../pageObjects/homePage');
const loginObject = require('../../pageObjects/loginPage');
const profileObject = require('../../pageObjects/profilePage');

const loginBuyer = async (username) => {
	await loginObject.txtApprove.click();
	await loginObject.txtMulaiBelanja.click();
	await homeObject.txtCoachmarkSkip.click();
	await baseObject.iconProfile.click();
	await expect(loginObject.txtMasukHeader.isDisplayed(5000));
	await loginObject.inputEmailField.setValue(process.env[`EMAIL_${username}`]);
	await loginObject.inputPasswordField.setValue(process.env[`PASSWORD_${username}`]);
	await loginObject.btnLogin.click();
	// This workaround is for handling you're login with valid credential but failed to login
	if (await loginObject.txtPopupLoginFailed.isDisplayed(2000)) {
		await loginObject.btnLoginFailedRetry.click();
		await loginObject.btnLogin.click();
	}
	// This workaround is for handling when repetitive order popup shown up
	await driver.pause(3000);
	if (await profileObject.txtRestokSekarang.isDisplayed(5000)) {
		await profileObject.iconCloseRestokSekarang.click();
	}
	await expect(profileObject.txtWalletSection.isDisplayed(5000));
	await expect(profileObject.txtPointSection.isDisplayed(5000));
};

module.exports = {
	loginBuyer
}