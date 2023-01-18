/*!
 * idist-jodit - Jodit is awesome and usefully wysiwyg editor with filebrowser
 * Author: KimSunWook <ceo@idist.ai> (https://xdsoft.net/)
 * Version: v3.20.9
 * Url: https://github.com/IDIST/jodit
 * License(s): MIT
 */
	
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return (self["webpackChunkidist_jodit"] = self["webpackChunkidist_jodit"] || []).push([[881],{

/***/ 84553:
/***/ (function(module) {

module.exports = "<svg stroke=\"black\" viewBox=\"0 0 32 32\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\"> <style type=\"text/css\"> .st0{fill:none;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} </style> <path class=\"st0\" d=\"M29,23H3c-1.1,0-2-0.9-2-2V11c0-1.1,0.9-2,2-2h26c1.1,0,2,0.9,2,2v10C31,22.1,30.1,23,29,23z\"/> <path class=\"st0\" d=\"M13,19L13,19c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v2C15,18.1,14.1,19,13,19z\"/> <line class=\"st0\" x1=\"18\" x2=\"18\" y1=\"13\" y2=\"19\"/> <line class=\"st0\" x1=\"21\" x2=\"18\" y1=\"13\" y2=\"17\"/> <line class=\"st0\" x1=\"21\" x2=\"19\" y1=\"19\" y2=\"16\"/> </svg>"

/***/ }),

/***/ 55138:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 39130:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 47201:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 37667:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 50862:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 15670:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 86757:
/***/ (function(module) {

"use strict";

!function (e, t) {  true ? module.exports = t() : 0; }("undefined" != typeof self ? self : this, function () {
    return function (e) { var t = {}; function r(i) { if (t[i])
        return t[i].exports; var o = t[i] = { i: i, l: !1, exports: {} }; return e[i].call(o.exports, o, o.exports, r), o.l = !0, o.exports; } return r.m = e, r.c = t, r.d = function (e, t, i) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i }); }, r.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, r.t = function (e, t) { if (1 & t && (e = r(e)), 8 & t)
        return e; if (4 & t && "object" == typeof e && e && e.__esModule)
        return e; var i = Object.create(null); if (r.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
        for (var o in e)
            r.d(i, o, function (t) { return e[t]; }.bind(null, o)); return i; }, r.n = function (e) { var t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return r.d(t, "a", t), t; }, r.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, r.p = "", r(r.s = 1); }([function (e, t, r) {
            "use strict";
            var i = r(3);
            function o(e) { return !0 === i(e) && "[object Object]" === Object.prototype.toString.call(e); }
            e.exports = function (e) { var t, r; return !1 !== o(e) && "function" == typeof (t = e.constructor) && !1 !== o(r = t.prototype) && !1 !== r.hasOwnProperty("isPrototypeOf"); };
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.VERSION = t.PALETTE_MATERIAL_CHROME = t.PALETTE_MATERIAL_500 = t.COLOR_NAMES = t.getLuminance = t.intToRgb = t.rgbToInt = t.rgbToHsv = t.rgbToHsl = t.hslToRgb = t.rgbToHex = t.parseColor = t.parseColorToHsla = t.parseColorToHsl = t.parseColorToRgba = t.parseColorToRgb = t.from = t.createPicker = void 0;
            var i = function () { function e(e, t) { for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }(), o = function (e, t) { if (Array.isArray(e))
                return e; if (Symbol.iterator in Object(e))
                return function (e, t) { var r = [], i = !0, o = !1, n = void 0; try {
                    for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (r.push(s.value), !t || r.length !== t); i = !0)
                        ;
                }
                catch (e) {
                    o = !0, n = e;
                }
                finally {
                    try {
                        !i && a.return && a.return();
                    }
                    finally {
                        if (o)
                            throw n;
                    }
                } return r; }(e, t); throw new TypeError("Invalid attempt to destructure non-iterable instance"); }, n = r(2), s = l(r(0)), a = l(r(4));
            function l(e) { return e && e.__esModule ? e : { default: e }; }
            function c(e, t) { if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function"); }
            function u(e) { if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++)
                    r[t] = e[t];
                return r;
            } return Array.from(e); }
            var h = "undefined" != typeof window && window.navigator.userAgent.indexOf("Edge") > -1, p = "undefined" != typeof window && window.navigator.userAgent.indexOf("rv:") > -1, d = { id: null, attachTo: "body", showHSL: !0, showRGB: !0, showHEX: !0, showAlpha: !1, color: "#ff0000", palette: null, paletteEditable: !1, useAlphaInPalette: "auto", slBarSize: [232, 150], hueBarSize: [150, 11], alphaBarSize: [150, 11] }, f = "COLOR", g = "RGBA_USER", b = "HSLA_USER";
            function v(e, t, r) { return e ? e instanceof HTMLElement ? e : e instanceof NodeList ? e[0] : "string" == typeof e ? document.querySelector(e) : e.jquery ? e.get(0) : r ? t : null : t; }
            function m(e) { var t = e.getContext("2d"), r = +e.width, i = +e.height, s = t.createLinearGradient(1, 1, 1, i - 1); return s.addColorStop(0, "white"), s.addColorStop(1, "black"), { setHue: function (e) { var o = t.createLinearGradient(1, 0, r - 1, 0); o.addColorStop(0, "hsla(" + e + ", 100%, 50%, 0)"), o.addColorStop(1, "hsla(" + e + ", 100%, 50%, 1)"), t.fillStyle = s, t.fillRect(0, 0, r, i), t.fillStyle = o, t.globalCompositeOperation = "multiply", t.fillRect(0, 0, r, i), t.globalCompositeOperation = "source-over"; }, grabColor: function (e, r) { return t.getImageData(e, r, 1, 1).data; }, findColor: function (e, t, s) { var a = (0, n.rgbToHsv)(e, t, s), l = o(a, 3), c = l[1], u = l[2]; return [c * r, i - u * i]; } }; }
            function A(e, t, r) { return null === e ? t : /^\s*$/.test(e) ? r : !!/true|yes|1/i.test(e) || !/false|no|0/i.test(e) && t; }
            function y(e, t, r) { if (null === e)
                return t; if (/^\s*$/.test(e))
                return r; var i = e.split(",").map(Number); return 2 === i.length && i[0] && i[1] ? i : t; }
            var k = function () { function e(t, r) { if (c(this, e), r ? (t = v(t), this.options = Object.assign({}, d, r)) : t && (0, s.default)(t) ? (this.options = Object.assign({}, d, t), t = v(this.options.attachTo)) : (this.options = Object.assign({}, d), t = v((0, n.nvl)(t, this.options.attachTo))), !t)
                throw new Error("Container not found: " + this.options.attachTo); !function (e, t) { var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "acp-"; if (t.hasAttribute(r + "show-hsl") && (e.showHSL = A(t.getAttribute(r + "show-hsl"), d.showHSL, !0)), t.hasAttribute(r + "show-rgb") && (e.showRGB = A(t.getAttribute(r + "show-rgb"), d.showRGB, !0)), t.hasAttribute(r + "show-hex") && (e.showHEX = A(t.getAttribute(r + "show-hex"), d.showHEX, !0)), t.hasAttribute(r + "show-alpha") && (e.showAlpha = A(t.getAttribute(r + "show-alpha"), d.showAlpha, !0)), t.hasAttribute(r + "palette-editable") && (e.paletteEditable = A(t.getAttribute(r + "palette-editable"), d.paletteEditable, !0)), t.hasAttribute(r + "sl-bar-size") && (e.slBarSize = y(t.getAttribute(r + "sl-bar-size"), d.slBarSize, [232, 150])), t.hasAttribute(r + "hue-bar-size") && (e.hueBarSize = y(t.getAttribute(r + "hue-bar-size"), d.hueBarSize, [150, 11]), e.alphaBarSize = e.hueBarSize), t.hasAttribute(r + "palette")) {
                var i = t.getAttribute(r + "palette");
                switch (i) {
                    case "PALETTE_MATERIAL_500":
                        e.palette = n.PALETTE_MATERIAL_500;
                        break;
                    case "PALETTE_MATERIAL_CHROME":
                    case "":
                        e.palette = n.PALETTE_MATERIAL_CHROME;
                        break;
                    default: e.palette = i.split(/[;|]/);
                }
            } t.hasAttribute(r + "color") && (e.color = t.getAttribute(r + "color")); }(this.options, t), this.H = 0, this.S = 0, this.L = 0, this.R = 0, this.G = 0, this.B = 0, this.A = 1, this.palette = {}, this.element = document.createElement("div"), this.options.id && (this.element.id = this.options.id), this.element.className = "a-color-picker", this.element.innerHTML = a.default, t.appendChild(this.element); var i = this.element.querySelector(".a-color-picker-h"); this.setupHueCanvas(i), this.hueBarHelper = m(i), this.huePointer = this.element.querySelector(".a-color-picker-h+.a-color-picker-dot"); var o = this.element.querySelector(".a-color-picker-sl"); this.setupSlCanvas(o), this.slBarHelper = m(o), this.slPointer = this.element.querySelector(".a-color-picker-sl+.a-color-picker-dot"), this.preview = this.element.querySelector(".a-color-picker-preview"), this.setupClipboard(this.preview.querySelector(".a-color-picker-clipbaord")), this.options.showHSL ? (this.setupInput(this.inputH = this.element.querySelector(".a-color-picker-hsl>input[nameref=H]")), this.setupInput(this.inputS = this.element.querySelector(".a-color-picker-hsl>input[nameref=S]")), this.setupInput(this.inputL = this.element.querySelector(".a-color-picker-hsl>input[nameref=L]"))) : this.element.querySelector(".a-color-picker-hsl").remove(), this.options.showRGB ? (this.setupInput(this.inputR = this.element.querySelector(".a-color-picker-rgb>input[nameref=R]")), this.setupInput(this.inputG = this.element.querySelector(".a-color-picker-rgb>input[nameref=G]")), this.setupInput(this.inputB = this.element.querySelector(".a-color-picker-rgb>input[nameref=B]"))) : this.element.querySelector(".a-color-picker-rgb").remove(), this.options.showHEX ? this.setupInput(this.inputRGBHEX = this.element.querySelector("input[nameref=RGBHEX]")) : this.element.querySelector(".a-color-picker-rgbhex").remove(), this.options.paletteEditable || this.options.palette && this.options.palette.length > 0 ? this.setPalette(this.paletteRow = this.element.querySelector(".a-color-picker-palette")) : (this.paletteRow = this.element.querySelector(".a-color-picker-palette"), this.paletteRow.remove()), this.options.showAlpha ? (this.setupAlphaCanvas(this.element.querySelector(".a-color-picker-a")), this.alphaPointer = this.element.querySelector(".a-color-picker-a+.a-color-picker-dot")) : this.element.querySelector(".a-color-picker-alpha").remove(), this.element.style.width = this.options.slBarSize[0] + "px", this.onValueChanged(f, this.options.color); } return i(e, [{ key: "setupHueCanvas", value: function (e) { var t = this; e.width = this.options.hueBarSize[0], e.height = this.options.hueBarSize[1]; for (var r = e.getContext("2d"), i = r.createLinearGradient(0, 0, this.options.hueBarSize[0], 0), o = 0; o <= 1; o += 1 / 360)
                        i.addColorStop(o, "hsl(" + 360 * o + ", 100%, 50%)"); r.fillStyle = i, r.fillRect(0, 0, this.options.hueBarSize[0], this.options.hueBarSize[1]); var s = function (r) { var i = (0, n.limit)(r.clientX - e.getBoundingClientRect().left, 0, t.options.hueBarSize[0]), o = Math.round(360 * i / t.options.hueBarSize[0]); t.huePointer.style.left = i - 7 + "px", t.onValueChanged("H", o); }, a = function e() { document.removeEventListener("mousemove", s), document.removeEventListener("mouseup", e); }; e.addEventListener("mousedown", function (e) { s(e), document.addEventListener("mousemove", s), document.addEventListener("mouseup", a); }); } }, { key: "setupSlCanvas", value: function (e) { var t = this; e.width = this.options.slBarSize[0], e.height = this.options.slBarSize[1]; var r = function (r) { var i = (0, n.limit)(r.clientX - e.getBoundingClientRect().left, 0, t.options.slBarSize[0] - 1), o = (0, n.limit)(r.clientY - e.getBoundingClientRect().top, 0, t.options.slBarSize[1] - 1), s = t.slBarHelper.grabColor(i, o); t.slPointer.style.left = i - 7 + "px", t.slPointer.style.top = o - 7 + "px", t.onValueChanged("RGB", s); }, i = function e() { document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", e); }; e.addEventListener("mousedown", function (e) { r(e), document.addEventListener("mousemove", r), document.addEventListener("mouseup", i); }); } }, { key: "setupAlphaCanvas", value: function (e) { var t = this; e.width = this.options.alphaBarSize[0], e.height = this.options.alphaBarSize[1]; var r = e.getContext("2d"), i = r.createLinearGradient(0, 0, e.width - 1, 0); i.addColorStop(0, "hsla(0, 0%, 50%, 0)"), i.addColorStop(1, "hsla(0, 0%, 50%, 1)"), r.fillStyle = i, r.fillRect(0, 0, this.options.alphaBarSize[0], this.options.alphaBarSize[1]); var o = function (r) { var i = (0, n.limit)(r.clientX - e.getBoundingClientRect().left, 0, t.options.alphaBarSize[0]), o = +(i / t.options.alphaBarSize[0]).toFixed(2); t.alphaPointer.style.left = i - 7 + "px", t.onValueChanged("ALPHA", o); }, s = function e() { document.removeEventListener("mousemove", o), document.removeEventListener("mouseup", e); }; e.addEventListener("mousedown", function (e) { o(e), document.addEventListener("mousemove", o), document.addEventListener("mouseup", s); }); } }, { key: "setupInput", value: function (e) { var t = this, r = +e.min, i = +e.max, o = e.getAttribute("nameref"); e.hasAttribute("select-on-focus") && e.addEventListener("focus", function () { e.select(); }), "text" === e.type ? e.addEventListener("change", function () { t.onValueChanged(o, e.value); }) : ((h || p) && e.addEventListener("keydown", function (s) { "Up" === s.key ? (e.value = (0, n.limit)(+e.value + 1, r, i), t.onValueChanged(o, e.value), s.returnValue = !1) : "Down" === s.key && (e.value = (0, n.limit)(+e.value - 1, r, i), t.onValueChanged(o, e.value), s.returnValue = !1); }), e.addEventListener("change", function () { var s = +e.value; t.onValueChanged(o, (0, n.limit)(s, r, i)); })); } }, { key: "setupClipboard", value: function (e) { var t = this; e.title = "click to copy", e.addEventListener("click", function () { e.value = (0, n.parseColor)([t.R, t.G, t.B, t.A], "hexcss4"), e.select(), document.execCommand("copy"); }); } }, { key: "setPalette", value: function (e) { var t = this, r = "auto" === this.options.useAlphaInPalette ? this.options.showAlpha : this.options.useAlphaInPalette, i = null; switch (this.options.palette) {
                        case "PALETTE_MATERIAL_500":
                            i = n.PALETTE_MATERIAL_500;
                            break;
                        case "PALETTE_MATERIAL_CHROME":
                            i = n.PALETTE_MATERIAL_CHROME;
                            break;
                        default: i = (0, n.ensureArray)(this.options.palette);
                    } if (this.options.paletteEditable || i.length > 0) {
                        var o = function (r, i, o) { var n = e.querySelector('.a-color-picker-palette-color[data-color="' + r + '"]') || document.createElement("div"); n.className = "a-color-picker-palette-color", n.style.backgroundColor = r, n.setAttribute("data-color", r), n.title = r, e.insertBefore(n, i), t.palette[r] = !0, o && t.onPaletteColorAdd(r); }, s = function (r, i) { r ? (e.removeChild(r), t.palette[r.getAttribute("data-color")] = !1, i && t.onPaletteColorRemove(r.getAttribute("data-color"))) : (e.querySelectorAll(".a-color-picker-palette-color[data-color]").forEach(function (t) { e.removeChild(t); }), Object.keys(t.palette).forEach(function (e) { t.palette[e] = !1; }), i && t.onPaletteColorRemove()); };
                        if (i.map(function (e) { return (0, n.parseColor)(e, r ? "rgbcss4" : "hex"); }).filter(function (e) { return !!e; }).forEach(function (e) { return o(e); }), this.options.paletteEditable) {
                            var a = document.createElement("div");
                            a.className = "a-color-picker-palette-color a-color-picker-palette-add", a.innerHTML = "+", e.appendChild(a), e.addEventListener("click", function (e) { /a-color-picker-palette-add/.test(e.target.className) ? e.shiftKey ? s(null, !0) : o(r ? (0, n.parseColor)([t.R, t.G, t.B, t.A], "rgbcss4") : (0, n.rgbToHex)(t.R, t.G, t.B), e.target, !0) : /a-color-picker-palette-color/.test(e.target.className) && (e.shiftKey ? s(e.target, !0) : t.onValueChanged(f, e.target.getAttribute("data-color"))); });
                        }
                        else
                            e.addEventListener("click", function (e) { /a-color-picker-palette-color/.test(e.target.className) && t.onValueChanged(f, e.target.getAttribute("data-color")); });
                    }
                    else
                        e.style.display = "none"; } }, { key: "updatePalette", value: function (e) { this.paletteRow.innerHTML = "", this.palette = {}, this.paletteRow.parentElement || this.element.appendChild(this.paletteRow), this.options.palette = e, this.setPalette(this.paletteRow); } }, { key: "onValueChanged", value: function (e, t) { var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { silent: !1 }; switch (e) {
                        case "H":
                            this.H = t;
                            var i = (0, n.hslToRgb)(this.H, this.S, this.L), s = o(i, 3);
                            this.R = s[0], this.G = s[1], this.B = s[2], this.slBarHelper.setHue(t), this.updatePointerH(this.H), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGB(this.R, this.G, this.B), this.updateInputRGBHEX(this.R, this.G, this.B);
                            break;
                        case "S":
                            this.S = t;
                            var a = (0, n.hslToRgb)(this.H, this.S, this.L), l = o(a, 3);
                            this.R = l[0], this.G = l[1], this.B = l[2], this.updatePointerSL(this.H, this.S, this.L), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGB(this.R, this.G, this.B), this.updateInputRGBHEX(this.R, this.G, this.B);
                            break;
                        case "L":
                            this.L = t;
                            var c = (0, n.hslToRgb)(this.H, this.S, this.L), u = o(c, 3);
                            this.R = u[0], this.G = u[1], this.B = u[2], this.updatePointerSL(this.H, this.S, this.L), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGB(this.R, this.G, this.B), this.updateInputRGBHEX(this.R, this.G, this.B);
                            break;
                        case "R":
                            this.R = t;
                            var h = (0, n.rgbToHsl)(this.R, this.G, this.B), p = o(h, 3);
                            this.H = p[0], this.S = p[1], this.L = p[2], this.slBarHelper.setHue(this.H), this.updatePointerH(this.H), this.updatePointerSL(this.H, this.S, this.L), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGBHEX(this.R, this.G, this.B);
                            break;
                        case "G":
                            this.G = t;
                            var d = (0, n.rgbToHsl)(this.R, this.G, this.B), v = o(d, 3);
                            this.H = v[0], this.S = v[1], this.L = v[2], this.slBarHelper.setHue(this.H), this.updatePointerH(this.H), this.updatePointerSL(this.H, this.S, this.L), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGBHEX(this.R, this.G, this.B);
                            break;
                        case "B":
                            this.B = t;
                            var m = (0, n.rgbToHsl)(this.R, this.G, this.B), A = o(m, 3);
                            this.H = A[0], this.S = A[1], this.L = A[2], this.slBarHelper.setHue(this.H), this.updatePointerH(this.H), this.updatePointerSL(this.H, this.S, this.L), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGBHEX(this.R, this.G, this.B);
                            break;
                        case "RGB":
                            var y = o(t, 3);
                            this.R = y[0], this.G = y[1], this.B = y[2];
                            var k = (0, n.rgbToHsl)(this.R, this.G, this.B), F = o(k, 3);
                            this.H = F[0], this.S = F[1], this.L = F[2], this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGB(this.R, this.G, this.B), this.updateInputRGBHEX(this.R, this.G, this.B);
                            break;
                        case g:
                            var E = o(t, 4);
                            this.R = E[0], this.G = E[1], this.B = E[2], this.A = E[3];
                            var H = (0, n.rgbToHsl)(this.R, this.G, this.B), B = o(H, 3);
                            this.H = B[0], this.S = B[1], this.L = B[2], this.slBarHelper.setHue(this.H), this.updatePointerH(this.H), this.updatePointerSL(this.H, this.S, this.L), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGB(this.R, this.G, this.B), this.updateInputRGBHEX(this.R, this.G, this.B), this.updatePointerA(this.A);
                            break;
                        case b:
                            var R = o(t, 4);
                            this.H = R[0], this.S = R[1], this.L = R[2], this.A = R[3];
                            var C = (0, n.hslToRgb)(this.H, this.S, this.L), S = o(C, 3);
                            this.R = S[0], this.G = S[1], this.B = S[2], this.slBarHelper.setHue(this.H), this.updatePointerH(this.H), this.updatePointerSL(this.H, this.S, this.L), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGB(this.R, this.G, this.B), this.updateInputRGBHEX(this.R, this.G, this.B), this.updatePointerA(this.A);
                            break;
                        case "RGBHEX":
                            var L = (0, n.cssColorToRgb)(t) || [this.R, this.G, this.B], w = o(L, 3);
                            this.R = w[0], this.G = w[1], this.B = w[2];
                            var T = (0, n.rgbToHsl)(this.R, this.G, this.B), x = o(T, 3);
                            this.H = x[0], this.S = x[1], this.L = x[2], this.slBarHelper.setHue(this.H), this.updatePointerH(this.H), this.updatePointerSL(this.H, this.S, this.L), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGB(this.R, this.G, this.B);
                            break;
                        case f:
                            var G = (0, n.parseColor)(t, "rgba") || [0, 0, 0, 1], I = o(G, 4);
                            this.R = I[0], this.G = I[1], this.B = I[2], this.A = I[3];
                            var P = (0, n.rgbToHsl)(this.R, this.G, this.B), D = o(P, 3);
                            this.H = D[0], this.S = D[1], this.L = D[2], this.slBarHelper.setHue(this.H), this.updatePointerH(this.H), this.updatePointerSL(this.H, this.S, this.L), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGB(this.R, this.G, this.B), this.updateInputRGBHEX(this.R, this.G, this.B), this.updatePointerA(this.A);
                            break;
                        case "ALPHA": this.A = t;
                    } 1 === this.A ? this.preview.style.backgroundColor = "rgb(" + this.R + "," + this.G + "," + this.B + ")" : this.preview.style.backgroundColor = "rgba(" + this.R + "," + this.G + "," + this.B + "," + this.A + ")", r && r.silent || this.onchange && this.onchange(this.preview.style.backgroundColor); } }, { key: "onPaletteColorAdd", value: function (e) { this.oncoloradd && this.oncoloradd(e); } }, { key: "onPaletteColorRemove", value: function (e) { this.oncolorremove && this.oncolorremove(e); } }, { key: "updateInputHSL", value: function (e, t, r) { this.options.showHSL && (this.inputH.value = e, this.inputS.value = t, this.inputL.value = r); } }, { key: "updateInputRGB", value: function (e, t, r) { this.options.showRGB && (this.inputR.value = e, this.inputG.value = t, this.inputB.value = r); } }, { key: "updateInputRGBHEX", value: function (e, t, r) { this.options.showHEX && (this.inputRGBHEX.value = (0, n.rgbToHex)(e, t, r)); } }, { key: "updatePointerH", value: function (e) { var t = this.options.hueBarSize[0] * e / 360; this.huePointer.style.left = t - 7 + "px"; } }, { key: "updatePointerSL", value: function (e, t, r) { var i = (0, n.hslToRgb)(e, t, r), s = o(i, 3), a = s[0], l = s[1], c = s[2], u = this.slBarHelper.findColor(a, l, c), h = o(u, 2), p = h[0], d = h[1]; p >= 0 && (this.slPointer.style.left = p - 7 + "px", this.slPointer.style.top = d - 7 + "px"); } }, { key: "updatePointerA", value: function (e) { if (this.options.showAlpha) {
                        var t = this.options.alphaBarSize[0] * e;
                        this.alphaPointer.style.left = t - 7 + "px";
                    } } }]), e; }(), F = function () { function e(t) { c(this, e), this.name = t, this.listeners = []; } return i(e, [{ key: "on", value: function (e) { e && this.listeners.push(e); } }, { key: "off", value: function (e) { this.listeners = e ? this.listeners.filter(function (t) { return t !== e; }) : []; } }, { key: "emit", value: function (e, t) { for (var r = this.listeners.slice(0), i = 0; i < r.length; i++)
                        r[i].apply(t, e); } }]), e; }();
            function E(e, t) { var r = new k(e, t), i = { change: new F("change"), coloradd: new F("coloradd"), colorremove: new F("colorremove") }, s = !0, a = {}, l = { get element() { return r.element; }, get rgb() { return [r.R, r.G, r.B]; }, set rgb(e) { var t = o(e, 3), i = t[0], s = t[1], a = t[2], l = [(0, n.limit)(i, 0, 255), (0, n.limit)(s, 0, 255), (0, n.limit)(a, 0, 255)]; i = l[0], s = l[1], a = l[2], r.onValueChanged(g, [i, s, a, 1]); }, get hsl() { return [r.H, r.S, r.L]; }, set hsl(e) { var t = o(e, 3), i = t[0], s = t[1], a = t[2], l = [(0, n.limit)(i, 0, 360), (0, n.limit)(s, 0, 100), (0, n.limit)(a, 0, 100)]; i = l[0], s = l[1], a = l[2], r.onValueChanged(b, [i, s, a, 1]); }, get rgbhex() { return this.all.hex; }, get rgba() { return [r.R, r.G, r.B, r.A]; }, set rgba(e) { var t = o(e, 4), i = t[0], s = t[1], a = t[2], l = t[3], c = [(0, n.limit)(i, 0, 255), (0, n.limit)(s, 0, 255), (0, n.limit)(a, 0, 255), (0, n.limit)(l, 0, 1)]; i = c[0], s = c[1], a = c[2], l = c[3], r.onValueChanged(g, [i, s, a, l]); }, get hsla() { return [r.H, r.S, r.L, r.A]; }, set hsla(e) { var t = o(e, 4), i = t[0], s = t[1], a = t[2], l = t[3], c = [(0, n.limit)(i, 0, 360), (0, n.limit)(s, 0, 100), (0, n.limit)(a, 0, 100), (0, n.limit)(l, 0, 1)]; i = c[0], s = c[1], a = c[2], l = c[3], r.onValueChanged(b, [i, s, a, l]); }, get color() { return this.all.toString(); }, set color(e) { r.onValueChanged(f, e); }, setColor: function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; r.onValueChanged(f, e, { silent: t }); }, get all() { if (s) {
                    var e = [r.R, r.G, r.B, r.A], t = r.A < 1 ? "rgba(" + r.R + "," + r.G + "," + r.B + "," + r.A + ")" : n.rgbToHex.apply(void 0, e);
                    (a = (0, n.parseColor)(e, a)).toString = function () { return t; }, s = !1;
                } return Object.assign({}, a); }, get onchange() { return i.change && i.change.listeners[0]; }, set onchange(e) { this.off("change").on("change", e); }, get oncoloradd() { return i.coloradd && i.coloradd.listeners[0]; }, set oncoloradd(e) { this.off("coloradd").on("coloradd", e); }, get oncolorremove() { return i.colorremove && i.colorremove.listeners[0]; }, set oncolorremove(e) { this.off("colorremove").on("colorremove", e); }, get palette() { return Object.keys(r.palette).filter(function (e) { return r.palette[e]; }); }, set palette(e) { r.updatePalette(e); }, show: function () { r.element.classList.remove("hidden"); }, hide: function () { r.element.classList.add("hidden"); }, toggle: function () { r.element.classList.toggle("hidden"); }, on: function (e, t) { return e && i[e] && i[e].on(t), this; }, off: function (e, t) { return e && i[e] && i[e].off(t), this; }, destroy: function () { i.change.off(), i.coloradd.off(), i.colorremove.off(), r.element.remove(), i = null, r = null; } }; return r.onchange = function () { for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r]; s = !0, i.change.emit([l].concat(t), l); }, r.oncoloradd = function () { for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r]; i.coloradd.emit([l].concat(t), l); }, r.oncolorremove = function () { for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r]; i.colorremove.emit([l].concat(t), l); }, r.element.ctrl = l, l; }
            if ("undefined" != typeof window && !document.querySelector('head>style[data-source="a-color-picker"]')) {
                var H = r(5).toString(), B = document.createElement("style");
                B.setAttribute("type", "text/css"), B.setAttribute("data-source", "a-color-picker"), B.innerHTML = H, document.querySelector("head").appendChild(B);
            }
            t.createPicker = E, t.from = function (e, t) { var r = function (e) { return e ? Array.isArray(e) ? e : e instanceof HTMLElement ? [e] : e instanceof NodeList ? [].concat(u(e)) : "string" == typeof e ? [].concat(u(document.querySelectorAll(e))) : e.jquery ? e.get() : [] : []; }(e).map(function (e, r) { var i = E(e, t); return i.index = r, i; }); return r.on = function (e, t) { return r.forEach(function (r) { return r.on(e, t); }), this; }, r.off = function (e) { return r.forEach(function (t) { return t.off(e); }), this; }, r; }, t.parseColorToRgb = n.parseColorToRgb, t.parseColorToRgba = n.parseColorToRgba, t.parseColorToHsl = n.parseColorToHsl, t.parseColorToHsla = n.parseColorToHsla, t.parseColor = n.parseColor, t.rgbToHex = n.rgbToHex, t.hslToRgb = n.hslToRgb, t.rgbToHsl = n.rgbToHsl, t.rgbToHsv = n.rgbToHsv, t.rgbToInt = n.rgbToInt, t.intToRgb = n.intToRgb, t.getLuminance = n.getLuminance, t.COLOR_NAMES = n.COLOR_NAMES, t.PALETTE_MATERIAL_500 = n.PALETTE_MATERIAL_500, t.PALETTE_MATERIAL_CHROME = n.PALETTE_MATERIAL_CHROME, t.VERSION = "1.2.1";
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.nvl = t.ensureArray = t.limit = t.getLuminance = t.parseColor = t.parseColorToHsla = t.parseColorToHsl = t.cssHslaToHsla = t.cssHslToHsl = t.parseColorToRgba = t.parseColorToRgb = t.cssRgbaToRgba = t.cssRgbToRgb = t.cssColorToRgba = t.cssColorToRgb = t.intToRgb = t.rgbToInt = t.rgbToHsv = t.rgbToHsl = t.hslToRgb = t.rgbToHex = t.PALETTE_MATERIAL_CHROME = t.PALETTE_MATERIAL_500 = t.COLOR_NAMES = void 0;
            var i = function (e, t) { if (Array.isArray(e))
                return e; if (Symbol.iterator in Object(e))
                return function (e, t) { var r = [], i = !0, o = !1, n = void 0; try {
                    for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (r.push(s.value), !t || r.length !== t); i = !0)
                        ;
                }
                catch (e) {
                    o = !0, n = e;
                }
                finally {
                    try {
                        !i && a.return && a.return();
                    }
                    finally {
                        if (o)
                            throw n;
                    }
                } return r; }(e, t); throw new TypeError("Invalid attempt to destructure non-iterable instance"); }, o = function (e) { return e && e.__esModule ? e : { default: e }; }(r(0));
            function n(e) { if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++)
                    r[t] = e[t];
                return r;
            } return Array.from(e); }
            var s = { aliceblue: "#F0F8FF", antiquewhite: "#FAEBD7", aqua: "#00FFFF", aquamarine: "#7FFFD4", azure: "#F0FFFF", beige: "#F5F5DC", bisque: "#FFE4C4", black: "#000000", blanchedalmond: "#FFEBCD", blue: "#0000FF", blueviolet: "#8A2BE2", brown: "#A52A2A", burlywood: "#DEB887", cadetblue: "#5F9EA0", chartreuse: "#7FFF00", chocolate: "#D2691E", coral: "#FF7F50", cornflowerblue: "#6495ED", cornsilk: "#FFF8DC", crimson: "#DC143C", cyan: "#00FFFF", darkblue: "#00008B", darkcyan: "#008B8B", darkgoldenrod: "#B8860B", darkgray: "#A9A9A9", darkgrey: "#A9A9A9", darkgreen: "#006400", darkkhaki: "#BDB76B", darkmagenta: "#8B008B", darkolivegreen: "#556B2F", darkorange: "#FF8C00", darkorchid: "#9932CC", darkred: "#8B0000", darksalmon: "#E9967A", darkseagreen: "#8FBC8F", darkslateblue: "#483D8B", darkslategray: "#2F4F4F", darkslategrey: "#2F4F4F", darkturquoise: "#00CED1", darkviolet: "#9400D3", deeppink: "#FF1493", deepskyblue: "#00BFFF", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1E90FF", firebrick: "#B22222", floralwhite: "#FFFAF0", forestgreen: "#228B22", fuchsia: "#FF00FF", gainsboro: "#DCDCDC", ghostwhite: "#F8F8FF", gold: "#FFD700", goldenrod: "#DAA520", gray: "#808080", grey: "#808080", green: "#008000", greenyellow: "#ADFF2F", honeydew: "#F0FFF0", hotpink: "#FF69B4", "indianred ": "#CD5C5C", "indigo ": "#4B0082", ivory: "#FFFFF0", khaki: "#F0E68C", lavender: "#E6E6FA", lavenderblush: "#FFF0F5", lawngreen: "#7CFC00", lemonchiffon: "#FFFACD", lightblue: "#ADD8E6", lightcoral: "#F08080", lightcyan: "#E0FFFF", lightgoldenrodyellow: "#FAFAD2", lightgray: "#D3D3D3", lightgrey: "#D3D3D3", lightgreen: "#90EE90", lightpink: "#FFB6C1", lightsalmon: "#FFA07A", lightseagreen: "#20B2AA", lightskyblue: "#87CEFA", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#B0C4DE", lightyellow: "#FFFFE0", lime: "#00FF00", limegreen: "#32CD32", linen: "#FAF0E6", magenta: "#FF00FF", maroon: "#800000", mediumaquamarine: "#66CDAA", mediumblue: "#0000CD", mediumorchid: "#BA55D3", mediumpurple: "#9370DB", mediumseagreen: "#3CB371", mediumslateblue: "#7B68EE", mediumspringgreen: "#00FA9A", mediumturquoise: "#48D1CC", mediumvioletred: "#C71585", midnightblue: "#191970", mintcream: "#F5FFFA", mistyrose: "#FFE4E1", moccasin: "#FFE4B5", navajowhite: "#FFDEAD", navy: "#000080", oldlace: "#FDF5E6", olive: "#808000", olivedrab: "#6B8E23", orange: "#FFA500", orangered: "#FF4500", orchid: "#DA70D6", palegoldenrod: "#EEE8AA", palegreen: "#98FB98", paleturquoise: "#AFEEEE", palevioletred: "#DB7093", papayawhip: "#FFEFD5", peachpuff: "#FFDAB9", peru: "#CD853F", pink: "#FFC0CB", plum: "#DDA0DD", powderblue: "#B0E0E6", purple: "#800080", rebeccapurple: "#663399", red: "#FF0000", rosybrown: "#BC8F8F", royalblue: "#4169E1", saddlebrown: "#8B4513", salmon: "#FA8072", sandybrown: "#F4A460", seagreen: "#2E8B57", seashell: "#FFF5EE", sienna: "#A0522D", silver: "#C0C0C0", skyblue: "#87CEEB", slateblue: "#6A5ACD", slategray: "#708090", slategrey: "#708090", snow: "#FFFAFA", springgreen: "#00FF7F", steelblue: "#4682B4", tan: "#D2B48C", teal: "#008080", thistle: "#D8BFD8", tomato: "#FF6347", turquoise: "#40E0D0", violet: "#EE82EE", wheat: "#F5DEB3", white: "#FFFFFF", whitesmoke: "#F5F5F5", yellow: "#FFFF00", yellowgreen: "#9ACD32" };
            function a(e, t, r) { return e = +e, isNaN(e) ? t : e < t ? t : e > r ? r : e; }
            function l(e, t) { return null == e ? t : e; }
            function c(e, t, r) { var i = [a(e, 0, 255), a(t, 0, 255), a(r, 0, 255)]; return "#" + ("000000" + ((e = i[0]) << 16 | (t = i[1]) << 8 | (r = i[2])).toString(16)).slice(-6); }
            function u(e, t, r) { var i = void 0, o = void 0, n = void 0, s = [a(e, 0, 360) / 360, a(t, 0, 100) / 100, a(r, 0, 100) / 100]; if (e = s[0], r = s[2], 0 == (t = s[1]))
                i = o = n = r;
            else {
                var l = function (e, t, r) { return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e; }, c = r < .5 ? r * (1 + t) : r + t - r * t, u = 2 * r - c;
                i = l(u, c, e + 1 / 3), o = l(u, c, e), n = l(u, c, e - 1 / 3);
            } return [255 * i, 255 * o, 255 * n].map(Math.round); }
            function h(e, t, r) { var i = [a(e, 0, 255) / 255, a(t, 0, 255) / 255, a(r, 0, 255) / 255]; e = i[0], t = i[1], r = i[2]; var o = Math.max(e, t, r), n = Math.min(e, t, r), s = void 0, l = void 0, c = (o + n) / 2; if (o == n)
                s = l = 0;
            else {
                var u = o - n;
                switch (l = c > .5 ? u / (2 - o - n) : u / (o + n), o) {
                    case e:
                        s = (t - r) / u + (t < r ? 6 : 0);
                        break;
                    case t:
                        s = (r - e) / u + 2;
                        break;
                    case r: s = (e - t) / u + 4;
                }
                s /= 6;
            } return [360 * s, 100 * l, 100 * c].map(Math.round); }
            function p(e, t, r) { return e << 16 | t << 8 | r; }
            function d(e) { if (e) {
                var t = s[e.toString().toLowerCase()], r = /^\s*#?((([0-9A-F])([0-9A-F])([0-9A-F]))|(([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})))\s*$/i.exec(t || e) || [], o = i(r, 10), n = o[3], a = o[4], l = o[5], c = o[7], u = o[8], h = o[9];
                if (void 0 !== n)
                    return [parseInt(n + n, 16), parseInt(a + a, 16), parseInt(l + l, 16)];
                if (void 0 !== c)
                    return [parseInt(c, 16), parseInt(u, 16), parseInt(h, 16)];
            } }
            function f(e) { if (e) {
                var t = s[e.toString().toLowerCase()], r = /^\s*#?((([0-9A-F])([0-9A-F])([0-9A-F])([0-9A-F])?)|(([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})?))\s*$/i.exec(t || e) || [], o = i(r, 12), n = o[3], a = o[4], l = o[5], c = o[6], u = o[8], h = o[9], p = o[10], d = o[11];
                if (void 0 !== n)
                    return [parseInt(n + n, 16), parseInt(a + a, 16), parseInt(l + l, 16), c ? +(parseInt(c + c, 16) / 255).toFixed(2) : 1];
                if (void 0 !== u)
                    return [parseInt(u, 16), parseInt(h, 16), parseInt(p, 16), d ? +(parseInt(d, 16) / 255).toFixed(2) : 1];
            } }
            function g(e) { if (e) {
                var t = /^rgb\((\d+)[\s,](\d+)[\s,](\d+)\)/i.exec(e) || [], r = i(t, 4), o = r[0], n = r[1], s = r[2], l = r[3];
                return o ? [a(n, 0, 255), a(s, 0, 255), a(l, 0, 255)] : void 0;
            } }
            function b(e) { if (e) {
                var t = /^rgba?\((\d+)\s*[\s,]\s*(\d+)\s*[\s,]\s*(\d+)(\s*[\s,]\s*(\d*(.\d+)?))?\)/i.exec(e) || [], r = i(t, 6), o = r[0], n = r[1], s = r[2], c = r[3], u = r[5];
                return o ? [a(n, 0, 255), a(s, 0, 255), a(c, 0, 255), a(l(u, 1), 0, 1)] : void 0;
            } }
            function v(e) { if (Array.isArray(e))
                return [a(e[0], 0, 255), a(e[1], 0, 255), a(e[2], 0, 255), a(l(e[3], 1), 0, 1)]; var t = f(e) || b(e); return t && 3 === t.length && t.push(1), t; }
            function m(e) { if (e) {
                var t = /^hsl\((\d+)[\s,](\d+)[\s,](\d+)\)/i.exec(e) || [], r = i(t, 4), o = r[0], n = r[1], s = r[2], l = r[3];
                return o ? [a(n, 0, 360), a(s, 0, 100), a(l, 0, 100)] : void 0;
            } }
            function A(e) { if (e) {
                var t = /^hsla?\((\d+)\s*[\s,]\s*(\d+)\s*[\s,]\s*(\d+)(\s*[\s,]\s*(\d*(.\d+)?))?\)/i.exec(e) || [], r = i(t, 6), o = r[0], n = r[1], s = r[2], c = r[3], u = r[5];
                return o ? [a(n, 0, 255), a(s, 0, 255), a(c, 0, 255), a(l(u, 1), 0, 1)] : void 0;
            } }
            function y(e) { if (Array.isArray(e))
                return [a(e[0], 0, 360), a(e[1], 0, 100), a(e[2], 0, 100), a(l(e[3], 1), 0, 1)]; var t = A(e); return t && 3 === t.length && t.push(1), t; }
            function k(e, t) { switch (t) {
                case "rgb":
                default: return e.slice(0, 3);
                case "rgbcss": return "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")";
                case "rgbcss4": return "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")";
                case "rgba": return e;
                case "rgbacss": return "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")";
                case "hsl": return h.apply(void 0, n(e));
                case "hslcss": return "hsl(" + (e = h.apply(void 0, n(e)))[0] + ", " + e[1] + ", " + e[2] + ")";
                case "hslcss4":
                    var r = h.apply(void 0, n(e));
                    return "hsl(" + r[0] + ", " + r[1] + ", " + r[2] + ", " + e[3] + ")";
                case "hsla": return [].concat(n(h.apply(void 0, n(e))), [e[3]]);
                case "hslacss":
                    var i = h.apply(void 0, n(e));
                    return "hsla(" + i[0] + ", " + i[1] + ", " + i[2] + ", " + e[3] + ")";
                case "hex": return c.apply(void 0, n(e));
                case "hexcss4": return c.apply(void 0, n(e)) + ("00" + parseInt(255 * e[3]).toString(16)).slice(-2);
                case "int": return p.apply(void 0, n(e));
            } }
            t.COLOR_NAMES = s, t.PALETTE_MATERIAL_500 = ["#F44336", "#E91E63", "#E91E63", "#9C27B0", "#9C27B0", "#673AB7", "#673AB7", "#3F51B5", "#3F51B5", "#2196F3", "#2196F3", "#03A9F4", "#03A9F4", "#00BCD4", "#00BCD4", "#009688", "#009688", "#4CAF50", "#4CAF50", "#8BC34A", "#8BC34A", "#CDDC39", "#CDDC39", "#FFEB3B", "#FFEB3B", "#FFC107", "#FFC107", "#FF9800", "#FF9800", "#FF5722", "#FF5722", "#795548", "#795548", "#9E9E9E", "#9E9E9E", "#607D8B", "#607D8B"], t.PALETTE_MATERIAL_CHROME = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#9e9e9e", "#607d8b"], t.rgbToHex = c, t.hslToRgb = u, t.rgbToHsl = h, t.rgbToHsv = function (e, t, r) { var i = [a(e, 0, 255) / 255, a(t, 0, 255) / 255, a(r, 0, 255) / 255]; e = i[0], t = i[1], r = i[2]; var o, n = Math.max(e, t, r), s = Math.min(e, t, r), l = void 0, c = n, u = n - s; if (o = 0 === n ? 0 : u / n, n == s)
                l = 0;
            else {
                switch (n) {
                    case e:
                        l = (t - r) / u + (t < r ? 6 : 0);
                        break;
                    case t:
                        l = (r - e) / u + 2;
                        break;
                    case r: l = (e - t) / u + 4;
                }
                l /= 6;
            } return [l, o, c]; }, t.rgbToInt = p, t.intToRgb = function (e) { return [e >> 16 & 255, e >> 8 & 255, 255 & e]; }, t.cssColorToRgb = d, t.cssColorToRgba = f, t.cssRgbToRgb = g, t.cssRgbaToRgba = b, t.parseColorToRgb = function (e) { return Array.isArray(e) ? e = [a(e[0], 0, 255), a(e[1], 0, 255), a(e[2], 0, 255)] : d(e) || g(e); }, t.parseColorToRgba = v, t.cssHslToHsl = m, t.cssHslaToHsla = A, t.parseColorToHsl = function (e) { return Array.isArray(e) ? e = [a(e[0], 0, 360), a(e[1], 0, 100), a(e[2], 0, 100)] : m(e); }, t.parseColorToHsla = y, t.parseColor = function (e, t) { if (t = t || "rgb", null != e) {
                var r = void 0;
                if ((r = v(e)) || (r = y(e)) && (r = [].concat(n(u.apply(void 0, n(r))), [r[3]])))
                    return (0, o.default)(t) ? ["rgb", "rgbcss", "rgbcss4", "rgba", "rgbacss", "hsl", "hslcss", "hslcss4", "hsla", "hslacss", "hex", "hexcss4", "int"].reduce(function (e, t) { return e[t] = k(r, t), e; }, t || {}) : k(r, t.toString().toLowerCase());
            } }, t.getLuminance = function (e, t, r) { return .2126 * (e = (e /= 255) < .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)) + .7152 * (t = (t /= 255) < .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)) + .0722 * ((r /= 255) < .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4)); }, t.limit = a, t.ensureArray = function (e) { return e ? Array.from(e) : []; }, t.nvl = l;
        }, function (e, t, r) {
            "use strict";
            e.exports = function (e) { return null != e && "object" == typeof e && !1 === Array.isArray(e); };
        }, function (e, t) { e.exports = '<div class="a-color-picker-row a-color-picker-stack a-color-picker-row-top"> <canvas class="a-color-picker-sl a-color-picker-transparent"></canvas> <div class=a-color-picker-dot></div> </div> <div class=a-color-picker-row> <div class="a-color-picker-stack a-color-picker-transparent a-color-picker-circle"> <div class=a-color-picker-preview> <input class=a-color-picker-clipbaord type=text> </div> </div> <div class=a-color-picker-column> <div class="a-color-picker-cell a-color-picker-stack"> <canvas class=a-color-picker-h></canvas> <div class=a-color-picker-dot></div> </div> <div class="a-color-picker-cell a-color-picker-alpha a-color-picker-stack" show-on-alpha> <canvas class="a-color-picker-a a-color-picker-transparent"></canvas> <div class=a-color-picker-dot></div> </div> </div> </div> <div class="a-color-picker-row a-color-picker-hsl" show-on-hsl> <label>H</label> <input nameref=H type=number maxlength=3 min=0 max=360 value=0> <label>S</label> <input nameref=S type=number maxlength=3 min=0 max=100 value=0> <label>L</label> <input nameref=L type=number maxlength=3 min=0 max=100 value=0> </div> <div class="a-color-picker-row a-color-picker-rgb" show-on-rgb> <label>R</label> <input nameref=R type=number maxlength=3 min=0 max=255 value=0> <label>G</label> <input nameref=G type=number maxlength=3 min=0 max=255 value=0> <label>B</label> <input nameref=B type=number maxlength=3 min=0 max=255 value=0> </div> <div class="a-color-picker-row a-color-picker-rgbhex a-color-picker-single-input" show-on-single-input> <label>HEX</label> <input nameref=RGBHEX type=text select-on-focus> </div> <div class="a-color-picker-row a-color-picker-palette"></div>'; }, function (e, t, r) { var i = r(6); e.exports = "string" == typeof i ? i : i.toString(); }, function (e, t, r) { (e.exports = r(7)(!1)).push([e.i, "/*!\n * a-color-picker\n * https://github.com/narsenico/a-color-picker\n *\n * Copyright (c) 2017-2018, Gianfranco Caldi.\n * Released under the MIT License.\n */.a-color-picker{background-color:#fff;padding:0;display:inline-flex;flex-direction:column;user-select:none;width:232px;font:400 10px Helvetica,Arial,sans-serif;border-radius:3px;box-shadow:0 0 0 1px rgba(0,0,0,.05),0 2px 4px rgba(0,0,0,.25)}.a-color-picker,.a-color-picker-row,.a-color-picker input{box-sizing:border-box}.a-color-picker-row{padding:15px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;user-select:none}.a-color-picker-row-top{padding:0}.a-color-picker-row:not(:first-child){border-top:1px solid #f5f5f5}.a-color-picker-column{display:flex;flex-direction:column}.a-color-picker-cell{flex:1 1 auto;margin-bottom:4px}.a-color-picker-cell:last-child{margin-bottom:0}.a-color-picker-stack{position:relative}.a-color-picker-dot{position:absolute;width:14px;height:14px;top:0;left:0;background:#fff;pointer-events:none;border-radius:50px;z-index:1000;box-shadow:0 1px 2px rgba(0,0,0,.75)}.a-color-picker-a,.a-color-picker-h,.a-color-picker-sl{cursor:cell}.a-color-picker-a+.a-color-picker-dot,.a-color-picker-h+.a-color-picker-dot{top:-2px}.a-color-picker-a,.a-color-picker-h{border-radius:2px}.a-color-picker-preview{box-sizing:border-box;width:30px;height:30px;user-select:none;border-radius:15px}.a-color-picker-circle{border-radius:50px;border:1px solid #eee}.a-color-picker-hsl,.a-color-picker-rgb,.a-color-picker-single-input{justify-content:space-evenly}.a-color-picker-hsl>label,.a-color-picker-rgb>label,.a-color-picker-single-input>label{padding:0 8px;flex:0 0 auto;color:#969696}.a-color-picker-hsl>input,.a-color-picker-rgb>input,.a-color-picker-single-input>input{text-align:center;padding:2px 0;width:0;flex:1 1 auto;border:1px solid #e0e0e0;line-height:20px}.a-color-picker-hsl>input::-webkit-inner-spin-button,.a-color-picker-rgb>input::-webkit-inner-spin-button,.a-color-picker-single-input>input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.a-color-picker-hsl>input:focus,.a-color-picker-rgb>input:focus,.a-color-picker-single-input>input:focus{border-color:#04a9f4;outline:none}.a-color-picker-transparent{background-image:linear-gradient(-45deg,#cdcdcd 25%,transparent 0),linear-gradient(45deg,#cdcdcd 25%,transparent 0),linear-gradient(-45deg,transparent 75%,#cdcdcd 0),linear-gradient(45deg,transparent 75%,#cdcdcd 0);background-size:11px 11px;background-position:0 0,0 -5.5px,-5.5px 5.5px,5.5px 0}.a-color-picker-sl{border-radius:3px 3px 0 0}.a-color-picker.hide-alpha [show-on-alpha],.a-color-picker.hide-hsl [show-on-hsl],.a-color-picker.hide-rgb [show-on-rgb],.a-color-picker.hide-single-input [show-on-single-input]{display:none}.a-color-picker-clipbaord{width:100%;height:100%;opacity:0;cursor:pointer}.a-color-picker-palette{flex-flow:wrap;flex-direction:row;justify-content:flex-start;padding:10px}.a-color-picker-palette-color{width:15px;height:15px;flex:0 1 15px;margin:3px;box-sizing:border-box;cursor:pointer;border-radius:3px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.1)}.a-color-picker-palette-add{text-align:center;line-height:13px;color:#607d8b}.a-color-picker.hidden{display:none}", ""]); }, function (e, t) { e.exports = function (e) { var t = []; return t.toString = function () { return this.map(function (t) { var r = function (e, t) { var r = e[1] || "", i = e[3]; if (!i)
            return r; if (t && "function" == typeof btoa) {
            var o = function (e) { return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"; }(i), n = i.sources.map(function (e) { return "/*# sourceURL=" + i.sourceRoot + e + " */"; });
            return [r].concat(n).concat([o]).join("\n");
        } return [r].join("\n"); }(t, e); return t[2] ? "@media " + t[2] + "{" + r + "}" : r; }).join(""); }, t.i = function (e, r) { "string" == typeof e && (e = [[null, e, ""]]); for (var i = {}, o = 0; o < this.length; o++) {
            var n = this[o][0];
            "number" == typeof n && (i[n] = !0);
        } for (o = 0; o < e.length; o++) {
            var s = e[o];
            "number" == typeof s[0] && i[s[0]] || (r && !s[2] ? s[2] = r : r && (s[2] = "(" + s[2] + ") and (" + r + ")"), t.push(s));
        } }, t; }; }]);
});


