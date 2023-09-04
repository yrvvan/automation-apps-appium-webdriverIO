class ProductPage {
    // Define Element Object
    get txtTabProduct() { return $('//android.view.View[@content-desc="Produk"]/android.view.ViewGroup') }
    get txtProductCard() { return $('//android.widget.TextView[@text="Thor The Dark World 2"]') }
    get btnProductBuy() { return $('~btnBuyNow') }
    get btnAddToCart() { return $('//android.view.ViewGroup[@content-desc="btnAddToCart"]') }
    get iconGoToCart() { return $('~btnNavigateToCart') }
}

module.exports = new ProductPage();
