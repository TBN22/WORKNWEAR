! function(n) {
    "use strict";
    let e;
    ! function(n) {
        n.TRACKING_ACCEPTED = "trackingConsentAccepted", n.TRACKING_DECLINED = "trackingConsentDeclined", n.MARKETING_ACCEPTED = "firstPartyMarketingConsentAccepted", n.SALE_OF_DATA_ACCEPTED = "thirdPartyMarketingConsentAccepted", n.ANALYTICS_ACCEPTED = "analyticsConsentAccepted", n.PREFERENCES_ACCEPTED = "preferencesConsentAccepted", n.MARKETING_DECLINED = "firstPartyMarketingConsentDeclined", n.SALE_OF_DATA_DECLINED = "thirdPartyMarketingConsentDeclined", n.ANALYTICS_DECLINED = "analyticsConsentDeclined", n.PREFERENCES_DECLINED = "preferencesConsentDeclined", n.CONSENT_COLLECTED = "visitorConsentCollected", n.CONSENT_TRACKING_API_LOADED = "consentTrackingApiLoaded"
    }(e || (e = {}));
    let t, o, r, c, i, s, a, u;
    ! function(n) {
        n.ACCEPTED = "yes", n.DECLINED = "no", n.NO_INTERACTION = "no_interaction", n.NO_VALUE = ""
    }(t || (t = {})),
    function(n) {
        n.NO_VALUE = "", n.ACCEPTED = "1", n.DECLINED = "0"
    }(o || (o = {})),
    function(n) {
        n.GDPR = "GDPR", n.CCPA = "CCPA", n.NO_VALUE = ""
    }(r || (r = {})),
    function(n) {
        n.PREFERENCES = "p", n.ANALYTICS = "a", n.MARKETING = "m", n.SALE_OF_DATA = "t"
    }(c || (c = {})),
    function(n) {
        n.GDPR = "GDPR", n.GDPR_BLOCK_ALL = "GDPR_BLOCK_ALL", n.CCPA = "CCPA"
    }(i || (i = {})),
    function(n) {
        n.MARKETING = "m", n.ANALYTICS = "a", n.PREFERENCES = "p", n.SALE_OF_DATA = "s"
    }(s || (s = {})),
    function(n) {
        n.MARKETING = "marketing", n.ANALYTICS = "analytics", n.PREFERENCES = "preferences", n.SALE_OF_DATA = "sale_of_data", n.EMAIL = "email"
    }(a || (a = {})),
    function(n) {
        n.HEADLESS_STOREFRONT = "headlessStorefront", n.ROOT_DOMAIN = "rootDomain", n.CHECKOUT_ROOT_DOMAIN = "checkoutRootDomain", n.STOREFRONT_ROOT_DOMAIN = "storefrontRootDomain", n.STOREFRONT_ACCESS_TOKEN = "storefrontAccessToken"
    }(u || (u = {}));
    const E = ["lim", "v", "con", "reg"];
    let l = {};

    function C(n) {
        const e = document.cookie ? document.cookie.split("; ") : [];
        l[n] = void 0;
        for (let t = 0; t < e.length; t++) {
            const [o, r] = e[t].split("=");
            if (n === decodeURIComponent(o)) return l[n] = JSON.parse(decodeURIComponent(r)), l[n]
        }
    }

    function A(n, e) {
        if (null === e) return;
        l[n] = void 0;
        let t, o, r = document.head.querySelector("meta[name=".concat(e, "]"));
        if (r instanceof HTMLMetaElement) {
            t = r.content;
            try {
                const n = t.replace(/1/g, "true").replace(/0/g, "false"),
                    e = n.split(";").map(n => n.trim()).map(n => n.split("=").map(n => n.trim()));
                if (o = Object.fromEntries(e), o.purposes) {
                    const n = o.purposes.split(/(true|false)/).filter(Boolean),
                        e = {};
                    for (let t = 0; t < n.length; t += 2) e[n[t]] = JSON.parse(n[t + 1]);
                    o.purposes = e
                }
                for (let [n, e] of Object.entries(o)) "true" === e && (o[n] = !0), "false" === e && (o[n] = !1)
            } catch (n) {
                return
            }
            return l[n] = o, o
        }
    }

    function f(n) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return n in l || C(n) || A(n, e), l[n]
    }

    function T(n) {
        return n === encodeURIComponent(decodeURIComponent(n))
    }

    function d(n, e, t, o) {
        if (!T(o)) throw new TypeError("Cookie value is not correctly URI encoded.");
        if (!T(n)) throw new TypeError("Cookie name is not correctly URI encoded.");
        let r = "".concat(n, "=").concat(o);
        r += "; path=/", r += "; domain=".concat(e), r += "; expires=".concat(new Date((new Date).getTime() + t).toUTCString()), r += "; secure", document.cookie = r, l[n] = JSON.parse(decodeURIComponent(o))
    }

    function N(n, e) {
        var t = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(n);
            e && (o = o.filter((function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), t.push.apply(t, o)
        }
        return t
    }

    function D(n) {
        for (var e = 1; e < arguments.length; e++) {
            var t = null != arguments[e] ? arguments[e] : {};
            e % 2 ? N(Object(t), !0).forEach((function(e) {
                _(n, e, t[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach((function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
            }))
        }
        return n
    }

    function _(n, e, t) {
        return e in n ? Object.defineProperty(n, e, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : n[e] = t, n
    }

    function p() {
        const n = f("_tracking_consent");
        if (void 0 !== n && ! function(n) {
                if ("2.1" !== n.v) return !0;
                return ! function(n, e) {
                    const t = e.slice().sort();
                    return n.length === e.length && n.slice().sort().every((n, e) => n === t[e])
                }(Object.keys(n).filter(n => "region" !== n), E)
            }(n)) return n
    }

    function O() {
        try {
            let n = p();
            if (!n) return;
            return n
        } catch (n) {
            return
        }
    }

    function g() {
        return {
            m: L(s.MARKETING),
            a: L(s.ANALYTICS),
            p: L(s.PREFERENCES),
            s: L(s.SALE_OF_DATA)
        }
    }

    function R() {
        return g()[s.SALE_OF_DATA]
    }

    function S() {
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return null === n && (n = O()), void 0 === n
    }

    function P(n) {
        switch (n) {
            case o.ACCEPTED:
                return t.ACCEPTED;
            case o.DECLINED:
                return t.DECLINED;
            default:
                return t.NO_VALUE
        }
    }

    function h(n) {
        switch (n) {
            case s.ANALYTICS:
                return a.ANALYTICS;
            case s.MARKETING:
                return a.MARKETING;
            case s.PREFERENCES:
                return a.PREFERENCES;
            case s.SALE_OF_DATA:
                return a.SALE_OF_DATA
        }
    }

    function L(n) {
        const e = O();
        if (!e) return o.NO_VALUE;
        const t = e.con.CMP;
        return t ? t[n] : o.NO_VALUE
    }

    function I() {
        return f("_cmp_a", "shopify-cmp-metadata")
    }

    function y(n) {
        const e = I();
        if (!e) return !0;
        const t = e.purposes[n];
        return "boolean" != typeof t || t
    }

    function m() {
        return y(c.PREFERENCES)
    }

    function w() {
        return y(c.ANALYTICS)
    }

    function k() {
        return y(c.MARKETING)
    }

    function b() {
        return y(c.SALE_OF_DATA)
    }
    const v = {
        "": [],
        GDPR: [i.GDPR, i.GDPR_BLOCK_ALL],
        CCPA: [i.CCPA]
    };

    function G(n) {
        void 0 !== n.consent ? F({
            [c.PREFERENCES]: n.consent,
            [c.ANALYTICS]: n.consent,
            [c.MARKETING]: n.consent,
            [c.SALE_OF_DATA]: n.consent
        }) : void 0 !== n.granular_consent && F({
            [c.PREFERENCES]: m(),
            [c.ANALYTICS]: w(),
            [c.MARKETING]: k(),
            [c.SALE_OF_DATA]: b()
        })
    }

    function M(n, e) {
        document.dispatchEvent(new CustomEvent(n, {
            detail: e || {}
        }))
    }

    function F(n) {
        const t = n[c.MARKETING],
            o = n[c.SALE_OF_DATA],
            r = n[c.ANALYTICS],
            i = n[c.PREFERENCES];
        !0 === t ? M(e.MARKETING_ACCEPTED) : !1 === t && M(e.MARKETING_DECLINED), !0 === o ? M(e.SALE_OF_DATA_ACCEPTED) : !1 === o && M(e.SALE_OF_DATA_DECLINED), !0 === r ? M(e.ANALYTICS_ACCEPTED) : !1 === r && M(e.ANALYTICS_DECLINED), !0 === i ? M(e.PREFERENCES_ACCEPTED) : !1 === i && M(e.PREFERENCES_DECLINED);
        const s = function(n) {
            return {
                marketingAllowed: n[c.MARKETING],
                saleOfDataAllowed: n[c.SALE_OF_DATA],
                analyticsAllowed: n[c.ANALYTICS],
                preferencesAllowed: n[c.PREFERENCES],
                firstPartyMarketingAllowed: n[c.MARKETING],
                thirdPartyMarketingAllowed: n[c.SALE_OF_DATA]
            }
        }(n);
        M(e.CONSENT_COLLECTED, s);
        const a = [r, i, t, o];
        a.every(n => !0 === n) && M(e.TRACKING_ACCEPTED), a.every(n => !1 === n) && M(e.TRACKING_DECLINED)
    }

    function K(n, e) {
        const t = new XMLHttpRequest,
            o = JSON.stringify(n);
        t.open("POST", "/set_tracking_consent.json", !0), t.setRequestHeader("Content-Type", "application/json"), t.onreadystatechange = function() {
            if (4 !== t.readyState) return;
            l = {};
            const o = function(n) {
                try {
                    return JSON.parse(n)
                } catch (n) {
                    return {
                        error: "Unknown error"
                    }
                }
            }(t.responseText);
            var r;
            0 === (r = t.status) || 200 >= r && r < 400 ? (G(n), e(null, o)) : e(o)
        }, t.send(o)
    }

    function j(n) {
        const e = JSON.stringify({
            marketing: n.marketing,
            analytics: n.analytics,
            preferences: n.preferences,
            saleOfData: n.sale_of_data
        }).replace(/"/g, "");
        return {
            query: "query { consentManagement { cookies(visitorConsent: ".concat(e, ") { answersCookie trackingConsentCookie } } }"),
            variables: {}
        }
    }

    function U(n, e) {
        const t = n.granular_consent,
            o = {
                headers: {
                    "content-type": "application/json",
                    "x-shopify-storefront-access-token": t.storefrontAccessToken
                },
                body: JSON.stringify(j(t)),
                method: "POST"
            };
        fetch("https://".concat(t.checkoutRootDomain, "/api/unstable/graphql.json"), o).then(n => {
            if (n.ok) return n.json();
            throw new Error("Server error")
        }).then(o => {
            const r = "." + (t.checkoutRootDomain || window.location.hostname),
                c = "." + (t.storefrontRootDomain || window.location.hostname),
                i = o.data.consentManagement.cookies.trackingConsentCookie,
                s = o.data.consentManagement.cookies.answersCookie;
            d("_tracking_consent", r, 31536e6, i), d("_cmp_a", r, 31536e6, s), c !== r && (d("_tracking_consent", c, 31536e6, i), d("_cmp_a", c, 31536e6, s)), G(n), e(null, o)
        }).catch(n => {
            e({
                error: "Error while setting headless consent: " + n.message
            })
        })
    }

    function B() {
        if (S()) return t.NO_VALUE;
        const n = g();
        return n[s.MARKETING] === o.ACCEPTED && n[s.ANALYTICS] === o.ACCEPTED ? t.ACCEPTED : n[s.MARKETING] === o.DECLINED || n[s.ANALYTICS] === o.DECLINED ? t.DECLINED : t.NO_INTERACTION
    }

    function V() {
        const n = function() {
            const n = O();
            return S(n) ? r.NO_VALUE : n.reg
        }();
        return n in r ? n : r.NO_VALUE
    }

    function Y() {
        return function() {
            const n = O();
            return S(n) ? {
                limit: []
            } : {
                limit: n.lim
            }
        }()
    }

    function q(n) {
        return Q(i.GDPR_BLOCK_ALL) && n ? J() ? document.referrer : "" : null
    }

    function H(n) {
        return Q(i.GDPR_BLOCK_ALL) && n ? J() ? window.location.pathname + window.location.search : "/" : null
    }

    function J() {
        if ("" === document.referrer) return !0;
        const n = document.createElement("a");
        return n.href = document.referrer, window.location.hostname != n.hostname
    }

    function x() {
        if (!Q(i.GDPR) && !Q(i.GDPR_BLOCK_ALL)) return !0;
        const n = g();
        if (n[s.MARKETING] === o.ACCEPTED && n[s.ANALYTICS] === o.ACCEPTED) return !0;
        if (n[s.MARKETING] === o.DECLINED || n[s.ANALYTICS] === o.DECLINED) return !1;
        return V() !== r.GDPR
    }

    function X() {
        const n = V();
        if (n === r.NO_VALUE) return !1;
        const e = Y();
        return 0 !== e.limit.length && e.limit.some(e => function(n, e) {
            return v[n].includes(e)
        }(n, e))
    }

    function z() {
        return !!S() || x()
    }

    function Q(n) {
        return Y().limit.includes(n)
    }

    function W() {
        return V() !== r.CCPA ? null : Q(i.CCPA) ? "string" == typeof navigator.globalPrivacyControl ? "1" !== navigator.globalPrivacyControl : "boolean" == typeof navigator.globalPrivacyControl ? !navigator.globalPrivacyControl : null : null
    }

    function Z() {
        return !1 === W() ? t.DECLINED : (n = R(), S() ? t.NO_VALUE : n === o.NO_VALUE ? t.NO_INTERACTION : P(n));
        var n
    }
    const $ = {
        getTrackingConsent: B,
        setTrackingConsent: function(n, e) {
            if (S() && console.warn("Shop is not configured to block privacy regulation in online store settings."), function(n) {
                    if ("boolean" != typeof n && "object" != typeof n) throw TypeError("setTrackingConsent must be called with a boolean or object consent value");
                    if ("object" == typeof n) {
                        const e = Object.keys(n);
                        if (0 === e.length) throw TypeError("The submitted consent object is empty.");
                        const t = [a.MARKETING, a.ANALYTICS, a.PREFERENCES, a.SALE_OF_DATA, a.EMAIL, u.ROOT_DOMAIN, u.CHECKOUT_ROOT_DOMAIN, u.STOREFRONT_ROOT_DOMAIN, u.STOREFRONT_ACCESS_TOKEN, u.HEADLESS_STOREFRONT];
                        for (const n of e)
                            if (!t.includes(n)) throw TypeError("The submitted consent object should only contain the following keys: ".concat(t.join(", "), ". Extraneous key: ").concat(n, "."))
                    }
                }(n), "function" != typeof e) throw TypeError("setTrackingConsent must be called with a callback function");
            if ("object" == typeof n) {
                const t = q(n.analytics),
                    o = H(n.analytics);
                return (n.storefrontAccessToken ? U : K)(D(D({
                    granular_consent: n
                }, null !== t && {
                    referrer: t
                }), null !== o && {
                    landing_page: o
                }), e)
            } {
                const t = q(n),
                    o = H(n);
                return K(D(D({
                    consent: n
                }, null !== t && {
                    referrer: t
                }), null !== o && {
                    landing_page: o
                }), e)
            }
        },
        userCanBeTracked: z,
        getRegulation: V,
        isRegulationEnforced: X,
        getShopPrefs: Y,
        shouldShowGDPRBanner: function() {
            return V() === r.GDPR && X() && B() === t.NO_INTERACTION
        },
        userDataCanBeSold: function() {
            const n = W(),
                e = function() {
                    if (Q(i.CCPA)) {
                        return R() !== o.DECLINED
                    }
                    return !0
                }();
            return null !== n && !1 !== e ? n : !!S() || !1 !== z() && e
        },
        setCCPAConsent: function(n, e) {
            if ("boolean" != typeof n) throw TypeError("setCCPAConsent must be called with a boolean consent value");
            if ("function" != typeof e) throw TypeError("setCCPAConsent must be called with a callback function");
            return K({
                ccpa_consent: n
            }, e)
        },
        getCCPAConsent: Z,
        GPCSignal: W,
        shouldShowCCPABanner: function() {
            return V() === r.CCPA && Y().limit.includes(i.CCPA) && Z() === t.NO_INTERACTION
        },
        haveAnalyticsConsent: function() {
            return w()
        },
        havePreferencesConsent: function() {
            return m()
        },
        haveMarketingConsent: function() {
            return k()
        },
        haveSaleOfDataConsent: function() {
            return b()
        },
        getCCPAConsentValue: R,
        merchantEnforcingRegulationLimit: Q,
        shouldShowBanner: function() {
            return function() {
                const n = I();
                return !!n && ("boolean" == typeof n.display_banner && n.display_banner)
            }() && L(s.ANALYTICS) === o.NO_VALUE && L(s.MARKETING) === o.NO_VALUE && L(s.PREFERENCES) === o.NO_VALUE
        },
        saleOfDataRegion: function() {
            return function() {
                const n = I();
                return n && n.sale_of_data_region || !1
            }()
        }
    };

    function nn(n, e, t) {
        try {
            var o;
            ! function(n) {
                const e = new XMLHttpRequest;
                e.open("POST", "https://notify.bugsnag.com/", !0), e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("Bugsnag-Api-Key", "95ba910bcec4542ef2a0b64cd7ca666c"), e.setRequestHeader("Bugsnag-Payload-Version", "5");
                const t = function(n) {
                    const e = function(n) {
                            return n.stackTrace || n.stack || n.description || n.name
                        }(n.error),
                        [t, o] = (e || "unknown error").split("\n")[0].split(":");
                    return JSON.stringify({
                        payloadVersion: 5,
                        notifier: {
                            name: "ConsentTrackingAPI",
                            version: "latest",
                            url: "-"
                        },
                        events: [{
                            exceptions: [{
                                errorClass: (t || "").trim(),
                                message: (o || "").trim(),
                                stacktrace: [{
                                    file: "consent-tracking-api.js",
                                    lineNumber: "1",
                                    method: e
                                }],
                                type: "browserjs"
                            }],
                            context: n.context || "general",
                            app: {
                                id: "ConsentTrackingAPI",
                                version: "latest"
                            },
                            metaData: {
                                request: {
                                    shopId: n.shopId,
                                    shopUrl: window.location.href
                                },
                                device: {
                                    userAgent: window.navigator.userAgent
                                },
                                "Additional Notes": n.notes
                            },
                            unhandled: !1
                        }]
                    })
                }(n);
                e.send(t)
            }({
                error: n,
                context: e,
                shopId: tn() || (null === (o = window.Shopify) || void 0 === o ? void 0 : o.shop),
                notes: t
            })
        } catch (n) {}
    }

    function en(n) {
        return function() {
            try {
                return n(...arguments)
            } catch (n) {
                throw nn(n), n
            }
        }
    }

    function tn() {
        try {
            const n = document.getElementById("shopify-features").textContent;
            return JSON.parse(n).shopId
        } catch (n) {
            return null
        }
    }

    function on() {
        return $.getTrackingConsent()
    }

    function rn(n, e) {
        return "object" == typeof n && n.headlessStorefront && !n.storefrontAccessToken ? function(n, e) {
            function t(n) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.NO_VALUE;
                return !0 === n ? o.ACCEPTED : !1 === n ? o.DECLINED : e
            }
            const c = {
                    [s.ANALYTICS]: t(n[a.ANALYTICS], o.DECLINED),
                    [s.MARKETING]: t(n[a.MARKETING], o.DECLINED),
                    [s.PREFERENCES]: t(n[a.PREFERENCES], o.DECLINED),
                    [s.SALE_OF_DATA]: t(n[a.SALE_OF_DATA])
                },
                u = {
                    v: "2.1",
                    reg: r.NO_VALUE,
                    lim: [i.GDPR_BLOCK_ALL, i.CCPA],
                    con: {
                        CMP: c
                    }
                },
                E = encodeURIComponent(JSON.stringify(u));
            d("_tracking_consent", n.rootDomain, 31536e6, E), e(null)
        }(n, e) : $.setTrackingConsent(n, e)
    }

    function cn() {
        return $.userCanBeTracked()
    }

    function sn() {
        return $.getRegulation()
    }

    function an() {
        return $.isRegulationEnforced()
    }

    function un() {
        return $.getShopPrefs()
    }

    function En() {
        return $.shouldShowGDPRBanner()
    }

    function ln() {
        return $.userDataCanBeSold()
    }

    function Cn(n, e) {
        return $.setCCPAConsent(n, e)
    }

    function An() {
        return $.getCCPAConsent()
    }

    function fn() {
        return $.shouldShowCCPABanner()
    }

    function Tn() {
        return $.haveAnalyticsConsent()
    }

    function dn() {
        return $.havePreferencesConsent()
    }

    function Nn() {
        return $.haveMarketingConsent()
    }

    function Dn() {
        return $.haveSaleOfDataConsent()
    }

    function _n() {
        return $.shouldShowBanner()
    }

    function pn() {
        return $.saleOfDataRegion()
    }

    function On() {
        return !0
    }

    function gn() {
        const n = {},
            e = g();
        for (const t of Object.keys(e)) n[h(t)] = P(e[t]);
        return n
    }

    function Rn() {
        $.getCCPAConsentValue() != o.DECLINED && !1 === $.GPCSignal() && Cn(!1, () => !1);
        return {
            getTrackingConsent: en(on),
            setTrackingConsent: en(rn),
            userCanBeTracked: en(cn),
            getRegulation: en(sn),
            isRegulationEnforced: en(an),
            getShopPrefs: en(un),
            shouldShowGDPRBanner: en(En),
            userDataCanBeSold: en(ln),
            setCCPAConsent: en(Cn),
            getCCPAConsent: en(An),
            shouldShowCCPABanner: en(fn),
            doesMerchantSupportGranularConsent: en(On),
            analyticsProcessingAllowed: en(Tn),
            preferencesProcessingAllowed: en(dn),
            marketingAllowed: en(Nn),
            firstPartyMarketingAllowed: en(Nn),
            saleOfDataAllowed: en(Dn),
            thirdPartyMarketingAllowed: en(Dn),
            currentVisitorConsent: en(gn),
            shouldShowBanner: en(_n),
            saleOfDataRegion: en(pn),
            unstable: {
                analyticsProcessingAllowed: Tn,
                preferencesProcessingAllowed: dn,
                marketingAllowed: Nn,
                saleOfDataAllowed: Dn,
                currentVisitorConsent: gn,
                shouldShowBanner: _n,
                saleOfDataRegion: pn
            }
        }
    }

    function Sn() {
        window.Shopify.customerPrivacy = window.Shopify.trackingConsent = Rn(), M(e.CONSENT_TRACKING_API_LOADED)
    }
    window.Shopify = window.Shopify ? window.Shopify : {}, Sn(), n.default = Rn, n.setGlobalObject = Sn, Object.defineProperty(n, "__esModule", {
        value: !0
    })
}({});
//# sourceMappingURL=consent-tracking-api.js.map