/***/ }),

/***/ 81329:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UIRange = void 0;
var tslib_1 = __webpack_require__(20255);
__webpack_require__(55138);
var ui_1 = __webpack_require__(14153);
var decorators_1 = __webpack_require__(9901);
var helpers_1 = __webpack_require__(92654);
var autobind_decorator_1 = __webpack_require__(70631);
var UIRange = (function (_super) {
    tslib_1.__extends(UIRange, _super);
    function UIRange(jodit, options) {
        var _this = _super.call(this, jodit, tslib_1.__assign(tslib_1.__assign({}, options), { type: 'hidden' })) || this;
        _this.state = tslib_1.__assign(tslib_1.__assign({}, ui_1.UIInput.defaultState), { min: 0, max: 100 });
        _this.startValue = 0;
        _this.startX = 0;
        _this.width = 100;
        Object.assign(_this.state, options);
        _this.appendUIRange();
        _this.onChangeSelfValue();
        return _this;
    }
    UIRange.prototype.className = function () {
        return 'UIRange';
    };
    UIRange.prototype.appendUIRange = function () {
        var slider = this.j.create.div(this.getFullElName('slider'));
        this.container.appendChild(slider);
        var handle = this.j.create.div(this.getFullElName('handle'));
        slider.appendChild(handle);
        var log = this.j.create.div(this.getFullElName('log'));
        var label = this.getElm('label');
        (0, helpers_1.assert)(label != null, 'label element does not exists');
        label.appendChild(log);
    };
    UIRange.prototype.onDragStart = function (e) {
        this.startValue = parseFloat(this.value) || 0;
        this.startX = e.clientX;
        var slider = this.getElm('slider');
        (0, helpers_1.assert)(slider != null, 'slider element does not exists');
        this.width = slider.offsetWidth;
        this.j.e.on(this.j.ow, 'mousemove', this.onDrag);
    };
    UIRange.prototype.onDrag = function (e) {
        var _a = this.state, min = _a.min, max = _a.max;
        var diff = ((e.clientX - this.startX) / this.width) *
            (this.state.max - this.state.min);
        var value = this.startValue + diff;
        if (value < min) {
            value = min;
        }
        if (value > max) {
            value = max;
        }
        this.value = value.toString();
    };
    UIRange.prototype.onDragEnd = function () {
        this.j.e.off(this.j.ow, 'mousemove', this.onDrag);
    };
    UIRange.prototype.onChangeSelfValue = function () {
        var handle = this.getElm('handle'), value = parseFloat(this.value) || 0;
        (0, helpers_1.assert)(handle != null, 'Handle element does not exist');
        (0, helpers_1.css)(handle, {
            left: ((value - this.state.min) / (this.state.max - this.state.min)) *
                100 +
                '%'
        });
        var log = this.getElm('log');
        (0, helpers_1.assert)(log != null, 'log element does not exist');
        log.innerText = value.toString();
    };
    UIRange.prototype.destruct = function () {
        this.onDragEnd();
        return _super.prototype.destruct.call(this);
    };
    tslib_1.__decorate([
        (0, decorators_1.watch)(['handle:mousedown', 'handle:touchstart'])
    ], UIRange.prototype, "onDragStart", null);
    tslib_1.__decorate([
        autobind_decorator_1.default
    ], UIRange.prototype, "onDrag", null);
    tslib_1.__decorate([
        (0, decorators_1.watch)(['j.ow:mouseup', 'j.ow:touchend'])
    ], UIRange.prototype, "onDragEnd", null);
    tslib_1.__decorate([
        (0, decorators_1.watch)(':change')
    ], UIRange.prototype, "onChangeSelfValue", null);
    UIRange = tslib_1.__decorate([
        decorators_1.component
    ], UIRange);
    return UIRange;
}(ui_1.UIInput));
exports.UIRange = UIRange;


