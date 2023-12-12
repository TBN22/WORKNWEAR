"use strict";
(self.shopifySpbJsonp = self.shopifySpbJsonp || []).push([
    [680], {
        9680: function(n, t, e) {
            e.r(t), e.d(t, {
                ShopPayExperimentGroup: function() {
                    return c
                },
                init: function() {
                    return p
                },
                reset: function() {
                    return y
                }
            });
            var o = e(7791),
                r = e(824),
                u = e.n(r),
                a = e(698),
                s = e(2111),
                c = function(n) {
                    return n.Control = "control", n.ShowApplePayOnlyWhenUsed = "show_apple_pay_only_when_used", n.ReplaceBuyItNow = "replace_buy_it_now", n
                }({}),
                i = {
                    paymentInstruments: {
                        accessToken: "",
                        currency: "",
                        country: "",
                        locale: "",
                        supportsDiscounts: !1,
                        supportsGiftCards: !1,
                        checkoutDisabled: !1,
                        checkoutConfig: {
                            domain: "",
                            shopId: -1,
                            locale: ""
                        }
                    }
                };

            function p() {
                return f.apply(this, arguments)
            }

            function f() {
                return (f = (0, o.Z)(u().mark(function n() {
                    var t, e = arguments;
                    return u().wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                if (t = 0 < e.length && void 0 !== e[0] ? e[0] : {
                                        storefrontWallet: !1
                                    }, !window.Shopify.Checkout || !window.Shopify.Checkout.dynamicCheckoutPaymentInstrumentsConfig) {
                                    n.next = 5;
                                    break
                                }
                                Object.assign(i, window.Shopify.Checkout.dynamicCheckoutPaymentInstrumentsConfig), n.next = 11;
                                break;
                            case 5:
                                return n.t0 = Object, n.t1 = i, n.next = 9, l(t.storefrontWallet);
                            case 9:
                                n.t2 = n.sent, n.t0.assign.call(n.t0, n.t1, n.t2);
                            case 11:
                                return n.abrupt("return", i);
                            case 12:
                            case "end":
                                return n.stop()
                        }
                    }, n)
                }))).apply(this, arguments)
            }

            function y() {
                for (var n in i) i.hasOwnProperty(n) && delete i[n]
            }

            function l(n) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = (0, o.Z)(u().mark(function n(t) {
                    var e, o, r, c, i;
                    return u().wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return s.kg.info("Fetching configuration..."), e = new a.Sl(null, {
                                    "x-shopify-api-version": "2018-02-15"
                                }, a.TB), o = "/payments/config", c = w(), r = g(), c = [c ? "currency=".concat(c) : "", r ? "country=".concat(r) : ""], "" !== (c = c.filter(Boolean).join("&")) && (o = "".concat(o, "?").concat(c)), n.next = 10, e.get(o);
                            case 10:
                                return i = n.sent, n.next = 13, i.json();
                            case 13:
                                return i = n.sent, s.kg.info("Configuration fetched.", i), i.paymentInstruments.checkoutConfig.locale = d(), i.paymentInstruments.country = r, t && (i.paymentInstruments.paypalConfig && (i.paymentInstruments.paypalConfig.storefrontWallet = !0), i.paymentInstruments.googlePayConfig && (i.paymentInstruments.googlePayConfig.storefrontWallet = !0)), n.abrupt("return", i);
                            case 19:
                            case "end":
                                return n.stop()
                        }
                    }, n)
                }))).apply(this, arguments)
            }

            function w() {
                var n = "";
                return window.Shopify.currency && "string" == typeof window.Shopify.currency.active && (n = window.Shopify.currency.active), n = window.Shopify.Checkout && "string" == typeof window.Shopify.Checkout.currency ? window.Shopify.Checkout.currency : n
            }

            function d() {
                var n = "";
                return n = "string" == typeof window.Shopify.locale ? window.Shopify.locale : n
            }

            function g() {
                var n = "";
                return n = "string" == typeof window.Shopify.country ? window.Shopify.country : n
            }
            t.default = i
        }
    }
]);