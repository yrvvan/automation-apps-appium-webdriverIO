class HomePage {
    // Define Element Object
    get inputSearchBarHomepage() { return $('//android.view.ViewGroup[@content-desc="searchBar"]') }
    get inputSearchBar() { return $('//android.widget.EditText[@content-desc="searchBarInput"]') }
    get txtSearchResult() { return $('//android.widget.TextView[@text="BIG Mart Sirop3"]') }
    get txtCoachmarkSkip() { return $('//*[@text="SKIP"]') }
    get txtSearchTokoBillah() { return $('//android.widget.TextView[@text="Toko Billah"]') }
}

module.exports = new HomePage();
