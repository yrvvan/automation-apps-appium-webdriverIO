class basePage {
    // Define Element Object
    get iconHome() { return $('//android.widget.TextView[@text="Home"]') }
    get iconDiscovery() { return $('//android.widget.TextView[@text="Discovery"]') }
    get iconKeranjang() { return $('//android.widget.TextView[@text="Keranjang"]') }
    get iconChat() { return $('//android.widget.TextView[@text="Chat"]') }
    get iconProfile() { return $('//android.widget.TextView[@text="Profil"]') }
}

module.exports = new basePage();
