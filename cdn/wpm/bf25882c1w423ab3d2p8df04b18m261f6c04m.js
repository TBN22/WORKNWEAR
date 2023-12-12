(() => {
    var e = {
            747: function(e, t, n) {
                var o, r, i;
                ! function(a, s) {
                    "use strict";
                    r = [n(18)], void 0 === (i = "function" == typeof(o = function(e) {
                        var t = /(^|@)\S+:\d+/,
                            n = /^\s*at .*(\S+:\d+|\(native\))/m,
                            o = /^(eval@)?(\[native code])?$/;
                        return {
                            parse: function(e) {
                                if (void 0 !== e.stacktrace || void 0 !== e["opera#sourceloc"]) return this.parseOpera(e);
                                if (e.stack && e.stack.match(n)) return this.parseV8OrIE(e);
                                if (e.stack) return this.parseFFOrSafari(e);
                                throw new Error("Cannot parse given Error object")
                            },
                            extractLocation: function(e) {
                                if (-1 === e.indexOf(":")) return [e];
                                var t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g, ""));
                                return [t[1], t[2] || void 0, t[3] || void 0]
                            },
                            parseV8OrIE: function(t) {
                                return t.stack.split("\n").filter((function(e) {
                                    return !!e.match(n)
                                }), this).map((function(t) {
                                    t.indexOf("(eval ") > -1 && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
                                    var n = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, ""),
                                        o = n.match(/ (\(.+\)$)/);
                                    n = o ? n.replace(o[0], "") : n;
                                    var r = this.extractLocation(o ? o[1] : n),
                                        i = o && n || void 0,
                                        a = ["eval", "<anonymous>"].indexOf(r[0]) > -1 ? void 0 : r[0];
                                    return new e({
                                        functionName: i,
                                        fileName: a,
                                        lineNumber: r[1],
                                        columnNumber: r[2],
                                        source: t
                                    })
                                }), this)
                            },
                            parseFFOrSafari: function(t) {
                                return t.stack.split("\n").filter((function(e) {
                                    return !e.match(o)
                                }), this).map((function(t) {
                                    if (t.indexOf(" > eval") > -1 && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === t.indexOf("@") && -1 === t.indexOf(":")) return new e({
                                        functionName: t
                                    });
                                    var n = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                                        o = t.match(n),
                                        r = o && o[1] ? o[1] : void 0,
                                        i = this.extractLocation(t.replace(n, ""));
                                    return new e({
                                        functionName: r,
                                        fileName: i[0],
                                        lineNumber: i[1],
                                        columnNumber: i[2],
                                        source: t
                                    })
                                }), this)
                            },
                            parseOpera: function(e) {
                                return !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e)
                            },
                            parseOpera9: function(t) {
                                for (var n = /Line (\d+).*script (?:in )?(\S+)/i, o = t.message.split("\n"), r = [], i = 2, a = o.length; i < a; i += 2) {
                                    var s = n.exec(o[i]);
                                    s && r.push(new e({
                                        fileName: s[2],
                                        lineNumber: s[1],
                                        source: o[i]
                                    }))
                                }
                                return r
                            },
                            parseOpera10: function(t) {
                                for (var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, o = t.stacktrace.split("\n"), r = [], i = 0, a = o.length; i < a; i += 2) {
                                    var s = n.exec(o[i]);
                                    s && r.push(new e({
                                        functionName: s[3] || void 0,
                                        fileName: s[2],
                                        lineNumber: s[1],
                                        source: o[i]
                                    }))
                                }
                                return r
                            },
                            parseOpera11: function(n) {
                                return n.stack.split("\n").filter((function(e) {
                                    return !!e.match(t) && !e.match(/^Error created at/)
                                }), this).map((function(t) {
                                    var n, o = t.split("@"),
                                        r = this.extractLocation(o.pop()),
                                        i = o.shift() || "",
                                        a = i.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
                                    i.match(/\(([^)]*)\)/) && (n = i.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
                                    var s = void 0 === n || "[arguments not available]" === n ? void 0 : n.split(",");
                                    return new e({
                                        functionName: a,
                                        args: s,
                                        fileName: r[0],
                                        lineNumber: r[1],
                                        columnNumber: r[2],
                                        source: t
                                    })
                                }), this)
                            }
                        }
                    }) ? o.apply(t, r) : o) || (e.exports = i)
                }()
            },
            18: function(e, t) {
                var n, o, r;
                ! function(i, a) {
                    "use strict";
                    o = [], void 0 === (r = "function" == typeof(n = function() {
                        function e(e) {
                            return e.charAt(0).toUpperCase() + e.substring(1)
                        }

                        function t(e) {
                            return function() {
                                return this[e]
                            }
                        }
                        var n = ["isConstructor", "isEval", "isNative", "isToplevel"],
                            o = ["columnNumber", "lineNumber"],
                            r = ["fileName", "functionName", "source"],
                            i = n.concat(o, r, ["args"], ["evalOrigin"]);

                        function a(t) {
                            if (t)
                                for (var n = 0; n < i.length; n++) void 0 !== t[i[n]] && this["set" + e(i[n])](t[i[n]])
                        }
                        a.prototype = {
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
                                if (e instanceof a) this.evalOrigin = e;
                                else {
                                    if (!(e instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");
                                    this.evalOrigin = new a(e)
                                }
                            },
                            toString: function() {
                                var e = this.getFileName() || "",
                                    t = this.getLineNumber() || "",
                                    n = this.getColumnNumber() || "",
                                    o = this.getFunctionName() || "";
                                return this.getIsEval() ? e ? "[eval] (" + e + ":" + t + ":" + n + ")" : "[eval]:" + t + ":" + n : o ? o + " (" + e + ":" + t + ":" + n + ")" : e + ":" + t + ":" + n
                            }
                        }, a.fromString = function(e) {
                            var t = e.indexOf("("),
                                n = e.lastIndexOf(")"),
                                o = e.substring(0, t),
                                r = e.substring(t + 1, n).split(","),
                                i = e.substring(n + 1);
                            if (0 === i.indexOf("@")) var s = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(i, ""),
                                c = s[1],
                                l = s[2],
                                u = s[3];
                            return new a({
                                functionName: o,
                                args: r || void 0,
                                fileName: c,
                                lineNumber: l || void 0,
                                columnNumber: u || void 0
                            })
                        };
                        for (var s = 0; s < n.length; s++) a.prototype["get" + e(n[s])] = t(n[s]), a.prototype["set" + e(n[s])] = function(e) {
                            return function(t) {
                                this[e] = Boolean(t)
                            }
                        }(n[s]);
                        for (var c = 0; c < o.length; c++) a.prototype["get" + e(o[c])] = t(o[c]), a.prototype["set" + e(o[c])] = function(e) {
                            return function(t) {
                                if (n = t, isNaN(parseFloat(n)) || !isFinite(n)) throw new TypeError(e + " must be a Number");
                                var n;
                                this[e] = Number(t)
                            }
                        }(o[c]);
                        for (var l = 0; l < r.length; l++) a.prototype["get" + e(r[l])] = t(r[l]), a.prototype["set" + e(r[l])] = function(e) {
                            return function(t) {
                                this[e] = String(t)
                            }
                        }(r[l]);
                        return a
                    }) ? n.apply(t, o) : n) || (e.exports = r)
                }()
            },
            700: function(e, t, n) {
                var o;
                ! function(r, i) {
                    "use strict";
                    var a = "function",
                        s = "undefined",
                        c = "object",
                        l = "string",
                        u = "major",
                        d = "model",
                        f = "name",
                        p = "type",
                        m = "vendor",
                        h = "version",
                        b = "architecture",
                        w = "console",
                        v = "mobile",
                        g = "tablet",
                        y = "smarttv",
                        E = "wearable",
                        x = "embedded",
                        C = "Amazon",
                        _ = "Apple",
                        A = "ASUS",
                        S = "BlackBerry",
                        k = "Browser",
                        T = "Chrome",
                        N = "Firefox",
                        I = "Google",
                        O = "Huawei",
                        P = "LG",
                        L = "Microsoft",
                        R = "Motorola",
                        D = "Opera",
                        M = "Samsung",
                        j = "Sharp",
                        $ = "Sony",
                        U = "Xiaomi",
                        B = "Zebra",
                        F = "Facebook",
                        V = "Chromium OS",
                        q = "Mac OS",
                        G = function(e) {
                            for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
                            return t
                        },
                        K = function(e, t) {
                            return typeof e === l && -1 !== z(t).indexOf(z(e))
                        },
                        z = function(e) {
                            return e.toLowerCase()
                        },
                        H = function(e, t) {
                            if (typeof e === l) return e = e.replace(/^\s\s*/, ""), typeof t === s ? e : e.substring(0, 350)
                        },
                        Y = function(e, t) {
                            for (var n, o, r, s, l, u, d = 0; d < t.length && !l;) {
                                var f = t[d],
                                    p = t[d + 1];
                                for (n = o = 0; n < f.length && !l && f[n];)
                                    if (l = f[n++].exec(e))
                                        for (r = 0; r < p.length; r++) u = l[++o], typeof(s = p[r]) === c && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, u) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = u ? u.replace(s[1], s[2]) : i : this[s[0]] = u ? s[1].call(this, u, s[2]) : i : 4 === s.length && (this[s[0]] = u ? s[3].call(this, u.replace(s[1], s[2])) : i) : this[s] = u || i;
                                d += 2
                            }
                        },
                        W = function(e, t) {
                            for (var n in t)
                                if (typeof t[n] === c && t[n].length > 0) {
                                    for (var o = 0; o < t[n].length; o++)
                                        if (K(t[n][o], e)) return "?" === n ? i : n
                                } else if (K(t[n], e)) return "?" === n ? i : n;
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
                        J = {
                            browser: [
                                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                                [h, [f, "Chrome"]],
                                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                                [h, [f, "Edge"]],
                                [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                                [f, h],
                                [/opios[\/ ]+([\w\.]+)/i],
                                [h, [f, D + " Mini"]],
                                [/\bopr\/([\w\.]+)/i],
                                [h, [f, D]],
                                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                                [f, h],
                                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                                [h, [f, "UC" + k]],
                                [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
                                [h, [f, "WeChat(Win) Desktop"]],
                                [/micromessenger\/([\w\.]+)/i],
                                [h, [f, "WeChat"]],
                                [/konqueror\/([\w\.]+)/i],
                                [h, [f, "Konqueror"]],
                                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                                [h, [f, "IE"]],
                                [/ya(?:search)?browser\/([\w\.]+)/i],
                                [h, [f, "Yandex"]],
                                [/(avast|avg)\/([\w\.]+)/i],
                                [
                                    [f, /(.+)/, "$1 Secure " + k], h
                                ],
                                [/\bfocus\/([\w\.]+)/i],
                                [h, [f, N + " Focus"]],
                                [/\bopt\/([\w\.]+)/i],
                                [h, [f, D + " Touch"]],
                                [/coc_coc\w+\/([\w\.]+)/i],
                                [h, [f, "Coc Coc"]],
                                [/dolfin\/([\w\.]+)/i],
                                [h, [f, "Dolphin"]],
                                [/coast\/([\w\.]+)/i],
                                [h, [f, D + " Coast"]],
                                [/miuibrowser\/([\w\.]+)/i],
                                [h, [f, "MIUI " + k]],
                                [/fxios\/([-\w\.]+)/i],
                                [h, [f, N]],
                                [/\bqihu|(qi?ho?o?|360)browser/i],
                                [
                                    [f, "360 " + k]
                                ],
                                [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                                [
                                    [f, /(.+)/, "$1 " + k], h
                                ],
                                [/(comodo_dragon)\/([\w\.]+)/i],
                                [
                                    [f, /_/g, " "], h
                                ],
                                [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                                [f, h],
                                [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
                                [f],
                                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                                [
                                    [f, F], h
                                ],
                                [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                                [f, h],
                                [/\bgsa\/([\w\.]+) .*safari\//i],
                                [h, [f, "GSA"]],
                                [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                                [h, [f, "TikTok"]],
                                [/headlesschrome(?:\/([\w\.]+)| )/i],
                                [h, [f, T + " Headless"]],
                                [/ wv\).+(chrome)\/([\w\.]+)/i],
                                [
                                    [f, T + " WebView"], h
                                ],
                                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                                [h, [f, "Android " + k]],
                                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                                [f, h],
                                [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                                [h, [f, "Mobile Safari"]],
                                [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                                [h, f],
                                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                                [f, [h, W, {
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
                                [f, h],
                                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                                [
                                    [f, "Netscape"], h
                                ],
                                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                                [h, [f, N + " Reality"]],
                                [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
                                [f, h],
                                [/(cobalt)\/([\w\.]+)/i],
                                [f, [h, /master.|lts./, ""]]
                            ],
                            cpu: [
                                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                                [
                                    [b, "amd64"]
                                ],
                                [/(ia32(?=;))/i],
                                [
                                    [b, z]
                                ],
                                [/((?:i[346]|x)86)[;\)]/i],
                                [
                                    [b, "ia32"]
                                ],
                                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                                [
                                    [b, "arm64"]
                                ],
                                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                                [
                                    [b, "armhf"]
                                ],
                                [/windows (ce|mobile); ppc;/i],
                                [
                                    [b, "arm"]
                                ],
                                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                                [
                                    [b, /ower/, "", z]
                                ],
                                [/(sun4\w)[;\)]/i],
                                [
                                    [b, "sparc"]
                                ],
                                [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                                [
                                    [b, z]
                                ]
                            ],
                            device: [
                                [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                                [d, [m, M],
                                    [p, g]
                                ],
                                [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                                [d, [m, M],
                                    [p, v]
                                ],
                                [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                                [d, [m, _],
                                    [p, v]
                                ],
                                [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                                [d, [m, _],
                                    [p, g]
                                ],
                                [/(macintosh);/i],
                                [d, [m, _]],
                                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                                [d, [m, j],
                                    [p, v]
                                ],
                                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                                [d, [m, O],
                                    [p, g]
                                ],
                                [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                                [d, [m, O],
                                    [p, v]
                                ],
                                [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                                [
                                    [d, /_/g, " "],
                                    [m, U],
                                    [p, v]
                                ],
                                [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                                [
                                    [d, /_/g, " "],
                                    [m, U],
                                    [p, g]
                                ],
                                [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                                [d, [m, "OPPO"],
                                    [p, v]
                                ],
                                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                                [d, [m, "Vivo"],
                                    [p, v]
                                ],
                                [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                                [d, [m, "Realme"],
                                    [p, v]
                                ],
                                [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                                [d, [m, R],
                                    [p, v]
                                ],
                                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                                [d, [m, R],
                                    [p, g]
                                ],
                                [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                                [d, [m, P],
                                    [p, g]
                                ],
                                [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                                [d, [m, P],
                                    [p, v]
                                ],
                                [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                                [d, [m, "Lenovo"],
                                    [p, g]
                                ],
                                [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                                [
                                    [d, /_/g, " "],
                                    [m, "Nokia"],
                                    [p, v]
                                ],
                                [/(pixel c)\b/i],
                                [d, [m, I],
                                    [p, g]
                                ],
                                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                                [d, [m, I],
                                    [p, v]
                                ],
                                [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                [d, [m, $],
                                    [p, v]
                                ],
                                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                                [
                                    [d, "Xperia Tablet"],
                                    [m, $],
                                    [p, g]
                                ],
                                [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                                [d, [m, "OnePlus"],
                                    [p, v]
                                ],
                                [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                                [d, [m, C],
                                    [p, g]
                                ],
                                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                                [
                                    [d, /(.+)/g, "Fire Phone $1"],
                                    [m, C],
                                    [p, v]
                                ],
                                [/(playbook);[-\w\),; ]+(rim)/i],
                                [d, m, [p, g]],
                                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                                [d, [m, S],
                                    [p, v]
                                ],
                                [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                                [d, [m, A],
                                    [p, g]
                                ],
                                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                                [d, [m, A],
                                    [p, v]
                                ],
                                [/(nexus 9)/i],
                                [d, [m, "HTC"],
                                    [p, g]
                                ],
                                [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                                [m, [d, /_/g, " "],
                                    [p, v]
                                ],
                                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                                [d, [m, "Acer"],
                                    [p, g]
                                ],
                                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                                [d, [m, "Meizu"],
                                    [p, v]
                                ],
                                [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                                [m, d, [p, v]],
                                [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                                [m, d, [p, g]],
                                [/(surface duo)/i],
                                [d, [m, L],
                                    [p, g]
                                ],
                                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                                [d, [m, "Fairphone"],
                                    [p, v]
                                ],
                                [/(u304aa)/i],
                                [d, [m, "AT&T"],
                                    [p, v]
                                ],
                                [/\bsie-(\w*)/i],
                                [d, [m, "Siemens"],
                                    [p, v]
                                ],
                                [/\b(rct\w+) b/i],
                                [d, [m, "RCA"],
                                    [p, g]
                                ],
                                [/\b(venue[\d ]{2,7}) b/i],
                                [d, [m, "Dell"],
                                    [p, g]
                                ],
                                [/\b(q(?:mv|ta)\w+) b/i],
                                [d, [m, "Verizon"],
                                    [p, g]
                                ],
                                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                                [d, [m, "Barnes & Noble"],
                                    [p, g]
                                ],
                                [/\b(tm\d{3}\w+) b/i],
                                [d, [m, "NuVision"],
                                    [p, g]
                                ],
                                [/\b(k88) b/i],
                                [d, [m, "ZTE"],
                                    [p, g]
                                ],
                                [/\b(nx\d{3}j) b/i],
                                [d, [m, "ZTE"],
                                    [p, v]
                                ],
                                [/\b(gen\d{3}) b.+49h/i],
                                [d, [m, "Swiss"],
                                    [p, v]
                                ],
                                [/\b(zur\d{3}) b/i],
                                [d, [m, "Swiss"],
                                    [p, g]
                                ],
                                [/\b((zeki)?tb.*\b) b/i],
                                [d, [m, "Zeki"],
                                    [p, g]
                                ],
                                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                                [
                                    [m, "Dragon Touch"], d, [p, g]
                                ],
                                [/\b(ns-?\w{0,9}) b/i],
                                [d, [m, "Insignia"],
                                    [p, g]
                                ],
                                [/\b((nxa|next)-?\w{0,9}) b/i],
                                [d, [m, "NextBook"],
                                    [p, g]
                                ],
                                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                                [
                                    [m, "Voice"], d, [p, v]
                                ],
                                [/\b(lvtel\-)?(v1[12]) b/i],
                                [
                                    [m, "LvTel"], d, [p, v]
                                ],
                                [/\b(ph-1) /i],
                                [d, [m, "Essential"],
                                    [p, v]
                                ],
                                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                                [d, [m, "Envizen"],
                                    [p, g]
                                ],
                                [/\b(trio[-\w\. ]+) b/i],
                                [d, [m, "MachSpeed"],
                                    [p, g]
                                ],
                                [/\btu_(1491) b/i],
                                [d, [m, "Rotor"],
                                    [p, g]
                                ],
                                [/(shield[\w ]+) b/i],
                                [d, [m, "Nvidia"],
                                    [p, g]
                                ],
                                [/(sprint) (\w+)/i],
                                [m, d, [p, v]],
                                [/(kin\.[onetw]{3})/i],
                                [
                                    [d, /\./g, " "],
                                    [m, L],
                                    [p, v]
                                ],
                                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                                [d, [m, B],
                                    [p, g]
                                ],
                                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                                [d, [m, B],
                                    [p, v]
                                ],
                                [/smart-tv.+(samsung)/i],
                                [m, [p, y]],
                                [/hbbtv.+maple;(\d+)/i],
                                [
                                    [d, /^/, "SmartTV"],
                                    [m, M],
                                    [p, y]
                                ],
                                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                                [
                                    [m, P],
                                    [p, y]
                                ],
                                [/(apple) ?tv/i],
                                [m, [d, _ + " TV"],
                                    [p, y]
                                ],
                                [/crkey/i],
                                [
                                    [d, T + "cast"],
                                    [m, I],
                                    [p, y]
                                ],
                                [/droid.+aft(\w+)( bui|\))/i],
                                [d, [m, C],
                                    [p, y]
                                ],
                                [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                                [d, [m, j],
                                    [p, y]
                                ],
                                [/(bravia[\w ]+)( bui|\))/i],
                                [d, [m, $],
                                    [p, y]
                                ],
                                [/(mitv-\w{5}) bui/i],
                                [d, [m, U],
                                    [p, y]
                                ],
                                [/Hbbtv.*(technisat) (.*);/i],
                                [m, d, [p, y]],
                                [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                                [
                                    [m, H],
                                    [d, H],
                                    [p, y]
                                ],
                                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                                [
                                    [p, y]
                                ],
                                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                                [m, d, [p, w]],
                                [/droid.+; (shield) bui/i],
                                [d, [m, "Nvidia"],
                                    [p, w]
                                ],
                                [/(playstation [345portablevi]+)/i],
                                [d, [m, $],
                                    [p, w]
                                ],
                                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                                [d, [m, L],
                                    [p, w]
                                ],
                                [/((pebble))app/i],
                                [m, d, [p, E]],
                                [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                                [d, [m, _],
                                    [p, E]
                                ],
                                [/droid.+; (glass) \d/i],
                                [d, [m, I],
                                    [p, E]
                                ],
                                [/droid.+; (wt63?0{2,3})\)/i],
                                [d, [m, B],
                                    [p, E]
                                ],
                                [/(quest( 2| pro)?)/i],
                                [d, [m, F],
                                    [p, E]
                                ],
                                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                                [m, [p, x]],
                                [/(aeobc)\b/i],
                                [d, [m, C],
                                    [p, x]
                                ],
                                [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                                [d, [p, v]],
                                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                                [d, [p, g]],
                                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                                [
                                    [p, g]
                                ],
                                [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                                [
                                    [p, v]
                                ],
                                [/(android[-\w\. ]{0,9});.+buil/i],
                                [d, [m, "Generic"]]
                            ],
                            engine: [
                                [/windows.+ edge\/([\w\.]+)/i],
                                [h, [f, "EdgeHTML"]],
                                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                [h, [f, "Blink"]],
                                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                                [f, h],
                                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                                [h, f]
                            ],
                            os: [
                                [/microsoft (windows) (vista|xp)/i],
                                [f, h],
                                [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                                [f, [h, W, X]],
                                [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                                [
                                    [f, "Windows"],
                                    [h, W, X]
                                ],
                                [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                                [
                                    [h, /_/g, "."],
                                    [f, "iOS"]
                                ],
                                [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                                [
                                    [f, q],
                                    [h, /_/g, "."]
                                ],
                                [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                                [h, f],
                                [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                                [f, h],
                                [/\(bb(10);/i],
                                [h, [f, S]],
                                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                                [h, [f, "Symbian"]],
                                [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                                [h, [f, N + " OS"]],
                                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                                [h, [f, "webOS"]],
                                [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                                [h, [f, "watchOS"]],
                                [/crkey\/([\d\.]+)/i],
                                [h, [f, T + "cast"]],
                                [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                                [
                                    [f, V], h
                                ],
                                [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                                [f, h],
                                [/(sunos) ?([\w\.\d]*)/i],
                                [
                                    [f, "Solaris"], h
                                ],
                                [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                                [f, h]
                            ]
                        },
                        Z = function(e, t) {
                            if (typeof e === c && (t = e, e = i), !(this instanceof Z)) return new Z(e, t).getResult();
                            var n = typeof r !== s && r.navigator ? r.navigator : i,
                                o = e || (n && n.userAgent ? n.userAgent : ""),
                                w = n && n.userAgentData ? n.userAgentData : i,
                                y = t ? function(e, t) {
                                    var n = {};
                                    for (var o in e) t[o] && t[o].length % 2 == 0 ? n[o] = t[o].concat(e[o]) : n[o] = e[o];
                                    return n
                                }(J, t) : J,
                                E = n && n.userAgent == o;
                            return this.getBrowser = function() {
                                var e, t = {};
                                return t[f] = i, t[h] = i, Y.call(t, o, y.browser), t[u] = typeof(e = t[h]) === l ? e.replace(/[^\d\.]/g, "").split(".")[0] : i, E && n && n.brave && typeof n.brave.isBrave == a && (t[f] = "Brave"), t
                            }, this.getCPU = function() {
                                var e = {};
                                return e[b] = i, Y.call(e, o, y.cpu), e
                            }, this.getDevice = function() {
                                var e = {};
                                return e[m] = i, e[d] = i, e[p] = i, Y.call(e, o, y.device), E && !e[p] && w && w.mobile && (e[p] = v), E && "Macintosh" == e[d] && n && typeof n.standalone !== s && n.maxTouchPoints && n.maxTouchPoints > 2 && (e[d] = "iPad", e[p] = g), e
                            }, this.getEngine = function() {
                                var e = {};
                                return e[f] = i, e[h] = i, Y.call(e, o, y.engine), e
                            }, this.getOS = function() {
                                var e = {};
                                return e[f] = i, e[h] = i, Y.call(e, o, y.os), E && !e[f] && w && "Unknown" != w.platform && (e[f] = w.platform.replace(/chrome os/i, V).replace(/macos/i, q)), e
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
                                return o
                            }, this.setUA = function(e) {
                                return o = typeof e === l && e.length > 350 ? H(e, 350) : e, this
                            }, this.setUA(o), this
                        };
                    Z.VERSION = "1.0.36", Z.BROWSER = G([f, h, u]), Z.CPU = G([b]), Z.DEVICE = G([d, m, p, w, v, y, g, E, x]), Z.ENGINE = Z.OS = G([f, h]), typeof t !== s ? (e.exports && (t = e.exports = Z), t.UAParser = Z) : n.amdO ? (o = function() {
                        return Z
                    }.call(t, n, t, e)) === i || (e.exports = o) : typeof r !== s && (r.UAParser = Z);
                    var Q = typeof r !== s && (r.jQuery || r.Zepto);
                    if (Q && !Q.ua) {
                        var ee = new Z;
                        Q.ua = ee.getResult(), Q.ua.get = function() {
                            return ee.getUA()
                        }, Q.ua.set = function(e) {
                            ee.setUA(e);
                            var t = ee.getResult();
                            for (var n in t) Q.ua[n] = t[n]
                        }
                    }
                }("object" == typeof window ? window : this)
            }
        },
        t = {};

    function n(o) {
        var r = t[o];
        if (void 0 !== r) return r.exports;
        var i = t[o] = {
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, n), i.exports
    }
    n.amdO = {}, (() => {
        "use strict";
        const e = "product_added_to_cart",
            t = "product_removed_from_cart",
            o = "payment_info_submitted";

        function r() {
            return window
        }
        let i, a = "OFF";

        function s(e, t, n) {
            const {
                jQuery: o
            } = r();
            o && o(e).bind ? o(e).bind(t, n) : e.addEventListener && e.addEventListener(t, n)
        }

        function c(e, t) {
            "ON" === a && console && console.warn && console.warn(`[pixel_shop_events_listener] Error in ${e}:  ${t.message}`)
        }

        function l(e) {
            s(window, "load", (() => {
                for (const t of document.forms) e(t)
            }))
        }

        function u(e, t, n) {
            if (t.length !== n.length) throw Error("Payload body and response have different number of items");
            t.forEach(((t, o) => {
                let r = 1;
                try {
                    r = parseInt(n[o].quantity, 10) || 1
                } catch (i) {
                    c("handleBulkItemCartAddResponse", i)
                }
                f(e, t, r)
            }))
        }

        function d(e, t, n, o, i) {
            const a = ((null === (c = null === (l = r()) || void 0 === l ? void 0 : l.ShopifyAnalytics) || void 0 === c ? void 0 : c.meta) || {}).currency,
                s = {
                    id: String("add" === i ? t.id : t.variant_id),
                    image: {
                        src: t.image
                    },
                    price: {
                        amount: t.price / ("add" === i ? 100 : 1),
                        currencyCode: a
                    },
                    product: {
                        id: String(t.product_id),
                        title: t.title,
                        vendor: t.vendor,
                        type: t.product_type,
                        untranslatedTitle: t.untranslated_product_title,
                        url: t.url
                    },
                    sku: t.sku,
                    title: t.variant_title,
                    untranslatedTitle: t.untranslated_variant_title
                };
            var c, l;
            e(o, {
                cartLine: {
                    cost: {
                        totalAmount: {
                            amount: s.price.amount * n,
                            currencyCode: a
                        }
                    },
                    merchandise: s,
                    quantity: n
                }
            })
        }

        function f(t, n, o, r = "add") {
            d(t, n, o, e, r)
        }

        function p(e, n) {
            const o = n.items_added,
                r = n.items_removed;
            o.forEach((t => {
                f(e, t, null == t ? void 0 : t.quantity, "change")
            })), r.forEach((n => {
                ! function(e, n, o, r) {
                    d(e, n, o, t, "change")
                }(e, n, null == n ? void 0 : n.quantity)
            }))
        }

        function m(e) {
            if (!e) return 1;
            try {
                return JSON.parse(e).quantity || 1
            } catch (t) {
                if (e instanceof FormData) {
                    if (e.has("quantity")) return Number(e.get("quantity"))
                } else {
                    const t = e.split("&");
                    for (const e of t) {
                        const t = e.split("=");
                        if ("quantity" === t[0]) return Number(t[1])
                    }
                }
            }
            return 1
        }
        class h {
            static handleXhrOpen() {}
            static handleXhrDone(e) {
                try {
                    const t = document.createElement("a");
                    t.href = e.url;
                    const n = t.pathname ? t.pathname : e.url;
                    h.ADD_TO_CART_REGEX.test(n) ? h.parsePayloadResponse(e, (t => {
                        const n = Object.keys(t);
                        if (1 === n.length && "items" === n[0]) {
                            const n = t.items;
                            let r;
                            try {
                                r = JSON.parse(e.body).items
                            } catch (o) {
                                r = function(e, t) {
                                    const n = new Array(t);
                                    for (let o = 0; o < t; o++) n[o] = {};
                                    for (const o of decodeURI(e).split("&")) {
                                        const e = o.split("="),
                                            t = e[0].match(/items\[(\d+)\]\[(\w+)\].*/);
                                        if (t) {
                                            const o = Number(t[1]),
                                                r = t[2];
                                            "quantity" === r ? n[o].quantity = e[1] : "id" === r && (n[o].id = e[1])
                                        }
                                    }
                                    return n
                                }(e.body, n.length)
                            }
                            u(e.publish, n, r)
                        } else f(e.publish, t, m(e.body))
                    })) : h.CHANGE_TO_CART_REGEX.test(n) && h.parsePayloadResponse(e, (t => {
                        p(e.publish, t)
                    }))
                } catch (t) {
                    c("handleXhrDone", t)
                }
            }
            static parseBlobToJson(e, t) {
                const n = new FileReader;
                n.addEventListener("loadend", (() => {
                    t(JSON.parse(String.fromCharCode(...new Uint8Array(n.result))))
                })), n.readAsArrayBuffer(e)
            }
            static parsePayloadResponse(e, t) {
                e.xhr.response instanceof Blob ? h.parseBlobToJson(e.xhr.response, t) : e.xhr.responseText && t(JSON.parse(e.xhr.responseText))
            }
            constructor(e, t, n, o, r) {
                this.oldOnReadyStateChange = void 0, this.xhr = void 0, this.url = void 0, this.method = void 0, this.body = void 0, this.publish = void 0, this.xhr = e, this.url = t, this.method = n, this.body = o, this.publish = r
            }
            onReadyStateChange() {
                this.xhr.readyState === XMLHttpRequest.DONE && h.handleXhrDone({
                    method: this.method,
                    url: this.url,
                    body: this.body,
                    xhr: this.xhr,
                    publish: this.publish
                }), this.oldOnReadyStateChange && this.oldOnReadyStateChange.call(this.xhr, new Event("oldOnReadyStateChange"))
            }
        }

        function b(t, n) {
            ! function(e, t) {
                const n = e.prototype.open,
                    o = e.prototype.send;
                e.prototype.open = function(e, t) {
                    this._url = t, this._method = e, n.apply(this, arguments)
                }, e.prototype.send = function(e) {
                    if (!(e instanceof Document)) {
                        const n = new h(this, this._url, this._method, e || "", t);
                        this.addEventListener ? this.addEventListener("readystatechange", n.onReadyStateChange.bind(n), !1) : (n.oldOnReadyStateChange = this.onreadystatechange, this.onreadystatechange = n.onReadyStateChange)
                    }
                    o.call(this, e)
                }
            }(XMLHttpRequest, t),
            function(e, t) {
                const n = e.fetch;

                function o(e) {
                    c("handleFetchRequest", e)
                }
                "function" == typeof n && (e.fetch = function(...e) {
                    return n.apply(this, Array.prototype.slice.call(e)).then((e => {
                        if (!e.ok) return e;
                        const n = document.createElement("a");
                        n.href = e.url;
                        const r = n.pathname ? n.pathname : e.url;
                        try {
                            if (h.ADD_TO_CART_REGEX.test(r)) {
                                try {
                                    const n = JSON.parse(arguments[1].body);
                                    if (Object.keys(n).includes("items")) return function(e, n) {
                                        e.clone().json().then((e => {
                                            const o = n.items,
                                                r = e.items;
                                            return u(t, r, o), e
                                        })).catch(o)
                                    }(e, n), e
                                } catch (i) {
                                    o(i)
                                }! function(e, n) {
                                    const r = m(n);
                                    e.clone().json().then((e => f(t, e, r))).catch(o)
                                }(e, arguments[1].body)
                            } else h.CHANGE_TO_CART_REGEX.test(r) && function(e) {
                                e.clone().json().then((e => {
                                    p(t, e)
                                })).catch(o)
                            }(e)
                        } catch (i) {
                            o(i)
                        }
                        return e
                    }))
                })
            }(r(), t), l((o => {
                const r = o.getAttribute("action");
                r && r.indexOf("/cart/add") >= 0 && s(o, "submit", (o => {
                    ! function(t, n, o) {
                        const r = n || window.event;
                        if (r.defaultPrevented || r.isDefaultPrevented && r.isDefaultPrevented()) return;
                        const i = r.currentTarget || r.srcElement;
                        if (i && i instanceof Element && (i.getAttribute("action") || i.getAttribute("href"))) try {
                            const n = function(e) {
                                let t;
                                const n = e.querySelector('[name="id"]');
                                return n instanceof HTMLSelectElement && n.options ? t = n.options[n.selectedIndex] : (n instanceof HTMLOptionElement || n instanceof HTMLInputElement) && (t = n), t
                            }(i);
                            if (!n) return;
                            const r = n.value,
                                a = function(e) {
                                    const t = e.querySelector('[name="quantity"]');
                                    return t instanceof HTMLInputElement ? Number(t.value) : 1
                                }(i),
                                s = function(e, t) {
                                    var n;
                                    let o;
                                    const r = null === (n = t.productVariants) || void 0 === n ? void 0 : n.filter((t => t.id === e));
                                    if (!r || !r.length) throw new Error("Product variant not found");
                                    return o = { ...r[0]
                                    }, o
                                }(r, o),
                                c = {
                                    cost: {
                                        totalAmount: {
                                            amount: s.price.amount * a,
                                            currencyCode: s.price.currencyCode
                                        }
                                    },
                                    merchandise: s,
                                    quantity: a
                                };
                            t(e, {
                                cartLine: c
                            })
                        } catch (a) {
                            c("handleSubmitCartAdd", a)
                        }
                    }(t, o, n)
                }))
            }))
        }

        function w(e, t, n) {
            var r;
            null != n && n.logLevel && (r = n.logLevel, a = r), b(e, t),
                function(e, t) {
                    l((n => {
                        const r = n.querySelector('[name="previous_step"]');
                        r && r instanceof HTMLInputElement && "payment_method" === r.value && s(document.body, "submit", (n => {
                            ! function(e, t, n) {
                                const r = t || window.event,
                                    i = r.target || r.srcElement;
                                if (i && i instanceof HTMLFormElement && i.getAttribute("action") && null !== i.getAttribute("data-payment-form")) try {
                                    const t = n.checkout;
                                    if (!t) throw new Error("Checkout data not found");
                                    e(o, {
                                        checkout: t
                                    })
                                } catch (a) {
                                    c("handleSubmitToPaymentAdd", a)
                                }
                            }(e, n, t)
                        }))
                    }))
                }(e, t)
        }
        var v;
        h.ADD_TO_CART_REGEX = /^(?:\/[a-zA-Z]+(?:-[a-zA-Z]+)?)?\/cart\/add(?:\.js|\.json)?$/, h.CHANGE_TO_CART_REGEX = /^(?:\/[a-zA-Z]+(?:-[a-zA-Z]+)?)?\/cart\/change(?:\.js|\.json)?$/, (v = i || (i = {})).TRACKING_ACCEPTED = "trackingConsentAccepted", v.TRACKING_DECLINED = "trackingConsentDeclined", v.MARKETING_ACCEPTED = "firstPartyMarketingConsentAccepted", v.SALE_OF_DATA_ACCEPTED = "thirdPartyMarketingConsentAccepted", v.ANALYTICS_ACCEPTED = "analyticsConsentAccepted", v.PREFERENCES_ACCEPTED = "preferencesConsentAccepted", v.MARKETING_DECLINED = "firstPartyMarketingConsentDeclined", v.SALE_OF_DATA_DECLINED = "thirdPartyMarketingConsentDeclined", v.ANALYTICS_DECLINED = "analyticsConsentDeclined", v.PREFERENCES_DECLINED = "preferencesConsentDeclined", v.CONSENT_COLLECTED = "visitorConsentCollected", v.CONSENT_TRACKING_API_LOADED = "consentTrackingApiLoaded";
        const g = "2.1";
        let y, E, x, C, _, A, S, k;
        var T, N, I, O, P;
        ! function(e) {
            e.ACCEPTED = "yes", e.DECLINED = "no", e.NO_INTERACTION = "no_interaction", e.NO_VALUE = ""
        }(y || (y = {})), (P = E || (E = {})).NO_VALUE = "", P.ACCEPTED = "1", P.DECLINED = "0", (O = x || (x = {})).GDPR = "GDPR", O.CCPA = "CCPA", O.NO_VALUE = "",
            function(e) {
                e.PREFERENCES = "p", e.ANALYTICS = "a", e.MARKETING = "m", e.SALE_OF_DATA = "t"
            }(C || (C = {})), (I = _ || (_ = {})).GDPR = "GDPR", I.GDPR_BLOCK_ALL = "GDPR_BLOCK_ALL", I.CCPA = "CCPA", (N = A || (A = {})).MARKETING = "m", N.ANALYTICS = "a", N.PREFERENCES = "p", N.SALE_OF_DATA = "s", (T = S || (S = {})).MARKETING = "marketing", T.ANALYTICS = "analytics", T.PREFERENCES = "preferences", T.SALE_OF_DATA = "sale_of_data", T.EMAIL = "email",
            function(e) {
                e.HEADLESS_STOREFRONT = "headlessStorefront", e.ROOT_DOMAIN = "rootDomain", e.CHECKOUT_ROOT_DOMAIN = "checkoutRootDomain", e.STOREFRONT_ROOT_DOMAIN = "storefrontRootDomain", e.STOREFRONT_ACCESS_TOKEN = "storefrontAccessToken"
            }(k || (k = {}));
        const L = ["lim", "v", "con", "reg"];
        let R = {};

        function D(e, t = null) {
            return e in R || function(e) {
                const t = document.cookie ? document.cookie.split("; ") : [];
                R[e] = void 0;
                for (let n = 0; n < t.length; n++) {
                    const [o, r] = t[n].split("=");
                    if (e === decodeURIComponent(o)) return R[e] = JSON.parse(decodeURIComponent(r)), R[e]
                }
            }(e) || function(e, t) {
                if (null === t) return;
                R[e] = void 0;
                let n, o, r = document.head.querySelector(`meta[name=${t}]`);
                if (r instanceof HTMLMetaElement) {
                    n = r.content;
                    try {
                        const e = n.replace(/1/g, "true").replace(/0/g, "false").split(";").map((e => e.trim())).map((e => e.split("=").map((e => e.trim()))));
                        if (o = Object.fromEntries(e), o.purposes) {
                            const e = o.purposes.split(/(true|false)/).filter(Boolean),
                                t = {};
                            for (let n = 0; n < e.length; n += 2) t[e[n]] = JSON.parse(e[n + 1]);
                            o.purposes = t
                        }
                        for (let [t, n] of Object.entries(o)) "true" === n && (o[t] = !0), "false" === n && (o[t] = !1)
                    } catch (i) {
                        return
                    }
                    R[e] = o
                }
            }(e, t), R[e]
        }

        function M(e) {
            return e === encodeURIComponent(decodeURIComponent(e))
        }

        function j(e, t, n, o) {
            if (!M(o)) throw new TypeError("Cookie value is not correctly URI encoded.");
            if (!M(e)) throw new TypeError("Cookie name is not correctly URI encoded.");
            let r = `${e}=${o}`;
            r += "; path=/", r += `; domain=${t}`, r += `; expires=${new Date((new Date).getTime()+n).toUTCString()}`, r += "; secure", document.cookie = r, R[e] = JSON.parse(decodeURIComponent(o))
        }

        function $() {
            R = {}
        }

        function U(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function B(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? U(Object(n), !0).forEach((function(t) {
                    F(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function F(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        const V = "_tracking_consent";

        function q() {
            try {
                let e = function() {
                    const e = D(V);
                    if (void 0 !== e && (t = e).v === g && function(e, t) {
                            const n = t.slice().sort();
                            return e.length === t.length && e.slice().sort().every(((e, t) => e === n[t]))
                        }(Object.keys(t).filter((e => "region" !== e)), L)) return e;
                    var t
                }();
                if (!e) return;
                return e
            } catch (e) {
                return
            }
        }

        function G() {
            return {
                m: H(A.MARKETING),
                a: H(A.ANALYTICS),
                p: H(A.PREFERENCES),
                s: H(A.SALE_OF_DATA)
            }
        }

        function K() {
            return G()[A.SALE_OF_DATA]
        }

        function z(e = null) {
            return null === e && (e = q()), void 0 === e
        }

        function H(e) {
            const t = q();
            if (!t) return E.NO_VALUE;
            const n = t.con.CMP;
            return n ? n[e] : E.NO_VALUE
        }
        const Y = "_cmp_a",
            W = "shopify-cmp-metadata";

        function X() {
            return D(Y, W)
        }

        function J(e) {
            const t = X();
            if (!t) return !0;
            const n = t.purposes[e];
            return "boolean" != typeof n || n
        }

        function Z() {
            return J(C.PREFERENCES)
        }

        function Q() {
            return J(C.ANALYTICS)
        }

        function ee() {
            return J(C.MARKETING)
        }

        function te() {
            return J(C.SALE_OF_DATA)
        }
        const ne = {
            "": [],
            GDPR: [_.GDPR, _.GDPR_BLOCK_ALL],
            CCPA: [_.CCPA]
        };

        function oe(e) {
            void 0 !== e.consent ? ie({
                [C.PREFERENCES]: e.consent,
                [C.ANALYTICS]: e.consent,
                [C.MARKETING]: e.consent,
                [C.SALE_OF_DATA]: e.consent
            }) : void 0 !== e.granular_consent && ie({
                [C.PREFERENCES]: Z(),
                [C.ANALYTICS]: Q(),
                [C.MARKETING]: ee(),
                [C.SALE_OF_DATA]: te()
            })
        }

        function re(e, t) {
            document.dispatchEvent(new CustomEvent(e, {
                detail: t || {}
            }))
        }

        function ie(e) {
            const t = e[C.MARKETING],
                n = e[C.SALE_OF_DATA],
                o = e[C.ANALYTICS],
                r = e[C.PREFERENCES];
            !0 === t ? re(i.MARKETING_ACCEPTED) : !1 === t && re(i.MARKETING_DECLINED), !0 === n ? re(i.SALE_OF_DATA_ACCEPTED) : !1 === n && re(i.SALE_OF_DATA_DECLINED), !0 === o ? re(i.ANALYTICS_ACCEPTED) : !1 === o && re(i.ANALYTICS_DECLINED), !0 === r ? re(i.PREFERENCES_ACCEPTED) : !1 === r && re(i.PREFERENCES_DECLINED);
            const a = function(e) {
                return {
                    marketingAllowed: e[C.MARKETING],
                    saleOfDataAllowed: e[C.SALE_OF_DATA],
                    analyticsAllowed: e[C.ANALYTICS],
                    preferencesAllowed: e[C.PREFERENCES]
                }
            }(e);
            re(i.CONSENT_COLLECTED, a);
            const s = [o, r, t, n];
            s.every((e => !0 === e)) && re(i.TRACKING_ACCEPTED), s.every((e => !1 === e)) && re(i.TRACKING_DECLINED)
        }

        function ae(e, t) {
            const n = new XMLHttpRequest,
                o = JSON.stringify(e);
            n.open("POST", "/set_tracking_consent.json", !0), n.setRequestHeader("Content-Type", "application/json"), n.onreadystatechange = function() {
                if (4 !== n.readyState) return;
                $();
                const o = function(e) {
                    try {
                        return JSON.parse(e)
                    } catch (t) {
                        return {
                            error: "Unknown error"
                        }
                    }
                }(n.responseText);
                var r;
                0 === (r = n.status) || 200 >= r && r < 400 ? (oe(e), t(null, o)) : t(o)
            }, n.send(o)
        }

        function se(e) {
            return {
                query: `query { consentManagement { cookies(visitorConsent: ${JSON.stringify({marketing:e.marketing,analytics:e.analytics,preferences:e.preferences,saleOfData:e.sale_of_data}).replace(/"/g,"")}) { answersCookie trackingConsentCookie } } }`,
                variables: {}
            }
        }

        function ce(e, t) {
            const n = e.granular_consent,
                o = {
                    headers: {
                        "content-type": "application/json",
                        "x-shopify-storefront-access-token": n.storefrontAccessToken
                    },
                    body: JSON.stringify(se(n)),
                    method: "POST"
                };
            fetch(`https://${n.checkoutRootDomain}/api/unstable/graphql.json`, o).then((e => {
                if (e.ok) return e.json();
                throw new Error("Server error")
            })).then((o => {
                const r = 31536e6,
                    i = "." + (n.checkoutRootDomain || window.location.hostname),
                    a = "." + (n.storefrontRootDomain || window.location.hostname),
                    s = o.data.consentManagement.cookies.trackingConsentCookie,
                    c = o.data.consentManagement.cookies.answersCookie;
                j(V, i, r, s), j(Y, i, r, c), a !== i && (j(V, a, r, s), j(Y, a, r, c)), oe(e), t(null, o)
            })).catch((e => {
                t({
                    error: "Error while setting headless consent: " + e.message
                })
            }))
        }

        function le() {
            if (z()) return y.NO_VALUE;
            const e = G();
            return e[A.MARKETING] === E.ACCEPTED && e[A.ANALYTICS] === E.ACCEPTED ? y.ACCEPTED : e[A.MARKETING] === E.DECLINED || e[A.ANALYTICS] === E.DECLINED ? y.DECLINED : y.NO_INTERACTION
        }

        function ue() {
            const e = function() {
                const e = q();
                return z(e) ? x.NO_VALUE : e.reg
            }();
            return e in x ? e : x.NO_VALUE
        }

        function de() {
            return function() {
                const e = q();
                return z(e) ? {
                    limit: []
                } : {
                    limit: e.lim
                }
            }()
        }

        function fe(e) {
            return we(_.GDPR_BLOCK_ALL) && e ? me() ? document.referrer : "" : null
        }

        function pe(e) {
            return we(_.GDPR_BLOCK_ALL) && e ? me() ? window.location.pathname + window.location.search : "/" : null
        }

        function me() {
            if ("" === document.referrer) return !0;
            const e = document.createElement("a");
            return e.href = document.referrer, window.location.hostname != e.hostname
        }

        function he() {
            const e = ue();
            if (e === x.NO_VALUE) return !1;
            const t = de();
            return 0 !== t.limit.length && t.limit.some((t => function(e, t) {
                return ne[e].includes(t)
            }(e, t)))
        }

        function be() {
            return !!z() || function() {
                if (!we(_.GDPR) && !we(_.GDPR_BLOCK_ALL)) return !0;
                const e = G();
                return e[A.MARKETING] === E.ACCEPTED && e[A.ANALYTICS] === E.ACCEPTED || e[A.MARKETING] !== E.DECLINED && e[A.ANALYTICS] !== E.DECLINED && ue() !== x.GDPR
            }()
        }

        function we(e) {
            return de().limit.includes(e)
        }

        function ve() {
            return ue() !== x.CCPA ? null : we(_.CCPA) ? "string" == typeof navigator.globalPrivacyControl ? "1" !== navigator.globalPrivacyControl : "boolean" == typeof navigator.globalPrivacyControl ? !navigator.globalPrivacyControl : null : null
        }

        function ge() {
            return !1 === ve() ? y.DECLINED : (e = K(), z() ? y.NO_VALUE : e === E.NO_VALUE ? y.NO_INTERACTION : function(e) {
                switch (e) {
                    case E.ACCEPTED:
                        return y.ACCEPTED;
                    case E.DECLINED:
                        return y.DECLINED;
                    default:
                        return y.NO_VALUE
                }
            }(e));
            var e
        }
        const ye = {
            getTrackingConsent: le,
            setTrackingConsent: function(e, t) {
                if (z() && console.warn("Shop is not configured to block privacy regulation in online store settings."), function(e) {
                        if ("boolean" != typeof e && "object" != typeof e) throw TypeError("setTrackingConsent must be called with a boolean or object consent value");
                        if ("object" == typeof e) {
                            const t = Object.keys(e);
                            if (0 === t.length) throw TypeError("The submitted consent object is empty.");
                            const n = [S.MARKETING, S.ANALYTICS, S.PREFERENCES, S.SALE_OF_DATA, S.EMAIL, k.ROOT_DOMAIN, k.CHECKOUT_ROOT_DOMAIN, k.STOREFRONT_ROOT_DOMAIN, k.STOREFRONT_ACCESS_TOKEN, k.HEADLESS_STOREFRONT];
                            for (const e of t)
                                if (!n.includes(e)) throw TypeError(`The submitted consent object should only contain the following keys: ${n.join(", ")}. Extraneous key: ${e}.`)
                        }
                    }(e), "function" != typeof t) throw TypeError("setTrackingConsent must be called with a callback function");
                if ("object" == typeof e) {
                    const n = fe(e.analytics),
                        o = pe(e.analytics);
                    return (e.storefrontAccessToken ? ce : ae)(B(B({
                        granular_consent: e
                    }, null !== n && {
                        referrer: n
                    }), null !== o && {
                        landing_page: o
                    }), t)
                } {
                    const n = fe(e),
                        o = pe(e);
                    return ae(B(B({
                        consent: e
                    }, null !== n && {
                        referrer: n
                    }), null !== o && {
                        landing_page: o
                    }), t)
                }
            },
            userCanBeTracked: be,
            getRegulation: ue,
            isRegulationEnforced: he,
            getShopPrefs: de,
            shouldShowGDPRBanner: function() {
                return ue() === x.GDPR && he() && le() === y.NO_INTERACTION
            },
            userDataCanBeSold: function() {
                const e = ve(),
                    t = !we(_.CCPA) || K() !== E.DECLINED;
                return null !== e && !1 !== t ? e : !!z() || !1 !== be() && t
            },
            setCCPAConsent: function(e, t) {
                if ("boolean" != typeof e) throw TypeError("setCCPAConsent must be called with a boolean consent value");
                if ("function" != typeof t) throw TypeError("setCCPAConsent must be called with a callback function");
                return ae({
                    ccpa_consent: e
                }, t)
            },
            getCCPAConsent: ge,
            GPCSignal: ve,
            shouldShowCCPABanner: function() {
                return ue() === x.CCPA && de().limit.includes(_.CCPA) && ge() === y.NO_INTERACTION
            },
            haveAnalyticsConsent: function() {
                return Q()
            },
            havePreferencesConsent: function() {
                return Z()
            },
            haveMarketingConsent: function() {
                return ee()
            },
            haveSaleOfDataConsent: function() {
                return te()
            },
            getCCPAConsentValue: K,
            merchantEnforcingRegulationLimit: we,
            shouldShowBanner: function() {
                return function() {
                    const e = X();
                    return !!e && "boolean" == typeof e.display_banner && e.display_banner
                }() && H(A.ANALYTICS) === E.NO_VALUE && H(A.MARKETING) === E.NO_VALUE && H(A.PREFERENCES) === E.NO_VALUE
            },
            saleOfDataRegion: function() {
                return function() {
                    const e = X();
                    return e && e.sale_of_data_region || !1
                }()
            }
        };

        function Ee() {
            return ye.userCanBeTracked()
        }
        const xe = "sh",
            Ce = "shu",
            _e = "wpm",
            Ae = "trekkie";
        let Se, ke;

        function Te(e) {
            return `${e||xe}-${function(){const e="xxxx-4xxx-xxxx-xxxxxxxxxxxx";let t="";try{const n=window.crypto,o=new Uint16Array(31);n.getRandomValues(o);let r=0;t=e.replace(/[x]/g,(e=>{const t=o[r]%16;return r++,("x"===e?t:3&t|8).toString(16)})).toUpperCase()}catch(n){t=e.replace(/[x]/g,(e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})).toUpperCase()}return`
            $ {
                function() {
                    let e = 0,
                        t = 0;
                    e = (new Date).getTime() >>> 0;
                    try {
                        t = performance.now() >>> 0
                    } catch (n) {
                        t = 0
                    }
                    return Math.abs(e + t).toString(16).toLowerCase().padStart(8, "0")
                }()
            } - $ {
                t
            }
            `}()}`
        }

        function Ne() {
            const e = window;
            e.Shopify = e.Shopify || {}, e.Shopify.evids || (Se = {
                page_viewed: {},
                collection_viewed: {},
                product_viewed: {},
                product_variant_viewed: {},
                search_submitted: {},
                product_added_to_cart: {},
                checkout_started: {},
                checkout_completed: {},
                payment_info_submitted: {},
                session_started: {},
                checkout_contact_step_started: {},
                checkout_contact_info_submitted: {},
                checkout_address_info_submitted: {},
                checkout_shipping_step_started: {},
                checkout_shipping_info_submitted: {},
                checkout_payment_step_started: {}
            }, ke = {
                wpm: {},
                trekkie: {}
            }, e.Shopify.evids = (e, t) => function(e, t) {
                if (!Se[e] || (null == t ? void 0 : t.analyticsFramework) !== Ae && (null == t ? void 0 : t.analyticsFramework) !== _e) return Te(Ce);
                const n = "string" == typeof(o = t.cacheKey) && o ? o : "default";
                var o;
                const r = function(e, t, n) {
                    const o = ke[t];
                    return void 0 === o[e] && (o[e] = {}), void 0 === o[e][n] ? o[e][n] = 0 : o[e][n] += 1, o[e][n]
                }(e, t.analyticsFramework, n);
                return function(e, t, n) {
                    const o = Se[e];
                    if (void 0 === o[n]) {
                        const e = Te();
                        o[n] = [e]
                    } else if (void 0 === o[n][t]) {
                        const e = Te();
                        o[n].push(e)
                    }
                    return o[n][t]
                }(e, r, n)
            }(e, t))
        }
        const Ie = new Set;
        var Oe = {
            setBetaFlags: function(e) {
                (e || []).forEach((e => Ie.add(e)))
            },
            isEnabled: function(e) {
                return Ie.has(e)
            },
            resetBetas: function() {
                Ie.clear()
            }
        };
        const Pe = "webPixelsManager",
            Le = "production",
            Re = "0.0.407",
            De = "modern",
            Me = "f25882c1w423ab3d2p8df04b18m261f6c04",
            je = "bf25882c1w423ab3d2p8df04b18m261f6c04m.js",
            $e = "loggedConversion2",
            Ue = "WebPixel::Render",
            Be = {
                test: "edge_test_click/1.0",
                load: "web_pixels_manager_load/3.1",
                init: "web_pixels_manager_init/3.2",
                register: "web_pixels_manager_pixel_register/3.6",
                subscriberEventEmit: "web_pixels_manager_subscriber_event_emit/3.4",
                eventPublish: "web_pixels_manager_event_publish/1.6",
                consentAccepted: "web_pixels_manager_consent_accepted/1.2",
                unload: "web_pixels_manager_unload/1.2",
                visitor: "web_pixels_manager_visitor/1.0"
            };

        function Fe(e, t) {
            return {
                schemaId: Be[e],
                payload: t
            }
        }
        var Ve = {
            randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
        };
        let qe;
        const Ge = new Uint8Array(16);

        function Ke() {
            if (!qe && (qe = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !qe)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return qe(Ge)
        }
        const ze = [];
        for (let n = 0; n < 256; ++n) ze.push((n + 256).toString(16).slice(1));
        var He = function(e, t, n) {
            if (Ve.randomUUID && !t && !e) return Ve.randomUUID();
            const o = (e = e || {}).random || (e.rng || Ke)();
            if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t) {
                n = n || 0;
                for (let e = 0; e < 16; ++e) t[n + e] = o[e];
                return t
            }
            return function(e, t = 0) {
                return ze[e[t + 0]] + ze[e[t + 1]] + ze[e[t + 2]] + ze[e[t + 3]] + "-" + ze[e[t + 4]] + ze[e[t + 5]] + "-" + ze[e[t + 6]] + ze[e[t + 7]] + "-" + ze[e[t + 8]] + ze[e[t + 9]] + "-" + ze[e[t + 10]] + ze[e[t + 11]] + ze[e[t + 12]] + ze[e[t + 13]] + ze[e[t + 14]] + ze[e[t + 15]]
            }(o)
        };
        let Ye;

        function We() {
            return Ye || (Ye = function() {
                let e;
                try {
                    var t, n;
                    e = null !== (t = window.Shopify) && void 0 !== t && t.evids ? null === (n = window.Shopify) || void 0 === n ? void 0 : n.evids("session_started", {
                        analyticsFramework: "wpm"
                    }) : He()
                } catch (o) {
                    e = He()
                }
                return e
            }()), Ye
        }

        function Xe(e) {
            return e.replace(/\/$/, "")
        }
        const Je = {},
            Ze = {
                "pixel:register": {
                    start: {
                        name: "pixel:register:started",
                        params: {
                            pixelId: "",
                            source: ""
                        }
                    },
                    end: {
                        name: "pixel:register:completed",
                        params: {
                            pixelId: "",
                            source: ""
                        }
                    }
                },
                "page:session": {
                    start: {
                        name: "start",
                        params: Je
                    },
                    end: {
                        name: "page:unload",
                        params: Je
                    }
                },
                completed: {
                    start: {
                        name: "start",
                        params: Je
                    },
                    end: {
                        name: "pixels:resolved",
                        params: Je
                    }
                }
            };

        function Qe(e, t = Je) {
            const n = et(e, "end", t),
                o = function(e, t) {
                    try {
                        const n = tt(e, "start", t),
                            o = tt(e, "end", t),
                            r = function(e, t) {
                                return nt(e, t)
                            }(e, t),
                            i = self.performance.measure(r, n, o);
                        return { ...i,
                            duration: Math.round(i.duration),
                            startTime: Math.round(i.startTime)
                        }
                    } catch (n) {
                        return null
                    }
                }(e, t);
            return {
                mark: n,
                measurement: o
            }
        }

        function et(e, t, n) {
            try {
                const o = tt(e, t, n);
                return self.performance.mark(o), {
                    name: o,
                    params: n
                }
            } catch (o) {
                return {
                    name: null,
                    params: n
                }
            }
        }

        function tt(e, t, n) {
            return nt(Ze[e][t].name, n)
        }

        function nt(e, t) {
            const n = ["wpm", e];
            return t && Object.keys(t).forEach((e => {
                n.push(t[e])
            })), n.join(":")
        }

        function ot(e) {
            const t = {};
            for (const n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    const o = n.replace(/[A-Z]/g, (e => `_${e}`)).toLowerCase(),
                        r = e[n];
                    t[o] = null !== r && "object" == typeof r ? ot(r) : r
                }
            return t
        }
        var rt = n(747);
        class it extends Error {
            constructor(...e) {
                super(...e), this.message = "Excessive Stacktrace: May indicate infinite loop forming"
            }
        }
        var at = n(700);
        class st extends Error {
            constructor(...e) {
                super(...e), Error.captureStackTrace && Error.captureStackTrace(this, st)
            }
        }
        const ct = {
                production: "https://notify.bugsnag.com",
                test: "https://localhost"
            },
            lt = {
                severity: "error",
                context: "",
                unhandled: !0,
                library: "browser"
            },
            ut = {
                notify: (e, t) => {
                    try {
                        var n;
                        if (null != t && null !== (n = t.options) && void 0 !== n && n.sampleRate && ! function(e) {
                                if (e <= 0 || e > 100) throw new Error("Invalid sampling percent");
                                return 100 * Math.random() <= e
                            }(t.options.sampleRate)) return;
                        const a = { ...lt,
                            ...t
                        };
                        let s = {
                            errorClass: null == e ? void 0 : e.name,
                            message: null == e ? void 0 : e.message,
                            stacktrace: [],
                            type: "browserjs"
                        };
                        try {
                            s = function(e) {
                                if ("string" != typeof((null == (t = e) ? void 0 : t.stack) || (null == t ? void 0 : t.stacktrace) || (null == t ? void 0 : t["opera#sourceloc"])) || t.stack === `${t.name}: ${t.message}`) throw new Error("Error incompatible with error-stack-parser");
                                var t;
                                const n = rt.parse(e).reduce(((e, t) => {
                                    const n = function({
                                        functionName: e,
                                        lineNumber: t,
                                        columnNumber: n
                                    }) {
                                        const o = /^global code$/i.test((r = e) || "") ? "global code" : r;
                                        var r;
                                        return {
                                            file: `https://cdn.shopify.com/cdn/wpm/${je}`,
                                            method: o,
                                            lineNumber: t,
                                            columnNumber: n
                                        }
                                    }(t);
                                    try {
                                        return "{}" === JSON.stringify(n) ? e : e.concat(n)
                                    } catch (o) {
                                        return e
                                    }
                                }), []);
                                return {
                                    errorClass: null == e ? void 0 : e.name,
                                    message: null == e ? void 0 : e.message,
                                    stacktrace: n,
                                    type: "browserjs"
                                }
                            }(e)
                        } catch (r) {
                            try {
                                s = function(e, t) {
                                    let n = "";
                                    const o = {
                                        lineNumber: "1",
                                        columnNumber: "1",
                                        method: t.context,
                                        file: `https://cdn.shopify.com/cdn/wpm/${je}`
                                    };
                                    if (e.stackTrace || e.stack || e.description) {
                                        n = e.stack.split("\n")[0];
                                        const t = e.stack.match(/([0-9]+):([0-9]+)/);
                                        if (t && t.length > 2 && (o.lineNumber = t[1], o.columnNumber = t[2], parseInt(o.lineNumber, 10) > 1e5)) throw new it
                                    }
                                    return {
                                        errorClass: (null == e ? void 0 : e.name) || n,
                                        message: (null == e ? void 0 : e.message) || n,
                                        stacktrace: [o],
                                        type: "browserjs"
                                    }
                                }(e, a)
                            } catch (i) {
                                if (i instanceof it) return
                            }
                        }
                        const c = function(t, {
                                userAgent: n,
                                context: o,
                                severity: r,
                                unhandled: i,
                                library: a,
                                hashVersionSandbox: s,
                                sandboxUrl: c,
                                pixelId: l,
                                pixelType: u,
                                runtimeContext: d,
                                shopId: f,
                                initConfig: p,
                                notes: m
                            }) {
                                var h, b;
                                const {
                                    device: w,
                                    os: v,
                                    browser: g,
                                    engine: y
                                } = function(t) {
                                    try {
                                        return new at.UAParser(t).getResult()
                                    } catch (e) {
                                        return {
                                            ua: "",
                                            browser: {
                                                name: "",
                                                version: "",
                                                major: ""
                                            },
                                            engine: {
                                                name: "",
                                                version: ""
                                            },
                                            os: {
                                                name: "",
                                                version: ""
                                            },
                                            device: {
                                                model: "",
                                                type: "",
                                                vendor: ""
                                            },
                                            cpu: {
                                                architecture: ""
                                            }
                                        }
                                    }
                                }(n || (null === (h = self.navigator) || void 0 === h ? void 0 : h.userAgent));
                                return {
                                    payloadVersion: 5,
                                    notifier: {
                                        name: "web-pixel-manager",
                                        version: Re,
                                        url: "-"
                                    },
                                    events: [{
                                        exceptions: [t],
                                        context: o,
                                        severity: r,
                                        unhandled: i,
                                        app: {
                                            version: Re
                                        },
                                        device: {
                                            manufacturer: w.vendor,
                                            model: w.model,
                                            osName: v.name,
                                            osVersion: v.version,
                                            browserName: g.name,
                                            browserVersion: g.version
                                        },
                                        metaData: {
                                            app: {
                                                library: a,
                                                browserTarget: De,
                                                env: Le,
                                                hashVersion: Me,
                                                hashVersionSandbox: s || "N/A",
                                                sandboxUrl: c || "N/A"
                                            },
                                            device: {
                                                userAgent: n || (null === (b = self.navigator) || void 0 === b ? void 0 : b.userAgent),
                                                renderingEngineName: y.name,
                                                renderingEngineVersion: y.version
                                            },
                                            request: {
                                                shopId: f,
                                                shopUrl: self.location.href,
                                                pixelId: l,
                                                pixelType: u,
                                                runtimeContext: d
                                            },
                                            "Additional Notes": {
                                                initConfig: JSON.stringify(p),
                                                notes: m
                                            }
                                        }
                                    }]
                                }
                            }(s, a),
                            l = ct[Le];
                        var o;
                        if (!l) return void(null === (o = console) || void 0 === o || o.log(`[${Le}]`, "Bugsnag notify:", c));
                        fetch(l, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Bugsnag-Api-Key": "bcbc9f6762da195561967577c2d74ff8",
                                "Bugsnag-Payload-Version": "5"
                            },
                            body: JSON.stringify(c)
                        }).catch((() => {}))
                    } catch (a) {}
                }
            };
        let dt = "";

        function ft(e = "") {
            dt = Xe(e)
        }
        const pt = "/unstable/produce_batch",
            mt = 500;
        let ht = "wellKnown";
        const bt = new Array;
        let wt;

        function vt(e, t = !1) {
            const n = {
                schema_id: e.schemaId,
                payload: ot(e.payload),
                metadata: {
                    event_created_at_ms: Et()
                }
            };
            bt.push(n), t ? yt() : void 0 === wt && (wt = setTimeout(yt, mt))
        }

        function gt(e, t, n = !1) {
            vt(Fe(e, t), n)
        }

        function yt({
            skipXhr: e
        } = {
            skipXhr: !1
        }) {
            if (wt = void 0, 0 === bt.length) return;
            const t = [...bt];
            bt.length = 0,
                function(e, t) {
                    if (0 === e.length) return !1;
                    const n = {
                        metadata: {
                            event_sent_at_ms: Et()
                        },
                        events: e
                    };
                    ! function(e, t) {
                        const n = `${{global:"https://monorail-edge.shopifysvc.com",wellKnown:`${dt}/.well-known/shopify/monorail`,staging:"https://monorail-edge-staging.shopifycloud.com",test:"https://localhost"}[ht]}${pt}`;
                        try {
                            if (self.navigator.sendBeacon.bind(self.navigator)(n, e)) return !0
                        } catch (o) {}
                        if (!t) {
                            const t = new XMLHttpRequest;
                            try {
                                t.open("POST", n, !0), t.setRequestHeader("Content-Type", "text/plain"), t.send(e)
                            } catch (r) {
                                ut.notify(r, {
                                    context: "v0/utilities/monorail/sendRequest",
                                    unhandled: !1
                                })
                            }
                        }
                    }(JSON.stringify(n), t)
                }(t, e)
        }

        function Et() {
            return (new Date).getTime()
        }
        class xt extends Set {
            constructor(e, t) {
                if (super(), this.maxSize = void 0, this.keep = void 0, Number.isFinite(e) && !Number.isInteger(e) || e <= 0) throw new Error("Invalid maxSize specified");
                this.maxSize = e, this.keep = t
            }
            push(e) {
                if ("oldest" === this.keep) this.size < this.maxSize && this.add(e);
                else if ("newest" === this.keep && (this.add(e), this.size > this.maxSize))
                    for (const t of this)
                        if (this.delete(t), this.size <= this.maxSize) break;
                return this
            }
        }
        const Ct = (e, t, n) => !0;
        class _t {
            constructor({
                bufferSize: e = 50,
                replayKeep: t = "oldest",
                subscribeAllKey: n,
                eligibility: o
            } = {}) {
                this.channelSubscribers = new Map, this.replayQueue = void 0, this.bufferSize = void 0, this.replayKeep = void 0, this.subscribeAllKey = void 0, this.eligibility = void 0, this.bufferSize = e, this.replayKeep = t, this.subscribeAllKey = n, this.replayQueue = new xt(e, t), this.eligibility = null != o ? o : Ct
            }
            publish(e, t, n = {}) {
                var o;
                if (this.subscribeAllKey && e === this.subscribeAllKey) throw new Error(`Cannot publish to ${String(e)}`);
                this.replayQueue.push({
                    name: e,
                    payload: t,
                    options: n
                });
                const r = (o, r) => {
                    this.eligibility(n, o, e) && r.call({}, { ...t
                    })
                };
                var i;
                return null === (o = this.channelSubscribers.get(e)) || void 0 === o || o.forEach(r), this.subscribeAllKey && (null === (i = this.channelSubscribers.get(this.subscribeAllKey)) || void 0 === i || i.forEach(r)), !0
            }
            subscribe(e, t, n = {}) {
                const o = this.channelSubscribers.get(e) || new Map;
                return this.channelSubscribers.set(e, o.set(t, n)), this.replayQueue.forEach((({
                    name: o,
                    payload: r,
                    options: i
                }) => {
                    this.eligibility(i, n, e) && (e === o || this.subscribeAllKey && e === this.subscribeAllKey) && t.call({}, { ...r
                    })
                })), () => o.delete(t)
            }
        }
        let At = function(e) {
            return e.Meta = "meta", e.Standard = "standard", e.Dom = "dom", e.Custom = "custom", e
        }({});
        const St = {
            all_events: At.Meta,
            all_standard_events: At.Meta,
            all_custom_events: At.Meta,
            all_dom_events: At.Meta,
            checkout_address_info_submitted: At.Standard,
            checkout_completed: At.Standard,
            checkout_started: At.Standard,
            payment_info_submitted: At.Standard,
            collection_viewed: At.Standard,
            checkout_contact_info_submitted: At.Standard,
            page_viewed: At.Standard,
            product_added_to_cart: At.Standard,
            product_removed_from_cart: At.Standard,
            product_viewed: At.Standard,
            product_variant_viewed: At.Standard,
            search_submitted: At.Standard,
            cart_viewed: At.Standard,
            checkout_shipping_info_submitted: At.Standard,
            input_changed: At.Dom,
            input_blurred: At.Dom,
            input_focused: At.Dom,
            form_submitted: At.Dom,
            clicked: At.Dom,
            custom_event: At.Custom
        };

        function kt(e) {
            return function(e) {
                return Boolean(St[e])
            }(e) ? St[e] : At.Custom
        }

        function Tt(e) {
            return kt(e) === At.Standard
        }

        function Nt(e) {
            return kt(e) === At.Dom
        }
        const It = (e, t, n) => {
            const {
                pixelRuntimeConfig: o
            } = t || {}, {
                apiClientId: r,
                restrictions: i
            } = o || {}, {
                allowedEvents: a,
                disallowedEvents: s
            } = i || {}, {
                sendTo: c
            } = e || {}, l = c && String(c) === String(r), u = c && !l, d = !a || a.includes(n), f = s && s.includes(n);
            return Boolean(d && !f && !u || l)
        };

        function Ot() {
            return /checkouts\/(.+)\/(thank_you|thank-you|post_purchase)$/.test(self.location.pathname)
        }
        const Pt = {
                string: "[object String]",
                number: "[object Number]",
                boolean: "[object Boolean]",
                undefined: "[object Undefined]",
                null: "[object Null]",
                object: "[object Object]"
            },
            Lt = [Pt.string, Pt.number, Pt.boolean, Pt.undefined, Pt.null];

        function Rt(e) {
            let t = null;

            function n(e) {
                return Object.prototype.toString.call(e) === Pt.object
            }
            return void 0 === e || n(e) ? {
                isValid: function e(o) {
                    if (Array.isArray(o)) return o.every(e);
                    if (n(o)) return Object.keys(o).every((t => e(o[t])));
                    const r = Lt.includes(Object.prototype.toString.call(o));
                    return r || (t = `${o} must be one of the following types: ${Lt.join(", ")}`), r
                }(e),
                error: t
            } : (t = `${e} must be an object`, {
                isValid: !1,
                error: t
            })
        }

        function Dt() {
            return {
                document: {
                    location: {
                        href: window.location.href,
                        hash: window.location.hash,
                        host: window.location.host,
                        hostname: window.location.hostname,
                        origin: window.location.origin,
                        pathname: window.location.pathname,
                        port: window.location.port,
                        protocol: window.location.protocol,
                        search: window.location.search
                    },
                    referrer: document.referrer,
                    characterSet: document.characterSet,
                    title: document.title
                },
                navigator: {
                    language: navigator.language,
                    cookieEnabled: navigator.cookieEnabled,
                    languages: navigator.languages,
                    userAgent: navigator.userAgent
                },
                window: {
                    innerHeight: window.innerHeight,
                    innerWidth: window.innerWidth,
                    outerHeight: window.outerHeight,
                    outerWidth: window.outerWidth,
                    pageXOffset: window.pageXOffset,
                    pageYOffset: window.pageYOffset,
                    location: {
                        href: window.location.href,
                        hash: window.location.hash,
                        host: window.location.host,
                        hostname: window.location.hostname,
                        origin: window.location.origin,
                        pathname: window.location.pathname,
                        port: window.location.port,
                        protocol: window.location.protocol,
                        search: window.location.search
                    },
                    origin: window.origin,
                    screen: {
                        height: window.screen.height,
                        width: window.screen.width
                    },
                    screenX: window.screenX,
                    screenY: window.screenY,
                    scrollX: window.scrollX,
                    scrollY: window.scrollY
                }
            }
        }

        function Mt(e) {
            const t = {};
            for (const o of e.split(/ *; */)) {
                const e = o.split("=");
                try {
                    t[decodeURIComponent(e[0])] = decodeURIComponent(e[1] || "")
                } catch (n) {
                    continue
                }
            }
            return t
        }
        const jt = e => ({ ...e,
            clientId: Mt(document.cookie)._shopify_y,
            timestamp: (new Date).toISOString(),
            context: Dt(),
            id: "string" == typeof e.id && e.id.length > 0 ? e.id : He()
        });

        function $t() {
            const e = ye.getShopPrefs();
            return e.limit.includes(_.GDPR) ? "gdpr" : e.limit.includes(_.GDPR_BLOCK_ALL) ? "gdpr_block_all" : "unknown"
        }
        let Ut = !1;

        function Bt() {
            return new Promise(((e, t) => {
                if (Ee()) return void e(!0);
                const n = t => {
                    $(),
                        function(e) {
                            const t = e.detail;
                            return !0 === (null == t ? void 0 : t.marketingAllowed) && !0 === (null == t ? void 0 : t.saleOfDataAllowed) && !0 === (null == t ? void 0 : t.analyticsAllowed)
                        }(t) && (document.removeEventListener(i.CONSENT_COLLECTED, n), e(!0))
                };
                document.addEventListener(i.CONSENT_COLLECTED, n)
            }))
        }
        const Ft = new Set;
        let Vt = function(e) {
                return e.App = "APP", e.Custom = "CUSTOM", e
            }({}),
            qt = function(e) {
                return e.Strict = "STRICT", e.Lax = "LAX", e.Open = "OPEN", e
            }({});

        function Gt(e) {
            return "shopify-custom-pixel" === e.id ? "shopify-pixel" : e.type === Vt.Custom ? "-1" : e.apiClientId ? `${e.apiClientId}` : void 0
        }
        const Kt = "all_standard_events",
            zt = "all_custom_events",
            Ht = "all_dom_events";
        class Yt extends Error {
            constructor(e) {
                super(e), this.name = "PublishDomEventError"
            }
        }

        function Wt(e) {
            const t = new _t({
                    bufferSize: Number.POSITIVE_INFINITY,
                    subscribeAllKey: Kt,
                    eligibility: It
                }),
                n = new _t({
                    bufferSize: 1e3,
                    subscribeAllKey: zt,
                    eligibility: It
                }),
                o = new _t({
                    bufferSize: 1e3,
                    replayKeep: "newest",
                    subscribeAllKey: Ht,
                    eligibility: It
                });
            e.initData;
            let r = !1;
            return {
                publish(n, o, i) {
                    var a, s, c, l, u;
                    if ("string" != typeof n) throw new Error("Expected event name to be a string, but got " + typeof n);
                    if (!Tt(n)) return !1;
                    if ("checkout_completed" === n && Ot() && -1 !== document.cookie.indexOf(`${$e}=1`)) return !1;
                    const d = Rt(o);
                    if (!d.isValid) return console.error(d.error), !1;
                    const f = function(e, t, n) {
                            let o;
                            const r = {
                                analyticsFramework: "wpm"
                            };
                            try {
                                var i, a;
                                "product_added_to_cart" === e && "cartLine" in n && (r.cacheKey = function({
                                    cartLine: e
                                } = {
                                    cartLine: null
                                }) {
                                    const t = null == e ? void 0 : e.merchandise.product.id,
                                        n = null == e ? void 0 : e.merchandise.id;
                                    if (t && n) return `${t}-${n}`
                                }(n)), o = null === (i = window.Shopify) || void 0 === i || null === (a = i.evids) || void 0 === a ? void 0 : a.call(i, e, r)
                            } catch {}
                            return jt({
                                id: o,
                                name: e,
                                data: n
                            })
                        }(n, 0, o),
                        p = null === (a = f.data) || void 0 === a || null === (s = a.checkout) || void 0 === s ? void 0 : s.token;
                    return gt("eventPublish", {
                            version: Re,
                            bundleTarget: De,
                            pageUrl: self.location.href,
                            shopId: e.shopId,
                            surface: e.surface || "unknown",
                            eventName: f.name,
                            eventType: "standard",
                            extensionId: null == i || null === (c = i.extension) || void 0 === c ? void 0 : c.extensionId,
                            extensionAppId: null == i || null === (l = i.extension) || void 0 === l ? void 0 : l.appId,
                            extensionType: null == i || null === (u = i.extension) || void 0 === u ? void 0 : u.type,
                            userCanBeTracked: Ee().toString(),
                            shopPrefs: $t(),
                            eventId: f.id,
                            checkoutToken: p,
                            serverEventId: null == i ? void 0 : i.eventId
                        }),
                        function(e) {
                            "checkout_completed" === e && function() {
                                if (Ot()) {
                                    const e = self.location.pathname.split("/").slice(0, -1).join("/"),
                                        t = new Date(Date.now());
                                    t.setMonth(t.getMonth() + 2), document.cookie = `${$e}=1; expires=${t}; path=${e}`
                                }
                            }()
                        }(n), r || Ee() || (r = !0, m = e.shopId, h = e.surface || "unknown", Ft.add((() => function(e, t) {
                            Ut || (Ut = !0, gt("consentAccepted", {
                                version: Re,
                                bundleTarget: De,
                                shopId: e,
                                surface: t,
                                shopPrefs: $t()
                            }))
                        }(m, h)))), t.publish(n, f);
                    var m, h
                },
                publishCustomEvent(t, o, r) {
                    var i, a, s;
                    if ("string" != typeof t) throw new Error("Expected event name to be a string, but got " + typeof t);
                    if (! function(e) {
                            return kt(e) === At.Custom
                        }(t)) return !1;
                    const c = Rt(o);
                    if (!c.isValid) return console.error(c.error), !1;
                    const l = function(e, t, n = null) {
                        return jt({
                            name: e,
                            customData: n
                        })
                    }(t, 0, o);
                    return gt("eventPublish", {
                        version: Re,
                        bundleTarget: De,
                        pageUrl: self.location.href,
                        shopId: e.shopId,
                        surface: e.surface || "unknown",
                        eventName: l.name,
                        eventType: "custom",
                        extensionId: null == r || null === (i = r.extension) || void 0 === i ? void 0 : i.extensionId,
                        extensionAppId: null == r || null === (a = r.extension) || void 0 === a ? void 0 : a.appId,
                        extensionType: null == r || null === (s = r.extension) || void 0 === s ? void 0 : s.type,
                        eventId: l.id
                    }), n.publish(t, l, r)
                },
                publishDomEvent(e, t, n) {
                    if (!Oe.isEnabled("web_pixels_dom_analytics")) throw new Yt("This feature is disabled");
                    if ("string" != typeof e) {
                        const t = JSON.stringify(e);
                        throw new Yt(`Expected event name "${t}" to be a string, but got ${typeof e}`)
                    }
                    if (!Nt(e)) throw new Yt(`Event name "${e}" is not a supported DOM Event`);
                    const r = Rt(t);
                    if (!r.isValid) throw new Yt(`Input Validation Error: ${r.error}`);
                    const i = function(e, t) {
                        return jt({
                            name: e,
                            data: t
                        })
                    }(e, t);
                    return o.publish(e, i)
                },
                subscribe(e, r, i = {}) {
                    const a = e => {
                        var t;
                        const n = i.schemaVersion || i.pixelRuntimeConfig.eventPayloadVersion;
                        r.call(e, e);
                        const o = kt(e.name);
                        let a;
                        var s, c;
                        Tt(e.name) && (a = null == e || null === (s = e.data) || void 0 === s || null === (c = s.checkout) || void 0 === c ? void 0 : c.token), gt("subscriberEventEmit", {
                            version: Re,
                            bundleTarget: De,
                            pageUrl: self.location.href,
                            shopId: i.shopId,
                            surface: i.surface,
                            pixelId: i.pixelRuntimeConfig.id,
                            pixelAppId: Gt(i.pixelRuntimeConfig),
                            pixelSource: i.pixelRuntimeConfig.type,
                            pixelRuntimeContext: i.pixelRuntimeConfig.runtimeContext,
                            pixelScriptVersion: i.pixelRuntimeConfig.scriptVersion,
                            pixelConfiguration: null === (t = i.pixelRuntimeConfig) || void 0 === t ? void 0 : t.configuration,
                            pixelEventSchemaVersion: n,
                            eventName: e.name,
                            eventType: o,
                            eventId: e.id,
                            checkoutToken: a
                        })
                    };
                    if ("all_events" === e) {
                        const e = t.subscribe(Kt, a, i),
                            r = n.subscribe(zt, a, i),
                            s = o.subscribe(Ht, a, i);
                        return () => {
                            const t = e(),
                                n = r(),
                                o = s();
                            return t && n && o
                        }
                    }
                    return e === zt ? n.subscribe(zt, a, i) : e === Kt || Tt(e) ? t.subscribe(e, a, i) : Oe.isEnabled("web_pixels_dom_analytics") && (e === Ht || Nt(e)) ? o.subscribe(e, a, i) : n.subscribe(e, a, i)
                }
            }
        }

        function Xt(e) {
            try {
                return new URL(e), !0
            } catch (t) {
                return function(e) {
                    const t = new RegExp("^(https?:\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)*[a-z]{1,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
                    return Boolean(t.test(e))
                }(e)
            }
        }
        const Jt = ["31014027265", "28638674945", "44186959873"];
        const Zt = () => {
                let e, t;
                return {
                    promise: new Promise(((...n) => {
                        [e, t] = n
                    })),
                    resolve: e,
                    reject: t
                }
            },
            Qt = Symbol.for("RemoteUi::Retain"),
            en = Symbol.for("RemoteUi::Release"),
            tn = Symbol.for("RemoteUi::RetainedBy");
        class nn {
            constructor() {
                this.memoryManaged = new Set
            }
            add(e) {
                this.memoryManaged.add(e), e[tn].add(this), e[Qt]()
            }
            release() {
                for (const e of this.memoryManaged) e[tn].delete(this), e[en]();
                this.memoryManaged.clear()
            }
        }

        function on(e) {
            return Boolean(e && e[Qt] && e[en])
        }

        function rn(e, {
            deep: t = !0
        } = {}) {
            return an(e, t, new Map)
        }

        function an(e, t, n) {
            const o = n.get(e);
            if (null != o) return o;
            const r = on(e);
            if (r && e[Qt](), n.set(e, r), t) {
                if (Array.isArray(e)) {
                    const o = e.reduce(((e, o) => an(o, t, n) || e), r);
                    return n.set(e, o), o
                }
                if (sn(e)) {
                    const o = Object.keys(e).reduce(((o, r) => an(e[r], t, n) || o), r);
                    return n.set(e, o), o
                }
            }
            return n.set(e, r), r
        }

        function sn(e) {
            if (null == e || "object" != typeof e) return !1;
            const t = Object.getPrototypeOf(e);
            return null == t || t === Object.prototype
        }
        let cn, ln;

        function un() {
            if (void 0 !== cn) return cn;
            try {
                return window.localStorage.setItem("local-storage-test", "test"), window.localStorage.removeItem("local-storage-test"), cn = !0, !0
            } catch (e) {
                return cn = !1, !1
            }
        }

        function dn() {
            if (void 0 !== ln) return ln;
            try {
                return window.sessionStorage.setItem("session-storage-test", "test"), window.sessionStorage.removeItem("session-storage-test"), ln = !0, !0
            } catch (e) {
                return ln = !1, !1
            }
        }

        function fn({
            eventBus: e,
            webPixelConfig: t,
            shopId: n,
            surface: o,
            initData: r,
            forRPC: i = !1
        }) {
            let a = {};
            try {
                a = t.configuration ? JSON.parse(t.configuration) : {}
            } catch (m) {}
            return {
                analytics: {
                    subscribe: (r, a, s) => (i && rn(a), e.subscribe(r, a, { ...s,
                        pixelRuntimeConfig: t,
                        shopId: n,
                        surface: o
                    }))
                },
                browser: {
                    cookie: {
                        get: async e => {
                            if (!e) return document.cookie;
                            let t = "";
                            const n = document.cookie.split("; ");
                            for (const o of n) {
                                const [n, r] = o.split("=");
                                if (n === e) {
                                    t = r;
                                    break
                                }
                            }
                            return t
                        },
                        set: async (e, t) => {
                            if (t) {
                                const n = `${e}=${t}`;
                                document.cookie = n
                            } else document.cookie = e;
                            return document.cookie
                        }
                    },
                    sendBeacon: async (e, t = "") => {
                        if (e.includes(self.location.origin) && !e.match(/\/\.well-known\/shopify\/monorail\/unstable\/produce_batch/)) return !1;
                        const n = new window.Blob([t], {
                            type: "text/plain"
                        });
                        return window.navigator.sendBeacon(e, n)
                    },
                    localStorage: {
                        setItem: async (e, t) => un() ? window.localStorage.setItem(e, t) : Promise.resolve(),
                        getItem: async e => un() ? window.localStorage.getItem(e) : Promise.resolve(null),
                        key: async e => un() ? window.localStorage.key(e) : Promise.resolve(null),
                        removeItem: async e => un() ? window.localStorage.removeItem(e) : Promise.resolve(),
                        clear: async () => un() ? window.localStorage.clear() : Promise.resolve(),
                        length: async () => un() ? window.localStorage.length : Promise.resolve(0)
                    },
                    sessionStorage: {
                        setItem: async (e, t) => dn() ? window.sessionStorage.setItem(e, t) : Promise.resolve(),
                        getItem: async e => dn() ? window.sessionStorage.getItem(e) : Promise.resolve(null),
                        key: async e => dn() ? window.sessionStorage.key(e) : Promise.resolve(null),
                        removeItem: async e => dn() ? window.sessionStorage.removeItem(e) : Promise.resolve(),
                        clear: async () => dn() ? window.sessionStorage.clear() : Promise.resolve(),
                        length: async () => dn() ? window.sessionStorage.length : Promise.resolve(0)
                    }
                },
                settings: a,
                init: (s = r, {
                    context: Dt(),
                    data: {
                        customer: (p = null == s ? void 0 : s.customer, p ? {
                            email: p.email,
                            firstName: p.firstName,
                            id: p.id,
                            lastName: p.lastName,
                            phone: p.phone,
                            ordersCount: p.ordersCount
                        } : null),
                        cart: (c = null == s ? void 0 : s.cart, c ? {
                            id: null == c ? void 0 : c.id,
                            cost: {
                                totalAmount: {
                                    amount: null == c || null === (l = c.cost) || void 0 === l || null === (u = l.totalAmount) || void 0 === u ? void 0 : u.amount,
                                    currencyCode: null == c || null === (d = c.cost) || void 0 === d || null === (f = d.totalAmount) || void 0 === f ? void 0 : f.currencyCode
                                }
                            },
                            lines: null == c ? void 0 : c.lines,
                            totalQuantity: null == c ? void 0 : c.totalQuantity
                        } : null)
                    }
                }),
                _pixelInfo: { ...t,
                    surface: o
                }
            };
            var s, c, l, u, d, f, p
        }
        class pn extends Error {
            constructor(...e) {
                super(...e), this.name = "InvalidExtensionPointError", this.message = "Invalid Extension Point"
            }
        }
        class mn extends Error {
            constructor(...e) {
                super(...e), this.name = "PixelError"
            }
        }
        const hn = new Map;
        const bn = "_@f";

        function wn(e) {
            const t = new Map,
                n = new Map,
                o = new Map;
            return {
                encode: function o(r, i = new Map) {
                    if (null == r) return [r];
                    const a = i.get(r);
                    if (a) return a;
                    if ("object" == typeof r) {
                        if (Array.isArray(r)) {
                            i.set(r, [void 0]);
                            const e = [],
                                t = [r.map((t => {
                                    const [n, r = []] = o(t, i);
                                    return e.push(...r), n
                                })), e];
                            return i.set(r, t), t
                        }
                        if (sn(r)) {
                            i.set(r, [void 0]);
                            const e = [],
                                t = [Object.keys(r).reduce(((t, n) => {
                                    const [a, s = []] = o(r[n], i);
                                    return e.push(...s), { ...t,
                                        [n]: a
                                    }
                                }), {}), e];
                            return i.set(r, t), t
                        }
                    }
                    if ("function" == typeof r) {
                        if (t.has(r)) {
                            const e = t.get(r),
                                n = [{
                                    [bn]: e
                                }];
                            return i.set(r, n), n
                        }
                        const o = e.uuid();
                        t.set(r, o), n.set(o, r);
                        const a = [{
                            [bn]: o
                        }];
                        return i.set(r, a), a
                    }
                    const s = [r];
                    return i.set(r, s), s
                },
                decode: r,
                async call(e, t) {
                    const o = new nn,
                        i = n.get(e);
                    if (null == i) throw new Error("You attempted to call a function that was already released.");
                    try {
                        const e = on(i) ? [o, ...i[tn]] : [o];
                        return await i(...r(t, e))
                    } finally {
                        o.release()
                    }
                },
                release(e) {
                    const o = n.get(e);
                    o && (n.delete(e), t.delete(o))
                },
                terminate() {
                    t.clear(), n.clear(), o.clear()
                }
            };

            function r(t, n) {
                if ("object" == typeof t) {
                    if (null == t) return t;
                    if (t instanceof ArrayBuffer) return t;
                    if (Array.isArray(t)) return t.map((e => r(e, n)));
                    if (bn in t) {
                        const r = t[bn];
                        if (o.has(r)) return o.get(r);
                        let i = 0,
                            a = !1;
                        const s = () => {
                                i -= 1, 0 === i && (a = !0, o.delete(r), e.release(r))
                            },
                            c = () => {
                                i += 1
                            },
                            l = new Set(n),
                            u = (...t) => {
                                if (a) throw new Error("You attempted to call a function that was already released.");
                                if (!o.has(r)) throw new Error("You attempted to call a function that was already revoked.");
                                return e.call(r, t)
                            };
                        Object.defineProperties(u, {
                            [en]: {
                                value: s,
                                writable: !1
                            },
                            [Qt]: {
                                value: c,
                                writable: !1
                            },
                            [tn]: {
                                value: l,
                                writable: !1
                            }
                        });
                        for (const e of l) e.add(u);
                        return o.set(r, u), u
                    }
                    return Object.keys(t).reduce(((e, o) => ({ ...e,
                        [o]: r(t[o], n)
                    })), {})
                }
                return t
            }
        }
        const vn = 0,
            gn = 1,
            yn = 2,
            En = 3,
            xn = 5,
            Cn = 6;

        function _n() {
            return `${An()}-${An()}-${An()}-${An()}`
        }

        function An() {
            return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)
        }
        const Sn = "remote-ui::ready";
        async function kn({
            sandboxId: e,
            webPixelConfig: t,
            storefrontBaseUrl: n
        }) {
            const {
                search: o
            } = self.location, r = t.id, i = [Xe(n), "/wpm", `@${Me}`, `/web-pixel-${r}`, `@${t.scriptVersion}`, "/sandbox", `/${De}`, /\.(js|json|xml)$/.test(self.location.pathname) ? "" : self.location.pathname, o];
            if (n.match(/spin\.dev\/?/)) {
                const e = o.length ? "&" : "?";
                i.push(`${o}${e}fast_storefront_renderer=1`)
            }
            return function(e, {
                terminate: t = !0,
                targetOrigin: n = "*"
            } = {}) {
                var o;
                if ("undefined" == typeof window) throw new Error("You can only run fromIframe() in a browser context, but no window was found.");
                const r = new WeakMap;
                let i;

                function a(t) {
                    t.source === e.contentWindow && t.data === Sn && (window.removeEventListener("message", a), i())
                }
                null === (o = e.contentWindow) || void 0 === o || o.postMessage(Sn, n);
                const s = new Promise((e => {
                    i = e, window.addEventListener("message", a)
                }));
                return {
                    async postMessage(t, o) {
                        var r;
                        await s, null === (r = e.contentWindow) || void 0 === r || r.postMessage(t, n, o)
                    },
                    addEventListener(t, n) {
                        const o = t => {
                            t.source === e.contentWindow && n(t)
                        };
                        r.set(n, o), self.addEventListener(t, o)
                    },
                    removeEventListener(e, t) {
                        const n = r.get(t);
                        null != n && (r.delete(t), self.removeEventListener(e, n))
                    },
                    terminate() {
                        window.removeEventListener("message", a), t && e.remove()
                    }
                }
            }(await async function({
                id: e,
                src: t,
                privileges: n
            }) {
                const o = document.querySelector(`iframe#${e}`);
                if (o && "IFRAME" === o.tagName) return o;
                const r = document.createElement("iframe");
                if (!t) {
                    const e = new st("src or srcdoc must be provided");
                    throw ut.notify(e, {
                        context: "v0/createIframe",
                        unhandled: !1,
                        severity: "warning"
                    }), e
                }
                if (r.setAttribute("src", t), r.setAttribute("id", e), r.setAttribute("name", e), r.setAttribute("sandbox", n.join(" ")), r.setAttribute("tabIndex", "-1"), r.setAttribute("aria-hidden", "true"), ! function(e) {
                        return "sandbox" in e
                    }(r)) {
                    const e = new st("browser does not support the sandbox attribute on IFrames");
                    throw ut.notify(e, {
                        context: "v0/createIframe",
                        unhandled: !1,
                        severity: "warning"
                    }), e
                }
                return r.setAttribute("style", "display:none; height:0; width:0; visibility: hidden;"), await
                function(e) {
                    return new Promise(((t, n) => {
                        const o = () => {
                            try {
                                let n = document.querySelector("#WebPixelsManagerSandboxContainer");
                                null == n && (n = document.createElement("div"), n.setAttribute("id", "WebPixelsManagerSandboxContainer"), document.body.appendChild(n)), document.querySelector(`#${e.id}`) || n.appendChild(e), t(e)
                            } catch (o) {
                                n(o)
                            }
                        };
                        if (Oe.isEnabled("web_pixels_manager_performance_improvement"))
                            if (document.body) o();
                            else {
                                const e = () => {
                                    "loading" !== document.readyState && (o(), document.removeEventListener("readystatechange", e))
                                };
                                document.addEventListener("readystatechange", e)
                            }
                        else if ("interactive" === document.readyState || "complete" === document.readyState) o();
                        else {
                            const e = () => {
                                "interactive" !== document.readyState && "complete" !== document.readyState || (o(), document.removeEventListener("readystatechange", e))
                            };
                            document.addEventListener("readystatechange", e)
                        }
                    }))
                }(r), r
            }({
                id: e,
                src: i.join(""),
                privileges: ["allow-scripts", "allow-forms"]
            }))
        }
        let Tn;
        const Nn = () => (Tn || (Tn = {
                localStorageItems: { ...self.localStorage
                },
                sessionStorageItems: { ...self.sessionStorage
                }
            }), Tn),
            In = new Map;

        function On() {
            var e, t;
            const n = (null === (e = self) || void 0 === e || null === (t = e.location) || void 0 === t ? void 0 : t.hostname) || "",
                o = In.get(n);
            if (o) return o;
            const r = n.split("."),
                i = [];
            return r.reverse().reduce(((e, t) => {
                const n = "" === e ? t : `${t}.${e}`;
                return function(e) {
                        document.cookie = `wpm-domain-test=1; path=/; domain=${e}`
                    }(n), document.cookie.split(";").find((e => e.includes("wpm-domain-test"))) || i.push(n),
                    function(e) {
                        document.cookie = `wpm-domain-test=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=${e}`
                    }(n), n
            }), ""), In.set(n, i), i
        }
        class Pn extends Error {
            constructor(...e) {
                super(...e), this.name = "SandboxAlreadyCreatedError", this.message = "Sandbox already created."
            }
        }
        async function Ln({
            webPixelConfig: e,
            eventBus: t,
            shopId: n,
            storefrontBaseUrl: o,
            surface: r,
            initData: i
        }) {
            let a;
            const s = `web-pixel-sandbox-${e.type}-${e.id}-${e.runtimeContext}-${Me}`;
            if (e.runtimeContext === qt.Lax && document.getElementById(s)) {
                const t = new Pn;
                return ut.notify(t, {
                    pixelId: e.id,
                    pixelType: e.type,
                    runtimeContext: e.runtimeContext,
                    shopId: n,
                    context: "v0/createWebPixelSandbox/alreadyCreatedError",
                    userAgent: self.navigator.userAgent,
                    hashVersionSandbox: Me,
                    sandboxUrl: self.location.href || "unknown",
                    options: {
                        sampleRate: 15
                    }
                }), !1
            }
            switch (e.runtimeContext) {
                case qt.Strict:
                    a = await async function({
                        sandboxId: e,
                        webPixelConfig: t,
                        storefrontBaseUrl: n
                    }) {
                        const o = t.id,
                            r = [Xe(n), "/wpm", `@${Me}`, `/web-pixel-${o}`, `@${t.scriptVersion}`, "/sandbox", `/worker.${De}.js`];
                        return n.match(/spin\.dev\/?/) && r.push("?fast_storefront_renderer=1"), new Worker(r.join(""), {
                            name: e,
                            type: "classic",
                            credentials: "omit"
                        })
                    }({
                        sandboxId: s,
                        webPixelConfig: e,
                        storefrontBaseUrl: o
                    });
                    break;
                case qt.Lax:
                    a = await kn({
                        sandboxId: s,
                        webPixelConfig: e,
                        storefrontBaseUrl: o
                    });
                    break;
                default:
                    throw new Error(`Unsupported runtime context: ${e.runtimeContext}`)
            }
            const c = function(e, {
                    uuid: t = _n,
                    createEncoder: n = wn,
                    callable: o
                } = {}) {
                    let r = !1,
                        i = e;
                    const a = new Map,
                        s = new Map,
                        c = function(e, t) {
                            let n;
                            if (null == t) {
                                if ("function" != typeof Proxy) throw new Error("You must pass an array of callable methods in environments without Proxies.");
                                const t = new Map;
                                n = new Proxy({}, {
                                    get(n, o) {
                                        if (t.has(o)) return t.get(o);
                                        const r = e(o);
                                        return t.set(o, r), r
                                    }
                                })
                            } else {
                                n = {};
                                for (const o of t) Object.defineProperty(n, o, {
                                    value: e(o),
                                    writable: !1,
                                    configurable: !0,
                                    enumerable: !0
                                })
                            }
                            return n
                        }(f, o),
                        l = n({
                            uuid: t,
                            release(e) {
                                u(En, [e])
                            },
                            call(e, n, o) {
                                const r = t(),
                                    i = p(r, o),
                                    [a, s] = l.encode(n);
                                return u(xn, [r, e, a], s), i
                            }
                        });
                    return i.addEventListener("message", d), {
                        call: c,
                        replace(e) {
                            const t = i;
                            i = e, t.removeEventListener("message", d), e.addEventListener("message", d)
                        },
                        expose(e) {
                            for (const t of Object.keys(e)) {
                                const n = e[t];
                                "function" == typeof n ? a.set(t, n) : a.delete(t)
                            }
                        },
                        callable(...e) {
                            if (null != o)
                                for (const t of e) Object.defineProperty(c, t, {
                                    value: f(t),
                                    writable: !1,
                                    configurable: !0,
                                    enumerable: !0
                                })
                        },
                        terminate() {
                            u(yn, void 0), m(), i.terminate && i.terminate()
                        }
                    };

                    function u(e, t, n) {
                        r || i.postMessage(t ? [e, t] : [e], n)
                    }
                    async function d(e) {
                        const {
                            data: t
                        } = e;
                        if (null != t && Array.isArray(t)) switch (t[0]) {
                            case yn:
                                m();
                                break;
                            case vn:
                                {
                                    const e = new nn,
                                        [o, r, i] = t[1],
                                        s = a.get(r);
                                    try {
                                        if (null == s) throw new Error(`No '${r}' method is exposed on this endpoint`);
                                        const [t, n] = l.encode(await s(...l.decode(i, [e])));
                                        u(gn, [o, void 0, t], n)
                                    } catch (n) {
                                        const {
                                            name: e,
                                            message: t,
                                            stack: r
                                        } = n;
                                        throw u(gn, [o, {
                                            name: e,
                                            message: t,
                                            stack: r
                                        }]), n
                                    } finally {
                                        e.release()
                                    }
                                    break
                                }
                            case gn:
                                {
                                    const [e] = t[1];s.get(e)(...t[1]),
                                    s.delete(e);
                                    break
                                }
                            case En:
                                {
                                    const [e] = t[1];l.release(e);
                                    break
                                }
                            case Cn:
                                {
                                    const [e] = t[1];s.get(e)(...t[1]),
                                    s.delete(e);
                                    break
                                }
                            case xn:
                                {
                                    const [e, o, r] = t[1];
                                    try {
                                        const t = await l.call(o, r),
                                            [n, i] = l.encode(t);
                                        u(Cn, [e, void 0, n], i)
                                    } catch (n) {
                                        const {
                                            name: t,
                                            message: o,
                                            stack: r
                                        } = n;
                                        throw u(Cn, [e, {
                                            name: t,
                                            message: o,
                                            stack: r
                                        }]), n
                                    }
                                    break
                                }
                        }
                    }

                    function f(e) {
                        return (...n) => {
                            if (r) return Promise.reject(new Error("You attempted to call a function on a terminated web worker."));
                            if ("string" != typeof e && "number" != typeof e) return Promise.reject(new Error(`Can’t call a symbol method on a remote endpoint: ${e.toString()}`));
                            const o = t(),
                                i = p(o),
                                [a, s] = l.encode(n);
                            return u(vn, [o, e, a], s), i
                        }
                    }

                    function p(e, t) {
                        return new Promise(((n, o) => {
                            s.set(e, ((e, r, i) => {
                                if (null == r) n(i && l.decode(i, t));
                                else {
                                    const e = new Error;
                                    Object.assign(e, r), o(e)
                                }
                            }))
                        }))
                    }

                    function m() {
                        var e;
                        r = !0, a.clear(), s.clear(), null === (e = l.terminate) || void 0 === e || e.call(l), i.removeEventListener("message", d)
                    }
                }(a, {
                    callable: ["initialize"]
                }),
                l = fn({
                    eventBus: t,
                    webPixelConfig: e,
                    shopId: n,
                    surface: r,
                    initData: i,
                    forRPC: !0
                }),
                u = {
                    self: {
                        origin: {
                            get: async () => self.origin
                        }
                    },
                    document: {
                        referrer: {
                            get: async () => document.referrer
                        }
                    }
                },
                d = Dt();
            let f = {
                status: "unknown",
                hashVersion: "unknown",
                sandboxUrl: "unknown"
            };
            const p = e.runtimeContext === qt.Lax ? Nn() : {
                localStorageItems: {},
                sessionStorageItems: {}
            };
            try {
                f = await c.call.initialize({
                    pageTitle: self.document.title,
                    webPixelConfig: e,
                    shopId: n,
                    webPixelApi: l,
                    internalApi: u,
                    cookie: self.document.cookie,
                    cookieRestrictedDomains: On(),
                    origin: self.origin,
                    referrer: self.document.referrer,
                    ...p
                })
            } catch (m) {
                return !1
            }
            if (Me !== f.hashVersion) {
                const t = new Error(`The main bundle hash (${Me}) does not match the sandbox hash (${f.hashVersion})`);
                ut.notify(t, {
                    severity: "warning",
                    pixelId: e.id,
                    pixelType: e.type,
                    runtimeContext: e.runtimeContext,
                    context: "v0/createSandbox/hashMismatch",
                    shopId: n,
                    userAgent: d.navigator.userAgent || self.navigator.userAgent,
                    hashVersionSandbox: f.hashVersion,
                    sandboxUrl: f.sandboxUrl
                })
            }
            return !0
        }
        async function Rn(e) {
            var t;
            let n = !1;
            const {
                webPixelConfig: o,
                eventBus: r,
                shopId: i,
                surface: a
            } = e, s = o.id, c = o.type.toLowerCase();
            if (o.runtimeContext === qt.Open && !Oe.isEnabled("web_pixels_manager_open_mode")) return !1;
            var l, u;
            switch (o.restrictions || (o.restrictions = function(e, t) {
                if (!e) return {};
                const n = function(e) {
                    return Jt.includes(String(e))
                }(e);
                return n && "storefront-renderer" !== t ? {
                    allowedEvents: [],
                    preventLoadingBeforeEvent: `shopify:app:pixels:load:${e}`
                } : n ? {
                    allowedEvents: []
                } : {}
            }(String(o.apiClientId), a)), await Promise.all([Bt(), (l = (e, t) => r.subscribe(e, t, {
                pixelRuntimeConfig: {
                    apiClientId: "PIXEL-LOADER"
                }
            }), u = null === (t = o.restrictions) || void 0 === t ? void 0 : t.preventLoadingBeforeEvent, new Promise(((e, t) => {
                void 0 === u ? e(!0) : l(u, (() => {
                    e(!0)
                }))
            })))]), et("pixel:register", "start", {
                pixelId: s,
                source: c
            }), o.runtimeContext) {
                case qt.Lax:
                case qt.Strict:
                    n = await Ln(e);
                    break;
                case qt.Open:
                    try {
                        n = await async function({
                            webPixelConfig: e,
                            eventBus: t,
                            shopId: n,
                            storefrontBaseUrl: o,
                            surface: r,
                            initData: i
                        }) {
                            var a;
                            const {
                                promise: s,
                                resolve: c,
                                reject: l
                            } = Zt(), {
                                id: u,
                                type: d
                            } = e, f = `${u}-${d}`.toLowerCase();
                            hn.set(f, (() => ({
                                webPixelApi: fn({
                                    eventBus: t,
                                    webPixelConfig: e,
                                    shopId: n,
                                    surface: r,
                                    initData: i,
                                    forRPC: !0
                                }),
                                resolve: c,
                                reject: l
                            })));
                            const p = o.match(/spin\.dev\/?/),
                                m = [Xe(o), `/wpm@${Me}`, `/${e.type.toLocaleLowerCase()}`, `/web-pixel-${u}@${e.scriptVersion}`, `/pixel.${De}.js`, p ? "?fast_storefront_renderer=1" : ""].join("");
                            if (!("createShopifyExtend" in (null !== (a = self[Pe]) && void 0 !== a ? a : {}))) {
                                const e = (e, t) => {
                                    const n = hn.get(`${e}-${t}`.toLowerCase());
                                    if (!n) return l(new Error(`No openPixelFn found for ${e}-${t}.`)), null;
                                    const {
                                        resolve: o,
                                        reject: r,
                                        webPixelApi: i
                                    } = n();
                                    return i || r(new Error(`No api found for pixel ${e}-${t}.`)), Object.freeze({
                                        extend: (e, t) => {
                                            e !== Ue && r(new pn);
                                            try {
                                                t.call(i, i), o(!0)
                                            } catch (n) {
                                                r(new mn(n))
                                            }
                                        }
                                    })
                                };
                                Object.defineProperty(self, Pe, {
                                    value: {},
                                    enumerable: !0,
                                    writable: !1,
                                    configurable: !1
                                }), Object.defineProperty(self[Pe], "createShopifyExtend", {
                                    value: e,
                                    enumerable: !0,
                                    writable: !1,
                                    configurable: !1
                                })
                            }
                            var h;
                            return await (h = m, new Promise(((e, t) => {
                                try {
                                    const n = document.createElement("script");
                                    n.src = h, n.async = !0, n.onload = () => {
                                        e()
                                    }, n.onerror = () => {
                                        o(), t(new Error(`Failed to load script: ${h}`))
                                    };
                                    const o = () => {
                                        n.onload = null, n.onerror = null, n.remove()
                                    };
                                    document.head.appendChild(n)
                                } catch (n) {
                                    t(n)
                                }
                            }))), s
                        }(e)
                    } catch (p) {
                        n = !1
                    }
                    break;
                default:
                    throw new Error(`Invalid runtimeContext: ${o.runtimeContext}`)
            }
            const d = Gt(o),
                {
                    measurement: f
                } = Qe("pixel:register", {
                    pixelId: s,
                    source: c
                });
            return gt("register", {
                version: Re,
                pageUrl: self.location.href,
                shopId: i,
                surface: a,
                pixelId: s,
                pixelAppId: d,
                pixelSource: o.type,
                pixelRuntimeContext: o.runtimeContext,
                pixelScriptVersion: o.scriptVersion,
                pixelConfiguration: null == o ? void 0 : o.configuration,
                pixelEventSchemaVersion: o.eventPayloadVersion,
                status: "registered",
                userCanBeTracked: Ee().toString(),
                shopPrefs: $t(),
                bundleTarget: De,
                errorMsg: "N/A",
                duration: null == f ? void 0 : f.duration,
                startTime: null == f ? void 0 : f.startTime,
                sessionId: We()
            }), n
        }
        const Dn = {
            capture: !0,
            passive: !0
        };

        function Mn(e, t, n, o = {}) {
            try {
                const r = e => {
                    try {
                        t(e)
                    } catch (n) {
                        ut.notify(n, {
                            context: "v0/createDomEventsListener/createEventListener/handler",
                            unhandled: !1,
                            options: {
                                sampleRate: o.sampleRate || 50
                            }
                        })
                    }
                };
                self.addEventListener(e, r, n)
            } catch (r) {
                ut.notify(r, {
                    context: "v0/createDomEventsListener/createEventListener",
                    unhandled: !1
                })
            }
        }

        function jn(e) {
            return {
                id: null == e ? void 0 : e.id,
                name: null == e ? void 0 : e.name,
                tagName: null == e ? void 0 : e.tagName,
                type: null == e ? void 0 : e.type,
                value: null == e ? void 0 : e.value
            }
        }
        class $n extends Error {
            constructor(e) {
                super(e), this.name = "VisitorError"
            }
        }
        const Un = function() {
            const e = null !== (t = self.Shopify) && void 0 !== t && t.Checkout ? "shopify" : null !== (n = self.Shopify) && void 0 !== n && null !== (o = n.analytics) && void 0 !== o && o.replayQueue ? "storefront-renderer" : "checkout-one";
            var t, n, o;
            const r = self.location.href,
                i = Fe("load", {
                    version: Re,
                    bundleTarget: De,
                    pageUrl: r,
                    status: "loading",
                    surface: e
                }),
                a = {
                    publish: () => !1,
                    publishCustomEvent: () => !1,
                    publishDomEvent: () => !1,
                    visitor: () => !1
                };
            try {
                const e = We();
                return i.payload.status = "loaded", vt(i), {
                    init(t) {
                        if (null !== self.location.href.match(/\/wpm@(.+)\/sandbox/)) return a;
                        const {
                            shopId: n,
                            cdnBaseUrl: o,
                            webPixelsConfigList: i,
                            surface: s = "unknown",
                            initData: c,
                            enabledBetaFlags: l
                        } = t || {};
                        Ne();
                        const u = self.location.origin;
                        ft(u), Oe.setBetaFlags(l);
                        const d = Ee().toString(),
                            f = Fe("unload", {
                                version: Re,
                                bundleTarget: De,
                                pageUrl: r,
                                shopId: n,
                                surface: s,
                                isCompleted: "false",
                                runtimeErrorCaught: "false",
                                userCanBeTracked: d,
                                sessionId: e
                            });
                        var p;
                        p = f, window.addEventListener("pagehide", (() => {
                            var e, t;
                            p.payload.pageDuration = null === (e = Qe("page:session")) || void 0 === e || null === (t = e.measurement) || void 0 === t ? void 0 : t.duration, vt(p), yt({
                                skipXhr: !0
                            })
                        }));
                        const m = Wt(t),
                            h = {
                                severity: "warning",
                                context: "v0/createWebPixelsManager/init",
                                unhandled: !1,
                                shopId: n,
                                initConfig: t
                            },
                            b = Fe("init", {
                                version: Re,
                                bundleTarget: De,
                                pageUrl: r,
                                shopId: n,
                                surface: s,
                                status: "initializing",
                                userCanBeTracked: d
                            });
                        try {
                            var v;
                            if (self.Shopify && !0 === self.Shopify.designMode) return self.console && console.log("[WebPixelsManager] Prevented from executing in the Theme Editor"), a;
                            if (/^web-pixel-sandbox/.test(self.name)) {
                                const e = new st("WebPixelsManager: browser library is being run in a sandbox");
                                throw h.library = "browser", ut.notify(e, h), e
                            }
                            if (!n) {
                                const e = new st("WebPixelsManager: shopId is required");
                                throw ut.notify(e, h), e
                            }
                            if (!u) {
                                const e = new st("WebPixelsManager: storefrontBaseUrl is required");
                                throw ut.notify(e, h), e
                            }
                            if (!Xt(u)) {
                                const e = new st(`WebPixelsManager: storefrontBaseUrl is not a valid absolute URL: ${u}`);
                                throw ut.notify(e, h), e
                            }
                            if (!o) {
                                const e = new st("WebPixelsManager: cdnBaseUrl is required");
                                throw ut.notify(e, h), e
                            }
                            if (!Xt(o)) {
                                const e = new st(`WebPixelsManager: cdnBaseUrl is not a valid absolute URL: ${o}`);
                                throw ut.notify(e, h), e
                            }
                            const e = i.reduce(((e, t) => {
                                var r, i;
                                t.type = t.type.toUpperCase(), t.runtimeContext = null === (r = t.runtimeContext) || void 0 === r ? void 0 : r.toUpperCase();
                                const a = Rn({
                                    webPixelConfig: t,
                                    eventBus: m,
                                    shopId: n,
                                    storefrontBaseUrl: u,
                                    cdnBaseUrl: o,
                                    surface: s,
                                    initData: c
                                }).catch((e => {
                                    self.console && console.error("[Web Pixels]", e)
                                }));
                                return null !== (i = t.restrictions) && void 0 !== i && i.preventLoadingBeforeEvent ? e.waiting.push(a) : e.ready.push(a), e
                            }), {
                                ready: [],
                                waiting: []
                            });
                            Promise.all(e.ready).then((() => function(e) {
                                const {
                                    measurement: t
                                } = Qe("completed");
                                e.payload.isCompleted = "true", e.payload.runTimeDuration = null == t ? void 0 : t.duration, e.payload.startTime = null == t ? void 0 : t.startTime
                            }(f))).catch((() => {})), Promise.all(e.waiting).catch((() => {})), "checkout-one" !== s && (w(m.publish, c), Oe.isEnabled("web_pixels_dom_analytics") && function(e) {
                                const t = function() {
                                    let e = !1;
                                    try {
                                        const t = {
                                                get passive() {
                                                    return e = !0, !1
                                                }
                                            },
                                            n = () => {};
                                        self.addEventListener("test", n, t), self.removeEventListener("test", n, t)
                                    } catch (t) {
                                        e = !1
                                    }
                                    return !e || Dn
                                }();
                                ! function(e, t) {
                                    Mn("blur", (t => {
                                        const n = null == t ? void 0 : t.target;
                                        if (!(n instanceof HTMLInputElement || n instanceof HTMLSelectElement || n instanceof HTMLTextAreaElement)) return;
                                        const o = jn(n);
                                        e.publishDomEvent("input_blurred", {
                                            element: o
                                        })
                                    }), t)
                                }(e, t),
                                function(e, t) {
                                    Mn("change", (t => {
                                        const n = null == t ? void 0 : t.target;
                                        if (!(n instanceof HTMLInputElement || n instanceof HTMLSelectElement || n instanceof HTMLTextAreaElement)) return;
                                        const o = {
                                            element: jn(n)
                                        };
                                        e.publishDomEvent("input_changed", o)
                                    }), t)
                                }(e, t),
                                function(e, t) {
                                    Mn("click", (t => {
                                        const n = null == t ? void 0 : t.target;
                                        if (!(n instanceof Element)) return;
                                        const o = function(e) {
                                            var t, n, o, r;
                                            return {
                                                id: e.id,
                                                tagName: e.tagName,
                                                href: null !== (t = e.href) && void 0 !== t ? t : null,
                                                name: null !== (n = e.name) && void 0 !== n ? n : null,
                                                type: null !== (o = e.type) && void 0 !== o ? o : null,
                                                value: null !== (r = e.value) && void 0 !== r ? r : null
                                            }
                                        }(n);
                                        e.publishDomEvent("clicked", {
                                            element: o
                                        })
                                    }), t)
                                }(e, t),
                                function(e, t) {
                                    Mn("focus", (t => {
                                        const n = null == t ? void 0 : t.target;
                                        if (!(n instanceof HTMLInputElement || n instanceof HTMLSelectElement || n instanceof HTMLTextAreaElement)) return;
                                        const o = jn(n);
                                        e.publishDomEvent("input_focused", {
                                            element: o
                                        })
                                    }), t)
                                }(e, t),
                                function(e, t) {
                                    Mn("submit", (t => {
                                        const n = null == t ? void 0 : t.target;
                                        if (!(n instanceof HTMLFormElement)) return;
                                        const o = [];
                                        for (let e = 0; e < n.elements.length; e++) {
                                            const t = n.elements[e];
                                            (t instanceof HTMLInputElement || t instanceof HTMLSelectElement || t instanceof HTMLTextAreaElement || t instanceof HTMLButtonElement) && o.push(jn(t))
                                        }
                                        e.publishDomEvent("form_submitted", {
                                            element: {
                                                action: null == n ? void 0 : n.action,
                                                id: null == n ? void 0 : n.id,
                                                elements: o
                                            }
                                        })
                                    }), t)
                                }(e, t)
                            }(m)), b.payload.status = "initialized", vt(b);
                            const t = (g = {
                                shopId: n,
                                surface: s,
                                pageUrl: r,
                                clientId: Mt(document.cookie)._shopify_y,
                                version: Re,
                                customerId: null == c || null === (v = c.customer) || void 0 === v ? void 0 : v.id
                            }, {
                                visitor: (e, t) => function(e, t, n) {
                                    const o = function(e, t) {
                                        return e && (e.email || e.phone) ? null != e && e.email && "string" != typeof e.email ? {
                                            valid: !1,
                                            error: "Email must be of type string"
                                        } : null != e && e.phone && "string" != typeof e.phone ? {
                                            valid: !1,
                                            error: "Phone must be of type string"
                                        } : null != t && t.appId && "string" != typeof t.appId ? {
                                            valid: !1,
                                            error: "appId must be of type string"
                                        } : null != t && t.apiClientId && "string" != typeof t.apiClientId ? {
                                            valid: !1,
                                            error: "apiClientId must be of type string"
                                        } : {
                                            valid: !0
                                        } : {
                                            valid: !1,
                                            error: "Visitor must have one of phone or email"
                                        }
                                    }(t, n);
                                    if (!o.valid) throw new $n(o.error || "Invalid input payload to visitorApi");
                                    const r = { ...e,
                                        ...t,
                                        apiClientId: (null == n ? void 0 : n.appId) || (null == n ? void 0 : n.apiClientId)
                                    };
                                    return Bt().then((() => gt("visitor", r))).catch((() => ut.notify("visitor error", {
                                        severity: "error",
                                        context: `v0/visitor-${e.surface}`,
                                        unhandled: !1,
                                        shopId: e.shopId
                                    }))), !0
                                }(g, e, t)
                            });
                            return {
                                publish: (e, t, n = {}) => m.publish(e, t, n),
                                publishCustomEvent: (e, t, n = {}) => m.publishCustomEvent(e, t, n),
                                publishDomEvent: (e, t, n = {}) => m.publishDomEvent(e, t, n),
                                visitor: (e, n) => t.visitor(e, n)
                            }
                        } catch (y) {
                            return y instanceof st || ut.notify(y, {
                                context: "v0/init",
                                shopId: n,
                                initConfig: t
                            }), self.console && console.error(y), b.payload.status = "failed", b.payload.errorMsg = null == y ? void 0 : y.message, vt(b), f.payload.runtimeErrorCaught = "true", a
                        }
                        var g
                    }
                }
            } catch (s) {
                return s instanceof st || ut.notify(s, {
                    context: "v0/createWebPixelsManager"
                }), self.console && console.error(s), i.payload.status = "manager-create-error", i.payload.errorMsg = null == s ? void 0 : s.message, vt(i, !0), {
                    init: () => a
                }
            }
        }();
        self[Pe] = Un
    })()
})();