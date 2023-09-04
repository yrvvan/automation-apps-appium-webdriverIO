require('dotenv').config();
const { expect } = require('chai');
const baseObject = require('../../../pageObjects/basePage');
const homeObject = require('../../../pageObjects/homePage');
const loginObject = require('../../../pageObjects/loginPage');
const registerObject = require('../../../pageObjects/registerPage');
const profileObject = require('../../../pageObjects/profilePage');
const { DELETE_ACCOUNT_PHONE_NUMBER, DELETE_USERS_PHONE_NUMBER, GET_ACCOUNT_PHONE_NUMBER } = require('../../../seed_data/registerUser');

let sqlPage, connCore, connAuth;
if (process.env.RALALI_CONN_STAGE == 'local') {
	sqlPage = require('../../../helper/sqlsshConfig.js');
} else {
	sqlPage = require('../../../helper/sqlConfig');
}

const testCase = {
	describe: `Ralali Mobile Apps | Register FLow`,
	negative: [
		'ATAPPS-6 As a user, I can register using phone number and valid OTP'
	]
};

describe('Ralali Mobile Apps', async () => {
	describe(testCase.describe, async () => {
		before('Delete Account', async () => {
			connCore = await sqlPage.connectDbCore();
			await sqlPage.executeSql(connCore, DELETE_USERS_PHONE_NUMBER);
			await sqlPage.closeDb(connCore);

			connAuth = await sqlPage.connectDbAuthService();
			var account = await sqlPage.executeSql(connAuth, GET_ACCOUNT_PHONE_NUMBER);
			if (typeof account[0] !== 'undefined') {
				await driver.pause(3000);
				await sqlPage.executeSql(connAuth, `DELETE FROM account_platform WHERE account_id=${account[0].ID};`);
				await driver.pause(3000);
				await sqlPage.executeSql(connAuth, DELETE_ACCOUNT_PHONE_NUMBER);
			}
			await sqlPage.closeDb(connAuth);
		});
		it(testCase.negative[0], async () => {
			await loginObject.txtApprove.click();
			await loginObject.txtMulaiBelanja.click();
			await homeObject.txtCoachmarkSkip.click();
			await baseObject.iconProfile.click();
			await expect(loginObject.txtMasukHeader.isDisplayed(5000));
			await loginObject.txtSignup.click();
			await expect(registerObject.txtIndividuType.isDisplayed(5000));
			await expect(registerObject.txtBusinessType.isDisplayed(5000));
			await registerObject.txtIndividuType.click();
			await registerObject.inputFieldRegister[0].addValue('AT-APPS User');
			await registerObject.inputFieldRegister[1].addValue('088888888888');
			await registerObject.checkboxTermAndConditions.click();
			await registerObject.btnLanjutkan.click();
			await expect(registerObject.txtVerificationMethodHeader.isDisplayed(5000));
			await registerObject.txtWhatsappVerificationMethod.click();
			await expect(registerObject.txtVerificationPageHeader.isDisplayed(5000));
			for (var i = 0; i < 6; i++) {
				await driver.pressKeyCode(8);
			}
			await expect(profileObject.txtWalletSection.isDisplayed(5000));
			await expect(profileObject.txtPointSection.isDisplayed(5000));
		});
	});
});