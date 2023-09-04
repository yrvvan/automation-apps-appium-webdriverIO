const { expect } = require('chai');
const homeObject = require('../../../pageObjects/homePage');
const loginObject = require('../../../pageObjects/loginPage');
const searchObject = require('../../../pageObjects/searchProductPage');

const testCase = {
	describe: `Ralali Mobile Apps | Search Flow`,
	positive: {
		success: 'ATAPPS-9 As a user, I can search product by popular search'
	}
};

describe('Ralali Mobile Apps', async () => {
	describe(`${testCase.describe}`, async () => {
		it(testCase.positive.success, async () => {
			await loginObject.txtApprove.click();
			await loginObject.txtMulaiBelanja.click();
			await homeObject.txtCoachmarkSkip.click()
			await homeObject.inputSearchBarHomepage.click();
			await homeObject.inputSearchBar.click();
			await expect(searchObject.btnPopularSearch[2].isDisplayed());
			let popularSearch = await searchObject.btnPopularSearch[2].getText();
			await searchObject.btnPopularSearch[2].click();
			await expect(searchObject.txtSearchResultName.isDisplayed(5000));
			let searchResult = await searchObject.txtSearchResultName.getText();
			await expect(searchResult).to.equal(popularSearch);
		});
	});
});