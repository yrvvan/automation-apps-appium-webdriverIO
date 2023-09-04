class SearchProductPage {
    // Define Element Object
    get btnPopularSearch() { return $$('//android.widget.TextView') }
    get txtSearchResultName() { return $('//android.widget.LinearLayout/android.view.ViewGroup/android.widget.TextView') }
}

module.exports = new SearchProductPage();
