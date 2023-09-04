require('dotenv').config();
const homeObject = require('../../pageObjects/homePage');
const loginObject = require('../../pageObjects/loginPage');

const skipCoachmark = async () => {
	await loginObject.txtApprove.click();
	await loginObject.txtMulaiBelanja.click();
	await homeObject.txtCoachmarkSkip.click();
};

module.exports = {
	skipCoachmark
}