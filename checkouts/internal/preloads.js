(function() {
    var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
    var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.f889d0f4bfea5d1c482f.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/578.latest.en.138d76075002713638e7.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/441.latest.en.04eff29e3df2d466c911.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/598.latest.en.787754dd33d0e3c47a63.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.dd1d7ea999c21f0e706b.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/731.latest.en.13d4de92b88330e8fea9.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/645.latest.en.7c6e9c27c695ff1ce89c.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/844.latest.en.7fcd45ae446a9a5574e8.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/Redesign.latest.en.dc4fd059bd758116e2da.js"];
    var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/578.latest.en.5a217062b4c1c1b8f516.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.e73cab4b1bb1fcdbd393.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/645.latest.en.b9bd61dc1bc5503712c4.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/661.latest.en.ca04e11df0aaa3afc0c6.css"];
    var fontPreconnectUrls = [];
    var fontPrefetchUrls = [];
    var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0287/4618/6830/files/ninjersey_f96f35f6-59d4-4fe2-a9b4-80f4e59c0c0f_x320.png?v=1663165229"];

    function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
    }

    function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
            var res = resources[index++];
            if (res) preconnect(res[0], next);
        })();
    }

    function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
            link.rel = 'prefetch';
            link.fetchPriority = 'low';
            link.as = as;
            if (as === 'font') link.type = 'font/woff2';
            link.href = url;
            link.crossOrigin = '';
            link.onload = link.onerror = callback;
            document.head.appendChild(link);
        } else {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onloadend = callback;
            xhr.send();
        }
    }

    function prefetchAssets() {
        var resources = [].concat(
            scripts.map(function(url) {
                return [url, 'script'];
            }),
            styles.map(function(url) {
                return [url, 'style'];
            }),
            fontPrefetchUrls.map(function(url) {
                return [url, 'font'];
            }),
            imgPrefetchUrls.map(function(url) {
                return [url, 'image'];
            })
        );
        var index = 0;
        (function next() {
            var res = resources[index++];
            if (res) prefetch(res[0], res[1], next);
        })();
    }

    function onLoaded() {
        preconnectAssets();
        prefetchAssets();
    }

    if (document.readyState === 'complete') {
        onLoaded();
    } else {
        addEventListener('load', onLoaded);
    }
})();