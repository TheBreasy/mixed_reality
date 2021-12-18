(function () {
    'use strict';

    // hide enviso-style instantly
    var styleEl = document.createElement('style');
    styleEl.innerHTML = 'enviso-style { display:none; }';
    var fsEl = document.querySelector('script');
    fsEl.parentNode.insertBefore(styleEl, fsEl);

    // Find basePath of the Ticketing Widget source
    var currentScriptElement = document.currentScript;
    if(!currentScriptElement) { // Fallback for IE11
        var scriptsLikeCurrent = document.querySelectorAll('script[src*="/loader.js"]');
        currentScriptElement = scriptsLikeCurrent[scriptsLikeCurrent.length - 1];
    }
    var currentScriptElementUrl = currentScriptElement.src;
    let basePath = currentScriptElementUrl.substring(0, currentScriptElementUrl.lastIndexOf('/'));
    if (basePath.indexOf('http://') !== 0 && basePath.indexOf('https://') !== 0 && basePath.indexOf('.') !== 0)
        basePath = '';

    // add basepath to custom settings
    window.enviso = window.enviso || {};
    window.enviso.settings = window.enviso.settings || {};
    window.enviso.settings.basePath = basePath;

    // function to load scripts
    function addScript(src, callback)
    {
        var script = document.createElement('script');
        script.async = false;
        if (callback)
            script.addEventListener('load', callback.bind(this));
        currentScriptElement.parentNode.appendChild(script); // non-blocking
        script.src = src;  // set its src to the provided URL
    }

    // Feature detect ESM support.
    function supportsEsm()
    {
        return 'noModule' in HTMLScriptElement.prototype;
    }

    // Feature detect Intl support (IE11)
    function supportsIntl()
    {
        try
        {
            (new Date()).toLocaleString('en-US', {
                timeZone: 'Europe/Brussels'
            });
            return true;
        }
        catch (err)
        {
            return false;
        }
    }

    // Load polyfills

    // - generic polyfills
    addScript(supportsEsm() ? basePath + '/build-ts/modern/polyfills.js' : basePath + '/build-ts/polyfills.js');

    // - web components polyfills
    if (((!('attachShadow' in Element.prototype && 'getRootNode' in Element.prototype) || (window.ShadyDOM && window.ShadyDOM.force)) || (!window.customElements || window.customElements.forcePolyfill)))
        addScript(supportsEsm() ? basePath + '/build-ts/modern/polyfills-webcomponents.js' : basePath + '/build-ts/polyfills-webcomponents.js');

    // - intl support (IE11) polyfill
    if (!supportsIntl())
        addScript(supportsEsm() ? basePath + '/build-ts/modern/polyfills-intl.js' : basePath + '/build-ts/polyfills-intl.js');

    // - fetch polyfill
    if (!window.fetch)
        addScript(supportsEsm() ? basePath + '/build-ts/modern/polyfills-fetch.js' : basePath + '/build-ts/polyfills-fetch.js');

    // Load System.JS if required
    if (!supportsEsm())
        addScript(basePath + '/build-ts/system.js');

    // Prime the loading of enviso config
    addScript(basePath + '/config/env.js', function()
    {
        document.dispatchEvent(new Event('enviso-scripts-loaded'));
    });

    // Module loader
    enviso.load = function(moduleArg)
    {
        function doImport(moduleArg)
        {
            var toModernUrl = function(url)
            {
                return url.replace('/build-ts/', '/build-ts/modern/');
            };

            var errFunc = function(err)
            {
                console.log('Could not load ' + moduleArg + ': ' + err);
            };

            if (supportsEsm())
            {
                var scriptEl = document.createElement('script');
                scriptEl.type = 'module';
                currentScriptElement.parentNode.appendChild(scriptEl); // non-blocking
                scriptEl.src = toModernUrl(moduleArg);
            }
            else
                System.import(moduleArg).catch(errFunc);
        }

        document.addEventListener('enviso-scripts-loaded', function()
        {
            if(Array.isArray(moduleArg))
            {
                for(var i = 0; i < moduleArg.length; i++)
                    doImport(moduleArg[i]);
                return;
            }
            else if (typeof moduleArg === 'string')
                return doImport(moduleArg);
        });
    };

    // Rewire 'define' function to Enviso Module loader
    if (!window.define && !window.enviso.settings.noDefine)
        window.define = enviso.load;

}());
