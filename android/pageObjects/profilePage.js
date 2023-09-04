class ProfilePage {
    // Define Element Object
    get txtWalletSection() { return $('//android.view.ViewGroup[@resource-id="wallet-button"]') }
    get txtPointSection() { return $('//android.view.ViewGroup[@resource-id="point-balance"]') }
    get txtPointVoucher() { return $('//android.widget.TextView[@text="Point & Voucher Saya"]') }
    get txtRefund() { return $('//android.widget.TextView[@text="Pengembalian Saya"]') }
    get txtRefundEmpty() { return $('//android.widget.TextView[@text="Maaf, Tidak Ada Data Yang Ditampilkan."]') }
    get txtReferral() { return $('//android.widget.TextView[@text="Referral Saya"]') }
    get txtReferralCaption() { return $('//android.widget.TextView[@text="Referensikan membership"]') }
    get txtReferralCode() { return $('//android.widget.EditText[@text="ROSE92384"]') }
    get txtRatingReview() { return $('//android.widget.TextView[@text="Ulasan Saya"]') }
    get txtRatingReviewEmpty() { return $('//android.widget.TextView[@text="Belum ada daftar ulasan"]') }
    get txtBusinessProfile() { return $('//android.widget.TextView[@text="Profil Usaha"]') }
    get txtBusinessProfileType() { return $('//android.widget.TextView[@text="Bisnis"]') }
    get txtBusinessProfileBrandName() { return $('//android.widget.TextView[@text="Rose Store"]') }
    get txtContactUs() { return $('//android.widget.TextView[@text="Hubungi Kami"]') }
    get txtContactUsEmail() { return $('//android.widget.TextView[@text="hello@ralali.com"]') }
    get txtContactUsPhone() { return $('//android.widget.TextView[@text="1500 465"]') }
    get txtLogout() { return $('//android.widget.TextView[@text="Keluar"]') }
    get txtLogoutConfirmation() { return $('//android.widget.TextView[@text="Apakah Anda ingin keluar?"]') }
    get txtLogoutConfirmationYes() { return $('//android.widget.Button[@text="YA"]') }
    get btnNotRequested() { return $('//android.widget.TextView[@text="Belum Diajukan"]') }
    get txtModalNotRequested() { return $('//android.widget.TextView[@text="Proses Pengembalian Belum Diajukan"]') }
    get btnRefundDone() { return $('//android.widget.TextView[@text="Selesai"]') }
    get txtRefundSuccess() { return $('//android.widget.TextView[@text="Pengembalian Berhasil"]') }
    get txtRestokSekarang() { return $('//android.widget.TextView[@text="Restok Sekarang!"]') }
    get iconCloseRestokSekarang() { return $('//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView') }
    get txtWaitingForPayment() { return $$('//android.widget.TextView[@text="Menunggu Pembayaran"]') }
    get txtPaid() { return $$('//android.widget.TextView[@text="Lunas"]') }
    get txtDelivery() { return $('//android.widget.TextView[@text="Sedang Diproses"]') }
    get txtReviewed() { return $('//android.widget.TextView[@text="Beri Ulasan"]') }
    get txtSuccess() { return $('//android.widget.TextView[@text="Sukses"]') }
    get txtRejected() { return $('//android.widget.TextView[@text="Dibatalkan"]') }
    get txtFailed() { return $('//android.widget.TextView[@text="Gagal"]') }
    get txtSeeAll() { return $$('//android.widget.TextView[@text="Lihat Semua"]') }
    get txtWaitingForPaymentOrder() { return $('//android.widget.TextView[@text="6656/ORD/21/08/2023"]') }
    get txtPaidOrder() { return $('//android.widget.TextView[@text="6656/ORD/21/08/2023"]') }
    get txtDeliveryOrder() { return $('//android.widget.TextView[@text="0745/ORD/10/08/2023"]') }
    get txtReviewedOrder() { return $('//android.widget.TextView[@text="7737/ORD/10/08/2023"]') }
    get txtDigitalWaitingForPaymentOrder() { return $('//android.widget.TextView[@text="1236/DG/22/08/2023"]') }
    get txtFailedOrder() { return $('//android.widget.TextView[@text="1118/DG/22/08/2023"]') }
}

module.exports = new ProfilePage();
