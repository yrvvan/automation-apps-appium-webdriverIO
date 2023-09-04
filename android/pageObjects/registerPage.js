class RegisterPage {
    // Define Element Object
    get txtRegistrasiHeader() { return $('//android.widget.TextView[@text="Registrasi"]') }
    get txtIndividuType() { return $('//android.widget.TextView[@text="Belanja sebagai individu"]') }
    get txtBusinessType() { return $('//android.widget.TextView[@text="Belanja untuk kebutuhan bisnis"]') }
    get inputFieldRegister() { return $$('//android.widget.EditText') }
    get inputFieldPassword() { return $('//android.widget.EditText[@resource-id="passwordInput"]') }
    get inputFieldConfirmPassword() { return $('//android.widget.EditText[@resource-id="confirmPasswordInput"]') }
    get checkboxTermAndConditions() { return $('~checkboxRegisterTnC') }
    get btnLanjutkan() { return $('//android.widget.TextView[@text="LANJUTKAN"]') }
    get txtVerificationMethodHeader() { return $('//android.widget.TextView[@text="Pilih Metode Verifikasi"]') }
    get txtSmsVerificationMethod() { return $('//android.view.ViewGroup[@resource-id="channel-sms"]') }
    get txtWhatsappVerificationMethod() { return $('//android.view.ViewGroup[@resource-id="channel-whatsapp"]') }
    get txtEmailVerificationMethod() { return $('//android.view.ViewGroup[@resource-id="channel-email"]') }
    get txtVerificationPageHeader() { return $('//android.widget.TextView[@text="Masukkan Kode Verifikasi"]') }
    get inputFieldOTP() { return $$('//android.view.ViewGroup[@text=""]') }
    get txtPopupAccountAlreadyExist() { return $('//android.widget.TextView[@text="Akun Anda telah terdaftar pada sistem kami."]') }
}

module.exports = new RegisterPage();
