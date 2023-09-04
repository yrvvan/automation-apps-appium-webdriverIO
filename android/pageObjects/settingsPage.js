class SettingsPage {
    // Define Element Object
    get iconSetting() { return $('//android.view.ViewGroup[@resource-id="setting-icon"]') }
    get txtSettingsHeader() { return $('//android.widget.TextView[@text="Setting"]') }
    get txtProfileMenu() { return $('//android.widget.TextView[@text="Informasi Diri"]') }
    get txtProfileHeader() { return $('//android.widget.TextView[@text="Ubah Profil"]') }
    get txtProfileGender() { return $('//android.view.ViewGroup[@resource-id="picker-button"]') }
    get txtProfileMale() { return $('//android.view.ViewGroup[@resource-id="picker-Pria"]') }
    get txtProfileHandphone() { return $('//android.view.ViewGroup[@resource-id="phone-input"]') }
    get txtAddressMenu() { return $('//android.widget.TextView[@text="Alamat"]') }
    get txtAddressHeader() { return $('//android.widget.TextView[@text="Alamat"]') }
    get btnAddressChange() { return $$('//android.widget.TextView[@text="Ubah"]') }
    get txtAddressChangeHeader() { return $('//android.widget.TextView[@text="Ubah Alamat"]') }
    get inputAddressAlias() { return $('//android.widget.EditText[@resource-id="text-input-alias-input"]') }
    get inputAddressName() { return $('//android.widget.EditText[@resource-id="text-input-name-input"]') }
    get inputAddressDescription() { return $('//android.widget.EditText[@resource-id="text-input-address-input"]') }
    get inputAddressPhone() { return $('//android.widget.EditText[@resource-id="text-input-phone-input"]') }
    get inputAddressDistrict() { return $('//android.view.ViewGroup[@resource-id="dcp-button"]') }
    get inputAddressSubdistrict() { return $('//android.widget.EditText[@resource-id="text-input-dcp-input"]') }
    get inputAddressSubdistrictResult() { return $('//android.view.ViewGroup[@resource-id="dcp-item-0"]') }
    get inputAddressPostal() { return $('//android.view.ViewGroup[@resource-id="picker-button"]') }
    get inputAddressPostal11850() { return $('//android.view.ViewGroup[@resource-id="picker-11850"]') }
    get btnAddressSubmit() { return $('//android.view.ViewGroup[@resource-id="submit-address"]') }
    get iconAddressAdd() { return $('//android.widget.LinearLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView') }
    get txtAddressAddHeader() { return $('//android.widget.TextView[@text="Tambah Alamat"]') }

}

module.exports = new SettingsPage();