/***/ }),

/***/ 44579:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buttonGenerator = void 0;
var tslib_1 = __webpack_require__(20255);
var plugin_1 = __webpack_require__(35570);
var index_1 = __webpack_require__(78460);
var decorators_1 = __webpack_require__(9901);
var modules_1 = __webpack_require__(46701);
var button_generator_1 = __webpack_require__(93834);
__webpack_require__(6413);
var button_1 = __webpack_require__(44632);
var button_2 = __webpack_require__(11539);
var dom_1 = __webpack_require__(94522);
var buttonGenerator = (function (_super) {
    tslib_1.__extends(buttonGenerator, _super);
    function buttonGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasStyle = !index_1.Jodit.fatMode;
        _this.requires = ['license', 'color-picker'];
        _this.buttons = [
            {
                group: 'form',
                name: 'buttonGenerator'
            }
        ];
        return _this;
    }
    buttonGenerator.prototype.afterInit = function (jodit) {
        var _this = this;
        jodit.e
            .on('toggleButtonGenerator', this.toggleButtonGenerator)
            .on('isButtonGeneratorOpened', function () { var _a; return (_a = _this.__dialog) === null || _a === void 0 ? void 0 : _a.isOpened; });
    };
    buttonGenerator.prototype.toggleButtonGenerator = function (target) {
        var _this = this;
        if (!this.__dialog) {
            this.__dialog = new modules_1.Dialog({
                language: this.j.o.language,
                theme: this.j.o.theme
            });
            this.__ui = new button_generator_1.UIButtonGenerator(this.__dialog);
            this.__dialog
                .setHeader('Button Generator')
                .setContent(this.__ui)
                .setSize(730, 700);
        }
        if (target && !dom_1.Dom.isTag(target, ['button', 'a'])) {
            target = undefined;
        }
        var ui = this.__ui;
        var dlg = this.__dialog;
        if (dlg.isOpened) {
            dlg.close();
        }
        else {
            target && button_2.UIGButton.extractStyle(ui.state, target);
            ui.target = target;
            ui.update();
            dlg.setFooter([
                (0, button_1.Button)(dlg, 'cancel', 'Cancel', 'default').onAction(function () {
                    return dlg.close();
                }),
                (0, button_1.Button)(dlg, 'ok', target ? 'Update' : 'Insert', 'primary').onAction(function () {
                    if (!target) {
                        target = _this.j.createInside.element(ui.state.href ? 'a' : 'button');
                        _this.j.s.insertNode(target, true, false);
                    }
                    button_2.UIGButton.applyStyle(ui.state, target);
                    target.className = ui.state.className || '';
                    _this.jodit.e.fire('synchro');
                    dlg.close();
                })
            ]).open();
        }
    };
    buttonGenerator.prototype.onDblClick = function (e) {
        if (dom_1.Dom.isTag(e.target, 'button')) {
            this.toggleButtonGenerator(e.target);
        }
    };
    buttonGenerator.prototype.beforeDestruct = function (jodit) {
        var _a;
        (_a = this.__dialog) === null || _a === void 0 ? void 0 : _a.destruct();
    };
    tslib_1.__decorate([
        decorators_1.autobind
    ], buttonGenerator.prototype, "toggleButtonGenerator", null);
    tslib_1.__decorate([
        (0, decorators_1.watch)(':dblclick')
    ], buttonGenerator.prototype, "onDblClick", null);
    return buttonGenerator;
}(plugin_1.Plugin));
exports.buttonGenerator = buttonGenerator;
index_1.Jodit.plugins.add('button-generator', buttonGenerator);


