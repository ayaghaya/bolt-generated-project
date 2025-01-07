!(function() {
    function t(t, e) {
        t = t.split('.');
        var n,
            r = a;
        t[0] in r || void 0 === r.execScript || r.execScript('var ' + t[0]);
        for (; t.length && (n = t.shift()); ) t.length || void 0 === e ? (r = r[n] && r[n] !== Object.prototype[n] ? r[n] : (r[n] = {})) : (r[n] = e);
    }
    function g(t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    }
    function i(t) {
        for (var e in t) if (t.hasOwnProperty(e)) return 1;
    }
    function o(t, e) {
        m.addEventListener ? m.addEventListener(t, e, !1) : m.attachEvent && m.attachEvent('on' + t, e);
    }
    function s() {
        (e.TAGGING = e.TAGGING || []), (e.TAGGING[1] = !0);
    }
    function c(t, e, n) {
        t = t.split('&');
        for (var r = 0; r < t.length; r++) {
            var a = t[r].split('=');
            if (decodeURIComponent(a[0]).replace(/\+/g, ' ') === e) return (e = a.slice(1).join('=')), n ? e : decodeURIComponent(e).replace(/\+/g, ' ');
        }
    }
    function l(t, e) {
        return (
            ('protocol' !== (e = e && String(e).toLowerCase()) && 'port' !== e) || (t.protocol = _(t.protocol) || _(v.location.protocol)),
            'port' === e
                ? (t.port = String(Number((t.hostname ? t : v.location).port) || ('http' == t.protocol ? 80 : 'https' == t.protocol ? 443 : '')))
                : 'host' === e && (t.hostname = (t.hostname || v.location.hostname).replace(w, '').toLowerCase()),
            r(t, e, void 0, void 0, void 0)
        );
    }
    function u(t) {
        var e = m.createElement('a');
        t && (e.href = t);
        var n = e.pathname;
        return (
            '/' !== n[0] && (t || s(), (n = '/' + n)),
            (t = e.hostname.replace(w, '')),
            { href: e.href, protocol: e.protocol, host: e.host, hostname: t, pathname: n, search: e.search, hash: e.hash, port: e.port }
        );
    }
    function r(t, e, n, r, a) {
        var o = _(t.protocol);
        switch ((e = e && String(e).toLowerCase())) {
            case 'url_no_fragment':
                (r = ''), t && t.href && (r = (r = t.href.indexOf('#')) < 0 ? t.href : t.href.substr(0, r)), (t = r);
                break;
            case 'protocol':
                t = o;
                break;
            case 'host':
                (t = t.hostname.replace(w, '').toLowerCase()), n && (r = /^www\d*\./.exec(t)) && r[0] && (t = t.substr(r[0].length));
                break;
            case 'port':
                t = String(Number(t.port) || ('http' == o ? 80 : 'https' == o ? 443 : ''));
                break;
            case 'path':
                t.pathname || t.hostname || s();
                t: if (((r = r || []), (n = (t = (t = '/' == t.pathname.substr(0, 1) ? t.pathname : '/' + t.pathname).split('/'))[t.length - 1]), Array.prototype.indexOf))
                    (r = r.indexOf(n)), (r = 'number' == typeof r ? r : -1);
                else {
                    for (a = 0; a < r.length; a++)
                        if (r[a] === n) {
                            r = a;
                            break t;
                        }
                    r = -1;
                }
                0 <= r && (t[t.length - 1] = ''), (t = t.join('/'));
                break;
            case 'query':
                (t = t.search.replace('?', '')), a && (t = c(t, a, void 0));
                break;
            case 'extension':
                t = (t = 1 < (t = t.pathname.split('.')).length ? t[t.length - 1] : '').split('/')[0];
                break;
            case 'fragment':
                t = t.hash.replace('#', '');
                break;
            default:
                t = t && t.href;
        }
        return t;
    }
    var f,
        h,
        d,
        a = this || self,
        p = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        v = window,
        m = document,
        e = {},
        w = /:[0-9]+$/,
        _ = function(t) {
            return t ? t.replace(':', '').toLowerCase() : '';
        };
    function b() {
        for (var t = f, e = {}, n = 0; n < t.length; ++n) e[t[n]] = n;
        return e;
    }
    function y() {
        var t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return (t += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase() + '0123456789-_') + '.';
    }
    function k() {
        function t(t) {
            n(t.target || t.srcElement || {});
        }
        var e,
            n = U,
            r = G,
            a = T();
        a.init ||
            (o('mousedown', t),
            o('keyup', t),
            o('submit', function(t) {
                r(t.target || t.srcElement || {});
            }),
            (e = HTMLFormElement.prototype.submit),
            (HTMLFormElement.prototype.submit = function() {
                r(this), e.call(this);
            }),
            (a.init = !0));
    }
    function x(t, e, n, r, a) {
        (t = { callback: t, domains: e, fragment: 2 === n, placement: n, forms: r, sameHost: a }), T().decorators.push(t);
    }
    function O(t, e, n) {
        for (var r = T().decorators, a = {}, o = 0; o < r.length; ++o) {
            var i,
                s = r[o];
            if ((i = !n || s.forms))
                t: {
                    i = s.domains;
                    var c = t,
                        l = !!s.sameHost;
                    if (i && (l || c !== m.location.hostname))
                        for (var u = 0; u < i.length; u++)
                            if (i[u] instanceof RegExp) {
                                if (i[u].test(c)) {
                                    i = !0;
                                    break t;
                                }
                            } else if (0 <= c.indexOf(i[u]) || (l && 0 <= i[u].indexOf(c))) {
                                i = !0;
                                break t;
                            }
                    i = !1;
                }
            i && (null == (i = s.placement) && (i = s.fragment ? 2 : 1), i === e && g(a, s.callback()));
        }
        return a;
    }
    var T = function() {
            var t = {},
                e = v.google_tag_data;
            return (v.google_tag_data = void 0 === e ? t : e), ((e = (t = v.google_tag_data).gl) && e.decorators) || ((e = { decorators: [] }), (t.gl = e)), e;
        },
        C = /(.*?)\*(.*?)\*(.*)/,
        S = /([^?#]+)(\?[^#]*)?(#.*)?/;
    function j(t) {
        return new RegExp('(.*?)(^|&)' + t + '=([^&]*)&?(.*)');
    }
    function A(t) {
        var e,
            n,
            r = [];
        for (e in t)
            !t.hasOwnProperty(e) ||
                (void 0 !== (n = t[e]) &&
                    n == n &&
                    null !== n &&
                    '[object Object]' !== n.toString() &&
                    (r.push(e),
                    r.push(
                        (function(t) {
                            (f = f || y()), (h = h || b());
                            for (var e = [], n = 0; n < t.length; n += 3) {
                                var r = n + 1 < t.length,
                                    a = n + 2 < t.length,
                                    o = t.charCodeAt(n),
                                    i = r ? t.charCodeAt(n + 1) : 0,
                                    s = a ? t.charCodeAt(n + 2) : 0,
                                    c = o >> 2,
                                    o = ((3 & o) << 4) | (i >> 4),
                                    i = ((15 & i) << 2) | (s >> 6);
                                (s &= 63), a || ((s = 64), r || (i = 64)), e.push(f[c], f[o], f[i], f[s]);
                            }
                            return e.join('');
                        })(String(n))
                    )));
        return (t = r.join('*')), ['1', E(t), t].join('*');
    }
    var E = function(t, e) {
        if (
            ((t = [
                window.navigator.userAgent,
                new Date().getTimezoneOffset(),
                window.navigator.userLanguage || window.navigator.language,
                Math.floor(new Date().getTime() / 60 / 1e3) - (void 0 === e ? 0 : e),
                t,
            ].join('*')),
            !(e = d))
        ) {
            e = Array(256);
            for (var n = 0; n < 256; n++) {
                for (var r = n, a = 0; a < 8; a++) r = 1 & r ? (r >>> 1) ^ 3988292384 : r >>> 1;
                e[n] = r;
            }
        }
        for (d = e, e = 4294967295, n = 0; n < t.length; n++) e = (e >>> 8) ^ d[255 & (e ^ t.charCodeAt(n))];
        return ((-1 ^ e) >>> 0).toString(36);
    };
    function N(t, e) {
        var n, r;
        return (t = j(t).exec(e)) && ((n = t[2]), (r = t[4]), (e = t[1]), r && (e = e + n + r)), e;
    }
    function I(t) {
        var e = void 0 === e ? 3 : e;
        try {
            if (t) {
                t: {
                    for (var n = 0; n < 3; ++n) {
                        var r = C.exec(t);
                        if (r) {
                            var a = r;
                            break t;
                        }
                        t = decodeURIComponent(t);
                    }
                    a = void 0;
                }
                if (a && '1' === a[1]) {
                    var o = a[2],
                        i = a[3];
                    t: {
                        for (a = 0; a < e; ++a)
                            if (o === E(i, a)) {
                                var s = !0;
                                break t;
                            }
                        s = !1;
                    }
                    if (s) {
                        e = {};
                        for (var c = i ? i.split('*') : [], i = 0; i < c.length; i += 2)
                            e[c[i]] = (function(r) {
                                function t(t) {
                                    for (; a < r.length; ) {
                                        var e = r.charAt(a++),
                                            n = h[e];
                                        if (null != n) return n;
                                        if (!/^[\s\xa0]*$/.test(e)) throw Error('Unknown base64 encoding at char: ' + e);
                                    }
                                    return t;
                                }
                                (f = f || y()), (h = h || b());
                                for (var e = '', a = 0; ; ) {
                                    var n = t(-1),
                                        o = t(0),
                                        i = t(64),
                                        s = t(64);
                                    if (64 === s && -1 === n) return e;
                                    (e += String.fromCharCode((n << 2) | (o >> 4))),
                                        64 != i && ((e += String.fromCharCode(((o << 4) & 240) | (i >> 2))), 64 != s && (e += String.fromCharCode(((i << 6) & 192) | s)));
                                }
                            })(c[i + 1]);
                        return e;
                    }
                }
            }
        } catch (t) {}
    }
    function R(n, t, e, r) {
        function a(t) {
            var e = (t = N(n, t)).charAt(t.length - 1);
            return t && '&' !== e && (t += '&'), t + s;
        }
        if (((r = void 0 !== r && r), !(i = S.exec(e)))) return '';
        e = i[1];
        var o = i[2] || '',
            i = i[3] || '',
            s = n + '=' + t;
        return r ? (i = '#' + a(i.substring(1))) : (o = '?' + a(o.substring(1))), '' + e + o + i;
    }
    function L(t, e) {
        var n,
            r = 'FORM' === (t.tagName || '').toUpperCase(),
            a = O(e, 1, r),
            o = O(e, 2, r);
        for (n in ((e = O(e, 3, r)), i(a) && ((a = A(a)), r ? M('_gl', a, t) : P('_gl', a, t, !1)), !r && i(o) && P('_gl', (r = A(o)), t, !0), e))
            e.hasOwnProperty(n) && $(n, e[n], t);
    }
    function $(t, e, n, r) {
        if (n.tagName) {
            if ('a' === n.tagName.toLowerCase()) return P(t, e, n, r);
            if ('form' === n.tagName.toLowerCase()) return M(t, e, n);
        }
        if ('string' == typeof n) return R(t, e, n, r);
    }
    function P(t, e, n, r) {
        n.href && ((t = R(t, e, n.href, void 0 !== r && r)), p.test(t) && (n.href = t));
    }
    function M(t, e, n) {
        if (n && n.action) {
            var r = (n.method || '').toLowerCase();
            if ('get' === r) {
                r = n.childNodes || [];
                for (var a = !1, o = 0; o < r.length; o++) {
                    var i = r[o];
                    if (i.name === t) {
                        i.setAttribute('value', e), (a = !0);
                        break;
                    }
                }
                a || ((r = m.createElement('input')).setAttribute('type', 'hidden'), r.setAttribute('name', t), r.setAttribute('value', e), n.appendChild(r));
            } else 'post' === r && ((t = R(t, e, n.action)), p.test(t) && (n.action = t));
        }
    }
    var U = function(t) {
            try {
                t: {
                    for (var e = 100; t && 0 < e; ) {
                        if (t.href && t.nodeName.match(/^a(?:rea)?$/i)) {
                            var n = t;
                            break t;
                        }
                        (t = t.parentNode), e--;
                    }
                    n = null;
                }
                var r;
                n && (('http:' !== (r = n.protocol) && 'https:' !== r) || L(n, n.hostname));
            } catch (t) {}
        },
        G = function(t) {
            try {
                t.action && L(t, l(u(t.action), 'host'));
            } catch (t) {}
        };
    t('google_tag_data.glBridge.auto', function(t, e, n, r) {
        k(), x(t, e, 'fragment' === n ? 2 : 1, !!r, !1);
    }),
        t('google_tag_data.glBridge.passthrough', function(t, e, n) {
            k(), x(t, [r(v.location, 'host', !0)], e, !!n, !0);
        }),
        t('google_tag_data.glBridge.decorate', function(t, e, n) {
            return $('_gl', (t = A(t)), e, !!n);
        }),
        t('google_tag_data.glBridge.generate', A),
        t('google_tag_data.glBridge.get', function(t, e) {
            var i,
                n =
                    ((i = !!e),
                    function(t) {
                        var e = u(v.location.href),
                            n = e.search.replace('?', ''),
                            r = c(n, '_gl', !0);
                        t.query = I(r || '') || {};
                        var a = (r = l(e, 'fragment')).match(j('_gl'));
                        function o(t, e) {
                            return (t = N('_gl', t)).length && (t = e + t), t;
                        }
                        (t.fragment = I((a && a[3]) || '') || {}),
                            i &&
                                ((a = e),
                                (e = n),
                                (n = r),
                                v.history &&
                                    v.history.replaceState &&
                                    ((r = j('_gl')).test(e) || r.test(n)) &&
                                    ((a = l(a, 'path')), (e = o(e, '?')), (n = o(n, '#')), v.history.replaceState({}, void 0, '' + a + e + n)));
                    });
            return (e = T()).data || ((e.data = { query: {}, fragment: {} }), n(e.data)), (n = {}), (e = e.data) && (g(n, e.query), t && g(n, e.fragment)), n;
        });
})(window),
    (function() {
        function i(t) {
            var e,
                n = 1;
            if (t) for (n = 0, e = t.length - 1; 0 <= e; e--) var r = t.charCodeAt(e), n = 0 != (r = 266338304 & (n = ((n << 6) & 268435455) + r + (r << 14))) ? n ^ (r >> 21) : n;
            return n;
        }
        function a(t) {
            this.C = t || [];
        }
        (a.prototype.set = function(t) {
            this.C[t] = !0;
        }),
            (a.prototype.encode = function() {
                for (var t = [], e = 0; e < this.C.length; e++) this.C[e] && (t[Math.floor(e / 6)] ^= 1 << e % 6);
                for (e = 0; e < t.length; e++) t[e] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.charAt(t[e] || 0);
                return t.join('') + '~';
            }),
            (be = null != (_e = window.GoogleAnalyticsObject)) && (be = -1 < (_e.constructor + '').indexOf('String')),
            (ke = be) && (ke = (ye = window.GoogleAnalyticsObject) ? ye.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '') : '');
        var o = ke || 'ga',
            c = /^(?:utma\.)?\d+\.\d+$/,
            l = /^amp-[\w.-]{22,64}$/,
            s = !1,
            r = new a();
        function g(t) {
            r.set(t);
        }
        function u(t) {
            t = new a((t = O(t)));
            for (var e = r.C.slice(), n = 0; n < t.C.length; n++) e[n] = e[n] || t.C[n];
            return new a(e).encode();
        }
        function f(t) {
            return 'function' == typeof t;
        }
        function h(t) {
            return null != t && -1 < (t.constructor + '').indexOf('String');
        }
        function d() {
            for (var t = W.navigator.userAgent + (Z.cookie || '') + (Z.referrer || ''), e = t.length, n = W.history.length; 0 < n; ) t += n-- ^ e++;
            return [Ot() ^ (2147483647 & i(t)), Math.round(new Date().getTime() / 1e3)].join('.');
        }
        function p() {}
        function v(t) {
            return encodeURIComponent instanceof Function ? encodeURIComponent(t) : (g(28), t);
        }
        function m(t, e, n, r) {
            try {
                t.addEventListener ? t.addEventListener(e, n, !!r) : t.attachEvent && t.attachEvent('on' + e, n);
            } catch (t) {
                g(27);
            }
        }
        function w(t, e, n) {
            var r, a;
            t &&
                ((a = ((a = (Z.querySelector && Z.querySelector('script[nonce]')) || null) && (a.nonce || (a.getAttribute && a.getAttribute('nonce')))) || ''),
                n
                    ? ((r = n = ''),
                      e && S.test(e) && (n = ' id="' + e + '"'),
                      a && j.test(a) && (r = ' nonce="' + a + '"'),
                      S.test(t) && Z.write('<script' + n + r + ' src="' + t + '"></script>'))
                    : (((n = Z.createElement('script')).type = 'text/javascript'),
                      (n.async = !0),
                      (n.src = t),
                      e && (n.id = e),
                      a && n.setAttribute('nonce', a),
                      (t = Z.getElementsByTagName('script')[0]).parentNode.insertBefore(n, t)));
        }
        function _(t, e) {
            return A(Z.location[e ? 'href' : 'search'], t);
        }
        function b() {
            var t = '' + Z.location.hostname;
            return 0 == t.indexOf('www.') ? t.substring(4) : t;
        }
        function y(t, e) {
            var n = t.indexOf(e);
            return !((5 != n && 6 != n) || ('/' != (t = t.charAt(n + e.length)) && '?' != t && '' != t && ':' != t));
        }
        function k(t, e) {
            if (1 == e.length && null != e[0] && 'object' == typeof e[0]) return e[0];
            for (var n = {}, r = Math.min(t.length + 1, e.length), a = 0; a < r; a++) {
                if ('object' == typeof e[a]) {
                    for (var o in e[a]) e[a].hasOwnProperty(o) && (n[o] = e[a][o]);
                    break;
                }
                a < t.length && (n[t[a]] = e[a]);
            }
            return n;
        }
        function x() {
            (this.b = []), (this.ea = {}), (this.m = {});
        }
        var O = function(t) {
                return (t = t.get(Le)), T(t) || (t = []), t;
            },
            T = function(t) {
                return '[object Array]' == Object.prototype.toString.call(Object(t));
            },
            C = function(t, e) {
                return 0 == t.indexOf(e);
            },
            S = /^[\w\-:/.?=&%!\[\]]+$/,
            j = /^[\w+/_-]+[=]{0,2}$/,
            A = function(t, e) {
                return (t = t.match('(?:&|#|\\?)' + v(e).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1') + '=([^&#]*)')) && 2 == t.length ? t[1] : '';
            };
        function E(t, e) {
            return setTimeout(t, e);
        }
        function N(t) {
            var e = Y._gaUserPrefs;
            if ((e && e.ioo && e.ioo()) || (t && !0 === Y['ga-disable-' + t])) return 1;
            try {
                var n = Y.external;
                if (n && n._gaUserPrefs && 'oo' == n._gaUserPrefs) return 1;
            } catch (t) {}
            for (t = [], e = String(J.cookie).split(';'), n = 0; n < e.length; n++) {
                var r = e[n].split('='),
                    a = r[0].replace(/^\s*|\s*$/g, '');
                a &&
                    'AMP_TOKEN' == a &&
                    ((r = r
                        .slice(1)
                        .join('=')
                        .replace(/^\s*|\s*$/g, '')) && (r = decodeURIComponent(r)),
                    t.push(r));
            }
            for (e = 0; e < t.length; e++) if ('$OPT_OUT' == t[e]) return 1;
            return J.getElementById('__gaOptOutExtension');
        }
        function I(t) {
            var e = [],
                n = Z.cookie.split(';');
            t = new RegExp('^\\s*' + t + '=\\s*(.*?)\\s*$');
            for (var r = 0; r < n.length; r++) {
                var a = n[r].match(t);
                a && e.push(a[1]);
            }
            return e;
        }
        function R(t, e, n, r, a, o, i) {
            if ((a = !N(a) && !(tt.test(Z.location.hostname) || ('/' == n && Q.test(r))))) {
                if (
                    (e && 1200 < e.length && (e = e.substring(0, 1200)),
                    (n = t + '=' + e + '; path=' + n + '; '),
                    o && (n += 'expires=' + new Date(new Date().getTime() + o).toGMTString() + '; '),
                    r && 'none' !== r && (n += 'domain=' + r + ';'),
                    i && (n += i + ';'),
                    (r = Z.cookie),
                    (Z.cookie = n),
                    !(r = r != Z.cookie))
                )
                    t: {
                        for (t = I(t), r = 0; r < t.length; r++)
                            if (e == t[r]) {
                                r = !0;
                                break t;
                            }
                        r = !1;
                    }
                return r;
            }
        }
        function L(t) {
            return encodeURIComponent
                ? encodeURIComponent(t)
                      .replace(/\(/g, '%28')
                      .replace(/\)/g, '%29')
                : t;
        }
        function $(t) {
            return (t || s || 'https:' == Z.location.protocol ? 'https:' : 'http:') + '//www.google-analytics.com';
        }
        function P(t) {
            switch (t) {
                default:
                case 1:
                    return 'https://www.google-analytics.com/gtm/js?id=';
                case 2:
                    return 'https://www.googletagmanager.com/gtag/js?id=';
            }
        }
        function M(t) {
            (this.name = 'len'), (this.message = t + '-8192');
        }
        function U(t, e, n) {
            if (((n = n || p), e.length <= 2036)) lt(t, e, n);
            else {
                if (!(e.length <= 8192)) throw (dt('len', e.length), new M(e.length));
                ht(t, e, n) || ut(t, e, n) || lt(t, e, n);
            }
        }
        function G(t, e, n, r) {
            ut(t + '?' + e, '', (r = r || p), n);
        }
        function D() {
            return (W.gaData = W.gaData || {});
        }
        function V(t) {
            var e = D();
            return (e[t] = e[t] || {});
        }
        function q() {
            this.M = [];
        }
        function F() {
            aa.D([p]);
        }
        function H(t) {
            t: {
                if (et.test(Z.referrer)) {
                    var e = Z.location.hostname.replace(nt, '');
                    e: {
                        var n = Z.referrer,
                            r = (n = n.replace(/^https?:\/\//, '')).replace(/^[^/]+/, '').split('/'),
                            a = r[2];
                        if (!(r = (r = 's' == a ? r[3] : a) ? decodeURIComponent(r) : r)) {
                            if (0 == n.indexOf('xn--')) {
                                n = '';
                                break e;
                            }
                            (n = n.match(/(.*)\.cdn\.ampproject\.org\/?$/)) && 2 == n.length && (r = n[1].replace(/-/g, '.').replace(/\.\./g, '-'));
                        }
                        n = r ? r.replace(nt, '') : '';
                    }
                    if (((r = e === n) || ((n = '.' + n), (r = e.substring(e.length - n.length, e.length) === n)), r)) {
                        e = !0;
                        break t;
                    }
                    g(78);
                }
                e = !1;
            }
            return e && !1 !== t;
        }
        (x.prototype.set = function(t, e, n) {
            this.b.push(t), n ? (this.m[':' + t] = e) : (this.ea[':' + t] = e);
        }),
            (x.prototype.get = function(t) {
                return (this.m.hasOwnProperty(':' + t) ? this.m : this.ea)[':' + t];
            }),
            (x.prototype.map = function(t) {
                for (var e = 0; e < this.b.length; e++) {
                    var n = this.b[e],
                        r = this.get(n);
                    r && t(n, r);
                }
            });
        var B,
            z,
            K,
            X,
            W = window,
            Z = document,
            Y = window,
            J = document,
            Q = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
            tt = /(^|\.)doubleclick\.net$/i,
            et = /^https?:\/\/[^/]*cdn\.ampproject\.org\//,
            nt = /^(?:www\.|m\.|amp\.)+/,
            rt = [],
            at = function(t, e) {
                var n = I('AMP_TOKEN');
                return 1 < n.length
                    ? (g(55), !1)
                    : '$OPT_OUT' == (n = decodeURIComponent(n[0] || '')) || '$ERROR' == n || N(e)
                    ? (g(62), !1)
                    : et.test(Z.referrer) || '$NOT_FOUND' != n
                    ? void 0 !== X
                        ? (g(56),
                          E(function() {
                              t(X);
                          }, 0),
                          !0)
                        : B
                        ? (rt.push(t), !0)
                        : '$RETRIEVING' == n
                        ? (g(57),
                          E(function() {
                              at(t, e);
                          }, 1e4),
                          !0)
                        : ((B = !0), (n && '$' != n[0]) || (st('$RETRIEVING', 3e4), setTimeout(it, 3e4), (n = '')), !!ot(n, e) && (rt.push(t), !0))
                    : (g(68), !1);
            },
            ot = function(e, n, r) {
                if (!window.JSON) return g(58), !1;
                var t = W.XMLHttpRequest;
                if (!t) return g(59), !1;
                var a = new t();
                return 'withCredentials' in a
                    ? (a.open('POST', (r || 'https://ampcid.google.com/v1/publisher:getClientId') + '?key=AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM', !0),
                      (a.withCredentials = !0),
                      a.setRequestHeader('Content-Type', 'text/plain'),
                      (a.onload = function() {
                          if (((B = !1), 4 == a.readyState)) {
                              try {
                                  200 != a.status && (g(61), ct('', '$ERROR', 3e4));
                                  var t = JSON.parse(a.responseText);
                                  t.optOut
                                      ? (g(63), ct('', '$OPT_OUT', 31536e6))
                                      : t.clientId
                                      ? ct(t.clientId, t.securityToken, 31536e6)
                                      : !r && t.alternateUrl
                                      ? (z && clearTimeout(z), (B = !0), ot(e, n, t.alternateUrl))
                                      : (g(64), ct('', '$NOT_FOUND', 36e5));
                              } catch (t) {
                                  g(65), ct('', '$ERROR', 3e4);
                              }
                              a = null;
                          }
                      }),
                      (t = { originScope: 'AMP_ECID_GOOGLE' }),
                      e && (t.securityToken = e),
                      a.send(JSON.stringify(t)),
                      (z = E(function() {
                          g(66), ct('', '$ERROR', 3e4);
                      }, 1e4)),
                      !0)
                    : (g(60), !1);
            },
            it = function() {
                B = !1;
            },
            st = function(t, e) {
                if (void 0 === K) {
                    K = '';
                    for (var n = ar(), r = 0; r < n.length; r++) {
                        var a = n[r];
                        if (R('AMP_TOKEN', encodeURIComponent(t), '/', a, '', e)) return void (K = a);
                    }
                }
                R('AMP_TOKEN', encodeURIComponent(t), '/', K, '', e);
            },
            ct = function(t, e, n) {
                for (z && clearTimeout(z), e && st(e, n), X = t, e = rt, rt = [], n = 0; n < e.length; n++) e[n](t);
            },
            lt = function(t, e, n) {
                var r = ((t = t + '?' + e), ((e = Z.createElement('img')).width = 1), (e.height = 1), (e.src = t), e);
                r.onload = r.onerror = function() {
                    (r.onload = null), (r.onerror = null), n();
                };
            },
            ut = function(t, e, n, r) {
                var a = W.XMLHttpRequest;
                if (!a) return !1;
                var o = new a();
                return (
                    'withCredentials' in o &&
                    ((t = t.replace(/^http:/, 'https:')),
                    o.open('POST', t, !0),
                    (o.withCredentials = !0),
                    o.setRequestHeader('Content-Type', 'text/plain'),
                    (o.onreadystatechange = function() {
                        if (4 == o.readyState) {
                            if (r && 'text/plain' === o.getResponseHeader('Content-Type'))
                                try {
                                    gt(r, o.responseText, n);
                                } catch (t) {
                                    dt('xhr', 'rsp'), n();
                                }
                            else n();
                            o = null;
                        }
                    }),
                    o.send(e),
                    !0)
                );
            },
            gt = function(t, e, n) {
                if (e.length < 1) dt('xhr', 'ver', '0'), n();
                else if (3 < t.count++) dt('xhr', 'tmr', '' + t.count), n();
                else {
                    var r = e.charAt(0);
                    if ('1' === r) ft(t, e.substring(1), n);
                    else if (t.V && '2' === r) {
                        var a = e.substring(1).split(','),
                            o = 0;
                        for (
                            e = function() {
                                ++o === a.length && n();
                            },
                                r = 0;
                            r < a.length;
                            r++
                        )
                            ft(t, a[r], e);
                    } else dt('xhr', 'ver', String(e.length)), n();
                }
            },
            ft = function(t, e, n) {
                if (0 === e.length) n();
                else {
                    var r = e.charAt(0);
                    switch (r) {
                        case 'd':
                            G('https://stats.g.doubleclick.net/j/collect', t.U, t, n);
                            break;
                        case 'g':
                            lt('https://www.google.%/ads/ga-audiences'.replace('%', 'com'), t.google, n),
                                (e = e.substring(1)) && (/^[a-z.]{1,6}$/.test(e) ? lt('https://www.google.%/ads/ga-audiences'.replace('%', e), t.google, p) : dt('tld', 'bcc', e));
                            break;
                        case 'G':
                            if (t.V) {
                                t.V('G-' + e.substring(1)), n();
                                break;
                            }
                        case 'x':
                            if (t.V) {
                                t.V(), n();
                                break;
                            }
                        default:
                            dt('xhr', 'brc', r), n();
                    }
                }
            },
            ht = function(t, e, n) {
                return !!W.navigator.sendBeacon && !!W.navigator.sendBeacon(t, e) && (n(), !0);
            },
            dt = function(t, e, n) {
                1 <= 100 * Math.random() ||
                    N('?') ||
                    ((t = ['t=error', '_e=' + t, '_v=j87', 'sr=1']),
                    e && t.push('_f=' + e),
                    n && t.push('_m=' + v(n.substring(0, 100))),
                    t.push('aip=1'),
                    t.push('z=' + Ot()),
                    lt($(!0) + '/u/d', t.join('&'), p));
            };
        function pt(t) {
            if (100 != t.get(mn) && i(St(t, tn)) % 1e4 >= 100 * jt(t, mn)) throw 'abort';
        }
        function vt(t) {
            if (N(St(t, an))) throw 'abort';
        }
        function mt() {
            var t = Z.location.protocol;
            if ('http:' != t && 'https:' != t) throw 'abort';
        }
        function wt(n) {
            try {
                W.navigator.sendBeacon ? g(42) : W.XMLHttpRequest && 'withCredentials' in new W.XMLHttpRequest() && g(40);
            } catch (t) {}
            n.set(Re, u(n), !0), n.set(Ht, jt(n, Ht) + 1);
            var r = [];
            Rt.map(function(t, e) {
                e.F && null != (t = n.get(t)) && t != e.defaultValue && ('boolean' == typeof t && (t *= 1), r.push(e.F + '=' + v('' + t)));
            }),
                !1 === n.get(Gn) && r.push('npa=1'),
                r.push(
                    'z=' +
                        (function() {
                            try {
                                var t = new Uint32Array(1);
                                return W.crypto.getRandomValues(t), 2147483647 & t[0];
                            } catch (t) {
                                return Ot();
                            }
                        })()
                ),
                n.set(Vt, r.join('&'), !0);
        }
        function _t(t) {
            var e = St(t, Ft);
            !e && t.get(qt) && (e = 'beacon');
            var n = St(t, Rn),
                r = St(t, jn),
                a = n || (r || $(!1) + '') + '/collect';
            'd' === St(t, Mn)
                ? ((a = n || (r || $(!1) + '') + '/j/collect'), (e = t.get(Pn) || void 0), G(a, St(t, Vt), e, t.Z(Dt)))
                : e
                ? ((n = St(t, Vt)), (r = (r = t.Z(Dt)) || p), 'image' == e ? lt(a, n, r) : ('xhr' == e && ut(a, n, r)) || ('beacon' == e && ht(a, n, r)) || U(a, n, r))
                : U(a, St(t, Vt), t.Z(Dt)),
                (e = (a = V((a = St(t, an)))).hitcount),
                (a.hitcount = e ? e + 1 : 1),
                a.first_hit || (a.first_hit = new Date().getTime()),
                delete V((a = St(t, an))).pending_experiments,
                t.set(Dt, p, !0);
        }
        function bt(t) {
            D().expId && t.set(xe, D().expId), D().expVar && t.set(Oe, D().expVar);
            var e = St(t, an);
            if ((e = V(e).pending_experiments)) {
                var n = [];
                for (r in e) e.hasOwnProperty(r) && e[r] && n.push(encodeURIComponent(r) + '.' + encodeURIComponent(e[r]));
                var r = n.join('!');
            } else r = void 0;
            r && ((e = t.get(Te)) && (r = e + '!' + r), t.set(Te, r, !0));
        }
        function yt() {
            if (W.navigator && 'preview' == W.navigator.loadPurpose) throw 'abort';
        }
        function kt(t) {
            var e = W.gaDevIds || [];
            if (T(e)) {
                var n = t.get('&did');
                h(n) && 0 < n.length && (e = e.concat(n.split(','))), (n = []);
                for (var r, a = 0; a < e.length; a++) {
                    t: {
                        for (r = 0; r < n.length; r++)
                            if (e[a] == n[r]) {
                                r = !0;
                                break t;
                            }
                        r = !1;
                    }
                    r || n.push(e[a]);
                }
                0 != n.length && t.set('&did', n.join(','), !0);
            }
        }
        function xt(t) {
            if (!t.get(an)) throw 'abort';
        }
        (q.prototype.add = function(t) {
            this.M.push(t);
        }),
            (q.prototype.D = function(t) {
                try {
                    for (var e = 0; e < this.M.length; e++) {
                        var n = t.get(this.M[e]);
                        n && f(n) && n.call(W, t);
                    }
                } catch (t) {}
                (e = t.get(Dt)) != p && f(e) && (t.set(Dt, p, !0), setTimeout(e, 10));
            });
        var Ot = function() {
            return Math.round(2147483647 * Math.random());
        };
        function Tt(t) {
            var e = jt(t, Ae);
            500 <= e && g(15);
            var n = St(t, Gt);
            if ('transaction' != n && 'item' != n) {
                n = jt(t, Ne);
                var r = new Date().getTime(),
                    a = jt(t, Ee);
                if ((0 == a && t.set(Ee, r), 0 < (a = Math.round((2 * (r - a)) / 1e3)) && ((n = Math.min(n + a, 20)), t.set(Ee, r)), n <= 0)) throw 'abort';
                t.set(Ne, --n);
            }
            t.set(Ae, ++e);
        }
        function Ct() {
            this.data = new x();
        }
        function St(t, e) {
            return null == (t = t.get(e)) ? '' : '' + t;
        }
        function jt(t, e) {
            return null == (t = t.get(e)) || '' === t ? 0 : Number(t);
        }
        function At(t, e, n, r, a) {
            (this.name = t), (this.F = e), (this.Z = r), (this.o = a), (this.defaultValue = n);
        }
        function Et(t, e, n, r, a) {
            return (t = new At(t, e, n, r, a)), Rt.set(t.name, t), t.name;
        }
        function t(t, e) {
            Lt.push([new RegExp('^' + t + '$'), e]);
        }
        function e(t, e, n) {
            return Et(t, e, n, void 0, Nt);
        }
        function Nt() {}
        (Ct.prototype.get = function(t) {
            var e = $t(t),
                n = this.data.get(t);
            return e && null == n && (n = f(e.defaultValue) ? e.defaultValue() : e.defaultValue), e && e.Z ? e.Z(this, t, n) : n;
        }),
            (Ct.prototype.Z = function(t) {
                return (t = this.get(t)) && f(t) ? t : p;
            }),
            (Ct.prototype.set = function(t, e, n) {
                if (t)
                    if ('object' == typeof t) for (var r in t) t.hasOwnProperty(r) && It(this, r, t[r], n);
                    else It(this, t, e, n);
            });
        var It = function(t, e, n, r) {
                null != n && e === an && Dr.test(n);
                var a = $t(e);
                a && a.o ? a.o(t, e, n, r) : t.data.set(e, n, r);
            },
            Rt = new x(),
            Lt = [],
            $t = function(t) {
                var e = Rt.get(t);
                if (!e)
                    for (var n = 0; n < Lt.length; n++) {
                        var r = Lt[n],
                            a = r[0].exec(t);
                        if (a) {
                            (e = r[1](a)), Rt.set(e.name, e);
                            break;
                        }
                    }
                return e;
            },
            Pt = e('apiVersion', 'v'),
            Mt = e('clientVersion', '_v');
        Et('anonymizeIp', 'aip');
        var Ut = Et('adSenseId', 'a'),
            Gt = Et('hitType', 't'),
            Dt = Et('hitCallback'),
            Vt = Et('hitPayload');
        Et('nonInteraction', 'ni'), Et('currencyCode', 'cu'), Et('dataSource', 'ds');
        var qt = Et('useBeacon', void 0, !1),
            Ft = Et('transport');
        Et('sessionControl', 'sc', ''), Et('sessionGroup', 'sg'), Et('queueTime', 'qt');
        var Ht = Et('_s', '_s');
        Et('screenName', 'cd');
        var Bt = Et('location', 'dl', ''),
            zt = Et('referrer', 'dr'),
            n = Et('page', 'dp', '');
        Et('hostname', 'dh');
        var Kt = Et('language', 'ul'),
            Xt = Et('encoding', 'de');
        Et('title', 'dt', function() {
            return Z.title || void 0;
        }),
            t('contentGroup([0-9]+)', function(t) {
                return new At(t[0], 'cg' + t[1]);
            });
        var Wt = Et('screenColors', 'sd'),
            Zt = Et('screenResolution', 'sr'),
            Yt = Et('viewportSize', 'vp'),
            Jt = Et('javaEnabled', 'je'),
            Qt = Et('flashVersion', 'fl');
        Et('campaignId', 'ci'), Et('campaignName', 'cn'), Et('campaignSource', 'cs'), Et('campaignMedium', 'cm'), Et('campaignKeyword', 'ck'), Et('campaignContent', 'cc');
        var te = Et('eventCategory', 'ec'),
            ee = Et('eventAction', 'ea'),
            ne = Et('eventLabel', 'el'),
            re = Et('eventValue', 'ev'),
            ae = Et('socialNetwork', 'sn'),
            oe = Et('socialAction', 'sa'),
            ie = Et('socialTarget', 'st'),
            se = Et('l1', 'plt'),
            ce = Et('l2', 'pdt'),
            le = Et('l3', 'dns'),
            ue = Et('l4', 'rrt'),
            ge = Et('l5', 'srt'),
            fe = Et('l6', 'tcp'),
            he = Et('l7', 'dit'),
            de = Et('l8', 'clt'),
            pe = Et('l9', '_gst'),
            ve = Et('l10', '_gbt'),
            me = Et('l11', '_cst'),
            we = Et('l12', '_cbt'),
            _e = Et('timingCategory', 'utc'),
            be = Et('timingVar', 'utv'),
            ye = Et('timingLabel', 'utl'),
            ke = Et('timingValue', 'utt');
        Et('appName', 'an'), Et('appVersion', 'av', ''), Et('appId', 'aid', ''), Et('appInstallerId', 'aiid', ''), Et('exDescription', 'exd'), Et('exFatal', 'exf');
        var xe = Et('expId', 'xid'),
            Oe = Et('expVar', 'xvar'),
            Te = Et('exp', 'exp'),
            Ce = Et('_utma', '_utma'),
            Se = Et('_utmz', '_utmz'),
            je = Et('_utmht', '_utmht'),
            Ae = Et('_hc', void 0, 0),
            Ee = Et('_ti', void 0, 0),
            Ne = Et('_to', void 0, 20);
        t('dimension([0-9]+)', function(t) {
            return new At(t[0], 'cd' + t[1]);
        }),
            t('metric([0-9]+)', function(t) {
                return new At(t[0], 'cm' + t[1]);
            }),
            Et(
                'linkerParam',
                void 0,
                void 0,
                function(t) {
                    if (t.get(Ie)) return g(35), gr.generate(yr(t));
                    var e = St(t, tn),
                        n = St(t, bn) || '';
                    return (e = '_ga=2.' + v(pr(n + e, 0) + '.' + n + '-' + e)) + (t = (t = kr(t)) ? (g(44), '&_gac=1.' + v([pr(t.qa, 0), t.timestamp, t.qa].join('.'))) : '');
                },
                Nt
            );
        var Ie = e('_cd2l', void 0, !1),
            Re = Et('usage', '_u'),
            Le = Et('_um');
        Et(
            'forceSSL',
            void 0,
            void 0,
            function() {
                return s;
            },
            function(t, e, n) {
                g(34), (s = !!n);
            }
        );
        var $e = Et('_j1', 'jid'),
            Pe = Et('_j2', 'gjid');
        t('\\&(.*)', function(t) {
            var n,
                r,
                e = new At(t[0], t[1]),
                a =
                    ((n = t[0].substring(1)),
                    Rt.map(function(t, e) {
                        e.F == n && (r = e);
                    }),
                    r && r.name);
            return (
                a &&
                    ((e.Z = function(t) {
                        return t.get(a);
                    }),
                    (e.o = function(t, e, n, r) {
                        t.set(a, n, r);
                    }),
                    (e.F = void 0)),
                e
            );
        });
        var Me = e('_oot'),
            Ue = Et('previewTask'),
            Ge = Et('checkProtocolTask'),
            De = Et('validationTask'),
            Ve = Et('checkStorageTask'),
            qe = Et('historyImportTask'),
            Fe = Et('samplerTask'),
            He = Et('_rlt'),
            Be = Et('buildHitTask'),
            ze = Et('sendHitTask'),
            Ke = Et('ceTask'),
            Xe = Et('devIdTask'),
            We = Et('timingTask'),
            Ze = Et('displayFeaturesTask'),
            Ye = Et('customTask'),
            Je = Et('fpsCrossDomainTask'),
            Qe = e('name'),
            tn = e('clientId', 'cid'),
            en = e('clientIdTime'),
            nn = e('storedClientId'),
            rn = Et('userId', 'uid'),
            an = e('trackingId', 'tid'),
            on = e('cookieName', void 0, '_ga'),
            sn = e('cookieDomain'),
            cn = e('cookiePath', void 0, '/'),
            ln = e('cookieExpires', void 0, 63072e3),
            un = e('cookieUpdate', void 0, !0),
            gn = e('cookieFlags', void 0, ''),
            fn = e('legacyCookieDomain'),
            hn = e('legacyHistoryImport', void 0, !0),
            dn = e('storage', void 0, 'cookie'),
            pn = e('allowLinker', void 0, !1),
            vn = e('allowAnchor', void 0, !0),
            mn = e('sampleRate', 'sf', 100),
            wn = e('siteSpeedSampleRate', void 0, 1),
            _n = e('alwaysSendReferrer', void 0, !1),
            bn = e('_gid', '_gid'),
            yn = e('_gcn'),
            kn = e('useAmpClientId'),
            xn = e('_gclid'),
            On = e('_gt'),
            Tn = e('_ge', void 0, 7776e6),
            Cn = e('_gclsrc'),
            Sn = e('storeGac', void 0, !0),
            jn = Et('_x_19'),
            An = Et('_fplc', '_fplc'),
            En = e('_cs'),
            Nn = e('_useUp', void 0, !1),
            In = Et('up', 'up'),
            Rn = Et('transportUrl'),
            Ln = Et('_r', '_r'),
            $n = Et('_slc', '_slc'),
            Pn = Et('_dp'),
            Mn = Et('_jt', void 0, 'n'),
            Un = Et('allowAdFeatures', void 0, !0),
            Gn = Et('allowAdPersonalizationSignals', void 0, !0);
        function Dn(e, t, n, r) {
            t[e] = function() {
                try {
                    return r && g(r), n.apply(this, arguments);
                } catch (t) {
                    throw (dt('exc', e, t && t.name), t);
                }
            };
        }
        function Vn(t) {
            var e;
            (e = St(t, jn) && t.get(Ie)) && (e = !((e = gr.get(t.get(vn))) && e._fplc)), e && t.set(An, Bn(t) || '0');
        }
        function qn(t) {
            var e, n, r, a, o, i, s, c;
            'cookie' == St(t, dn) &&
                ((!t.get(un) && St(t, nn) == St(t, tn)) || ((e = 1e3 * jt(t, ln)), Yn(t, tn, on, e), t.data.set(nn, St(t, tn))),
                (!t.get(un) && Jn(t) == St(t, bn)) || Yn(t, bn, yn, 864e5),
                t.get(Sn)
                    ? (n = St(t, xn)) &&
                      ((r = Math.min(jt(t, Tn), 1e3 * jt(t, ln))),
                      (r = Math.min(r, 1e3 * jt(t, On) + r - new Date().getTime())),
                      t.data.set(Tn, r),
                      (e = {}),
                      (a = St(t, On)),
                      (o = St(t, Cn)),
                      (i = or(St(t, cn))),
                      (s = rr(St(t, sn))),
                      (c = St(t, an)),
                      (t = St(t, gn)),
                      o && 'aw.ds' != o ? e && (e.ua = !0) : ((n = ['1', a, L(n)].join('.')), 0 < r && (e && (e.ta = !0), R('_gac_' + L(c), n, i, s, c, r, t))),
                      sr(e))
                    : g(75));
        }
        function Fn(t) {
            if ('cookie' == St(t, dn) && !Zn && (qn(t), !Zn)) throw 'abort';
        }
        function Hn(t) {
            var e, n, r;
            t.get(hn) &&
                ((e = St(t, sn)),
                (r = cr('__utma', (n = St(t, fn) || b()), e)) &&
                    (g(19), t.set(je, new Date().getTime(), !0), t.set(Ce, r.R), (e = cr('__utmz', n, e)) && r.hash == e.hash && t.set(Se, e.R)));
        }
        var Bn = function(t) {
                if ('cookie' == t.get(dn)) return 0 < (t = I('FPLC')).length ? t[0] : void 0;
            },
            zn = function(t) {
                var e,
                    n = {};
                (Kn(n) || Xn(n)) &&
                    (null == (e = n[se]) ||
                        1 / 0 == e ||
                        isNaN(e) ||
                        (0 < e
                            ? (Wn(n, le),
                              Wn(n, fe),
                              Wn(n, ge),
                              Wn(n, ce),
                              Wn(n, ue),
                              Wn(n, he),
                              Wn(n, de),
                              Wn(n, pe),
                              Wn(n, ve),
                              Wn(n, me),
                              Wn(n, we),
                              E(function() {
                                  t(n);
                              }, 10))
                            : m(
                                  W,
                                  'load',
                                  function() {
                                      zn(t);
                                  },
                                  !1
                              )));
            },
            Kn = function(t) {
                var e = W.performance || W.webkitPerformance;
                if (!(e = e && e.timing)) return !1;
                var n = e.navigationStart;
                return (
                    0 != n &&
                    ((t[se] = e.loadEventStart - n),
                    (t[le] = e.domainLookupEnd - e.domainLookupStart),
                    (t[fe] = e.connectEnd - e.connectStart),
                    (t[ge] = e.responseStart - e.requestStart),
                    (t[ce] = e.responseEnd - e.responseStart),
                    (t[ue] = e.fetchStart - n),
                    (t[he] = e.domInteractive - n),
                    (t[de] = e.domContentLoadedEventStart - n),
                    (t[pe] = oa.L - n),
                    (t[ve] = oa.ya - n),
                    W.google_tag_manager && W.google_tag_manager._li && ((e = W.google_tag_manager._li), (t[me] = e.cst), (t[we] = e.cbt)),
                    !0)
                );
            },
            Xn = function(t) {
                if (W.top != W) return !1;
                var e = W.external,
                    n = e && e.onloadT;
                return e && !e.isValidLoadTime && (n = void 0), 2147483648 < n && (n = void 0), 0 < n && e.setPageReadyTime(), null != n && ((t[se] = n), !0);
            },
            Wn = function(t, e) {
                var n = t[e];
                (isNaN(n) || 1 / 0 == n || n < 0) && (t[e] = void 0);
            },
            Zn = !1,
            Yn = function(t, e, n, r) {
                var a = Qn(t, e);
                if (a) {
                    n = St(t, n);
                    var o = or(St(t, cn)),
                        i = rr(St(t, sn)),
                        s = St(t, gn),
                        c = St(t, an);
                    if ('auto' != i) R(n, a, o, i, c, r, s) && (Zn = !0);
                    else {
                        g(32);
                        for (var l = ar(), u = 0; u < l.length; u++) if (((i = l[u]), t.data.set(sn, i), R(n, (a = Qn(t, e)), o, i, c, r, s))) return void (Zn = !0);
                        t.data.set(sn, 'auto');
                    }
                }
            },
            Jn = function(t) {
                var e = I(St(t, yn));
                return tr(t, e);
            },
            Qn = function(t, e) {
                e = L(St(t, e));
                var n = rr(St(t, sn)).split('.').length;
                return 1 < (t = ir(St(t, cn))) && (n += '-' + t), e ? ['GA1', n, e].join('.') : '';
            },
            tr = function(t, e) {
                return er(e, St(t, sn), St(t, cn));
            },
            er = function(t, e, n) {
                if (t && !(t.length < 1)) {
                    for (var r = [], a = 0; a < t.length; a++) {
                        var o = t[a],
                            i = o.split('.'),
                            s = i.shift();
                        (i =
                            ('GA1' == s || '1' == s) && 1 < i.length
                                ? (1 == (o = i.shift().split('-')).length && (o[1] = '1'), (o[0] *= 1), (o[1] *= 1), { H: o, s: i.join('.') })
                                : l.test(o)
                                ? { H: [0, 0], s: o }
                                : void 0) && r.push(i);
                    }
                    return 1 == r.length
                        ? (g(13), r[0].s)
                        : 0 != r.length
                        ? (g(14), 1 == (r = nr(r, rr(e).split('.').length, 0)).length ? r[0].s : (1 < (r = nr(r, ir(n), 1)).length && g(41), r[0] && r[0].s))
                        : void g(12);
                }
                g(12);
            },
            nr = function(t, e, n) {
                for (var r, a = [], o = [], i = 0; i < t.length; i++) {
                    var s = t[i];
                    s.H[n] == e ? a.push(s) : null == r || s.H[n] < r ? ((o = [s]), (r = s.H[n])) : s.H[n] == r && o.push(s);
                }
                return 0 < a.length ? a : o;
            },
            rr = function(t) {
                return 0 == t.indexOf('.') ? t.substr(1) : t;
            },
            ar = function() {
                var t = [],
                    e = b().split('.');
                if (4 == e.length) {
                    var n = e[e.length - 1];
                    if (parseInt(n, 10) == n) return ['none'];
                }
                for (n = e.length - 2; 0 <= n; n--) t.push(e.slice(n).join('.'));
                return (e = Z.location.hostname), tt.test(e) || Q.test(e) || t.push('none'), t;
            },
            or = function(t) {
                return t ? (1 < t.length && t.lastIndexOf('/') == t.length - 1 && (t = t.substr(0, t.length - 1)), 0 != t.indexOf('/') && (t = '/' + t), t) : '/';
            },
            ir = function(t) {
                return '/' == (t = or(t)) ? 1 : t.split('/').length;
            },
            sr = function(t) {
                t.ta && g(77), t.na && g(74), t.pa && g(73), t.ua && g(69);
            };
        function cr(t, e, n) {
            'none' == e && (e = '');
            var r = [],
                a = I(t);
            t = '__utma' == t ? 6 : 2;
            for (var o = 0; o < a.length; o++) {
                var i = ('' + a[o]).split('.');
                i.length >= t && r.push({ hash: i[0], R: a[o], O: i });
            }
            if (0 != r.length) return (1 != r.length && (lr(e, r) || lr(n, r) || lr(null, r))) || r[0];
        }
        function lr(t, e) {
            var n;
            null == t ? (n = t = 1) : ((n = i(t)), (t = i(C(t, '.') ? t.substring(1) : '.' + t)));
            for (var r = 0; r < e.length; r++) if (e[r].hash == n || e[r].hash == t) return e[r];
        }
        var ur = new RegExp(/^https?:\/\/([^\/:]+)/),
            gr = W.google_tag_data.glBridge,
            fr = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/,
            hr = /(.*)([?&#])(?:_gac=[^&#]*)(?:&?)(.*)/;
        function dr(t, e) {
            var n = new Date(),
                r = W.navigator,
                a = r.plugins || [];
            for (t = [t, r.userAgent, n.getTimezoneOffset(), n.getYear(), n.getDate(), n.getHours(), n.getMinutes() + e], e = 0; e < a.length; ++e) t.push(a[e].description);
            return i(t.join('.'));
        }
        function pr(t, e) {
            var n = new Date(),
                r = W.navigator,
                a = n.getHours() + Math.floor((n.getMinutes() + e) / 60);
            return i(
                [t, r.userAgent, r.language || '', n.getTimezoneOffset(), n.getYear(), n.getDate() + Math.floor(a / 24), (24 + a) % 24, (60 + n.getMinutes() + e) % 60].join('.')
            );
        }
        function vr(t) {
            g(48), (this.target = t), (this.T = !1);
        }
        vr.prototype.ca = function(t, e) {
            if (t) {
                if (this.target.get(Ie)) return gr.decorate(yr(this.target), t, e);
                if (t.tagName) {
                    if ('a' == t.tagName.toLowerCase()) return void (t.href && (t.href = mr(this, t.href, e)));
                    if ('form' == t.tagName.toLowerCase()) return wr(this, t);
                }
                return 'string' == typeof t ? mr(this, t, e) : void 0;
            }
        };
        var mr = function(t, e, n) {
                (a = fr.exec(e)) && 3 <= a.length && (e = a[1] + (a[3] ? a[2] + a[3] : '')),
                    (a = hr.exec(e)) && 3 <= a.length && (e = a[1] + (a[3] ? a[2] + a[3] : '')),
                    (t = t.target.get('linkerParam'));
                var r = e.indexOf('?'),
                    a = e.indexOf('#');
                return (
                    n ? (e += (-1 == a ? '#' : '&') + t) : ((n = -1 == r ? '?' : '&'), (e = -1 == a ? e + (n + t) : e.substring(0, a) + n + t + e.substring(a))),
                    (e = e.replace(/&+_ga=/, '&_ga=')).replace(/&+_gac=/, '&_gac=')
                );
            },
            wr = function(t, e) {
                if (e && e.action)
                    if ('get' == e.method.toLowerCase()) {
                        t = t.target.get('linkerParam').split('&');
                        for (var n = 0; n < t.length; n++) {
                            for (var r = (a = t[n].split('='))[1], a = a[0], o = e.childNodes || [], i = !1, s = 0; s < o.length; s++)
                                if (o[s].name == a) {
                                    o[s].setAttribute('value', r), (i = !0);
                                    break;
                                }
                            i || ((o = Z.createElement('input')).setAttribute('type', 'hidden'), o.setAttribute('name', a), o.setAttribute('value', r), e.appendChild(o));
                        }
                    } else 'post' == e.method.toLowerCase() && (e.action = mr(t, e.action));
            };
        function _r(t, e) {
            if (e != Z.location.hostname)
                for (var n = 0; n < t.length; n++)
                    if (t[n] instanceof RegExp) {
                        if (t[n].test(e)) return 1;
                    } else if (0 <= e.indexOf(t[n])) return 1;
        }
        function br(t, e) {
            return e != dr(t, 0) && e != dr(t, -1) && e != dr(t, -2) && e != pr(t, 0) && e != pr(t, -1) && e != pr(t, -2);
        }
        function yr(t) {
            var e = kr(t),
                n = {};
            return (
                (n._ga = t.get(tn)),
                (n._gid = t.get(bn) || void 0),
                (n._gac = e ? [e.qa, e.timestamp].join('.') : void 0),
                (e = t.get(An)),
                (t = Bn(t)),
                (n._fplc = e && '0' !== e ? e : t),
                n
            );
        }
        function kr(t) {
            function e(t) {
                return null == t || '' === t ? 0 : Number(t);
            }
            var n = t.get(xn);
            if (n && t.get(Sn)) {
                var r = e(t.get(On));
                if (!(1e3 * r + e(t.get(Tn)) <= new Date().getTime())) return { timestamp: r, qa: n };
                g(76);
            }
        }
        function xr(t, e, n, r) {
            n = n || {};
            var a = 1;
            Er.test(e) && (a = 2);
            var o,
                i,
                s = { id: e, type: a, B: n.dataLayer || 'dataLayer', G: !1 },
                c = void 0;
            return (
                t.get('&gtm') == e && (s.G = !0),
                1 === a
                    ? ((s.ia = !!t.get('anonymizeIp')),
                      (s.sync = r),
                      't0' != (e = String(t.get('name'))) && (s.target = e),
                      N(String(t.get('trackingId'))) ||
                          ((s.clientId = String(t.get(tn))),
                          (s.ka = Number(t.get(en))),
                          (n = n.palindrome ? Ir : Nr),
                          (n = (n = Z.cookie.replace(/^|(; +)/g, ';').match(n))
                              ? n
                                    .sort()
                                    .join('')
                                    .substring(1)
                              : void 0),
                          (s.la = n),
                          (s.qa = A(St(t, Bt), 'gclid'))))
                    : 2 === a && ((s.context = 'c'), (c = { allow_google_signals: t.get(Un), allow_ad_personalization_signals: t.get(Gn) })),
                (o = s),
                (t = c),
                (c = new Date().getTime()),
                (W[o.B] = W[o.B] || []),
                (c = { 'gtm.start': c }),
                o.sync || (c.event = 'gtm.js'),
                W[o.B].push(c),
                2 === o.type &&
                    (function(t, e, n) {
                        W[o.B].push(arguments);
                    })('config', o.id, t),
                (i = P(s.type) + v(s.id)),
                'dataLayer' != s.B && l('l', s.B),
                l('cx', s.context),
                l('t', s.target),
                l('cid', s.clientId),
                l('cidt', s.ka),
                l('gac', s.la),
                l('aip', s.ia),
                s.sync && l('m', 'sync'),
                l('cycle', s.G),
                s.qa && l('gclid', s.qa),
                Rr.test(Z.referrer) && l('cb', String(Ot())),
                i
            );
            function l(t, e) {
                e && (i += '&' + t + '=' + v(e));
            }
        }
        function Or(t, e) {
            (e = e || ((e = St(t, Qe)) && 't0' != e ? (Gr.test(e) ? '_gat_' + L(St(t, an)) : '_gat_' + L(e)) : '_gat')), (this.Y = e);
        }
        function Tr(t) {
            return !Lr[St(t, an)] && void 0 === t.get('&gtm') && void 0 === t.get(Ft) && void 0 === t.get(Rn) && void 0 === t.get(jn);
        }
        function Cr(t, e) {
            var n, r;
            (t = t.model).get('dcLoaded') ||
                ((n = new a(O(t))).set(29),
                t.set(Le, n.C),
                (e = e || {})[on] && (r = L(e[on])),
                (function(n, t) {
                    var r = t.get(Be);
                    t.set(Be, function(t) {
                        $r(n, t, $e), $r(n, t, Pe);
                        var e = r(t);
                        return Pr(n, t), e;
                    });
                    var a = t.get(ze);
                    t.set(ze, function(t) {
                        var e,
                            n = a(t);
                        return Mr(t) && (g(80), G('https://stats.g.doubleclick.net/j/collect', (e = { U: Ur(t, 1), google: Ur(t, 2), count: 0 }).U, e), t.set($e, '', !0)), n;
                    });
                })((e = new Or(t, r)), t),
                t.set('dcLoaded', !0));
        }
        function Sr(t) {
            var e, n;
            t.get('dcLoaded') ||
                'cookie' != t.get(dn) ||
                ((e = new Or(t)),
                $r(e, t, $e),
                $r(e, t, Pe),
                Pr(e, t),
                (e = Mr(t)),
                (n = Tr(t)),
                e && t.set(Ln, 1, !0),
                n && t.set($n, 1, !0),
                (e || n) &&
                    (t.set(Mn, 'd', !0),
                    g(79),
                    t.set(
                        Pn,
                        {
                            U: Ur(t, 1),
                            google: Ur(t, 2),
                            V: (function(e) {
                                if (Tr(e))
                                    return (
                                        (Lr[St(e, an)] = !0),
                                        function(t) {
                                            t && !Lr[t] && (w(xr(e, t)), (Lr[t] = !0));
                                        }
                                    );
                            })(t),
                            count: 0,
                        },
                        !0
                    )));
        }
        function jr(t) {
            function n(t, e) {
                a.model.data.set(t, e);
            }
            function e(t, e) {
                n(t, e), a.filters.add(t);
            }
            var r,
                o,
                a = this;
            (this.model = new Ct()),
                (this.filters = new q()),
                n(Qe, t[Qe]),
                n(an, (r = t[an]) ? r.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '') : ''),
                n(on, t[on]),
                n(sn, t[sn] || b()),
                n(cn, t[cn]),
                n(ln, t[ln]),
                n(un, t[un]),
                n(gn, t[gn]),
                n(fn, t[fn]),
                n(hn, t[hn]),
                n(pn, t[pn]),
                n(vn, t[vn]),
                n(mn, t[mn]),
                n(wn, t[wn]),
                n(_n, t[_n]),
                n(dn, t[dn]),
                n(rn, t[rn]),
                n(en, t[en]),
                n(kn, t[kn]),
                n(Sn, t[Sn]),
                n(Ie, t[Ie]),
                n(jn, t[jn]),
                n(Nn, t[Nn]),
                n(En, t[En]),
                n(Pt, 1),
                n(Mt, 'j87'),
                e(Me, vt),
                e(Ye, p),
                e(Ue, yt),
                e(Ge, mt),
                e(De, xt),
                e(Ve, Fn),
                e(qe, Hn),
                e(Fe, pt),
                e(He, Tt),
                e(Ke, bt),
                e(Xe, kt),
                e(Ze, Sr),
                e(Je, Vn),
                e(Be, wt),
                e(ze, _t),
                e(
                    We,
                    ((o = this),
                    function(t) {
                        var e, n, r, a;
                        'pageview' != t.get(Gt) ||
                            o.I ||
                            ((o.I = !0),
                            (r = t),
                            (a = Math.min(jt(r, wn), 100)),
                            (e = !(i(St(r, tn)) % 100 >= a)),
                            (n = 0 < A(St(t, Bt), 'gclid').length),
                            (e || n) &&
                                zn(function(t) {
                                    e && o.send('timing', t), n && o.send('adtiming', t);
                                }));
                    })
                ),
                Xr(this.model),
                Kr(this.model, t[tn]),
                this.model.set(Ut, ((t = W.gaGlobal = W.gaGlobal || {}).hid = t.hid || Ot()));
        }
        (vr.prototype.S = function(r, a, t) {
            function e(t) {
                try {
                    t = t || W.event;
                    t: {
                        var e = t.target || t.srcElement;
                        for (t = 100; e && 0 < t; ) {
                            if (e.href && e.nodeName.match(/^a(?:rea)?$/i)) {
                                var n = e;
                                break t;
                            }
                            (e = e.parentNode), t--;
                        }
                        n = {};
                    }
                    ('http:' == n.protocol || 'https:' == n.protocol) && _r(r, n.hostname || '') && n.href && (n.href = mr(o, n.href, a));
                } catch (t) {
                    g(26);
                }
            }
            var o = this;
            this.target.get(Ie)
                ? gr.auto(
                      function() {
                          return yr(o.target);
                      },
                      r,
                      a ? 'fragment' : '',
                      t
                  )
                : (this.T || ((this.T = !0), m(Z, 'mousedown', e, !1), m(Z, 'keyup', e, !1)),
                  t &&
                      m(Z, 'submit', function(t) {
                          var e;
                          (t = (t = t || W.event).target || t.srcElement) && t.action && (e = t.action.match(ur)) && _r(r, e[1]) && wr(o, t);
                      }));
        }),
            (vr.prototype.$ = function(t) {
                var e, n;
                !t ||
                    (void 0 !== (n = (e = this).target.get(En)) &&
                        gr.passthrough(
                            function() {
                                if (n('analytics_storage')) return {};
                                var t = {};
                                return (t._ga = e.target.get(tn)), (t._up = '1'), t;
                            },
                            1,
                            !0
                        ));
            });
        var Ar = /^(GTM|OPT)-[A-Z0-9]+$/,
            Er = /^G-[A-Z0-9]+$/,
            Nr = /;_gaexp=[^;]*/g,
            Ir = /;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,
            Rr = /^https?:\/\/[\w\-.]+\.google.com(:\d+)?\/optimize\/opt-launch\.html\?.*$/,
            Lr = {},
            $r = function(t, e, n) {
                !1 === e.get(Un) || e.get(n) || ('1' == I(t.Y)[0] ? e.set(n, '', !0) : e.set(n, '' + Ot(), !0));
            },
            Pr = function(t, e) {
                Mr(e) && R(t.Y, '1', St(e, cn), St(e, sn), St(e, an), 6e4, St(e, gn));
            },
            Mr = function(t) {
                return !!t.get($e) && !1 !== t.get(Un);
            },
            Ur = function(e, t) {
                function n(t) {
                    $t(t).F && r.set($t(t).F, e.get(t));
                }
                var r = new x();
                n(Pt), n(Mt), n(an), n(tn), n($e), 1 == t && (n(rn), n(Pe), n(bn)), !1 === e.get(Gn) && r.set('npa', '1'), r.set($t(Re).F, u(e));
                var a = '';
                return (
                    r.map(function(t, e) {
                        (a += v(t) + '='), (a += v('' + e) + '&');
                    }),
                    (a += 'z=' + Ot()),
                    1 == t ? (a = 't=dc&aip=1&_r=3&' + a) : 2 == t && (a = 't=sr&aip=1&_r=4&slf_rd=1&' + a),
                    a
                );
            },
            Gr = /^gtm\d+$/,
            Dr = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/;
        function Vr(t) {
            return 'prerender' != Z.visibilityState && (t(), 1);
        }
        function qr(t) {
            if (f(t[0])) this.u = t[0];
            else {
                var e = Zr.exec(t[0]);
                if (
                    (null != e &&
                        4 == e.length &&
                        ((this.c = e[1] || 't0'),
                        (this.K = e[2] || ''),
                        (this.methodName = e[3]),
                        (this.a = [].slice.call(t, 1)),
                        this.K ||
                            ((this.A = 'create' == this.methodName),
                            (this.i = 'require' == this.methodName),
                            (this.g = 'provide' == this.methodName),
                            (this.ba = 'remove' == this.methodName)),
                        this.i && (3 <= this.a.length ? ((this.X = this.a[1]), (this.W = this.a[2])) : this.a[1] && (h(this.a[1]) ? (this.X = this.a[1]) : (this.W = this.a[1])))),
                    (e = t[1]),
                    (t = t[2]),
                    !this.methodName)
                )
                    throw 'abort';
                if (this.i && (!h(e) || '' == e)) throw 'abort';
                if (this.g && (!h(e) || '' == e || !f(t))) throw 'abort';
                if (Yr(this.c) || Yr(this.K)) throw 'abort';
                if (this.g && 't0' != this.c) throw 'abort';
            }
        }
        (jr.prototype.get = function(t) {
            return this.model.get(t);
        }),
            (jr.prototype.set = function(t, e) {
                this.model.set(t, e);
            }),
            (jr.prototype.send = function(t) {
                var e, n;
                arguments.length < 1 ||
                    ((n = 'string' == typeof t ? ((e = t), [].slice.call(arguments, 1)) : ((e = t && t[Gt]), arguments)),
                    e && (((n = k(Wr[e] || [], n))[Gt] = e), this.model.set(n, void 0, !0), this.filters.D(this.model), (this.model.data.m = {})));
            }),
            (jr.prototype.ma = function(t, e) {
                var n = this;
                Qr(t, n, e) ||
                    (ea(t, function() {
                        Qr(t, n, e);
                    }),
                    ta(String(n.get(Qe)), t, void 0, e, !0));
            });
        var Fr,
            Hr,
            Br,
            zr,
            Kr = function(t, e) {
                var n,
                    r,
                    a = St(t, on);
                if (
                    (t.data.set(yn, '_ga' == a ? '_gid' : a + '_gid'),
                    'cookie' == St(t, dn) &&
                        ((Zn = !1),
                        (a = I(St(t, on))),
                        (a = tr(t, a)) || ((a = St(t, sn)), (a = null != (a = cr('__utma', (r = St(t, fn) || b()), a)) ? (g(10), a.O[1] + '.' + a.O[2]) : void 0)),
                        a && (Zn = !0),
                        (r = a && !t.get(un)) && (r = 2 == (r = a.split('.')).length && !!(r = Number(r[1])) && r + (n = jt(t, ln)) < new Date().getTime() / 1e3),
                        r && (a = void 0),
                        a && (t.data.set(nn, a), t.data.set(tn, a), (a = Jn(t)) && t.data.set(bn, a)),
                        t.get(Sn) && ((a = t.get(xn)), (r = t.get(Cn)), !a || (r && 'aw.ds' != r))))
                ) {
                    if (((a = {}), Z)) {
                        (r = []), (n = Z.cookie.split(';'));
                        for (var o = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, i = 0; i < n.length; i++) {
                            var s = n[i].match(o);
                            s && r.push({ ja: s[1], value: s[2] });
                        }
                        if (((n = {}), r && r.length))
                            for (o = 0; o < r.length; o++)
                                '1' != (i = r[o].value.split('.'))[0] || 3 != i.length
                                    ? a && (a.na = !0)
                                    : i[1] && (n[r[o].ja] ? a && (a.pa = !0) : (n[r[o].ja] = []), n[r[o].ja].push({ timestamp: i[1], qa: i[2] }));
                        r = n;
                    } else r = {};
                    (r = r[St(t, an)]), sr(a), r && 0 != r.length && ((a = r[0]), t.data.set(On, a.timestamp), t.data.set(xn, a.qa));
                }
                if (
                    t.get(un) &&
                    ((a = _('_ga', !!t.get(vn))),
                    (o = _('_gl', !!t.get(vn))),
                    (n = (r = gr.get(t.get(vn)))._ga),
                    o && 0 < o.indexOf('_ga*') && !n && g(30),
                    (o = !(
                        e ||
                        !t.get(Nn) ||
                        void 0 === (o = t.get(En)) ||
                        o('analytics_storage') ||
                        (g(84),
                        t.data.set(In, 1),
                        (o = r._up) && (o = !!(o = ur.exec(Z.referrer)) && ((o = o[1]), (i = Z.location.hostname) === o || 0 <= i.indexOf('.' + o) || 0 <= o.indexOf('.' + i))),
                        !o)
                    )),
                    (i = r.gclid),
                    (s = r._gac),
                    a || n || i || s)
                )
                    if ((a && n && g(36), t.get(pn) || H(t.get(kn)) || o)) {
                        if (
                            (n && (g(38), t.data.set(tn, n), r._gid && (g(51), t.data.set(bn, r._gid))),
                            i
                                ? (g(82), t.data.set(xn, i), r.gclsrc && t.data.set(Cn, r.gclsrc))
                                : s && (n = s.split('.')) && 2 === n.length && (g(37), t.data.set(xn, n[0]), t.data.set(On, n[1])),
                            (r = r._fplc) && (g(83), t.data.set(An, r)),
                            a)
                        )
                            t: if (((r = a.indexOf('.')), -1 == r)) g(22);
                            else {
                                if (((n = a.substring(0, r)), (r = (o = a.substring(r + 1)).indexOf('.')), (a = o.substring(0, r)), (o = o.substring(r + 1)), '1' == n)) {
                                    if (br((r = o), a)) {
                                        g(23);
                                        break t;
                                    }
                                } else {
                                    if ('2' != n) {
                                        g(22);
                                        break t;
                                    }
                                    if (((n = ''), (r = 0 < (r = o.indexOf('-')) ? ((n = o.substring(0, r)), o.substring(r + 1)) : o.substring(1)), br(n + r, a))) {
                                        g(53);
                                        break t;
                                    }
                                    n && (g(2), t.data.set(bn, n));
                                }
                                g(11),
                                    t.data.set(tn, r),
                                    (a = _('_gac', !!t.get(vn))) &&
                                        ('1' != (a = a.split('.'))[0] || 4 != a.length ? g(72) : br(a[3], a[1]) ? g(71) : (t.data.set(xn, a[3]), t.data.set(On, a[2]), g(70)));
                            }
                    } else g(21);
                e && (g(9), t.data.set(tn, v(e))),
                    t.get(tn) ||
                        ((e = ((e = W.gaGlobal) && e.from_cookie && 'cookie' !== St(t, dn)) || !(e = e && e.vid) || -1 === e.search(c) ? void 0 : e)
                            ? (g(17), t.data.set(tn, e))
                            : (g(8), t.data.set(tn, d()))),
                    t.get(bn) || (g(3), t.data.set(bn, d())),
                    qn(t),
                    (e = W.gaGlobal = W.gaGlobal || {}),
                    (t = (a = St(t, tn)) === St(t, nn)),
                    (null == e.vid || (t && !e.from_cookie)) && ((e.vid = a), (e.from_cookie = t));
            },
            Xr = function(t) {
                var e,
                    n = W.navigator,
                    r = W.screen,
                    a = Z.location;
                t.set(
                    zt,
                    (function(t, e) {
                        var n = Z.referrer;
                        if (/^(https?|android-app):\/\//i.test(n))
                            return t ? n : y(n, (t = '//' + Z.location.hostname)) || (e && y(n, (e = t.replace(/\./g, '-') + '.cdn.ampproject.org'))) ? void 0 : n;
                    })(!!t.get(_n), !!t.get(kn))
                ),
                    a && ('/' != (e = a.pathname || '').charAt(0) && (g(31), (e = '/' + e)), t.set(Bt, a.protocol + '//' + a.hostname + e + a.search)),
                    r && t.set(Zt, r.width + 'x' + r.height),
                    r && t.set(Wt, r.colorDepth + '-bit'),
                    (r = Z.documentElement);
                var o = (e = Z.body) && e.clientWidth && e.clientHeight,
                    i = [];
                if (
                    (r && r.clientWidth && r.clientHeight && ('CSS1Compat' === Z.compatMode || !o)
                        ? (i = [r.clientWidth, r.clientHeight])
                        : o && (i = [e.clientWidth, e.clientHeight]),
                    (r = i[0] <= 0 || i[1] <= 0 ? '' : i.join('x')),
                    t.set(Yt, r),
                    t.set(
                        Qt,
                        (function() {
                            var t;
                            if ((t = (t = W.navigator) ? t.plugins : null) && t.length)
                                for (var e = 0; e < t.length && !a; e++) {
                                    var n = t[e];
                                    -1 < n.name.indexOf('Shockwave Flash') && (a = n.description);
                                }
                            if (!a)
                                try {
                                    var r = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.7'),
                                        a = r.GetVariable('$version');
                                } catch (t) {}
                            if (!a)
                                try {
                                    (r = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6')),
                                        (a = 'WIN 6,0,21,0'),
                                        (r.AllowScriptAccess = 'always'),
                                        (a = r.GetVariable('$version'));
                                } catch (t) {}
                            if (!a)
                                try {
                                    a = (r = new ActiveXObject('ShockwaveFlash.ShockwaveFlash')).GetVariable('$version');
                                } catch (t) {}
                            return a && (r = a.match(/[\d]+/g)) && 3 <= r.length && (a = r[0] + '.' + r[1] + ' r' + r[2]), a || void 0;
                        })()
                    ),
                    t.set(Xt, Z.characterSet || Z.charset),
                    t.set(Jt, (n && 'function' == typeof n.javaEnabled && n.javaEnabled()) || !1),
                    t.set(Kt, ((n && (n.language || n.browserLanguage)) || '').toLowerCase()),
                    t.data.set(xn, _('gclid', !0)),
                    t.data.set(Cn, _('gclsrc', !0)),
                    t.data.set(On, Math.round(new Date().getTime() / 1e3)),
                    a && t.get(vn) && (n = Z.location.hash))
                ) {
                    for (n = n.split(/[?&#]+/), a = [], r = 0; r < n.length; ++r)
                        (C(n[r], 'utm_id') ||
                            C(n[r], 'utm_campaign') ||
                            C(n[r], 'utm_source') ||
                            C(n[r], 'utm_medium') ||
                            C(n[r], 'utm_term') ||
                            C(n[r], 'utm_content') ||
                            C(n[r], 'gclid') ||
                            C(n[r], 'dclid') ||
                            C(n[r], 'gclsrc')) &&
                            a.push(n[r]);
                    0 < a.length && ((n = '#' + a.join('&')), t.set(Bt, t.get(Bt) + n));
                }
            },
            Wr = { pageview: [n], event: [te, ee, ne, re], social: [ae, oe, ie], timing: [_e, be, ke, ye] },
            be = function(n) {
                var r, a;
                Vr(n) ||
                    (g(16),
                    (r = !1),
                    m(
                        Z,
                        'visibilitychange',
                        (a = function() {
                            var t, e;
                            !r &&
                                Vr(n) &&
                                ((r = !0),
                                (t = a),
                                (e = Z).removeEventListener ? e.removeEventListener('visibilitychange', t, !1) : e.detachEvent && e.detachEvent('onvisibilitychange', t));
                        })
                    ));
            },
            Zr = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/;
        function Yr(t) {
            return 0 <= t.indexOf('.') || 0 <= t.indexOf(':');
        }
        function Jr(t, e) {
            Fr.set(t, e), (e = zr.get(t) || []);
            for (var n = 0; n < e.length; n++) e[n]();
            zr.set(t, []);
        }
        (Fr = new x()), (Br = new x()), (zr = new x()), (Hr = { ec: 45, ecommerce: 46, linkid: 47 });
        var Qr = function(t, e, n) {
                e == oa || e.get(Qe);
                var r = Fr.get(t);
                return !!f(r) && ((e.plugins_ = e.plugins_ || new x()), e.plugins_.get(t) || e.plugins_.set(t, new r(e, n || {})), !0);
            },
            ta = function(t, e, n, r, a) {
                if (!f(Fr.get(e)) && !Br.get(e)) {
                    if ((Hr.hasOwnProperty(e) && g(Hr[e]), (t = oa.j(t)), Ar.test(e))) {
                        if ((g(52), !t)) return !0;
                        n = xr(t.model, e, r, a);
                    }
                    var o;
                    !n && Hr.hasOwnProperty(e) ? (g(39), (n = e + '.js')) : g(43),
                        n &&
                            (t && (h((o = t.get(jn))) || (o = void 0)),
                            (n && 0 <= n.indexOf('/')) || (n = (o || $(!1)) + '/plugins/ua/' + n),
                            (o = (r = ra(n)).protocol),
                            (n = Z.location.protocol),
                            ('https:' == o || o == n || ('http:' == o && 'http:' == n)) && na(r) && (w(r.url, void 0, a), Br.set(e, !0)));
                }
            },
            ea = function(t, e) {
                var n = zr.get(t) || [];
                n.push(e), zr.set(t, n);
            },
            na = function(t) {
                var e = ra(Z.location.href);
                return !(
                    !C(t.url, P(1)) &&
                    !C(t.url, P(2)) &&
                    (t.query ||
                        0 <= t.url.indexOf('?') ||
                        0 <= t.path.indexOf('://') ||
                        ((t.host != e.host || t.port != e.port) &&
                            ((e = 'http:' == t.protocol ? 80 : 443), 'www.google-analytics.com' != t.host || (t.port || e) != e || !C(t.path, '/plugins/'))))
                );
            },
            ra = function(t) {
                function e(t) {
                    var e = 0 <= (n = t.hostname || '').indexOf(']'),
                        n = n.split(e ? ']' : ':')[0].toLowerCase();
                    return (
                        e && (n += ']'),
                        (e = (t.protocol || '').toLowerCase()),
                        (e = +t.port || ('http:' == e ? 80 : 'https:' == e ? 443 : '')),
                        (t = t.pathname || ''),
                        C(t, '/') || (t = '/' + t),
                        [n, '' + e, t]
                    );
                }
                var n = Z.createElement('a');
                n.href = Z.location.href;
                var r = (n.protocol || '').toLowerCase(),
                    a = e(n),
                    o = n.search || '',
                    i = r + '//' + a[0] + (a[1] ? ':' + a[1] : '');
                return (
                    C(t, '//')
                        ? (t = r + t)
                        : C(t, '/')
                        ? (t = i + t)
                        : !t || C(t, '?')
                        ? (t = i + a[2] + (t || o))
                        : t.split('/')[0].indexOf(':') < 0 && (t = i + a[2].substring(0, a[2].lastIndexOf('/')) + '/' + t),
                    (n.href = t),
                    (r = e(n)),
                    { protocol: (n.protocol || '').toLowerCase(), host: r[0], port: r[1], path: r[2], query: n.search || '', url: t || '' }
                );
            },
            aa = {
                ga: function() {
                    aa.f = [];
                },
            };
        aa.ga(),
            (aa.D = function(t) {
                var e = aa.J.apply(aa, arguments),
                    e = aa.f.concat(e);
                for (aa.f = []; 0 < e.length && !aa.v(e[0]) && (e.shift(), !(0 < aa.f.length)); );
                aa.f = aa.f.concat(e);
            }),
            (aa.J = function(t) {
                for (var e = [], n = 0; n < arguments.length; n++)
                    try {
                        var r = new qr(arguments[n]);
                        r.g ? Jr(r.a[0], r.a[1]) : (r.i && (r.ha = ta(r.c, r.a[0], r.X, r.W)), e.push(r));
                    } catch (t) {}
                return e;
            }),
            (aa.v = function(t) {
                try {
                    if (t.u) t.u.call(W, oa.j('t0'));
                    else {
                        var e,
                            n,
                            r,
                            a = t.c == o ? oa : oa.j(t.c);
                        if (t.A) {
                            if ('t0' == t.c && null === (a = oa.create.apply(oa, t.a))) return !0;
                        } else if (t.ba) oa.remove(t.c);
                        else if (a)
                            if (t.i) {
                                if ((t.ha && (t.ha = ta(t.c, t.a[0], t.X, t.W)), !Qr(t.a[0], a, t.W))) return !0;
                            } else t.K ? ((e = t.methodName), (n = t.a), (r = a.plugins_.get(t.K))[e].apply(r, n)) : a[t.methodName].apply(a, t.a);
                    }
                } catch (t) {}
            });
        var oa = function(t) {
            g(1), aa.D.apply(aa, [arguments]);
        };
        (oa.h = {}), (oa.P = []), (oa.L = 0), (oa.ya = 0), (oa.answer = 42);
        var ia = [an, sn, Qe];
        (oa.create = function(t) {
            var e = k(ia, [].slice.call(arguments));
            e[Qe] || (e[Qe] = 't0');
            var n = '' + e[Qe];
            if (oa.h[n]) return oa.h[n];
            if (
                (function(t) {
                    if (H(t[kn]) && (void 0 === X && (e = ((e = gr.get()) && e._ga) || void 0) && ((X = e), g(81)), void 0 !== X)) return t[tn] || (t[tn] = X), 0;
                    if (t[kn]) {
                        if ((g(67), t[dn] && 'cookie' != t[dn])) return;
                        if (void 0 !== X) t[tn] || (t[tn] = X);
                        else {
                            e = String(t[sn] || b());
                            var e,
                                n = String(t[cn] || '/'),
                                r = I(String(t[on] || '_ga'));
                            if (
                                (e =
                                    !((e = er(r, e, n)) && !c.test(e)) ||
                                    0 == (e = I('AMP_TOKEN')).length ||
                                    (1 == e.length && ('$RETRIEVING' == (e = decodeURIComponent(e[0])) || '$OPT_OUT' == e || '$ERROR' == e || '$NOT_FOUND' == e))) &&
                                at(F, String(t[an]))
                            )
                                return 1;
                        }
                    }
                })(e)
            )
                return null;
            if (((e = new jr(e)), (oa.h[n] = e), oa.P.push(e), f((n = D().tracker_created))))
                try {
                    n(e);
                } catch (t) {}
            return e;
        }),
            (oa.remove = function(t) {
                for (var e = 0; e < oa.P.length; e++)
                    if (oa.P[e].get(Qe) == t) {
                        oa.P.splice(e, 1), (oa.h[t] = null);
                        break;
                    }
            }),
            (oa.j = function(t) {
                return oa.h[t];
            }),
            (oa.getAll = function() {
                return oa.P.slice(0);
            }),
            (oa.N = function() {
                'ga' != o && g(49);
                var t = W[o];
                if (!t || 42 != t.answer) {
                    (oa.L = t && t.l), (oa.ya = +new Date()), (oa.loaded = !0);
                    var e = (W[o] = oa);
                    if (
                        (Dn('create', e, e.create),
                        Dn('remove', e, e.remove),
                        Dn('getByName', e, e.j, 5),
                        Dn('getAll', e, e.getAll, 6),
                        Dn('get', (e = jr.prototype), e.get, 7),
                        Dn('set', e, e.set, 4),
                        Dn('send', e, e.send),
                        Dn('requireSync', e, e.ma),
                        Dn('get', (e = Ct.prototype), e.get),
                        Dn('set', e, e.set),
                        'https:' != Z.location.protocol && !s)
                    ) {
                        t: {
                            e = Z.getElementsByTagName('script');
                            for (var n = 0; n < e.length && n < 100; n++) {
                                var r = e[n].src;
                                if (r && 0 == r.indexOf($(!0) + '/analytics')) {
                                    e = !0;
                                    break t;
                                }
                            }
                            e = !1;
                        }
                        e && (s = !0);
                    }
                    (e = ((W.gaplugins = W.gaplugins || {}).Linker = vr).prototype),
                        Jr('linker', vr),
                        Dn('decorate', e, e.ca, 20),
                        Dn('autoLink', e, e.S, 25),
                        Dn('passthrough', e, e.$, 25),
                        Jr('displayfeatures', Cr),
                        Jr('adfeatures', Cr),
                        (t = t && t.q),
                        T(t) ? aa.D.apply(oa, t) : g(50);
                }
            }),
            (ke = oa.N),
            (ye = W[o]) && ye.r ? ke() : be(ke),
            be(function() {
                aa.D(['provide', 'render', p]);
            });
    })(window);
