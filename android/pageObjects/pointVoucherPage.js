class pointVoucherPage {
    // Define Element Object
    get txtHeaderTitle() { return $('//android.widget.TextView[@text="Point & Voucher Saya"]') }
    get txtTabListVoucher() { return $('~List Voucher') }
    get txtTabVoucherSaya() { return $('~Voucher Saya') }
    get txtRiwayatPoint() { return $('//android.widget.TextView[@text="Riwayat Point"]') }
    get txtNoVoucher() { return $('//android.widget.TextView[@text="Anda belum memiliki voucher"]') }
    get btnVoucherList() { return $$('//android.widget.TextView[@text="TUKAR"]') }
    get txtMyVoucherCode() { return $('//android.widget.TextView[@text="TOKO47394"]') }
    get txtPointDidapat() { return $('//android.widget.TextView[@text="Point didapat"]') }
    get txtPointDitukar() { return $('//android.widget.TextView[@text="Point ditukar"]') }
    get txtPointTermsCondition() { return $('//android.widget.TextView[@text="Syarat dan Ketentuan"]') }
}

module.exports = new pointVoucherPage();