/***/ }),

/***/ 6413:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var config_1 = __webpack_require__(27537);
var checker_1 = __webpack_require__(37379);
config_1.Config.prototype.controls.buttonGenerator = {
    tooltip: 'Button generator',
    icon: __webpack_require__(84553),
    isActive: function (editor) {
        return Boolean(editor.e.fire('isButtonGeneratorOpened'));
    },
    exec: function (editor, btn) {
        editor.e.fire('toggleButtonGenerator', btn);
    }
};
config_1.Config.prototype.popup.button = ['buttonGenerator'];
if ((0, checker_1.isArray)(config_1.Config.prototype.popup.a)) {
    config_1.Config.prototype.popup.a.push('buttonGenerator');
}


/***/ }),

/***/ 11539:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UIGButton = void 0;
var tslib_1 = __webpack_require__(20255);
__webpack_require__(39130);
var ui_1 = __webpack_require__(14153);
var helpers_1 = __webpack_require__(92654);
var decorators_1 = __webpack_require__(9901);
var checker_1 = __webpack_require__(37379);
var helpers_2 = __webpack_require__(92654);
var UIGButton = (function (_super) {
    tslib_1.__extends(UIGButton, _super);
    function UIGButton(jodit, style) {
        var _this = _super.call(this, jodit) || this;
        _this.style = style;
        return _this;
    }
    UIGButton_1 = UIGButton;
    UIGButton.prototype.className = function () {
        return 'UIGButton';
    };
    UIGButton.prototype.updateStyles = function () {
        var style = this.style;
        var btn = this.getElm('button');
        (0, helpers_2.assert)(btn != null, 'button element does not exist');
        var wrapper = this.getElm('wrapper');
        (0, helpers_2.assert)(wrapper != null, 'wrapper element does not exist');
        wrapper.style.backgroundColor = style.previewBgColor;
        UIGButton_1.applyStyle(style, btn);
    };
    UIGButton.applyStyle = function (style, btn) {
        var _ = function (v) { return ((0, checker_1.isString)(v) ? v : v + 'px'); };
        btn.innerText = style.text || 'css';
        btn.setAttribute('href', style.href);
        (0, helpers_1.css)(btn, {
            background: !style.solid
                ? "linear-gradient(to bottom, ".concat(style.bgStart, " 5%, ").concat(style.bgEnd, " 100%)")
                : null,
            backgroundColor: style.bgStart,
            borderRadius: _(style.borderRadius),
            border: "".concat(_(style.borderSize), " solid ").concat(style.borderColor),
            display: 'inline-block',
            cursor: 'pointer',
            color: style.fontColor,
            fontFamily: style.fontFamily,
            fontSize: _(style.fontSize),
            fontWeight: style.fontWeight ? 'bold' : null,
            fontStyle: style.fontItalic ? 'italic' : null,
            padding: "".concat(_(style.paddingY), " ").concat(_(style.paddingX)),
            textDecoration: 'none'
        });
        (0, helpers_1.css)(btn, {
            textShadow: style.textShadow
                ? [
                    style.textShadowOffsetX,
                    style.textShadowOffsetY,
                    style.textShadowBlurRadius,
                    style.textShadowColor
                ]
                    .map(_)
                    .join(' ')
                : null
        });
        (0, helpers_1.css)(btn, {
            boxShadow: style.boxShadow
                ? [
                    style.boxShadowInset ? 'inset' : '',
                    style.boxShadowOffsetX,
                    style.boxShadowOffsetY,
                    style.boxShadowBlurRadius,
                    style.boxShadowSpreadRadius,
                    style.boxShadowColor
                ]
                    .map(_)
                    .join(' ')
                : null
        });
    };
    UIGButton.prototype.update = function () {
        this.updateStyles();
    };
    UIGButton.prototype.render = function () {
        return "<div>\n\t\t\t<div class='&__wrapper'>\n\t\t\t\t<button class='&__button'>css</button>\n\t\t\t</div>\n\t\t</div>";
    };
    UIGButton.extractStyle = function (state, target) {
        var _a, _b, _c, _d;
        var style = ((_a = target.ownerDocument.defaultView) === null || _a === void 0 ? void 0 : _a.getComputedStyle(target)) ||
            {};
        var extractColors = function () {
            var _a, _b;
            var result = {
                solid: true,
                bgStart: (_a = style.backgroundColor) !== null && _a !== void 0 ? _a : '#44c767',
                bgEnd: (_b = style.backgroundColor) !== null && _b !== void 0 ? _b : '#44c767'
            };
            var img = style.backgroundImage;
            if (img && /linear-gradient/.test(img)) {
                var colors = /linear-gradient\((.+)\s+[0-9]+%,\s+(.+)\s+[0-9]+%\)/.exec(img);
                if (colors) {
                    result.solid = false;
                    result.bgStart = colors[1] || result.bgStart;
                    result.bgEnd = colors[2] || '#5cbf2a';
                }
            }
            return result;
        };
        var extractShadow = function (order, result, keyEnable, keyColor) {
            var _a;
            var boxShadow = style[keyEnable];
            if (!boxShadow ||
                ['none', 'inherit', 'initial', 'unset'].includes(boxShadow)) {
                return _a = {},
                    _a[keyEnable] = false,
                    _a;
            }
            var components = boxShadow.replace(/,\s/g, ',').split(/\s+/);
            components.forEach(function (part) {
                if (/[0-9.]+(px|pt|em|%)/.test(part)) {
                    var key = order.shift();
                    if (key) {
                        result[key] = part;
                    }
                }
                else if (part === 'inset') {
                    result.boxShadowInset = true;
                }
                else {
                    result[keyColor] = part;
                }
            });
            result[keyEnable] = true;
            return result;
        };
        Object.assign(state, tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ text: target.innerText, className: target.className, href: target.getAttribute('href') || '' }, extractColors()), { borderColor: (_b = style === null || style === void 0 ? void 0 : style.borderColor) !== null && _b !== void 0 ? _b : '#18ab29', borderRadius: (_c = style === null || style === void 0 ? void 0 : style.borderRadius) !== null && _c !== void 0 ? _c : 0, borderSize: (_d = style === null || style === void 0 ? void 0 : style.borderWidth) !== null && _d !== void 0 ? _d : 1 }), extractShadow([
            'boxShadowOffsetX',
            'boxShadowOffsetY',
            'boxShadowBlurRadius',
            'boxShadowSpreadRadius'
        ], {
            boxShadowBlurRadius: 0,
            boxShadowColor: '#3dc21b',
            boxShadowInset: false,
            boxShadowOffsetX: 0,
            boxShadowOffsetY: 0,
            boxShadowSpreadRadius: 0
        }, 'boxShadow', 'boxShadowColor')), { fontColor: style.color, fontFamily: style.fontFamily, fontSize: style.fontSize, fontWeight: style.fontWeight === 'bold', fontItalic: style.fontStyle === 'italic', paddingX: style.paddingLeft, paddingY: style.paddingTop }), extractShadow([
            'textShadowOffsetX',
            'textShadowOffsetY',
            'textShadowBlurRadius'
        ], {
            textShadowBlurRadius: 0,
            textShadowColor: '#2f6627',
            textShadowOffsetX: 0,
            textShadowOffsetY: 1
        }, 'textShadow', 'textShadowColor')));
    };
    var UIGButton_1;
    tslib_1.__decorate([
        (0, decorators_1.watch)('style')
    ], UIGButton.prototype, "updateStyles", null);
    UIGButton = UIGButton_1 = tslib_1.__decorate([
        decorators_1.component
    ], UIGButton);
    return UIGButton;
}(ui_1.UIElement));
exports.UIGButton = UIGButton;


