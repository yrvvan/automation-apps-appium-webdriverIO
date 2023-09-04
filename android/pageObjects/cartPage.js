class CartPage {
    // Define Element Object
    get txtCartPageTitle() { return $('//android.widget.TextView[@text="Keranjang Belanja"]') }
    get txtCartCounter() { return $('//android.widget.EditText[@resource-id="editPicker"]') }
    get txtCartDecrease() { return $('//android.view.ViewGroup[@resource-id="minPress"]') }
    get txtCartIncrease() { return $('//android.view.ViewGroup[@resource-id="plusPressed"]') }
    get btnCheckout() { return $('~btnCheckout') }
}

module.exports = new CartPage();