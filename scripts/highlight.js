! function(e) {
	"undefined" != typeof exports ? e(exports) : (window.hljs = e({}), "function" ==
		typeof define && define.amd && define([], function() {
			return window.hljs
		}))
}(function(e) {
	function n(e) {
		return e.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm,
			"&gt;")
	}

	function t(e) {
		return e.nodeName.toLowerCase()
	}

	function r(e, n) {
		var t = e && e.exec(n);
		return t && 0 == t.index
	}

	function a(e) {
		var n = (e.className + " " + (e.parentNode ? e.parentNode.className : "")).split(
			/\s+/);
		return n = n.map(function(e) {
			return e.replace(/^lang(uage)?-/, "")
		}), n.filter(function(e) {
			return N(e) || /no(-?)highlight|plain|text/.test(e)
		})[0]
	}

	function i(e, n) {
		var t,
			r = {};
		for (t in e) r[t] = e[t];
		if (n)
			for (t in n) r[t] = n[t];
		return r
	}

	function o(e) {
		var n = [];
		return function r(e, a) {
			for (var i = e.firstChild; i; i = i.nextSibling) {
				3 == i.nodeType ? a += i.nodeValue.length : 1 == i.nodeType && (n.push({
					event: "start",
					offset: a,
					node: i
				}), a = r(i, a), t(i).match(/br|hr|img|input/) || n.push({
					event: "stop",
					offset: a,
					node: i
				}));
			}
			return a
		}(e, 0), n
	}

	function u(e, r, a) {
		function i() {
			return e.length && r.length ? e[0].offset != r[0].offset ? e[0].offset <
				r[0].offset ? e : r : "start" == r[0].event ? e : r : e.length ? e : r
		}

		function o(e) {
			function r(e) {
				return " " + e.nodeName + '="' + n(e.value) + '"'
			}
			l += "<" + t(e) + Array.prototype.map.call(e.attributes, r).join("") +
				">"
		}

		function u(e) {
			l += "</" + t(e) + ">"
		}

		function c(e) {
			("start" == e.event ? o : u)(e.node)
		}
		for (var s = 0, l = "", f = []; e.length || r.length;) {
			var g = i();
			if (l += n(a.substr(s, g[0].offset - s)), s = g[0].offset, g == e) {
				f.reverse().forEach(u);
				do {
					c(g.splice(0, 1)[0]), g = i();
				} while (g == e && g.length && g[0].offset == s);
				f.reverse().forEach(o)
			} else {
				"start" == g[0].event ? f.push(g[0].node) : f.pop(), c(g.splice(0, 1)[0])
			}
		}
		return l + n(a.substr(s))
	}

	function c(e) {
		function n(e) {
			return e && e.source || e
		}

		function t(t, r) {
			return new RegExp(n(t), "m" + (e.cI ? "i" : "") + (r ? "g" : ""))
		}

		function r(a, o) {
			if (!a.compiled) {
				if (a.compiled = !0, a.k = a.k || a.bK, a.k) {
					var u = {},
						c = function(n, t) {
							e.cI && (t = t.toLowerCase()), t.split(" ").forEach(function(e) {
								var t = e.split("|");
								u[t[0]] = [n, t[1] ? Number(t[1]) : 1]
							})
						};
					"string" == typeof a.k ? c("keyword", a.k) : Object.keys(a.k).forEach(
						function(e) {
							c(e, a.k[e])
						}), a.k = u
				}
				a.lR = t(a.l || /\b\w+\b/, !0), o && (a.bK && (a.b = "\\b(" + a.bK.split(
						" ").join("|") + ")\\b"), a.b || (a.b = /\B|\b/), a.bR = t(a.b), a.e ||
					a.eW || (a.e = /\B|\b/), a.e && (a.eR = t(a.e)), a.tE = n(a.e) || "",
					a.eW && o.tE && (a.tE += (a.e ? "|" : "") + o.tE)), a.i && (a.iR = t(a
					.i)), void 0 === a.r && (a.r = 1), a.c || (a.c = []);
				var s = [];
				a.c.forEach(function(e) {
					e.v ? e.v.forEach(function(n) {
						s.push(i(e, n))
					}) : s.push("self" == e ? a : e)
				}), a.c = s, a.c.forEach(function(e) {
					r(e, a)
				}), a.starts && r(a.starts, o);
				var l = a.c.map(function(e) {
					return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
				}).concat([a.tE, a.i]).map(n).filter(Boolean);
				a.t = l.length ? t(l.join("|"), !0) : {
					exec: function() {
						return null
					}
				}
			}
		}
		r(e)
	}

	function s(e, t, a, i) {
		function o(e, n) {
			for (var t = 0; t < n.c.length; t++)
				if (r(n.c[t].bR, e)) return n.c[t]
		}

		function u(e, n) {
			if (r(e.eR, n)) {
				for (; e.endsParent && e.parent;) {
					e = e.parent;
				}
				return e
			}
			return e.eW ? u(e.parent, n) : void 0
		}

		function f(e, n) {
			return !a && r(n.iR, e)
		}

		function g(e, n) {
			var t = E.cI ? n[0].toLowerCase() : n[0];
			return e.k.hasOwnProperty(t) && e.k[t]
		}

		function p(e, n, t, r) {
			var a = r ? "" : x.classPrefix,
				i = '<span class="' + a,
				o = t ? "" : "</span>";
			return i += e + '">', i + n + o
		}

		function d() {
			if (!L.k) return n(y);
			var e = "",
				t = 0;
			L.lR.lastIndex = 0;
			for (var r = L.lR.exec(y); r;) {
				e += n(y.substr(t, r.index - t));
				var a = g(L, r);
				a ? (B += a[1], e += p(a[0], n(r[0]))) : e += n(r[0]), t = L.lR.lastIndex,
					r = L.lR.exec(y)
			}
			return e + n(y.substr(t))
		}

		function h() {
			if (L.sL && !w[L.sL]) return n(y);
			var e = L.sL ? s(L.sL, y, !0, M[L.sL]) : l(y);
			return L.r > 0 && (B += e.r), "continuous" == L.subLanguageMode && (M[L.sL] =
				e.top), p(e.language, e.value, !1, !0)
		}

		function b() {
			return void 0 !== L.sL ? h() : d()
		}

		function v(e, t) {
			var r = e.cN ? p(e.cN, "", !0) : "";
			e.rB ? (k += r, y = "") : e.eB ? (k += n(t) + r, y = "") : (k += r, y = t),
				L = Object.create(e, {
					parent: {
						value: L
					}
				})
		}

		function m(e, t) {
			if (y += e, void 0 === t) return k += b(), 0;
			var r = o(t, L);
			if (r) return k += b(), v(r, t), r.rB ? 0 : t.length;
			var a = u(L, t);
			if (a) {
				var i = L;
				i.rE || i.eE || (y += t), k += b();
				do {
					L.cN && (k += "</span>"), B += L.r, L = L.parent;
				} while (L != a.parent);
				return i.eE && (k += n(t)), y = "", a.starts && v(a.starts, ""), i.rE ?
					0 : t.length
			}
			if (f(t, L))
				throw new Error('Illegal lexeme "' + t + '" for mode "' + (L.cN ||
					"<unnamed>") + '"');
			return y += t, t.length || 1
		}
		var E = N(e);
		if (!E)
			throw new Error('Unknown language: "' + e + '"');
		c(E);
		var R,
			L = i || E,
			M = {},
			k = "";
		for (R = L; R != E; R = R.parent) {
			R.cN && (k = p(R.cN, "", !0) + k);
		}
		var y = "",
			B = 0;
		try {
			for (var C, j, I = 0;;) {
				if (L.t.lastIndex = I, C = L.t.exec(t), !C) break;
				j = m(t.substr(I, C.index - I), C[0]), I = C.index + j
			}
			for (m(t.substr(I)), R = L; R.parent; R = R.parent) {
				R.cN && (k += "</span>");
			}
			return {
				r: B,
				value: k,
				language: e,
				top: L
			}
		} catch (S) {
			if (-1 != S.message.indexOf("Illegal")) return {
				r: 0,
				value: n(t)
			};
			throw S
		}
	}

	function l(e, t) {
		t = t || x.languages || Object.keys(w);
		var r = {
				r: 0,
				value: n(e)
			},
			a = r;
		return t.forEach(function(n) {
			if (N(n)) {
				var t = s(n, e, !1);
				t.language = n, t.r > a.r && (a = t), t.r > r.r && (a = r, r = t)
			}
		}), a.language && (r.second_best = a), r
	}

	function f(e) {
		return x.tabReplace && (e = e.replace(/^((<[^>]+>|\t)+)/gm, function(e, n) {
			return n.replace(/\t/g, x.tabReplace)
		})), x.useBR && (e = e.replace(/\n/g, "<br>")), e
	}

	function g(e, n, t) {
		var r = n ? E[n] : t,
			a = [e.trim()];
		return e.match(/\bhljs\b/) || a.push("hljs"), -1 === e.indexOf(r) && a.push(
			r), a.join(" ").trim()
	}

	function p(e) {
		var n = a(e);
		if (!/no(-?)highlight|plain|text/.test(n)) {
			var t;
			x.useBR ? (t = document.createElementNS("http://www.w3.org/1999/xhtml",
				"div"), t.innerHTML = e.innerHTML.replace(/\n/g, "").replace(
				/<br[ \/]*>/g, "\n")) : t = e;
			var r = t.textContent,
				i = n ? s(n, r, !0) : l(r),
				c = o(t);
			if (c.length) {
				var p = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
				p.innerHTML = i.value, i.value = u(c, o(p), r)
			}
			i.value = f(i.value), e.innerHTML = i.value, e.className = g(e.className,
				n, i.language), e.result = {
				language: i.language,
				re: i.r
			}, i.second_best && (e.second_best = {
				language: i.second_best.language,
				re: i.second_best.r
			})
		}
	}

	function d(e) {
		x = i(x, e)
	}

	function h() {
		if (!h.called) {
			h.called = !0;
			var e = document.querySelectorAll("pre code");
			Array.prototype.forEach.call(e, p)
		}
	}

	function b() {
		addEventListener("DOMContentLoaded", h, !1), addEventListener("load", h, !1)
	}

	function v(n, t) {
		var r = w[n] = t(e);
		r.aliases && r.aliases.forEach(function(e) {
			E[e] = n
		})
	}

	function m() {
		return Object.keys(w)
	}

	function N(e) {
		return w[e] || w[E[e]]
	}
	var x = {
			classPrefix: "hljs-",
			tabReplace: null,
			useBR: !1,
			languages: void 0
		},
		w = {},
		E = {};
	return e.highlight = s, e.highlightAuto = l, e.fixMarkup = f, e.highlightBlock =
		p, e.configure = d, e.initHighlighting = h, e.initHighlightingOnLoad = b, e.registerLanguage =
		v, e.listLanguages = m, e.getLanguage = N, e.inherit = i, e.IR =
		"[a-zA-Z]\\w*", e.UIR = "[a-zA-Z_]\\w*", e.NR = "\\b\\d+(\\.\\d+)?", e.CNR =
		"\\b(0[xX][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR =
		"\\b(0b[01]+)", e.RSR =
		"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
		e.BE = {
			b: "\\\\[\\s\\S]",
			r: 0
		}, e.ASM = {
			cN: "string",
			b: "'",
			e: "'",
			i: "\\n",
			c: [e.BE]
		}, e.QSM = {
			cN: "string",
			b: '"',
			e: '"',
			i: "\\n",
			c: [e.BE]
		}, e.PWM = {
			b: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/
		}, e.C = function(n, t, r) {
			var a = e.inherit({
				cN: "comment",
				b: n,
				e: t,
				c: []
			}, r || {});
			return a.c.push(e.PWM), a
		}, e.CLCM = e.C("//", "$"), e.CBCM = e.C("/\\*", "\\*/"), e.HCM = e.C("#",
			"$"), e.NM = {
			cN: "number",
			b: e.NR,
			r: 0
		}, e.CNM = {
			cN: "number",
			b: e.CNR,
			r: 0
		}, e.BNM = {
			cN: "number",
			b: e.BNR,
			r: 0
		}, e.CSSNM = {
			cN: "number",
			b: e.NR +
				"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
			r: 0
		}, e.RM = {
			cN: "regexp",
			b: /\//,
			e: /\/[gimuy]*/,
			i: /\n/,
			c: [e.BE, {
				b: /\[/,
				e: /\]/,
				r: 0,
				c: [e.BE]
			}]
		}, e.TM = {
			cN: "title",
			b: e.IR,
			r: 0
		}, e.UTM = {
			cN: "title",
			b: e.UIR,
			r: 0
		}, e
});
hljs.registerLanguage("xml", function(t) {
	var e = "[A-Za-z0-9\\._:-]+",
		s = {
			b: /<\?(php)?(?!\w)/,
			e: /\?>/,
			sL: "php",
			subLanguageMode: "continuous"
		},
		c = {
			eW: !0,
			i: /</,
			r: 0,
			c: [s, {
				cN: "attribute",
				b: e,
				r: 0
			}, {
				b: "=",
				r: 0,
				c: [{
					cN: "value",
					c: [s],
					v: [{
						b: /"/,
						e: /"/
					}, {
						b: /'/,
						e: /'/
					}, {
						b: /[^\s\/>]+/
					}]
				}]
			}]
		};
	return {
		aliases: ["html", "xhtml", "rss", "atom", "xsl", "plist"],
		cI: !0,
		c: [{
			cN: "doctype",
			b: "<!DOCTYPE",
			e: ">",
			r: 10,
			c: [{
				b: "\\[",
				e: "\\]"
			}]
		}, t.C("<!--", "-->", {
			r: 10
		}), {
			cN: "cdata",
			b: "<\\!\\[CDATA\\[",
			e: "\\]\\]>",
			r: 10
		}, {
			cN: "tag",
			b: "<style(?=\\s|>|$)",
			e: ">",
			k: {
				title: "style"
			},
			c: [c],
			starts: {
				e: "</style>",
				rE: !0,
				sL: "css"
			}
		}, {
			cN: "tag",
			b: "<script(?=\\s|>|$)",
			e: ">",
			k: {
				title: "script"
			},
			c: [c],
			starts: {
				e: "</script>",
				rE: !0,
				sL: ""
			}
		}, s, {
			cN: "pi",
			b: /<\?\w+/,
			e: /\?>/,
			r: 10
		}, {
			cN: "tag",
			b: "</?",
			e: "/?>",
			c: [{
				cN: "title",
				b: /[^ \/><\n\t]+/,
				r: 0
			}, c]
		}]
	}
});
hljs.registerLanguage("cpp", function(t) {
	var i = {
		keyword: "false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginary intmax_t uintmax_t int8_t uint8_t int16_t uint16_t int32_t uint32_t  int64_t uint64_t int_least8_t uint_least8_t int_least16_t uint_least16_t int_least32_t uint_least32_t int_least64_t uint_least64_t int_fast8_t uint_fast8_t int_fast16_t uint_fast16_t int_fast32_t uint_fast32_t int_fast64_t uint_fast64_t intptr_t uintptr_t atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong atomic_wchar_t atomic_char16_t atomic_char32_t atomic_intmax_t atomic_uintmax_t atomic_intptr_t atomic_uintptr_t atomic_size_t atomic_ptrdiff_t atomic_int_least8_t atomic_int_least16_t atomic_int_least32_t atomic_int_least64_t atomic_uint_least8_t atomic_uint_least16_t atomic_uint_least32_t atomic_uint_least64_t atomic_int_fast8_t atomic_int_fast16_t atomic_int_fast32_t atomic_int_fast64_t atomic_uint_fast8_t atomic_uint_fast16_t atomic_uint_fast32_t atomic_uint_fast64_t",
		built_in: "std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"
	};
	return {
		aliases: ["c", "cc", "h", "c++", "h++", "hpp"],
		k: i,
		i: "</",
		c: [t.CLCM, t.CBCM, t.QSM, {
			cN: "string",
			b: "'\\\\?.",
			e: "'",
			i: "."
		}, {
			cN: "number",
			b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
		}, t.CNM, {
			cN: "preprocessor",
			b: "#",
			e: "$",
			k: "if else elif endif define undef warning error line pragma",
			c: [{
				b: /\\\n/,
				r: 0
			}, {
				b: 'include\\s*[<"]',
				e: '[>"]',
				k: "include",
				i: "\\n"
			}, t.CLCM]
		}, {
			b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
			e: ">",
			k: i,
			c: ["self"]
		}, {
			b: t.IR + "::",
			k: i
		}, {
			bK: "new throw return else",
			r: 0
		}, {
			cN: "function",
			b: "(" + t.IR + "\\s+)+" + t.IR + "\\s*\\(",
			rB: !0,
			e: /[{;=]/,
			eE: !0,
			k: i,
			c: [{
				b: t.IR + "\\s*\\(",
				rB: !0,
				c: [t.TM],
				r: 0
			}, {
				cN: "params",
				b: /\(/,
				e: /\)/,
				k: i,
				r: 0,
				c: [t.CBCM]
			}, t.CLCM, t.CBCM]
		}]
	}
});
hljs.registerLanguage("json", function(e) {
	var t = {
			literal: "true false null"
		},
		i = [e.QSM, e.CNM],
		l = {
			cN: "value",
			e: ",",
			eW: !0,
			eE: !0,
			c: i,
			k: t
		},
		c = {
			b: "{",
			e: "}",
			c: [{
				cN: "attribute",
				b: '\\s*"',
				e: '"\\s*:\\s*',
				eB: !0,
				eE: !0,
				c: [e.BE],
				i: "\\n",
				starts: l
			}],
			i: "\\S"
		},
		n = {
			b: "\\[",
			e: "\\]",
			c: [e.inherit(l, {
				cN: null
			})],
			i: "\\S"
		};
	return i.splice(i.length, 0, c, n), {
		c: i,
		k: t,
		i: "\\S"
	}
});
hljs.registerLanguage("bash", function(e) {
	var t = {
			cN: "variable",
			v: [{
				b: /\$[\w\d#@][\w\d_]*/
			}, {
				b: /\$\{(.*?)}/
			}]
		},
		s = {
			cN: "string",
			b: /"/,
			e: /"/,
			c: [e.BE, t, {
				cN: "variable",
				b: /\$\(/,
				e: /\)/,
				c: [e.BE]
			}]
		},
		a = {
			cN: "string",
			b: /'/,
			e: /'/
		};
	return {
		aliases: ["sh", "zsh"],
		l: /-?[a-z\.]+/,
		k: {
			keyword: "if then else elif fi for while in do done case esac function",
			literal: "true false",
			built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
			operator: "-ne -eq -lt -gt -f -d -e -s -l -a"
		},
		c: [{
			cN: "shebang",
			b: /^#![^\n]+sh\s*$/,
			r: 10
		}, {
			cN: "function",
			b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
			rB: !0,
			c: [e.inherit(e.TM, {
				b: /\w[\w\d_]*/
			})],
			r: 0
		}, e.HCM, e.NM, s, a, t]
	}
});
hljs.registerLanguage("sql", function(e) {
	var t = e.C("--", "$");
	return {
		cI: !0,
		i: /[<>]/,
		c: [{
			cN: "operator",
			bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate savepoint release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke",
			e: /;/,
			eW: !0,
			k: {
				keyword: "abs absolute acos action add adddate addtime aes_decrypt aes_encrypt after aggregate all allocate alter analyze and any are as asc ascii asin assertion at atan atan2 atn2 authorization authors avg backup before begin benchmark between bin binlog bit_and bit_count bit_length bit_or bit_xor both by cache call cascade cascaded case cast catalog ceil ceiling chain change changed char_length character_length charindex charset check checksum checksum_agg choose close coalesce coercibility collate collation collationproperty column columns columns_updated commit compress concat concat_ws concurrent connect connection connection_id consistent constraint constraints continue contributors conv convert convert_tz corresponding cos cot count count_big crc32 create cross cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime data database databases datalength date_add date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts datetimeoffsetfromparts day dayname dayofmonth dayofweek dayofyear deallocate declare decode default deferrable deferred degrees delayed delete des_decrypt des_encrypt des_key_file desc describe descriptor diagnostics difference disconnect distinct distinctrow div do domain double drop dumpfile each else elt enclosed encode encrypt end end-exec engine engines eomonth errors escape escaped event eventdata events except exception exec execute exists exp explain export_set extended external extract fast fetch field fields find_in_set first first_value floor flush for force foreign format found found_rows from from_base64 from_days from_unixtime full function get get_format get_lock getdate getutcdate global go goto grant grants greatest group group_concat grouping grouping_id gtid_subset gtid_subtract handler having help hex high_priority hosts hour ident_current ident_incr ident_seed identified identity if ifnull ignore iif ilike immediate in index indicator inet6_aton inet6_ntoa inet_aton inet_ntoa infile initially inner innodb input insert install instr intersect into is is_free_lock is_ipv4 is_ipv4_compat is_ipv4_mapped is_not is_not_null is_used_lock isdate isnull isolation join key kill language last last_day last_insert_id last_value lcase lead leading least leaves left len lenght level like limit lines ln load load_file local localtime localtimestamp locate lock log log10 log2 logfile logs low_priority lower lpad ltrim make_set makedate maketime master master_pos_wait match matched max md5 medium merge microsecond mid min minute mod mode module month monthname mutex name_const names national natural nchar next no no_write_to_binlog not now nullif nvarchar oct octet_length of old_password on only open optimize option optionally or ord order outer outfile output pad parse partial partition password patindex percent_rank percentile_cont percentile_disc period_add period_diff pi plugin position pow power pragma precision prepare preserve primary prior privileges procedure procedure_analyze processlist profile profiles public publishingservername purge quarter query quick quote quotename radians rand read references regexp relative relaylog release release_lock rename repair repeat replace replicate reset restore restrict return returns reverse revoke right rlike rollback rollup round row row_count rows rpad rtrim savepoint schema scroll sec_to_time second section select serializable server session session_user set sha sha1 sha2 share show sign sin size slave sleep smalldatetimefromparts snapshot some soname soundex sounds_like space sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sql_variant_property sqlstate sqrt square start starting status std stddev stddev_pop stddev_samp stdev stdevp stop str str_to_date straight_join strcmp string stuff subdate substr substring subtime subtring_index sum switchoffset sysdate sysdatetime sysdatetimeoffset system_user sysutcdatetime table tables tablespace tan temporary terminated tertiary_weights then time time_format time_to_sec timediff timefromparts timestamp timestampadd timestampdiff timezone_hour timezone_minute to to_base64 to_days to_seconds todatetimeoffset trailing transaction translation trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse ucase uncompress uncompressed_length unhex unicode uninstall union unique unix_timestamp unknown unlock update upgrade upped upper usage use user user_resources using utc_date utc_time utc_timestamp uuid uuid_short validate_password_strength value values var var_pop var_samp variables variance varp version view warnings week weekday weekofyear weight_string when whenever where with work write xml xor year yearweek zon",
				literal: "true false null",
				built_in: "array bigint binary bit blob boolean char character date dec decimal float int integer interval number numeric real serial smallint varchar varying int8 serial8 text"
			},
			c: [{
				cN: "string",
				b: "'",
				e: "'",
				c: [e.BE, {
					b: "''"
				}]
			}, {
				cN: "string",
				b: '"',
				e: '"',
				c: [e.BE, {
					b: '""'
				}]
			}, {
				cN: "string",
				b: "`",
				e: "`",
				c: [e.BE]
			}, e.CNM, e.CBCM, t]
		}, e.CBCM, t]
	}
});
hljs.registerLanguage("http", function(t) {
	return {
		aliases: ["https"],
		i: "\\S",
		c: [{
			cN: "status",
			b: "^HTTP/[0-9\\.]+",
			e: "$",
			c: [{
				cN: "number",
				b: "\\b\\d{3}\\b"
			}]
		}, {
			cN: "request",
			b: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",
			rB: !0,
			e: "$",
			c: [{
				cN: "string",
				b: " ",
				e: " ",
				eB: !0,
				eE: !0
			}]
		}, {
			cN: "attribute",
			b: "^\\w",
			e: ": ",
			eE: !0,
			i: "\\n|\\s|=",
			starts: {
				cN: "string",
				e: "$"
			}
		}, {
			b: "\\n\\n",
			starts: {
				sL: "",
				eW: !0
			}
		}]
	}
});
hljs.registerLanguage("javascript", function(e) {
	return {
		aliases: ["js"],
		k: {
			keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as await",
			literal: "true false null undefined NaN Infinity",
			built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
		},
		c: [{
			cN: "pi",
			r: 10,
			v: [{
				b: /^\s*('|")use strict('|")/
			}, {
				b: /^\s*('|")use asm('|")/
			}]
		}, e.ASM, e.QSM, {
			cN: "string",
			b: "`",
			e: "`",
			c: [e.BE, {
				cN: "subst",
				b: "\\$\\{",
				e: "\\}"
			}]
		}, e.CLCM, e.CBCM, {
			cN: "number",
			b: "\\b(0[xXbBoO][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
			r: 0
		}, {
			b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
			k: "return throw case",
			c: [e.CLCM, e.CBCM, e.RM, {
				b: /</,
				e: />\s*[);\]]/,
				r: 0,
				sL: "xml"
			}],
			r: 0
		}, {
			cN: "function",
			bK: "function",
			e: /\{/,
			eE: !0,
			c: [e.inherit(e.TM, {
				b: /[A-Za-z$_][0-9A-Za-z$_]*/
			}), {
				cN: "params",
				b: /\(/,
				e: /\)/,
				c: [e.CLCM, e.CBCM],
				i: /["'\(]/
			}],
			i: /\[|%/
		}, {
			b: /\$[(.]/
		}, {
			b: "\\." + e.IR,
			r: 0
		}, {
			bK: "import",
			e: "[;$]",
			k: "import from as",
			c: [e.ASM, e.QSM]
		}, {
			cN: "class",
			bK: "class",
			e: /[{;=]/,
			eE: !0,
			i: /[:"\[\]]/,
			c: [{
				bK: "extends"
			}, e.UTM]
		}]
	}
});
hljs.registerLanguage("markdown", function(e) {
	return {
		aliases: ["md", "mkdown", "mkd"],
		c: [{
			cN: "header",
			v: [{
				b: "^#{1,6}",
				e: "$"
			}, {
				b: "^.+?\\n[=-]{2,}$"
			}]
		}, {
			b: "<",
			e: ">",
			sL: "xml",
			r: 0
		}, {
			cN: "bullet",
			b: "^([*+-]|(\\d+\\.))\\s+"
		}, {
			cN: "strong",
			b: "[*_]{2}.+?[*_]{2}"
		}, {
			cN: "emphasis",
			v: [{
				b: "\\*.+?\\*"
			}, {
				b: "_.+?_",
				r: 0
			}]
		}, {
			cN: "blockquote",
			b: "^>\\s+",
			e: "$"
		}, {
			cN: "code",
			v: [{
				b: "`.+?`"
			}, {
				b: "^( {4}| )",
				e: "$",
				r: 0
			}]
		}, {
			cN: "horizontal_rule",
			b: "^[-\\*]{3,}",
			e: "$"
		}, {
			b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
			rB: !0,
			c: [{
				cN: "link_label",
				b: "\\[",
				e: "\\]",
				eB: !0,
				rE: !0,
				r: 0
			}, {
				cN: "link_url",
				b: "\\]\\(",
				e: "\\)",
				eB: !0,
				eE: !0
			}, {
				cN: "link_reference",
				b: "\\]\\[",
				e: "\\]",
				eB: !0,
				eE: !0
			}],
			r: 10
		}, {
			b: "^\\[.+\\]:",
			rB: !0,
			c: [{
				cN: "link_reference",
				b: "\\[",
				e: "\\]:",
				eB: !0,
				eE: !0,
				starts: {
					cN: "link_url",
					e: "$"
				}
			}]
		}]
	}
});
hljs.registerLanguage("css", function(e) {
	var c = "[a-zA-Z-][a-zA-Z0-9_-]*",
		a = {
			cN: "function",
			b: c + "\\(",
			rB: !0,
			eE: !0,
			e: "\\("
		},
		r = {
			cN: "rule",
			b: /[A-Z\_\.\-]+\s*:/,
			rB: !0,
			e: ";",
			eW: !0,
			c: [{
				cN: "attribute",
				b: /\S/,
				e: ":",
				eE: !0,
				starts: {
					cN: "value",
					eW: !0,
					eE: !0,
					c: [a, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
						cN: "hexcolor",
						b: "#[0-9A-Fa-f]+"
					}, {
						cN: "important",
						b: "!important"
					}]
				}
			}]
		};
	return {
		cI: !0,
		i: /[=\/|']/,
		c: [e.CBCM, r, {
			cN: "id",
			b: /\#[A-Za-z0-9_-]+/
		}, {
			cN: "class",
			b: /\.[A-Za-z0-9_-]+/,
			r: 0
		}, {
			cN: "attr_selector",
			b: /\[/,
			e: /\]/,
			i: "$"
		}, {
			cN: "pseudo",
			b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"']+/
		}, {
			cN: "at_rule",
			b: "@(font-face|page)",
			l: "[a-z-]+",
			k: "font-face page"
		}, {
			cN: "at_rule",
			b: "@",
			e: "[{;]",
			c: [{
				cN: "keyword",
				b: /\S+/
			}, {
				b: /\s/,
				eW: !0,
				eE: !0,
				r: 0,
				c: [a, e.ASM, e.QSM, e.CSSNM]
			}]
		}, {
			cN: "tag",
			b: c,
			r: 0
		}, {
			cN: "rules",
			b: "{",
			e: "}",
			i: /\S/,
			r: 0,
			c: [e.CBCM, r]
		}]
	}
});