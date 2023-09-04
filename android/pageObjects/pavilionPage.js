class pavilionPage {
    // Define Element Object
    get txtKebutuhanBisnis() { return $('//android.widget.TextView[@text="Kebutuhan Bisnis"]') }
    get imgBusinessSolution() { return $('~imgBgBusinessSolution') }
    get btnPavilion() { return $$('//android.view.ViewGroup[@resource-id="filter-tag"]') }
}

module.exports = new pavilionPage();