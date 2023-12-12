"use strict";
(self.shopifySpbJsonp = self.shopifySpbJsonp || []).push([
    [698], {
        698: function(e, t, n) {
            n.d(t, {
                Ny: function() {
                    return gn
                },
                v9: function() {
                    return An
                },
                Sl: function() {
                    return at
                },
                pn: function() {
                    return Gt
                },
                hZ: function() {
                    return Tn
                },
                zG: function() {
                    return bt
                },
                AC: function() {
                    return Ei
                },
                oE: function() {
                    return Zi
                },
                uK: function() {
                    return Ti
                },
                mZ: function() {
                    return tr
                },
                lg: function() {
                    return Sr
                },
                Wr: function() {
                    return $t
                },
                sv: function() {
                    return Ur
                },
                fI: function() {
                    return Rr
                },
                TB: function() {
                    return T
                }
            });
            var l = n(649),
                r = n(6470),
                i = n(5181),
                a = n(4013),
                o = n(3764);

            function s(e) {
                return (0, r.Z)(e) || (0, i.Z)(e) || (0, a.Z)(e) || (0, o.Z)()
            }
            var c = n(7597);

            function u(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = (0, c.Z)(e)););
                return e
            }

            function h() {
                return (h = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, n) {
                    var r = u(e, t);
                    if (r) {
                        t = Object.getOwnPropertyDescriptor(r, t);
                        return t.get ? t.get.call(arguments.length < 3 ? e : n) : t.value
                    }
                }).apply(this, arguments)
            }
            var p = n(7591),
                d = n(9492),
                f = n(4138),
                ie = n(3940),
                m = n(1026),
                y = n(2951),
                v = n(1976),
                b = n(824),
                w = n.n(b);

            function k(n) {
                var r = g();
                return function() {
                    var e, t = (0, c.Z)(n);
                    return t = r ? (e = (0, c.Z)(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), (0, d.Z)(this, t)
                }
            }

            function g() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }
            var x, _ = w().mark(we);

            function P(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = S(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            t = function() {};
                        return {
                            s: t,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: t
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, a = !0,
                    o = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        o = !0, i = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                }
            }

            function S(e, t) {
                if (e) {
                    if ("string" == typeof e) return A(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? A(e, t) : void 0
                }
            }

            function A(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }(Ct = x = x || {}).Pending = "pending", Ct.Complete = "complete", Ct.Error = "error", Ct.MissingInfo = "missing_info", Ct.NotApplicable = "not_applicable";
            var C = function() {
                    function e() {
                        (0, y.Z)(this, e)
                    }
                    return (0, v.Z)(e, null, [{
                        key: "redirectToThrottlePage",
                        value: function(e) {
                            e = e || {
                                url: window.location.href,
                                method: "GET"
                            };
                            e = this.encodeReplayDataCookie(e);
                            document.cookie = "_queue_replay_data=".concat(e, ";path=/"), window.location.assign("/throttle/queue")
                        }
                    }, {
                        key: "encodeReplayDataCookie",
                        value: function(e) {
                            return encodeURIComponent(this.b64UrlsafeEncode(JSON.stringify(e)))
                        }
                    }, {
                        key: "b64UrlsafeEncode",
                        value: function(e) {
                            return this.encodeDashes(btoa(e))
                        }
                    }, {
                        key: "encodeDashes",
                        value: function(e) {
                            return e.replace(/\+/g, "-").replace(/\//g, "_")
                        }
                    }]), e
                }(),
                T = new(function() {
                    function e() {
                        (0, y.Z)(this, e), this.subscribers = {}
                    }
                    return (0, v.Z)(e, [{
                        key: "subscribe",
                        value: function(e, t) {
                            var n = this.subscribers[e] || (this.subscribers[e] = new Set);
                            return n.add(t), {
                                unsubscribe: function() {
                                    n.delete(t)
                                }
                            }
                        }
                    }, {
                        key: "broadcast",
                        value: function(e) {
                            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                            t.timestamp = Date.now();
                            e = this.subscribers[e];
                            e && e.forEach(function(e) {
                                return e(t)
                            })
                        }
                    }]), e
                }()),
                I = {
                    setItem: function(e, t) {},
                    getItem: function(e) {},
                    removeItem: function(e) {}
                },
                E = function() {
                    var t = I;
                    try {
                        return window.localStorage || t
                    } catch (e) {
                        return t
                    }
                };

            function O(e, t, n) {
                t = {
                    expiresAt: Date.now() + 1e3 * n,
                    value: t
                };
                E().setItem(e, Z(t))
            }

            function R(e) {
                var t = E().getItem(e);
                if (t) {
                    t = j(t);
                    if (!(t.expiresAt < Date.now())) return t.value;
                    N(e)
                }
            }

            function N(e) {
                E().removeItem(e)
            }

            function j(e) {
                return JSON.parse(e)
            }

            function Z(e) {
                return JSON.stringify(e)
            }

            function D(e) {
                z() && window.performance.mark("".concat(e, "-start"))
            }

            function U(e) {
                return z() ? (window.performance.mark("".concat(e, "-end")), window.performance.measure(e, "".concat(e, "-start"), "".concat(e, "-end")), window.performance.getEntriesByName(e)[0].duration) : 0
            }

            function q(e, t, n) {
                T.broadcast("acceleration-check-benchmark", {
                    name: e,
                    duration: t,
                    tags: n
                })
            }

            function L(c, u, h) {
                return function(e, t, n) {
                    var s;
                    z() && (s = n.value, n.value = function() {
                        var e = this[u],
                            t = "".concat(c, ":").concat(e);
                        D(t);
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        var a = s.apply(this, r),
                            o = {};
                        return o[h] = e, a instanceof Promise ? a.then(function(e) {
                            return q(c, U(t), o), e
                        }) : (q(c, U(t), o), a)
                    })
                }
            }

            function z() {
                return window.performance && window.performance.mark && window.performance.measure
            }
            var M = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                },
                B = "shopifyApplePayAcceleration",
                F = "acceleration.check.benchmark:ApplePay";

            function V(n) {
                return M(this, void 0, void 0, w().mark(function e() {
                    var t;
                    return w().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ("boolean" == typeof(t = R(B))) return e.abrupt("return", t);
                                e.next = 3;
                                break;
                            case 3:
                                return D(F), e.next = 6, ApplePaySession.canMakePaymentsWithActiveCard(n);
                            case 6:
                                return t = e.sent, q("acceleration.check.benchmark", U(F), {
                                    instrument: "ApplePay"
                                }), O(B, t, 1800), e.abrupt("return", t);
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))
            }
            var G = function(e, o, n, s) {
                function c(t) {
                    return t instanceof n ? t : new n(function(e) {
                        e(t)
                    })
                }
                return new(n = n || Promise)(function(t, n) {
                    function r(e) {
                        try {
                            a(s.next(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function i(e) {
                        try {
                            a(s.throw(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function a(e) {
                        e.done ? t(e.value) : c(e.value).then(r, i)
                    }
                    a((s = s.apply(e, o || [])).next())
                })
            };

            function H() {
                for (var e = [], t = $(), n = t.length - 1; 0 <= n; n--) e.push(W(t[n]));
                return e.join("")
            }

            function $() {
                var e = window.crypto || window.msCrypto;
                if (e && e.getRandomValues) {
                    var t = new Uint8Array(16);
                    return e.getRandomValues(t), t
                }
                for (var n = new Uint8Array(16), r = 0, i = 0; i < 16; i++) 0 == (3 & i) && (r = 4294967296 * Math.random()), n[i] = r >>> ((3 & i) << 3) & 255;
                return n
            }

            function W(e) {
                return (e + 256).toString(16).substr(1)
            }
            var J = Symbol("timeout");

            function Y(t) {
                return G(this, void 0, void 0, w().mark(function e() {
                    return w().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", new Promise(function(e) {
                                    return setTimeout(function() {
                                        return e(J)
                                    }, t)
                                }));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))
            }
            var K = [100, 1e3, 2e3, 3e3];

            function X(a) {
                var o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : K;
                return G(this, void 0, void 0, w().mark(function e() {
                    var t, n, r, i;
                    return w().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                t = 0, n = P(o), e.prev = 2, n.s();
                            case 4:
                                if ((r = n.n()).done) {
                                    e.next = 14;
                                    break
                                }
                                return i = r.value, t += 1, e.next = 9, Promise.race([Y(i), a()]);
                            case 9:
                                if ((i = e.sent) !== J) return e.abrupt("return", {
                                    response: i,
                                    attempts: t,
                                    isTimeout: !1
                                });
                                e.next = 12;
                                break;
                            case 12:
                                e.next = 4;
                                break;
                            case 14:
                                e.next = 19;
                                break;
                            case 16:
                                e.prev = 16, e.t0 = e.catch(2), n.e(e.t0);
                            case 19:
                                return e.prev = 19, n.f(), e.finish(19);
                            case 22:
                                return e.abrupt("return", {
                                    attempts: t,
                                    isTimeout: !0,
                                    response: null
                                });
                            case 23:
                            case "end":
                                return e.stop()
                        }
                    }, e, null, [
                        [2, 16, 19, 22]
                    ])
                }))
            }
            var Q, ee = "An error occurred while processing your checkout. Please try again.";

            function te(e, t) {
                switch (!0) {
                    case /failed_session/.test(e):
                        return "There was a problem with the payment service. Please select a different payment method or try again later.";
                    case /first_name_blank$/.test(e):
                        return "Enter a first name for your shipping address";
                    case /last_name_blank$/.test(e):
                        return "Enter a last name for your shipping address";
                    case /address1_blank$/.test(e):
                        return "Enter your shipping address";
                    case /address2_blank$/.test(e):
                        return "Enter the apartment, suite, etc. for your shipping address";
                    case /city_blank$/.test(e):
                        return "Enter the city of your shipping address";
                    case /country(_code)?_blank$/.test(e):
                        return "Select a country for your shipping address";
                    case /country(_code)?_not_supported$/.test(e):
                        return "Enter a valid country for your shipping address";
                    case /province(_code)?_blank$/.test(e):
                        return "Enter a state / province for your shipping address";
                    case /province(_code)?_invalid_state_in_country$/.test(e):
                        return "Enter a valid state for your shipping address country";
                    case /province(_code)?_invalid_province_in_country$/.test(e):
                        return "Enter a valid province for your shipping address country";
                    case /province(_code)?_invalid_region_in_country$/.test(e):
                        return "Enter a valid region for your shipping address country";
                    case /company_blank$/.test(e):
                        return "Enter a company name for your shipping address";
                    case /phone_blank$/.test(e):
                        return "Enter a valid phone number for your shipping address";
                    case /zip(_code)?_blank$/.test(e):
                        return "Enter a ZIP code / postal code for your shipping address";
                    case /zip(_code)?_invalid_for_country$/.test(e):
                    case /zip(_code)?_invalid_for_country_and_province$/.test(e):
                        return "Enter a valid ZIP code / postal code for your shipping address";
                    case /email_invalid$/.test(e):
                        return "Enter a valid email address";
                    case /generic_error$/.test(e):
                        return "An error occurred while processing your payment. Please try again.";
                    case /credit_card_processing$/.test(e):
                        return "Your card can't be processed due to technical difficulties. Please try again in a few minutes.";
                    case /not_enough_in_stock$/.test(e):
                        return "Some items became unavailable. Refresh your cart and try again.";
                    case /already_completed/.test(e):
                        return "Your items have already been purchased.";
                    case /empty_cart/.test(e):
                        return "Your cart is currently empty. Please add items to your cart and try again.";
                    case /full_name_required$/.test(e):
                        return "Enter both your first and last name";
                    case /total_price_too_big$/.test(e):
                        return "Your order total exceeds the limit. Please edit your cart and try again.";
                    case /total_price_zero$/.test(e):
                        return "To check out with Apple Pay, your order total must be greater than 0. Please choose a new payment method and try again.";
                    case /no_shipping_option$/.test(e):
                        return "Sorry, we currently don't ship to this country. Please choose a new shipping address and try again.";
                    case /cannot_find_shipping_rate$/.test(e):
                        return "Sorry, we can't find the shipping rate you selected.";
                    case /payment_in_progress$/.test(e):
                        return "Your order is being processed and can't be cancelled at this time. You will receive an email confirmation once the transaction is successful.";
                    case /payment_timeout$/.test(e):
                        return "A network error occurred. Your order is being processed. You will receive an email confirmation once the transaction is successful.";
                    case /expired_card/.test(e):
                        return "Your credit card is expired. Please update your card.";
                    case /card_declined/.test(e):
                        return "Your credit card was declined. In order to resolve this issue, you will need to contact your bank.";
                    case /(invalid|blank)$/.test(e):
                        if (t && t.field) return "Enter a valid ".concat(t.field)
                }
                return ee
            }

            function ne(e) {
                e = (e = Array.isArray(e) ? e : [e]).map(function(e) {
                    return re(e)
                });
                return e = 1 === e.length && e[0] && e[0].startsWith("Enter ") ? ["Please e".concat(e[0].substr(1), " and try again")] : e
            }

            function re(e) {
                switch (e) {
                    case "Some products became unavailable and your cart has been updated. We're sorry for the inconvenience.":
                        return te("not_enough_in_stock");
                    case "Checkout is already completed.":
                        return te("already_completed");
                    default:
                        return e
                }
            }(t = Q = Q || {})[t.Cancelled = 0] = "Cancelled", t[t.Failure = 1] = "Failure", t[t.Success = 2] = "Success";
            var ae = Q,
                oe = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                },
                se = 2e4,
                ce = "payment_timeout";

            function ue() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : se;
                return oe(this, void 0, void 0, w().mark(function e() {
                    return w().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", new Promise(function(e) {
                                    return setTimeout(e, t, ce)
                                }));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))
            }
            var he = /^[a-z0-9]{2,4}\s?$/i;

            function pe(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                    n = {
                        first_name: "",
                        last_name: "",
                        address1: "",
                        city: e.locality || "",
                        province_code: e.administrativeArea || e.subLocality || "",
                        country_code: "",
                        zip: e.postalCode || "",
                        phone: ""
                    };
                e.countryCode ? (n.country_code = e.countryCode.toLowerCase(), "hk" === n.country_code && (delete n.zip, n.province_code = e.postalCode)) : e.country && (n.country = e.country.toLowerCase(), "usa" === n.country && (n.country = "united states")), e.givenName && (n.first_name = e.givenName), e.familyName && (n.last_name = e.familyName), n.last_name || (n.last_name = n.first_name), e.phoneNumber && (n.phone = e.phoneNumber);
                var r = e.addressLines;
                return r && r.length && (n.address1 = r[0], r[1] && (n.address2 = r[1])), t && le(e) ? de(n) : n
            }

            function le(e) {
                var t = e.countryCode,
                    n = void 0 === t ? "" : t,
                    t = e.country,
                    t = void 0 === t ? "" : t,
                    e = e.postalCode,
                    e = void 0 === e ? "" : e,
                    n = n.toLowerCase(),
                    t = t.toLowerCase();
                return !(!e || "ca" !== n && "canada" !== t && "gb" !== n) && he.test(e)
            }

            function de(e) {
                var t = e.country_code,
                    n = e.country,
                    r = e.zip,
                    i = r;
                return r ? ("ca" === t || "canada" === n ? i = "".concat(r.trim(), " 0Z0") : "gb" === t && (i = "".concat(r.trim(), " 0ZZ")), Object.assign(Object.assign({}, e), {
                    zip: i
                })) : e
            }

            function fe(e) {
                return [new ApplePayError("unknown", void 0, e)]
            }

            function me(e) {
                return ve(e.errors)
            }

            function ye(e) {
                return ve(e.errors)
            }

            function ve(e) {
                var t, n = [],
                    r = P(we(e));
                try {
                    for (r.s(); !(t = r.n()).done;) {
                        var i = t.value,
                            a = new ApplePayError(ke(i.association), ge(i.attribute), i.error.message);
                        n.push(a)
                    }
                } catch (i) {
                    r.e(i)
                } finally {
                    r.f()
                }
                return n
            }
            var be = (0, v.Z)(function e(t, n, r) {
                (0, y.Z)(this, e), this.association = t, this.attribute = n, this.error = r
            });

            function we(t) {
                var n, r, i, a, o, s, c, u;
                return w().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            n = 0, r = Object.entries(t);
                        case 1:
                            if (!(n < r.length)) {
                                e.next = 29;
                                break
                            }
                            a = (0, m.Z)(r[n], 2), i = a[0], o = a[1], a = 0, o = Object.entries(o);
                        case 4:
                            if (!(a < o.length)) {
                                e.next = 26;
                                break
                            }
                            c = (0, m.Z)(o[a], 2), s = c[0], u = c[1], c = P(u), e.prev = 7, c.s();
                        case 9:
                            if ((u = c.n()).done) {
                                e.next = 15;
                                break
                            }
                            return u = u.value, e.next = 13, new be(i, s, u);
                        case 13:
                            e.next = 9;
                            break;
                        case 15:
                            e.next = 20;
                            break;
                        case 17:
                            e.prev = 17, e.t0 = e.catch(7), c.e(e.t0);
                        case 20:
                            return e.prev = 20, c.f(), e.finish(20);
                        case 23:
                            a++, e.next = 4;
                            break;
                        case 26:
                            n++, e.next = 1;
                            break;
                        case 29:
                        case "end":
                            return e.stop()
                    }
                }, _, null, [
                    [7, 17, 20, 23]
                ])
            }

            function ke(e) {
                switch (e) {
                    case "billing_address":
                        return "billingContactInvalid";
                    case "shipping_address":
                        return "shippingContactInvalid";
                    default:
                        return "unknown"
                }
            }

            function ge(e) {
                switch (e) {
                    case "first_name":
                    case "last_name":
                        return "name";
                    case "phone":
                        return "phoneNumber";
                    case "address1":
                    case "address2":
                        return "addressLines";
                    case "city":
                        return "locality";
                    case "province":
                        return "administrativeArea";
                    case "country":
                        return "country";
                    case "country_code":
                        return "countryCode";
                    case "province_code":
                        return "administrativeArea";
                    case "zip":
                        return "postalCode"
                }
            }
            var xe, _e, Pe = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== Pe && Pe,
                Se = {
                    searchParams: "URLSearchParams" in Pe,
                    iterable: "Symbol" in Pe && "iterator" in Symbol,
                    blob: "FileReader" in Pe && "Blob" in Pe && function() {
                        try {
                            return new Blob, !0
                        } catch (e) {
                            return !1
                        }
                    }(),
                    formData: "FormData" in Pe,
                    arrayBuffer: "ArrayBuffer" in Pe
                };

            function Ae(e) {
                return e && DataView.prototype.isPrototypeOf(e)
            }

            function Ce(e) {
                if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e) throw new TypeError('Invalid character in header field name: "' + e + '"');
                return e.toLowerCase()
            }

            function Te(e) {
                return e = "string" != typeof e ? String(e) : e
            }

            function Ie(t) {
                var e = {
                    next: function() {
                        var e = t.shift();
                        return {
                            done: void 0 === e,
                            value: e
                        }
                    }
                };
                return Se.iterable && (e[Symbol.iterator] = function() {
                    return e
                }), e
            }

            function Ee(t) {
                this.map = {}, t instanceof Ee ? t.forEach(function(e, t) {
                    this.append(t, e)
                }, this) : Array.isArray(t) ? t.forEach(function(e) {
                    this.append(e[0], e[1])
                }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                    this.append(e, t[e])
                }, this)
            }

            function Oe(e) {
                if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
                e.bodyUsed = !0
            }

            function Re(n) {
                return new Promise(function(e, t) {
                    n.onload = function() {
                        e(n.result)
                    }, n.onerror = function() {
                        t(n.error)
                    }
                })
            }

            function Ne(e) {
                var t = new FileReader,
                    n = Re(t);
                return t.readAsArrayBuffer(e), n
            }

            function je(e) {
                var t = new FileReader,
                    n = Re(t);
                return t.readAsText(e), n
            }

            function Ze(e) {
                for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]);
                return n.join("")
            }

            function De(e) {
                if (e.slice) return e.slice(0);
                var t = new Uint8Array(e.byteLength);
                return t.set(new Uint8Array(e)), t.buffer
            }

            function Ue() {
                return this.bodyUsed = !1, this._initBody = function(e) {
                    this.bodyUsed = this.bodyUsed, (this._bodyInit = e) ? "string" == typeof e ? this._bodyText = e : Se.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : Se.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : Se.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : Se.arrayBuffer && Se.blob && Ae(e) ? (this._bodyArrayBuffer = De(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : Se.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || _e(e)) ? this._bodyArrayBuffer = De(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : Se.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, Se.blob && (this.blob = function() {
                    var e = Oe(this);
                    if (e) return e;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }, this.arrayBuffer = function() {
                    if (this._bodyArrayBuffer) {
                        var e = Oe(this);
                        return e ? e : ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer)
                    }
                    return this.blob().then(Ne)
                }), this.text = function() {
                    var e = Oe(this);
                    if (e) return e;
                    if (this._bodyBlob) return je(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(Ze(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, Se.formData && (this.formData = function() {
                    return this.text().then(Me)
                }), this.json = function() {
                    return this.text().then(JSON.parse)
                }, this
            }
            Se.arrayBuffer && (xe = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], _e = ArrayBuffer.isView || function(e) {
                return e && -1 < xe.indexOf(Object.prototype.toString.call(e))
            }), Ee.prototype.append = function(e, t) {
                e = Ce(e), t = Te(t);
                var n = this.map[e];
                this.map[e] = n ? n + ", " + t : t
            }, Ee.prototype.delete = function(e) {
                delete this.map[Ce(e)]
            }, Ee.prototype.get = function(e) {
                return e = Ce(e), this.has(e) ? this.map[e] : null
            }, Ee.prototype.has = function(e) {
                return this.map.hasOwnProperty(Ce(e))
            }, Ee.prototype.set = function(e, t) {
                this.map[Ce(e)] = Te(t)
            }, Ee.prototype.forEach = function(e, t) {
                for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
            }, Ee.prototype.keys = function() {
                var n = [];
                return this.forEach(function(e, t) {
                    n.push(t)
                }), Ie(n)
            }, Ee.prototype.values = function() {
                var t = [];
                return this.forEach(function(e) {
                    t.push(e)
                }), Ie(t)
            }, Ee.prototype.entries = function() {
                var n = [];
                return this.forEach(function(e, t) {
                    n.push([t, e])
                }), Ie(n)
            }, Se.iterable && (Ee.prototype[Symbol.iterator] = Ee.prototype.entries);
            var qe = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

            function Le(e) {
                var t = e.toUpperCase();
                return -1 < qe.indexOf(t) ? t : e
            }

            function ze(e, t) {
                if (!(this instanceof ze)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                var n = (t = t || {}).body;
                if (e instanceof ze) {
                    if (e.bodyUsed) throw new TypeError("Already read");
                    this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new Ee(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, n || null == e._bodyInit || (n = e._bodyInit, e.bodyUsed = !0)
                } else this.url = String(e);
                if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new Ee(t.headers)), this.method = Le(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(n), "GET" !== this.method && "HEAD" !== this.method || "no-store" !== t.cache && "no-cache" !== t.cache || ((t = /([?&])_=[^&]*/).test(this.url) ? this.url = this.url.replace(t, "$1_=" + (new Date).getTime()) : this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime())
            }

            function Me(e) {
                var n = new FormData;
                return e.trim().split("&").forEach(function(e) {
                    var t;
                    e && (e = (t = e.split("=")).shift().replace(/\+/g, " "), t = t.join("=").replace(/\+/g, " "), n.append(decodeURIComponent(e), decodeURIComponent(t)))
                }), n
            }

            function Be(e) {
                var n = new Ee;
                return e.replace(/\r?\n[\t ]+/g, " ").split("\r").map(function(e) {
                    return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e
                }).forEach(function(e) {
                    var t = e.split(":"),
                        e = t.shift().trim();
                    e && (t = t.join(":").trim(), n.append(e, t))
                }), n
            }

            function Fe(e, t) {
                if (!(this instanceof Fe)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                t = t || {}, this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = 200 <= this.status && this.status < 300, this.statusText = void 0 === t.statusText ? "" : "" + t.statusText, this.headers = new Ee(t.headers), this.url = t.url || "", this._initBody(e)
            }
            ze.prototype.clone = function() {
                return new ze(this, {
                    body: this._bodyInit
                })
            }, Ue.call(ze.prototype), Ue.call(Fe.prototype), Fe.prototype.clone = function() {
                return new Fe(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new Ee(this.headers),
                    url: this.url
                })
            }, Fe.error = function() {
                var e = new Fe(null, {
                    status: 0,
                    statusText: ""
                });
                return e.type = "error", e
            };
            var Ve = [301, 302, 303, 307, 308];
            Fe.redirect = function(e, t) {
                if (-1 === Ve.indexOf(t)) throw new RangeError("Invalid status code");
                return new Fe(null, {
                    status: t,
                    headers: {
                        location: e
                    }
                })
            };
            var Ge = Pe.DOMException;
            try {
                new Ge
            } catch (e) {
                (Ge = function(e, t) {
                    this.message = e, this.name = t;
                    e = Error(e);
                    this.stack = e.stack
                }).prototype = Object.create(Error.prototype), Ge.prototype.constructor = Ge
            }

            function He(o, s) {
                return new Promise(function(n, e) {
                    var t = new ze(o, s);
                    if (t.signal && t.signal.aborted) return e(new Ge("Aborted", "AbortError"));
                    var r = new XMLHttpRequest;

                    function i() {
                        r.abort()
                    }

                    function a(t) {
                        try {
                            return "" === t && Pe.location.href ? Pe.location.href : t
                        } catch (e) {
                            return t
                        }
                    }
                    r.onload = function() {
                        var e = {
                            status: r.status,
                            statusText: r.statusText,
                            headers: Be(r.getAllResponseHeaders() || "")
                        };
                        e.url = "responseURL" in r ? r.responseURL : e.headers.get("X-Request-URL");
                        var t = "response" in r ? r.response : r.responseText;
                        setTimeout(function() {
                            n(new Fe(t, e))
                        }, 0)
                    }, r.onerror = function() {
                        setTimeout(function() {
                            e(new TypeError("Network request failed"))
                        }, 0)
                    }, r.ontimeout = function() {
                        setTimeout(function() {
                            e(new TypeError("Network request failed"))
                        }, 0)
                    }, r.onabort = function() {
                        setTimeout(function() {
                            e(new Ge("Aborted", "AbortError"))
                        }, 0)
                    }, r.open(t.method, a(t.url), !0), "include" === t.credentials ? r.withCredentials = !0 : "omit" === t.credentials && (r.withCredentials = !1), "responseType" in r && (Se.blob ? r.responseType = "blob" : Se.arrayBuffer && t.headers.get("Content-Type") && -1 !== t.headers.get("Content-Type").indexOf("application/octet-stream") && (r.responseType = "arraybuffer")), !s || "object" !== (0, ie.Z)(s.headers) || s.headers instanceof Ee ? t.headers.forEach(function(e, t) {
                        r.setRequestHeader(t, e)
                    }) : Object.getOwnPropertyNames(s.headers).forEach(function(e) {
                        r.setRequestHeader(e, Te(s.headers[e]))
                    }), t.signal && (t.signal.addEventListener("abort", i), r.onreadystatechange = function() {
                        4 === r.readyState && t.signal.removeEventListener("abort", i)
                    }), r.send(void 0 === t._bodyInit ? null : t._bodyInit)
                })
            }
            He.polyfill = !0, Pe.fetch || (Pe.fetch = He, Pe.Headers = Ee, Pe.Request = ze, Pe.Response = Fe);
            var $e = 4,
                We = 10,
                Je = "X-Checkout-Queue",
                Ye = "_checkout_queue_token",
                Ke = "X-Shopify-Checkout-Authorization-Token",
                Xe = function(e) {
                    (0, p.Z)(r, e);
                    var n = k(r);

                    function r(e) {
                        var t;
                        return (0, y.Z)(this, r), (t = n.call(this, "Received response from server: url=".concat(e.headers.get("Location") || "unknown", " status=").concat(e.status, " statusText='").concat(e.statusText, "'"))).response = e, t
                    }
                    return (0, v.Z)(r)
                }((0, f.Z)(Error)),
                Qe = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                },
                et = function(e) {
                    (0, p.Z)(n, e);
                    var t = k(n);

                    function n(e) {
                        return (0, y.Z)(this, n), t.call(this, "API request polling timed out. Exceeded maximum timeout of ".concat(e, "ms"))
                    }
                    return (0, v.Z)(n)
                }((0, f.Z)(Error)),
                tt = function(e) {
                    (0, p.Z)(n, e);
                    var t = k(n);

                    function n() {
                        var e;
                        return (0, y.Z)(this, n), (e = t.apply(this, arguments)).message = "Missing location header", e
                    }
                    return (0, v.Z)(n)
                }((0, f.Z)(Error)),
                nt = function(e) {
                    (0, p.Z)(n, e);
                    var t = k(n);

                    function n() {
                        var e;
                        return (0, y.Z)(this, n), (e = t.apply(this, arguments)).message = "Received invalid PollType", e
                    }
                    return (0, v.Z)(n)
                }((0, f.Z)(Error)),
                rt = {
                    poll: !0,
                    timeout: 2e4
                };

            function it(t) {
                return new Promise(function(e) {
                    setTimeout(e, t)
                })
            }
            var at = function() {
                function r() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        n = 2 < arguments.length ? arguments[2] : void 0;
                    (0, y.Z)(this, r), e && (this.host = e), this.headers = Object.assign({
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        "X-Shopify-Wallets-Caller": "costanza"
                    }, t), this.eventEmitter = n
                }
                return (0, v.Z)(r, [{
                    key: "get",
                    value: function(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.request("GET", e, null, t)
                    }
                }, {
                    key: "post",
                    value: function(e, t) {
                        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                        return this.request("POST", e, t, n)
                    }
                }, {
                    key: "patch",
                    value: function(e, t) {
                        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                        return this.request("PATCH", e, t, n)
                    }
                }, {
                    key: "put",
                    value: function(e, t) {
                        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                        return this.request("PUT", e, t, n)
                    }
                }, {
                    key: "del",
                    value: function(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                            n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                        return this.request("DELETE", e, t, n)
                    }
                }, {
                    key: "pollCheckoutQueue",
                    value: function(u) {
                        return Qe(this, void 0, void 0, w().mark(function e() {
                            var t, n, r, i, a, o, s, c;
                            return w().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = "/queue/poll", n = "PollComplete", r = "PollContinue", i = "{ poll(token: $token) { token pollAfter } }", e.next = 6, st($e, t, {
                                            method: "POST",
                                            credentials: "same-origin",
                                            headers: {
                                                "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify({
                                                query: i,
                                                variables: {
                                                    token: u
                                                }
                                            })
                                        });
                                    case 6:
                                        return ot(i = e.sent), e.next = 10, i.json();
                                    case 10:
                                        if (c = e.sent, a = c.data.poll, o = a.__typename, s = a.token, document.cookie = "_checkout_queue_token=".concat(s, "; path=/; max-age=3600; secure"), o === n) return e.abrupt("return", s);
                                        e.next = 17;
                                        break;
                                    case 17:
                                        if (o === r) return c = a.pollAfter ? new Date(a.pollAfter) : new Date, c = c.getTime() - (new Date).getTime(), c = 0 <= c ? c : 0, e.next = 23, it(c);
                                        e.next = 26;
                                        break;
                                    case 23:
                                        return e.next = 25, this.pollCheckoutQueue(s);
                                    case 25:
                                        return e.abrupt("return", e.sent);
                                    case 26:
                                        throw new nt;
                                    case 27:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }))
                    }
                }, {
                    key: "stopPolling",
                    value: function() {
                        this.pollExpiryTimeout && window.clearTimeout(this.pollExpiryTimeout), this.pollScheduleTimeout && window.clearTimeout(this.pollScheduleTimeout)
                    }
                }, {
                    key: "request",
                    value: function(o, s, c, u) {
                        return Qe(this, void 0, void 0, w().mark(function e() {
                            var t, n, r, i, a = this;
                            return w().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = {
                                            body: JSON.stringify(c)
                                        }, "GET" === o && delete t.body, "/" === s[0] && this.host && (s = "https://".concat(this.host).concat(s)), n = function() {
                                            return fetch(s, Object.assign({
                                                method: o,
                                                headers: a.headers,
                                                credentials: "same-origin"
                                            }, t))
                                        }, e.next = 6, n();
                                    case 6:
                                        if (!(r = e.sent).headers.has(Je)) {
                                            e.next = 23;
                                            break
                                        }
                                        if (this.eventEmitter.broadcast("checkout-api:throttled"), i = ct(Ye)) return e.next = 13, this.pollCheckoutQueue(i);
                                        e.next = 15;
                                        break;
                                    case 13:
                                        i = e.sent, ut(Ye, i);
                                    case 15:
                                        return this.eventEmitter.broadcast("checkout-api:throttle-exited"), e.t0 = ot, e.next = 19, n();
                                    case 19:
                                        return e.t1 = e.sent, e.abrupt("return", (0, e.t0)(e.t1));
                                    case 23:
                                        return e.next = 25, this.poll(u, r);
                                    case 25:
                                        return e.abrupt("return", e.sent);
                                    case 26:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }))
                    }
                }, {
                    key: "poll",
                    value: function(n, r) {
                        return Qe(this, void 0, void 0, w().mark(function e() {
                            var t;
                            return w().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.pollRequest(n, r);
                                    case 2:
                                        return t = e.sent, e.abrupt("return", ot(t));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }))
                    }
                }, {
                    key: "pollRequest",
                    value: function(e, t) {
                        var n = this,
                            r = (void 0 !== e.poll ? e : rt).poll,
                            s = (void 0 !== e.timeout ? e : rt).timeout;
                        if (!r || 202 !== t.status) return Promise.resolve(t);
                        var c = {
                                method: "GET",
                                headers: this.headers
                            },
                            r = t.headers.get(Ke);
                        return r && r !== c.headers[Ke] && (c.headers[Ke] = r), new Promise(function(i, a) {
                            var o = n;
                            o.pollExpiryTimeout = window.setTimeout(function() {
                                    n.pollScheduleTimeout && clearTimeout(n.pollScheduleTimeout), a(new et(s))
                                }, s),
                                function e(t) {
                                    var n, r;
                                    202 === t.status ? (n = t.headers.get("Location")) ? (r = 1e3 * (Number(t.headers.get("Retry-After")) || 1), o.pollScheduleTimeout = window.setTimeout(function() {
                                        fetch(n, c).then(e.bind(o)).catch(a)
                                    }, r)) : a(new tt) : (o.pollExpiryTimeout && window.clearTimeout(o.pollExpiryTimeout), i(t))
                                }.call(n, t)
                        })
                    }
                }]), r
            }();

            function ot(e) {
                if (200 <= e.status && e.status < 300) return e;
                if (429 === e.status && e.headers.get("X-Checkout-Queue")) return e;
                throw new Xe(e)
            }

            function st(a, o, s) {
                return Qe(this, void 0, void 0, w().mark(function e() {
                    var t, i = this;
                    return w().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = function n() {
                                    var r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1;
                                    return Qe(i, void 0, void 0, w().mark(function e() {
                                        var t;
                                        return w().wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, fetch(o, s);
                                                case 2:
                                                    if ((t = e.sent).ok || a < r) return e.abrupt("return", t);
                                                    e.next = 7;
                                                    break;
                                                case 7:
                                                    return e.next = 9, it(Math.pow(We, r));
                                                case 9:
                                                    return e.next = 11, n(r + 1);
                                                case 11:
                                                    return e.abrupt("return", e.sent);
                                                case 12:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }, e)
                                    }))
                                }, e.next = 3, t();
                            case 3:
                                return e.abrupt("return", e.sent);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))
            }

            function ct(e) {
                var t, n = P(document.cookie.split("; "));
                try {
                    for (n.s(); !(t = n.n()).done;) {
                        var r = t.value.split("="),
                            i = (0, m.Z)(r, 2),
                            a = i[0],
                            o = i[1];
                        if (a === e) return o
                    }
                } catch (e) {
                    n.e(e)
                } finally {
                    n.f()
                }
            }

            function ut(e, t) {
                document.cookie = "".concat(e, "=").concat(t, "; path=/; max-age=3600; secure")
            }
            var ht = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                pt = function(e) {
                    (0, p.Z)(n, e);
                    var t = k(n);

                    function n() {
                        return (0, y.Z)(this, n), t.apply(this, arguments)
                    }
                    return (0, v.Z)(n)
                }((0, f.Z)(Error));

            function lt(e) {
                for (var t, n = String(e), r = 0, i = 0, a = ht, o = ""; n.charAt(0 | i) || (a = "=", i % 1); o += a.charAt(63 & r >> 8 - i % 1 * 8)) {
                    if (255 < (t = n.charCodeAt(i += .75))) throw new pt("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                    r = r << 8 | t
                }
                return o
            }
            var dt = "shopify-checkout",
                ft = {
                    getApiToken: function() {
                        return mt("api-token")
                    },
                    getAuthorizationToken: function() {
                        return mt("authorization-token")
                    }
                };

            function mt(e) {
                e = document.querySelector('meta[name="'.concat(dt, "-").concat(e, '"]'));
                return e && e.getAttribute("content") || ""
            }
            var yt = function(e) {
                    (0, p.Z)(r, e);
                    var n = k(r);

                    function r(e) {
                        var t;
                        return (0, y.Z)(this, r), (t = n.call(this, "Shipping error returned from calculate_shipping.json")).errors = e, t
                    }
                    return (0, v.Z)(r, [{
                        key: "shippingErrorMessage",
                        value: function() {
                            return this.errors && this.errors.shipping_address && this.errors.shipping_address.province_code ? "Enter a valid region for your shipping address country" : null
                        }
                    }]), r
                }((0, f.Z)(Error)),
                vt = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                },
                bt = function(e) {
                    (0, p.Z)(s, e);
                    var i = k(s);

                    function s() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
                        (0, y.Z)(this, s);
                        var n = e.accessToken,
                            r = e.secretKey,
                            n = n || ft.getApiToken(),
                            n = {
                                Authorization: "Basic ".concat(lt(n)),
                                "X-Shopify-Checkout-Version": "2018-03-05",
                                "X-Shopify-VisitToken": ct("_shopify_s"),
                                "X-Shopify-UniqueToken": ct("_shopify_y")
                            };
                        return (e = i.call(this, e.host, n, e.eventEmitter || T)).apiVersion = t, r ? (e.secretKey = r, e.storeAuthorizationToken(r)) : (e.secretKey = "", e.storeAuthorizationToken(ft.getAuthorizationToken())), e
                    }
                    return (0, v.Z)(s, [{
                        key: "request",
                        value: function(n, r, i, a) {
                            var e = this,
                                o = Object.create(null, {
                                    request: {
                                        get: function() {
                                            return h((0, c.Z)(s.prototype), "request", e)
                                        }
                                    }
                                });
                            return vt(this, void 0, void 0, w().mark(function e() {
                                var t;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, o.request.call(this, n, r, i, a);
                                        case 2:
                                            return t = e.sent, this.extractAuthorizationToken(t), e.abrupt("return", t);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "storeAuthorizationToken",
                        value: function(e) {
                            e && (this.secretKey = e, this.headers[Ke] = e)
                        }
                    }, {
                        key: "getCheckout",
                        value: function(r, i) {
                            return vt(this, void 0, void 0, w().mark(function e() {
                                var t, n;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = this.walletsApiUrl("/checkouts/".concat(r, ".json")), "ShopifyPay" === i && (t += "?checkout=".concat(JSON.stringify({
                                                wallet_name: i
                                            }))), e.next = 4, this.get(t);
                                        case 4:
                                            return n = e.sent, e.next = 7, n.json();
                                        case 7:
                                            return n = e.sent, n = n.checkout, e.abrupt("return", n);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "createCheckout",
                        value: function(n, r) {
                            return vt(this, void 0, void 0, w().mark(function e() {
                                var t;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return (t = {
                                                checkout: n,
                                                checkpoint_data: r
                                            }).checkout && null == t.checkout.secret && (t.checkout.secret = !0), e.next = 4, this.post(this.walletsApiUrl("/checkouts.json"), t, {
                                                poll: !1
                                            });
                                        case 4:
                                            return t = e.sent, e.abrupt("return", t);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "updateCheckout",
                        value: function(n, r) {
                            return vt(this, void 0, void 0, w().mark(function e() {
                                var t;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.patch(this.walletsApiUrl("/checkouts/".concat(n, ".json")), {
                                                checkout: r
                                            });
                                        case 2:
                                            return t = e.sent, e.next = 5, t.json();
                                        case 5:
                                            return t = e.sent, t = t.checkout, e.abrupt("return", t);
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "addReductionCode",
                        value: function(n, r) {
                            return vt(this, void 0, void 0, w().mark(function e() {
                                var t;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.patch(this.walletsApiUrl("/checkouts/".concat(n, ".json")), {
                                                checkout: {
                                                    reduction_code: r
                                                }
                                            });
                                        case 2:
                                            return t = e.sent, e.next = 5, t.json();
                                        case 5:
                                            return t = e.sent, t = t.checkout, e.abrupt("return", t);
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "getShippingRates",
                        value: function(n) {
                            return vt(this, void 0, void 0, w().mark(function e() {
                                var t;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.get(this.walletsApiUrl("/checkouts/".concat(n, "/shipping_rates.json")));
                                        case 2:
                                            return t = e.sent, e.next = 5, t.json();
                                        case 5:
                                            return t = e.sent, t = t.shipping_rates, e.abrupt("return", t);
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "calculateShipping",
                        value: function(r, i) {
                            return vt(this, void 0, void 0, w().mark(function e() {
                                var t, n;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.post("/wallets/checkouts/".concat(r, "/calculate_shipping.json"), {
                                                checkout: {
                                                    partial_addresses: !0,
                                                    shipping_address: i
                                                }
                                            });
                                        case 2:
                                            return t = e.sent, e.next = 5, t.json();
                                        case 5:
                                            if ((n = e.sent).checkout) return e.abrupt("return", n.checkout);
                                            e.next = 10;
                                            break;
                                        case 10:
                                            if (n.errors) throw new yt(n.errors);
                                            e.next = 12;
                                            break;
                                        case 12:
                                            throw new Error("unable to read checkout from response from calculate_shipping endpoint");
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "createPayment",
                        value: function(n, r, i) {
                            return vt(this, void 0, void 0, w().mark(function e() {
                                var t;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.post(this.walletsApiUrl("/checkouts/".concat(n, "/payments.json")), {
                                                payment: r
                                            }, i);
                                        case 2:
                                            return t = e.sent, e.next = 5, t.json();
                                        case 5:
                                            return t = e.sent, e.abrupt("return", t.payment);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "createPaymentSession",
                        value: function(n, r) {
                            return vt(this, void 0, void 0, w().mark(function e() {
                                var t;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, fetch(n, {
                                                headers: {
                                                    Accept: "application/json",
                                                    "Content-Type": "application/json"
                                                },
                                                body: JSON.stringify(r),
                                                mode: "cors",
                                                method: "POST"
                                            });
                                        case 2:
                                            return t = e.sent, e.next = 5, t.json();
                                        case 5:
                                            return t = e.sent, e.abrupt("return", t);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }))
                        }
                    }, {
                        key: "completeFreeCheckout",
                        value: function(n) {
                            return vt(this, void 0, void 0, w().mark(function e() {
                                var t;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.post(this.walletsApiUrl("/checkouts/".concat(n, "/complete.json")), {
                                                checkout: {
                                                    token: n,
                                                    order: null
                                                }
                                            }, {
                                                poll: !1
                                            });
                                        case 2:
                                            return t = e.sent, e.next = 5, t.json();
                                        case 5:
                                            return t = e.sent, t = t.checkout, e.abrupt("return", t);
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "getLandedCostState",
                        value: function(r) {
                            return vt(this, void 0, void 0, w().mark(function e() {
                                var t, n;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.get("/wallets/checkouts/".concat(r, "/landed_costs.json"), {
                                                poll: !0
                                            });
                                        case 3:
                                            return t = e.sent, e.next = 6, t.json();
                                        case 6:
                                            return n = e.sent, n = n.state, e.abrupt("return", n);
                                        case 11:
                                            return e.prev = 11, e.t0 = e.catch(0), e.next = 15, e.t0.response.json();
                                        case 15:
                                            return n = e.sent, n = n.state, e.abrupt("return", n);
                                        case 18:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [0, 11]
                                ])
                            }))
                        }
                    }, {
                        key: "extractAuthorizationToken",
                        value: function(e) {
                            var t = e.headers.get(Ke);
                            e.ok && this.storeAuthorizationToken(t)
                        }
                    }, {
                        key: "walletsApiUrl",
                        value: function(e) {
                            return (this.validApiVersion() ? "/wallets/".concat(this.apiVersion) : "/wallets").concat(e)
                        }
                    }, {
                        key: "validApiVersion",
                        value: function() {
                            if (!this.apiVersion) return !1;
                            var e = /^(\d{4}-\d{2}|unstable)$/;
                            return null !== this.apiVersion.match(e)
                        }
                    }]), s
                }(at),
                wt = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                };

            function kt(i) {
                return wt(this, void 0, void 0, w().mark(function e() {
                    var t, n, r;
                    return w().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = i.shopId, r = i.validationUrl, n = i.domain, e.next = 3, gt(t, {
                                    id: H(),
                                    domain: n,
                                    validation_url: r
                                });
                            case 3:
                                return r = e.sent, r = r.body, e.abrupt("return", r);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))
            }

            function gt(i, a) {
                return wt(this, void 0, void 0, w().mark(function e() {
                    var t, n, r;
                    return w().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = new at(null, void 0, T), n = "/".concat(i, "/apple_pay/sessions"), e.next = 4, t.post(n, a);
                            case 4:
                                return r = e.sent, e.next = 7, r.json();
                            case 7:
                                return r = e.sent, e.abrupt("return", r);
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))
            }

            function xt(e, t) {
                return {
                    type: "final",
                    label: t,
                    amount: e.attributes.payment_due
                }
            }

            function _t(e) {
                var t = [St(e)],
                    n = e.attributes.shipping_line;
                n && (t = (r = (e.attributes.available_shipping_rates || []).find(function(e) {
                    return e.price === n.price && e.title === n.title
                })) && r.delivery_options && 1 < r.delivery_options.length ? t.concat(r.delivery_options.map(function(e) {
                    return {
                        type: "final",
                        label: e.name,
                        amount: e.price
                    }
                })) : t.concat([{
                    type: "final",
                    label: n.title,
                    amount: n.price
                }])), e.attributes.total_duties && (t = t.concat([{
                    type: "final",
                    label: "Duties",
                    amount: e.attributes.total_duties
                }])), e.attributes.total_tax && e.landedCostState !== x.Error && (t = t.concat([{
                    type: "final",
                    label: "Estimated Tax",
                    amount: e.attributes.total_tax
                }]));
                var r = Number(e.attributes.total_discount_amount);
                0 < r && (t = t.concat([{
                    type: "final",
                    label: "Discount",
                    amount: "-".concat(r)
                }])), e.attributes.gift_cards && (t = t.concat(e.attributes.gift_cards.map(function(e) {
                    return {
                        type: "final",
                        label: "Gift card ending with ".concat(e.last_characters),
                        amount: "-".concat(e.amount_used)
                    }
                })));
                r = (e.attributes.recurring_totals || []).map(function(e) {
                    return {
                        label: e.recurring_total_detail,
                        amount: "0.00",
                        type: "pending"
                    }
                });
                return t = t.concat(r), t = e.attributes.recurring_total_tooltip && 0 < r.length ? t.concat({
                    label: e.attributes.recurring_total_tooltip,
                    amount: "0.00",
                    type: "pending"
                }) : t
            }

            function Pt(e) {
                return e.shippingRates.map(function(e) {
                    return {
                        identifier: e.id,
                        label: e.title,
                        detail: e.delivery_promise_presentment_title,
                        amount: e.price
                    }
                })
            }

            function St(e) {
                return {
                    type: "final",
                    label: "Subtotal",
                    amount: e.attributes.total_line_items_price
                }
            }

            function At(e) {
                var t = e.attributes.apple_pay_configuration;
                if (t && t.walletAuthenticationToken && t.walletOrderTypeIdentifier && t.walletServiceUrl) return {
                    authenticationToken: t.walletAuthenticationToken,
                    orderTypeIdentifier: t.walletOrderTypeIdentifier,
                    webServiceURL: t.walletServiceUrl,
                    orderIdentifier: e.token
                }
            }
            var b = function(e, t, n, r) {
                    var i, a = arguments.length,
                        o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, ie.Z)(Reflect)) && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
                    else
                        for (var s = e.length - 1; 0 <= s; s--)(i = e[s]) && (o = (a < 3 ? i(o) : 3 < a ? i(t, n, o) : i(t, n)) || o);
                    return 3 < a && o && Object.defineProperty(t, n, o), o
                },
                Ct = function(e, t) {
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, ie.Z)(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
                Tt = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                },
                t = Q,
                It = t.Failure,
                Et = t.Cancelled,
                Ot = t.Success,
                Rt = function() {
                    function n(e) {
                        var t = this;
                        (0, y.Z)(this, n), this.id = "ApplePay", this.params = Object.freeze({
                            currencyChange: "wallet_currency_change",
                            forceWallet: "force_wallet",
                            forceStep: "step"
                        }), this.resolve = function(e) {}, this.fail = function(e) {
                            t.resolve({
                                state: It,
                                errors: ne(e)
                            })
                        }, this.oncancel = function() {
                            return t.cancelled = !0, t.checkout.stopPolling(), t.paymentInProgress ? t.fail(["Your order is being processed and can't be cancelled at this time.You will receive an email confirmation once the transaction is succesful."]) : t.resolve({
                                state: Et,
                                errors: []
                            }), Promise.resolve()
                        }, this.onvalidatemerchant = function(r) {
                            return Tt(t, void 0, void 0, w().mark(function e() {
                                var t, n;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = r.validationURL, e.prev = 1, e.next = 4, kt({
                                                shopId: this.shopId,
                                                domain: location.hostname,
                                                validationUrl: t
                                            });
                                        case 4:
                                            if (n = e.sent, this.cancelled) return e.abrupt("return");
                                            e.next = 7;
                                            break;
                                        case 7:
                                            this.session.completeMerchantValidation(n), e.next = 14;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(1), console.warn(e.t0.message), this.handleErrors(te("failed_session"));
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [1, 10]
                                ])
                            }))
                        }, this.onshippingcontactselected = function(a) {
                            return Tt(t, void 0, void 0, w().mark(function e() {
                                var t, n, r, i;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0, this.paymentInProgress) return e.abrupt("return");
                                            e.next = 3;
                                            break;
                                        case 3:
                                            return e.next = 5, this.checkout.calculateShipping(pe(a.shippingContact, !0));
                                        case 5:
                                            if (this.checkout.clearLandedCostState(), this.checkout.attributes.duties_applicable) return e.next = 9, this.checkout.getLandedCostState();
                                            e.next = 9;
                                            break;
                                        case 9:
                                            if (this.cancelled) return e.abrupt("return");
                                            e.next = 11;
                                            break;
                                        case 11:
                                            t = xt(this.checkout, this.merchantName), n = _t(this.checkout), this.session.completeShippingContactSelection({
                                                newShippingMethods: Pt(this.checkout),
                                                newTotal: t,
                                                newLineItems: n
                                            }), e.next = 49;
                                            break;
                                        case 16:
                                            if (e.prev = 16, e.t0 = e.catch(0), e.prev = 18, console.warn(e.t0.message), Nt(e.t0)) {
                                                e.next = 22;
                                                break
                                            }
                                            throw e.t0;
                                        case 22:
                                            return e.next = 24, e.t0.response.json();
                                        case 24:
                                            if (i = e.sent, r = ye(i), this.cancelled) return e.abrupt("return");
                                            e.next = 28;
                                            break;
                                        case 28:
                                            t = xt(this.checkout, this.merchantName), n = _t(this.checkout), this.session.completeShippingContactSelection({
                                                errors: r,
                                                newShippingMethods: Pt(this.checkout),
                                                newTotal: t,
                                                newLineItems: n
                                            }), e.next = 49;
                                            break;
                                        case 33:
                                            e.prev = 33, e.t1 = e.catch(18), console.warn(e.t1.message), e.prev = 36, e.t2 = e.t1.message, e.next = "Total amount must be greater than zero" === e.t2 ? 40 : "Total amount is too big" === e.t2 ? 41 : 42;
                                            break;
                                        case 40:
                                            return e.abrupt("return", this.handleErrors([te("total_price_zero")]));
                                        case 41:
                                            return e.abrupt("return", this.handleErrors([te("total_price_too_big")]));
                                        case 42:
                                            return e.abrupt("return", this.session.abort());
                                        case 43:
                                            e.next = 49;
                                            break;
                                        case 45:
                                            e.prev = 45, e.t3 = e.catch(36), i = {
                                                walletName: "applepay",
                                                error: e.t3,
                                                metadata: {
                                                    checkoutToken: this.checkout.token,
                                                    webkitErrorMessage: e.t1.message,
                                                    total: JSON.stringify(t),
                                                    lineItems: JSON.stringify(n)
                                                }
                                            }, T.broadcast("wallets:payment-error", i);
                                        case 49:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [0, 16],
                                    [18, 33],
                                    [36, 45]
                                ])
                            }))
                        }, this.onshippingmethodselected = function(i) {
                            return Tt(t, void 0, void 0, w().mark(function e() {
                                var t, n, r;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t = i.shippingMethod, (n = this.checkout.shippingRates.find(function(e) {
                                                    return e.id === t.identifier
                                                })) && t.identifier) {
                                                e.next = 5;
                                                break
                                            }
                                            return this.session.completePayment({
                                                status: ApplePaySession.STATUS_FAILURE,
                                                errors: fe(te("cannot_find_shipping_rate"))
                                            }), e.abrupt("return");
                                        case 5:
                                            return r = jt(n, t.identifier, this.checkout.attributes), e.prev = 6, e.next = 9, this.checkout.update(r);
                                        case 9:
                                            if (this.cancelled) return e.abrupt("return");
                                            e.next = 11;
                                            break;
                                        case 11:
                                            this.session.completeShippingMethodSelection({
                                                newLineItems: _t(this.checkout),
                                                newTotal: xt(this.checkout, this.merchantName)
                                            }), e.next = 18;
                                            break;
                                        case 14:
                                            e.prev = 14, e.t0 = e.catch(6), console.warn(e.t0.message), this.handleErrors(e.t0.message);
                                        case 18:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [6, 14]
                                ])
                            }))
                        }, this.onpaymentmethodselected = function(e) {
                            return Tt(t, void 0, void 0, w().mark(function e() {
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (window.Shopify && window.Shopify.Checkout && window.Shopify.Checkout.estimatedPrice && this.checkout.attributes && this.checkout.attributes.payment_due !== window.Shopify.Checkout.estimatedPrice.toString()) return e.next = 3, this.checkout.reload();
                                            e.next = 3;
                                            break;
                                        case 3:
                                            if (this.cancelled) return e.abrupt("return");
                                            e.next = 5;
                                            break;
                                        case 5:
                                            return this.session.completePaymentMethodSelection({
                                                newTotal: xt(this.checkout, this.merchantName),
                                                newLineItems: _t(this.checkout)
                                            }), e.abrupt("return", Promise.resolve());
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }, this.promise = new Promise(function(e) {
                            t.resolve = e
                        }), this.checkout = e.checkout, this.merchantName = e.merchantName, this.paymentInProgress = !1, this.shopId = e.shopId, this.cancelled = !1, this.session = e.session, this.session.oncancel = this.oncancel, this.session.onpaymentauthorized = this.onpaymentauthorized.bind(this), this.session.onpaymentmethodselected = this.onpaymentmethodselected, this.session.onshippingcontactselected = this.onshippingcontactselected, this.session.onshippingmethodselected = this.onshippingmethodselected, this.session.onvalidatemerchant = this.onvalidatemerchant, this.walletOrderDetails = At(this.checkout)
                    }
                    return (0, v.Z)(n, [{
                        key: "begin",
                        value: function() {
                            return Tt(this, void 0, void 0, w().mark(function e() {
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return this.session.begin(), e.abrupt("return", this.promise);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "onpaymentauthorized",
                        value: function(e) {
                            var m = e.payment;
                            return Tt(this, void 0, void 0, w().mark(function e() {
                                var n, r, i, a, o, s, c, u, h, p, l, d, f;
                                return w().wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (h = m.token, o = m.billingContact, s = m.shippingContact, n = h.paymentData, r = ue(), i = o && o.emailAddress || s && s.emailAddress, null != s && le(s) && T.broadcast("wallets:log", {
                                                    walletName: "APPLE_PAY",
                                                    message: "Detected incomplete shipping postal code during wallet payment submission",
                                                    metadata: {
                                                        postalCode: s.postalCode || "",
                                                        countryCode: s.countryCode || "",
                                                        country: s.country || "",
                                                        city: s.locality || "",
                                                        zone: s.administrativeArea || "",
                                                        checkoutToken: this.checkout.token,
                                                        shopId: this.shopId
                                                    }
                                                }), a = o && pe(o), o = s && pe(s), s = Zt(h.paymentMethod.displayName), h = Dt(h.paymentMethod.network), s = {
                                                    email: i,
                                                    billing_address: a,
                                                    shipping_address: this.checkout.attributes.requires_shipping ? o : null,
                                                    credit_card: {
                                                        last_digits: s,
                                                        brand: h
                                                    }
                                                }, this.checkout.attributes.requires_shipping && !this.checkout.attributes.shipping_line) return this.session.completePayment({
                                                status: ApplePaySession.STATUS_FAILURE,
                                                errors: fe(te("no_shipping_option"))
                                            }), t.abrupt("return");
                                            t.next = 13;
                                            break;
                                        case 13:
                                            return t.prev = 13, u = this.checkout.attributes.presentment_currency, t.next = 17, this.checkout.update(s);
                                        case 17:
                                            if (h = t.sent, h.attributes.presentment_currency !== u) return (h = new URL(this.checkout.attributes.web_url)).searchParams.set(this.params.currencyChange, "true"), h.searchParams.set(this.params.forceWallet, "true"), h.searchParams.set(this.params.forceStep, "contact_information"), location.assign(h), t.abrupt("return", this.session.abort());
                                            t.next = 26;
                                            break;
                                        case 26:
                                            if (p = {
                                                    unique_token: H(),
                                                    amount: this.checkout.attributes.total_price,
                                                    payment_token: {
                                                        type: "apple_pay",
                                                        payment_data: JSON.stringify(n)
                                                    }
                                                }, this.paymentInProgress = !0, "0.00" !== this.checkout.attributes.payment_due || this.checkout.attributes.has_selling_plans) {
                                                t.next = 36;
                                                break
                                            }
                                            return t.next = 31, this.checkout.completeFreeCheckout();
                                        case 31:
                                            d = t.sent, this.paymentInProgress = !1, c = d.attributes.web_url, t.next = 51;
                                            break;
                                        case 36:
                                            return t.next = 38, Promise.race([this.checkout.createPayment(p), r]);
                                        case 38:
                                            if ((l = t.sent) !== ce) {
                                                t.next = 46;
                                                break
                                            }
                                            this.paymentInProgress = !1, d = this.checkout.attributes.web_url, d = d.split("/"), c = "".concat(this.checkout.attributes.web_url) + "".concat(d[d.length - 1].match(/\?/) ? "&" : "?", "apple_pay_timeout=true"), t.next = 51;
                                            break;
                                        case 46:
                                            if (this.paymentInProgress = !1, l.isSuccess) {
                                                t.next = 50;
                                                break
                                            }
                                            return this.session.completePayment({
                                                status: ApplePaySession.STATUS_FAILURE,
                                                errors: fe(l.payment_processing_error_message || "")
                                            }), t.abrupt("return");
                                        case 50:
                                            c = l.checkout.web_url;
                                        case 51:
                                            this.walletOrderDetails ? this.session.completePayment({
                                                status: ApplePaySession.STATUS_SUCCESS,
                                                orderDetails: this.walletOrderDetails
                                            }) : this.session.completePayment({
                                                status: ApplePaySession.STATUS_SUCCESS
                                            }), location.assign(c), this.resolve({
                                                state: Ot
                                            }), t.next = 78;
                                            break;
                                        case 56:
                                            if (t.prev = 56, t.t0 = t.catch(13), console.warn(t.t0.message), Nt(t.t0)) return t.prev = 60, t.next = 63, t.t0.response.json();
                                            t.next = 73;
                                            break;
                                        case 63:
                                            f = t.sent, this.session.completePayment({
                                                status: ApplePaySession.STATUS_FAILURE,
                                                errors: me(f)
                                            }), t.next = 71;
                                            break;
                                        case 67:
                                            t.prev = 67, t.t1 = t.catch(60), console.warn(t.t1.message), this.session.completePayment({
                                                status: ApplePaySession.STATUS_FAILURE
                                            });
                                        case 71:
                                            t.next = 78;
                                            break;
                                        case 73:
                                            f = t.t0;
                                            try {
                                                this.session.completePayment({
                                                    status: ApplePaySession.STATUS_FAILURE
                                                })
                                            } catch (e) {
                                                e.cause = t.t0, f = e
                                            }
                                            f.name = "[ApplePayPaymentError] ".concat(f.name), f = {
                                                walletName: "applepay",
                                                error: f,
                                                metadata: {
                                                    checkoutToken: this.checkout.token
                                                }
                                            }, T.broadcast("wallets:payment-error", f);
                                        case 78:
                                        case "end":
                                            return t.stop()
                                    }
                                }, e, this, [
                                    [13, 56],
                                    [60, 67]
                                ])
                            }))
                        }
                    }, {
                        key: "handleErrors",
                        value: function(e) {
                            this.fail(e), this.session.abort()
                        }
                    }]), n
                }();

            function Nt(e) {
                return e && e.response && 422 === e.response.status
            }

            function jt(e, t, n) {
                return n.has_selling_plans && e.delivery_options && 0 < e.delivery_options.length ? {
                    delivery_options: e.delivery_options
                } : {
                    shipping_line: {
                        handle: t
                    }
                }
            }

            function Zt(e) {
                e = e.match(/ (\d+)$/);
                return e ? e[1] : ""
            }

            function Dt(e) {
                switch (e.toLowerCase()) {
                    case "amex":
                        return "american_express";
                    case "mastercard":
                        return "master"
                }
                return e
            }
            b([L("acceleration.latency.benchmark", "id", "instrument"), Ct("design:type", Function), Ct("design:paramtypes", [Object]), Ct("design:returntype", Promise)], Rt.prototype, "onpaymentauthorized", null);
            var Ut = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                },
                qt = function(e, t) {
                    var n = {};
                    for (i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]]);
                    return n
                },
                Lt = 5,
                zt = function() {
                    function s(e, t) {
                        (0, y.Z)(this, s), this.id = "ApplePay";
                        var n = e.shopId,
                            r = e.merchantName,
                            i = e.walletAuthenticationToken,
                            a = e.walletOrderTypeIdentifier,
                            o = e.walletServiceUrl,
                            e = qt(e, ["shopId", "merchantName", "walletAuthenticationToken", "walletOrderTypeIdentifier", "walletServiceUrl"]);
                        this.shopId = n.toString(), this.merchantId = t, this.merchantName = r, this.applePayPaymentRequest = e, i && a && o && (this.walletOrderTrackingConfig = {
                            walletAuthenticationToken: i,
                            walletOrderTypeIdentifier: a,
                            walletServiceUrl: o
                        })
                    }
                    return (0, v.Z)(s, [{
                        key: "canMakeAcceleratedPurchase",
                        value: function() {
                            return V(this.merchantId)
                        }
                    }, {
                        key: "begin",
                        value: function(r, i) {
                            return Ut(this, void 0, void 0, w().mark(function e() {
                                var t, n;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return i && !1 === i.requiresShipping && (this.applePayPaymentRequest.requiredShippingContactFields = ["email"]), t = new ApplePaySession(Lt, this.applePayPaymentRequest), e.next = 4, r;
                                        case 4:
                                            return n = e.sent, n = new Rt({
                                                session: t,
                                                checkout: n,
                                                shopId: this.shopId,
                                                merchantName: this.merchantName,
                                                walletOrderTrackingConfig: this.walletOrderTrackingConfig
                                            }), T.subscribe("checkout-api:throttled", Mt), e.abrupt("return", n.begin());
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }]), s
                }();

            function Mt() {
                C.redirectToThrottlePage()
            }
            var Bt, Ft = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                },
                Vt = function(e, t) {
                    var n = {};
                    for (i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]]);
                    return n
                },
                Gt = function() {
                    function e() {
                        (0, y.Z)(this, e)
                    }
                    return (0, v.Z)(e, null, [{
                        key: "isSupported",
                        get: function() {
                            return "undefined" != typeof ApplePaySession && ApplePaySession.canMakePayments() && ApplePaySession.supportsVersion(Lt)
                        }
                    }, {
                        key: "load",
                        value: function(e) {
                            var t = e.merchantId,
                                n = Vt(e, ["merchantId"]);
                            return Ft(this, void 0, void 0, w().mark(function e() {
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", new zt(n, t));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }))
                        }
                    }]), e
                }();
            (Ct = Bt = Bt || {})[Ct.error = 1] = "error", Ct[Ct.warn = 2] = "warn", Ct[Ct.log = 3] = "log", Ct[Ct.info = 4] = "info", Ct[Ct.debug = 5] = "debug";
            Object.keys(Bt).map(function(e) {
                return Bt[e]
            }).filter(function(e) {
                return "string" == typeof e
            });
            var Ht = console,
                $t = function() {
                    function e() {
                        (0, y.Z)(this, e)
                    }
                    return (0, v.Z)(e, null, [{
                        key: "inject",
                        value: function(e, t) {
                            var n = t.constant,
                                r = t.event,
                                i = t.version;
                            if (n && Wt(n)) {
                                var a = Wt(n);
                                if ("paypal" !== n || a && a.version && a.version.startsWith(i)) return Promise.resolve(window[n])
                            }
                            i = this.find(e);
                            return i ? Promise.reject("Preloaded script failed to load") : Jt(i = t.dataset ? this.insert(e, t.dataset) : this.insert(e), {
                                constant: n,
                                event: r
                            })
                        }
                    }, {
                        key: "insert",
                        value: function(e, t) {
                            var n = document.createElement("script");
                            return n.src = e, t && Object.keys(t).forEach(function(e) {
                                n.dataset[e] = t[e]
                            }), (document.head || document.getElementsByTagName("head")[0]).appendChild(n)
                        }
                    }, {
                        key: "find",
                        value: function(e) {
                            return document.querySelector('script[src="'.concat(e, '"]'))
                        }
                    }]), e
                }();

            function Wt(e) {
                return window[e]
            }

            function Jt(r, e) {
                var i = e.constant,
                    a = e.event;
                return new Promise(function(e, t) {
                    function n() {
                        i ? e(window[i]) : e()
                    }
                    a ? Yt(window, a, n) : (r.addEventListener("load", n), r.addEventListener("error", t))
                })
            }

            function Yt(r, e, i) {
                var a = r[e];
                r[e] = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    a && a.call(r, t), i.call(r, t)
                }
            }
            var Kt, Xt = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                },
                Qt = "https://coin-assets.amazonpay.com/affinity.js",
                en = "AmazonPay",
                tn = "amazon",
                nn = "acceleration.check.benchmark:AmazonPay",
                rn = function() {
                    function t(e) {
                        (0, y.Z)(this, t), this.id = "AmazonPay", this.shopId = e.shopId, this.domain = e.domain, this.region = e.region, this.merchantId = e.merchantId, this.uuid = e.uuid, this.timestamp = e.timestamp, this.signature = e.signature, this.keyPairName = e.keyPairName, this.solutionProviderId = e.solutionProviderId, this.sandbox = e.sandbox, this.clientId = e.clientId, this.version = e.version
                    }
                    return (0, v.Z)(t, [{
                        key: "canMakeAcceleratedPurchase",
                        value: function() {
                            return Xt(this, void 0, void 0, w().mark(function e() {
                                var t, n = this;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (null === this.signature) return e.abrupt("return", !1);
                                            e.next = 2;
                                            break;
                                        case 2:
                                            if ("boolean" == typeof(t = R(tn))) return e.abrupt("return", t);
                                            e.next = 5;
                                            break;
                                        case 5:
                                            return e.next = 7, $t.inject(Qt, {
                                                constant: en
                                            });
                                        case 7:
                                            return D(nn), t = new Promise(function(e) {
                                                Kt = e, window.AmazonPay.affinity({
                                                    merchantId: n.merchantId,
                                                    solutionProviderId: n.solutionProviderId,
                                                    region: n.region,
                                                    requestId: n.uuid,
                                                    timestamp: n.timestamp,
                                                    domain: n.domain,
                                                    keyPairName: n.keyPairName,
                                                    signature: n.signature,
                                                    onResponse: function(e) {
                                                        return n.onAmazonResponse(e)
                                                    },
                                                    onError: function(e) {
                                                        return n.onAmazonError(e)
                                                    }
                                                })
                                            }), e.abrupt("return", t);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "onAmazonResponse",
                        value: function(e) {
                            q("acceleration.check.benchmark", U(nn), {
                                instrument: "AmazonPay"
                            });
                            e = "yes" === e.affinityStatus;
                            O(tn, e, 1800), Kt(e)
                        }
                    }, {
                        key: "onAmazonError",
                        value: function(e) {
                            q("acceleration.check.benchmark", U(nn), {
                                instrument: "AmazonPay"
                            }), Ht.info(e), Kt(!1)
                        }
                    }, {
                        key: "begin",
                        value: function(r) {
                            return Xt(this, void 0, void 0, w().mark(function e() {
                                var t, n;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, r;
                                        case 2:
                                            return n = e.sent, t = n.attributes.token, n = n.secretKey, n = an(this.domain, this.shopId, t, n), T.broadcast("amazonpay:redirect-url", {
                                                url: n
                                            }), window.location.assign(n), e.abrupt("return", {
                                                state: Q.Success
                                            });
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }]), t
                }();

            function an(e, t, n, r) {
                return "https://".concat(e, "/").concat(t, "/checkouts/").concat(n, "/amazon_payments/forward?key=").concat(r)
            }
            var on, sn = {
                    NA: "https://static-na.payments-amazon.com/checkout.js",
                    UK: "https://static-eu.payments-amazon.com/checkout.js",
                    EU: "https://static-eu.payments-amazon.com/checkout.js",
                    FE: "https://static-fe.payments-amazon.com/checkout.js"
                },
                cn = "amazon";

            function un(e) {
                e = e || "NA";
                return $t.inject(sn[e], {
                    constant: cn
                })
            }(Ct = on = on || {})[Ct.en_US = 0] = "en_US", Ct[Ct.de_DE = 1] = "de_DE", Ct[Ct.fr_FR = 2] = "fr_FR", Ct[Ct.it_IT = 3] = "it_IT", Ct[Ct.es_ES = 4] = "es_ES", Ct[Ct.en_GB = 5] = "en_GB", Ct[Ct.ja_JP = 6] = "ja_JP";
            var hn, pn = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                },
                ln = "en_US",
                dn = "C0001",
                fn = "https://coin-assets.amazonpay.com/affinity.js",
                mn = "AmazonPay",
                yn = "amazon",
                vn = "acceleration.check.benchmark:AmazonPay",
                bn = function() {
                    function n(e, t) {
                        (0, y.Z)(this, n), this.id = "AmazonPay", this.amazon = e, this.config = t
                    }
                    return (0, v.Z)(n, [{
                        key: "canMakeAcceleratedPurchase",
                        value: function() {
                            return pn(this, void 0, void 0, w().mark(function e() {
                                var t, n = this;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (null === this.config.signature) return e.abrupt("return", !1);
                                            e.next = 2;
                                            break;
                                        case 2:
                                            if ("boolean" == typeof(t = R(yn))) return e.abrupt("return", t);
                                            e.next = 5;
                                            break;
                                        case 5:
                                            return e.next = 7, $t.inject(fn, {
                                                constant: mn
                                            });
                                        case 7:
                                            return D(vn), t = new Promise(function(e) {
                                                hn = e, window.AmazonPay.affinity({
                                                    merchantId: n.config.merchantId,
                                                    solutionProviderId: n.config.solutionProviderId,
                                                    region: n.config.region,
                                                    requestId: n.config.uuid,
                                                    timestamp: n.config.timestamp,
                                                    domain: n.config.domain,
                                                    keyPairName: n.config.keyPairName,
                                                    signature: n.config.signature,
                                                    onResponse: function(e) {
                                                        return n.onAmazonResponse(e)
                                                    },
                                                    onError: function(e) {
                                                        return n.onAmazonError(e)
                                                    }
                                                })
                                            }), e.abrupt("return", t);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "onAmazonResponse",
                        value: function(e) {
                            q("acceleration.check.benchmark", U(vn), {
                                instrument: "AmazonPay"
                            });
                            e = "yes" === e.affinityStatus;
                            O(yn, e, 1800), hn(e)
                        }
                    }, {
                        key: "onAmazonError",
                        value: function(e) {
                            q("acceleration.check.benchmark", U(vn), {
                                instrument: "AmazonPay"
                            }), Ht.info(e), hn(!1)
                        }
                    }, {
                        key: "createCheckoutSessionPromise",
                        value: function(n) {
                            var e = this;
                            return function() {
                                return pn(e, void 0, void 0, w().mark(function e() {
                                    var t;
                                    return w().wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, n.build(this.id);
                                            case 3:
                                                return this.checkout = e.sent, this.checkoutApiClient = new bt({
                                                    secretKey: this.checkout.secretKey
                                                }), e.next = 7, this.checkoutApiClient.post("/".concat(this.config.shopId, "/checkouts/").concat(this.checkout.token, "/amazon_payments/create_checkout_session"), {
                                                    key: this.checkout.secretKey
                                                });
                                            case 7:
                                                return t = e.sent, e.next = 10, t.json();
                                            case 10:
                                                t = e.sent, this.amazonCheckoutSessionId = t.checkoutSessionId, e.next = 17;
                                                break;
                                            case 14:
                                                e.prev = 14, e.t0 = e.catch(0), Ht.info("an error has occured while tried to create a checkout.", e.t0);
                                            case 17:
                                                if (this.amazonCheckoutSessionId) return e.abrupt("return", this.amazonCheckoutSessionId);
                                                e.next = 19;
                                                break;
                                            case 19:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e, this, [
                                        [0, 14]
                                    ])
                                }))
                            }
                        }
                    }, {
                        key: "render",
                        value: function(n, r) {
                            return pn(this, void 0, void 0, w().mark(function e() {
                                var t;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            t = wn(this.config.country, this.config.locale), t = {
                                                merchantId: this.config.merchantId,
                                                region: this.config.region,
                                                createCheckoutSession: this.createCheckoutSessionPromise(r),
                                                ledgerCurrency: this.config.currency,
                                                placement: this.config.placement,
                                                sandbox: this.config.sandbox,
                                                design: dn,
                                                productType: this.productType(),
                                                checkoutLanguage: t
                                            }, this.amazon.Pay.renderButton("#".concat(n.id), t);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "productType",
                        value: function() {
                            var e = "PayAndShip",
                                t = "PayOnly";
                            return window.Shopify.Checkout && !1 === window.Shopify.Checkout.requiresShipping ? t : e
                        }
                    }]), n
                }();

            function wn(e, t) {
                if (t) {
                    e = "".concat(t, "_").concat(e);
                    if (e in on) return e
                }
                return ln
            }
            var kn = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                },
                gn = function() {
                    function e() {
                        (0, y.Z)(this, e)
                    }
                    return (0, v.Z)(e, null, [{
                        key: "load",
                        value: function(n) {
                            return kn(this, void 0, void 0, w().mark(function e() {
                                var t;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            e.t0 = n.version, e.next = "MAXO" === e.t0 ? 3 : "classic" === e.t0 ? 7 : 8;
                                            break;
                                        case 3:
                                            return e.next = 5, un(n.region);
                                        case 5:
                                            return t = e.sent, e.abrupt("return", new bn(t, n));
                                        case 7:
                                            return e.abrupt("return", new rn(n));
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }))
                        }
                    }]), e
                }();
            gn.isSupported = !0;
            var xn = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                },
                _n = function(e) {
                    (0, p.Z)(n, e);
                    var t = k(n);

                    function n(e) {
                        return (0, y.Z)(this, n), (e = t.call(this, "Failed to show Amazon Pay CV2: ".concat(e.message))).name = "AmazonPayCv2ClickError", e
                    }
                    return (0, v.Z)(n)
                }((0, f.Z)(Error)),
                Pn = function() {
                    function r(e) {
                        var t = e.accessToken,
                            n = e.config,
                            e = e.sdk;
                        (0, y.Z)(this, r), this.id = "AmazonPayCv2", this.CV2_CONFIG_REST_API_URL = "".concat(window.location.origin, "/wallets/config/amazon_pay"), this.accessToken = t, this.config = n, this.sdk = e
                    }
                    return (0, v.Z)(r, [{
                        key: "onClickError",
                        value: function(e) {
                            this.onClickErrorListener = e
                        }
                    }, {
                        key: "canMakeAcceleratedPurchase",
                        value: function() {
                            return xn(this, void 0, void 0, w().mark(function e() {
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", Promise.resolve(!1));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function(r, i) {
                            return xn(this, void 0, void 0, w().mark(function e() {
                                var t, n = this;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            (t = this.sdk.Pay.renderButton("#".concat(r.id), this.config)).onClick(function() {
                                                return n.initCheckout(t, i)
                                            });
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "initCheckout",
                        value: function(a, o) {
                            var s;
                            return xn(this, void 0, void 0, w().mark(function e() {
                                var t, n, r, i;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.fetchCheckout(o);
                                        case 3:
                                            return t = e.sent, r = new URL(t.attributes.web_url), i = t.attributes.token, r.searchParams.set("storefront_wallet", "true"), e.next = 9, this.fetchAmazonPayConfigOptions(this.CV2_CONFIG_REST_API_URL, r.toString(), i);
                                        case 9:
                                            n = e.sent, r = t.attributes.total_price, i = t.attributes.currency, a.initCheckout(Object.assign(Object.assign({}, n), "0.00" !== r && {
                                                estimatedOrderAmount: {
                                                    amount: r,
                                                    currencyCode: i
                                                }
                                            })), e.next = 18;
                                            break;
                                        case 15:
                                            e.prev = 15, e.t0 = e.catch(0), null !== (s = this.onClickErrorListener) && void 0 !== s && s.call(this, new _n(e.t0));
                                        case 18:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [0, 15]
                                ])
                            }))
                        }
                    }, {
                        key: "fetchCheckout",
                        value: function(r) {
                            return xn(this, void 0, void 0, w().mark(function e() {
                                var t, n;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, r.build(this.id);
                                        case 3:
                                            return e.abrupt("return", e.sent);
                                        case 6:
                                            throw e.prev = 6, e.t0 = e.catch(0), n = e.t0, t = null != n && n.message ? " message=".concat(n.message) : "", n = null != n && n.response ? " [".concat(n.response.status, "] ").concat(n.response.statusText) : "", new Error("[Fetch Checkout] could not fetch checkout".concat(t).concat(n));
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [0, 6]
                                ])
                            }))
                        }
                    }, {
                        key: "fetchAmazonPayConfigOptions",
                        value: function(r, i, a) {
                            return xn(this, void 0, void 0, w().mark(function e() {
                                var t, n;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = JSON.stringify({
                                                checkout_url: i,
                                                checkout_cancel_url: window.location.href,
                                                cart_id: a
                                            }), e.next = 3, fetch(r, {
                                                method: "POST",
                                                headers: {
                                                    "Content-Type": "application/json",
                                                    "X-Shopify-Storefront-Access-Token": this.accessToken
                                                },
                                                body: t
                                            });
                                        case 3:
                                            if ((n = e.sent).ok) return e.next = 7, n.json();
                                            e.next = 8;
                                            break;
                                        case 7:
                                            return e.abrupt("return", e.sent);
                                        case 8:
                                            throw new Error("[Fetch Pay Config] could not fetch pay configs: [".concat(n.status, "] ").concat(n.statusText));
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }]), r
                }(),
                Sn = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                },
                An = function() {
                    function e() {
                        (0, y.Z)(this, e)
                    }
                    return (0, v.Z)(e, null, [{
                        key: "load",
                        value: function(e) {
                            var n = e.accessToken,
                                r = e.config;
                            return Sn(this, void 0, void 0, w().mark(function e() {
                                var t;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, $t.inject("https://static-na.payments-amazon.com/checkout.js", {
                                                constant: "amazon"
                                            });
                                        case 2:
                                            return t = e.sent, e.abrupt("return", new Pn({
                                                accessToken: n,
                                                config: r,
                                                sdk: t
                                            }));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }))
                        }
                    }]), e
                }();
            An.isSupported = !0;
            var Cn = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                },
                Tn = function() {
                    function i(e) {
                        e = e.locale;
                        (0, y.Z)(this, i), this.id = "Checkout", this.cta = "Buy Now", this.locale = e
                    }
                    return (0, v.Z)(i, [{
                        key: "canMakeAcceleratedPurchase",
                        value: function() {
                            return Cn(this, void 0, void 0, w().mark(function e() {
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", !1);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }))
                        }
                    }, {
                        key: "begin",
                        value: function(n) {
                            return Cn(this, void 0, void 0, w().mark(function e() {
                                var t;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, n;
                                        case 2:
                                            return t = e.sent, t = t.attributes, t = In(t.web_url, this.locale), window.location.assign(t), T.broadcast("checkout:redirect-url", {
                                                url: t
                                            }), e.abrupt("return", {
                                                state: Q.Success
                                            });
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }], [{
                        key: "load",
                        value: function(e) {
                            var t = e.shopId,
                                n = e.domain,
                                r = e.locale;
                            return Cn(this, void 0, void 0, w().mark(function e() {
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", new i({
                                                shopId: t,
                                                domain: n,
                                                locale: r
                                            }));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }))
                        }
                    }]), i
                }();

            function In(e, t) {
                e = new URL(e);
                return e.searchParams.append("skip_shop_pay", "true"), t && e.searchParams.append("locale", t), e.toString()
            }
            Tn.isSupported = !0;
            var En = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : {};

            function On(e, t) {
                return e(t = {
                    exports: {}
                }, t.exports), t.exports
            }
            var Rn = On(function(ne, re) {
                ! function(c, p) {
                    var e = "0.7.35",
                        u = "",
                        i = "?",
                        l = "function",
                        h = "undefined",
                        d = "object",
                        f = "string",
                        m = "major",
                        y = "model",
                        v = "name",
                        b = "type",
                        w = "vendor",
                        k = "version",
                        g = "architecture",
                        t = "console",
                        x = "mobile",
                        _ = "tablet",
                        n = "smarttv",
                        r = "wearable",
                        a = "embedded",
                        P = 350,
                        o = "Amazon",
                        s = "Apple",
                        S = "ASUS",
                        A = "BlackBerry",
                        C = "Browser",
                        T = "Chrome",
                        I = "Firefox",
                        E = "Google",
                        O = "Huawei",
                        R = "LG",
                        N = "Microsoft",
                        j = "Motorola",
                        Z = "Opera",
                        D = "Samsung",
                        U = "Sharp",
                        q = "Sony",
                        L = "Xiaomi",
                        z = "Zebra",
                        M = "Facebook",
                        B = "Chromium OS",
                        F = "Mac OS",
                        V = function(e, t) {
                            var n, r = {};
                            for (n in e) t[n] && t[n].length % 2 == 0 ? r[n] = t[n].concat(e[n]) : r[n] = e[n];
                            return r
                        },
                        G = function(e) {
                            for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
                            return t
                        },
                        H = function(e, t) {
                            return (0, ie.Z)(e) === f && -1 !== $(t).indexOf($(e))
                        },
                        $ = function(e) {
                            return e.toLowerCase()
                        },
                        W = function(e) {
                            return (0, ie.Z)(e) === f ? e.replace(/[^\d\.]/g, u).split(".")[0] : p
                        },
                        J = function(e, t) {
                            if ((0, ie.Z)(e) === f) return e = e.replace(/^\s\s*/, u), (0, ie.Z)(t) === h ? e : e.substring(0, P)
                        },
                        Y = function(e, t) {
                            for (var n, r, i, a, o, s = 0; s < t.length && !a;) {
                                for (var c = t[s], u = t[s + 1], h = n = 0; h < c.length && !a && c[h];)
                                    if (a = c[h++].exec(e))
                                        for (r = 0; r < u.length; r++) o = a[++n], i = u[r], (0, ie.Z)(i) === d && 0 < i.length ? 2 === i.length ? (0, ie.Z)(i[1]) == l ? this[i[0]] = i[1].call(this, o) : this[i[0]] = i[1] : 3 === i.length ? (0, ie.Z)(i[1]) !== l || i[1].exec && i[1].test ? this[i[0]] = o ? o.replace(i[1], i[2]) : p : this[i[0]] = o ? i[1].call(this, o, i[2]) : p : 4 === i.length && (this[i[0]] = o ? i[3].call(this, o.replace(i[1], i[2])) : p) : this[i] = o || p;
                                s += 2
                            }
                        },
                        K = function(e, t) {
                            for (var n in t)
                                if ((0, ie.Z)(t[n]) === d && 0 < t[n].length) {
                                    for (var r = 0; r < t[n].length; r++)
                                        if (H(t[n][r], e)) return n === i ? p : n
                                } else if (H(t[n], e)) return n === i ? p : n;
                            return e
                        },
                        X = {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2e3: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        },
                        Q = {
                            browser: [
                                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                                [k, [v, "Chrome"]],
                                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                                [k, [v, "Edge"]],
                                [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                                [v, k],
                                [/opios[\/ ]+([\w\.]+)/i],
                                [k, [v, Z + " Mini"]],
                                [/\bopr\/([\w\.]+)/i],
                                [k, [v, Z]],
                                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                                [v, k],
                                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                                [k, [v, "UC" + C]],
                                [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
                                [k, [v, "WeChat(Win) Desktop"]],
                                [/micromessenger\/([\w\.]+)/i],
                                [k, [v, "WeChat"]],
                                [/konqueror\/([\w\.]+)/i],
                                [k, [v, "Konqueror"]],
                                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                                [k, [v, "IE"]],
                                [/ya(?:search)?browser\/([\w\.]+)/i],
                                [k, [v, "Yandex"]],
                                [/(avast|avg)\/([\w\.]+)/i],
                                [
                                    [v, /(.+)/, "$1 Secure " + C], k
                                ],
                                [/\bfocus\/([\w\.]+)/i],
                                [k, [v, I + " Focus"]],
                                [/\bopt\/([\w\.]+)/i],
                                [k, [v, Z + " Touch"]],
                                [/coc_coc\w+\/([\w\.]+)/i],
                                [k, [v, "Coc Coc"]],
                                [/dolfin\/([\w\.]+)/i],
                                [k, [v, "Dolphin"]],
                                [/coast\/([\w\.]+)/i],
                                [k, [v, Z + " Coast"]],
                                [/miuibrowser\/([\w\.]+)/i],
                                [k, [v, "MIUI " + C]],
                                [/fxios\/([-\w\.]+)/i],
                                [k, [v, I]],
                                [/\bqihu|(qi?ho?o?|360)browser/i],
                                [
                                    [v, "360 " + C]
                                ],
                                [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                                [
                                    [v, /(.+)/, "$1 " + C], k
                                ],
                                [/(comodo_dragon)\/([\w\.]+)/i],
                                [
                                    [v, /_/g, " "], k
                                ],
                                [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                                [v, k],
                                [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
                                [v],
                                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                                [
                                    [v, M], k
                                ],
                                [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                                [v, k],
                                [/\bgsa\/([\w\.]+) .*safari\//i],
                                [k, [v, "GSA"]],
                                [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                                [k, [v, "TikTok"]],
                                [/headlesschrome(?:\/([\w\.]+)| )/i],
                                [k, [v, T + " Headless"]],
                                [/ wv\).+(chrome)\/([\w\.]+)/i],
                                [
                                    [v, T + " WebView"], k
                                ],
                                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                                [k, [v, "Android " + C]],
                                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                                [v, k],
                                [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                                [k, [v, "Mobile Safari"]],
                                [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                                [k, v],
                                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                                [v, [k, K, {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }]],
                                [/(webkit|khtml)\/([\w\.]+)/i],
                                [v, k],
                                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                                [
                                    [v, "Netscape"], k
                                ],
                                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                                [k, [v, I + " Reality"]],
                                [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
                                [v, k],
                                [/(cobalt)\/([\w\.]+)/i],
                                [v, [k, /master.|lts./, ""]]
                            ],
                            cpu: [
                                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                                [
                                    [g, "amd64"]
                                ],
                                [/(ia32(?=;))/i],
                                [
                                    [g, $]
                                ],
                                [/((?:i[346]|x)86)[;\)]/i],
                                [
                                    [g, "ia32"]
                                ],
                                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                                [
                                    [g, "arm64"]
                                ],
                                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                                [
                                    [g, "armhf"]
                                ],
                                [/windows (ce|mobile); ppc;/i],
                                [
                                    [g, "arm"]
                                ],
                                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                                [
                                    [g, /ower/, u, $]
                                ],
                                [/(sun4\w)[;\)]/i],
                                [
                                    [g, "sparc"]
                                ],
                                [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                                [
                                    [g, $]
                                ]
                            ],
                            device: [
                                [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                                [y, [w, D],
                                    [b, _]
                                ],
                                [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                                [y, [w, D],
                                    [b, x]
                                ],
                                [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                                [y, [w, s],
                                    [b, x]
                                ],
                                [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                                [y, [w, s],
                                    [b, _]
                                ],
                                [/(macintosh);/i],
                                [y, [w, s]],
                                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                                [y, [w, U],
                                    [b, x]
                                ],
                                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                                [y, [w, O],
                                    [b, _]
                                ],
                                [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                                [y, [w, O],
                                    [b, x]
                                ],
                                [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                                [
                                    [y, /_/g, " "],
                                    [w, L],
                                    [b, x]
                                ],
                                [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                                [
                                    [y, /_/g, " "],
                                    [w, L],
                                    [b, _]
                                ],
                                [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                                [y, [w, "OPPO"],
                                    [b, x]
                                ],
                                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                                [y, [w, "Vivo"],
                                    [b, x]
                                ],
                                [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                                [y, [w, "Realme"],
                                    [b, x]
                                ],
                                [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                                [y, [w, j],
                                    [b, x]
                                ],
                                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                                [y, [w, j],
                                    [b, _]
                                ],
                                [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                                [y, [w, R],
                                    [b, _]
                                ],
                                [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                                [y, [w, R],
                                    [b, x]
                                ],
                                [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                                [y, [w, "Lenovo"],
                                    [b, _]
                                ],
                                [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                                [
                                    [y, /_/g, " "],
                                    [w, "Nokia"],
                                    [b, x]
                                ],
                                [/(pixel c)\b/i],
                                [y, [w, E],
                                    [b, _]
                                ],
                                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                                [y, [w, E],
                                    [b, x]
                                ],
                                [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                [y, [w, q],
                                    [b, x]
                                ],
                                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                                [
                                    [y, "Xperia Tablet"],
                                    [w, q],
                                    [b, _]
                                ],
                                [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                                [y, [w, "OnePlus"],
                                    [b, x]
                                ],
                                [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                                [y, [w, o],
                                    [b, _]
                                ],
                                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                                [
                                    [y, /(.+)/g, "Fire Phone $1"],
                                    [w, o],
                                    [b, x]
                                ],
                                [/(playbook);[-\w\),; ]+(rim)/i],
                                [y, w, [b, _]],
                                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                                [y, [w, A],
                                    [b, x]
                                ],
                                [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                                [y, [w, S],
                                    [b, _]
                                ],
                                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                                [y, [w, S],
                                    [b, x]
                                ],
                                [/(nexus 9)/i],
                                [y, [w, "HTC"],
                                    [b, _]
                                ],
                                [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                                [w, [y, /_/g, " "],
                                    [b, x]
                                ],
                                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                                [y, [w, "Acer"],
                                    [b, _]
                                ],
                                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                                [y, [w, "Meizu"],
                                    [b, x]
                                ],
                                [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                                [w, y, [b, x]],
                                [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                                [w, y, [b, _]],
                                [/(surface duo)/i],
                                [y, [w, N],
                                    [b, _]
                                ],
                                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                                [y, [w, "Fairphone"],
                                    [b, x]
                                ],
                                [/(u304aa)/i],
                                [y, [w, "AT&T"],
                                    [b, x]
                                ],
                                [/\bsie-(\w*)/i],
                                [y, [w, "Siemens"],
                                    [b, x]
                                ],
                                [/\b(rct\w+) b/i],
                                [y, [w, "RCA"],
                                    [b, _]
                                ],
                                [/\b(venue[\d ]{2,7}) b/i],
                                [y, [w, "Dell"],
                                    [b, _]
                                ],
                                [/\b(q(?:mv|ta)\w+) b/i],
                                [y, [w, "Verizon"],
                                    [b, _]
                                ],
                                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                                [y, [w, "Barnes & Noble"],
                                    [b, _]
                                ],
                                [/\b(tm\d{3}\w+) b/i],
                                [y, [w, "NuVision"],
                                    [b, _]
                                ],
                                [/\b(k88) b/i],
                                [y, [w, "ZTE"],
                                    [b, _]
                                ],
                                [/\b(nx\d{3}j) b/i],
                                [y, [w, "ZTE"],
                                    [b, x]
                                ],
                                [/\b(gen\d{3}) b.+49h/i],
                                [y, [w, "Swiss"],
                                    [b, x]
                                ],
                                [/\b(zur\d{3}) b/i],
                                [y, [w, "Swiss"],
                                    [b, _]
                                ],
                                [/\b((zeki)?tb.*\b) b/i],
                                [y, [w, "Zeki"],
                                    [b, _]
                                ],
                                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                                [
                                    [w, "Dragon Touch"], y, [b, _]
                                ],
                                [/\b(ns-?\w{0,9}) b/i],
                                [y, [w, "Insignia"],
                                    [b, _]
                                ],
                                [/\b((nxa|next)-?\w{0,9}) b/i],
                                [y, [w, "NextBook"],
                                    [b, _]
                                ],
                                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                                [
                                    [w, "Voice"], y, [b, x]
                                ],
                                [/\b(lvtel\-)?(v1[12]) b/i],
                                [
                                    [w, "LvTel"], y, [b, x]
                                ],
                                [/\b(ph-1) /i],
                                [y, [w, "Essential"],
                                    [b, x]
                                ],
                                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                                [y, [w, "Envizen"],
                                    [b, _]
                                ],
                                [/\b(trio[-\w\. ]+) b/i],
                                [y, [w, "MachSpeed"],
                                    [b, _]
                                ],
                                [/\btu_(1491) b/i],
                                [y, [w, "Rotor"],
                                    [b, _]
                                ],
                                [/(shield[\w ]+) b/i],
                                [y, [w, "Nvidia"],
                                    [b, _]
                                ],
                                [/(sprint) (\w+)/i],
                                [w, y, [b, x]],
                                [/(kin\.[onetw]{3})/i],
                                [
                                    [y, /\./g, " "],
                                    [w, N],
                                    [b, x]
                                ],
                                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                                [y, [w, z],
                                    [b, _]
                                ],
                                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                                [y, [w, z],
                                    [b, x]
                                ],
                                [/smart-tv.+(samsung)/i],
                                [w, [b, n]],
                                [/hbbtv.+maple;(\d+)/i],
                                [
                                    [y, /^/, "SmartTV"],
                                    [w, D],
                                    [b, n]
                                ],
                                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                                [
                                    [w, R],
                                    [b, n]
                                ],
                                [/(apple) ?tv/i],
                                [w, [y, s + " TV"],
                                    [b, n]
                                ],
                                [/crkey/i],
                                [
                                    [y, T + "cast"],
                                    [w, E],
                                    [b, n]
                                ],
                                [/droid.+aft(\w)( bui|\))/i],
                                [y, [w, o],
                                    [b, n]
                                ],
                                [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                                [y, [w, U],
                                    [b, n]
                                ],
                                [/(bravia[\w ]+)( bui|\))/i],
                                [y, [w, q],
                                    [b, n]
                                ],
                                [/(mitv-\w{5}) bui/i],
                                [y, [w, L],
                                    [b, n]
                                ],
                                [/Hbbtv.*(technisat) (.*);/i],
                                [w, y, [b, n]],
                                [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                                [
                                    [w, J],
                                    [y, J],
                                    [b, n]
                                ],
                                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                                [
                                    [b, n]
                                ],
                                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                                [w, y, [b, t]],
                                [/droid.+; (shield) bui/i],
                                [y, [w, "Nvidia"],
                                    [b, t]
                                ],
                                [/(playstation [345portablevi]+)/i],
                                [y, [w, q],
                                    [b, t]
                                ],
                                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                                [y, [w, N],
                                    [b, t]
                                ],
                                [/((pebble))app/i],
                                [w, y, [b, r]],
                                [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                                [y, [w, s],
                                    [b, r]
                                ],
                                [/droid.+; (glass) \d/i],
                                [y, [w, E],
                                    [b, r]
                                ],
                                [/droid.+; (wt63?0{2,3})\)/i],
                                [y, [w, z],
                                    [b, r]
                                ],
                                [/(quest( 2| pro)?)/i],
                                [y, [w, M],
                                    [b, r]
                                ],
                                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                                [w, [b, a]],
                                [/(aeobc)\b/i],
                                [y, [w, o],
                                    [b, a]
                                ],
                                [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                                [y, [b, x]],
                                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                                [y, [b, _]],
                                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                                [
                                    [b, _]
                                ],
                                [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                                [
                                    [b, x]
                                ],
                                [/(android[-\w\. ]{0,9});.+buil/i],
                                [y, [w, "Generic"]]
                            ],
                            engine: [
                                [/windows.+ edge\/([\w\.]+)/i],
                                [k, [v, "Edge" + "HTML"]],
                                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                [k, [v, "Blink"]],
                                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                                [v, k],
                                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                                [k, v]
                            ],
                            os: [
                                [/microsoft (windows) (vista|xp)/i],
                                [v, k],
                                [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                                [v, [k, K, X]],
                                [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                                [
                                    [v, "Windows"],
                                    [k, K, X]
                                ],
                                [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /ios;fbsv\/([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                                [
                                    [k, /_/g, "."],
                                    [v, "iOS"]
                                ],
                                [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                                [
                                    [v, F],
                                    [k, /_/g, "."]
                                ],
                                [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                                [k, v],
                                [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                                [v, k],
                                [/\(bb(10);/i],
                                [k, [v, A]],
                                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                                [k, [v, "Symbian"]],
                                [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                                [k, [v, I + " OS"]],
                                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                                [k, [v, "webOS"]],
                                [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                                [k, [v, "watchOS"]],
                                [/crkey\/([\d\.]+)/i],
                                [k, [v, T + "cast"]],
                                [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                                [
                                    [v, B], k
                                ],
                                [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                                [v, k],
                                [/(sunos) ?([\w\.\d]*)/i],
                                [
                                    [v, "Solaris"], k
                                ],
                                [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                                [v, k]
                            ]
                        },
                        T = function e(t, n) {
                            if ((0, ie.Z)(t) === d && (n = t, t = p), !(this instanceof e)) return new e(t, n).getResult();
                            var r = (0, ie.Z)(c) !== h && c.navigator ? c.navigator : p,
                                i = t || (r && r.userAgent ? r.userAgent : u),
                                a = r && r.userAgentData ? r.userAgentData : p,
                                o = n ? V(Q, n) : Q,
                                s = r && r.userAgent == i;
                            return this.getBrowser = function() {
                                var e = {};
                                return e[v] = p, e[k] = p, Y.call(e, i, o.browser), e[m] = W(e[k]), s && r && r.brave && (0, ie.Z)(r.brave.isBrave) == l && (e[v] = "Brave"), e
                            }, this.getCPU = function() {
                                var e = {};
                                return e[g] = p, Y.call(e, i, o.cpu), e
                            }, this.getDevice = function() {
                                var e = {};
                                return e[w] = p, e[y] = p, e[b] = p, Y.call(e, i, o.device), s && !e[b] && a && a.mobile && (e[b] = x), s && "Macintosh" == e[y] && r && (0, ie.Z)(r.standalone) !== h && r.maxTouchPoints && 2 < r.maxTouchPoints && (e[y] = "iPad", e[b] = _), e
                            }, this.getEngine = function() {
                                var e = {};
                                return e[v] = p, e[k] = p, Y.call(e, i, o.engine), e
                            }, this.getOS = function() {
                                var e = {};
                                return e[v] = p, e[k] = p, Y.call(e, i, o.os), s && !e[v] && a && "Unknown" != a.platform && (e[v] = a.platform.replace(/chrome os/i, B).replace(/macos/i, F)), e
                            }, this.getResult = function() {
                                return {
                                    ua: this.getUA(),
                                    browser: this.getBrowser(),
                                    engine: this.getEngine(),
                                    os: this.getOS(),
                                    device: this.getDevice(),
                                    cpu: this.getCPU()
                                }
                            }, this.getUA = function() {
                                return i
                            }, this.setUA = function(e) {
                                return i = (0, ie.Z)(e) === f && e.length > P ? J(e, P) : e, this
                            }, this.setUA(i), this
                        };
                    T.VERSION = e, T.BROWSER = G([v, k, m]), T.CPU = G([g]), T.DEVICE = G([y, w, b, t, x, n, _, r, a]), T.ENGINE = T.OS = G([v, k]), (re = ne.exports ? ne.exports = T : re).UAParser = T;
                    var ee, te = (0, ie.Z)(c) !== h && (c.jQuery || c.Zepto);
                    te && !te.ua && (ee = new T, te.ua = ee.getResult(), te.ua.get = function() {
                        return ee.getUA()
                    }, te.ua.set = function(e) {
                        ee.setUA(e);
                        var t, n = ee.getResult();
                        for (t in n) te.ua[t] = n[t]
                    })
                }("object" === ("undefined" == typeof window ? "undefined" : (0, ie.Z)(window)) ? window : En)
            }).UAParser;

            function Nn(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function jn(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function Zn(e, t, n) {
                return t && jn(e.prototype, t), n && jn(e, n), e
            }
            var Dn = ["mobile", "tablet"],
                Un = function() {
                    function n(e) {
                        var t = e.userAgent,
                            e = e.supported,
                            e = void 0 === e || e;
                        Nn(this, n), this.userAgent = void 0, this.supported = void 0, this.ua = void 0, this.userAgent = t, this.supported = e, this.ua = new Rn(t)
                    }
                    return Zn(n, [{
                        key: "name",
                        get: function() {
                            return this.ua.getBrowser().name || ""
                        }
                    }, {
                        key: "version",
                        get: function() {
                            return this.ua.getBrowser().version || ""
                        }
                    }, {
                        key: "majorVersion",
                        get: function() {
                            var e = this.version;
                            if ("" !== e) {
                                e = parseInt(e.split(".")[0], 10);
                                return Number.isNaN(e) ? void 0 : e
                            }
                        }
                    }, {
                        key: "unknown",
                        get: function() {
                            return "" === this.name
                        }
                    }, {
                        key: "isMobile",
                        get: function() {
                            return Dn.includes(this.ua.getDevice().type)
                        }
                    }, {
                        key: "isDesktop",
                        get: function() {
                            return !this.isMobile
                        }
                    }, {
                        key: "isNativeApp",
                        get: function() {
                            return this.ua.getUA().includes("Shopify Mobile/", 0)
                        }
                    }, {
                        key: "os",
                        get: function() {
                            return this.ua.getOS().name || ""
                        }
                    }, {
                        key: "isWindows",
                        get: function() {
                            return this.os.includes("Windows")
                        }
                    }, {
                        key: "isMac",
                        get: function() {
                            return this.os.includes("Mac OS")
                        }
                    }, {
                        key: "isSafari",
                        get: function() {
                            return this.name.includes("Safari")
                        }
                    }, {
                        key: "isChrome",
                        get: function() {
                            return this.name.includes("Chrome")
                        }
                    }, {
                        key: "isAndroidChrome",
                        get: function() {
                            return this.ua.getUA().includes("Android") && this.name.includes("Chrome")
                        }
                    }, {
                        key: "isFirefox",
                        get: function() {
                            return "Firefox" === this.name
                        }
                    }, {
                        key: "isIE",
                        get: function() {
                            return this.name.includes("IE")
                        }
                    }, {
                        key: "isEdge",
                        get: function() {
                            return "Edge" === this.name
                        }
                    }, {
                        key: "isIOS",
                        get: function() {
                            var e = this.ua.getOS(),
                                t = e.name && e.name.includes("iOS"),
                                e = /Shopify Mobile|Shopify POS|Shopify Ping/.test(this.userAgent) && this.userAgent.includes("iOS");
                            return t || e
                        }
                    }]), n
                }(),
                qn = function(e) {
                    var t = s(e.name.split(" ")),
                        n = t[0],
                        r = t.slice(1),
                        t = "",
                        r = 0 === r.length ? n : (t = n, r.join(" "));
                    return {
                        first_name: t,
                        last_name: r,
                        address1: e.address1,
                        address2: e.address2,
                        city: e.locality,
                        province_code: e.administrativeArea,
                        country_code: e.countryCode,
                        zip: e.postalCode,
                        phone: e.phoneNumber
                    }
                },
                Ln = function(e) {
                    switch (e) {
                        case "AMEX":
                            return "american_express";
                        case "MASTERCARD":
                            return "master";
                        default:
                            return e.toLowerCase()
                    }
                },
                zn = function(e) {
                    return void 0 !== e.address1 && void 0 !== e.address2 && void 0 !== e.locality && void 0 !== e.administrativeArea && e.phoneNumber
                },
                Ct = function(e) {
                    var t = e.paymentMethodData,
                        n = e.email,
                        r = e.shippingAddress,
                        i = t.info,
                        a = t.tokenizationData,
                        e = i.billingAddress,
                        t = i.cardDetails,
                        i = i.cardNetwork;
                    if (!zn(e)) throw new Error("Billing address returned with the Google Pay paymentData is not complete");
                    if (r && !zn(r)) throw new Error("Shipping address returned with the Google Pay paymentData is not complete");
                    e = qn(e);
                    return {
                        checkout: {
                            billing_address: e,
                            shipping_address: r ? qn(r) : null,
                            email: n,
                            phone: e.phone,
                            credit_card: {
                                last_digits: t,
                                brand: Ln(i),
                                first_name: e.first_name,
                                last_name: e.last_name
                            },
                            gateway_params: {
                                payment_token: {
                                    type: "google_pay",
                                    payment_data: a.token
                                }
                            },
                            web_buyer_must_review_checkout: !0
                        }
                    }
                },
                Mn = {
                    address: qn,
                    brand: Ln,
                    params: Ct
                },
                Bn = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                };

            function Fn(i, a, o, s) {
                return Bn(this, void 0, void 0, w().mark(function e() {
                    var t, n, r;
                    return w().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, i;
                            case 2:
                                return t = e.sent, "SG" === a.countryCode && (a.locality = "Singapore"), e.next = 6, t.calculateShipping(Hn(a));
                            case 6:
                                if (t.clearLandedCostState(), t.attributes.duties_applicable) return e.next = 10, t.getLandedCostState();
                                e.next = 10;
                                break;
                            case 10:
                                return n = Wn(t.shippingRates, o), r = Gn(o, t, s), e.abrupt("return", {
                                    newShippingOptionParameters: {
                                        shippingOptions: n,
                                        defaultSelectedOptionId: t.attributes.shipping_rate.id
                                    },
                                    newTransactionInfo: r
                                });
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))
            }

            function Vn(r, i, a, o) {
                return Bn(this, void 0, void 0, w().mark(function e() {
                    var t, n;
                    return w().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, r;
                            case 2:
                                if (t = e.sent, n = Jn(t, i)) return e.next = 7, t.update({
                                    delivery_options: n
                                });
                                e.next = 9;
                                break;
                            case 7:
                                e.next = 11;
                                break;
                            case 9:
                                return e.next = 11, t.update({
                                    shipping_line: {
                                        handle: i
                                    }
                                });
                            case 11:
                                return n = Gn(a, t, o), e.abrupt("return", {
                                    newTransactionInfo: n
                                });
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))
            }

            function Gn(e, t, n) {
                var r, i = [{
                        label: "Subtotal",
                        type: "SUBTOTAL",
                        price: t.attributes.total_line_items_price,
                        status: "FINAL"
                    }],
                    a = t.attributes.shipping_line;
                a && ((r = Jn(t, a.handle)) ? i = i.concat(r.map(function(e) {
                    return {
                        label: e.name,
                        type: "LINE_ITEM",
                        price: e.price
                    }
                })) : i.push({
                    label: "Shipping",
                    type: "LINE_ITEM",
                    price: a.price
                })), t.attributes.total_duties && i.push({
                    label: "Duties",
                    type: "LINE_ITEM",
                    price: t.attributes.total_duties
                }), t.attributes.total_tax && t.landedCostState !== x.Error && i.push({
                    label: "Estimated tax",
                    type: "LINE_ITEM",
                    price: t.attributes.total_tax
                });
                a = Number(t.attributes.total_discount_amount);
                return 0 < a && i.push({
                    label: "Discount",
                    type: "LINE_ITEM",
                    price: "-".concat(a)
                }), t.attributes.gift_cards && t.attributes.gift_cards.forEach(function(e) {
                    i.push({
                        label: "Gift card (".concat(e.last_characters, ")"),
                        type: "LINE_ITEM",
                        price: "-".concat(e.amount_used)
                    })
                }), {
                    totalPrice: t.attributes.payment_due,
                    currencyCode: e,
                    totalPriceStatus: "ESTIMATED",
                    totalPriceLabel: "Total",
                    countryCode: n,
                    displayItems: i
                }
            }

            function Hn(e) {
                return {
                    city: e.locality,
                    zip: e.postalCode,
                    country_code: e.countryCode,
                    province_code: e.administrativeArea
                }
            }

            function $n(e, t, n) {
                return (n ? "(".concat(n, ") ") : "").concat(e, " ").concat(t)
            }

            function Wn(e, i) {
                return e.map(function(e) {
                    var t = e.id,
                        n = e.title,
                        r = e.price,
                        e = e.delivery_promise_presentment_title;
                    return {
                        id: t,
                        label: n,
                        description: $n(r, i, e)
                    }
                })
            }

            function Jn(e, t) {
                var n = e.shippingRates.find(function(e) {
                    return e.id === t
                });
                return e.attributes.has_selling_plans && n && n.delivery_options && 0 < n.delivery_options.length ? n.delivery_options : null
            }
            var Yn = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                },
                Kn = function() {
                    function c(e, t) {
                        var n = t.currency,
                            r = t.countryCode,
                            i = t.capabilities;
                        (0, y.Z)(this, c), this.googlePaySDK = e, this.currency = n, this.countryCode = r, this.accelerated = !1, this.environment = i.environment;
                        var a = i.merchantInfo,
                            o = i.emailRequired,
                            s = i.allowedPaymentMethods,
                            t = i.existingPaymentMethodRequired,
                            e = i.shippingAddressRequired,
                            i = i.shippingAddressParameters;
                        this.isReadyToPayRequest = {
                            apiVersion: 2,
                            apiVersionMinor: 0,
                            merchantInfo: a,
                            allowedPaymentMethods: s,
                            existingPaymentMethodRequired: t
                        }, this.paymentDataRequest = {
                            apiVersion: 2,
                            apiVersionMinor: 0,
                            merchantInfo: a,
                            emailRequired: o,
                            allowedPaymentMethods: s,
                            shippingAddressRequired: e,
                            shippingAddressParameters: i,
                            transactionInfo: {
                                totalPriceStatus: "NOT_CURRENTLY_KNOWN",
                                currencyCode: n,
                                countryCode: r
                            }
                        }, this.paymentOptions = {
                            environment: this.environment,
                            merchantInfo: a,
                            paymentDataCallbacks: {
                                onPaymentAuthorized: this.onPaymentAuthorized.bind(this)
                            }
                        }, this.googlePayClient = new this.googlePaySDK.payments.api.PaymentsClient(this.paymentOptions)
                    }
                    return (0, v.Z)(c, [{
                        key: "onPaymentDataChanged",
                        value: function(n) {
                            return Yn(this, void 0, void 0, w().mark(function e() {
                                var t;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.checkoutPromise) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new Error("Checkout promise does not exist.");
                                        case 2:
                                            e.t0 = n.callbackTrigger, e.next = "INITIALIZE" === e.t0 || "SHIPPING_ADDRESS" === e.t0 ? 5 : "SHIPPING_OPTION" === e.t0 ? 16 : 25;
                                            break;
                                        case 5:
                                            return e.prev = 5, e.next = 8, Fn(this.checkoutPromise, n.shippingAddress, this.currency, this.countryCode);
                                        case 8:
                                            return e.abrupt("return", e.sent);
                                        case 11:
                                            return e.prev = 11, e.t1 = e.catch(5), t = "Could not select that shipping address, please try again.", e.t1 instanceof yt && (t = e.t1.shippingErrorMessage() || t), e.abrupt("return", c.error("SHIPPING_ADDRESS_INVALID", t, "SHIPPING_ADDRESS"));
                                        case 16:
                                            return e.prev = 16, e.next = 19, Vn(this.checkoutPromise, n.shippingOptionData.id, this.currency, this.countryCode);
                                        case 19:
                                            return e.abrupt("return", e.sent);
                                        case 22:
                                            return e.prev = 22, e.t2 = e.catch(16), e.abrupt("return", c.error("SHIPPING_OPTION_INVALID", "Could not select that shipping option, please try again.", "SHIPPING_OPTION"));
                                        case 25:
                                            return e.abrupt("return", c.error("OTHER_ERROR", "Could not recognize the intent.", "SHIPPING_ADDRESS"));
                                        case 26:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [5, 11],
                                    [16, 22]
                                ])
                            }))
                        }
                    }, {
                        key: "onPaymentAuthorized",
                        value: function(r) {
                            return Yn(this, void 0, void 0, w().mark(function e() {
                                var t, n;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0, this.checkoutPromise) {
                                                e.next = 3;
                                                break
                                            }
                                            throw new Error("Checkout promise does not exist.");
                                        case 3:
                                            return r.shippingAddress && "SG" === r.shippingAddress.countryCode && (r.shippingAddress.locality = "Singapore"), t = Mn.params(r), e.next = 7, this.checkoutPromise;
                                        case 7:
                                            return n = e.sent, e.next = 10, n.update(t);
                                        case 10:
                                            return e.abrupt("return", {
                                                transactionState: "SUCCESS"
                                            });
                                        case 13:
                                            return e.prev = 13, e.t0 = e.catch(0), e.abrupt("return", c.authError("PAYMENT_DATA_INVALID", "We were not able to process your information, please try again.", "PAYMENT_AUTHORIZATION"));
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [0, 13]
                                ])
                            }))
                        }
                    }, {
                        key: "supported",
                        value: function() {
                            return Yn(this, void 0, void 0, w().mark(function e() {
                                var t, n, r;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.getIsReadyToPay();
                                        case 3:
                                            if (r = e.sent, t = r.response, n = r.attempts, r = r.isTimeout, T.broadcast("googlepay:sdk-ready", {
                                                    attempts: n,
                                                    isTimeout: r
                                                }), t && t.result) return this.googlePayClient.prefetchPaymentData(this.paymentDataRequest), this.accelerated = t.paymentMethodPresent || !1, e.abrupt("return", !0);
                                            e.next = 14;
                                            break;
                                        case 14:
                                            return e.abrupt("return", !1);
                                        case 15:
                                            e.next = 20;
                                            break;
                                        case 17:
                                            return e.prev = 17, e.t0 = e.catch(0), e.abrupt("return", !1);
                                        case 20:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [0, 17]
                                ])
                            }))
                        }
                    }, {
                        key: "canMakeAcceleratedPurchase",
                        value: function() {
                            return Yn(this, void 0, void 0, w().mark(function e() {
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.accelerated);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "startGoogleFlow",
                        value: function(u, h) {
                            return Yn(this, void 0, void 0, w().mark(function e() {
                                var t, n, r, i, a, o, s, c;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.checkoutPromise = h, t = u.transactionInfo, n = u.shippingAddressRequired, this.paymentDataRequest = Object.assign(Object.assign({}, this.paymentDataRequest), {
                                                    transactionInfo: Object.assign(Object.assign({}, t), {
                                                        totalPriceLabel: "Total",
                                                        displayItems: [{
                                                            label: "Subtotal",
                                                            type: "SUBTOTAL",
                                                            price: t.totalPrice,
                                                            status: "FINAL"
                                                        }]
                                                    }),
                                                    shippingAddressRequired: !1,
                                                    shippingOptionRequired: !1,
                                                    callbackIntents: ["PAYMENT_AUTHORIZATION"]
                                                }), u.hasSellingPlans && (r = ["PAN_ONLY"], i = this.paymentDataRequest.allowedPaymentMethods.map(function(e) {
                                                    return Object.assign(Object.assign({}, e), {
                                                        parameters: Object.assign(Object.assign({}, e.parameters), {
                                                            allowedAuthMethods: r
                                                        })
                                                    })
                                                }), this.paymentDataRequest = Object.assign(Object.assign({}, this.paymentDataRequest), {
                                                    allowedPaymentMethods: i
                                                })), n && (this.paymentDataRequest = Object.assign(Object.assign({}, this.paymentDataRequest), {
                                                    shippingAddressRequired: !0,
                                                    shippingOptionRequired: !0,
                                                    shippingOptionParameters: {
                                                        shippingOptions: [{
                                                            id: "loading",
                                                            label: "Loading shipping options",
                                                            description: ""
                                                        }]
                                                    },
                                                    callbackIntents: ["PAYMENT_AUTHORIZATION", "SHIPPING_ADDRESS", "SHIPPING_OPTION"]
                                                }), this.paymentOptions.paymentDataCallbacks.onPaymentDataChanged = this.onPaymentDataChanged.bind(this)), !this.needsCheckoutPriceReloaded(n, t)) {
                                                e.next = 19;
                                                break
                                            }
                                            if (s = window.Shopify.Checkout.estimatedPrice, a = s.toFixed(2), o = a, s = this.browserAllowsAsyncDuringClickEvent()) return e.next = 13, h;
                                            e.next = 17;
                                            break;
                                        case 13:
                                            return c = e.sent, e.next = 16, c.reload();
                                        case 16:
                                            o = c.attributes.payment_due;
                                        case 17:
                                            T.broadcast("googlepay:price-changed", {
                                                didReload: s,
                                                reloadChangedPrice: o !== a
                                            }), this.paymentDataRequest = Object.assign(Object.assign({}, this.paymentDataRequest), {
                                                transactionInfo: Object.assign(Object.assign({}, t), {
                                                    totalPriceLabel: "Total",
                                                    totalPrice: o,
                                                    displayItems: [{
                                                        label: "Subtotal",
                                                        type: "SUBTOTAL",
                                                        price: o,
                                                        status: "FINAL"
                                                    }]
                                                })
                                            });
                                        case 19:
                                            return this.googlePayClient = new this.googlePaySDK.payments.api.PaymentsClient(this.paymentOptions), e.next = 22, this.googlePayClient.loadPaymentData(this.paymentDataRequest);
                                        case 22:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "needsCheckoutPriceReloaded",
                        value: function(e, t) {
                            return !e && window.Shopify && window.Shopify.Checkout && window.Shopify.Checkout.estimatedPrice && t.totalPrice !== window.Shopify.Checkout.estimatedPrice.toFixed(2)
                        }
                    }, {
                        key: "browserAllowsAsyncDuringClickEvent",
                        value: function() {
                            return !new Un({
                                userAgent: navigator.userAgent
                            }).isSafari
                        }
                    }, {
                        key: "getIsReadyToPay",
                        value: function() {
                            return Yn(this, void 0, void 0, w().mark(function e() {
                                var t, n, r, i = this;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            r = new URL(window.location.href), t = r.searchParams.get("googlePayWorkaround"), e.t0 = t, e.next = "skip" === e.t0 ? 5 : "force" === e.t0 ? 9 : 10;
                                            break;
                                        case 5:
                                            return e.next = 7, this.googlePayClient.isReadyToPay(this.isReadyToPayRequest);
                                        case 7:
                                            return n = e.sent, e.abrupt("return", {
                                                response: n,
                                                attempts: 0,
                                                isTimeout: !1
                                            });
                                        case 9:
                                            return e.abrupt("return", {
                                                response: {
                                                    result: !0,
                                                    paymentMethodPresent: !1
                                                },
                                                attempts: 0,
                                                isTimeout: !1
                                            });
                                        case 10:
                                            return e.next = 12, X(function() {
                                                return i.googlePayClient.isReadyToPay(i.isReadyToPayRequest)
                                            });
                                        case 12:
                                            return r = e.sent, t = r.response, n = r.attempts, r = r.isTimeout, e.abrupt("return", {
                                                response: t,
                                                attempts: n,
                                                isTimeout: r
                                            });
                                        case 17:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }], [{
                        key: "authError",
                        value: function(e, t, n) {
                            return Object.assign({
                                transactionState: "ERROR"
                            }, c.error(e, t, n))
                        }
                    }, {
                        key: "error",
                        value: function(e, t, n) {
                            return {
                                error: {
                                    reason: e,
                                    message: t,
                                    intent: n
                                }
                            }
                        }
                    }]), c
                }(),
                n = function(e, t, n, r) {
                    var i, a = arguments.length,
                        o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, ie.Z)(Reflect)) && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
                    else
                        for (var s = e.length - 1; 0 <= s; s--)(i = e[s]) && (o = (a < 3 ? i(o) : 3 < a ? i(t, n, o) : i(t, n)) || o);
                    return 3 < a && o && Object.defineProperty(t, n, o), o
                },
                Ct = function(e, t) {
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, ie.Z)(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
                Xn = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                },
                Qn = function() {
                    function i(e, t, n, r) {
                        (0, y.Z)(this, i), this.id = "GooglePay", this.onThrottle = function() {
                            C.redirectToThrottlePage()
                        }, this.googleClient = e, this.currency = t, this.countryCode = n, this.storefrontWallet = r
                    }
                    return (0, v.Z)(i, [{
                        key: "canMakeAcceleratedPurchase",
                        value: function() {
                            return Xn(this, void 0, void 0, w().mark(function e() {
                                var t;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ("TEST" === this.googleClient.environment) return t = new URL(window.location.href), e.abrupt("return", "google" === t.searchParams.get("show"));
                                            e.next = 3;
                                            break;
                                        case 3:
                                            return e.next = 5, this.googleClient.canMakeAcceleratedPurchase();
                                        case 5:
                                            return e.abrupt("return", e.sent);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "supported",
                        value: function() {
                            return Xn(this, void 0, void 0, w().mark(function e() {
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.googleClient.supported();
                                        case 2:
                                            return e.abrupt("return", e.sent);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "begin",
                        value: function(n, r) {
                            return Xn(this, void 0, void 0, w().mark(function e() {
                                var t;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r && r.estimatedPrice) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new Error("A price estimation must be provided");
                                        case 2:
                                            return t = {
                                                totalPriceStatus: "ESTIMATED",
                                                currencyCode: this.currency,
                                                totalPrice: r.estimatedPrice,
                                                countryCode: this.countryCode
                                            }, !(t = {
                                                transactionInfo: t,
                                                shippingAddressRequired: !0,
                                                hasSellingPlans: r && r.hasSellingPlans
                                            }) === r.requiresShipping && (t.shippingAddressRequired = !1), T.subscribe("checkout-api:throttled", this.onThrottle), e.next = 8, this.googleClient.startGoogleFlow(t, n);
                                        case 8:
                                            return e.next = 10, n;
                                        case 10:
                                            return t = e.sent, T.broadcast("googlepay:redirect-url", {
                                                url: t.attributes.web_url
                                            }), t = new URL(t.attributes.web_url), this.storefrontWallet && t.searchParams.append("storefront_wallet", "true"), window.location.assign(t.href), e.abrupt("return", {
                                                state: ae.Success
                                            });
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }]), i
                }();
            n([L("acceleration.check.benchmark", "id", "instrument"), Ct("design:type", Function), Ct("design:paramtypes", []), Ct("design:returntype", Promise)], Qn.prototype, "canMakeAcceleratedPurchase", null);
            var er = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                },
                tr = function() {
                    function e() {
                        (0, y.Z)(this, e)
                    }
                    return (0, v.Z)(e, null, [{
                        key: "load",
                        value: function(n) {
                            return er(this, void 0, void 0, w().mark(function e() {
                                var t;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return window.gpayInitParams || (window.gpayInitParams = {
                                                environment: n.capabilities.environment,
                                                merchantInfo: {
                                                    merchantId: n.capabilities.merchantInfo.merchantId,
                                                    merchantName: n.capabilities.merchantInfo.merchantName,
                                                    merchantOrigin: n.capabilities.merchantInfo.merchantOrigin,
                                                    authJwt: n.capabilities.merchantInfo.authJwt
                                                }
                                            }), e.next = 3, $t.inject("https://pay.google.com/gp/p/js/pay.js", {
                                                constant: "google"
                                            });
                                        case 3:
                                            return t = e.sent, n.capabilities.merchantInfo.authJwt = window.gpayInitParams.merchantInfo.authJwt, t = new Kn(t, n), t = new Qn(t, n.currency, n.countryCode, n.storefrontWallet), e.next = 9, t.supported();
                                        case 9:
                                            if (e.sent) {
                                                e.next = 12;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 12:
                                            return e.abrupt("return", t);
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }))
                        }
                    }]), e
                }();
            tr.isSupported = !0;
            var nr = "//www.paypalobjects.com/api/checkout.min.js",
                rr = "paypal",
                ir = "paypalCheckoutReady",
                ar = "JadedPixel_ShoppingCart_EC_CA";

            function or(e, t) {
                return $t.inject(nr, {
                    constant: rr,
                    event: ir,
                    dataset: {
                        merchantId: e,
                        partnerAttributionId: ar
                    },
                    version: t
                })
            }
            var sr = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                },
                cr = "shopifypaypalisrememberedcallback",
                ur = "Shopify.PayPalV4.isRemembered.memo",
                hr = "https://www.paypal.com/checkoutnow/remembered?callback=".concat(cr);

            function pr() {
                return sr(this, void 0, void 0, w().mark(function e() {
                    var t, n, r;
                    return w().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = 86400, lr(r = R(t = "shopifyPaypalAcceleration"))) return T.broadcast("paypal:cache-hit", {
                                    paypal: r.paypal,
                                    venmo: r.venmo
                                }), e.abrupt("return", r);
                                e.next = 6;
                                break;
                            case 6:
                                return e.next = 8, dr();
                            case 8:
                                return r = e.sent, T.broadcast("paypal:cache-miss", {
                                    paypal: r.paypal,
                                    venmo: r.venmo
                                }), O(t, r, n), e.abrupt("return", r);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))
            }

            function lr(e) {
                return !(!e || "object" !== (0, ie.Z)(e) || "boolean" != typeof e.paypal || "boolean" != typeof e.venmo)
            }

            function dr() {
                return sr(this, void 0, void 0, w().mark(function e() {
                    var t, n;
                    return w().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return D(t = "acceleration.check.benchmark:PayPalV4"), e.next = 4, fr();
                            case 4:
                                return n = e.sent, q("acceleration.check.benchmark", U(t), {
                                    instrument: "PayPalV4"
                                }), n.paypal && mr("User is remembered with: paypal"), n.venmo && mr("User is remembered with: venmo"), e.abrupt("return", n);
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))
            }

            function fr() {
                return sr(this, void 0, void 0, w().mark(function e() {
                    var t;
                    return w().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (ur in window) return e.abrupt("return", window[ur]);
                                e.next = 2;
                                break;
                            case 2:
                                return t = new Promise(function(t, n) {
                                    function e(e) {
                                        if (lr(e)) return t(e);
                                        e = JSON.stringify(e), e = "Expected value to be an AccelerationResult, got: ".concat(e), e = new TypeError(e);
                                        n(e)
                                    }
                                    Object.defineProperty(window, cr, {
                                        value: e,
                                        configurable: !0
                                    }), $t.insert(hr)
                                }), Object.defineProperty(window, ur, {
                                    value: t,
                                    configurable: !0
                                }), e.abrupt("return", t);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))
            }

            function mr(e) {
                Ht.debug("Paypal#acceleration - ".concat(e))
            }
            var yr = function(e, o, n, s) {
                function c(t) {
                    return t instanceof n ? t : new n(function(e) {
                        e(t)
                    })
                }
                return new(n = n || Promise)(function(t, n) {
                    function r(e) {
                        try {
                            a(s.next(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function i(e) {
                        try {
                            a(s.throw(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function a(e) {
                        e.done ? t(e.value) : c(e.value).then(r, i)
                    }
                    a((s = s.apply(e, o || [])).next())
                })
            };

            function vr() {
                var r = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                    merchantSupportsVenmo: !1
                }).merchantSupportsVenmo;
                return yr(this, void 0, void 0, w().mark(function e() {
                    var t, n;
                    return w().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, pr();
                            case 2:
                                if (n = e.sent, t = n.paypal, n = n.venmo, r && n) return e.abrupt("return", !1);
                                e.next = 7;
                                break;
                            case 7:
                                return e.abrupt("return", t);
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))
            }
            var br = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                },
                wr = function() {
                    function o(e) {
                        var t = e.shopId,
                            n = e.domain,
                            r = e.environment,
                            i = e.merchantId,
                            a = e.venmoSupported,
                            e = e.storefrontWallet;
                        (0, y.Z)(this, o), this.id = "PayPalInContext", this.name = "PayPal", this.shopId = t, this.domain = n, this.environment = r, this.merchantId = i, this.venmoSupported = a, this.storefrontWallet = e
                    }
                    return (0, v.Z)(o, [{
                        key: "begin",
                        value: function(r) {
                            return br(this, void 0, void 0, w().mark(function e() {
                                var t, n;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!this.paypalCheckout) {
                                                e.next = 4;
                                                break
                                            }
                                            this.paypalCheckout.reset(), e.next = 9;
                                            break;
                                        case 4:
                                            return e.next = 6, or(this.merchantId, "3");
                                        case 6:
                                            if (this.paypal = e.sent, this.paypalCheckout) {
                                                e.next = 9;
                                                break
                                            }
                                            return e.abrupt("return", {
                                                state: Q.Failure,
                                                errors: ["PayPal Failed to load"]
                                            });
                                        case 9:
                                            return this.paypalCheckout.setup(this.merchantId, {
                                                environment: this.environment
                                            }), e.next = 12, r;
                                        case 12:
                                            return n = e.sent, t = n.attributes.token, n = n.secretKey, this.paypalCheckout.initXO(), this.paypalCheckout.startFlow(this.redirectUrl(t, n)), e.abrupt("return", {
                                                state: Q.Success
                                            });
                                        case 18:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "canMakeAcceleratedPurchase",
                        value: function() {
                            return vr({
                                merchantSupportsVenmo: this.venmoSupported
                            })
                        }
                    }, {
                        key: "paypalCheckout",
                        get: function() {
                            return this.paypal ? this.paypal.checkout : null
                        }
                    }, {
                        key: "paypalSDK",
                        get: function() {
                            return this.paypal
                        }
                    }, {
                        key: "redirectUrl",
                        value: function(e, t) {
                            var n = window.location.protocol,
                                r = window.location.host,
                                i = window.location.pathname,
                                i = "".concat(n, "//").concat(r).concat(i),
                                i = "key=".concat(t, "&cancel_return_url=").concat(i, "&use_express_address=true");
                            return this.storefrontWallet && (i += "&storefront_wallet=true"), "https://".concat(this.domain, "/").concat(this.shopId) + "/checkouts/".concat(e, "/express/redirect?").concat(i)
                        }
                    }]), o
                }(),
                kr = function(e) {
                    (0, p.Z)(n, e);
                    var t = k(n);

                    function n() {
                        return (0, y.Z)(this, n), t.call(this, "Checkpoint missing error")
                    }
                    return (0, v.Z)(n)
                }((0, f.Z)(Error)),
                gr = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                },
                xr = 50,
                _r = function() {
                    function n(e, t) {
                        (0, y.Z)(this, n), this.id = "PayPalV4", this.eventsPrefix = "paypalv4", this.labelName = "paypal", this.buttonColor = "gold", this.paypal = e, this.config = t, this.config.height = this.config.height || xr
                    }
                    return (0, v.Z)(n, [{
                        key: "canMakeAcceleratedPurchase",
                        value: function() {
                            return gr(this, void 0, void 0, w().mark(function e() {
                                var t;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, vr({
                                                merchantSupportsVenmo: this.config.venmoSupported
                                            });
                                        case 2:
                                            return (t = e.sent) && T.broadcast("".concat(this.eventsPrefix, ":remembered")), e.abrupt("return", t);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "paymentWrapper",
                        value: function(i) {
                            var e = this;
                            return function() {
                                return gr(e, void 0, void 0, w().mark(function e() {
                                    var t, n, r;
                                    return w().wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return t = this.eventInfo, e.prev = 1, e.next = 4, i.build(this.id);
                                            case 4:
                                                return this.checkout = e.sent, T.broadcast("".concat(this.eventsPrefix, ":initiate-payment"), {
                                                    checkout: this.checkout,
                                                    eventInfo: t
                                                }), this.checkoutApiClient = new bt({
                                                    secretKey: this.checkout.secretKey
                                                }), e.next = 9, this.checkoutApiClient.post("/".concat(this.config.shopId, "/checkouts/").concat(this.checkout.token, "/paypal/tokens"), {
                                                    key: this.checkout.secretKey
                                                });
                                            case 9:
                                                return n = e.sent, e.next = 12, n.json();
                                            case 12:
                                                r = e.sent, n = r.redirect_url, r = r.token, this.redirectUrl = n, this.paypalToken = r, T.broadcast("".concat(this.eventsPrefix, ":begin-payment"), {
                                                    checkout: this.checkout,
                                                    eventInfo: t
                                                }), e.next = 25;
                                                break;
                                            case 20:
                                                if (e.prev = 20, e.t0 = e.catch(1), e.t0 instanceof kr) return e.abrupt("return");
                                                e.next = 24;
                                                break;
                                            case 24:
                                                Ht.info("an error has occured while tried to create a checkout.", e.t0);
                                            case 25:
                                                if (this.paypalToken) {
                                                    e.next = 27;
                                                    break
                                                }
                                                return e.abrupt("return", window.top.location.reload());
                                            case 27:
                                                return e.abrupt("return", this.paypalToken);
                                            case 28:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e, this, [
                                        [1, 20]
                                    ])
                                }))
                            }
                        }
                    }, {
                        key: "cancel",
                        value: function() {
                            return gr(this, void 0, void 0, w().mark(function e() {
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.checkoutApiClient && this.checkout && this.paypalToken) return e.next = 3, this.checkoutApiClient.del("/".concat(this.config.shopId, "/checkouts/").concat(this.checkout.token, "/paypal/tokens"));
                                            e.next = 3;
                                            break;
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "authorized",
                        value: function(e) {
                            var t = e.payerID,
                                n = this.eventInfo,
                                e = this.checkout;
                            T.broadcast("".concat(this.eventsPrefix, ":redirect-url"), {
                                url: this.redirectUrl,
                                checkout: e,
                                eventInfo: n
                            });
                            t = "&PayerID=".concat(t, "&use_express_address=true");
                            this.config.storefrontWallet && (t += "&storefront_wallet=true"), window.top.location.assign("".concat(this.redirectUrl).concat(t))
                        }
                    }, {
                        key: "render",
                        value: function(n, r, i) {
                            return gr(this, void 0, void 0, w().mark(function e() {
                                var t;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return this.eventInfo = i && i.eventInfo, t = {
                                                shape: "rect",
                                                maxbuttons: 1,
                                                tagline: !1,
                                                size: "responsive",
                                                label: this.labelName,
                                                color: this.buttonColor,
                                                height: i && i.height || this.config.height
                                            }, e.next = 4, this.paypal.Button.render({
                                                locale: this.config.locale,
                                                env: this.config.environment,
                                                style: t,
                                                commit: !1,
                                                payment: this.paymentWrapper(r),
                                                onAuthorize: this.authorized.bind(this),
                                                onCancel: this.cancel.bind(this)
                                            }, n);
                                        case 4:
                                            T.broadcast("".concat(this.eventsPrefix, ":show"), this.eventInfo);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }]), n
                }(),
                Pr = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                },
                Sr = function() {
                    function e() {
                        (0, y.Z)(this, e)
                    }
                    return (0, v.Z)(e, null, [{
                        key: "load",
                        value: function(n) {
                            return Pr(this, void 0, void 0, w().mark(function e() {
                                var t;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            e.t0 = n.buttonVersion, e.next = "v4" === e.t0 ? 3 : "v3" === e.t0 ? 7 : 8;
                                            break;
                                        case 3:
                                            return e.next = 5, or(n.merchantId, "4");
                                        case 5:
                                            return t = e.sent, e.abrupt("return", new _r(t, n));
                                        case 7:
                                            return e.abrupt("return", new wr(n));
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }))
                        }
                    }]), e
                }();

            function Ar() {
                return /Android|iPhone|iPad|iPod|Mobile/i.test(window.navigator.userAgent)
            }
            Sr.isSupported = !0;
            var Cr = function(e, o, n, s) {
                function c(t) {
                    return t instanceof n ? t : new n(function(e) {
                        e(t)
                    })
                }
                return new(n = n || Promise)(function(t, n) {
                    function r(e) {
                        try {
                            a(s.next(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function i(e) {
                        try {
                            a(s.throw(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function a(e) {
                        e.done ? t(e.value) : c(e.value).then(r, i)
                    }
                    a((s = s.apply(e, o || [])).next())
                })
            };

            function Tr() {
                return Cr(this, void 0, void 0, w().mark(function e() {
                    var t;
                    return w().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, pr();
                            case 2:
                                return t = e.sent, t = t.venmo, e.abrupt("return", t);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))
            }
            var Ir = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                },
                Er = function(e) {
                    (0, p.Z)(n, e);
                    var t = k(n);

                    function n() {
                        var e;
                        return (0, y.Z)(this, n), (e = t.apply(this, arguments)).id = "Venmo", e.labelName = "venmo", e.eventsPrefix = "venmo", e.buttonColor = "blue", e
                    }
                    return (0, v.Z)(n, [{
                        key: "canMakeAcceleratedPurchase",
                        value: function() {
                            return Ir(this, void 0, void 0, w().mark(function e() {
                                var t;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Tr();
                                        case 2:
                                            return (t = e.sent) && T.broadcast("".concat(this.eventsPrefix, ":remembered")), e.abrupt("return", t);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }]), n
                }(_r),
                Or = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                },
                Rr = function() {
                    function e() {
                        (0, y.Z)(this, e)
                    }
                    return (0, v.Z)(e, null, [{
                        key: "isSupported",
                        get: function() {
                            return Ar()
                        }
                    }, {
                        key: "load",
                        value: function(n) {
                            return Or(this, void 0, void 0, w().mark(function e() {
                                var t;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Tr();
                                        case 2:
                                            if (e.sent) return e.next = 6, or(n.merchantId, "4");
                                            e.next = 8;
                                            break;
                                        case 6:
                                            return t = e.sent, e.abrupt("return", new Er(t, n));
                                        case 8:
                                            return e.abrupt("return");
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }))
                        }
                    }]), e
                }(),
                Nr = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                },
                jr = "shopifyPayAcceleration",
                Zr = "acceleration.check.benchmark:ShopifyPay",
                Dr = 300,
                Ur = function() {
                    function a(e) {
                        var t = e.accelerated,
                            n = e.placement,
                            r = e.experimentTestGroup,
                            i = e.merchantId,
                            e = e.forceCheckoutOneExperience;
                        (0, y.Z)(this, a), this.id = "ShopifyPay", this.accelerated = t, this.placement = n, this.experimentTestGroup = r, this.merchantId = i, this.browser = new Un({
                            userAgent: navigator.userAgent
                        }), this.forceCheckoutOneExperience = e
                    }
                    return (0, v.Z)(a, [{
                        key: "canMakeAcceleratedPurchase",
                        value: function() {
                            return Nr(this, void 0, void 0, w().mark(function e() {
                                var t;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.accelerated) return e.abrupt("return", !0);
                                            e.next = 2;
                                            break;
                                        case 2:
                                            if ("boolean" == typeof(t = R(jr))) return e.abrupt("return", t);
                                            e.next = 5;
                                            break;
                                        case 5:
                                            return e.next = 7, this.fetchAccelerationState();
                                        case 7:
                                            return t = e.sent, O(jr, t, Dr), e.abrupt("return", t);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "begin",
                        value: function(a) {
                            return Nr(this, void 0, void 0, w().mark(function e() {
                                var t, n, r, i;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, a;
                                        case 2:
                                            return r = e.sent, i = r.attributes.shop_pay_configuration, t = i.transaction_url, n = i.transaction_params, N(jr), e.next = 9, this.showLoginPage();
                                        case 9:
                                            return r = e.sent, i = "direct_checkout_".concat(this.placement.toLowerCase()), i = Br(t, r, i, n), window.location.assign(i), T.broadcast("shopifypay:redirect-url", {
                                                url: i
                                            }), e.abrupt("return", {
                                                state: Q.Success
                                            });
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "showLoginPage",
                        value: function() {
                            return Nr(this, void 0, void 0, w().mark(function e() {
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.canMakeAcceleratedPurchase();
                                        case 2:
                                            return e.abrupt("return", !e.sent);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "fetchAccelerationState",
                        value: function() {
                            return Nr(this, void 0, void 0, w().mark(function e() {
                                var t;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (D(Zr), t = !1, !this.experimentTestGroup) {
                                                e.next = 12;
                                                break
                                            }
                                            if (e.t0 = window.ApplePaySession, e.t0) return e.next = 7, V(this.merchantId);
                                            e.next = 8;
                                            break;
                                        case 7:
                                            e.t0 = e.sent;
                                        case 8:
                                            e.t0 || (t = !0), e.next = 15;
                                            break;
                                        case 12:
                                            return e.next = 14, this.hasShopifyPayCookie();
                                        case 14:
                                            t = e.sent;
                                        case 15:
                                            return q("acceleration.check.benchmark", U(Zr), {
                                                instrument: "ShopifyPay"
                                            }), e.abrupt("return", t);
                                        case 17:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "hasShopifyPayCookie",
                        value: function() {
                            return Nr(this, void 0, void 0, w().mark(function e() {
                                var t;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (void 0 === window.ShopifyPay || !0 === this.browser.isSafari) return e.abrupt("return", !1);
                                            e.next = 2;
                                            break;
                                        case 2:
                                            return e.prev = 2, e.next = 5, fetch("https://".concat(window.ShopifyPay.apiHost, "/session?v=1"), {
                                                credentials: "include"
                                            });
                                        case 5:
                                            return t = e.sent, e.next = 8, t.json();
                                        case 8:
                                            return t = e.sent, t = t.eligible, e.abrupt("return", t);
                                        case 13:
                                            e.prev = 13, e.t0 = e.catch(2);
                                        case 15:
                                            return e.abrupt("return", !1);
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [2, 13]
                                ])
                            }))
                        }
                    }], [{
                        key: "isSupported",
                        get: function() {
                            return !window.ShopifyPay || void 0 === window.ShopifyPay.enabled || window.ShopifyPay.enabled
                        }
                    }, {
                        key: "load",
                        value: function(t) {
                            return Nr(this, void 0, void 0, w().mark(function e() {
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", new a(t));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }))
                        }
                    }]), a
                }();

            function qr(e) {
                return !!e && "boolean" == typeof e.checked
            }

            function Lr() {
                return window.location.pathname.includes("/checkouts/")
            }

            function zr() {
                if (Lr()) {
                    var e = document.querySelector("input[data-email-marketing]");
                    if (qr(e)) return e.checked
                }
            }

            function Mr() {
                if (Lr()) {
                    var e = document.querySelector("input[data-sms-marketing]");
                    if (qr(e)) return e.checked
                }
            }

            function Br(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "",
                    i = new URL(e);
                i.searchParams.append("show_login", t.toString()), i.searchParams.append("redirect_source", n);
                var a = ct("_checkout_queue_token"),
                    e = ct("_shopify_sa_p"),
                    t = zr(),
                    n = Mr();
                return void 0 !== a && i.searchParams.append("checkout_queue_token", a), void 0 !== e && "utm_source=shop_app" === decodeURIComponent(e) && i.searchParams.append("referrer", "shop_app"), null != n && i.searchParams.append("sms_opt_in", n.toString()), null != t && i.searchParams.append("email_opt_in", t.toString()), r && r.includes("continue_contact_info_redirect=true") && i.searchParams.append("continue_contact_info_redirect", "true"), i.toString()
            }
            var Fr, Vr, Gr, Hr, $r, Wr, Jr, Yr = "https://static.xx.fbcdn.net/payments_sdk/v1/fbpay_sdk.js",
                Kr = "1.0";
            (f = Fr = Fr || {}).Shipping = "SHIPPING", f.Delivery = "DELIVERY", f.Pickup = "PICKUP", (f = Vr = Vr || {}).NotSupported = "NOT_SUPPORTED", f.NotAvailable = "NOT_AVAILABLE", f.MightBeAvailable = "MIGHT_BE_AVAILABLE", f.Available = "AVAILABLE", (gi = gi = gi || {}).BasicCardV1 = "basic-card-v1", gi.FbpayTokenV1 = "fbpay-token-v1", (gi = Gr = Gr || {}).Subtotal = "SUBTOTAL", gi.EstimatedTax = "ESTIMATED_TAX", gi.Shipping = "SHIPPING", gi.Offer = "OFFER", gi.Fee = "FEE", (gi = ki = ki || {}).Light = "light", gi.Dark = "dark", (ki = Hr = Hr || {}).Aborted = "ABORTED", ki.Timeout = "TIMEOUT", ki.InvalidRequest = "INVALID_REQUEST", ki.MerchantAccountError = "MERCHANT_ACCOUNT_ERROR", ki.InternalError = "INTERNAL_ERROR", (gi = $r = $r || {}).InvalidPaymentData = "INVALID_PAYMENT_DATA", gi.InvalidBillingAddress = "INVALID_BILLING_ADDRESS", gi.InvalidShippingAddress = "INVALID_SHIPPING_ADDRESS", gi.InvalidShippingOption = "INVALID_SHIPPING_OPTION", gi.InvalidOfferCode = "INVALID_OFFER_CODE", gi.OutOfServiceArea = "OUT_OF_SERVICE_AREA", gi.Timeout = "TIMEOUT", gi.GenericFailure = "GENERIC_FAILURE", gi.OtherError = "OTHER_ERROR", (ki = Wr = Wr || {}).offers = "offers", ki.addressLine = "addressLine", ki.shippingOptionId = "shippingOptionId", (gi = Jr = Jr || {}).SUCCESS = "SUCCESS", gi.ERROR = "ERROR";
            var Xr = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                },
                Qr = /<\/?[^>]+(>|$)/g,
                ei = function(e) {
                    var t, n = {
                            country: e.country,
                            province: e.region,
                            city: e.city,
                            zip: e.postalCode,
                            company: e.organization,
                            phone: e.phone
                        },
                        r = e.recipient,
                        i = e.addressLine;
                    return r && (e = (t = s(r.split(" ")))[0], t = t.slice(1).join(" "), n.first_name = e, n.last_name = t, n.name = r), i && 0 < i.length && (n.address1 = i[0], n.address2 = i.slice(1).join(" ")), n
                };

            function ti(e, t) {
                var n = li(t.attributes),
                    r = window.Shopify && window.Shopify.Checkout && window.Shopify.Checkout.pickUpInStore;
                return {
                    paymentOptions: {
                        allowOfferCodes: !0,
                        requestBillingAddress: !0,
                        billingAddressMode: "FULL",
                        requestPayerEmail: !0,
                        requestPayerName: !1,
                        requestPayerPhone: e.requestPayerPhone,
                        requestShipping: t.attributes.requires_shipping,
                        shippingType: Boolean(r) ? Fr.Pickup : Fr.Shipping
                    },
                    paymentDetails: Object.assign({}, si(t.attributes, t.shippingRates, e.shopName, n)),
                    paymentConfiguration: Object.assign(Object.assign({}, e), {
                        containerContext: t.token
                    })
                }
            }

            function ni(e, t) {
                return {
                    label: e,
                    quantity: t.line_items.length,
                    amount: {
                        currency: t.currency,
                        value: t.payment_due
                    }
                }
            }

            function ri(t) {
                return t.line_items.map(function(e) {
                    return {
                        label: e.title,
                        quantity: e.quantity,
                        imageURI: e.image_url,
                        amount: {
                            currency: t.currency,
                            value: e.line_price
                        }
                    }
                })
            }

            function ii(e) {
                var t = e.gift_cards.reduce(function(e, t) {
                        return parseFloat(t.amount_used) + e
                    }, 0),
                    t = [{
                        summaryItemType: Gr.Subtotal,
                        amount: {
                            currency: e.currency,
                            value: e.total_line_items_price
                        },
                        label: "SUBTOTAL"
                    }, {
                        summaryItemType: Gr.EstimatedTax,
                        amount: {
                            currency: e.currency,
                            value: e.total_tax
                        },
                        label: "TAX"
                    }, {
                        summaryItemType: Gr.Offer,
                        amount: {
                            currency: e.currency,
                            value: "-".concat((parseFloat(e.total_discount_amount) + t).toFixed(2))
                        },
                        label: "DISCOUNT"
                    }];
                return e.shipping_rate && t.push({
                    summaryItemType: Gr.Shipping,
                    amount: {
                        currency: e.currency,
                        value: e.shipping_rate.price
                    },
                    label: "SHIPPING"
                }), t
            }

            function ai(n, e) {
                return e.map(function(e) {
                    var t = e.title;
                    return e.delivery_promise_presentment_title && (t = "".concat(e.title, " (").concat(e.delivery_promise_presentment_title, ")")), {
                        id: e.id,
                        label: t,
                        amount: {
                            currency: n.currency,
                            value: e.price
                        }
                    }
                })
            }

            function oi(e, t) {
                var n;
                return n = e.shipping_rate && 0 < t.length ? e.shipping_rate.id : n
            }

            function si(e, t, n, r) {
                return {
                    total: ni(n, e),
                    displayItems: ri(e),
                    summaryItems: ii(e),
                    shippingOptions: ai(e, t),
                    shippingOptionId: oi(e, t),
                    offers: r
                }
            }

            function ci(e, t) {
                e = e.filter(function(e) {
                    return !t.includes(e.code)
                });
                return 0 < e.length ? e[0].code : null
            }

            function ui(e, t, n) {
                var r = e.map(function(e) {
                        return e.code
                    }),
                    t = t.filter(function(e) {
                        return !r.includes(e)
                    }),
                    n = n.filter(function(e) {
                        return !r.includes(e)
                    });
                return 0 < t.length ? {
                    code: t[0],
                    type: "discount"
                } : 0 < n.length ? {
                    code: n[0],
                    type: "giftCard"
                } : null
            }

            function hi(e, t, n) {
                return {
                    added: ci(e, [].concat((0, l.Z)(t), (0, l.Z)(n))),
                    removed: ui(e, t, n)
                }
            }

            function pi(n) {
                return Xr(this, void 0, void 0, w().mark(function e() {
                    var t;
                    return w().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t = !1, n instanceof Xe && n.response && 422 === n.response.status) return e.next = 4, n.response.json();
                                e.next = 6;
                                break;
                            case 4:
                                e.sent.errors.reduction_code && (t = !0);
                            case 6:
                                return e.abrupt("return", t);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))
            }

            function li(e) {
                var t = e.applied_discounts,
                    n = e.gift_cards,
                    e = [];
                return t && 0 < t.length && (t = t.map(function(e) {
                    return {
                        code: e.title
                    }
                }), e.push.apply(e, (0, l.Z)(t))), n && 0 < n.length && (n = n.map(function(e) {
                    return {
                        code: e.last_characters
                    }
                }), e.push.apply(e, (0, l.Z)(n))), e
            }

            function di(e) {
                return e && 0 !== e.length ? e.map(function(e) {
                    return e.title
                }) : []
            }

            function fi(e) {
                return e && 0 !== e.length ? e.map(function(e) {
                    return e.last_characters
                }) : []
            }

            function mi(e) {
                var t = e.domain,
                    n = e.code,
                    r = e.message,
                    i = e.path;
                if ("invalid" !== n) return r.replace(Qr, "");
                switch (t) {
                    case "checkout":
                        return i.includes("shipping_rate") || i.includes("shipping_line") || i.includes("shipping_id") ? "Choose a valid shipping option." : "".concat(t, " - ").concat(r);
                    case "shipping_address":
                        return "Enter a valid shipping address.";
                    case "billing_address":
                        return "Enter a valid billing address.";
                    case "credit_card":
                        return "Enter a valid credit card.";
                    case "gift_cards":
                    case "discount":
                        return "Enter a valid discount code or gift card.";
                    case "line_items":
                        return "Some items are no longer available. Your cart has been updated.";
                    case "amount":
                        return "Total amount is invalid.";
                    default:
                        return "".concat(t, " - ").concat(r)
                }
            }

            function yi(e) {
                function r(e) {
                    var t = Object.keys(e)[0];
                    if (i.push(t), Array.isArray(e[t])) {
                        var n = e[t][0];
                        return {
                            code: n.code,
                            message: n.message
                        }
                    }
                    return r(e[t])
                }
                var i = [],
                    t = r(e.errors),
                    n = t.code,
                    t = t.message;
                return {
                    domain: Object.keys(e.errors)[0],
                    path: i,
                    code: n,
                    message: t
                }
            }

            function vi(e) {
                e = mi(yi(e));
                return {
                    reason: $r.OtherError,
                    message: e
                }
            }

            function bi() {
                var e = null === (e = null === window || void 0 === window ? void 0 : window.Shopify.Checkout) || void 0 === e ? void 0 : e.token;
                if (e) return "checkout-".concat(e);
                e = ct("cart");
                return e ? "cart-".concat(e) : void 0
            }
            var wi = function() {
                    function n(e) {
                        (0, y.Z)(this, n);
                        var t = e.sdk,
                            e = e.config;
                        this.client = new t.PaymentClient(Kr), this.config = e, this.sdkConfig = e
                    }
                    return (0, v.Z)(n, [{
                        key: "onPaymentConsent",
                        set: function(e) {
                            this.client.onPaymentConsent = e
                        }
                    }, {
                        key: "onPaymentDetailsChanged",
                        set: function(e) {
                            this.client.onPaymentDetailsChanged = e
                        }
                    }, {
                        key: "getAvailability",
                        value: function() {
                            return this.client.getAvailability(this.sdkConfig)
                        }
                    }, {
                        key: "preparePaymentSheet",
                        value: function() {
                            return this.client.preparePaymentSheet(this.sdkConfig)
                        }
                    }, {
                        key: "getPaymentResponse",
                        value: function(e) {
                            e = ti(this.config, e);
                            return this.client.getPaymentResponse(e)
                        }
                    }]), n
                }(),
                ki = function(e, t, n, r) {
                    var i, a = arguments.length,
                        o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, ie.Z)(Reflect)) && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
                    else
                        for (var s = e.length - 1; 0 <= s; s--)(i = e[s]) && (o = (a < 3 ? i(o) : 3 < a ? i(t, n, o) : i(t, n)) || o);
                    return 3 < a && o && Object.defineProperty(t, n, o), o
                },
                gi = function(e, t) {
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, ie.Z)(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
                xi = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                },
                _i = {
                    authorizationState: Jr.ERROR,
                    error: {
                        reason: $r.InvalidShippingAddress,
                        message: "Shipping address required"
                    }
                },
                Pi = function() {
                    function r(e, t, n) {
                        var i = this;
                        (0, y.Z)(this, r), this.id = "FacebookPay", this.onPaymentConsent = function(r) {
                            return xi(i, void 0, void 0, w().mark(function e() {
                                var t, n;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.handleOnPaymentConsent(r);
                                        case 3:
                                            return e.abrupt("return", e.sent);
                                        case 6:
                                            if (e.prev = 6, e.t0 = e.catch(0), t = bi(), n = {
                                                    requestId: r.requestId,
                                                    containerId: r.container.containerId,
                                                    billingAddress: r.billingAddress,
                                                    message: e.t0.message,
                                                    shopName: this.shopName,
                                                    checkoutId: this.checkout.token
                                                }, this.error = JSON.stringify(n), e.t0 && e.t0.response && 422 === e.t0.response.status) return e.prev = 12, e.next = 15, e.t0.response.json();
                                            e.next = 26;
                                            break;
                                        case 15:
                                            return n = e.sent, n = vi(n), T.broadcast("wallets:payment-error", {
                                                walletName: "facebookpay",
                                                error: e.t0,
                                                metadata: {
                                                    shopName: this.shopName,
                                                    token: t
                                                }
                                            }), e.abrupt("return", {
                                                authorizationState: Jr.ERROR,
                                                error: n
                                            });
                                        case 21:
                                            return e.prev = 21, e.t1 = e.catch(12), T.broadcast("wallets:log", {
                                                message: "Failed to handle a 422 Facebook Pay error, facebook_error=".concat(JSON.stringify(e.t0), " error=").concat(JSON.stringify(e.t1)),
                                                walletName: "facebookpay"
                                            }), T.broadcast("wallets:payment-error", {
                                                walletName: "facebookpay",
                                                error: e.t0,
                                                metadata: {
                                                    shopName: this.shopName,
                                                    token: t,
                                                    errorWhileHandlingError: JSON.stringify(e.t1)
                                                }
                                            }), e.abrupt("return", {
                                                authorizationState: Jr.ERROR,
                                                error: {
                                                    reason: $r.GenericFailure,
                                                    message: "Unexpected error occurred"
                                                }
                                            });
                                        case 26:
                                            return T.broadcast("wallets:payment-error", {
                                                walletName: "facebookpay",
                                                error: e.t0,
                                                metadata: {
                                                    shopName: this.shopName,
                                                    token: t
                                                }
                                            }), e.abrupt("return", {
                                                authorizationState: Jr.ERROR,
                                                error: {
                                                    reason: $r.GenericFailure,
                                                    message: e.t0.message
                                                }
                                            });
                                        case 28:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [0, 6],
                                    [12, 21]
                                ])
                            }))
                        }, this.onPaymentDetailsChanged = function(n) {
                            return xi(i, void 0, void 0, w().mark(function e() {
                                var t;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.handleOnPaymentDetailsChanged(n);
                                        case 3:
                                            return e.abrupt("return", e.sent);
                                        case 6:
                                            return e.prev = 6, e.t0 = e.catch(0), t = [], n.changeTypes.includes("SHIPPING_OPTION_ID") || n.changeTypes.includes("SHIPPING_ADDRESS") ? t.push({
                                                reason: $r.InvalidShippingAddress,
                                                message: "Invalid shipping address",
                                                field: Wr.addressLine
                                            }) : t.push({
                                                reason: $r.GenericFailure,
                                                message: "onPaymentDetailsChanged returned an error"
                                            }), e.abrupt("return", {
                                                paymentDetails: Object.assign({}, n.paymentDetails),
                                                errors: t
                                            });
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [0, 6]
                                ])
                            }))
                        }, this.paymentClient = e, this.shopName = t, this.checkout = n
                    }
                    return (0, v.Z)(r, [{
                        key: "start",
                        value: function() {
                            return xi(this, void 0, void 0, w().mark(function e() {
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return this.paymentClient.onPaymentConsent = this.onPaymentConsent, this.paymentClient.onPaymentDetailsChanged = this.onPaymentDetailsChanged, e.next = 4, this.paymentClient.getPaymentResponse(this.checkout);
                                        case 4:
                                            location.assign(this.checkout.attributes.web_url);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "handleOnPaymentConsent",
                        value: function(a) {
                            return xi(this, void 0, void 0, w().mark(function e() {
                                var t, n, r, i;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (a.payerEmail) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new Error("Email address required");
                                        case 2:
                                            if (a.billingAddress) {
                                                e.next = 4;
                                                break
                                            }
                                            throw new Error("Billing address required");
                                        case 4:
                                            if (t = {
                                                    type: "facebook_pay",
                                                    payment_data: JSON.stringify({
                                                        container_data: a.container.containerData,
                                                        container_id: a.container.containerId,
                                                        mode: a.container.mode
                                                    })
                                                }, n = {
                                                    email: a.payerEmail,
                                                    name: a.payerName,
                                                    billing_address: ei(a.billingAddress),
                                                    gateway_params: {
                                                        payment_token: t
                                                    }
                                                }, !this.checkout.attributes.requires_shipping) {
                                                e.next = 10;
                                                break
                                            }
                                            if (a.shippingAddress) {
                                                e.next = 9;
                                                break
                                            }
                                            return e.abrupt("return", _i);
                                        case 9:
                                            n.shipping_address = ei(a.shippingAddress);
                                        case 10:
                                            return e.next = 12, this.checkout.update(n);
                                        case 12:
                                            if (r = {
                                                    unique_token: a.requestId,
                                                    amount: this.checkout.attributes.total_price,
                                                    payment_token: t
                                                }, "0.00" === this.checkout.attributes.payment_due) return e.next = 16, this.checkout.completeFreeCheckout();
                                            e.next = 17;
                                            break;
                                        case 16:
                                            return e.abrupt("return", {
                                                authorizationState: Jr.SUCCESS
                                            });
                                        case 17:
                                            return e.next = 19, this.checkout.createPayment(r);
                                        case 19:
                                            if ((i = e.sent).isSuccess) return e.abrupt("return", {
                                                authorizationState: Jr.SUCCESS
                                            });
                                            e.next = 24;
                                            break;
                                        case 24:
                                            return e.abrupt("return", {
                                                authorizationState: Jr.ERROR,
                                                error: {
                                                    reason: $r.InvalidPaymentData,
                                                    message: i.payment_processing_error_message || "Checkout did not successfully create payment."
                                                }
                                            });
                                        case 25:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "handleOnPaymentDetailsChanged",
                        value: function(o) {
                            return xi(this, void 0, void 0, w().mark(function e() {
                                var t, n, r, i, a;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t = o.changeTypes, i = o.paymentDetails, n = i.shippingAddress, r = i.shippingOptionId, i = i.offers, n) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return", {
                                                paymentDetails: o.paymentDetails
                                            });
                                        case 3:
                                            return e.next = 5, this.configureShipping(t, n, r);
                                        case 5:
                                            if (0 === this.checkout.shippingRates.length) return e.abrupt("return", {
                                                paymentDetails: o.paymentDetails,
                                                errors: [{
                                                    reason: $r.InvalidShippingAddress,
                                                    message: "Invalid shipping address",
                                                    field: Wr.addressLine
                                                }]
                                            });
                                            e.next = 7;
                                            break;
                                        case 7:
                                            return e.next = 9, this.configureOffers(t, i);
                                        case 9:
                                            if (a = e.sent, void 0 === (o.paymentDetails.offers = a)) return e.abrupt("return", {
                                                paymentDetails: o.paymentDetails,
                                                errors: [{
                                                    reason: $r.InvalidOfferCode,
                                                    field: Wr.offers,
                                                    message: "Adding an invalid discount code"
                                                }]
                                            });
                                            e.next = 13;
                                            break;
                                        case 13:
                                            return e.abrupt("return", {
                                                paymentDetails: si(this.checkout.attributes, this.checkout.shippingRates, this.shopName, a)
                                            });
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "configureShipping",
                        value: function(n, r, i) {
                            return xi(this, void 0, void 0, w().mark(function e() {
                                var t;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (n.includes("SHIPPING_ADDRESS")) return e.next = 3, this.checkout.calculateShipping(ei(r));
                                            e.next = 3;
                                            break;
                                        case 3:
                                            if (t = function(e) {
                                                    return e.id === i
                                                }, n.includes("SHIPPING_ADDRESS") && i && this.checkout.shippingRates.some(t) || n.includes("SHIPPING_OPTION_ID")) return e.next = 8, this.checkout.selectShippingRate(i);
                                            e.next = 8;
                                            break;
                                        case 8:
                                            if (this.checkout.clearLandedCostState(), this.checkout.attributes.duties_applicable) return e.next = 12, this.checkout.getLandedCostState();
                                            e.next = 12;
                                            break;
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "configureOffers",
                        value: function(h, p) {
                            return xi(this, void 0, void 0, w().mark(function e() {
                                var t, n, r, i, a, o, s, c, u = this;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t = p || [], n = di(this.checkout.attributes.applied_discounts), r = fi(this.checkout.attributes.gift_cards), i = [].concat((0, l.Z)(r), (0, l.Z)(n)), i = p && (0 < p.length || 0 < i.length), !(h.includes("OFFERS") && i && p)) {
                                                e.next = 30;
                                                break
                                            }
                                            if (a = hi(p, n, r), c = a.added, a = a.removed, c) return e.prev = 8, e.next = 11, this.checkout.addReductionCode(c);
                                            e.next = 20;
                                            break;
                                        case 11:
                                            e.next = 20;
                                            break;
                                        case 13:
                                            return e.prev = 13, e.t0 = e.catch(8), e.next = 17, pi(e.t0);
                                        case 17:
                                            if (e.sent) return e.abrupt("return");
                                            e.next = 20;
                                            break;
                                        case 20:
                                            if (!a) {
                                                e.next = 29;
                                                break
                                            }
                                            if (o = a.code, "discount" === (s = a.type) && o) return e.next = 25, this.checkout.removeDiscount(o);
                                            e.next = 25;
                                            break;
                                        case 25:
                                            if ("giftCard" === s && o) return c = this.checkout.attributes.gift_cards.filter(function(e) {
                                                return e.last_characters === o
                                            }), e.next = 29, Promise.all(c.map(function(e) {
                                                return u.checkout.removeGiftCard(e.id.toString())
                                            }));
                                            e.next = 29;
                                            break;
                                        case 29:
                                            t = li(this.checkout.attributes);
                                        case 30:
                                            return e.abrupt("return", t);
                                        case 31:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [8, 13]
                                ])
                            }))
                        }
                    }]), r
                }();
            ki([L("acceleration.latency.benchmark", "id", "instrument"), gi("design:type", Function), gi("design:paramtypes", [Object]), gi("design:returntype", Promise)], Pi.prototype, "handleOnPaymentConsent", null);
            var ki = function(e, t, n, r) {
                    var i, a = arguments.length,
                        o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, ie.Z)(Reflect)) && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
                    else
                        for (var s = e.length - 1; 0 <= s; s--)(i = e[s]) && (o = (a < 3 ? i(o) : 3 < a ? i(t, n, o) : i(t, n)) || o);
                    return 3 < a && o && Object.defineProperty(t, n, o), o
                },
                gi = function(e, t) {
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, ie.Z)(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
                Si = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                },
                Ai = function() {
                    function t(e) {
                        (0, y.Z)(this, t), this.id = "FacebookPay", this.client = new wi(e)
                    }
                    return (0, v.Z)(t, [{
                        key: "canMakeAcceleratedPurchase",
                        value: function() {
                            return Si(this, void 0, void 0, w().mark(function e() {
                                var t;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.client.getAvailability();
                                        case 3:
                                            return t = e.sent, e.abrupt("return", t === Vr.Available || t === Vr.MightBeAvailable);
                                        case 7:
                                            return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", !1);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [0, 7]
                                ])
                            }))
                        }
                    }, {
                        key: "begin",
                        value: function(a) {
                            return Si(this, void 0, void 0, w().mark(function e() {
                                var t, n, r, i;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, this.client.preparePaymentSheet(), e.next = 4, a;
                                        case 4:
                                            if (n = e.sent, window.Shopify && window.Shopify.Checkout && 0 <= window.Shopify.Checkout.estimatedPrice && n.attributes && n.attributes.payment_due !== window.Shopify.Checkout.estimatedPrice.toFixed(2)) return e.next = 8, n.reload();
                                            e.next = 8;
                                            break;
                                        case 8:
                                            return t = new Pi(this.client, this.client.config.shopName, n), T.subscribe("checkout-api:throttled", function() {
                                                C.redirectToThrottlePage()
                                            }), e.next = 12, t.start();
                                        case 12:
                                            return T.broadcast("facebookpay:redirect-url", {
                                                url: n.attributes.web_url
                                            }), e.abrupt("return", {
                                                state: ae.Success
                                            });
                                        case 16:
                                            return e.prev = 16, e.t0 = e.catch(0), r = [], i = ae.Cancelled, t && t.error && (i = ae.Failure, r.push(t.error)), e.t0.code !== Hr.Aborted && (i = ae.Failure, r.push(e.t0.message)), e.abrupt("return", {
                                                state: i,
                                                errors: r
                                            });
                                        case 23:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [0, 16]
                                ])
                            }))
                        }
                    }]), t
                }();
            ki([L("acceleration.check.benchmark", "id", "instrument"), gi("design:type", Function), gi("design:paramtypes", []), gi("design:returntype", Promise)], Ai.prototype, "canMakeAcceleratedPurchase", null);
            var Ci = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                },
                Ti = function() {
                    function e() {
                        (0, y.Z)(this, e)
                    }
                    return (0, v.Z)(e, null, [{
                        key: "load",
                        value: function(r) {
                            return Ci(this, void 0, void 0, w().mark(function e() {
                                var t, n;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, $t.inject(Yr, {
                                                constant: "fbpay"
                                            });
                                        case 2:
                                            return t = e.sent, n = Object.assign(Object.assign({}, r), {
                                                containerContext: "EMPTY_CONTAINER_CONTEXT",
                                                requestId: bi()
                                            }), n = new Ai({
                                                sdk: t,
                                                config: n
                                            }), e.next = 7, n.canMakeAcceleratedPurchase();
                                        case 7:
                                            if (e.sent) {
                                                e.next = 10;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 10:
                                            return e.abrupt("return", n);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }))
                        }
                    }]), e
                }();
            Ti.isSupported = !0;
            var Ii = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                },
                Ei = function() {
                    function n(e, t) {
                        (0, y.Z)(this, n), this.attributes = e, this.apiClient = t, this.token = e.token, this.secretKey = t.secretKey, this.shippingRates = [], this.landedCostState = x.NotApplicable
                    }
                    return (0, v.Z)(n, [{
                        key: "addReductionCode",
                        value: function(e) {
                            return this.update({
                                reduction_code: e
                            })
                        }
                    }, {
                        key: "removeDiscount",
                        value: function(e) {
                            return this.update({
                                clear_discount: !0,
                                discount_code: e
                            })
                        }
                    }, {
                        key: "removeGiftCard",
                        value: function(e) {
                            return this.update({
                                applied_gift_cards: {
                                    0: {
                                        id: e,
                                        _delete: !0
                                    }
                                }
                            })
                        }
                    }, {
                        key: "clearLandedCostState",
                        value: function() {
                            return this.landedCostState = x.NotApplicable, this
                        }
                    }, {
                        key: "calculateShipping",
                        value: function(t) {
                            return Ii(this, void 0, void 0, w().mark(function e() {
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.apiClient.calculateShipping(this.token, t);
                                        case 2:
                                            return this.attributes = e.sent, this.attributes.available_shipping_rates && (this.shippingRates = this.attributes.available_shipping_rates), e.abrupt("return", this);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "refreshShippingRates",
                        value: function() {
                            return Ii(this, void 0, void 0, w().mark(function e() {
                                var t;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.attributes.requires_shipping) return e.next = 3, this.apiClient.getShippingRates(this.token);
                                            e.next = 11;
                                            break;
                                        case 3:
                                            if (t = e.sent, this.shippingRates = t.sort(Oi), this.shippingRates.length && !this.attributes.shipping_line) return t = this.shippingRates[0], e.next = 9, this.selectShippingRate(t.id);
                                            e.next = 9;
                                            break;
                                        case 9:
                                            e.next = 12;
                                            break;
                                        case 11:
                                            this.shippingRates = [];
                                        case 12:
                                            return e.abrupt("return", this.shippingRates);
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "selectShippingRate",
                        value: function(t) {
                            return Ii(this, void 0, void 0, w().mark(function e() {
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.update({
                                                shipping_line: {
                                                    handle: t
                                                }
                                            }));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "createPayment",
                        value: function(r) {
                            return Ii(this, void 0, void 0, w().mark(function e() {
                                var t, n;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.apiClient.createPayment(this.token, r);
                                        case 2:
                                            return t = e.sent, n = t.transaction, !t.payment_processing_error_message && n && "success" !== n.status && "pending" !== n.status && (t.payment_processing_error_message = n.message || "Payment Transaction ".concat(n.status)), t.isSuccess = !t.payment_processing_error_message, e.abrupt("return", t);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "getLandedCostState",
                        value: function() {
                            return Ii(this, void 0, void 0, w().mark(function e() {
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.apiClient.getLandedCostState(this.token);
                                        case 2:
                                            return this.landedCostState = e.sent, e.next = 5, this.reload();
                                        case 5:
                                            return e.abrupt("return", this);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "createPaymentSession",
                        value: function(n) {
                            return Ii(this, void 0, void 0, w().mark(function e() {
                                var t;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = this.attributes.payment_url, e.abrupt("return", this.apiClient.createPaymentSession(t, n));
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "completeFreeCheckout",
                        value: function() {
                            return Ii(this, void 0, void 0, w().mark(function e() {
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.apiClient.completeFreeCheckout(this.token);
                                        case 2:
                                            return this.attributes = e.sent, e.abrupt("return", this);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "reload",
                        value: function() {
                            return Ii(this, void 0, void 0, w().mark(function e() {
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.apiClient.getCheckout(this.token);
                                        case 2:
                                            return this.attributes = e.sent, e.abrupt("return", this);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "stopPolling",
                        value: function() {
                            this.apiClient.stopPolling()
                        }
                    }, {
                        key: "update",
                        value: function(t) {
                            return Ii(this, void 0, void 0, w().mark(function e() {
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.apiClient.updateCheckout(this.token, t);
                                        case 2:
                                            return this.attributes = e.sent, e.abrupt("return", this);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }]), n
                }();

            function Oi(e, t) {
                e = parseFloat(e.price), t = parseFloat(t.price);
                return e < t ? -1 : t < e ? 1 : 0
            }
            var Ri = function(e, o, n, s) {
                    function c(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            e.done ? t(e.value) : c(e.value).then(r, i)
                        }
                        a((s = s.apply(e, o || [])).next())
                    })
                },
                Ni = function(e) {
                    return void 0 !== e.line_items
                },
                ji = function(e) {
                    return void 0 !== e.cart_token
                },
                Zi = function() {
                    function o(e, t) {
                        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                        (0, y.Z)(this, o), this.dataSource = e, this.checkout = n.checkout || null, this.discountCode = n.discountCode || null, this.currency = n.currency, this.country = n.country, this.context = null, this.pageType = "", this.hasSellingPlans = !1, this.eventEmitter = n.eventEmitter || T, this.apiClient = new bt({
                            accessToken: t,
                            eventEmitter: this.eventEmitter
                        }, n.apiVersion)
                    }
                    return (0, v.Z)(o, [{
                        key: "estimatePrice",
                        value: function() {
                            return Ri(this, void 0, void 0, w().mark(function e() {
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.dataSource.estimatePrice) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new TypeError("There is no estimatePrice method on this data source.");
                                        case 2:
                                            return e.next = 4, this.dataSource.estimatePrice();
                                        case 4:
                                            return e.abrupt("return", e.sent);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "setCheckpointData",
                        value: function(e) {
                            o.checkpointData = e
                        }
                    }, {
                        key: "hasCheckout",
                        value: function() {
                            return null !== this.checkout
                        }
                    }, {
                        key: "setCheckout",
                        value: function(e) {
                            this.checkout = e
                        }
                    }, {
                        key: "checkoutAttributes",
                        value: function() {
                            return null === this.checkout ? null : this.checkout.attributes
                        }
                    }, {
                        key: "updateCheckout",
                        value: function(t) {
                            return Ri(this, void 0, void 0, w().mark(function e() {
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.checkout) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new TypeError("No checkout created, could not update it.");
                                        case 2:
                                            return e.next = 4, this.checkout.update(t);
                                        case 4:
                                            return e.abrupt("return", e.sent);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "onError",
                        value: function(e) {
                            this.eventEmitter.subscribe("checkout-api:error", e)
                        }
                    }, {
                        key: "onThrottled",
                        value: function(e) {
                            this.eventEmitter.subscribe("checkout-api:throttled", e)
                        }
                    }, {
                        key: "onThrottleExited",
                        value: function(e) {
                            this.eventEmitter.subscribe("checkout-api:throttle-exited", e)
                        }
                    }, {
                        key: "build",
                        value: function(i, a) {
                            return Ri(this, void 0, void 0, w().mark(function e() {
                                var t, n, r;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.dataSource.fetch();
                                        case 2:
                                            if (n = e.sent, t = Object.assign(Object.assign(Object.assign({}, n), a), {
                                                    secret: !0,
                                                    wallet_name: i,
                                                    is_upstream_button: "buy_now" === this.context,
                                                    page_type: this.pageType,
                                                    has_selling_plans: this.hasSellingPlans
                                                }), null === this.checkout) return this.currency && (t.presentment_currency = this.currency), this.country && (t.country = this.country), e.next = 9, this.createCheckout(t, o.checkpointData);
                                            e.next = 12;
                                            break;
                                        case 9:
                                            this.checkout = e.sent, e.next = 28;
                                            break;
                                        case 12:
                                            if (Ni(t) && this.lineItemsChanged(t.line_items)) return e.next = 15, this.apiClient.updateCheckout(this.checkout.token, t);
                                            e.next = 19;
                                            break;
                                        case 15:
                                            n = e.sent, this.checkout = new Ei(n, this.apiClient), e.next = 28;
                                            break;
                                        case 19:
                                            if (ji(t)) return e.next = 22, this.estimatePrice();
                                            e.next = 28;
                                            break;
                                        case 22:
                                            if (r = e.sent, this.totalItemsPriceChanged(r)) return e.next = 26, this.apiClient.updateCheckout(this.checkout.token, t);
                                            e.next = 28;
                                            break;
                                        case 26:
                                            r = e.sent, this.checkout = new Ei(r, this.apiClient);
                                        case 28:
                                            return e.abrupt("return", this.checkout);
                                        case 29:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "calculateShipping",
                        value: function(t) {
                            return Ri(this, void 0, void 0, w().mark(function e() {
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.checkout) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new TypeError("No checkout found.");
                                        case 2:
                                            return e.next = 4, this.checkout.calculateShipping(t);
                                        case 4:
                                            return e.abrupt("return", e.sent);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "refreshShippingRates",
                        value: function() {
                            return Ri(this, void 0, void 0, w().mark(function e() {
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.checkout) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new TypeError("No checkout found.");
                                        case 2:
                                            if (this.checkout.attributes.shipping_address) {
                                                e.next = 4;
                                                break
                                            }
                                            throw new TypeError("Checkout has no address");
                                        case 4:
                                            return e.next = 6, this.calculateShipping(this.checkout.attributes.shipping_address);
                                        case 6:
                                            return e.abrupt("return", e.sent);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))
                        }
                    }, {
                        key: "setContext",
                        value: function(e) {
                            this.context = e
                        }
                    }, {
                        key: "setDiscountCode",
                        value: function(e) {
                            this.discountCode = e
                        }
                    }, {
                        key: "setPageType",
                        value: function(e) {
                            this.pageType = e
                        }
                    }, {
                        key: "setHasSellingPlans",
                        value: function(e) {
                            this.hasSellingPlans = e || !1
                        }
                    }, {
                        key: "createCheckout",
                        value: function(a, o) {
                            return Ri(this, void 0, void 0, w().mark(function e() {
                                var t, n, r, i;
                                return w().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.apiClient.createCheckout(a, o);
                                        case 3:
                                            return t = e.sent, e.next = 6, t.json();
                                        case 6:
                                            n = e.sent, n = n.checkout, e.next = 22;
                                            break;
                                        case 10:
                                            if (e.prev = 10, e.t0 = e.catch(0), Di(e.t0)) return e.next = 15, e.t0.response.json();
                                            e.next = 20;
                                            break;
                                        case 15:
                                            throw r = e.sent, this.redirectToCheckpointPage(r.errors.checkpoint_url, a), new kr;
                                        case 20:
                                            throw this.eventEmitter.broadcast("checkout-api:error", e.t0), e.t0;
                                        case 22:
                                            if (!Ui(t, a.wallet_name)) {
                                                e.next = 53;
                                                break
                                            }
                                            if (!t.headers.get("X-Checkout-Queue")) {
                                                e.next = 38;
                                                break
                                            }
                                            if (this.eventEmitter.broadcast("checkout-api:throttled"), r = ct("_checkout_queue_token")) return e.next = 29, this.apiClient.pollCheckoutQueue(r);
                                            e.next = 36;
                                            break;
                                        case 29:
                                            return e.next = 31, this.apiClient.createCheckout(a, o);
                                        case 31:
                                            return t = e.sent, e.next = 34, t.json();
                                        case 34:
                                            i = e.sent, n = i.checkout;
                                        case 36:
                                            e.next = 53;
                                            break;
                                        case 38:
                                            return e.prev = 38, this.eventEmitter.broadcast("checkout-api:throttled"), e.next = 42, this.apiClient.poll({
                                                timeout: 9e4
                                            }, t);
                                        case 42:
                                            return t = e.sent, e.next = 45, t.json();
                                        case 45:
                                            i = e.sent, n = i.checkout, e.next = 53;
                                            break;
                                        case 49:
                                            throw e.prev = 49, e.t1 = e.catch(38), this.eventEmitter.broadcast("checkout-api:error", e.t1), e.t1;
                                        case 53:
                                            if (this.discountCode && !n.web_url.includes("/bin/")) return e.prev = 54, e.next = 57, this.apiClient.addReductionCode(n.token, this.discountCode);
                                            e.next = 67;
                                            break;
                                        case 57:
                                            n = e.sent, e.next = 67;
                                            break;
                                        case 60:
                                            return e.prev = 60, e.t2 = e.catch(54), e.next = 64, qi(e.t2);
                                        case 64:
                                            if (e.sent) {
                                                e.next = 67;
                                                break
                                            }
                                            throw e.t2;
                                        case 67:
                                            return e.abrupt("return", new Ei(n, this.apiClient));
                                        case 68:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [0, 10],
                                    [38, 49],
                                    [54, 60]
                                ])
                            }))
                        }
                    }, {
                        key: "redirectToCheckpointPage",
                        value: function(e, t) {
                            t = lt(JSON.stringify(t)), t = "".concat(e, "?_cP=").concat(t);
                            window.location.assign(t)
                        }
                    }, {
                        key: "lineItemsChanged",
                        value: function(e) {
                            if (null === this.checkout || !this.checkout.attributes.line_items) return !1;
                            var n = this.checkout.attributes.line_items;
                            return e.length !== n.length || e.some(function(e, t) {
                                return e.quantity !== n[t].quantity || e.variant_id !== n[t].variant_id || e.selling_plan_id !== n[t].selling_plan_id
                            })
                        }
                    }, {
                        key: "totalItemsPriceChanged",
                        value: function(e) {
                            return null !== this.checkout && this.checkout.attributes.total_line_items_price !== e
                        }
                    }]), o
                }();

            function Di(e) {
                return e && e instanceof Xe && e.response && 412 === e.response.status
            }

            function Ui(e, t) {
                return 202 === e.status && Boolean(e.headers.get("Retry-After")) && Boolean(e.headers.get("Location")) && "google_pay" !== t || !!e.headers.get("X-Checkout-Queue")
            }

            function qi(n) {
                return Ri(this, void 0, void 0, w().mark(function e() {
                    var t;
                    return w().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t = !1, n instanceof Xe && n.response && 422 === n.response.status) return e.next = 4, n.response.json();
                                e.next = 6;
                                break;
                            case 4:
                                e.sent.errors.reduction_code && (t = !0);
                            case 6:
                                return e.abrupt("return", t);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))
            }
        },
        7169: function(e, t, n) {
            function r(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        7597: function(e, t, n) {
            function r(e) {
                return (r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        7591: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(6983);

            function i(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && (0, r.Z)(e, t)
            }
        },
        5181: function(e, t, n) {
            function r(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        9492: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var r = n(3940),
                i = n(7169);

            function a(e, t) {
                if (t && ("object" === (0, r.Z)(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return (0, i.Z)(e)
            }
        },
        6983: function(e, t, n) {
            function r(e, t) {
                return (r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        649: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return c
                }
            });
            var r = n(1793);

            function i(e) {
                if (Array.isArray(e)) return (0, r.Z)(e)
            }
            var a = n(5181),
                o = n(4013);

            function s() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function c(e) {
                return i(e) || (0, a.Z)(e) || (0, o.Z)(e) || s()
            }
        },
        4138: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return c
                }
            });
            var r = n(7597),
                i = n(6983);

            function a(e) {
                return -1 !== Function.toString.call(e).indexOf("[native code]")
            }

            function o() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }

            function s(e, t, n) {
                return (s = o() ? Reflect.construct.bind() : function(e, t, n) {
                    var r = [null];
                    r.push.apply(r, t);
                    r = new(Function.bind.apply(e, r));
                    return n && (0, i.Z)(r, n.prototype), r
                }).apply(null, arguments)
            }

            function c(e) {
                var n = "function" == typeof Map ? new Map : void 0;
                return (c = function(e) {
                    if (null === e || !a(e)) return e;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== n) {
                        if (n.has(e)) return n.get(e);
                        n.set(e, t)
                    }

                    function t() {
                        return s(e, arguments, (0, r.Z)(this).constructor)
                    }
                    return t.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), (0, i.Z)(t, e)
                })(e)
            }
        }
    }
]);