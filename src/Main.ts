import * as Plugin from 'iitcpluginkit'

class Main implements Plugin.Class {

    init() {
        console.log('KuKuHelperFontawesome ' + VERSION)

        window.addHook('iitcLoaded', this.onIitcLoaded)
    }

    private onIitcLoaded = () => {
        const script = document.createElement('script')

        script.src = 'https://kit.fontawesome.com/f02f77014d.js'
        script.crossOrigin = 'anonymous'

        document.head.appendChild(script)
    }
}

Plugin.Register(new Main, 'KuKuHelperFontawesome')
