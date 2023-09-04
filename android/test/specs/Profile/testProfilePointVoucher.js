const { expect } = require('chai');
const pointVoucherPage = require('../../../pageObjects/pointVoucherPage');
const loginModule = require('../moduleLogin');

const testCase = {
	describe: `Ralali Mobile Apps | Profil - Point & Voucher`,
	positive: [
		'ATAPPS-27 As a user, I can see list general voucher',
		'ATAPPS-50 As a user, I can see detail general voucher',
		'ATAPPS-28 As a user, I can see list of my voucher',
		'ATAPPS-51 As a user, I can see detail of my voucher',
		'ATAPPS-30 As a user, I can see point history'
	]
};

describe('Ralali Mobile Apps', async () => {
	describe(testCase.describe, async () => {
		before('Login', async () => {
			await loginModule.loginBuyer('ROSE');
		});
		it(testCase.positive[0], async () => {
			await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Point & Voucher Saya")').click();
			await expect(pointVoucherPage.txtHeaderTitle.isDisplayed(5000));
			await expect(pointVoucherPage.btnVoucherList.isDisplayed(5000));
		});
		it(testCase.positive[1], async () => {
			await pointVoucherPage.btnVoucherList[0].click();
			await expect(pointVoucherPage.txtPointTermsCondition.isDisplayed(5000));
			await driver.back();
		});
		it(testCase.positive[2], async () => {
			await pointVoucherPage.txtTabVoucherSaya.click();
			await expect(pointVoucherPage.txtMyVoucherCode.isDisplayed(5000));
		});
		it(testCase.positive[3], async () => {
			await pointVoucherPage.txtMyVoucherCode.click();
			await expect(pointVoucherPage.txtPointTermsCondition.isDisplayed(5000));
			await expect(pointVoucherPage.txtMyVoucherCode.isDisplayed(5000));
			await driver.back();
		});
		it(testCase.positive[4], async () => {
			await pointVoucherPage.txtRiwayatPoint.click();
			await expect(pointVoucherPage.txtPointDidapat.isDisplayed(5000));
			await expect(pointVoucherPage.txtPointDitukar.isDisplayed(5000));
		});
	});
});