/***/ }),

/***/ 35482:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UIFormButtonGenerator = void 0;
var tslib_1 = __webpack_require__(20255);
__webpack_require__(47201);
var ui_1 = __webpack_require__(14153);
var to_array_1 = __webpack_require__(42464);
var dom_1 = __webpack_require__(94522);
var range_1 = __webpack_require__(81329);
var helpers_1 = __webpack_require__(92654);
var UIFormButtonGenerator = (function (_super) {
    tslib_1.__extends(UIFormButtonGenerator, _super);
    function UIFormButtonGenerator(jodit, state, updateState) {
        var _this = _super.call(this, jodit) || this;
        _this.state = state;
        _this.updateState = updateState;
        _this.onUpdates = [];
        var getOnUpdate = function (uiInput, input) {
            return function () {
                var newValue = _this.state[input.name];
                if (/px/.test(newValue.toString())) {
                    newValue = newValue.toString().replace(/px/, '');
                }
                if (newValue.toString() !== uiInput.value) {
                    uiInput.value = newValue;
                }
            };
        };
        (0, to_array_1.toArray)(_this.container.querySelectorAll('input,select')).forEach(function (input) {
            if (dom_1.Dom.isTag(input, 'select')) {
                var uiInput = new ui_1.UISelect(_this.j, {
                    options: (0, to_array_1.toArray)(input.options).map(function (opt) { return ({
                        text: opt.innerText,
                        value: opt.value
                    }); }),
                    onChange: function (value) {
                        _this.updateState(input.name, value);
                    }
                });
                dom_1.Dom.replace(input, uiInput.container, _this.j.create, false, true);
                _this.onUpdates.push(getOnUpdate(uiInput, input));
                return;
            }
            if (dom_1.Dom.isTag(input, 'input')) {
                switch (input.type) {
                    case 'range': {
                        var uiInput = new range_1.UIRange(_this.j, {
                            label: input.placeholder,
                            name: input.name,
                            min: parseInt(input.min, 0) || 0,
                            max: parseInt(input.max, 0) || 100,
                            onChange: function (value) {
                                _this.updateState(input.name, parseInt(value, 10));
                            }
                        });
                        dom_1.Dom.replace(input, uiInput.container, _this.j.create);
                        _this.onUpdates.push(getOnUpdate(uiInput, input));
                        return;
                    }
                    case 'text': {
                        var uiInput = new ui_1.UIInput(_this.j, {
                            placeholder: input.placeholder,
                            name: input.name,
                            onChange: function (value) {
                                _this.updateState(input.name, value);
                            }
                        });
                        dom_1.Dom.replace(input, uiInput.container, _this.j.create);
                        _this.onUpdates.push(getOnUpdate(uiInput, input));
                        return;
                    }
                    case 'checkbox':
                        input.onchange = function () {
                            return _this.updateState(input.name, input.checked);
                        };
                        _this.onUpdates.push(function () {
                            input.checked = _this.state[input.name];
                        });
                        return;
                }
            }
        });
        _this.update();
        return _this;
    }
    UIFormButtonGenerator.prototype.className = function () {
        return 'UIFormButtonGenerator';
    };
    UIFormButtonGenerator.prototype.update = function () {
        this.onUpdates.forEach(function (cb) { return cb(); });
        var boxShadow = this.getElm('box-shadow');
        (0, helpers_1.assert)(boxShadow != null, 'box-shadow does not exists');
        var textShadow = this.getElm('text-shadow');
        (0, helpers_1.assert)(textShadow != null, 'text-shadow does not exists');
        boxShadow.style.display = this.state.boxShadow ? '' : 'none';
        textShadow.style.display = this.state.textShadow ? '' : 'none';
    };
    UIFormButtonGenerator.prototype.render = function () {
        return "<div>\n\t\t\t<div class='&__group &__text'>\n\t\t\t\t<div class='&__title'>Text</div>\n\t\t\t\t<div class='&__row'>\n\t\t\t\t\t<div class='&__col'>\n\t\t\t\t\t\t<input type='text' name='text'/>\n\t\t\t\t\t\t<input type='text' name='className' placeholder='~Class name~'/>\n\t\t\t\t\t\t<input type='text' name='href' placeholder='~URL~'/>\n\t\t\t\t\t\t<select name='fontFamily'>\n \t\t\t\t\t\t\t<option value='Arial'>Arial</option>\n \t\t\t\t\t\t\t<option value='Courier New'>Courier New</option>\n \t\t\t\t\t\t\t<option value='Georgia'>Georgia</option>\n \t\t\t\t\t\t\t<option value='Impact'>Impact</option>\n \t\t\t\t\t\t\t<option value='Times New Roman'>Times New Roman</option>\n \t\t\t\t\t\t\t<option value='Trebuchet MS'>Trebuchet MS</option>\n \t\t\t\t\t\t\t<option value='Verdana'>Verdana</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='&__col'>\n\t\t\t\t\t\t<input type='range' min='8' max='28' name='fontSize' placeholder='~Font Size~'/>\n\t\t\t\t\t\t<div class='&__checkboxes'>\n\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t<input type='checkbox' name='fontWeight'/> bold\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t<input type='checkbox' name='fontItalic'/> italic\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class='&__group &__sizes'>\n\t\t\t\t<div class='&__title'>~Size~</div>\n\t\t\t\t<div class='&__row'>\n\t\t\t\t\t<div class='&__col'>\n\t\t\t\t\t\t<input type='range' name='paddingX' min='0' max='32' placeholder='~Vertical size~'/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='&__col'>\n\t\t\t\t\t\t<input type='range' name='paddingY' min='0' max='76' placeholder='~Horizontal size~'/>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class='&__group &__borders'>\n\t\t\t\t<div class='&__title'>~Border~</div>\n\t\t\t\t<div class='&__row'>\n\t\t\t\t\t<div class='&__col'>\n\t\t\t\t\t\t<input type='range' name='borderRadius' min='0' max='42' placeholder='~Border Radius~'/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='&__col'>\n\t\t\t\t\t\t<input type='range' name='borderSize' min='0' max='12' placeholder='~Border Size~'/>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class='&__group'>\n\t\t\t\t<div class='&__title'>~Box Shadow~ <input type='checkbox' name='boxShadow'/></div>\n\t\t\t\t<div class='&__row &__box-shadow'>\n\t\t\t\t\t<div class='&__col'>\n\t\t\t\t\t\t<input type='range' name='boxShadowOffsetX' min='-50' max='50' placeholder='~Vertical Position~'/>\n\t\t\t\t\t\t<input type='range' name='boxShadowBlurRadius' min='0' max='50' placeholder='~Blur Radius~'/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='&__col'>\n\t\t\t\t\t\t<input type='range' name='boxShadowOffsetY' min='-50' max='50' placeholder='~Horizontal Position~'/>\n\t\t\t\t\t\t<input type='range' name='boxShadowSpreadRadius' min='-50' max='50' placeholder='~Spread Radius~'/>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class='&__group'>\n\t\t\t\t<div class='&__title'>~Text Shadow~ <input type='checkbox' name='textShadow'/></div>\n\t\t\t\t<div class='&__row &__text-shadow'>\n\t\t\t\t\t<div class='&__col'>\n\t\t\t\t\t\t<input type='range' name='textShadowOffsetX' min='-50' max='50' placeholder='~Vertical Position~'/>\n\t\t\t\t\t\t<input type='range' name='textShadowBlurRadius' min='0' max='50' placeholder='~Blur Radius~'/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='&__col'>\n\t\t\t\t\t\t<input type='range' name='textShadowOffsetY' min='-50' max='50' placeholder='~Horizontal Position~'/>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>";
    };
    return UIFormButtonGenerator;
}(ui_1.UIElement));
exports.UIFormButtonGenerator = UIFormButtonGenerator;


