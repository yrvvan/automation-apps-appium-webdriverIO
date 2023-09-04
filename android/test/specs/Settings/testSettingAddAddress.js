const { expect } = require('chai');
const settingPage = require('../../../pageObjects/settingsPage');
const loginModule = require('../moduleLogin');
const { DELETE_ADDRESS } = require('../../../../seed_data/addOrderAddress');

let sqlPage, connCore;
if (process.env.RALALI_CONN_STAGE == 'local') {
	sqlPage = require('../../../../helper/sqlsshConfig.js');
} else {
	sqlPage = require('../../../../helper/sqlConfig');
}

const testCase = {
	describe: `Ralali Mobile Apps | Settings - Add Address`,
	positive: [
		'ATAPPS-20 As a user, I can add a new address in setting'
	]
};

describe('Ralali Mobile Apps', async () => {
	describe(testCase.describe, async () => {
		before('Login', async () => {
			connCore = await sqlPage.connectDbCore();
			await sqlPage.executeSql(connCore, DELETE_ADDRESS);
			await sqlPage.closeDb(connCore);

			await loginModule.loginBuyer('ROSE');
		});
		it(testCase.positive[0], async () => {
			await settingPage.iconSetting.click();
			await expect(settingPage.txtSettingsHeader.isDisplayed(5000));
			await settingPage.txtAddressMenu.click();
			await expect(settingPage.txtAddressHeader.isDisplayed(5000));
			await settingPage.iconAddressAdd.click();
			await expect(settingPage.txtAddressAddHeader.isDisplayed(5000));
			await settingPage.inputAddressAlias.setValue('Address Alias AT-Apps');
			await settingPage.inputAddressName.setValue('Address Name AT-Apps');
			await settingPage.inputAddressPhone.setValue('08987014531');
			await settingPage.inputAddressDescription.setValue('Complete Address AT-Apps');
			await settingPage.inputAddressDistrict.click();
			await settingPage.inputAddressSubdistrict.setValue('Kalideres');
			await settingPage.inputAddressSubdistrictResult.click();
			await expect(settingPage.inputAddressPostal.isDisplayed(5000));
			await settingPage.inputAddressPostal.click();
			await settingPage.inputAddressPostal11850.click();
			await settingPage.btnAddressSubmit.click();
			await expect(settingPage.txtAddressHeader.isDisplayed(5000));
		});
	});
});