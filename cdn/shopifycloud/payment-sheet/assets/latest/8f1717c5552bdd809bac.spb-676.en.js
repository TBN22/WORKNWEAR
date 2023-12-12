"use strict";
(self.shopifySpbJsonp = self.shopifySpbJsonp || []).push([
    [676], {
        9676: function(e, t, o) {
            o.r(t), o.d(t, {
                monorailProducer: function() {
                    return S
                },
                track: function() {
                    return n
                }
            });
            var k = o(2872),
                l = o(2196),
                w = "shopify_wallet_checkout_track/3.0",
                S = k.hl.createHttpProducer({
                    production: !0
                });

            function n(e) {
                var t, o, n, i, c, r, s, u, h, a, p, d, f, y;
                window.ShopifyAnalytics && window.ShopifyAnalytics.lib && window.ShopifyAnalytics.lib.trekkie && (t = (f = window.ShopifyAnalytics.lib.trekkie.defaultAttributes).uniqToken, o = f.visitToken, n = f.microSessionId, i = f.microSessionCount, c = f.shopId, r = f.themeId, s = f.themeCityHash, u = f.contentLanguage, y = f.referer, h = e.event, a = e.eventSubtype, p = e.pageType, d = e.instrumentId, f = e.ttl, void 0 === (e = e.checkoutToken) && window.Shopify && window.Shopify.Checkout && (e = window.Shopify.Checkout.token), y = {
                    event: h,
                    eventSubtype: a,
                    appName: p === l.G.CheckoutPage ? "checkout" : "storefront",
                    pageType: p,
                    checkoutToken: e,
                    instrumentId: d,
                    ttl: f,
                    uniqToken: t,
                    visitToken: o,
                    microSessionId: n,
                    microSessionCount: i,
                    shopId: c,
                    themeId: r,
                    themeCityHash: s,
                    contentLanguage: u,
                    referer: y
                }, S.produce({
                    schemaId: w,
                    payload: y
                }).catch(function(e) {
                    if (!(e instanceof k.nQ || e instanceof k.VN)) throw e
                }))
            }
        }
    }
]);