/***/ }),

/***/ 93834:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UIButtonGenerator = void 0;
var tslib_1 = __webpack_require__(20255);
__webpack_require__(37667);
var ui_1 = __webpack_require__(14153);
var decorators_1 = __webpack_require__(9901);
var preview_1 = __webpack_require__(6179);
var button_1 = __webpack_require__(11539);
var form_1 = __webpack_require__(35482);
var helpers_1 = __webpack_require__(92654);
var styles = __webpack_require__(93050);
var UIButtonGenerator = (function (_super) {
    tslib_1.__extends(UIButtonGenerator, _super);
    function UIButtonGenerator(jodit) {
        var _this = _super.call(this, jodit) || this;
        _this.state = {
            text: '',
            className: '',
            href: '',
            bgEnd: '#5cbf2a',
            bgStart: '#44c767',
            borderColor: '#18ab29',
            borderRadius: 28,
            borderSize: 1,
            boxShadow: false,
            boxShadowBlurRadius: 0,
            boxShadowColor: '#3dc21b',
            boxShadowInset: false,
            boxShadowOffsetX: 0,
            boxShadowOffsetY: 0,
            boxShadowSpreadRadius: 0,
            fontColor: '#fff',
            fontFamily: 'Arial',
            fontSize: 17,
            fontStyle: false,
            fontWeight: false,
            fontItalic: false,
            paddingX: 31,
            paddingY: 16,
            previewBgColor: '#f5f5f5',
            solid: true,
            textShadow: true,
            textShadowBlurRadius: 0,
            textShadowColor: '#2f6627',
            textShadowOffsetX: 0,
            textShadowOffsetY: 1
        };
        _this.preview = new preview_1.UIPreviewButtonGenerator(_this.j, _this.state, _this.updateState);
        _this.form = new form_1.UIFormButtonGenerator(_this.j, _this.state, _this.updateState);
        _this.generateLibrary();
        var preview = _this.getElm('preview');
        (0, helpers_1.assert)(preview != null, 'preview element does not exists');
        preview.appendChild(_this.preview.container);
        var form = _this.getElm('form');
        (0, helpers_1.assert)(form != null, 'form element does not exists');
        form.appendChild(_this.form.container);
        return _this;
    }
    UIButtonGenerator_1 = UIButtonGenerator;
    UIButtonGenerator.prototype.className = function () {
        return 'UIButtonGenerator';
    };
    UIButtonGenerator.prototype.render = function () {
        return "<div>\n\t\t\t<div class='&__generator'>\n\t\t\t\t<div class='&__preview'></div>\n\t\t\t\t<div class='&__form'></div>\n\t\t\t</div>\n\t\t\t<div class='&__library'></div>\n\t\t</div>";
    };
    UIButtonGenerator.prototype.generateLibrary = function () {
        var _this = this;
        var group = new ui_1.UIGroup(this.j);
        styles.map(UIButtonGenerator_1.mapKey).forEach(function (style) {
            var button = new button_1.UIGButton(_this.j, style);
            button.setMod('mode', 'library');
            group.append(button);
            _this.j.e.on(button.container, 'click', function () {
                var text = _this.state.text;
                Object.assign(_this.state, style);
                Object.assign(_this.state, {
                    className: '',
                    text: text
                });
                _this.update();
            });
        });
        var library = this.getElm('library');
        (0, helpers_1.assert)(library != null, 'library element does not exists');
        library.appendChild(group.container);
    };
    UIButtonGenerator.mapKey = function (o) {
        return {
            bgEnd: o.be,
            bgStart: o.bs,
            borderColor: o.bc,
            borderRadius: o.br,
            borderSize: o.bse,
            boxShadow: o.bsh,
            boxShadowBlurRadius: o.bsbr,
            boxShadowColor: o.bsc,
            boxShadowInset: o.bsi,
            boxShadowOffsetX: o.bsox,
            boxShadowOffsetY: o.bsoy,
            boxShadowSpreadRadius: o.bssr,
            fontColor: o.fc,
            fontFamily: o.ff,
            fontSize: o.fs,
            fontStyle: o.fse,
            fontWeight: o.fw,
            paddingX: o.px,
            paddingY: o.py,
            previewBgColor: o.pbc,
            solid: o.s,
            text: o.t,
            textShadow: o.ts,
            textShadowBlurRadius: o.tsbr,
            textShadowColor: o.tsc,
            textShadowOffsetX: o.tsox,
            textShadowOffsetY: o.tsoy
        };
    };
    UIButtonGenerator.prototype.updateState = function (name, value) {
        this.state[name] = value;
        this.update();
    };
    UIButtonGenerator.prototype.update = function () {
        if (this.isReady) {
            this.form.update();
            this.preview.update();
        }
    };
    var UIButtonGenerator_1;
    tslib_1.__decorate([
        decorators_1.autobind
    ], UIButtonGenerator.prototype, "updateState", null);
    UIButtonGenerator = UIButtonGenerator_1 = tslib_1.__decorate([
        decorators_1.component
    ], UIButtonGenerator);
    return UIButtonGenerator;
}(ui_1.UIElement));
exports.UIButtonGenerator = UIButtonGenerator;


/***/ }),

