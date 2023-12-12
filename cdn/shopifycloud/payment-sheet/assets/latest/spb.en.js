var Shopify;
! function() {
    var l, f, n = {
            7834: function(e) {
                e.exports = {
                    animationTime: 500,
                    bugsnagApiUrl: "https://upload.bugsnag.com",
                    bugsnagApiKey: "256b27e25ef85a189c1b1ef7c2668f30",
                    defaultCdnHost: "cdn.shopify.com",
                    defaultCdnPath: "/shopifycloud/payment-sheet/assets",
                    googleCloudAssetsPath: "payment-sheet/assets",
                    googleCloudBucketName: "cdn.shopifycloud.com",
                    googleCloudProjectId: "shopify-tiers",
                    versionName: "latest",
                    analyze: !1
                }
            },
            8279: function(e) {
                var t;
                t = function() {
                    var n, r = ["navigation", "request", "process", "log", "user", "state", "error", "manual"],
                        h = function(e, t, n) {
                            for (var r = n, o = 0, i = e.length; o < i; o++) r = t(r, e[o], o, e);
                            return r
                        },
                        g = function(e, o) {
                            return h(e, function(e, t, n, r) {
                                return o(t, n, r) ? e.concat(t) : e
                            }, [])
                        },
                        f = function(e, o) {
                            return h(e, function(e, t, n, r) {
                                return !0 === e || t === o
                            }, !1)
                        },
                        i = function(e) {
                            return "[object Array]" === Object.prototype.toString.call(e)
                        },
                        a = !{
                            toString: null
                        }.propertyIsEnumerable("toString"),
                        u = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                        s = function(e) {
                            var t, n = [];
                            for (t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
                            if (!a) return n;
                            for (var r = 0, o = u.length; r < o; r++) Object.prototype.hasOwnProperty.call(e, u[r]) && n.push(u[r]);
                            return n
                        },
                        t = function(t, n) {
                            return void 0 === t && (t = 1), void 0 === n && (n = 1 / 0),
                                function(e) {
                                    return "number" == typeof e && parseInt("" + e, 10) === e && t <= e && e <= n
                                }
                        },
                        e = function(e) {
                            return "function" == typeof e || i(e) && g(e, function(e) {
                                return "function" == typeof e
                            }).length === e.length
                        },
                        o = function(e) {
                            return "string" == typeof e && !!e.length
                        },
                        c = {},
                        l = function() {
                            return {
                                unhandledExceptions: !0,
                                unhandledRejections: !0
                            }
                        };
                    c.schema = {
                        apiKey: {
                            defaultValue: function() {
                                return null
                            },
                            message: "is required",
                            validate: o
                        },
                        appVersion: {
                            defaultValue: function() {},
                            message: "should be a string",
                            validate: function(e) {
                                return void 0 === e || o(e)
                            }
                        },
                        appType: {
                            defaultValue: function() {},
                            message: "should be a string",
                            validate: function(e) {
                                return void 0 === e || o(e)
                            }
                        },
                        autoDetectErrors: {
                            defaultValue: function() {
                                return !0
                            },
                            message: "should be true|false",
                            validate: function(e) {
                                return !0 === e || !1 === e
                            }
                        },
                        enabledErrorTypes: {
                            defaultValue: function() {
                                return l()
                            },
                            message: "should be an object containing the flags { unhandledExceptions:true|false, unhandledRejections:true|false }",
                            allowPartialObject: !0,
                            validate: function(t) {
                                if ("object" != typeof t || !t) return !1;
                                var e = s(t),
                                    n = s(l());
                                return !(g(e, function(e) {
                                    return f(n, e)
                                }).length < e.length) && !(0 < g(s(t), function(e) {
                                    return "boolean" != typeof t[e]
                                }).length)
                            }
                        },
                        onError: {
                            defaultValue: function() {
                                return []
                            },
                            message: "should be a function or array of functions",
                            validate: e
                        },
                        onSession: {
                            defaultValue: function() {
                                return []
                            },
                            message: "should be a function or array of functions",
                            validate: e
                        },
                        onBreadcrumb: {
                            defaultValue: function() {
                                return []
                            },
                            message: "should be a function or array of functions",
                            validate: e
                        },
                        endpoints: {
                            defaultValue: function() {
                                return {
                                    notify: "https://notify.bugsnag.com",
                                    sessions: "https://sessions.bugsnag.com"
                                }
                            },
                            message: "should be an object containing endpoint URLs { notify, sessions }",
                            validate: function(e) {
                                return e && "object" == typeof e && o(e.notify) && o(e.sessions) && 0 === g(s(e), function(e) {
                                    return !f(["notify", "sessions"], e)
                                }).length
                            }
                        },
                        autoTrackSessions: {
                            defaultValue: function(e) {
                                return !0
                            },
                            message: "should be true|false",
                            validate: function(e) {
                                return !0 === e || !1 === e
                            }
                        },
                        enabledReleaseStages: {
                            defaultValue: function() {
                                return null
                            },
                            message: "should be an array of strings",
                            validate: function(e) {
                                return null === e || i(e) && g(e, function(e) {
                                    return "string" == typeof e
                                }).length === e.length
                            }
                        },
                        releaseStage: {
                            defaultValue: function() {
                                return "production"
                            },
                            message: "should be a string",
                            validate: function(e) {
                                return "string" == typeof e && e.length
                            }
                        },
                        maxBreadcrumbs: {
                            defaultValue: function() {
                                return 25
                            },
                            message: "should be a number ≤100",
                            validate: function(e) {
                                return t(0, 100)(e)
                            }
                        },
                        enabledBreadcrumbTypes: {
                            defaultValue: function() {
                                return r
                            },
                            message: "should be null or a list of available breadcrumb types (" + r.join(",") + ")",
                            validate: function(e) {
                                return null === e || i(e) && h(e, function(e, t) {
                                    return !1 === e ? e : f(r, t)
                                }, !0)
                            }
                        },
                        context: {
                            defaultValue: function() {},
                            message: "should be a string",
                            validate: function(e) {
                                return void 0 === e || "string" == typeof e
                            }
                        },
                        user: {
                            defaultValue: function() {
                                return {}
                            },
                            message: "should be an object with { id, email, name } properties",
                            validate: function(e) {
                                return null === e || e && h(s(e), function(e, t) {
                                    return e && f(["id", "email", "name"], t)
                                }, !0)
                            }
                        },
                        metadata: {
                            defaultValue: function() {
                                return {}
                            },
                            message: "should be an object",
                            validate: function(e) {
                                return "object" == typeof e && null !== e
                            }
                        },
                        logger: {
                            defaultValue: function() {},
                            message: "should be null or an object with methods { debug, info, warn, error }",
                            validate: function(n) {
                                return !n || h(["debug", "info", "warn", "error"], function(e, t) {
                                    return e && "function" == typeof n[t]
                                }, !0)
                            }
                        },
                        redactedKeys: {
                            defaultValue: function() {
                                return ["password"]
                            },
                            message: "should be an array of strings|regexes",
                            validate: function(e) {
                                return i(e) && e.length === g(e, function(e) {
                                    return "string" == typeof e || e && "function" == typeof e.test
                                }).length
                            }
                        },
                        plugins: {
                            defaultValue: function() {
                                return []
                            },
                            message: "should be an array of plugin objects",
                            validate: function(e) {
                                return i(e) && e.length === g(e, function(e) {
                                    return e && "object" == typeof e && "function" == typeof e.load
                                }).length
                            }
                        },
                        featureFlags: {
                            defaultValue: function() {
                                return []
                            },
                            message: 'should be an array of objects that have a "name" property',
                            validate: function(e) {
                                return i(e) && e.length === g(e, function(e) {
                                    return e && "object" == typeof e && "string" == typeof e.name
                                }).length
                            }
                        }
                    };
                    var d = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n, r = arguments[t];
                                for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                            }
                            return e
                        },
                        v = function(e, o) {
                            return h(e, function(e, t, n, r) {
                                return e.concat(o(t, n, r))
                            }, [])
                        };

                    function p() {
                        return (p = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n, r = arguments[t];
                                for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                            }
                            return e
                        }).apply(this, arguments)
                    }
                    var y = c.schema,
                        e = {
                            releaseStage: d({}, y.releaseStage, {
                                defaultValue: function() {
                                    return /^localhost(:\d+)?$/.test(window.location.host) ? "development" : "production"
                                }
                            }),
                            appType: p({}, y.appType, {
                                defaultValue: function() {
                                    return "browser"
                                }
                            }),
                            logger: d({}, y.logger, {
                                defaultValue: function() {
                                    return "undefined" != typeof console && "function" == typeof console.debug ? m() : void 0
                                }
                            })
                        },
                        m = function() {
                            var n = {},
                                r = console.log;
                            return v(["debug", "info", "warn", "error"], function(e) {
                                var t = console[e];
                                n[e] = ("function" == typeof t ? t : r).bind(console, "[bugsnag]")
                            }), n
                        },
                        b = function() {
                            function e(e, t, n, r) {
                                void 0 === r && (r = new Date), this.type = n, this.message = e, this.metadata = t, this.timestamp = r
                            }
                            return e.prototype.toJSON = function() {
                                return {
                                    type: this.type,
                                    name: this.message,
                                    timestamp: this.timestamp,
                                    metaData: this.metadata
                                }
                            }, e
                        }(),
                        w = {};
                    ! function(e, t) {
                        "use strict";
                        "function" == typeof n && n.amd ? n("stackframe", [], t) : "object" == typeof w ? w = t() : e.StackFrame = t()
                    }(this, function() {
                        "use strict";

                        function n(e) {
                            return !isNaN(parseFloat(e)) && isFinite(e)
                        }

                        function r(e) {
                            return e.charAt(0).toUpperCase() + e.substring(1)
                        }

                        function e(e) {
                            return function() {
                                return this[e]
                            }
                        }
                        var t = ["isConstructor", "isEval", "isNative", "isToplevel"],
                            o = ["columnNumber", "lineNumber"],
                            i = ["fileName", "functionName", "source"],
                            a = ["args"],
                            u = t.concat(o, i, a);

                        function s(e) {
                            if (e instanceof Object)
                                for (var t = 0; t < u.length; t++) e.hasOwnProperty(u[t]) && void 0 !== e[u[t]] && this["set" + r(u[t])](e[u[t]])
                        }
                        s.prototype = {
                            getArgs: function() {
                                return this.args
                            },
                            setArgs: function(e) {
                                if ("[object Array]" !== Object.prototype.toString.call(e)) throw new TypeError("Args must be an Array");
                                this.args = e
                            },
                            getEvalOrigin: function() {
                                return this.evalOrigin
                            },
                            setEvalOrigin: function(e) {
                                if (e instanceof s) this.evalOrigin = e;
                                else {
                                    if (!(e instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");
                                    this.evalOrigin = new s(e)
                                }
                            },
                            toString: function() {
                                return (this.getFunctionName() || "{anonymous}") + ("(" + (this.getArgs() || []).join(",") + ")") + (this.getFileName() ? "@" + this.getFileName() : "") + (n(this.getLineNumber()) ? ":" + this.getLineNumber() : "") + (n(this.getColumnNumber()) ? ":" + this.getColumnNumber() : "")
                            }
                        };
                        for (var c = 0; c < t.length; c++) s.prototype["get" + r(t[c])] = e(t[c]), s.prototype["set" + r(t[c])] = function(t) {
                            return function(e) {
                                this[t] = Boolean(e)
                            }
                        }(t[c]);
                        for (var l = 0; l < o.length; l++) s.prototype["get" + r(o[l])] = e(o[l]), s.prototype["set" + r(o[l])] = function(t) {
                            return function(e) {
                                if (!n(e)) throw new TypeError(t + " must be a Number");
                                this[t] = Number(e)
                            }
                        }(o[l]);
                        for (var f = 0; f < i.length; f++) s.prototype["get" + r(i[f])] = e(i[f]), s.prototype["set" + r(i[f])] = function(t) {
                            return function(e) {
                                this[t] = String(e)
                            }
                        }(i[f]);
                        return s
                    });
                    var _ = {};
                    ! function(e, t) {
                        "use strict";
                        "function" == typeof n && n.amd ? n("error-stack-parser", ["stackframe"], t) : "object" == typeof _ ? _ = t(w) : e.ErrorStackParser = t(e.StackFrame)
                    }(this, function(u) {
                        "use strict";
                        var t = /(^|@)\S+\:\d+/,
                            n = /^\s*at .*(\S+\:\d+|\(native\))/m,
                            r = /^(eval@)?(\[native code\])?$/;
                        return {
                            parse: function(e) {
                                if (void 0 !== e.stacktrace || void 0 !== e["opera#sourceloc"]) return this.parseOpera(e);
                                if (e.stack && e.stack.match(n)) return this.parseV8OrIE(e);
                                if (e.stack) return this.parseFFOrSafari(e);
                                throw new Error("Cannot parse given Error object")
                            },
                            extractLocation: function(e) {
                                if (-1 === e.indexOf(":")) return [e];
                                e = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(e.replace(/[\(\)]/g, ""));
                                return [e[1], e[2] || void 0, e[3] || void 0]
                            },
                            parseV8OrIE: function(e) {
                                return e.stack.split("\n").filter(function(e) {
                                    return !!e.match(n)
                                }, this).map(function(e) {
                                    var t = (e = -1 < e.indexOf("(eval ") ? e.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, "") : e).replace(/^\s+/, "").replace(/\(eval code/g, "("),
                                        n = t.match(/ (\((.+):(\d+):(\d+)\)$)/),
                                        r = (t = n ? t.replace(n[0], "") : t).split(/\s+/).slice(1),
                                        t = this.extractLocation(n ? n[1] : r.pop()),
                                        n = r.join(" ") || void 0,
                                        r = -1 < ["eval", "<anonymous>"].indexOf(t[0]) ? void 0 : t[0];
                                    return new u({
                                        functionName: n,
                                        fileName: r,
                                        lineNumber: t[1],
                                        columnNumber: t[2],
                                        source: e
                                    })
                                }, this)
                            },
                            parseFFOrSafari: function(e) {
                                return e.stack.split("\n").filter(function(e) {
                                    return !e.match(r)
                                }, this).map(function(e) {
                                    if (-1 === (e = -1 < e.indexOf(" > eval") ? e.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1") : e).indexOf("@") && -1 === e.indexOf(":")) return new u({
                                        functionName: e
                                    });
                                    var t = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                                        n = e.match(t),
                                        n = n && n[1] ? n[1] : void 0,
                                        t = this.extractLocation(e.replace(t, ""));
                                    return new u({
                                        functionName: n,
                                        fileName: t[0],
                                        lineNumber: t[1],
                                        columnNumber: t[2],
                                        source: e
                                    })
                                }, this)
                            },
                            parseOpera: function(e) {
                                return !e.stacktrace || -1 < e.message.indexOf("\n") && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e)
                            },
                            parseOpera9: function(e) {
                                for (var t = /Line (\d+).*script (?:in )?(\S+)/i, n = e.message.split("\n"), r = [], o = 2, i = n.length; o < i; o += 2) {
                                    var a = t.exec(n[o]);
                                    a && r.push(new u({
                                        fileName: a[2],
                                        lineNumber: a[1],
                                        source: n[o]
                                    }))
                                }
                                return r
                            },
                            parseOpera10: function(e) {
                                for (var t = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, n = e.stacktrace.split("\n"), r = [], o = 0, i = n.length; o < i; o += 2) {
                                    var a = t.exec(n[o]);
                                    a && r.push(new u({
                                        functionName: a[3] || void 0,
                                        fileName: a[2],
                                        lineNumber: a[1],
                                        source: n[o]
                                    }))
                                }
                                return r
                            },
                            parseOpera11: function(e) {
                                return e.stack.split("\n").filter(function(e) {
                                    return !!e.match(t) && !e.match(/^Error created at/)
                                }, this).map(function(e) {
                                    var t = e.split("@"),
                                        n = this.extractLocation(t.pop()),
                                        r = t.shift() || "",
                                        t = r.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || void 0,
                                        o = void 0 === (o = r.match(/\(([^\)]*)\)/) ? r.replace(/^[^\(]+\(([^\)]*)\)$/, "$1") : o) || "[arguments not available]" === o ? void 0 : o.split(",");
                                    return new u({
                                        functionName: t,
                                        args: o,
                                        fileName: n[0],
                                        lineNumber: n[1],
                                        columnNumber: n[2],
                                        source: e
                                    })
                                }, this)
                            }
                        }
                    });
                    var E = _,
                        S = function(e, t, n, r) {
                            var o = r && r.redactedKeys ? r.redactedKeys : [],
                                r = r && r.redactedPaths ? r.redactedPaths : [];
                            return JSON.stringify(I(e, o, r), t, n)
                        },
                        O = 20,
                        j = 25e3,
                        x = 8,
                        P = "...";

                    function M(e) {
                        return e instanceof Error || /^\[object (Error|(Dom)?Exception)\]$/.test(Object.prototype.toString.call(e))
                    }

                    function k(e) {
                        return "[Throws: " + (e ? e.message : "?") + "]"
                    }

                    function T(e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t) return !0;
                        return !1
                    }

                    function N(e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (0 === t.indexOf(e[n])) return !0;
                        return !1
                    }

                    function C(e, t) {
                        for (var n = 0, r = e.length; n < r; n++) {
                            if ("string" == typeof e[n] && e[n].toLowerCase() === t.toLowerCase()) return !0;
                            if (e[n] && "function" == typeof e[n].test && e[n].test(t)) return !0
                        }
                        return !1
                    }

                    function A(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    }

                    function L(e, t) {
                        try {
                            return e[t]
                        } catch (e) {
                            return k(e)
                        }
                    }

                    function I(e, c, l) {
                        var f = [],
                            d = 0;

                        function p(e, t) {
                            function n() {
                                return t.length > x && j < d
                            }
                            if (d++, t.length > O) return P;
                            if (n()) return P;
                            if (null === e || "object" != typeof e) return e;
                            if (T(f, e)) return "[Circular]";
                            if (f.push(e), "function" == typeof e.toJSON) try {
                                d--;
                                var r = p(e.toJSON(), t);
                                return f.pop(), r
                            } catch (e) {
                                return k(e)
                            }
                            if (M(e)) {
                                d--;
                                r = p({
                                    name: e.name,
                                    message: e.message
                                }, t);
                                return f.pop(), r
                            }
                            if (A(e)) {
                                for (var o = [], i = 0, a = e.length; i < a; i++) {
                                    if (n()) {
                                        o.push(P);
                                        break
                                    }
                                    o.push(p(e[i], t.concat("[]")))
                                }
                                return f.pop(), o
                            }
                            var u = {};
                            try {
                                for (var s in e)
                                    if (Object.prototype.hasOwnProperty.call(e, s))
                                        if (N(l, t.join(".")) && C(c, s)) u[s] = "[REDACTED]";
                                        else {
                                            if (n()) {
                                                u[s] = P;
                                                break
                                            }
                                            u[s] = p(L(e, s), t.concat(s))
                                        }
                            } catch (e) {}
                            return f.pop(), u
                        }
                        return p(e, [])
                    }

                    function D(e, t, n, r) {
                        var o;
                        "string" == typeof n && (void 0 === r ? r = null : null !== r && "string" != typeof r && (r = S(r)), "number" != typeof(o = t[n]) ? (e.push({
                            name: n,
                            variant: r
                        }), t[n] = e.length - 1) : e[o] = {
                            name: n,
                            variant: r
                        })
                    }

                    function R(e, t, n) {
                        if (i(t)) {
                            for (var r = 0; r < t.length; ++r) {
                                var o = t[r];
                                null !== o && "object" == typeof o && D(e, n, o.name, o.variant)
                            }
                            return e
                        }
                    }

                    function B(e) {
                        return v(g(e, Boolean), function(e) {
                            var t = e.name,
                                e = e.variant,
                                t = {
                                    featureFlag: t
                                };
                            return "string" == typeof e && (t.variant = e), t
                        })
                    }

                    function q(e, t, n) {
                        var r = t[n];
                        "number" == typeof r && (e[r] = null, delete t[n])
                    }
                    var U = {
                            add: D,
                            clear: q,
                            merge: R,
                            toEventApi: B
                        },
                        F = function(e) {
                            return !(!e || !e.stack && !e.stacktrace && !e["opera#sourceloc"] || "string" != typeof(e.stack || e.stacktrace || e["opera#sourceloc"]) || e.stack === e.name + ": " + e.message)
                        };

                    function H(e) {
                        switch (Object.prototype.toString.call(e)) {
                            case "[object Error]":
                            case "[object Exception]":
                            case "[object DOMException]":
                                return !0;
                            default:
                                return e instanceof Error
                        }
                    }
                    var V = H,
                        y = function(e, t, n, r) {
                            var o, i;
                            if (t) {
                                if (null === n) return G(e, t);
                                "object" == typeof n && (i = n), "string" == typeof n && ((o = {})[n] = r, i = o), i && (e[t] || (e[t] = {}), e[t] = d({}, e[t], i))
                            }
                        },
                        G = function(e, t, n) {
                            "string" == typeof t && (n ? e[t] && delete e[t][n] : delete e[t])
                        },
                        Z = {
                            add: y,
                            get: function(e, t, n) {
                                if ("string" == typeof t) return n ? e[t] ? e[t][n] : void 0 : e[t]
                            },
                            clear: G
                        },
                        $ = {};
                    ! function(e, t) {
                        "use strict";
                        "function" == typeof n && n.amd ? n("stack-generator", ["stackframe"], t) : "object" == typeof $ ? $ = t(w) : e.StackGenerator = t(e.StackFrame)
                    }(this, function(a) {
                        return {
                            backtrace: function(e) {
                                var t = [],
                                    n = 10;
                                "object" == typeof e && "number" == typeof e.maxStackSize && (n = e.maxStackSize);
                                for (var r = arguments.callee; r && t.length < n && r.arguments;) {
                                    for (var o = new Array(r.arguments.length), i = 0; i < o.length; ++i) o[i] = r.arguments[i];
                                    /function(?:\s+([\w$]+))+\s*\(/.test(r.toString()) ? t.push(new a({
                                        functionName: RegExp.$1 || void 0,
                                        args: o
                                    })) : t.push(new a({
                                        args: o
                                    }));
                                    try {
                                        r = r.caller
                                    } catch (e) {
                                        break
                                    }
                                }
                                return t
                            }
                        }
                    });
                    var K = function() {
                            function i(e, t, n, r, o) {
                                void 0 === n && (n = []), void 0 === r && (r = W()), this.apiKey = void 0, this.context = void 0, this.groupingHash = void 0, this.originalError = o, this._handledState = r, this.severity = this._handledState.severity, this.unhandled = this._handledState.unhandled, this.app = {}, this.device = {}, this.request = {}, this.breadcrumbs = [], this.threads = [], this._metadata = {}, this._features = [], this._featuresIndex = {}, this._user = {}, this._session = void 0, this.errors = [Q(e, t, i.__type, n)]
                            }
                            var e = i.prototype;
                            return e.addMetadata = function(e, t, n) {
                                return Z.add(this._metadata, e, t, n)
                            }, e.getMetadata = function(e, t) {
                                return Z.get(this._metadata, e, t)
                            }, e.clearMetadata = function(e, t) {
                                return Z.clear(this._metadata, e, t)
                            }, e.addFeatureFlag = function(e, t) {
                                U.add(this._features, this._featuresIndex, e, t = void 0 === t ? null : t)
                            }, e.addFeatureFlags = function(e) {
                                U.merge(this._features, e, this._featuresIndex)
                            }, e.getFeatureFlags = function() {
                                return U.toEventApi(this._features)
                            }, e.clearFeatureFlag = function(e) {
                                U.clear(this._features, this._featuresIndex, e)
                            }, e.clearFeatureFlags = function() {
                                this._features = [], this._featuresIndex = {}
                            }, e.getUser = function() {
                                return this._user
                            }, e.setUser = function(e, t, n) {
                                this._user = {
                                    id: e,
                                    email: t,
                                    name: n
                                }
                            }, e.toJSON = function() {
                                return {
                                    payloadVersion: "4",
                                    exceptions: v(this.errors, function(e) {
                                        return d({}, e, {
                                            message: e.errorMessage
                                        })
                                    }),
                                    severity: this.severity,
                                    unhandled: this._handledState.unhandled,
                                    severityReason: this._handledState.severityReason,
                                    app: this.app,
                                    device: this.device,
                                    request: this.request,
                                    breadcrumbs: this.breadcrumbs,
                                    context: this.context,
                                    groupingHash: this.groupingHash,
                                    metaData: this._metadata,
                                    user: this._user,
                                    session: this._session,
                                    featureFlags: this.getFeatureFlags()
                                }
                            }, i
                        }(),
                        X = function(e) {
                            e = {
                                file: e.fileName,
                                method: J(e.functionName),
                                lineNumber: e.lineNumber,
                                columnNumber: e.columnNumber,
                                code: void 0,
                                inProject: void 0
                            };
                            return -1 < e.lineNumber && !e.file && !e.method && (e.file = "global code"), e
                        },
                        J = function(e) {
                            return /^global code$/i.test(e) ? "global code" : e
                        },
                        W = function() {
                            return {
                                unhandled: !1,
                                severity: "warning",
                                severityReason: {
                                    type: "handledException"
                                }
                            }
                        },
                        z = function(e) {
                            return "string" == typeof e ? e : ""
                        };

                    function Q(e, t, n, r) {
                        return {
                            errorClass: z(e),
                            errorMessage: z(t),
                            type: n,
                            stacktrace: h(r, function(t, e) {
                                e = X(e);
                                try {
                                    return "{}" === JSON.stringify(e) ? t : t.concat(e)
                                } catch (e) {
                                    return t
                                }
                            }, [])
                        }
                    }

                    function Y(e) {
                        return e.cause ? [e].concat(Y(e.cause)) : [e]
                    }
                    K.getStacktrace = function(e, t, n) {
                        if (F(e)) return E.parse(e).slice(t);
                        try {
                            return g($.backtrace(), function(e) {
                                return -1 === (e.functionName || "").indexOf("StackGenerator$$")
                            }).slice(1 + n)
                        } catch (e) {
                            return []
                        }
                    }, K.create = function(t, e, n, r, o, i) {
                        void 0 === o && (o = 0);
                        e = te(t, e, r, i), i = e[0], e = e[1];
                        try {
                            var a = K.getStacktrace(i, 0 < e ? 1 + e + o : 0, 1 + o),
                                u = new K(i.name, i.message, a, n, t)
                        } catch (e) {
                            u = new K(i.name, i.message, [], n, t)
                        }
                        return "InvalidError" === i.name && u.addMetadata("" + r, "non-error parameter", ee(t)), i.cause && (t = Y(i).slice(1), i = v(t, function(e) {
                            var t = V(e) && F(e) ? E.parse(e) : [],
                                n = te(e, !0, "error cause")[0];
                            return "InvalidError" === n.name && u.addMetadata("error cause", ee(e)), Q(n.name, n.message, K.__type, t)
                        }), (t = u.errors).push.apply(t, i)), u
                    };
                    var ee = function(e) {
                            return null === e ? "null" : void 0 === e ? "undefined" : e
                        },
                        te = function(e, t, n, r) {
                            var o, i = 0,
                                a = function(e) {
                                    var t = "error cause" === n ? "was" : "received";
                                    r && r.warn(n + " " + t + ' a non-error: "' + e + '"');
                                    t = new Error(n + " " + t + ' a non-error. See "' + n + '" tab for more detail.');
                                    return t.name = "InvalidError", t
                                };
                            if (t) switch (typeof e) {
                                case "string":
                                case "number":
                                case "boolean":
                                    o = new Error(String(e)), i += 1;
                                    break;
                                case "function":
                                    o = a("function"), i += 2;
                                    break;
                                case "object":
                                    null !== e && V(e) ? o = e : null !== e && re(e) ? ((o = new Error(e.message || e.errorMessage)).name = e.name || e.errorClass, i += 1) : (o = a(null === e ? "null" : "unsupported object"), i += 2);
                                    break;
                                default:
                                    o = a("nothing"), i += 2
                            } else V(e) ? o = e : (o = a(typeof e), i += 2);
                            if (!F(o)) try {
                                throw o
                            } catch (e) {
                                F(e) && (o = e, i = 1)
                            }
                            return [o, i]
                        };
                    K.__type = "browserjs";
                    var ne, re = function(e) {
                            return !("string" != typeof e.name && "string" != typeof e.errorClass || "string" != typeof e.message && "string" != typeof e.errorMessage)
                        },
                        oe = K,
                        ie = function(e, t, n) {
                            var r = 0,
                                o = function() {
                                    if (r >= e.length) return n(null, !0);
                                    t(e[r], function(e, t) {
                                        return e ? n(e) : !1 === t ? n(null, !1) : (r++, void o())
                                    })
                                };
                            o()
                        },
                        ae = function(e, r, o, t) {
                            ie(e, function(e, n) {
                                if ("function" != typeof e) return n(null);
                                try {
                                    if (2 !== e.length) {
                                        var t = e(r);
                                        return t && "function" == typeof t.then ? t.then(function(e) {
                                            return setTimeout(function() {
                                                return n(null, e)
                                            })
                                        }, function(e) {
                                            setTimeout(function() {
                                                return o(e), n(null, !0)
                                            })
                                        }) : n(null, t)
                                    }
                                    e(r, function(e, t) {
                                        return e ? (o(e), n(null)) : void n(null, t)
                                    })
                                } catch (e) {
                                    o(e), n(null)
                                }
                            }, t)
                        },
                        ue = function(e, t, n, r) {
                            for (var o = !1, i = e.slice(); !o && i.length;) try {
                                o = !1 === i.pop()(t)
                            } catch (e) {
                                r.error("Error occurred in " + n + " callback, continuing anyway…"), r.error(e)
                            }
                            return o
                        },
                        se = function(e, t) {
                            e = "000000000" + e;
                            return e.substr(e.length - t)
                        },
                        ce = "object" == typeof window ? window : self,
                        le = 0;
                    for (ne in ce) Object.hasOwnProperty.call(ce, ne) && le++;
                    var y = navigator.mimeTypes ? navigator.mimeTypes.length : 0,
                        fe = se((y + navigator.userAgent.length).toString(36) + le.toString(36), 4),
                        de = function() {
                            return fe
                        },
                        pe = 0,
                        he = 4,
                        ge = 36,
                        ve = Math.pow(ge, he);

                    function ye() {
                        return se((Math.random() * ve << 0).toString(ge), he)
                    }

                    function me() {
                        return pe = pe < ve ? pe : 0, ++pe - 1
                    }

                    function be() {
                        return "c" + (new Date).getTime().toString(ge) + se(me().toString(ge), he) + de() + (ye() + ye())
                    }
                    be.fingerprint = de;
                    var we = be,
                        _e = function() {
                            function e() {
                                this.id = we(), this.startedAt = new Date, this._handled = 0, this._unhandled = 0, this._user = {}, this.app = {}, this.device = {}
                            }
                            var t = e.prototype;
                            return t.getUser = function() {
                                return this._user
                            }, t.setUser = function(e, t, n) {
                                this._user = {
                                    id: e,
                                    email: t,
                                    name: n
                                }
                            }, t.toJSON = function() {
                                return {
                                    id: this.id,
                                    startedAt: this.startedAt,
                                    events: {
                                        handled: this._handled,
                                        unhandled: this._unhandled
                                    }
                                }
                            }, t._track = function(e) {
                                this[e._handledState.unhandled ? "_unhandled" : "_handled"] += 1
                            }, e
                        }(),
                        Ee = U.add,
                        Se = U.clear,
                        Oe = U.merge,
                        je = function() {},
                        y = function() {
                            function u(e, t, n, r) {
                                var o = this;
                                void 0 === t && (t = c.schema), void 0 === n && (n = []), this._notifier = r, this._config = {}, this._schema = t, this._delivery = {
                                    sendSession: je,
                                    sendEvent: je
                                }, this._logger = {
                                    debug: je,
                                    info: je,
                                    warn: je,
                                    error: je
                                }, this._plugins = {}, this._breadcrumbs = [], this._session = null, this._metadata = {}, this._featuresIndex = {}, this._features = [], this._context = void 0, this._user = {}, this._cbs = {
                                    e: [],
                                    s: [],
                                    sp: [],
                                    b: []
                                }, this.Client = u, this.Event = oe, this.Breadcrumb = b, this.Session = _e, this._config = this._configure(e, n), v(n.concat(this._config.plugins), function(e) {
                                    e && o._loadPlugin(e)
                                }), this._depth = 1;
                                var i = this,
                                    a = this.notify;
                                this.notify = function() {
                                    return a.apply(i, arguments)
                                }
                            }
                            var e = u.prototype;
                            return e.addMetadata = function(e, t, n) {
                                return Z.add(this._metadata, e, t, n)
                            }, e.getMetadata = function(e, t) {
                                return Z.get(this._metadata, e, t)
                            }, e.clearMetadata = function(e, t) {
                                return Z.clear(this._metadata, e, t)
                            }, e.addFeatureFlag = function(e, t) {
                                Ee(this._features, this._featuresIndex, e, t = void 0 === t ? null : t)
                            }, e.addFeatureFlags = function(e) {
                                Oe(this._features, e, this._featuresIndex)
                            }, e.clearFeatureFlag = function(e) {
                                Se(this._features, this._featuresIndex, e)
                            }, e.clearFeatureFlags = function() {
                                this._features = [], this._featuresIndex = {}
                            }, e.getContext = function() {
                                return this._context
                            }, e.setContext = function(e) {
                                this._context = e
                            }, e._configure = function(r, e) {
                                var o = h(e, function(e, t) {
                                        return t && t.configSchema ? d({}, e, t.configSchema) : e
                                    }, this._schema),
                                    t = h(s(o), function(e, t) {
                                        var n = o[t].defaultValue(r[t]);
                                        return void 0 !== r[t] ? o[t].validate(r[t]) ? o[t].allowPartialObject ? e.config[t] = d(n, r[t]) : e.config[t] = r[t] : (e.errors[t] = o[t].message, e.config[t] = n) : e.config[t] = n, e
                                    }, {
                                        errors: {},
                                        config: {}
                                    }),
                                    e = t.errors,
                                    t = t.config;
                                if (o.apiKey) {
                                    if (!t.apiKey) throw new Error("No Bugsnag API Key set");
                                    /^[0-9a-f]{32}$/i.test(t.apiKey) || (e.apiKey = "should be a string of 32 hexadecimal characters")
                                }
                                return this._metadata = d({}, t.metadata), Oe(this._features, t.featureFlags, this._featuresIndex), this._user = d({}, t.user), this._context = t.context, t.logger && (this._logger = t.logger), t.onError && (this._cbs.e = this._cbs.e.concat(t.onError)), t.onBreadcrumb && (this._cbs.b = this._cbs.b.concat(t.onBreadcrumb)), t.onSession && (this._cbs.s = this._cbs.s.concat(t.onSession)), s(e).length && this._logger.warn(xe(e, r)), t
                            }, e.getUser = function() {
                                return this._user
                            }, e.setUser = function(e, t, n) {
                                this._user = {
                                    id: e,
                                    email: t,
                                    name: n
                                }
                            }, e._loadPlugin = function(e) {
                                var t = e.load(this);
                                return e.name && (this._plugins["~" + e.name + "~"] = t), this
                            }, e.getPlugin = function(e) {
                                return this._plugins["~" + e + "~"]
                            }, e._setDelivery = function(e) {
                                this._delivery = e(this)
                            }, e.startSession = function() {
                                var e = new _e;
                                return e.app.releaseStage = this._config.releaseStage, e.app.version = this._config.appVersion, e.app.type = this._config.appType, e._user = d({}, this._user), ue(this._cbs.s, e, "onSession", this._logger) ? (this._logger.debug("Session not started due to onSession callback"), this) : this._sessionDelegate.startSession(this, e)
                            }, e.addOnError = function(e, t) {
                                this._cbs.e[(t = void 0 === t ? !1 : t) ? "unshift" : "push"](e)
                            }, e.removeOnError = function(t) {
                                this._cbs.e = g(this._cbs.e, function(e) {
                                    return e !== t
                                })
                            }, e._addOnSessionPayload = function(e) {
                                this._cbs.sp.push(e)
                            }, e.addOnSession = function(e) {
                                this._cbs.s.push(e)
                            }, e.removeOnSession = function(t) {
                                this._cbs.s = g(this._cbs.s, function(e) {
                                    return e !== t
                                })
                            }, e.addOnBreadcrumb = function(e, t) {
                                this._cbs.b[(t = void 0 === t ? !1 : t) ? "unshift" : "push"](e)
                            }, e.removeOnBreadcrumb = function(t) {
                                this._cbs.b = g(this._cbs.b, function(e) {
                                    return e !== t
                                })
                            }, e.pauseSession = function() {
                                return this._sessionDelegate.pauseSession(this)
                            }, e.resumeSession = function() {
                                return this._sessionDelegate.resumeSession(this)
                            }, e.leaveBreadcrumb = function(e, t, n) {
                                e = "string" == typeof e ? e : "", n = "string" == typeof n && f(r, n) ? n : "manual", t = "object" == typeof t && null !== t ? t : {}, e && (n = new b(e, t, n), ue(this._cbs.b, n, "onBreadcrumb", this._logger) ? this._logger.debug("Breadcrumb not attached due to onBreadcrumb callback") : (this._breadcrumbs.push(n), this._breadcrumbs.length > this._config.maxBreadcrumbs && (this._breadcrumbs = this._breadcrumbs.slice(this._breadcrumbs.length - this._config.maxBreadcrumbs))))
                            }, e._isBreadcrumbTypeEnabled = function(e) {
                                var t = this._config.enabledBreadcrumbTypes;
                                return null === t || f(t, e)
                            }, e.notify = function(e, t, n) {
                                void 0 === n && (n = je);
                                e = oe.create(e, !0, void 0, "notify()", this._depth + 1, this._logger);
                                this._notify(e, t, n)
                            }, e._notify = function(n, e, r) {
                                var o = this;
                                if (void 0 === r && (r = je), n.app = d({}, n.app, {
                                        releaseStage: this._config.releaseStage,
                                        version: this._config.appVersion,
                                        type: this._config.appType
                                    }), n.context = n.context || this._context, n._metadata = d({}, n._metadata, this._metadata), n._user = d({}, n._user, this._user), n.breadcrumbs = this._breadcrumbs.slice(), Oe(n._features, this._features, n._featuresIndex), null !== this._config.enabledReleaseStages && !f(this._config.enabledReleaseStages, this._config.releaseStage)) return this._logger.warn("Event not sent due to releaseStage/enabledReleaseStages configuration"), r(null, n);
                                var i = n.severity,
                                    a = function(e) {
                                        o._logger.error("Error occurred in onError callback, continuing anyway…"), o._logger.error(e)
                                    },
                                    e = [].concat(this._cbs.e).concat(e);
                                ae(e, n, a, function(e, t) {
                                    return e && a(e), t ? (o._isBreadcrumbTypeEnabled("error") && u.prototype.leaveBreadcrumb.call(o, n.errors[0].errorClass, {
                                        errorClass: n.errors[0].errorClass,
                                        errorMessage: n.errors[0].errorMessage,
                                        severity: n.severity
                                    }, "error"), i !== n.severity && (n._handledState.severityReason = {
                                        type: "userCallbackSetSeverity"
                                    }), n.unhandled !== n._handledState.unhandled && (n._handledState.severityReason.unhandledOverridden = !0, n._handledState.unhandled = n.unhandled), o._session && (o._session._track(n), n._session = o._session), void o._delivery.sendEvent({
                                        apiKey: n.apiKey || o._config.apiKey,
                                        notifier: o._notifier,
                                        events: [n]
                                    }, function(e) {
                                        return r(e, n)
                                    })) : (o._logger.debug("Event not sent due to onError callback"), r(null, n))
                                })
                            }, u
                        }(),
                        xe = function(t, n) {
                            return new Error("Invalid configuration\n" + v(s(t), function(e) {
                                return "  - " + e + " " + t[e] + ", got " + Pe(n[e])
                            }).join("\n\n"))
                        },
                        Pe = function(e) {
                            switch (typeof e) {
                                case "string":
                                case "number":
                                case "object":
                                    return JSON.stringify(e);
                                default:
                                    return String(e)
                            }
                        },
                        Me = y,
                        ke = {},
                        Te = ["events.[].metaData", "events.[].breadcrumbs.[].metaData", "events.[].request"];
                    ke.event = function(e, t) {
                        var n = S(e, null, null, {
                            redactedPaths: Te,
                            redactedKeys: t
                        });
                        return 1e6 < n.length && (e.events[0]._metadata = {
                            notifier: "WARNING!\nSerialized payload was " + n.length / 1e6 + "MB (limit = 1MB)\nmetadata was removed"
                        }, n = S(e, null, null, {
                            redactedPaths: Te,
                            redactedKeys: t
                        })), n
                    }, ke.session = function(e, t) {
                        return S(e, null, null)
                    };
                    var Ne, Ce = {},
                        Ce = function(i, a) {
                            return void 0 === a && (a = window), {
                                sendEvent: function(e, t) {
                                    void 0 === t && (t = function() {});
                                    var n = Ae(i._config, "notify", "4", a),
                                        r = ke.event(e, i._config.redactedKeys),
                                        o = new a.XDomainRequest;
                                    o.onload = function() {
                                        t(null)
                                    }, o.onerror = function() {
                                        var e = new Error("Event failed to send");
                                        i._logger.error("Event failed to send…", e), 1e6 < r.length && i._logger.warn("Event oversized (" + (r.length / 1e6).toFixed(2) + " MB)"), t(e)
                                    }, o.open("POST", n), setTimeout(function() {
                                        try {
                                            o.send(r)
                                        } catch (e) {
                                            i._logger.error(e), t(e)
                                        }
                                    }, 0)
                                },
                                sendSession: function(e, t) {
                                    void 0 === t && (t = function() {});
                                    var n = Ae(i._config, "sessions", "1", a),
                                        r = new a.XDomainRequest;
                                    r.onload = function() {
                                        t(null)
                                    }, r.open("POST", n), setTimeout(function() {
                                        try {
                                            r.send(ke.session(e, i._config.redactedKeys))
                                        } catch (e) {
                                            i._logger.error(e), t(e)
                                        }
                                    }, 0)
                                }
                            }
                        },
                        Ae = function(e, t, n, r) {
                            var o = JSON.parse(JSON.stringify(new Date));
                            return Le(e.endpoints[t], r.location.protocol) + "?apiKey=" + encodeURIComponent(e.apiKey) + "&payloadVersion=" + n + "&sentAt=" + encodeURIComponent(o)
                        },
                        Le = Ce._matchPageProtocol = function(e, t) {
                            return "http:" === t ? e.replace(/^https:/, "http:") : e
                        },
                        Ie = function(i, a) {
                            return void 0 === a && (a = window), {
                                sendEvent: function(e, t) {
                                    void 0 === t && (t = function() {});
                                    try {
                                        var n = i._config.endpoints.notify,
                                            r = new a.XMLHttpRequest,
                                            o = ke.event(e, i._config.redactedKeys);
                                        r.onreadystatechange = function() {
                                            var e;
                                            r.readyState === a.XMLHttpRequest.DONE && ((0 === (e = r.status) || 400 <= e) && (i._logger.error("Event failed to send…"), 1e6 < o.length && i._logger.warn("Event oversized (" + (o.length / 1e6).toFixed(2) + " MB)")), t(null))
                                        }, r.open("POST", n), r.setRequestHeader("Content-Type", "application/json"), r.setRequestHeader("Bugsnag-Api-Key", e.apiKey || i._config.apiKey), r.setRequestHeader("Bugsnag-Payload-Version", "4"), r.setRequestHeader("Bugsnag-Sent-At", (new Date).toISOString()), r.send(o)
                                    } catch (e) {
                                        i._logger.error(e)
                                    }
                                },
                                sendSession: function(e, t) {
                                    void 0 === t && (t = function() {});
                                    try {
                                        var n = i._config.endpoints.sessions,
                                            r = new a.XMLHttpRequest;
                                        r.onreadystatechange = function() {
                                            r.readyState === a.XMLHttpRequest.DONE && t(null)
                                        }, r.open("POST", n), r.setRequestHeader("Content-Type", "application/json"), r.setRequestHeader("Bugsnag-Api-Key", i._config.apiKey), r.setRequestHeader("Bugsnag-Payload-Version", "1"), r.setRequestHeader("Bugsnag-Sent-At", (new Date).toISOString()), r.send(ke.session(e, i._config.redactedKeys))
                                    } catch (e) {
                                        i._logger.error(e)
                                    }
                                }
                            }
                        },
                        De = new Date,
                        Re = function() {
                            De = new Date
                        },
                        Be = {
                            name: "appDuration",
                            load: function(e) {
                                return e.addOnError(function(e) {
                                    var t = new Date;
                                    e.app.duration = t - De
                                }, !0), {
                                    reset: Re
                                }
                            }
                        },
                        qe = function(t) {
                            return void 0 === t && (t = window), {
                                load: function(e) {
                                    e.addOnError(function(e) {
                                        void 0 === e.context && (e.context = t.location.pathname)
                                    }, !0)
                                }
                            }
                        },
                        Ue = function(e, t) {
                            e = "000000000" + e;
                            return e.substr(e.length - t)
                        },
                        Fe = "object" == typeof window ? window : self,
                        He = 0;
                    for (Ne in Fe) Object.hasOwnProperty.call(Fe, Ne) && He++;
                    var y = navigator.mimeTypes ? navigator.mimeTypes.length : 0,
                        Ve = Ue((y + navigator.userAgent.length).toString(36) + He.toString(36), 4),
                        Ge = function() {
                            return Ve
                        },
                        Ze = 0,
                        $e = 4,
                        Ke = 36,
                        Xe = Math.pow(Ke, $e);

                    function Je() {
                        return Ue((Math.random() * Xe << 0).toString(Ke), $e)
                    }

                    function We() {
                        return Ze = Ze < Xe ? Ze : 0, ++Ze - 1
                    }

                    function ze() {
                        return "c" + (new Date).getTime().toString(Ke) + Ue(We().toString(Ke), $e) + Ge() + (Je() + Je())
                    }
                    ze.fingerprint = Ge;
                    var Qe = ze,
                        Ye = "bugsnag-anonymous-id",
                        et = function(e) {
                            try {
                                var t = e.localStorage,
                                    n = t.getItem(Ye);
                                return n && /^c[a-z0-9]{20,32}$/.test(n) ? n : (n = Qe(), t.setItem(Ye, n), n)
                            } catch (e) {}
                        },
                        tt = function(e, r) {
                            return void 0 === e && (e = navigator), void 0 === r && (r = window), {
                                load: function(t) {
                                    var n = {
                                        locale: e.browserLanguage || e.systemLanguage || e.userLanguage || e.language,
                                        userAgent: e.userAgent
                                    };
                                    r && r.screen && r.screen.orientation && r.screen.orientation.type ? n.orientation = r.screen.orientation.type : r && r.document && (n.orientation = r.document.documentElement.clientWidth > r.document.documentElement.clientHeight ? "landscape" : "portrait"), t._config.generateAnonymousId && (n.id = et(r)), t.addOnSession(function(e) {
                                        e.device = d({}, e.device, n), t._config.collectUserIp || nt(e)
                                    }), t.addOnError(function(e) {
                                        e.device = d({}, e.device, n, {
                                            time: new Date
                                        }), t._config.collectUserIp || nt(e)
                                    }, !0)
                                },
                                configSchema: {
                                    generateAnonymousId: {
                                        validate: function(e) {
                                            return !0 === e || !1 === e
                                        },
                                        defaultValue: function() {
                                            return !0
                                        },
                                        message: "should be true|false"
                                    }
                                }
                            }
                        },
                        nt = function(e) {
                            var t = e.getUser();
                            t && t.id || e.setUser(e.device.id)
                        },
                        rt = function(t) {
                            return void 0 === t && (t = window), {
                                load: function(e) {
                                    e.addOnError(function(e) {
                                        e.request && e.request.url || (e.request = d({}, e.request, {
                                            url: t.location.href
                                        }))
                                    }, !0)
                                }
                            }
                        },
                        ot = {
                            load: function(e) {
                                e._sessionDelegate = it
                            }
                        },
                        it = {
                            startSession: function(e, t) {
                                return e._session = t, (e._pausedSession = null) === e._config.enabledReleaseStages || f(e._config.enabledReleaseStages, e._config.releaseStage) ? e._delivery.sendSession({
                                    notifier: e._notifier,
                                    device: t.device,
                                    app: t.app,
                                    sessions: [{
                                        id: t.id,
                                        startedAt: t.startedAt,
                                        user: t._user
                                    }]
                                }) : e._logger.warn("Session not sent due to releaseStage/enabledReleaseStages configuration"), e
                            },
                            resumeSession: function(e) {
                                return e._session ? e : e._pausedSession ? (e._session = e._pausedSession, e._pausedSession = null, e) : e.startSession()
                            },
                            pauseSession: function(e) {
                                e._pausedSession = e._session, e._session = null
                            }
                        },
                        at = {
                            load: function(e) {
                                e._config.collectUserIp || e.addOnError(function(e) {
                                    e._user && void 0 === e._user.id && delete e._user.id, e._user = d({
                                        id: "[REDACTED]"
                                    }, e._user), e.request = d({
                                        clientIp: "[REDACTED]"
                                    }, e.request)
                                })
                            },
                            configSchema: {
                                collectUserIp: {
                                    defaultValue: function() {
                                        return !0
                                    },
                                    message: "should be true|false",
                                    validate: function(e) {
                                        return !0 === e || !1 === e
                                    }
                                }
                            }
                        },
                        ut = {
                            load: function(i) {
                                !/^(local-)?dev(elopment)?$/.test(i._config.releaseStage) && i._isBreadcrumbTypeEnabled("log") && v(st, function(r) {
                                    var o = console[r];
                                    console[r] = function() {
                                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                        i.leaveBreadcrumb("Console output", h(t, function(e, t, n) {
                                            var r = "[Unknown value]";
                                            try {
                                                r = String(t)
                                            } catch (e) {}
                                            if ("[object Object]" === r) try {
                                                r = JSON.stringify(t)
                                            } catch (e) {}
                                            return e["[" + n + "]"] = r, e
                                        }, {
                                            severity: 0 === r.indexOf("group") ? "log" : r
                                        }), "log"), o.apply(console, t)
                                    }, console[r]._restore = function() {
                                        console[r] = o
                                    }
                                })
                            }
                        },
                        st = g(["log", "debug", "info", "warn", "error"], function(e) {
                            return "undefined" != typeof console && "function" == typeof console[e]
                        }),
                        ct = 200,
                        lt = 5e5,
                        ft = function(d, p) {
                            return void 0 === d && (d = document), void 0 === p && (p = window), {
                                load: function(e) {
                                    var r, n, o, i, t, a, u, s, c, l;

                                    function f(o, i, a) {
                                        return void 0 === a && (a = !1),
                                            function() {
                                                var e = [].slice.call(arguments);
                                                try {
                                                    var t, n = i(e),
                                                        r = n.get();
                                                    if (a && o.apply(this, e), "function" != typeof r) return o.apply(this, e);
                                                    r.__trace__ || (t = s(), r.__trace__ = function() {
                                                        u(t), l(function() {
                                                            u(null)
                                                        }, 0);
                                                        var e = r.apply(this, arguments);
                                                        return u(null), e
                                                    }, r.__trace__.__trace__ = r.__trace__), n.replace(r.__trace__)
                                                } catch (e) {}
                                                if (o.apply) return o.apply(this, e);
                                                switch (e.length) {
                                                    case 1:
                                                        return o(e[0]);
                                                    case 2:
                                                        return o(e[0], e[1]);
                                                    default:
                                                        return o()
                                                }
                                            }
                                    }
                                    e._config.trackInlineScripts && (r = p.location.href, i = "", n = !!d.attachEvent ? "complete" === d.readyState : "loading" !== d.readyState, i = (o = function() {
                                        return d.documentElement.outerHTML
                                    })(), t = d.onreadystatechange, d.onreadystatechange = function() {
                                        "interactive" === d.readyState && (i = o(), n = !0);
                                        try {
                                            t.apply(this, arguments)
                                        } catch (e) {}
                                    }, a = null, u = function(e) {
                                        a = e
                                    }, s = function() {
                                        var e, t = d.currentScript || a;
                                        return t = !t && !n ? (e = d.scripts || d.getElementsByTagName("script"))[e.length - 1] : t
                                    }, c = function(e) {
                                        n && i || (i = o());
                                        var t = ["\x3c!-- DOC START --\x3e"].concat(i.split("\n")),
                                            e = e - 1,
                                            r = Math.max(e - 3, 0),
                                            e = Math.min(e + 3, t.length);
                                        return h(t.slice(r, e), function(e, t, n) {
                                            return e[r + 1 + n] = t.length <= ct ? t : t.substr(0, ct), e
                                        }, {})
                                    }, e.addOnError(function(e) {
                                        e.errors[0].stacktrace = g(e.errors[0].stacktrace, function(e) {
                                            return !/__trace__$/.test(e.method)
                                        });
                                        var t, n = e.errors[0].stacktrace[0];
                                        n && n.file && n.file.replace(/#.*$/, "") !== r.replace(/#.*$/, "") || (t = s()) && (t = t.innerHTML, e.addMetadata("script", "content", t.length <= lt ? t : t.substr(0, lt)), n && n.lineNumber && (n.code = c(n.lineNumber)))
                                    }, !0), l = v(["setTimeout", "setInterval", "setImmediate", "requestAnimationFrame"], function(e) {
                                        return dt(p, e, function(e) {
                                            return f(e, function(t) {
                                                return {
                                                    get: function() {
                                                        return t[0]
                                                    },
                                                    replace: function(e) {
                                                        t[0] = e
                                                    }
                                                }
                                            })
                                        })
                                    })[0], v(["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], function(e) {
                                        p[e] && p[e].prototype && Object.prototype.hasOwnProperty.call(p[e].prototype, "addEventListener") && (dt(p[e].prototype, "addEventListener", function(e) {
                                            return f(e, pt)
                                        }), dt(p[e].prototype, "removeEventListener", function(e) {
                                            return f(e, pt, !0)
                                        }))
                                    }))
                                },
                                configSchema: {
                                    trackInlineScripts: {
                                        validate: function(e) {
                                            return !0 === e || !1 === e
                                        },
                                        defaultValue: function() {
                                            return !0
                                        },
                                        message: "should be true|false"
                                    }
                                }
                            }
                        };

                    function dt(e, t, n) {
                        var r = e[t];
                        if (!r) return r;
                        n = n(r);
                        return e[t] = n, r
                    }

                    function pt(t) {
                        var n = !!t[1] && "function" == typeof t[1].handleEvent;
                        return {
                            get: function() {
                                return n ? t[1].handleEvent : t[1]
                            },
                            replace: function(e) {
                                n ? t[1].handleEvent = e : t[1] = e
                            }
                        }
                    }
                    var ht = function(o) {
                            return void 0 === o && (o = window), {
                                load: function(r) {
                                    "addEventListener" in o && r._isBreadcrumbTypeEnabled("user") && o.addEventListener("click", function(e) {
                                        var t, n;
                                        try {
                                            t = gt(e.target), n = vt(e.target, o)
                                        } catch (e) {
                                            n = t = "[hidden]", r._logger.error("Cross domain error when tracking click event. See docs: https://tinyurl.com/yy3rn63z")
                                        }
                                        r.leaveBreadcrumb("UI click", {
                                            targetText: t,
                                            targetSelector: n
                                        }, "user")
                                    }, !0)
                                }
                            }
                        },
                        gt = function(e) {
                            var t = e.textContent || e.innerText || "";
                            return yt(t = (t = !(t || "submit" !== e.type && "button" !== e.type) ? e.value : t).replace(/^\s+|\s+$/g, ""), 140)
                        };

                    function vt(e, t) {
                        var n, r = [e.tagName];
                        if (e.id && r.push("#" + e.id), e.className && e.className.length && r.push("." + e.className.split(" ").join(".")), !t.document.querySelectorAll || !Array.prototype.indexOf) return r.join("");
                        try {
                            if (1 === t.document.querySelectorAll(r.join("")).length) return r.join("")
                        } catch (e) {
                            return r.join("")
                        }
                        return 1 < e.parentNode.childNodes.length && (n = Array.prototype.indexOf.call(e.parentNode.childNodes, e) + 1, r.push(":nth-child(" + n + ")")), 1 !== t.document.querySelectorAll(r.join("")).length && e.parentNode ? vt(e.parentNode, t) + " > " + r.join("") : r.join("")
                    }

                    function yt(e, t) {
                        var n = "(...)";
                        return e && e.length <= t ? e : e.slice(0, t - n.length) + n
                    }
                    var mt = {},
                        mt = function(n) {
                            return void 0 === n && (n = window), {
                                load: function(t) {
                                    var e;
                                    "addEventListener" in n && t._isBreadcrumbTypeEnabled("navigation") && (e = function(e) {
                                        return function() {
                                            return t.leaveBreadcrumb(e, {}, "navigation")
                                        }
                                    }, n.addEventListener("pagehide", e("Page hidden"), !0), n.addEventListener("pageshow", e("Page shown"), !0), n.addEventListener("load", e("Page loaded"), !0), n.document.addEventListener("DOMContentLoaded", e("DOMContentLoaded"), !0), n.addEventListener("load", function() {
                                        return n.addEventListener("popstate", e("Navigated back"), !0)
                                    }), n.addEventListener("hashchange", function(e) {
                                        e = e.oldURL ? {
                                            from: bt(e.oldURL, n),
                                            to: bt(e.newURL, n),
                                            state: Et(n)
                                        } : {
                                            to: bt(n.location.href, n)
                                        };
                                        t.leaveBreadcrumb("Hash changed", e, "navigation")
                                    }, !0), n.history.replaceState && _t(t, n.history, "replaceState", n), n.history.pushState && _t(t, n.history, "pushState", n))
                                }
                            }
                        },
                        bt = function(e, t) {
                            t = t.document.createElement("A");
                            return t.href = e, "" + t.pathname + t.search + t.hash
                        },
                        wt = function(e, t, n, r) {
                            var o = bt(e.location.href, e);
                            return {
                                title: n,
                                state: t,
                                prevState: Et(e),
                                to: r || o,
                                from: o
                            }
                        },
                        _t = function(r, o, i, a) {
                            var u = o[i];
                            o[i] = function(e, t, n) {
                                r.leaveBreadcrumb("History " + i, wt(a, e, t, n), "navigation"), "function" == typeof r.resetEventCount && r.resetEventCount(), r._config.autoTrackSessions && r.startSession(), u.apply(o, [e, t].concat(void 0 !== n ? n : []))
                            }
                        },
                        Et = function(e) {
                            try {
                                return e.history.state
                            } catch (e) {}
                        },
                        St = "request",
                        Ot = function(n, l) {
                            void 0 === n && (n = []), void 0 === l && (l = window);
                            return {
                                load: function(r) {
                                    var o, a, u;

                                    function e() {
                                        var i;
                                        "addEventListener" in l.XMLHttpRequest.prototype && (i = l.XMLHttpRequest.prototype.open, l.XMLHttpRequest.prototype.open = function(e, t) {
                                            var n = this,
                                                r = function() {
                                                    return c(e, t)
                                                },
                                                o = function() {
                                                    return s(e, t, n.status)
                                                };
                                            1 || (this.removeEventListener("load", o), this.removeEventListener("error", r)), this.addEventListener("load", o), this.addEventListener("error", r), i.apply(this, arguments)
                                        })
                                    }

                                    function s(e, t, n) {
                                        void 0 !== t ? "string" == typeof t && f(o, t.replace(/\?.*$/, "")) || (t = {
                                            status: n,
                                            request: e + " " + t
                                        }, 400 <= n ? r.leaveBreadcrumb("XMLHttpRequest failed", t, St) : r.leaveBreadcrumb("XMLHttpRequest succeeded", t, St)) : r._logger.warn("The request URL is no longer present on this XMLHttpRequest. A breadcrumb cannot be left for this request.")
                                    }

                                    function c(e, t) {
                                        void 0 !== t ? "string" == typeof t && f(o, t.replace(/\?.*$/, "")) || r.leaveBreadcrumb("XMLHttpRequest error", {
                                            request: e + " " + t
                                        }, St) : r._logger.warn("The request URL is no longer present on this XMLHttpRequest. A breadcrumb cannot be left for this request.")
                                    }

                                    function t() {
                                        var i;
                                        "fetch" in l && !l.fetch.polyfill && (i = l.fetch, l.fetch = function() {
                                            var r, e = arguments,
                                                t = arguments[0],
                                                n = arguments[1],
                                                o = null;
                                            return t && "object" == typeof t ? (o = t.url, n && "method" in n ? r = n.method : t && "method" in t && (r = t.method)) : (o = t, n && "method" in n && (r = n.method)), void 0 === r && (r = "GET"), new Promise(function(t, n) {
                                                i.apply(void 0, e).then(function(e) {
                                                    a(e, r, o), t(e)
                                                }).catch(function(e) {
                                                    u(r, o), n(e)
                                                })
                                            })
                                        })
                                    }
                                    r._isBreadcrumbTypeEnabled("request") && (o = [r._config.endpoints.notify, r._config.endpoints.sessions].concat(n), e(), t(), a = function(e, t, n) {
                                        n = {
                                            status: e.status,
                                            request: t + " " + n
                                        };
                                        400 <= e.status ? r.leaveBreadcrumb("fetch() failed", n, St) : r.leaveBreadcrumb("fetch() succeeded", n, St)
                                    }, u = function(e, t) {
                                        r.leaveBreadcrumb("fetch() error", {
                                            request: e + " " + t
                                        }, St)
                                    })
                                }
                            }
                        },
                        jt = {
                            load: function(t) {
                                var n = 0;
                                t.addOnError(function(e) {
                                    return n >= t._config.maxEvents ? (t._logger.warn("Cancelling event send due to maxEvents per session limit of " + t._config.maxEvents + " being reached"), !1) : void n++
                                }), t.resetEventCount = function() {
                                    n = 0
                                }
                            },
                            configSchema: {
                                maxEvents: {
                                    defaultValue: function() {
                                        return 10
                                    },
                                    message: "should be a positive integer ≤100",
                                    validate: function(e) {
                                        return t(1, 100)(e)
                                    }
                                }
                            }
                        },
                        xt = {},
                        Pt = (xt = {
                            load: function(e) {
                                e.addOnError(function(e) {
                                    e = h(e.errors, function(e, t) {
                                        return e.concat(t.stacktrace)
                                    }, []);
                                    v(e, function(e) {
                                        e.file = Pt(e.file)
                                    })
                                })
                            }
                        })._strip = function(e) {
                            return "string" == typeof e ? e.replace(/\?.*$/, "").replace(/#.*$/, "") : e
                        },
                        Mt = function(t, f) {
                            return void 0 === t && (t = window), void 0 === f && (f = "window onerror"), {
                                load: function(c) {
                                    var l;

                                    function e(e, t, n, r, o) {
                                        var i, a, u, s;
                                        0 === n && /Script error\.?/.test(e) ? c._logger.warn("Ignoring cross-domain or eval script error. See docs: https://tinyurl.com/yy3rn63z") : (i = {
                                            severity: "error",
                                            unhandled: !0,
                                            severityReason: {
                                                type: "unhandledException"
                                            }
                                        }, o ? (s = c.Event.create(o, !0, i, f, 1), kt(s.errors[0].stacktrace, t, n, r)) : "object" != typeof e || null === e || t && "string" == typeof t || n || r || o ? (s = c.Event.create(e, !0, i, f, 1), kt(s.errors[0].stacktrace, t, n, r)) : (a = e.type ? "Event: " + e.type : "Error", u = e.message || e.detail || "", (s = c.Event.create({
                                            name: a,
                                            message: u
                                        }, !0, i, f, 1)).originalError = e, s.addMetadata(f, {
                                            event: e,
                                            extraParameters: t
                                        })), c._notify(s)), "function" == typeof l && l.apply(this, arguments)
                                    }
                                    c._config.autoDetectErrors && c._config.enabledErrorTypes.unhandledExceptions && (l = t.onerror, t.onerror = e)
                                }
                            }
                        },
                        kt = function(e, t, n, r) {
                            e[0] || e.push({});
                            e = e[0];
                            e.file || "string" != typeof t || (e.file = t), !e.lineNumber && Tt(n) && (e.lineNumber = n), e.columnNumber || (Tt(r) ? e.columnNumber = r : window.event && Tt(window.event.errorCharacter) && (e.columnNumber = window.event.errorCharacter))
                        },
                        Tt = function(e) {
                            return "number" == typeof e && "NaN" !== String.call(e)
                        },
                        Nt = function(e) {
                            return void 0 === e && (e = window), {
                                load: function(r) {
                                    var n;
                                    r._config.autoDetectErrors && r._config.enabledErrorTypes.unhandledRejections && (n = function(e) {
                                        var t = e.reason,
                                            n = !1;
                                        try {
                                            e.detail && e.detail.reason && (t = e.detail.reason, n = !0)
                                        } catch (e) {}
                                        e = r.Event.create(t, !1, {
                                            severity: "error",
                                            unhandled: !0,
                                            severityReason: {
                                                type: "unhandledPromiseRejection"
                                            }
                                        }, "unhandledrejection handler", 1, r._logger);
                                        n && v(e.errors[0].stacktrace, Ct(t)), r._notify(e, function(e) {
                                            var t;
                                            V(e.originalError) && !e.originalError.stack && e.addMetadata("unhandledRejection handler", ((t = {})[Object.prototype.toString.call(e.originalError)] = {
                                                name: e.originalError.name,
                                                message: e.originalError.message,
                                                code: e.originalError.code
                                            }, t))
                                        })
                                    }, "addEventListener" in e ? e.addEventListener("unhandledrejection", n) : e.onunhandledrejection = function(e, t) {
                                        n({
                                            detail: {
                                                reason: e,
                                                promise: t
                                            }
                                        })
                                    }, 0)
                                }
                            }
                        },
                        Ct = function(t) {
                            return function(e) {
                                e.file !== t.toString() && e.method && (e.method = e.method.replace(/^\s+/, ""))
                            }
                        },
                        y = {},
                        At = "Bugsnag JavaScript",
                        Lt = "7.19.0",
                        It = "https://github.com/bugsnag/bugsnag-js",
                        Dt = d({}, c.schema, e),
                        Rt = {
                            _client: null,
                            createClient: function(e) {
                                e = (e = "string" == typeof e ? {
                                    apiKey: e
                                } : e) || {};
                                var t = [Be, tt(), qe(), rt(), jt, ot, at, xt, Mt(), Nt(), mt(), ht(), Ot(), ut, ft()],
                                    t = new Me(e, Dt, t, {
                                        name: At,
                                        version: Lt,
                                        url: It
                                    });
                                return t._setDelivery(window.XDomainRequest ? Ce : Ie), t._logger.debug("Loaded!"), t.leaveBreadcrumb("Bugsnag loaded", {}, "state"), t._config.autoTrackSessions ? t.startSession() : t
                            },
                            start: function(e) {
                                return Rt._client ? Rt._client._logger.warn("Bugsnag.start() was called more than once. Ignoring.") : Rt._client = Rt.createClient(e), Rt._client
                            },
                            isStarted: function() {
                                return null != Rt._client
                            }
                        };
                    return v(["resetEventCount"].concat(s(Me.prototype)), function(t) {
                        /^_/.test(t) || (Rt[t] = function() {
                            if (!Rt._client) return console.log("Bugsnag." + t + "() was called before Bugsnag.start()");
                            Rt._client._depth += 1;
                            var e = Rt._client[t].apply(Rt._client, arguments);
                            return --Rt._client._depth, e
                        })
                    }), (y = Rt).Client = Me, y.Event = oe, y.Session = _e, y.Breadcrumb = b, y.default = Rt, y
                }, e.exports = t()
            },
            5780: function(e, t, n) {
                e.exports = n(8279)
            },
            1481: function(e, t) {
                "use strict";

                function n(e) {
                    return "https://".concat(new URL(e).hostname)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.extractDomain = t.PRODUCTION_CANADA_ENDPOINT = t.PRODUCE_ENDPOINT = t.PRODUCE_BATCH_ENDPOINT = t.PRODUCTION_DOMAIN = t.DEVELOPMENT_DOMAIN = void 0, t.DEVELOPMENT_DOMAIN = "http://localhost:8082", t.PRODUCTION_DOMAIN = "https://monorail-edge.shopifysvc.com", t.PRODUCE_BATCH_ENDPOINT = "/unstable/produce_batch", t.PRODUCE_ENDPOINT = "/v1/produce", t.PRODUCTION_CANADA_ENDPOINT = "https://monorail-edge-ca.shopifycloud.com/v1/produce", t.extractDomain = n
            },
            4324: function(e, t) {
                "use strict";

                function n(e) {
                    return void 0 !== e.schemaId
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isCompositeMonorailEvent = void 0, t.isCompositeMonorailEvent = n
            },
            1036: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.toUnderscoreCase = t.convertAllEventsToUnderscoreCase = t.convertStringToUnderscoreCase = void 0;
                var r = n(9312);

                function o(n, e) {
                    return void 0 === e && (e = !0), n && Object.keys(n).length && e ? Object.keys(n).map(function(e) {
                        var t = {};
                        return t[i(e)] = n[e], t
                    }).reduce(function(e, t) {
                        return r.__assign(r.__assign({}, e), t)
                    }) : n
                }

                function i(e) {
                    return e.split(/(?=[A-Z])/).join("_").toLowerCase()
                }

                function a(e) {
                    return e.events.map(function(e) {
                        var t = !0,
                            n = !0;
                        return e && e.options && Object.prototype.hasOwnProperty.call(e.options, "convertEventCase") && (t = Boolean(e.options.convertEventCase)), e && e.options && Object.prototype.hasOwnProperty.call(e.options, "convertMetaDataCase") && (n = Boolean(e.options.convertMetaDataCase)), {
                            schema_id: e.schemaId,
                            payload: o(e.payload, t),
                            metadata: o(e.metadata, n)
                        }
                    })
                }
                t.toUnderscoreCase = o, t.convertStringToUnderscoreCase = i, t.convertAllEventsToUnderscoreCase = a
            },
            8679: function(e, t, n) {
                "use strict";

                function r() {
                    return "object" == typeof crypto && "function" == typeof crypto.randomUUID ? crypto.randomUUID() : n(1719).v4()
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.v4 = void 0, t.v4 = r
            },
            1833: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ProducerMiddleware = void 0;
                var r = n(4324),
                    n = (o.prototype.do = function(e, t) {
                        return (0, r.isCompositeMonorailEvent)(e) ? this.producer.produce(e) : this.producer.produceBatch(e)
                    }, o);

                function o(e) {
                    this.producer = e
                }
                t.ProducerMiddleware = n
            },
            9264: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.RetryMiddleware = void 0;
                var s = n(9312),
                    c = n(6624),
                    n = (r.prototype.do = function(a, u) {
                        return s.__awaiter(this, void 0, void 0, function() {
                            var t, n, r, o, i;
                            return s.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        t = 0, e.label = 1;
                                    case 1:
                                        if (!(t < this.maxRetries)) return [3, 7];
                                        r = void 0, e.label = 2;
                                    case 2:
                                        return e.trys.push([2, 4, , 6]), [4, u(a)];
                                    case 3:
                                        return r = e.sent(), [3, 6];
                                    case 4:
                                        if (o = e.sent(), n = n || new Error, n = new Error("".concat(n.message, " Retry count:").concat(t + 1, " Error msg:").concat(o.message, "\n")), o instanceof c.MonorailUnableToProduceError && (i = o.response.status) && 400 <= i && i < 500) throw o;
                                        return [4, this.delay(this.delayMs * Math.pow(2, t))];
                                    case 5:
                                        return e.sent(), t++, [3, 1];
                                    case 6:
                                        return [2, r];
                                    case 7:
                                        throw n ? n.message = "Retry count of ".concat(this.maxRetries, " exceeded. Failed with error: \n").concat(n.message, " Aborting request for ").concat(JSON.stringify(a)) : n = new Error, new c.MonorailRetriesExceededError(n)
                                }
                            })
                        })
                    }, r.prototype.delay = function(t) {
                        return new Promise(function(e) {
                            return setTimeout(e, t)
                        })
                    }, r);

                function r(e, t) {
                    void 0 === t && (t = 150), this.maxRetries = e = void 0 === e ? 3 : e, this.delayMs = t
                }
                t.RetryMiddleware = n
            },
            2872: function(e, t, n) {
                "use strict";
                t.xp = t.VN = t.nQ = t.hl = void 0;
                var r = n(4162);
                Object.defineProperty(t, "hl", {
                    enumerable: !0,
                    get: function() {
                        return r.Monorail
                    }
                });
                var o = n(6624);
                Object.defineProperty(t, "nQ", {
                    enumerable: !0,
                    get: function() {
                        return o.MonorailRequestError
                    }
                }), Object.defineProperty(t, "VN", {
                    enumerable: !0,
                    get: function() {
                        return o.MonorailRetriesExceededError
                    }
                });
                var i = n(9264);
                Object.defineProperty(t, "xp", {
                    enumerable: !0,
                    get: function() {
                        return i.RetryMiddleware
                    }
                })
            },
            7817: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.HttpProducer = void 0;
                var u = n(9312),
                    r = n(1481),
                    s = n(1036),
                    o = n(8679),
                    c = n(6624),
                    n = (l.withEndpoint = function(e) {
                        return new l(r.extractDomain(e))
                    }, l.getHeadersFromMetadata = function(e) {
                        var t = {
                            "Content-Type": "application/json; charset=utf-8",
                            "X-Monorail-Edge-Event-Created-At-Ms": (e && e.eventCreatedAtMs || Date.now()).toString(),
                            "X-Monorail-Edge-Event-Sent-At-Ms": Date.now().toString(),
                            "X-Monorail-Edge-Client-Message-Id": (e && e.clientMessageId || (0, o.v4)()).toString()
                        };
                        return e && e.userAgent && (t["User-Agent"] = e.userAgent), t
                    }, l.prototype.produceBatch = function(a) {
                        return u.__awaiter(this, void 0, void 0, function() {
                            var t, n, r, o, i;
                            return u.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        t = {
                                            events: (0, s.convertAllEventsToUnderscoreCase)(a),
                                            metadata: (0, s.toUnderscoreCase)(a.metadata)
                                        }, e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, fetch(this.produceBatchEndpoint(), {
                                            method: "post",
                                            headers: l.getHeadersFromMetadata(a.metadata),
                                            body: JSON.stringify(t),
                                            keepalive: this.keepalive
                                        })];
                                    case 2:
                                        return n = e.sent(), [3, 4];
                                    case 3:
                                        throw r = e.sent(), new c.MonorailRequestError(r);
                                    case 4:
                                        return 207 !== n.status ? [3, 6] : [4, n.json()];
                                    case 5:
                                        throw r = e.sent(), new c.MonorailBatchProduceError(r);
                                    case 6:
                                        return n.ok ? [3, 8] : (o = c.MonorailUnableToProduceError.bind, i = {
                                            status: n.status
                                        }, [4, n.text()]);
                                    case 7:
                                        throw new(o.apply(c.MonorailUnableToProduceError, [void 0, (i.message = e.sent(), i)]));
                                    case 8:
                                        return [2, {
                                            status: n.status
                                        }]
                                }
                            })
                        })
                    }, l.prototype.produce = function(a) {
                        return u.__awaiter(this, void 0, void 0, function() {
                            var t, n, r, o, i;
                            return u.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        r = !0, a && a.options && Object.prototype.hasOwnProperty.call(a.options, "convertEventCase") && (r = Boolean(a.options.convertEventCase)), t = {
                                            schema_id: a.schemaId,
                                            payload: (0, s.toUnderscoreCase)(a.payload, r)
                                        }, e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, fetch(this.produceEndpoint(), {
                                            method: "post",
                                            headers: l.getHeadersFromMetadata(a.metadata),
                                            body: JSON.stringify(t),
                                            keepalive: this.keepalive
                                        })];
                                    case 2:
                                        return n = e.sent(), [3, 4];
                                    case 3:
                                        throw r = e.sent(), new c.MonorailRequestError(r);
                                    case 4:
                                        if (!n) throw new c.MonorailUnableToProduceError({
                                            message: "No response from edge"
                                        });
                                        return n.ok ? [3, 6] : (o = c.MonorailUnableToProduceError.bind, i = {
                                            status: n.status
                                        }, [4, n.text()]);
                                    case 5:
                                        throw new(o.apply(c.MonorailUnableToProduceError, [void 0, (i.message = e.sent(), i)]));
                                    case 6:
                                        return [2, {
                                            status: n.status
                                        }]
                                }
                            })
                        })
                    }, l.prototype.produceBatchEndpoint = function() {
                        return this.edgeDomain + r.PRODUCE_BATCH_ENDPOINT
                    }, l.prototype.produceEndpoint = function() {
                        return this.edgeDomain + r.PRODUCE_ENDPOINT
                    }, l);

                function l(e, t) {
                    void 0 === e && (e = r.DEVELOPMENT_DOMAIN), void 0 === t && (t = !1), this.edgeDomain = e, this.keepalive = t
                }
                t.HttpProducer = n
            },
            6058: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.LogProducer = void 0;
                var n = (r.printWelcomeMessage = function(e) {
                    console.log("%c👋 from Monorail%c\n\n" + "We've noticed that you're".concat(e ? "" : " not", " ") + "running in debug mode. " + "As such, we will ".concat(e ? "produce" : "not produce", " ") + "Monorail events to the console. " + "\n\nIf you want Monorail events to ".concat(e ? "stop" : "start", " ") + "appearing here, %cset debugMode=".concat((!e).toString(), "%c, ") + "for the Monorail Log Producer in your code.", "font-size: large;", "font-size: normal;", "font-weight: bold;", "font-weight: normal;")
                }, r.prototype.produce = function(t) {
                    return this.sendToConsole && console.log("Monorail event produced", t), new Promise(function(e) {
                        e(t)
                    })
                }, r.prototype.produceBatch = function(t) {
                    return this.sendToConsole && console.log("Monorail Batch event produced", t), new Promise(function(e) {
                        e(t)
                    })
                }, r);

                function r(e) {
                    (this.sendToConsole = e) && r.printWelcomeMessage(e)
                }
                t.LogProducer = n
            },
            4162: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Monorail = void 0;
                var r = n(9312),
                    o = n(1481),
                    i = n(1833),
                    a = n(8679),
                    u = n(7817),
                    s = n(6058),
                    n = (c.createLogProducer = function(e) {
                        return new c(new s.LogProducer(e.debugMode), e.middleware || [])
                    }, c.createHttpProducerWithEndpoint = function(e, t) {
                        return void 0 === t && (t = []), new c(u.HttpProducer.withEndpoint(e), t)
                    }, c.createHttpProducer = function(e) {
                        var t = e.options && e.options.keepalive;
                        return new c(e.production ? new u.HttpProducer(o.PRODUCTION_DOMAIN, t) : new u.HttpProducer(o.DEVELOPMENT_DOMAIN, t), e.middleware || [])
                    }, c.buildMiddlewareChain = function(t, n) {
                        var r = this;
                        return (n = void 0 === n ? 0 : n) === t.length ? this.identityFn : function(e) {
                            return t[n].do(e, r.buildMiddlewareChain(t, n + 1))
                        }
                    }, c.prototype.produce = function(e) {
                        return e.metadata = r.__assign({
                            eventCreatedAtMs: Date.now(),
                            clientMessageId: (0, a.v4)()
                        }, e.metadata), this.executeChain(e)
                    }, c.prototype.produceBatch = function(e) {
                        return this.executeChain(e)
                    }, c);

                function c(e, t) {
                    this.producer = e, this.middleware = t, this.executeChain = c.buildMiddlewareChain(this.middleware.concat(new i.ProducerMiddleware(e)))
                }
                t.Monorail = n
            },
            6624: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.MonorailRetriesExceededError = t.MonorailRequestError = t.MonorailBatchProduceError = t.MonorailUnableToProduceError = void 0;
                var r, o = n(9312),
                    n = (r = Error, o.__extends(i, r), i);

                function i(e) {
                    var t = r.call(this, "Error producing to the Monorail Edge. Response received: ".concat(JSON.stringify(e))) || this;
                    return t.response = e, Object.setPrototypeOf(t, i.prototype), t
                }
                t.MonorailUnableToProduceError = n;
                var a, n = (a = Error, o.__extends(u, a), u);

                function u(e) {
                    var t = a.call(this, "Error producing to the Monorail Edge. Response received: ".concat(JSON.stringify(e))) || this;
                    return Object.setPrototypeOf(t, u.prototype), t.response = e, t
                }
                t.MonorailBatchProduceError = n;
                var s, n = (s = Error, o.__extends(c, s), c);

                function c(e) {
                    e = s.call(this, "Error completing request. A network failure may have prevented the request from completing. Error: ".concat(e)) || this;
                    return Object.setPrototypeOf(e, c.prototype), e
                }
                t.MonorailRequestError = n;
                var l, o = (l = Error, o.__extends(f, l), f);

                function f(e) {
                    e = l.call(this, "".concat(e)) || this;
                    return Object.setPrototypeOf(e, f.prototype), e
                }
                t.MonorailRetriesExceededError = o
            },
            144: function(e, t, n) {
                "use strict";

                function r(e, t) {
                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!n) {
                        if (Array.isArray(e) || (n = u(e)) || t && e && "number" == typeof e.length) {
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
                    var o, i = !0,
                        a = !1;
                    return {
                        s: function() {
                            n = n.call(e)
                        },
                        n: function() {
                            var e = n.next();
                            return i = e.done, e
                        },
                        e: function(e) {
                            a = !0, o = e
                        },
                        f: function() {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                    }
                }

                function u(e, t) {
                    if (e) {
                        if ("string" == typeof e) return o(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
                    }
                }

                function o(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r
                }
                n.d(t, {
                    j: function() {
                        return c
                    }
                });
                var i, a = 200,
                    s = [];

                function c(e, t) {
                    (h() ? l : f)(e, t)
                }

                function l(e, t) {
                    try {
                        var n, r;
                        null === (n = window.ShopifyAnalytics) || void 0 === n || null === (n = n.lib) || void 0 === n || null === (r = n.track) || void 0 === r || r.call(n, e, p(t))
                    } catch (e) {}
                }

                function f(e, t) {
                    s.push([e, t]), i = i || window.setInterval(d, a)
                }

                function d() {
                    if (h()) {
                        var e, t = r(s);
                        try {
                            for (t.s(); !(e = t.n()).done;) {
                                var n = e.value;
                                c(n[0], n[1])
                            }
                        } catch (e) {
                            t.e(e)
                        } finally {
                            t.f()
                        }
                        i && (window.clearInterval(i), i = null)
                    }
                }

                function p(e) {
                    return e.pageType = window.ShopifyAnalytics.meta.page.pageType || window.ShopifyAnalytics.meta.page.path, e
                }

                function h() {
                    return void 0 !== window.ShopifyAnalytics && window.ShopifyAnalytics.lib
                }
            },
            2111: function(e, t, n) {
                "use strict";
                n.d(t, {
                    kg: function() {
                        return l
                    }
                });
                var r = n(2951),
                    o = n(1976),
                    i = n(2283),
                    a = n(9600),
                    u = function(e) {
                        return e[e.error = 1] = "error", e[e.warn = 2] = "warn", e[e.log = 3] = "log", e[e.info = 4] = "info", e[e.debug = 5] = "debug", e
                    }({}),
                    s = (Object.values(u).map(function(e) {
                        return u[e]
                    }).filter(function(e) {
                        return "string" == typeof e
                    }), "[SPB]");

                function c(e) {
                    return "string" == typeof e && e in u
                }
                var l = new(function() {
                    function t() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : u.error;
                        (0, r.Z)(this, t), this.level = e, this.notifier = new a.d
                    }
                    return (0, o.Z)(t, [{
                        key: "loggingLevel",
                        get: function() {
                            var e = (0, i.I4)().get("loggingLevel");
                            if (!e) return this.level;
                            if (!c(e)) throw new Error("Unknown logging level: ".concat(e));
                            return u[e]
                        }
                    }, {
                        key: "debug",
                        value: function() {
                            if (this.levelGuard(u.debug)) {
                                for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                console.debug ? (e = console).debug.apply(e, [s].concat(n)) : (e = console).log.apply(e, [s].concat(n))
                            }
                        }
                    }, {
                        key: "log",
                        value: function() {
                            for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            return this.levelGuard(u.log) && (e = console).log.apply(e, [s].concat(n))
                        }
                    }, {
                        key: "warn",
                        value: function() {
                            for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            return this.levelGuard(u.warn) && (e = console).warn.apply(e, [s].concat(n))
                        }
                    }, {
                        key: "error",
                        value: function(e, t) {
                            var n;
                            (0, a.C)(!0) && this.notifier.notify(e, t);
                            for (var r = arguments.length, o = new Array(2 < r ? r - 2 : 0), i = 2; i < r; i++) o[i - 2] = arguments[i];
                            return this.levelGuard(u.error) && (n = console).error.apply(n, [s, e, t].concat(o))
                        }
                    }, {
                        key: "info",
                        value: function() {
                            for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            return this.levelGuard(u.info) && (e = console).info.apply(e, [s].concat(n))
                        }
                    }, {
                        key: "isDebugMode",
                        value: function() {
                            return this.levelGuard(u.debug)
                        }
                    }, {
                        key: "levelGuard",
                        value: function(e) {
                            return e <= this.loggingLevel
                        }
                    }]), t
                }());
                t.ZP = l
            },
            284: function(e, t, n) {
                "use strict";
                n.d(t, {
                    K: function() {
                        return s
                    },
                    n: function() {
                        return u
                    }
                });
                var r = n(1026),
                    o = n(6811),
                    i = n(2230),
                    a = n(2111);

                function u(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : void 0;
                    a.kg.debug("incrementing metric", {
                        name: e,
                        tags: t
                    });
                    t = c(t);
                    i.pG.incrementCounter(e, 1, t)
                }

                function s(e, t) {
                    var n, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0;
                    a.kg.debug("recording histogram", {
                        name: e,
                        value: t,
                        tags: r
                    }), null !== t ? (n = c(r), i.pG.histogram(e, t, n)) : i.pG.log(o.i.Error, "received null for histogram", {
                        name: e,
                        tags: r
                    })
                }

                function c(e) {
                    if (e) return new Map(Object.entries(e).filter(function(e) {
                        return null != (0, r.Z)(e, 2)[1]
                    }))
                }
            },
            9600: function(e, t, a) {
                "use strict";
                a.d(t, {
                    d: function() {
                        return n
                    },
                    C: function() {
                        return f
                    }
                });
                var u = a(1026),
                    r = a(7791),
                    o = a(2951),
                    i = a(1976),
                    t = a(824),
                    s = a.n(t),
                    t = a(7834),
                    c = a.n(t);

                function l(e) {
                    return !(!e.errors || 0 === e.errors.length)
                }
                var n = function() {
                    function e() {
                        (0, o.Z)(this, e)
                    }

                    function t(e) {
                        return n.apply(this, arguments)
                    }
                    var n;
                    return (0, i.Z)(e, [{
                        key: "notify",
                        value: (n = (0, r.Z)(s().mark(function e(t) {
                            var r, n, o = this,
                                i = arguments;
                            return s().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = 1 < i.length && void 0 !== i[1] ? i[1] : {
                                            severity: "error"
                                        }, n = new Promise(function(e) {
                                            return e(a(5780))
                                        }), e.abrupt("return", n.then(function(e) {
                                            o.notifier = o.notifier || e.createClient({
                                                apiKey: c().bugsnagApiKey || "",
                                                autoDetectErrors: !1,
                                                trackInlineScripts: !1,
                                                releaseStage: "production",
                                                enabledReleaseStages: ["production", "staging"],
                                                appVersion: "2bafd914f47ba306a0be8fb31f97d4cd00fe2442",
                                                onError: l
                                            }), o.notifier.notify(t, function(n) {
                                                var e = r.metadata,
                                                    t = r.severity;
                                                return e && Object.entries(e).forEach(function(e) {
                                                    var t = (0, u.Z)(e, 2),
                                                        e = t[0],
                                                        t = t[1];
                                                    n.addMetadata(e, t)
                                                }), t && (n.severity = t), !0
                                            })
                                        }));
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), t)
                    }]), e
                }();

                function f(e) {
                    return e
                }
            },
            1963: function(e, t, n) {
                "use strict";
                n.d(t, {
                    je: function() {
                        return r
                    },
                    tN: function() {
                        return o
                    }
                });
                n(284);

                function r(e) {
                    i() && window.performance.mark("".concat(e, "-start"))
                }

                function o(e) {
                    return i() ? (window.performance.mark("".concat(e, "-end")), window.performance.measure(e, "".concat(e, "-start"), "".concat(e, "-end")), (null === (e = window.performance.getEntriesByName(e)) || void 0 === e || null === (e = e.find(function() {
                        return !0
                    })) || void 0 === e ? void 0 : e.duration) || null) : null
                }

                function i() {
                    return window.performance && Boolean(window.performance.mark) && window.performance.measure
                }
            },
            2230: function(e, t, n) {
                "use strict";
                n.d(t, {
                    Wt: function() {
                        return s
                    },
                    pG: function() {
                        return c
                    },
                    tz: function() {
                        return f
                    }
                });
                var r = n(4649),
                    o = n(6811),
                    t = n(9600),
                    i = n(2111);

                function a(t, e) {
                    var n, r = Object.keys(t);
                    return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)), r
                }

                function u(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? a(Object(n), !0).forEach(function(e) {
                            (0, r.Z)(t, e, n[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        })
                    }
                    return t
                }
                var n = Boolean(null !== (n = null === i.ZP || void 0 === i.ZP ? void 0 : i.ZP.isDebugMode()) && void 0 !== n && n),
                    s = new o.l("payment-sheet", d, p, n),
                    c = new o.l("godog.spb", d, p, n),
                    l = new t.d;

                function f(r, t) {
                    var e, n = Boolean(400 <= Number(null !== (o = null == r || null === (n = r.cause) || void 0 === n || null === (n = n.response) || void 0 === n ? void 0 : n.status) && void 0 !== o ? o : 0) || ["Load failed", "Failed to fetch", "when attempting to fetch resource"].some(function(e) {
                        var t, n;
                        return (null == r || null === (t = r.toString()) || void 0 === t ? void 0 : t.includes(e)) || (null == r || null === (n = r.cause) || void 0 === n || null === (n = n.message) || void 0 === n ? void 0 : n.includes(e))
                    }));
                    !n && r instanceof Error && i.ZP && (e = r.name, i.ZP.error(r, {
                        metadata: {
                            wallets: u({
                                shop: window.Shopify.shop
                            }, t)
                        }
                    }));
                    var o = ["pageType", "instrument", "errorReason"].filter(function(e) {
                        return t[e]
                    }).map(function(e) {
                        return [e, t[e]]
                    });
                    e && o.push(["errorName", e]), n && o.push(["isNetworkError", "true"]), s.incrementCounter("error", 1, new Map(o))
                }

                function d() {
                    return o.i.Info
                }

                function p(e) {
                    l.notify(e)
                }
            },
            2196: function(e, t, n) {
                "use strict";
                n.d(t, {
                    G: function() {
                        return r
                    }
                });
                var r = function(e) {
                    return e.CartPage = "cart_page", e.CartAjax = "cart_ajax", e.CheckoutPage = "checkout", e.ProductPage = "product", e.Unknown = "unknown", e
                }({})
            },
            2283: function(e, t, n) {
                "use strict";
                n.d(t, {
                    I4: function() {
                        return u
                    },
                    bL: function() {
                        return c
                    },
                    ej: function() {
                        return o
                    },
                    kT: function() {
                        return i
                    },
                    o_: function() {
                        return a
                    },
                    x_: function() {
                        return l
                    }
                });
                var r = n(2196);

                function o(t) {
                    if (0 < document.cookie.length) {
                        var e = document.cookie.split("; ").find(function(e) {
                            return 0 === e.indexOf("".concat(t, "="))
                        });
                        if (e) return unescape(e.split("=")[1])
                    }
                    return ""
                }

                function i(e) {
                    document.cookie = "".concat(e, "=; Path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;")
                }

                function a(e) {
                    return void 0 !== e.render
                }

                function u() {
                    var o = new Map;
                    return decodeURIComponent(location.search).replace(/([^?=&]+)(=([^&]*))?/g, function(e, t, n, r) {
                        return o.set(t, r), o.get(t)
                    }), o
                }
                var s = new Set(["ApplePay", "GooglePay"]);

                function c(e) {
                    return e.some(function(e) {
                        return e && s.has(e.id)
                    })
                }

                function l(e) {
                    switch (e) {
                        case r.G.ProductPage:
                            return "Product";
                        case r.G.CartAjax:
                        case r.G.CartPage:
                            return "Cart";
                        case r.G.CheckoutPage:
                            return "Checkout";
                        default:
                            return "Other"
                    }
                }
            },
            9312: function(e, t, n) {
                "use strict";
                n.r(t), n.d(t, {
                    __assign: function() {
                        return i
                    },
                    __asyncDelegator: function() {
                        return _
                    },
                    __asyncGenerator: function() {
                        return w
                    },
                    __asyncValues: function() {
                        return E
                    },
                    __await: function() {
                        return b
                    },
                    __awaiter: function() {
                        return l
                    },
                    __classPrivateFieldGet: function() {
                        return P
                    },
                    __classPrivateFieldIn: function() {
                        return k
                    },
                    __classPrivateFieldSet: function() {
                        return M
                    },
                    __createBinding: function() {
                        return d
                    },
                    __decorate: function() {
                        return u
                    },
                    __exportStar: function() {
                        return p
                    },
                    __extends: function() {
                        return o
                    },
                    __generator: function() {
                        return f
                    },
                    __importDefault: function() {
                        return x
                    },
                    __importStar: function() {
                        return j
                    },
                    __makeTemplateObject: function() {
                        return S
                    },
                    __metadata: function() {
                        return c
                    },
                    __param: function() {
                        return s
                    },
                    __read: function() {
                        return g
                    },
                    __rest: function() {
                        return a
                    },
                    __spread: function() {
                        return v
                    },
                    __spreadArray: function() {
                        return m
                    },
                    __spreadArrays: function() {
                        return y
                    },
                    __values: function() {
                        return h
                    }
                });
                var r = function(e, t) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                };

                function o(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }
                var i = function() {
                    return (i = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                };

                function a(e, t) {
                    var n = {};
                    for (o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
                    return n
                }

                function u(e, t, n, r) {
                    var o, i = arguments.length,
                        a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
                    else
                        for (var u = e.length - 1; 0 <= u; u--)(o = e[u]) && (a = (i < 3 ? o(a) : 3 < i ? o(t, n, a) : o(t, n)) || a);
                    return 3 < i && a && Object.defineProperty(t, n, a), a
                }

                function s(n, r) {
                    return function(e, t) {
                        r(e, t, n)
                    }
                }

                function c(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                }

                function l(e, a, n, u) {
                    function s(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n = n || Promise)(function(t, n) {
                        function r(e) {
                            try {
                                i(u.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function o(e) {
                            try {
                                i(u.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function i(e) {
                            e.done ? t(e.value) : s(e.value).then(r, o)
                        }
                        i((u = u.apply(e, a || [])).next())
                    })
                }

                function f(e, n) {
                    var r, o, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        },
                        t = {
                            next: u(0),
                            throw: u(1),
                            return: u(2)
                        };
                    return "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                        return this
                    }), t;

                    function u(t) {
                        return function(e) {
                            return s([t, e])
                        }
                    }

                    function s(t) {
                        if (r) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (r = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                            switch (o = 0, (t = i ? [2 & t[0], i.value] : t)[0]) {
                                case 0:
                                case 1:
                                    i = t;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, o = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = 0 < (i = a.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                        a.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && a.label < i[1]) {
                                        a.label = i[1], i = t;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2], a.ops.push(t);
                                        break
                                    }
                                    i[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            t = n.call(e, a)
                        } catch (e) {
                            t = [6, e], o = 0
                        } finally {
                            r = i = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }
                }
                var d = Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n);
                    var o = Object.getOwnPropertyDescriptor(t, n);
                    o && ("get" in o ? t.__esModule : !o.writable && !o.configurable) || (o = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, r, o)
                } : function(e, t, n, r) {
                    e[r = void 0 === r ? n : r] = t[n]
                };

                function p(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || d(t, e, n)
                }

                function h(e) {
                    var t = "function" == typeof Symbol && Symbol.iterator,
                        n = t && e[t],
                        r = 0;
                    if (n) return n.call(e);
                    if (e && "number" == typeof e.length) return {
                        next: function() {
                            return {
                                value: (e = e && r >= e.length ? void 0 : e) && e[r++],
                                done: !e
                            }
                        }
                    };
                    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                }

                function g(e, t) {
                    var n = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!n) return e;
                    var r, o, i = n.call(e),
                        a = [];
                    try {
                        for (;
                            (void 0 === t || 0 < t--) && !(r = i.next()).done;) a.push(r.value)
                    } catch (e) {
                        o = {
                            error: e
                        }
                    } finally {
                        try {
                            r && !r.done && (n = i.return) && n.call(i)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return a
                }

                function v() {
                    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                    return e
                }

                function y() {
                    for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                    for (var r = Array(e), o = 0, t = 0; t < n; t++)
                        for (var i = arguments[t], a = 0, u = i.length; a < u; a++, o++) r[o] = i[a];
                    return r
                }

                function m(e, t, n) {
                    if (n || 2 === arguments.length)
                        for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || ((r = r || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
                    return e.concat(r || Array.prototype.slice.call(t))
                }

                function b(e) {
                    return this instanceof b ? (this.v = e, this) : new b(e)
                }

                function w(e, t, n) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var o = n.apply(e, t || []),
                        i = [],
                        a = {};
                    return r("next"), r("throw"), r("return"), a[Symbol.asyncIterator] = function() {
                        return this
                    }, a;

                    function r(r) {
                        o[r] && (a[r] = function(n) {
                            return new Promise(function(e, t) {
                                1 < i.push([r, n, e, t]) || u(r, n)
                            })
                        })
                    }

                    function u(e, t) {
                        try {
                            s(o[e](t))
                        } catch (e) {
                            f(i[0][3], e)
                        }
                    }

                    function s(e) {
                        e.value instanceof b ? Promise.resolve(e.value.v).then(c, l) : f(i[0][2], e)
                    }

                    function c(e) {
                        u("next", e)
                    }

                    function l(e) {
                        u("throw", e)
                    }

                    function f(e, t) {
                        e(t), i.shift(), i.length && u(i[0][0], i[0][1])
                    }
                }

                function _(r) {
                    var o, e = {};
                    return t("next"), t("throw", function(e) {
                        throw e
                    }), t("return"), e[Symbol.iterator] = function() {
                        return this
                    }, e;

                    function t(t, n) {
                        e[t] = r[t] ? function(e) {
                            return (o = !o) ? {
                                value: b(r[t](e)),
                                done: "return" === t
                            } : n ? n(e) : e
                        } : n
                    }
                }

                function E(o) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var e, t = o[Symbol.asyncIterator];
                    return t ? t.call(o) : (o = "function" == typeof h ? h(o) : o[Symbol.iterator](), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
                        return this
                    }, e);

                    function n(r) {
                        e[r] = o[r] && function(n) {
                            return new Promise(function(e, t) {
                                i(e, t, (n = o[r](n)).done, n.value)
                            })
                        }
                    }

                    function i(t, e, n, r) {
                        Promise.resolve(r).then(function(e) {
                            t({
                                value: e,
                                done: n
                            })
                        }, e)
                    }
                }

                function S(e, t) {
                    return Object.defineProperty ? Object.defineProperty(e, "raw", {
                        value: t
                    }) : e.raw = t, e
                }
                var O = Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                };

                function j(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && d(t, e, n);
                    return O(t, e), t
                }

                function x(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function P(e, t, n, r) {
                    if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
                }

                function M(e, t, n, r, o) {
                    if ("m" === r) throw new TypeError("Private method is not writable");
                    if ("a" === r && !o) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === r ? o.call(e, n) : o ? o.value = n : t.set(e, n), n
                }

                function k(e, t) {
                    if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
                    return "function" == typeof e ? t === e : e.has(t)
                }
            },
            1719: function(e, t, n) {
                var r = n(2998),
                    o = n(6541),
                    n = o;
                n.v1 = r, n.v4 = o, e.exports = n
            },
            3973: function(e) {
                for (var r = [], t = 0; t < 256; ++t) r[t] = (t + 256).toString(16).substr(1);

                function n(e, t) {
                    var n = t || 0,
                        t = r;
                    return [t[e[n++]], t[e[n++]], t[e[n++]], t[e[n++]], "-", t[e[n++]], t[e[n++]], "-", t[e[n++]], t[e[n++]], "-", t[e[n++]], t[e[n++]], "-", t[e[n++]], t[e[n++]], t[e[n++]], t[e[n++]], t[e[n++]], t[e[n++]]].join("")
                }
                e.exports = n
            },
            6963: function(e) {
                var t, n, r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
                r ? (t = new Uint8Array(16), e.exports = function() {
                    return r(t), t
                }) : (n = new Array(16), e.exports = function() {
                    for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), n[t] = e >>> ((3 & t) << 3) & 255;
                    return n
                })
            },
            2998: function(e, t, n) {
                var l, f, d = n(6963),
                    p = n(3973),
                    h = 0,
                    g = 0;

                function r(e, t, n) {
                    var r = t && n || 0,
                        o = t || [],
                        i = (e = e || {}).node || l,
                        a = void 0 !== e.clockseq ? e.clockseq : f;
                    null != i && null != a || (s = d(), null == i && (i = l = [1 | s[0], s[1], s[2], s[3], s[4], s[5]]), null == a && (a = f = 16383 & (s[6] << 8 | s[7])));
                    var u = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
                        n = void 0 !== e.nsecs ? e.nsecs : g + 1,
                        s = u - h + (n - g) / 1e4;
                    if (s < 0 && void 0 === e.clockseq && (a = a + 1 & 16383), 1e4 <= (n = (s < 0 || h < u) && void 0 === e.nsecs ? 0 : n)) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                    h = u, f = a;
                    n = (1e4 * (268435455 & (u += 122192928e5)) + (g = n)) % 4294967296;
                    o[r++] = n >>> 24 & 255, o[r++] = n >>> 16 & 255, o[r++] = n >>> 8 & 255, o[r++] = 255 & n;
                    u = u / 4294967296 * 1e4 & 268435455;
                    o[r++] = u >>> 8 & 255, o[r++] = 255 & u, o[r++] = u >>> 24 & 15 | 16, o[r++] = u >>> 16 & 255, o[r++] = a >>> 8 | 128, o[r++] = 255 & a;
                    for (var c = 0; c < 6; ++c) o[r + c] = i[c];
                    return t || p(o)
                }
                e.exports = r
            },
            6541: function(e, t, n) {
                var a = n(6963),
                    u = n(3973);

                function r(e, t, n) {
                    var r = t && n || 0;
                    "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
                    var o = (e = e || {}).random || (e.rng || a)();
                    if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t)
                        for (var i = 0; i < 16; ++i) t[r + i] = o[i];
                    return t || u(o)
                }
                e.exports = r
            },
            1337: function(x, e, t) {
                var P = t(7501).default;

                function M() {
                    "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                    x.exports = M = function() {
                        return a
                    }, x.exports.__esModule = !0, x.exports.default = x.exports;
                    var a = {},
                        e = Object.prototype,
                        s = e.hasOwnProperty,
                        o = Object.defineProperty || function(e, t, n) {
                            e[t] = n.value
                        },
                        t = "function" == typeof Symbol ? Symbol : {},
                        r = t.iterator || "@@iterator",
                        n = t.asyncIterator || "@@asyncIterator",
                        i = t.toStringTag || "@@toStringTag";

                    function u(e, t, n) {
                        return Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), e[t]
                    }
                    try {
                        u({}, "")
                    } catch (e) {
                        u = function(e, t, n) {
                            return e[t] = n
                        }
                    }

                    function c(e, t, n, r) {
                        t = t && t.prototype instanceof d ? t : d, t = Object.create(t.prototype), r = new S(r || []);
                        return o(t, "_invoke", {
                            value: b(e, n, r)
                        }), t
                    }

                    function l(e, t, n) {
                        try {
                            return {
                                type: "normal",
                                arg: e.call(t, n)
                            }
                        } catch (e) {
                            return {
                                type: "throw",
                                arg: e
                            }
                        }
                    }
                    a.wrap = c;
                    var f = {};

                    function d() {}

                    function p() {}

                    function h() {}
                    var g = {};
                    u(g, r, function() {
                        return this
                    });
                    t = Object.getPrototypeOf, t = t && t(t(O([])));
                    t && t !== e && s.call(t, r) && (g = t);
                    var v = h.prototype = d.prototype = Object.create(g);

                    function y(e) {
                        ["next", "throw", "return"].forEach(function(t) {
                            u(e, t, function(e) {
                                return this._invoke(t, e)
                            })
                        })
                    }

                    function m(i, a) {
                        function u(e, t, n, r) {
                            e = l(i[e], i, t);
                            if ("throw" !== e.type) {
                                var o = e.arg,
                                    t = o.value;
                                return t && "object" == P(t) && s.call(t, "__await") ? a.resolve(t.__await).then(function(e) {
                                    u("next", e, n, r)
                                }, function(e) {
                                    u("throw", e, n, r)
                                }) : a.resolve(t).then(function(e) {
                                    o.value = e, n(o)
                                }, function(e) {
                                    return u("throw", e, n, r)
                                })
                            }
                            r(e.arg)
                        }
                        var t;
                        o(this, "_invoke", {
                            value: function(n, r) {
                                function e() {
                                    return new a(function(e, t) {
                                        u(n, r, e, t)
                                    })
                                }
                                return t = t ? t.then(e, e) : e()
                            }
                        })
                    }

                    function b(o, i, a) {
                        var u = "suspendedStart";
                        return function(e, t) {
                            if ("executing" === u) throw new Error("Generator is already running");
                            if ("completed" === u) {
                                if ("throw" === e) throw t;
                                return j()
                            }
                            for (a.method = e, a.arg = t;;) {
                                var n = a.delegate;
                                if (n) {
                                    var r = w(n, a);
                                    if (r) {
                                        if (r === f) continue;
                                        return r
                                    }
                                }
                                if ("next" === a.method) a.sent = a._sent = a.arg;
                                else if ("throw" === a.method) {
                                    if ("suspendedStart" === u) throw u = "completed", a.arg;
                                    a.dispatchException(a.arg)
                                } else "return" === a.method && a.abrupt("return", a.arg);
                                u = "executing";
                                r = l(o, i, a);
                                if ("normal" === r.type) {
                                    if (u = a.done ? "completed" : "suspendedYield", r.arg === f) continue;
                                    return {
                                        value: r.arg,
                                        done: a.done
                                    }
                                }
                                "throw" === r.type && (u = "completed", a.method = "throw", a.arg = r.arg)
                            }
                        }
                    }

                    function w(e, t) {
                        var n = t.method,
                            r = e.iterator[n];
                        if (void 0 === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f;
                        r = l(r, e.iterator, t.arg);
                        if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, f;
                        r = r.arg;
                        return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, f) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, f)
                    }

                    function _(e) {
                        var t = {
                            tryLoc: e[0]
                        };
                        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                    }

                    function E(e) {
                        var t = e.completion || {};
                        t.type = "normal", delete t.arg, e.completion = t
                    }

                    function S(e) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], e.forEach(_, this), this.reset(!0)
                    }

                    function O(t) {
                        if (t) {
                            var e = t[r];
                            if (e) return e.call(t);
                            if ("function" == typeof t.next) return t;
                            if (!isNaN(t.length)) {
                                var n = -1,
                                    e = function e() {
                                        for (; ++n < t.length;)
                                            if (s.call(t, n)) return e.value = t[n], e.done = !1, e;
                                        return e.value = void 0, e.done = !0, e
                                    };
                                return e.next = e
                            }
                        }
                        return {
                            next: j
                        }
                    }

                    function j() {
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    return p.prototype = h, o(v, "constructor", {
                        value: h,
                        configurable: !0
                    }), o(h, "constructor", {
                        value: p,
                        configurable: !0
                    }), p.displayName = u(h, i, "GeneratorFunction"), a.isGeneratorFunction = function(e) {
                        e = "function" == typeof e && e.constructor;
                        return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                    }, a.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, u(e, i, "GeneratorFunction")), e.prototype = Object.create(v), e
                    }, a.awrap = function(e) {
                        return {
                            __await: e
                        }
                    }, y(m.prototype), u(m.prototype, n, function() {
                        return this
                    }), a.AsyncIterator = m, a.async = function(e, t, n, r, o) {
                        void 0 === o && (o = Promise);
                        var i = new m(c(e, t, n, r), o);
                        return a.isGeneratorFunction(t) ? i : i.next().then(function(e) {
                            return e.done ? e.value : i.next()
                        })
                    }, y(v), u(v, i, "Generator"), u(v, r, function() {
                        return this
                    }), u(v, "toString", function() {
                        return "[object Generator]"
                    }), a.keys = function(e) {
                        var t, n = Object(e),
                            r = [];
                        for (t in n) r.push(t);
                        return r.reverse(),
                            function e() {
                                for (; r.length;) {
                                    var t = r.pop();
                                    if (t in n) return e.value = t, e.done = !1, e
                                }
                                return e.done = !0, e
                            }
                    }, a.values = O, S.prototype = {
                        constructor: S,
                        reset: function(e) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !e)
                                for (var t in this) "t" === t.charAt(0) && s.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                        },
                        stop: function() {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval
                        },
                        dispatchException: function(n) {
                            if (this.done) throw n;
                            var r = this;

                            function e(e, t) {
                                return i.type = "throw", i.arg = n, r.next = e, t && (r.method = "next", r.arg = void 0), !!t
                            }
                            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                                var o = this.tryEntries[t],
                                    i = o.completion;
                                if ("root" === o.tryLoc) return e("end");
                                if (o.tryLoc <= this.prev) {
                                    var a = s.call(o, "catchLoc"),
                                        u = s.call(o, "finallyLoc");
                                    if (a && u) {
                                        if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                                        if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                                    } else if (a) {
                                        if (this.prev < o.catchLoc) return e(o.catchLoc, !0)
                                    } else {
                                        if (!u) throw new Error("try statement without catch or finally");
                                        if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(e, t) {
                            for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                                var r = this.tryEntries[n];
                                if (r.tryLoc <= this.prev && s.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                    var o = r;
                                    break
                                }
                            }
                            var i = (o = o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc ? null : o) ? o.completion : {};
                            return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, f) : this.complete(i)
                        },
                        complete: function(e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
                        },
                        finish: function(e) {
                            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                                var n = this.tryEntries[t];
                                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), E(n), f
                            }
                        },
                        catch: function(e) {
                            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                                var n = this.tryEntries[t];
                                if (n.tryLoc === e) {
                                    var r, o = n.completion;
                                    return "throw" === o.type && (r = o.arg, E(n)), r
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(e, t, n) {
                            return this.delegate = {
                                iterator: O(e),
                                resultName: t,
                                nextLoc: n
                            }, "next" === this.method && (this.arg = void 0), f
                        }
                    }, a
                }
                x.exports = M, x.exports.__esModule = !0, x.exports.default = x.exports
            },
            7501: function(t) {
                function n(e) {
                    return t.exports = n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, t.exports.__esModule = !0, t.exports.default = t.exports, n(e)
                }
                t.exports = n, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            824: function(e, t, n) {
                n = n(1337)();
                e.exports = n;
                try {
                    regeneratorRuntime = n
                } catch (e) {
                    "object" == typeof globalThis ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n)
                }
            },
            1793: function(e, t, n) {
                "use strict";

                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r
                }
                n.d(t, {
                    Z: function() {
                        return r
                    }
                })
            },
            6470: function(e, t, n) {
                "use strict";

                function r(e) {
                    if (Array.isArray(e)) return e
                }
                n.d(t, {
                    Z: function() {
                        return r
                    }
                })
            },
            7791: function(e, t, n) {
                "use strict";

                function s(e, t, n, r, o, i, a) {
                    try {
                        var u = e[i](a),
                            s = u.value
                    } catch (e) {
                        return void n(e)
                    }
                    u.done ? t(s) : Promise.resolve(s).then(r, o)
                }

                function r(u) {
                    return function() {
                        var e = this,
                            a = arguments;
                        return new Promise(function(t, n) {
                            var r = u.apply(e, a);

                            function o(e) {
                                s(r, t, n, o, i, "next", e)
                            }

                            function i(e) {
                                s(r, t, n, o, i, "throw", e)
                            }
                            o(void 0)
                        })
                    }
                }
                n.d(t, {
                    Z: function() {
                        return r
                    }
                })
            },
            2951: function(e, t, n) {
                "use strict";

                function r(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }
                n.d(t, {
                    Z: function() {
                        return r
                    }
                })
            },
            1976: function(e, t, n) {
                "use strict";
                n.d(t, {
                    Z: function() {
                        return i
                    }
                });
                var o = n(5217);

                function r(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, (0, o.Z)(r.key), r)
                    }
                }

                function i(e, t, n) {
                    return t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), e
                }
            },
            4649: function(e, t, n) {
                "use strict";
                n.d(t, {
                    Z: function() {
                        return o
                    }
                });
                var r = n(5217);

                function o(e, t, n) {
                    return (t = (0, r.Z)(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
            },
            3764: function(e, t, n) {
                "use strict";

                function r() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                n.d(t, {
                    Z: function() {
                        return r
                    }
                })
            },
            1026: function(e, t, n) {
                "use strict";
                n.d(t, {
                    Z: function() {
                        return u
                    }
                });
                var r = n(6470);

                function o(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i, a, u = [],
                            s = !0,
                            c = !1;
                        try {
                            if (i = (n = n.call(e)).next, 0 === t) {
                                if (Object(n) !== n) return;
                                s = !1
                            } else
                                for (; !(s = (r = i.call(n)).done) && (u.push(r.value), u.length !== t); s = !0);
                        } catch (e) {
                            c = !0, o = e
                        } finally {
                            try {
                                if (!s && null != n.return && (a = n.return(), Object(a) !== a)) return
                            } finally {
                                if (c) throw o
                            }
                        }
                        return u
                    }
                }
                var i = n(4013),
                    a = n(3764);

                function u(e, t) {
                    return (0, r.Z)(e) || o(e, t) || (0, i.Z)(e, t) || (0, a.Z)()
                }
            },
            5217: function(e, t, n) {
                "use strict";
                n.d(t, {
                    Z: function() {
                        return i
                    }
                });
                var r = n(3940);

                function o(e, t) {
                    if ("object" !== (0, r.Z)(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 === n) return ("string" === t ? String : Number)(e);
                    t = n.call(e, t || "default");
                    if ("object" !== (0, r.Z)(t)) return t;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }

                function i(e) {
                    e = o(e, "string");
                    return "symbol" === (0, r.Z)(e) ? e : String(e)
                }
            },
            3940: function(e, t, n) {
                "use strict";

                function r(e) {
                    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                n.d(t, {
                    Z: function() {
                        return r
                    }
                })
            },
            4013: function(e, t, n) {
                "use strict";
                n.d(t, {
                    Z: function() {
                        return o
                    }
                });
                var r = n(1793);

                function o(e, t) {
                    if (e) {
                        if ("string" == typeof e) return (0, r.Z)(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? (0, r.Z)(e, t) : void 0
                    }
                }
            },
            6811: function(e, t, n) {
                "use strict";
                n.d(t, {
                    i: function() {
                        return s
                    },
                    l: function() {
                        return g
                    }
                });
                var a = (e => (e.Metric = "metric", e.Log = "log", e.MetricWithLogs = "metric_and_log", e))(a || {}),
                    u = (e => (e.Counter = "counter", e.Historgram = "histogram", e.Gauge = "gauge", e.Measure = "measure", e))(u || {}),
                    s = (e => (e[e.Trace = 0] = "Trace", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e))(s || {}),
                    r = n(2872);
                class o {
                    constructor(e, t, n = {
                        bufferDuration: 1e3,
                        maxQueueSize: 50
                    }) {
                        this.events = [], this.errorHandler = e, this.config = n, this.queueFlusherID = setInterval(() => {
                            this.flush()
                        }, this.config.bufferDuration), this.monorail = r.hl.createHttpProducer({
                            production: !0,
                            middleware: [new r.xp(3, 100)]
                        })
                    }
                    async shutdown() {
                        clearInterval(this.queueFlusherID), await this.flush()
                    }
                    record(e) {
                        e && (this.events.push(this.prepareEvent(e)), this.events.length >= this.config.maxQueueSize && this.flush())
                    }
                    async flush() {
                        await this.sendAllBufferedEvents()
                    }
                    prepareEvent(e) {
                        return { ...e,
                            metadata: {
                                eventCreatedAtMs: Date.now()
                            }
                        }
                    }
                    async sendAllBufferedEvents() {
                        if (!(this.events.length <= 0)) {
                            const e = this.events;
                            this.events = [];
                            try {
                                await this.monorail.produceBatch({
                                    events: e
                                })
                            } catch (e) {
                                this.errorHandler(e)
                            }
                        }
                    }
                }
                const c = new Set(["userToken", "sessionToken"]);

                function i(e, t) {
                    return {
                        payload: {
                            origin: t,
                            logFields: d(e.entries),
                            logMessage: e.message
                        },
                        schemaId: "checkout_frontend_telemetry/2.1"
                    }
                }

                function l(e, t) {
                    return {
                        payload: {
                            origin: t,
                            metricType: e.metricType,
                            metricKey: e.key,
                            metricDelta: e.value,
                            metricTags: d(f(e.tags))
                        },
                        schemaId: "checkout_frontend_telemetry/2.1"
                    }
                }

                function f(e) {
                    const n = {};
                    return e.forEach((e, t) => {
                        n[t] = e
                    }), n
                }

                function d(e) {
                    return p(h(e))
                }

                function p(e) {
                    if (null == e) return [];
                    const t = [];
                    for (var [n, r] of Object.entries(e)) t.push(n.toString()), t.push(`${r}`);
                    return t
                }

                function h(e) {
                    if (null == e) return {};
                    const t = {};
                    for (var [n, r] of Object.entries(e))
                        if (!c.has(n))
                            if (r && "object" == typeof r) {
                                const a = h(r);
                                for (var [o, i] of Object.entries(a)) t[`${n}.${o}`] = i
                            } else t[n] = r;
                    return t
                }
                class g {
                    constructor(e, t = () => s.Info, n = () => {}, r = !1) {
                        this.appId = e, this.minTransmittableLogLevel = t, this.errorHandler = n, this.debugMode = r, this.globalContext = {}, this.client = new o(this.errorHandler, r)
                    }
                    incrementCounter(e, t = 1, n = new Map) {
                        this.sendMetric(u.Counter, e, t, n)
                    }
                    histogram(e, t = 1, n = new Map) {
                        this.sendMetric(u.Historgram, e, t, n)
                    }
                    gauge(e, t = 1, n = new Map) {
                        this.sendMetric(u.Gauge, e, t, n)
                    }
                    async measure(e, t = new Map, n) {
                        const r = Date.now(),
                            o = await n(),
                            i = Date.now();
                        return this.sendMetric(u.Measure, e, i - r, t), o
                    }
                    measureSync(e, t = new Map, n) {
                        const r = Date.now(),
                            o = n(),
                            i = Date.now();
                        return this.sendMetric(u.Measure, e, i - r, t), o
                    }
                    log(e, t, n = {}) {
                        const r = {
                            type: a.Log,
                            level: e,
                            message: t,
                            entries: this.mixContext(n)
                        };
                        e >= this.minTransmittableLogLevel() && this.sendEvent(r)
                    }
                    trace(e, t = {}) {
                        this.log(s.Trace, e, t)
                    }
                    info(e, t = {}) {
                        this.log(s.Info, e, t)
                    }
                    warn(e, t = {}) {
                        this.log(s.Warn, e, t)
                    }
                    error(e, t = {}) {
                        this.log(s.Error, e, t)
                    }
                    noticeError(e, t = new Map, n = {}, r = !1) {
                        t.set("expected", String(r)), t.set("errorName", e.name);
                        const o = {
                            metricType: u.Counter,
                            type: a.Metric,
                            key: "Errors",
                            value: 1,
                            tags: t
                        };
                        this.sendEvent(o);
                        const i = {
                            type: a.Log,
                            level: s.Error,
                            entries: this.mixContext(n),
                            message: `${e.name}: ${e.message} 
 ${e.stack}`
                        };
                        this.sendEvent(i)
                    }
                    setGlobalContext(e) {
                        this.globalContext = e
                    }
                    async flush() {
                        await this.client.flush()
                    }
                    async shutdown() {
                        await this.client.shutdown()
                    }
                    sendMetric(e, t, n, r) {
                        const o = {
                            type: a.Metric,
                            metricType: e,
                            key: t,
                            value: n && Math.floor(n),
                            tags: r
                        };
                        this.sendEvent(o)
                    }
                    sendEvent(e) {
                        this.client.record(this.mapEventToMonorailSchema(e))
                    }
                    mixContext(e = {}) {
                        return { ...this.globalContext,
                            ...e,
                            agent_metadata: {
                                agent_timestamp: Date.now()
                            }
                        }
                    }
                    mapEventToMonorailSchema(e) {
                        switch (e.type) {
                            case a.Metric:
                                return l(e, this.appId);
                            case a.Log:
                                return i(e, this.appId);
                            default:
                                throw new Error("unknown telemetry type cannot be mapped to checkout frontend telemetry monorail schema")
                        }
                    }
                }
            }
        },
        r = {};

    function g(e) {
        var t = r[e];
        if (void 0 !== t) return t.exports;
        t = r[e] = {
            id: e,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, g), t.exports
    }
    g.m = n, g.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return g.d(t, {
                a: t
            }), t
        }, g.d = function(e, t) {
            for (var n in t) g.o(t, n) && !g.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, g.f = {}, g.e = function(n) {
            return Promise.all(Object.keys(g.f).reduce(function(e, t) {
                return g.f[t](n, e), e
            }, []))
        }, g.u = function(e) {
            return 698 === e ? "latest/c6f4de0502f2c968e8e9.spb-698.en.js" : 680 === e ? "latest/35869d1937a93c028aba.spb-680.en.js" : 340 === e ? "latest/4d05e0b3f9294a6cd125.spb-340.en.js" : 484 === e ? "latest/3cf7f762bb96b95219bc.spb-484.en.js" : 676 === e ? "latest/8f1717c5552bdd809bac.spb-676.en.js" : void 0
        }, g.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), g.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, l = {}, f = "Shopify:", g.l = function(r, e, t, n) {
            if (l[r]) l[r].push(e);
            else {
                var o, i;
                if (void 0 !== t)
                    for (var a = document.getElementsByTagName("script"), u = 0; u < a.length; u++) {
                        var s = a[u];
                        if (s.getAttribute("src") == r || s.getAttribute("data-webpack") == f + t) {
                            o = s;
                            break
                        }
                    }
                o || (i = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, g.nc && o.setAttribute("nonce", g.nc), o.setAttribute("data-webpack", f + t), o.src = r), l[r] = [e];
                var e = function(e, t) {
                        o.onerror = o.onload = null, clearTimeout(c);
                        var n = l[r];
                        if (delete l[r], o.parentNode && o.parentNode.removeChild(o), n && n.forEach(function(e) {
                                return e(t)
                            }), e) return e(t)
                    },
                    c = setTimeout(e.bind(null, void 0, {
                        type: "timeout",
                        target: o
                    }), 12e4);
                o.onerror = e.bind(null, o.onerror), o.onload = e.bind(null, o.onload), i && document.head.appendChild(o)
            }
        }, g.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, g.p = "//cdn.shopify.com/shopifycloud/payment-sheet/assets/",
        function() {
            var s = {
                143: 0
            };
            g.f.j = function(n, e) {
                var r, t, o = g.o(s, n) ? s[n] : void 0;
                0 !== o && (o ? e.push(o[2]) : (t = new Promise(function(e, t) {
                    o = s[n] = [e, t]
                }), e.push(o[2] = t), e = g.p + g.u(n), r = new Error, t = function(e) {
                    var t;
                    g.o(s, n) && (0 !== (o = s[n]) && (s[n] = void 0), o && (t = e && ("load" === e.type ? "missing" : e.type), e = e && e.target && e.target.src, r.message = "Loading chunk " + n + " failed.\n(" + t + ": " + e + ")", r.name = "ChunkLoadError", r.type = t, r.request = e, o[1](r)))
                }, g.l(e, t, "chunk-" + n, n)))
            };
            var e = function(e, t) {
                    var n, r, o = t[0],
                        i = t[1],
                        a = t[2],
                        u = 0;
                    if (o.some(function(e) {
                            return 0 !== s[e]
                        })) {
                        for (n in i) g.o(i, n) && (g.m[n] = i[n]);
                        a && a(g)
                    }
                    for (e && e(t); u < o.length; u++) r = o[u], g.o(s, r) && s[r] && s[r][0](), s[r] = 0
                },
                t = self.shopifySpbJsonp = self.shopifySpbJsonp || [];
            t.forEach(e.bind(null, 0)), t.push = e.bind(null, t.push.bind(t))
        }(), g.nc = void 0;
    var v = {};
    ! function() {
        "use strict";
        g.r(v), g.d(v, {
            init: function() {
                return p
            },
            version: function() {
                return o
            }
        });
        var i = g(1026),
            e = g(7791),
            t = g(824),
            a = g.n(t),
            n = g(7834),
            t = g.n(n);

        function r(e) {
            "loading" !== document.readyState ? e() : document.addEventListener ? document.addEventListener("DOMContentLoaded", e) : document.attachEvent("onreadystatechange", function() {
                "loading" !== document.readyState && e()
            }), document.addEventListener && (document.addEventListener("shopify:block:select", e), document.addEventListener("shopify:section:select", e))
        }
        window.Shopify && (window.Shopify.cdnHost || window.Shopify.paymentSheetCdnHost) && (n = window.Shopify.paymentSheetCdnHost || window.Shopify.cdnHost, g.p = "//".concat(n).concat(t().defaultCdnPath, "/"));
        var u = g(284),
            s = g(144),
            c = g(1963),
            l = g(2196),
            f = g(2111),
            d = "[data-shopify=payment-button]",
            o = "2bafd914f47ba306a0be8fb31f97d4cd00fe2442";

        function p() {
            return h.apply(this, arguments)
        }

        function h() {
            return (h = (0, e.Z)(a().mark(function e() {
                var t, n, r, o;
                return a().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (0 === (t = document.querySelectorAll(d)).length) return e.abrupt("return");
                            e.next = 3;
                            break;
                        case 3:
                            return e.prev = 3, e.next = 6, Promise.all([Promise.all([g.e(698), g.e(680)]).then(g.bind(g, 9680)), Promise.all([g.e(698), g.e(340), g.e(484)]).then(g.bind(g, 6484)), g.e(676).then(g.bind(g, 9676))]);
                        case 6:
                            return n = e.sent, r = (0, i.Z)(n, 3), o = r[0], n = r[1], r = r[2].track, (0, u.n)("init.called", {
                                pageType: l.G.ProductPage
                            }), (0, s.j)("spb_init_called", {}), r({
                                event: "spb_init_called",
                                pageType: l.G.ProductPage
                            }), window.performance && (0, u.K)("accelerated.button.init_from_load", window.performance.now(), {
                                pageType: l.G.ProductPage
                            }), (0, c.je)("init button"), (0, c.je)("buttonDisplay"), (0, c.je)("loading configuration"), e.next = 20, o.init({
                                storefrontWallet: !0
                            });
                        case 20:
                            o = e.sent, (0, c.tN)("loading configuration"), n.bindButtons(t, o), e.next = 28;
                            break;
                        case 25:
                            e.prev = 25, e.t0 = e.catch(3), e.t0 instanceof TypeError && f.ZP.error(e.t0);
                        case 28:
                        case "end":
                            return e.stop()
                    }
                }, e, null, [
                    [3, 25]
                ])
            }))).apply(this, arguments)
        }
        r(p)
    }(), (Shopify = void 0 === Shopify ? {} : Shopify).PaymentButton = v
}();