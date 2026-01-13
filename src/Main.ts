import * as Plugin from "iitcpluginkit";


class KuKuHelperFontawesome implements Plugin.Class {

    init() {
        console.log("KuKuHelperFontawesome " + VERSION);

        

        // FILL ME
    }

}

/**
 * use "main" to access you main class from everywhere
 * (same as window.plugin.KuKuHelperFontawesome)
 */
export const main = new KuKuHelperFontawesome();
Plugin.Register(main, "KuKuHelperFontawesome");
