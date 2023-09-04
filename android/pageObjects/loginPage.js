class LoginPage {
    // Define Element Object
    get txtApprove() { return $('//android.widget.TextView[@text="Ya, Saya Setuju"]') }
    get txtMulaiBelanja() { return $('//android.widget.TextView[@text="Mulai Belanja"]') }
    get txtMasukHeader() { return $('//android.widget.TextView[@text="Masuk"]') }
    get inputEmailField() { return $('//android.widget.EditText[@resource-id="emailPhoneInput"]') }
    get inputPasswordField() { return $('//android.widget.EditText[@resource-id="passwordInput"]') }
    get btnLogin() { return $('//android.view.ViewGroup[@resource-id="ralaliLoginButton"]') }
    get btnRegister() { return $('//android.widget.TextView[@resource-id="registerRalali"]') }
    get txtPopupLoginFailed() { return $('//android.widget.TextView[@text="Login gagal"]') }
    get btnLoginFailedRetry() { return $('//android.view.ViewGroup[@resource-id="InfoModalButton"]') }
    get txtSignup() { return $('~registerRalali') }
    get txtWrongKodeOTP() { return $('//android.widget.TextView[@text="Kode OTP yang Anda masukkan salah. Harap cek ulang kembali."]') }
}

module.exports = new LoginPage();
