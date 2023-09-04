class CheckoutPage {
    // Define Element Object
    get txtCheckoutHeader() {return $('//android.widget.TextView[@text="Checkout"]')}
    get inputVoucherField() {return $('//android.view.ViewGroup[@resource-id="voucher-button"]')}
    get btnPay() {return $('~btnPay')}
}

module.exports = new CheckoutPage();