/***/ 6179:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UIPreviewButtonGenerator = void 0;
var tslib_1 = __webpack_require__(20255);
__webpack_require__(50862);
var ui_1 = __webpack_require__(14153);
var button_1 = __webpack_require__(11539);
var decorators_1 = __webpack_require__(9901);
var color_input_1 = __webpack_require__(4255);
var helpers_1 = __webpack_require__(92654);
var UIPreviewButtonGenerator = (function (_super) {
    tslib_1.__extends(UIPreviewButtonGenerator, _super);
    function UIPreviewButtonGenerator(jodit, state, updateState) {
        var _this = _super.call(this, jodit) || this;
        _this.state = state;
        _this.updateState = updateState;
        _this.button = new button_1.UIGButton(_this.j, _this.state);
        _this.lockUpdate = false;
        _this.colors = [
            'bgStart',
            'bgEnd',
            'fontColor',
            'borderColor',
            'boxShadowColor',
            'textShadowColor',
            'previewBgColor'
        ].map(function (key) {
            return new color_input_1.ColorInput(_this.j, {
                name: key,
                onChange: function (value) {
                    if (!_this.lockUpdate) {
                        if (key === 'bgEnd' && value !== _this.state.bgStart) {
                            _this.updateState('solid', false);
                        }
                        _this.updateState(key, value);
                    }
                }
            }).setMod('slim', true);
        });
        _this.setMod('mode', 'default');
        var button = _this.getElm('button');
        (0, helpers_1.assert)(button != null, 'button element does not exists');
        button.appendChild(_this.button.container);
        var colors = _this.getElm('colors');
        (0, helpers_1.assert)(colors != null, 'colors element does not exists');
        _this.colors.forEach(function (input) {
            colors.appendChild(input.container);
        });
        _this.update();
        return _this;
    }
    UIPreviewButtonGenerator.prototype.className = function () {
        return 'UIPreviewButtonGenerator';
    };
    UIPreviewButtonGenerator.prototype.render = function () {
        return "<div>\n\t\t\t<div class='&__button'></div>\n\t\t\t<div class='&__colors'></div>\n\t\t</div>";
    };
    UIPreviewButtonGenerator.prototype.update = function () {
        var _this = this;
        this.button.update();
        this.lockUpdate = true;
        this.colors.forEach(function (input) {
            if (input.value !== _this.state[input.state.name]) {
                input.value = _this.state[input.state.name];
            }
        });
        this.lockUpdate = false;
    };
    UIPreviewButtonGenerator = tslib_1.__decorate([
        decorators_1.component
    ], UIPreviewButtonGenerator);
    return UIPreviewButtonGenerator;
}(ui_1.UIElement));
exports.UIPreviewButtonGenerator = UIPreviewButtonGenerator;


/***/ }),

/***/ 4255:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ColorInput = void 0;
var tslib_1 = __webpack_require__(20255);
__webpack_require__(15670);
var ui_1 = __webpack_require__(14153);
var decorators_1 = __webpack_require__(9901);
var helpers_1 = __webpack_require__(92654);
var AColorPicker = __webpack_require__(86757);
var modules_1 = __webpack_require__(46701);
var constants_1 = __webpack_require__(10063);
var helpers_2 = __webpack_require__(92654);
var ColorInput = (function (_super) {
    tslib_1.__extends(ColorInput, _super);
    function ColorInput(jodit, options) {
        var _this = _super.call(this, jodit, options) || this;
        var popup = new ui_1.Popup(jodit), parse = function (c) { return AColorPicker.parseColor(c, 'hex'); };
        _this.popup = popup;
        _this.trigger = (0, ui_1.Button)(_this.j, 'ok');
        var wrapper = _this.getElm('wrapper');
        (0, helpers_2.assert)(wrapper != null, 'wrapper element does not exist');
        wrapper.appendChild(_this.trigger.container);
        _this.trigger.container.classList.add(_this.getFullElName('trigger'));
        _this.trigger.onAction(function () {
            var _a, _b;
            (_b = (_a = _this.state).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, _this.value);
            popup.close();
        });
        popup.setMod('padding', false).setMod('max-height', false);
        var pickerElement = _this.j.create.div(_this.getFullElName('picker'));
        var picker = AColorPicker.createPicker(pickerElement, {
            paletteEditable: true,
            showAlpha: true,
            palette: 'PALETTE_MATERIAL_CHROME'
        }).on('change', function (picker, color) {
            if (!_this.isFocused) {
                _this.value = AColorPicker.parseColor(color || '', 'hex');
            }
        });
        _this.j.e.on(_this, 'change', function () {
            if (parse(_this.value) !== picker.color) {
                picker.color = _this.value;
            }
        });
        popup.setContent(pickerElement);
        _this.j.e.on(_this.nativeInput, 'click', function () {
            popup.parentElement = _this;
            if (_this.jodit instanceof modules_1.Dialog) {
                popup.setZIndex(_this.jodit.getZIndex() + 1);
            }
            popup.open(function () { return (0, helpers_1.position)(_this.container); });
        });
        _this.onChangeValue();
        _this.onChangeSelfValue();
        return _this;
    }
    ColorInput.prototype.className = function () {
        return 'ColorInput';
    };
    ColorInput.prototype.afterSetMode = function (name, value) {
        if (name === 'slim' && value) {
            this.nativeInput.setAttribute('readonly', 'true');
        }
    };
    ColorInput.prototype.onChangeSelfValue = function () {
        this.nativeInput.style.backgroundColor = this.value;
    };
    ColorInput.prototype.onEscKeyDown = function (e) {
        var _a;
        if (e.key === constants_1.KEY_ESC) {
            (_a = this.popup) === null || _a === void 0 ? void 0 : _a.close();
        }
    };
    tslib_1.__decorate([
        (0, decorators_1.watch)(':change')
    ], ColorInput.prototype, "onChangeSelfValue", null);
    tslib_1.__decorate([
        (0, decorators_1.watch)('nativeInput:keydown')
    ], ColorInput.prototype, "onEscKeyDown", null);
    ColorInput = tslib_1.__decorate([
        decorators_1.component
    ], ColorInput);
    return ColorInput;
}(ui_1.UIInput));
exports.ColorInput = ColorInput;


/***/ }),

