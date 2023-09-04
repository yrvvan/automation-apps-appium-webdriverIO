const { expect } = require('chai');
const baseObject = require('../../../pageObjects/basePage');
const homeObject = require('../../../pageObjects/homePage');
const productObject = require('../../../pageObjects/productPage');
const cartObject = require('../../../pageObjects/cartPage');
const checkoutObject = require('../../../pageObjects/checkoutPage');
const loginModule = require('../moduleLogin');

const testCase = {
	describe: `Ralali Mobile Apps | Checkout FLow`,
	positive: {
		success: 'As a User, I should be able to See PDP'
	}
};

describe('Ralali Mobile Apps', async () => {
	describe(`${testCase.describe}`, async () => {
		before('Login', async () => {
			await loginModule.loginBuyer('ROSE');
		})
		it(testCase.positive.success, async () => {
			await baseObject.iconHome.click();
			await homeObject.inputSearchBarHomepage.click();
			await homeObject.inputSearchBar.setValue('big mart sirop');
			await homeObject.txtSearchResult.click();
			await productObject.txtTabProduct.click();
			await productObject.txtProductCard.click();

			await expect(productObject.btnProductBuy.isDisplayed(5000));
			await productObject.btnProductBuy.click();
			await productObject.btnAddToCart.click();
			await productObject.iconGoToCart.click();

			await expect(cartObject.btnCheckout.isDisplayed(5000));
			await cartObject.btnCheckout.click();
			await expect(checkoutObject.btnPay.isDisplayed(5000));
		});
	});
});