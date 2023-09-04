require('dotenv').config();
const { expect } = require('chai');
const homeObject = require('../../../pageObjects/homePage');
const loginObject = require('../../../pageObjects/loginPage');

const testCase = {
	describe: `Ralali Mobile Apps | Search Flow`,
	positive: {
		success: 'ATAPPS-8 As a user, I can search seller by seller name',
	}
};

describe(testCase.describe, async () => {
	it(testCase.positive.success, async () => {
		await loginObject.txtApprove.click();
		await loginObject.txtMulaiBelanja.click();
		await homeObject.txtCoachmarkSkip.click();
		await homeObject.inputSearchBarHomepage.click();
		await homeObject.inputSearchBar.setValue('billah')
		await homeObject.txtSearchTokoBillah.click();
		await expect(homeObject.txtSearchTokoBillah.isDisplayed(5000));
	});
});