/***/ 93050:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('[{"be":"#5cbf2a","bs":"#44c767","bc":"#18ab29","br":"28px","bse":"1px","bsh":false,"bsbr":0,"bsc":"#3dc21b","bsi":false,"bsox":0,"bsoy":0,"bssr":0,"fc":"#fff","ff":"Arial","fs":"17px","fse":false,"fw":false,"px":"31px","py":"16px","pbc":"#f5f5f5","s":true,"t":"green","ts":true,"tsbr":0,"tsc":"#2f6627","tsox":0,"tsoy":"1px"},{"be":"#476e9e","bs":"#7892c2","bc":"#4e6096","br":"10px","bse":"1px","bsh":true,"bsbr":0,"bsc":"#9fb4f2","bsi":false,"bsox":0,"bsoy":0,"bssr":"2px","fc":"#fff","ff":"Arial","fs":"19px","fse":false,"fw":false,"px":"37px","py":"12px","pbc":"#f5f5f5","s":false,"t":"blue","ts":true,"tsbr":0,"tsc":"#283966","tsox":0,"tsoy":"1px"},{"be":"#408c99","bs":"#599bb3","bc":"#29668f","br":"8px","bse":0,"bsh":true,"bsbr":"14px","bsc":"#276873","bsi":false,"bsox":0,"bsoy":"10px","bssr":"-7px","fc":"#fff","ff":"Arial","fs":"20px","fse":false,"fw":true,"px":"32px","py":"13px","pbc":"#f5f5f5","s":false,"t":"turquoise","ts":true,"tsbr":0,"tsc":"#3d768a","tsox":0,"tsoy":"1px"},{"be":"#6c7c7c","bs":"#768d87","bc":"#566963","br":"5px","bse":"1px","bsh":true,"bsbr":"3px","bsc":"#91b8b3","bsi":true,"bsox":0,"bsoy":"1px","bssr":0,"fc":"#fff","ff":"Arial","fs":"15px","fse":false,"fw":true,"px":"23px","py":"11px","pbc":"#e8e7e2","s":false,"t":"dark grey","ts":true,"tsbr":0,"tsc":"#2b665e","tsox":0,"tsoy":"-1px"},{"be":"#72b352","bs":"#77b55a","bc":"#4b8f29","br":"4px","bse":"1px","bsh":true,"bsbr":"14px","bsc":"#3e7327","bsi":false,"bsox":0,"bsoy":"10px","bssr":"-7px","fc":"#fff","ff":"Arial","fs":"13px","fse":false,"fw":true,"px":"12px","py":"6px","pbc":"#f5f5f5","s":false,"t":"green","ts":true,"tsbr":0,"tsc":"#5b8a3c","tsox":0,"tsoy":"1px"},{"be":"#eb675e","bs":"#e4685d","bc":"#fff","br":"4px","bse":"1px","bsh":true,"bsbr":0,"bsc":"#e67a73","bsi":true,"bsox":0,"bsoy":"39px","bssr":"-24px","fc":"#fff","ff":"Arial","fs":"15px","fse":false,"fw":false,"px":"15px","py":"6px","pbc":"#f2f2f2","s":true,"t":"light red","ts":true,"tsbr":0,"tsc":"#b23e35","tsox":0,"tsoy":"1px"},{"be":"#b34332","bs":"#a73f2d","bc":"#241d13","br":0,"bse":"1px","bsh":true,"bsbr":0,"bsc":"#b54b3a","bsi":true,"bsox":0,"bsoy":"34px","bssr":"-15px","fc":"#fff","ff":"Arial","fs":"15px","fse":false,"fw":true,"px":"23px","py":"9px","pbc":"#2a2218","s":true,"t":"brown","ts":true,"tsbr":0,"tsc":"#7a2a1d","tsox":0,"tsoy":"-1px"},{"be":"#0688fa","bs":"#2dabf9","bc":"#0b0e07","br":"3px","bse":"1px","bsh":true,"bsbr":"7px","bsc":"#29bbff","bsi":true,"bsox":0,"bsoy":"-3px","bssr":0,"fc":"#fff","ff":"Arial","fs":"15px","fse":false,"fw":false,"px":"23px","py":"9px","pbc":"#1c1c1e","s":false,"t":"blue","ts":true,"tsbr":0,"tsc":"#263666","tsox":0,"tsoy":"1px"},{"be":"#415989","bs":"#2e466e","bc":"#1f2f47","br":"17px","bse":"1px","bsh":true,"bsbr":"15px","bsc":"#23395e","bsi":true,"bsox":0,"bsoy":0,"bssr":"3px","fc":"#fff","ff":"Arial","fs":"15px","fse":false,"fw":false,"px":"13px","py":"6px","pbc":"#3f5c93","s":false,"t":"blue","ts":true,"tsbr":0,"tsc":"#263666","tsox":0,"tsoy":"1px"},{"be":"#bc3315","bs":"#d0451b","bc":"#942911","br":"3px","bse":"1px","bsh":true,"bsbr":0,"bsc":"#cf866c","bsi":true,"bsox":0,"bsoy":"1px","bssr":0,"fc":"#fff","ff":"Arial","fs":"13px","fse":false,"fw":false,"px":"24px","py":"6px","pbc":"#f5f5f5","s":false,"t":"codecanyon","ts":true,"tsbr":0,"tsc":"#854629","tsox":0,"tsoy":"1px"},{"be":"#ccc2a6","bs":"#eae0c2","bc":"#333029","br":"15px","bse":"2px","bsh":true,"bsbr":0,"bsc":"#1c1b18","bsi":false,"bsox":0,"bsoy":"1px","bssr":0,"fc":"#505739","ff":"Arial","fs":"14px","fse":false,"fw":true,"px":"16px","py":"12px","pbc":"#2d2e29","s":false,"t":"creme","ts":true,"tsbr":0,"tsc":"#fff","tsox":0,"tsoy":"1px"},{"be":"#634b30","bs":"#7d5d3b","bc":"#54381e","br":"3px","bse":"1px","bsh":true,"bsbr":0,"bsc":"#a6827e","bsi":true,"bsox":0,"bsoy":"1px","bssr":0,"fc":"#fff","ff":"Arial","fs":"13px","fse":false,"fw":false,"px":"24px","py":"6px","pbc":"#f5f5f5","s":false,"t":"themeforest","ts":true,"tsbr":0,"tsc":"#4d3534","tsox":0,"tsoy":"1px"},{"be":"#0061a7","bs":"#007dc1","bc":"#124d77","br":"3px","bse":"1px","bsh":true,"bsbr":0,"bsc":"#54a3f7","bsi":true,"bsox":0,"bsoy":"1px","bssr":0,"fc":"#fff","ff":"Arial","fs":"13px","fse":false,"fw":false,"px":"24px","py":"6px","pbc":"#f5f5f5","s":false,"t":"graphicriver","ts":true,"tsbr":0,"tsc":"#154682","tsox":0,"tsoy":"1px"},{"be":"#019ad2","bs":"#33bdef","bc":"#057fd0","br":"6px","bse":"1px","bsh":true,"bsbr":0,"bsc":"#f0f7fa","bsi":false,"bsox":0,"bsoy":"1px","bssr":0,"fc":"#fff","ff":"Arial","fs":"15px","fse":false,"fw":true,"px":"24px","py":"6px","pbc":"#e2e2e2","s":false,"t":"twitter","ts":true,"tsbr":0,"tsc":"#5b6178","tsox":0,"tsoy":"-1px"},{"be":"#ffab23","bs":"#ffec64","bc":"#ffaa22","br":"6px","bse":"1px","bsh":true,"bsbr":0,"bsc":"#fff6af","bsi":false,"bsox":0,"bsoy":"1px","bssr":0,"fc":"#333333","ff":"Arial","fs":"15px","fse":false,"fw":true,"px":"24px","py":"6px","pbc":"#e2e2e2","s":false,"t":"twitter","ts":true,"tsbr":0,"tsc":"#ffee66","tsox":0,"tsoy":"1px"},{"be":"#68a54b","bs":"#74ad5a","bc":"#3b6e22","br":0,"bse":"1px","bsh":true,"bsbr":0,"bsc":"#9acc85","bsi":true,"bsox":0,"bsoy":"1px","bssr":0,"fc":"#fff","ff":"Arial","fs":"13px","fse":false,"fw":true,"px":"12px","py":"6px","pbc":"#f5f5f5","s":false,"t":"facebook","ts":false,"tsbr":0,"tsc":"#92b879","tsox":0,"tsoy":"1px"},{"be":"#5972a7","bs":"#637aad","bc":"#314179","br":0,"bse":"1px","bsh":true,"bsbr":0,"bsc":"#7a8eb9","bsi":true,"bsox":0,"bsoy":"1px","bssr":0,"fc":"#fff","ff":"Arial","fs":"13px","fse":false,"fw":true,"px":"12px","py":"6px","pbc":"#3b5898","s":false,"t":"facebook","ts":false,"tsbr":0,"tsc":"#7a8eb9","tsox":0,"tsoy":"1px"},{"be":"#bab1ba","bs":"#ededed","bc":"#d6bcd6","br":"15px","bse":"1px","bsh":true,"bsbr":0,"bsc":"#899599","bsi":false,"bsox":"3px","bsoy":"4px","bssr":0,"fc":"#3a8a9e","ff":"Arial","fs":"17px","fse":false,"fw":false,"px":"25px","py":"7px","pbc":"#f5f5f5","s":false,"t":"grey","ts":true,"tsbr":0,"tsc":"#e1e2ed","tsox":0,"tsoy":"1px"},{"be":"#f24437","bs":"#c62d1f","bc":"#d02718","br":"18px","bse":"1px","bsh":true,"bsbr":0,"bsc":"#8a2a21","bsi":false,"bsox":"3px","bsoy":"4px","bssr":0,"fc":"#fff","ff":"Arial","fs":"17px","fse":false,"fw":false,"px":"25px","py":"7px","pbc":"#f5f5f5","s":false,"t":"red","ts":true,"tsbr":0,"tsc":"#810e05","tsox":0,"tsoy":"1px"},{"be":"#378de5","bs":"#79bbff","bc":"#337bc4","br":"5px","bse":"1px","bsh":true,"bsbr":0,"bsc":"#1564ad","bsi":false,"bsox":"3px","bsoy":"4px","bssr":0,"fc":"#fff","ff":"Arial","fs":"17px","fse":false,"fw":true,"px":"44px","py":"12px","pbc":"#f5f5f5","s":false,"t":"blue","ts":true,"tsbr":0,"tsc":"#528ecc","tsox":0,"tsoy":"1px"},{"be":"#9ba892","bs":"#dbe6c4","bc":"#b2b8ad","br":"6px","bse":"1px","bsh":true,"bsbr":"14px","bsc":"#f2fadc","bsi":true,"bsox":0,"bsoy":0,"bssr":"-3px","fc":"#757d6f","ff":"Arial","fs":"15px","fse":false,"fw":true,"px":"24px","py":"6px","pbc":"#f5f5f5","s":false,"t":"olive","ts":true,"tsbr":0,"tsc":"#ced9bf","tsox":0,"tsoy":"1px"},{"be":"#bc80ea","bs":"#dfbdfa","bc":"#c584f3","br":"6px","bse":"1px","bsh":true,"bsbr":0,"bsc":"#efdcfb","bsi":true,"bsox":0,"bsoy":"1px","bssr":0,"fc":"#fff","ff":"Arial","fs":"15px","fse":false,"fw":true,"px":"24px","py":"6px","pbc":"#f5f5f5","s":false,"t":"purple","ts":true,"tsbr":0,"tsc":"#9752cc","tsox":0,"tsoy":"1px"},{"be":"#80b5ea","bs":"#bddbfa","bc":"#84bbf3","br":"6px","bse":"1px","bsh":true,"bsbr":0,"bsc":"#dcecfb","bsi":true,"bsox":0,"bsoy":"1px","bssr":0,"fc":"#fff","ff":"Arial","fs":"15px","fse":false,"fw":true,"px":"24px","py":"6px","pbc":"#f5f5f5","s":false,"t":"light blue","ts":true,"tsbr":0,"tsc":"#528ecc","tsox":0,"tsoy":"1px"},{"be":"#f6f6f6","bs":"#fff","bc":"#dcdcdc","br":"6px","bse":"1px","bsh":true,"bsbr":0,"bsc":"#fff","bsi":true,"bsox":0,"bsoy":"1px","bssr":0,"fc":"#666666","ff":"Arial","fs":"15px","fse":false,"fw":true,"px":"24px","py":"6px","pbc":"#f5f5f5","s":false,"t":"white","ts":true,"tsbr":0,"tsc":"#fff","tsox":0,"tsoy":"1px"},{"be":"#e4685d","bs":"#fc8d83","bc":"#d83526","br":"6px","bse":"1px","bsh":true,"bsbr":0,"bsc":"#f7c5c0","bsi":true,"bsox":0,"bsoy":"1px","bssr":0,"fc":"#fff","ff":"Arial","fs":"15px","fse":false,"fw":true,"px":"24px","py":"6px","pbc":"#f5f5f5","s":false,"t":"light red","ts":true,"tsbr":0,"tsc":"#b23e35","tsox":0,"tsoy":"1px"},{"be":"#468ccf","bs":"#63b8ee","bc":"#3866a3","br":"6px","bse":"1px","bsh":true,"bsbr":0,"bsc":"#bee2f9","bsi":true,"bsox":0,"bsoy":"1px","bssr":0,"fc":"#14396a","ff":"Arial","fs":"15px","fse":false,"fw":true,"px":"24px","py":"6px","pbc":"#f5f5f5","s":false,"t":"dark blue","ts":true,"tsbr":0,"tsc":"#7cacde","tsox":0,"tsoy":"1px"},{"be":"#ffab23","bs":"#ffec64","bc":"#ffaa22","br":"6px","bse":"1px","bsh":true,"bsbr":0,"bsc":"#fff6af","bsi":true,"bsox":0,"bsoy":"1px","bssr":0,"fc":"#333333","ff":"Arial","fs":"15px","fse":false,"fw":true,"px":"24px","py":"6px","pbc":"#f5f5f5","s":false,"t":"orange","ts":true,"tsbr":0,"tsc":"#ffee66","tsox":0,"tsoy":"1px"},{"be":"#77a809","bs":"#89c403","bc":"#74b807","br":"6px","bse":"1px","bsh":true,"bsbr":0,"bsc":"#a4e271","bsi":true,"bsox":0,"bsoy":"1px","bssr":0,"fc":"#fff","ff":"Arial","fs":"15px","fse":false,"fw":true,"px":"24px","py":"6px","pbc":"#f5f5f5","s":false,"t":"green","ts":true,"tsbr":0,"tsc":"#528009","tsox":0,"tsoy":"1px"},{"be":"#e9e9e9","bs":"#f9f9f9","bc":"#dcdcdc","br":"6px","bse":"1px","bsh":true,"bsbr":0,"bsc":"#fff","bsi":true,"bsox":0,"bsoy":"1px","bssr":0,"fc":"#666666","ff":"Arial","fs":"15px","fse":false,"fw":true,"px":"24px","py":"6px","pbc":"#f5f5f5","s":false,"t":"light grey","ts":true,"tsbr":0,"tsc":"#fff","tsox":0,"tsoy":"1px"},{"be":"#a20dbd","bs":"#c123de","bc":"#a511c0","br":"6px","bse":"1px","bsh":true,"bsbr":0,"bsc":"#e184f3","bsi":true,"bsox":0,"bsoy":"1px","bssr":0,"fc":"#fff","ff":"Arial","fs":"15px","fse":false,"fw":true,"px":"24px","py":"6px","pbc":"#f5f5f5","s":false,"t":"purple","ts":true,"tsbr":0,"tsc":"#9b14b3","tsox":0,"tsoy":"1px"},{"be":"#1e62d0","bs":"#3d94f6","bc":"#337fed","br":"6px","bse":"1px","bsh":true,"bsbr":0,"bsc":"#97c4fe","bsi":true,"bsox":0,"bsoy":"1px","bssr":0,"fc":"#fff","ff":"Arial","fs":"15px","fse":false,"fw":true,"px":"24px","py":"6px","pbc":"#f5f5f5","s":false,"t":"blue","ts":true,"tsbr":0,"tsc":"#1570cd","tsox":0,"tsoy":"1px"},{"be":"#ef027d","bs":"#ff5bb0","bc":"#ee1eb5","br":"6px","bse":"1px","bsh":true,"bsbr":0,"bsc":"#fbafe3","bsi":true,"bsox":0,"bsoy":"1px","bssr":0,"fc":"#fff","ff":"Arial","fs":"15px","fse":false,"fw":true,"px":"24px","py":"6px","pbc":"#f5f5f5","s":false,"t":"pink","ts":true,"tsbr":0,"tsc":"#c70067","tsox":0,"tsoy":"1px"},{"be":"#f2ab1e","bs":"#f0c911","bc":"#e65f44","br":"6px","bse":"1px","bsh":true,"bsbr":0,"bsc":"#f9eca0","bsi":true,"bsox":0,"bsoy":"1px","bssr":0,"fc":"#c92200","ff":"Arial","fs":"15px","fse":false,"fw":true,"px":"24px","py":"6px","pbc":"#f5f5f5","s":false,"t":"orange","ts":true,"tsbr":0,"tsc":"#ded17c","tsox":0,"tsoy":"1px"},{"be":"#c62d1f","bs":"#f24537","bc":"#d02718","br":"6px","bse":"1px","bsh":true,"bsbr":0,"bsc":"#f5978e","bsi":true,"bsox":0,"bsoy":"1px","bssr":0,"fc":"#fff","ff":"Arial","fs":"15px","fse":false,"fw":true,"px":"24px","py":"6px","pbc":"#f5f5f5","s":false,"t":"red","ts":true,"tsbr":0,"tsc":"#810e05","tsox":0,"tsoy":"1px"},{"be":"#a5cc52","bs":"#b8e356","bc":"#83c41a","br":"6px","bse":"1px","bsh":true,"bsbr":0,"bsc":"#d9fbbe","bsi":true,"bsox":0,"bsoy":"1px","bssr":0,"fc":"#fff","ff":"Arial","fs":"15px","fse":false,"fw":true,"px":"24px","py":"6px","pbc":"#f5f5f5","s":false,"t":"light green","ts":true,"tsbr":0,"tsc":"#86ae47","tsox":0,"tsoy":"1px"},{"be":"#fb9e25","bs":"#ffc477","bc":"#eeb44f","br":"6px","bse":"1px","bsh":true,"bsbr":0,"bsc":"#fce2c1","bsi":true,"bsox":0,"bsoy":"1px","bssr":0,"fc":"#fff","ff":"Arial","fs":"15px","fse":false,"fw":true,"px":"24px","py":"6px","pbc":"#f5f5f5","s":false,"t":"light orange","ts":true,"tsbr":0,"tsc":"#cc9f52","tsox":0,"tsoy":"1px"},{"be":"#dfdfdf","bs":"#ededed","bc":"#dcdcdc","br":"6px","bse":"1px","bsh":true,"bsbr":0,"bsc":"#fff","bsi":true,"bsox":0,"bsoy":"1px","bssr":0,"fc":"#777777","ff":"Arial","fs":"15px","fse":false,"fw":true,"px":"24px","py":"6px","pbc":"#f5f5f5","s":false,"t":"grey","ts":true,"tsbr":0,"tsc":"#fff","tsox":0,"tsoy":"1px"},{"be":"#378de5","bs":"#79bbff","bc":"#84bbf3","br":"6px","bse":"1px","bsh":true,"bsbr":0,"bsc":"#bbdaf7","bsi":true,"bsox":0,"bsoy":"1px","bssr":0,"fc":"#fff","ff":"Arial","fs":"15px","fse":false,"fw":true,"px":"24px","py":"6px","pbc":"#f5f5f5","s":false,"t":"blue","ts":true,"tsbr":0,"tsc":"#528ecc","tsox":0,"tsoy":"1px"},{"be":"#5cb811","bs":"#77d42a","bc":"#268a16","br":"6px","bse":"1px","bsh":true,"bsbr":0,"bsc":"#caefab","bsi":true,"bsox":0,"bsoy":"1px","bssr":0,"fc":"#306108","ff":"Arial","fs":"15px","fse":false,"fw":true,"px":"24px","py":"6px","pbc":"#f5f5f5","s":false,"t":"green","ts":true,"tsbr":0,"tsc":"#aade7c","tsox":0,"tsoy":"1px"},{"be":"#ce0100","bs":"#fe1a00","bc":"#d83526","br":"6px","bse":"1px","bsh":true,"bsbr":0,"bsc":"#f29c93","bsi":true,"bsox":0,"bsoy":"1px","bssr":0,"fc":"#fff","ff":"Arial","fs":"15px","fse":false,"fw":true,"px":"24px","py":"6px","pbc":"#f5f5f5","s":false,"t":"red","ts":true,"tsbr":0,"tsc":"#b23e35","tsox":0,"tsoy":"1px"}]');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(44579));
/******/ return __webpack_exports__;
/******/ }
]);
});