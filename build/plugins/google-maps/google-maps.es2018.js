/*!
 * jodit - Jodit is awesome and usefully wysiwyg editor with filebrowser
 * Author: Chupurnov <chupurnov@gmail.com> (https://xdsoft.net/)
 * Version: v3.20.4
 * Url: https://xdsoft.net/jodit/
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
return (self["webpackChunkjodit"] = self["webpackChunkjodit"] || []).push([[917],{

/***/ 44219:
/***/ (function(module) {

module.exports = "<svg viewBox=\"0 0 83 84\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"40\" cy=\"44\" r=\"37\" stroke=\"black\" stroke-width=\"6\"/> <path d=\"M40 4V44H79\" stroke=\"black\" stroke-width=\"5\"/> <circle cx=\"40\" cy=\"6\" r=\"6\" fill=\"#C8C8C8\"/> <circle cx=\"40\" cy=\"43\" r=\"6\" fill=\"#C8C8C8\"/> <circle cx=\"77\" cy=\"44\" r=\"6\" fill=\"#C8C8C8\"/> </svg>"

/***/ }),

/***/ 62411:
/***/ (function(module) {

module.exports = "<svg viewBox=\"0 0 76 76\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M38 6.90909C36.2517 6.90909 34.7591 7.58381 33.5221 8.93324C32.2852 10.2827 31.6667 11.911 31.6667 13.8182V20.7273H30.0833V15.7074C30.0833 13.9801 29.5556 12.5137 28.5 11.3082C27.4444 10.1027 26.125 9.5 24.5417 9.5C23.0243 9.5 21.7214 10.0938 20.6328 11.2813C19.5443 12.4688 19 13.8902 19 15.5455V38.7017L17.4167 37.0824V27.7983C17.4167 26.071 16.8889 24.6046 15.8333 23.3991C14.7778 22.1937 13.4583 21.5909 11.875 21.5909C10.3576 21.5909 9.05469 22.1847 7.96615 23.3722C6.8776 24.5597 6.33333 25.9811 6.33333 27.6364V39.7273C6.33333 41.4186 6.91059 42.8939 8.0651 44.1534L23.4036 60.1307C24.6901 61.5341 25.3333 63.3693 25.3333 65.6364C25.3333 66.572 25.6467 67.3816 26.2734 68.0653C26.9002 68.7491 27.6424 69.0909 28.5 69.0909H60.1667C61.0243 69.0909 61.7665 68.7491 62.3932 68.0653C63.02 67.3816 63.3333 66.572 63.3333 65.6364V64.2869C63.3333 62.8116 63.4983 61.4261 63.8281 60.1307L69.1719 36.5966C69.5017 35.3011 69.6667 33.9157 69.6667 32.4403V19.1619C69.6667 17.4347 69.1389 15.9683 68.0833 14.7628C67.0278 13.5573 65.7083 12.9545 64.125 12.9545C62.6076 12.9545 61.3047 13.5483 60.2161 14.7358C59.1276 15.9233 58.5833 17.3447 58.5833 19V20.7273H57V13.9801C57 12.5407 56.5877 11.2363 55.763 10.0668C54.9384 8.89725 53.8828 8.16856 52.5964 7.88068C52.1345 7.80871 51.7552 7.77273 51.4583 7.77273C49.941 7.77273 48.638 8.36648 47.5495 9.55398C46.4609 10.7415 45.9167 12.1629 45.9167 13.8182V20.7273H44.3333V14.142C44.3333 12.3068 43.7973 10.6965 42.7253 9.31108C41.6532 7.92566 40.2925 7.14299 38.6432 6.96307C38.4783 6.92708 38.2639 6.90909 38 6.90909ZM38 0C40.7708 0 43.2283 0.899621 45.3724 2.69886C47.2526 1.47538 49.2813 0.863636 51.4583 0.863636C53.4045 0.863636 55.2352 1.34943 56.9505 2.32102C58.6658 3.29261 60.0842 4.66004 61.2057 6.4233C62.0964 6.1714 63.0694 6.04545 64.125 6.04545C67.4236 6.04545 70.2274 7.33191 72.5365 9.90483C74.8455 12.4777 76 15.5634 76 19.1619V32.4403C76 34.2756 75.7856 36.2188 75.3568 38.2699L69.9635 61.804C69.7656 62.6676 69.6667 63.9451 69.6667 65.6364C69.6667 68.5152 68.7431 70.9621 66.8958 72.9773C65.0486 74.9924 62.8056 76 60.1667 76H28.5C25.7292 76 23.4531 74.9474 21.6719 72.8423C19.8906 70.7372 19 68.1733 19 65.1506L3.76042 49.1733C1.25347 46.5464 0 43.3977 0 39.7273V27.6364C0 24.0739 1.16276 21.0241 3.48828 18.4872C5.8138 15.9503 8.60938 14.6818 11.875 14.6818C12.2378 14.6818 12.5017 14.6998 12.6667 14.7358C12.8646 11.3172 14.1098 8.43845 16.4023 6.09943C18.6949 3.76042 21.408 2.59091 24.5417 2.59091C26.2569 2.59091 27.8733 2.96875 29.3906 3.72443C31.7656 1.24148 34.6354 0 38 0Z\"/> </svg>"

/***/ }),

/***/ 510:
/***/ (function(module) {

module.exports = "<svg viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\"> <g> <path d=\"M23,13.6l5,5V4c0-0.6-0.4-1-1-1h-4V13.6z\"/> <polygon points=\"12.4,3 16.7,7.3 19.7,10.3 21,11.6 21,3\"/> <path d=\"M14.6,8l-5-5H5C4.4,3,4,3.4,4,4v14.6L14.6,8z\"/> </g> <path d=\"M28.8,29.2L26,26.4c0.7-1,1-2.1,1-3.4c0-3.3-2.7-6-6-6s-6,2.7-6,6s2.7,6,6,6c1.2,0,2.4-0.4,3.4-1l2.8,2.8 c0.4,0.4,1.2,0.4,1.6,0C29.2,30.4,29.2,29.6,28.8,29.2z\"/> <path d=\"M13,23c0-4.4,3.6-8,8-8c0.2,0,0.4,0,0.6,0l-0.3-0.3c0,0,0,0,0,0l-3-3L16,9.4l-12,12V26c0,0.6,0.4,1,1,1h9.1 C13.4,25.8,13,24.5,13,23z\"/> </svg>"

/***/ }),

/***/ 65287:
/***/ (function(module) {

module.exports = "<svg viewBox=\"0 0 88 88\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <g> <path d=\"M44 0.513519C27.2931 0.513519 13.75 13.8981 13.75 30.4095C13.75 46.9208 44 87.4835 44 87.4835C44 87.4835 74.25 46.9208 74.25 30.4095C74.25 13.8981 60.7069 0.513519 44 0.513519ZM19.25 30.4095C19.25 16.921 30.3518 5.94914 44 5.94914C57.6482 5.94914 68.75 16.921 68.75 30.4095C68.75 39.8049 54.9945 62.4871 44 78.1329C33.0055 62.4871 19.25 39.8049 19.25 30.4095ZM44 16.8204C36.4052 16.8204 30.25 22.9035 30.25 30.4095C30.25 37.9154 36.4052 43.9985 44 43.9985C51.5948 43.9985 57.75 37.9154 57.75 30.4095C57.75 22.9035 51.5948 16.8204 44 16.8204ZM44 38.5629C39.4508 38.5629 35.75 34.9054 35.75 30.4095C35.75 25.9135 39.4508 22.256 44 22.256C48.5492 22.256 52.25 25.9135 52.25 30.4095C52.25 34.9054 48.5492 38.5629 44 38.5629Z\" fill=\"#404040\"/> </g> <defs> <rect width=\"88\" height=\"86.97\" fill=\"white\" transform=\"translate(0 0.513519)\"/> </defs> </svg>"

/***/ }),

/***/ 89808:
/***/ (function(module) {

module.exports = "<svg viewBox=\"0 0 77 86\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M7 38.6056L33.1367 7.96263L69.5477 45.7058L36.2444 72.166L7 76.9673V38.6056Z\" stroke=\"black\" stroke-width=\"6\"/> <circle cx=\"71\" cy=\"45\" r=\"6\" fill=\"#C8C8C8\"/> <circle cx=\"35\" cy=\"73\" r=\"6\" fill=\"#C8C8C8\"/> <circle cx=\"6\" cy=\"79\" r=\"6\" fill=\"#C8C8C8\"/> <circle cx=\"6\" cy=\"39\" r=\"6\" fill=\"#C8C8C8\"/> <circle cx=\"33\" cy=\"6\" r=\"6\" fill=\"#C8C8C8\"/> </svg>"

/***/ }),

/***/ 83027:
/***/ (function(module) {

module.exports = "<svg width=\"72\" height=\"86\" viewBox=\"0 0 72 86\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M17.1832 79.1351L13.6833 45.0811L49.6832 58.4595L47.6832 5.35135\" stroke=\"black\" stroke-width=\"6\"/> <circle cx=\"13\" cy=\"44\" r=\"6\" fill=\"#C8C8C8\"/> <circle cx=\"17\" cy=\"77\" r=\"6\" fill=\"#C8C8C8\"/> <circle cx=\"51\" cy=\"59\" r=\"6\" fill=\"#C8C8C8\"/> <circle cx=\"48\" cy=\"6\" r=\"6\" fill=\"#C8C8C8\"/> </svg>"

/***/ }),

/***/ 42662:
/***/ (function(module) {

module.exports = "<svg viewBox=\"0 0 47 61\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M46.7671 7.12793H27.3433V61H19.416V7.12793H0.0336914V0.570312H46.7671V7.12793Z\"/> </svg>"

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": function() { return /* binding */ UIRange; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20255);
/* harmony import */ var jodit_core_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41685);
/* harmony import */ var jodit_core_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11169);
/* harmony import */ var jodit_core_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52607);
/* harmony import */ var autobind_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70631);






let UIRange = class UIRange extends jodit_core_ui__WEBPACK_IMPORTED_MODULE_0__/* .UIInput */ .u3 {
    constructor(jodit, options) {
        super(jodit, {
            ...options,
            type: 'hidden'
        });
        this.state = {
            ...jodit_core_ui__WEBPACK_IMPORTED_MODULE_0__/* .UIInput.defaultState */ .u3.defaultState,
            min: 0,
            max: 100
        };
        this.startValue = 0;
        this.startX = 0;
        this.width = 100;
        Object.assign(this.state, options);
        this.appendUIRange();
        this.onChangeSelfValue();
    }
    className() {
        return 'UIRange';
    }
    appendUIRange() {
        const slider = this.j.create.div(this.getFullElName('slider'));
        this.container.appendChild(slider);
        const handle = this.j.create.div(this.getFullElName('handle'));
        slider.appendChild(handle);
        const log = this.j.create.div(this.getFullElName('log'));
        const label = this.getElm('label');
        (0,jodit_core_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)(label != null, 'label element does not exists');
        label.appendChild(log);
    }
    onDragStart(e) {
        this.startValue = parseFloat(this.value) || 0;
        this.startX = e.clientX;
        const slider = this.getElm('slider');
        (0,jodit_core_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)(slider != null, 'slider element does not exists');
        this.width = slider.offsetWidth;
        this.j.e.on(this.j.ow, 'mousemove', this.onDrag);
    }
    onDrag(e) {
        const { min, max } = this.state;
        const diff = ((e.clientX - this.startX) / this.width) *
            (this.state.max - this.state.min);
        let value = this.startValue + diff;
        if (value < min) {
            value = min;
        }
        if (value > max) {
            value = max;
        }
        this.value = value.toString();
    }
    onDragEnd() {
        this.j.e.off(this.j.ow, 'mousemove', this.onDrag);
    }
    onChangeSelfValue() {
        const handle = this.getElm('handle'), value = parseFloat(this.value) || 0;
        (0,jodit_core_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)(handle != null, 'Handle element does not exist');
        (0,jodit_core_helpers__WEBPACK_IMPORTED_MODULE_2__.css)(handle, {
            left: ((value - this.state.min) / (this.state.max - this.state.min)) *
                100 +
                '%'
        });
        const log = this.getElm('log');
        (0,jodit_core_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)(log != null, 'log element does not exist');
        log.innerText = value.toString();
    }
    destruct() {
        this.onDragEnd();
        return super.destruct();
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([
    (0,jodit_core_decorators__WEBPACK_IMPORTED_MODULE_1__.watch)(['handle:mousedown', 'handle:touchstart'])
], UIRange.prototype, "onDragStart", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([
    autobind_decorator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP
], UIRange.prototype, "onDrag", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([
    (0,jodit_core_decorators__WEBPACK_IMPORTED_MODULE_1__.watch)(['j.ow:mouseup', 'j.ow:touchend'])
], UIRange.prototype, "onDragEnd", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([
    (0,jodit_core_decorators__WEBPACK_IMPORTED_MODULE_1__.watch)(':change')
], UIRange.prototype, "onChangeSelfValue", null);
UIRange = (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([
    jodit_core_decorators__WEBPACK_IMPORTED_MODULE_1__.component
], UIRange);



/***/ }),

/***/ 4255:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": function() { return /* binding */ ColorInput; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20255);
/* harmony import */ var jodit_core_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41685);
/* harmony import */ var jodit_core_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11169);
/* harmony import */ var jodit_core_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52607);
/* harmony import */ var a_color_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86757);
/* harmony import */ var a_color_picker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(a_color_picker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jodit_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81165);
/* harmony import */ var jodit_core_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10063);
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */









let ColorInput = class ColorInput extends jodit_core_ui__WEBPACK_IMPORTED_MODULE_0__/* .UIInput */ .u3 {
    constructor(jodit, options) {
        super(jodit, options);
        const popup = new jodit_core_ui__WEBPACK_IMPORTED_MODULE_0__/* .Popup */ .GI(jodit), parse = (c) => a_color_picker__WEBPACK_IMPORTED_MODULE_3__.parseColor(c, 'hex');
        this.popup = popup;
        this.trigger = (0,jodit_core_ui__WEBPACK_IMPORTED_MODULE_0__/* .Button */ .zx)(this.j, 'ok');
        const wrapper = this.getElm('wrapper');
        (0,jodit_core_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)(wrapper != null, 'wrapper element does not exist');
        wrapper.appendChild(this.trigger.container);
        this.trigger.container.classList.add(this.getFullElName('trigger'));
        this.trigger.onAction(() => {
            var _a, _b;
            (_b = (_a = this.state).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, this.value);
            popup.close();
        });
        popup.setMod('padding', false).setMod('max-height', false);
        const pickerElement = this.j.create.div(this.getFullElName('picker'));
        const picker = a_color_picker__WEBPACK_IMPORTED_MODULE_3__.createPicker(pickerElement, {
            paletteEditable: true,
            showAlpha: true,
            palette: 'PALETTE_MATERIAL_CHROME'
        }).on('change', (picker, color) => {
            if (!this.isFocused) {
                this.value = a_color_picker__WEBPACK_IMPORTED_MODULE_3__.parseColor(color || '', 'hex');
            }
        });
        this.j.e.on(this, 'change', () => {
            if (parse(this.value) !== picker.color) {
                picker.color = this.value;
            }
        });
        popup.setContent(pickerElement);
        this.j.e.on(this.nativeInput, 'click', () => {
            popup.parentElement = this;
            if (this.jodit instanceof jodit_modules__WEBPACK_IMPORTED_MODULE_4__.Dialog) {
                popup.setZIndex(this.jodit.getZIndex() + 1);
            }
            popup.open(() => (0,jodit_core_helpers__WEBPACK_IMPORTED_MODULE_2__.position)(this.container));
        });
        this.onChangeValue();
        this.onChangeSelfValue();
    }
    className() {
        return 'ColorInput';
    }
    afterSetMode(name, value) {
        if (name === 'slim' && value) {
            this.nativeInput.setAttribute('readonly', 'true');
        }
    }
    onChangeSelfValue() {
        this.nativeInput.style.backgroundColor = this.value;
    }
    onEscKeyDown(e) {
        var _a;
        if (e.key === jodit_core_constants__WEBPACK_IMPORTED_MODULE_5__.KEY_ESC) {
            (_a = this.popup) === null || _a === void 0 ? void 0 : _a.close();
        }
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__decorate */ .gn)([
    (0,jodit_core_decorators__WEBPACK_IMPORTED_MODULE_1__.watch)(':change')
], ColorInput.prototype, "onChangeSelfValue", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__decorate */ .gn)([
    (0,jodit_core_decorators__WEBPACK_IMPORTED_MODULE_1__.watch)('nativeInput:keydown')
], ColorInput.prototype, "onEscKeyDown", null);
ColorInput = (0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__decorate */ .gn)([
    jodit_core_decorators__WEBPACK_IMPORTED_MODULE_1__.component
], ColorInput);



/***/ }),

/***/ 37209:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "googleMaps": function() { return /* binding */ googleMaps; }
});

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(20255);
// EXTERNAL MODULE: ./src/core/plugin/index.ts
var core_plugin = __webpack_require__(35570);
// EXTERNAL MODULE: ./src/index.ts + 160 modules
var src = __webpack_require__(85660);
// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(27537);
;// CONCATENATED MODULE: ./src/plugins/google-maps/helpers/const.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
const STORAGE_KEY = 'googleMapsState';
const COMMAND_OPEN_DIALOG = 'googleMapsDialog';

;// CONCATENATED MODULE: ./src/plugins/google-maps/config.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */


config/* Config.prototype.googleMaps */.D.prototype.googleMaps = {
    saveStateInStorage: true,
    useStaticImage: false,
    apiUrl: 'https://maps.googleapis.com/maps/api/js?key=${j.o.googleMaps.API_KEY}&libraries=geometry,places,drawing&language=${j.o.language}&callback=JoditGoogleReadyHandler',
    API_KEY: 'AIzaSyDjnR03hxN8fo0QJ85Jkkvk2DALTh3eynY',
    dialog: {
        size: [700, 700]
    },
    inlineEditorOptions: {
        buttons: ['bold', 'italic', 'link', 'brush', 'fontsize', 'image']
    },
    map: {
        type: 'roadmap',
        layer: 'default',
        center: 'auto',
        defaultCenter: [-34.397, 150.644],
        defaultZoom: 10,
        zoom: 10,
        size: [500, 400],
        defaultStates: {
            polyline: {
                strokeColor: '#5ba4f3',
                strokeWeight: 3
            },
            polygon: {
                strokeColor: '#417706',
                fillColor: '#5b9302',
                strokeWeight: 1,
                fillOpacity: 0.5
            },
            marker: {},
            text: {},
            circle: {
                strokeColor: '#da767c',
                fillColor: '#f34ca8',
                strokeWeight: 1,
                fillOpacity: 0.5
            }
        }
    }
};
config/* Config.prototype.controls.googleMaps */.D.prototype.controls.googleMaps = {
    tooltip: 'Google Maps',
    icon: 'map',
    command: COMMAND_OPEN_DIALOG
};
const gmButton = (name) => ({
    icon: `edit-${name}`,
    isActive: (editor) => editor.buffer.get('createMode.gm') === name,
    exec: (editor) => {
        editor.e.fire('changeCreateMode.gm', name);
    }
});
config/* Config.prototype.controls.gm */.D.prototype.controls.gm = {
    hand: gmButton('hand'),
    marker: gmButton('marker'),
    polyline: gmButton('polyline'),
    polygon: gmButton('polygon'),
    circle: gmButton('circle'),
    text: gmButton('text')
};

// EXTERNAL MODULE: ./src/core/ui/index.ts + 2 modules
var ui = __webpack_require__(41685);
;// CONCATENATED MODULE: ./src/plugins/google-maps/assets/index.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

ui/* Icon.set */.JO.set('map', __webpack_require__(510))
    .set('edit-hand', __webpack_require__(62411))
    .set('edit-polygon', __webpack_require__(89808))
    .set('edit-marker', __webpack_require__(65287))
    .set('edit-text', __webpack_require__(42662))
    .set('edit-polyline', __webpack_require__(83027))
    .set('edit-circle', __webpack_require__(44219));

// EXTERNAL MODULE: ./src/modules/widget/index.ts + 11 modules
var widget = __webpack_require__(58894);
// EXTERNAL MODULE: ./src/core/ui/button/index.ts + 2 modules
var ui_button = __webpack_require__(17460);
// EXTERNAL MODULE: ./src/core/helpers/index.ts + 14 modules
var helpers = __webpack_require__(52607);
// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__(10063);
// EXTERNAL MODULE: ./src/core/decorators/index.ts + 7 modules
var decorators = __webpack_require__(11169);
// EXTERNAL MODULE: ./src/modules/dialog/dialog.ts
var dialog_dialog = __webpack_require__(5204);
// EXTERNAL MODULE: ./src/modules/index.ts + 15 modules
var modules = __webpack_require__(81165);
;// CONCATENATED MODULE: ./src/plugins/google-maps/helpers/helpers.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
let jdGoogleMapsAlreadyLoaded = false;
const jdGoogleMapsOnloadHandlers = [];
function googleReady(callback) {
    if (jdGoogleMapsAlreadyLoaded) {
        callback();
    }
    else {
        jdGoogleMapsOnloadHandlers.push(callback);
    }
}
function GoogleReadyHandler() {
    jdGoogleMapsAlreadyLoaded = true;
    if (jdGoogleMapsOnloadHandlers) {
        jdGoogleMapsOnloadHandlers.forEach((callback) => callback());
    }
}
function arrayToPath(array, likePlainObject = false) {
    const path = [];
    if (Array.isArray(array)) {
        if (Array.isArray(array[0]) || Array.isArray(array[1])) {
            array.forEach((item) => {
                path.push(arrayToPath(item, likePlainObject));
            });
        }
        else {
            return !likePlainObject
                ? new google.maps.LatLng(array[0], array[1])
                : {
                    lat: array[0],
                    lng: array[1]
                };
        }
    }
    return path;
}
function pathToArray(path) {
    return path.getArray().map((p) => [p.lat(), p.lng()]);
}
function specialColor(value) {
    return value.toUpperCase().replace('#', '0x').padEnd(10, 'F');
}
function isApiAvailable() {
    return (typeof google !== 'undefined' &&
        typeof google.maps !== 'undefined' &&
        typeof google.maps.Map !== 'undefined');
}

;// CONCATENATED MODULE: ./src/plugins/google-maps/ui/map/modules/update-state-and-gme.ts

function updateStateAndGme(newState, index, silent = false) {
    const elm = this.mapElements[index];
    if (elm.state === newState || elm.state.type !== newState.type) {
        return;
    }
    const oldState = elm.state;
    if (!silent) {
        let key;
        for (key in newState) {
            const newValue = newState[key];
            const oldValue = oldState[key];
            if (newValue != null &&
                (oldValue == null ||
                    newValue.toString() !== oldValue.toString())) {
                switch (key) {
                    case 'strokeWeight':
                    case 'strokeColor':
                    case 'fillColor':
                    case 'fillOpacity':
                        switch (elm.type) {
                            case 'polyline':
                            case 'circle':
                            case 'polygon': {
                                elm.gme.setOptions({
                                    [key]: newValue
                                });
                                break;
                            }
                        }
                        break;
                    case 'coordinates':
                        switch (elm.type) {
                            case 'polygon':
                            case 'polyline': {
                                elm.gme.setPath(arrayToPath(newValue));
                                break;
                            }
                        }
                        break;
                }
            }
        }
    }
    elm.state = newState;
    this.state.elements[index] = newState;
}

// EXTERNAL MODULE: ./src/core/global.ts
var global = __webpack_require__(58299);
;// CONCATENATED MODULE: ./src/plugins/google-maps/ui/map/modules/on-change-geometries.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */


function onChangeGeometries(newElm, index) {
    var _a, _b, _c, _d;
    switch (newElm.type) {
        case 'polyline':
        case 'polygon': {
            const coordinates = pathToArray(newElm.gme.getPath()), newState = {
                ...newElm.state,
                coordinates
            };
            updateStateAndGme.call(this, newState, index, true);
            break;
        }
        case 'marker': {
            const pos = newElm.gme.getPosition(), newState = {
                ...newElm.state,
                coordinates: [(_a = pos === null || pos === void 0 ? void 0 : pos.lat()) !== null && _a !== void 0 ? _a : 0, (_b = pos === null || pos === void 0 ? void 0 : pos.lng()) !== null && _b !== void 0 ? _b : 0]
            };
            updateStateAndGme.call(this, newState, index, true);
            break;
        }
        case 'circle': {
            const pos = newElm.gme.getCenter(), newState = {
                ...newElm.state,
                radius: newElm.gme.getRadius(),
                coordinates: [(_c = pos === null || pos === void 0 ? void 0 : pos.lat()) !== null && _c !== void 0 ? _c : 0, (_d = pos === null || pos === void 0 ? void 0 : pos.lng()) !== null && _d !== void 0 ? _d : 0]
            };
            updateStateAndGme.call(this, newState, index, true);
            break;
        }
    }
}

;// CONCATENATED MODULE: ./src/plugins/google-maps/ui/wysiwyg/wysiwyg.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */






let UIWysiwyg = class UIWysiwyg extends ui/* UIElement */.u1 {
    className() {
        return 'UIWysiwyg';
    }
    constructor(jodit, options, value, onChange) {
        super(jodit);
        const wysiwyg = this.getElm('editor');
        (0,helpers.assert)(wysiwyg != null, 'editor element does not exist');
        const editor = src.Jodit.make(wysiwyg, {
            buttons: ['bold', 'italic', 'image'],
            height: 100,
            minHeight: 100,
            allowResizeY: false,
            allowResizeX: false,
            disablePlugins: [
                'mobile',
                'backup',
                'highlight-signature',
                'tune-block',
                'show-blocks'
            ],
            toolbarButtonSize: 'small',
            language: jodit.o.language,
            direction: jodit.o.direction,
            theme: jodit.o.theme,
            statusbar: false,
            ...options
        });
        editor.value = value;
        editor.e.on('change', () => onChange(editor.value));
    }
    render() {
        return `<div>
			<div class='&__label'>~Info~</div>
			<div class='&__editor'></div>
		</div>`;
    }
};
UIWysiwyg = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], UIWysiwyg);


;// CONCATENATED MODULE: ./src/plugins/google-maps/ui/editors/base.ts

class UIBaseEditor extends ui/* UIGroup */.qe {
    constructor(jodit, state, options) {
        super(jodit);
        this.state = state;
        this.options = options;
    }
    className() {
        return 'UIBaseEditor';
    }
    render() {
        return `<div>
			<div class='&__header'></div>
			<div class='&__form'></div>
			<div class='&__buttons'></div>
		</div>`;
    }
    onReady() {
        const remove = (0,ui/* Button */.zx)(this.j, 'bin').onAction(() => this.j.e.fire(this, 'bin'));
        this.append(remove, 'buttons');
    }
}

;// CONCATENATED MODULE: ./src/plugins/google-maps/ui/editors/marker/marker.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */




let UIMarkerEditor = class UIMarkerEditor extends UIBaseEditor {
    onReady() {
        var _a;
        super.onReady();
        const editor = new UIWysiwyg(this.j, this.options.googleMaps.inlineEditorOptions, (_a = this.state.text) !== null && _a !== void 0 ? _a : '', (value) => this.j.e.fire(this, 'change', 'text', value));
        this.append(editor, 'form');
    }
};
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.hook)('ready')
], UIMarkerEditor.prototype, "onReady", null);
UIMarkerEditor = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], UIMarkerEditor);


// EXTERNAL MODULE: ./src/plugins/color-picker/ui/input/color-input.ts
var color_input = __webpack_require__(4255);
;// CONCATENATED MODULE: ./src/plugins/google-maps/ui/editors/polyline/polyline.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */





let UIPolylineEditor = class UIPolylineEditor extends UIBaseEditor {
    onReady() {
        var _a, _b;
        super.onReady();
        this.append([
            new ui/* UIInput */.u3(this.j, {
                label: 'Stroke weight',
                value: (_a = this.state.strokeWeight) !== null && _a !== void 0 ? _a : 1,
                type: 'number',
                onChange: (value) => this.j.e.fire(this, 'change', 'strokeWeight', value)
            }),
            new color_input/* ColorInput */.T(this.j, {
                label: 'Stroke color',
                value: (_b = this.state.strokeColor) !== null && _b !== void 0 ? _b : '#000',
                onChange: (value) => this.j.e.fire(this, 'change', 'strokeColor', value)
            }).setMod('trigger', false)
        ], 'form');
    }
};
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.hook)('ready')
], UIPolylineEditor.prototype, "onReady", null);
UIPolylineEditor = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], UIPolylineEditor);


// EXTERNAL MODULE: ./src/core/ui/form/range/range.ts
var range = __webpack_require__(81329);
;// CONCATENATED MODULE: ./src/plugins/google-maps/ui/editors/polygon/polygon.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */





let UIPolygonEditor = class UIPolygonEditor extends UIPolylineEditor {
    onReady() {
        var _a, _b;
        this.append([
            new color_input/* ColorInput */.T(this.j, {
                label: 'Fill color',
                value: (_a = this.state.fillColor) !== null && _a !== void 0 ? _a : '#000',
                onChange: (value) => this.j.e.fire(this, 'change', 'fillColor', value)
            }).setMod('trigger', false),
            new range/* UIRange */.W(this.j, {
                label: 'Opacity',
                min: 0,
                max: 1,
                value: (_b = this.state.fillOpacity) !== null && _b !== void 0 ? _b : 1,
                onChange: (value) => {
                    this.j.e.fire(this, 'change', 'fillOpacity', parseFloat(value) || 0);
                }
            }).setMod('log', false)
        ], 'form');
    }
};
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.hook)('ready')
], UIPolygonEditor.prototype, "onReady", null);
UIPolygonEditor = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], UIPolygonEditor);


;// CONCATENATED MODULE: ./src/plugins/google-maps/ui/editors/index.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */




;// CONCATENATED MODULE: ./src/plugins/google-maps/ui/map/modules/remove-element.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
function removeElement(newElm) {
    const index = this.mapElements.indexOf(newElm);
    if (index !== -1) {
        const elm = this.mapElements[index];
        elm.gme.setMap(null);
        this.mapElements.splice(index, 1);
        this.state.elements.splice(index, 1);
        this.state.elements = [...this.state.elements];
    }
}

;// CONCATENATED MODULE: ./src/plugins/google-maps/ui/map/modules/open-props-dialog.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */



function getInfoWindow() {
    const infoWindow = new google.maps.InfoWindow({
        content: '<div>test</div>'
    });
    infoWindow.addListener('domready', () => {
        this.setMod('info-opened', true);
    });
    infoWindow.addListener('closeclick', () => {
        this.setMod('info-opened', false);
    });
    return infoWindow;
}
function openPropsDialog(newElm, index) {
    let editor;
    this.state.mode = 'hand';
    switch (newElm.type) {
        case 'polyline':
            editor = new UIPolylineEditor(this.jodit, newElm.state, this.options);
            break;
        case 'marker':
            editor = new UIMarkerEditor(this.jodit, newElm.state, this.options);
            break;
        case 'circle':
        case 'polygon':
            editor = new UIPolygonEditor(this.jodit, newElm.state, this.options);
            break;
    }
    if (!editor) {
        return;
    }
    this.append(editor);
    this.j.e
        .on(editor, 'bin', () => {
        removeElement.call(this, newElm);
    })
        .on(editor, 'change', (key, value) => {
        updateStateAndGme.call(this, {
            ...newElm.state,
            [key]: value
        }, index);
    });
    const w = getInfoWindow.call(this);
    if (newElm.type === 'polygon' || newElm.type === 'polyline') {
        const pos = newElm.gme.getPath().getAt(0);
        w.setPosition(pos);
    }
    if (newElm.type === 'circle') {
        w.setPosition(newElm.gme.getCenter());
    }
    w.setContent(editor.container);
    w.open(this.map, newElm.gme);
    w.addListener('closeclick', () => {
        if (editor) {
            this.remove(editor);
            editor.destruct();
        }
    });
}

;// CONCATENATED MODULE: ./src/plugins/google-maps/ui/map/modules/init-or-update-element-from-state.ts






function initOrUpdateElementFromState(state, index) {
    var _a;
    const elm = this.mapElements[index];
    if (elm) {
        if (elm.state.type === state.type) {
            return updateStateAndGme.call(this, state, index);
        }
        elm.gme.setMap(null);
    }
    let gme;
    switch (state.type) {
        case 'text':
            gme = new google.maps.Marker({
                position: new google.maps.LatLng(state.coordinates[0], state.coordinates[1]),
                draggable: true,
                title: state.text,
                map: this.map
            });
            break;
        case 'marker':
            gme = new google.maps.Marker({
                position: new google.maps.LatLng(state.coordinates[0], state.coordinates[1]),
                draggable: true,
                label: state.showCaption ? state.title : '',
                title: state.title,
                icon: state.icon ? ui/* Icon.get */.JO.get(state.icon) : null,
                map: this.map
            });
            break;
        case 'polyline':
        case 'polygon':
            {
                const coordinates = arrayToPath(state.coordinates);
                gme = new google.maps[state.type === 'polygon' ? 'Polygon' : 'Polyline']({
                    path: coordinates,
                    strokeColor: state.strokeColor,
                    fillColor: state.fillColor,
                    strokeWeight: state.strokeWeight,
                    editable: true,
                    draggable: true,
                    map: this.map,
                    fillOpacity: state.type === 'polygon' ? state.fillOpacity : 1
                });
            }
            break;
        case 'circle':
            gme = new google.maps.Circle({
                center: new google.maps.LatLng(state.coordinates[0], state.coordinates[1]),
                radius: state.radius,
                strokeColor: state.strokeColor,
                fillColor: state.fillColor,
                strokeWeight: state.strokeWeight,
                editable: true,
                draggable: true,
                map: this.map,
                fillOpacity: (_a = state.fillOpacity) !== null && _a !== void 0 ? _a : 1
            });
            break;
    }
    const newElm = {
        type: state.type,
        uid: (0,global/* uniqueUid */.fe)(),
        state,
        gme
    };
    'dragend radius_changed center_changed'
        .split(' ')
        .forEach((event) => gme.addListener(event, () => onChangeGeometries.call(this, newElm, index)));
    if (newElm.type === 'polygon' || newElm.type === 'polyline') {
        'insert_at set_at remove_at'
            .split(' ')
            .forEach((event) => newElm.gme
            .getPath()
            .addListener(event, () => onChangeGeometries.call(this, newElm, index)));
    }
    gme.addListener('click', () => openPropsDialog.call(this, newElm, index));
    this.mapElements[index] = newElm;
}

;// CONCATENATED MODULE: ./src/plugins/google-maps/ui/map/modules/add-new-in-state.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

function addNewInState(mvc) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    switch (this.state.mode) {
        case 'polyline':
        case 'polygon': {
            const { mode } = this.state;
            this.state.elements = [
                ...this.state.elements,
                {
                    type: mode,
                    coordinates: pathToArray(mvc.getPath()),
                    ...this.options.googleMaps.map.defaultStates[mode]
                }
            ];
            break;
        }
        case 'circle': {
            const circle = mvc;
            this.state.elements = [
                ...this.state.elements,
                {
                    type: this.state.mode,
                    coordinates: [
                        (_b = (_a = circle.getCenter()) === null || _a === void 0 ? void 0 : _a.lat()) !== null && _b !== void 0 ? _b : 0,
                        (_d = (_c = circle.getCenter()) === null || _c === void 0 ? void 0 : _c.lng()) !== null && _d !== void 0 ? _d : 0
                    ],
                    radius: circle.getRadius(),
                    ...this.options.googleMaps.map.defaultStates.circle
                }
            ];
            break;
        }
        case 'marker': {
            const marker = mvc;
            this.state.elements = [
                ...this.state.elements,
                {
                    type: this.state.mode,
                    coordinates: [
                        (_f = (_e = marker.getPosition()) === null || _e === void 0 ? void 0 : _e.lat()) !== null && _f !== void 0 ? _f : 0,
                        (_h = (_g = marker.getPosition()) === null || _g === void 0 ? void 0 : _g.lng()) !== null && _h !== void 0 ? _h : 0
                    ],
                    ...this.options.googleMaps.map.defaultStates.marker
                }
            ];
            break;
        }
    }
}

;// CONCATENATED MODULE: ./src/plugins/google-maps/ui/map/modules/index.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */






;// CONCATENATED MODULE: ./src/plugins/google-maps/ui/map/map.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */












class UIMap extends ui/* UIGroup */.qe {
    constructor(jodit, state, options) {
        super(jodit);
        this.options = options;
        this.toolbar = new modules.ToolbarCollection(this.jodit);
        this.state = {
            uid: 'jd' + (0,global/* uniqueUid */.fe)() + new Date().toString().replace(/[^0-9]/g, ''),
            layer: this.options.googleMaps.map.layer,
            center: this.options.googleMaps.map.defaultCenter,
            zoom: this.options.googleMaps.map.defaultZoom,
            size: this.options.googleMaps.map.size,
            type: this.options.googleMaps.map.type,
            controls: {
                zoomControl: true,
                mapTypeControl: true,
                scaleControl: true,
                streetViewControl: true,
                rotateControl: true,
                fullscreenControl: true
            },
            mode: 'hand',
            elements: []
        };
        this.mapElements = [];
        this.apiLoaded = null;
        this.mapInitialized = false;
        this.layers = [];
        Object.assign(this.state, state);
        this.toolbar.build([
            'gm.hand',
            'gm.marker',
            'gm.polyline',
            'gm.polygon',
            'gm.circle'
        ]);
        const palette = this.getElm('map-palette');
        (0,helpers.assert)(palette != null, 'palette element does not exists');
        palette.appendChild(this.toolbar.container);
    }
    className() {
        return 'UIMap';
    }
    json() {
        return JSON.stringify({ ...this.state, mode: 'hand' });
    }
    async onReady() {
        await this.apiLoaded;
        const container = this.getElm('map-root');
        (0,helpers.assert)(container != null, 'map-root element does not exists');
        this.map = new google.maps.Map(container, {
            center: { lat: this.state.center[0], lng: this.state.center[1] },
            zoom: this.state.zoom,
            mapTypeId: this.state.type
        });
        this.map.addListener('zoom_changed', () => {
            var _a;
            this.state.zoom = (_a = this.map.getZoom()) !== null && _a !== void 0 ? _a : 10;
        });
        this.map.addListener('center_changed', () => {
            var _a, _b, _c, _d, _e, _f;
            this.state.center = [
                (_c = (_b = (_a = this.map) === null || _a === void 0 ? void 0 : _a.getCenter()) === null || _b === void 0 ? void 0 : _b.lat()) !== null && _c !== void 0 ? _c : 55,
                (_f = (_e = (_d = this.map) === null || _d === void 0 ? void 0 : _d.getCenter()) === null || _e === void 0 ? void 0 : _e.lng()) !== null && _f !== void 0 ? _f : 34
            ];
        });
        this.map.addListener('maptypeid_changed', () => {
            const type = this.map.getMapTypeId();
            if (type) {
                this.state.type = type;
            }
        });
        this.initDrawManager();
        this.onChangeElementsList();
        this.onChangeSize();
        this.onChangeControls();
        this.onChangeLayer();
        this.onChangeMapType();
        this.onChangeMode();
        this.mapInitialized = true;
        this.j.async.requestIdleCallback(() => {
            this.j.e.fire(this, 'GoogleMapsIsReady');
        });
    }
    initDrawManager() {
        try {
            const drawingManager = new google.maps.drawing.DrawingManager();
            drawingManager.setMap(this.map);
            drawingManager.setOptions({
                drawingControl: false,
                polygonOptions: {
                    ...this.options.googleMaps.map.defaultStates.polygon,
                    clickable: true,
                    editable: true
                },
                polylineOptions: {
                    ...this.options.googleMaps.map.defaultStates.polyline,
                    clickable: true,
                    editable: true
                },
                markerOptions: {
                    ...this.options.googleMaps.map.defaultStates.marker,
                    clickable: true
                },
                circleOptions: {
                    ...this.options.googleMaps.map.defaultStates.circle,
                    clickable: true,
                    editable: true
                }
            });
            this.drawingManager = drawingManager;
            google.maps.event.addListener(drawingManager, 'overlaycomplete', (event) => {
                if (event.overlay) {
                    addNewInState.call(this, event.overlay);
                    event.overlay.setMap(null);
                }
            });
        }
        catch (_a) { }
    }
    changeCreateMode(mode) {
        this.state.mode = this.state.mode === mode ? 'hand' : mode;
    }
    onChangeMode() {
        var _a;
        this.j.buffer.set('createMode.gm', this.state.mode);
        (_a = this.drawingManager) === null || _a === void 0 ? void 0 : _a.setDrawingMode(this.state.mode === 'hand'
            ? null
            : this.state.mode);
        this.j.e.fire('updateToolbar');
    }
    onChangeElementsList() {
        const { state: { elements }, mapElements } = this;
        if (elements.length < mapElements.length) {
            mapElements.slice(elements.length).forEach((elm) => {
                elm.gme.setMap(null);
            });
        }
        mapElements.length = elements.length;
        elements.forEach((state, index) => initOrUpdateElementFromState.call(this, state, index));
    }
    onChangeCenter() {
        const center = this.map.getCenter();
        if ((center === null || center === void 0 ? void 0 : center.lat()) !== this.state.center[0] ||
            (center === null || center === void 0 ? void 0 : center.lng()) !== this.state.center[1]) {
            this.map.setCenter({
                lat: this.state.center[0],
                lng: this.state.center[1]
            });
        }
    }
    onChangeZoom() {
        var _a;
        (_a = this.map) === null || _a === void 0 ? void 0 : _a.setZoom(this.state.zoom);
    }
    onChangeControls() {
        var _a;
        let key;
        for (key in this.state.controls) {
            (_a = this.map) === null || _a === void 0 ? void 0 : _a.set(key, this.state.controls[key]);
        }
    }
    onChangeBound() {
        this.options.googleMaps.saveStateInStorage &&
            this.j.storage.set(STORAGE_KEY, {
                center: this.state.center,
                size: this.state.size,
                zoom: this.state.zoom,
                type: this.state.type,
                layer: this.state.layer,
                controls: this.state.controls
            });
    }
    onChangeSize() {
        const mapSize = this.getElm('map-size');
        (0,helpers.assert)(mapSize != null, 'map-size element does not exists');
        (0,helpers.css)(mapSize, {
            width: this.state.size[0],
            height: this.state.size[1]
        });
    }
    onChangeMapType() {
        this.map.setMapTypeId(this.state.type);
    }
    onChangeLayer() {
        this.layers.forEach((layer) => layer.setMap(null));
        this.layers.length = 0;
        switch (this.state.layer) {
            case 'traffic':
                this.layers.push(new google.maps.TrafficLayer());
                break;
            case 'transit':
                this.layers.push(new google.maps.TransitLayer());
                break;
            case 'bicycling':
                this.layers.push(new google.maps.BicyclingLayer());
                break;
        }
        this.layers.forEach((layer) => layer.setMap(this.map));
    }
    render() {
        return `<div>
			<div class='&__map-root'></div>
			<div class='&__map-size'></div>
			<div class='&__map-palette'></div>
		</div>`;
    }
    appendChildToContainer() { }
}
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.hook)('ready')
], UIMap.prototype, "onReady", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('?:changeCreateMode.gm')
], UIMap.prototype, "changeCreateMode", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.mode')
], UIMap.prototype, "onChangeMode", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.elements')
], UIMap.prototype, "onChangeElementsList", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.center'),
    (0,decorators.wait)((ctx) => ctx.mapInitialized),
    (0,decorators.debounce)()
], UIMap.prototype, "onChangeCenter", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.zoom'),
    (0,decorators.debounce)()
], UIMap.prototype, "onChangeZoom", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.controls')
], UIMap.prototype, "onChangeControls", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)([
        'state.center',
        'state.zoom',
        'state.controls',
        'state.size',
        'state.type',
        'state.layer'
    ]),
    (0,decorators.wait)((ctx) => ctx.mapInitialized),
    (0,decorators.debounce)()
], UIMap.prototype, "onChangeBound", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.size'),
    (0,decorators.debounce)()
], UIMap.prototype, "onChangeSize", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.type')
], UIMap.prototype, "onChangeMapType", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.layer')
], UIMap.prototype, "onChangeLayer", null);

;// CONCATENATED MODULE: ./src/plugins/google-maps/ui/maps-props/maps-props.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */





let UIMapsPropsForm = class UIMapsPropsForm extends ui/* UIForm */.x4 {
    constructor(jodit, state) {
        var _a;
        super(jodit);
        this.state = state;
        const [w, h] = state.size;
        const [x, y] = state.center;
        this.append([
            new ui/* UIInput */.u3(jodit, {
                label: 'Width',
                name: 'width',
                value: w,
                type: 'number',
                onChange: this.onChangeSize
            }),
            new ui/* UIInput */.u3(jodit, {
                label: 'Height',
                name: 'height',
                value: h,
                type: 'number',
                onChange: this.onChangeSize
            }),
            new ui/* UIInput */.u3(jodit, {
                label: 'Latitude',
                name: 'lat',
                value: x,
                onChange: this.onChangeCenter
            }),
            new ui/* UIInput */.u3(jodit, {
                label: 'Longitude',
                name: 'lng',
                value: y,
                onChange: this.onChangeCenter
            }),
            new ui/* UISelect */.Cj(jodit, {
                label: 'Map type',
                value: state.type,
                name: 'mapType',
                options: [
                    { value: 'hybrid', text: 'Hybrid' },
                    { value: 'roadmap', text: 'Roadmap' },
                    { value: 'satellite', text: 'Satellite' },
                    { value: 'terrain', text: 'Terrain' }
                ],
                onChange: (value) => {
                    state.type = value;
                }
            }),
            new ui/* UISelect */.Cj(jodit, {
                label: 'Layer',
                value: (_a = state.layer) !== null && _a !== void 0 ? _a : 'default',
                name: 'layer',
                options: [
                    { value: 'default', text: 'Default' },
                    { value: 'traffic', text: 'Traffic' },
                    { value: 'transit', text: 'Transit' },
                    { value: 'bicycling', text: 'Bicycling' }
                ],
                onChange: (value) => {
                    state.layer = value;
                }
            })
        ]);
    }
    className() {
        return 'UIMapsPropsForm';
    }
    onChangeSize() {
        const { width, height } = (0,helpers.refs)(this);
        this.state.size = [
            parseInt(width === null || width === void 0 ? void 0 : width.value, 10) || 0,
            parseInt(height === null || height === void 0 ? void 0 : height.value, 10) || 0
        ];
    }
    onExternalChangeSize() {
        const { width, height } = (0,helpers.refs)(this);
        const [w, h] = this.state.size;
        if (w.toString() !== width.value) {
            width.value = w.toString();
        }
        if (h.toString() !== height.value) {
            height.value = h.toString();
        }
    }
    onChangeCenter() {
        const { lat, lng } = (0,helpers.refs)(this);
        this.state.center = [
            parseFloat(lat === null || lat === void 0 ? void 0 : lat.value) || 0,
            parseFloat(lng === null || lng === void 0 ? void 0 : lng.value) || 0
        ];
    }
    onExternalChangeCenter() {
        const { lat, lng } = (0,helpers.refs)(this);
        const [x, y] = this.state.center;
        if (x.toString() !== lat.value) {
            lat.value = x.toString();
        }
        if (y.toString() !== lng.value) {
            lng.value = y.toString();
        }
    }
    onExternalChangeType() {
        const { mapType } = (0,helpers.refs)(this);
        if (this.state.type !== mapType.value) {
            mapType.value = this.state.type;
        }
    }
    onExternalChangeLayer() {
        const { layer } = (0,helpers.refs)(this);
        if (this.state.layer !== layer.value) {
            layer.value = this.state.layer;
        }
    }
};
(0,tslib_es6/* __decorate */.gn)([
    decorators.autobind
], UIMapsPropsForm.prototype, "onChangeSize", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.size')
], UIMapsPropsForm.prototype, "onExternalChangeSize", null);
(0,tslib_es6/* __decorate */.gn)([
    decorators.autobind
], UIMapsPropsForm.prototype, "onChangeCenter", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(['state.center'])
], UIMapsPropsForm.prototype, "onExternalChangeCenter", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(['state.type'])
], UIMapsPropsForm.prototype, "onExternalChangeType", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(['state.layer'])
], UIMapsPropsForm.prototype, "onExternalChangeLayer", null);
UIMapsPropsForm = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], UIMapsPropsForm);


;// CONCATENATED MODULE: ./src/plugins/google-maps/ui/maps-controls/maps-controls.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */




let UIMapsControlsForm = class UIMapsControlsForm extends ui/* UIForm */.x4 {
    constructor(jodit, state) {
        super(jodit);
        this.state = state;
        const controlsNames = {
            zoomControl: 'Zoom control',
            mapTypeControl: 'Map Type control',
            scaleControl: 'Scale control',
            streetViewControl: 'Street View control ',
            rotateControl: 'Rotate control',
            fullscreenControl: 'Fullscreen control'
        };
        const controls = Object.keys(controlsNames);
        this.append(controls.map((key) => new ui/* UICheckbox */.mA(jodit, {
            label: controlsNames[key],
            name: key,
            checked: this.state.controls[key],
            switch: true,
            type: 'checkbox',
            onChange: this.onChangeSize.bind(this, key)
        })));
    }
    className() {
        return 'UIMapsControlsForm';
    }
    onChangeSize(key, value) {
        this.state.controls = {
            ...this.state.controls,
            [key]: value === 'true'
        };
    }
};
UIMapsControlsForm = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], UIMapsControlsForm);


;// CONCATENATED MODULE: ./src/plugins/google-maps/ui/index.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */






;// CONCATENATED MODULE: ./src/plugins/google-maps/helpers/generate-static-elements.ts


function generateStaticElements(uiMap) {
    return uiMap.state.elements
        .map(elm => {
        var _a, _b, _c, _d, _e, _f;
        switch (elm.type) {
            case 'polygon':
                return `&path=fillcolor:${specialColor((_a = elm.fillColor) !== null && _a !== void 0 ? _a : '#fff')}%7Cweight:${(_b = elm.strokeWeight) !== null && _b !== void 0 ? _b : 1}%7Ccolor:${specialColor((_c = elm.strokeColor) !== null && _c !== void 0 ? _c : '#fff')}%7Cenc:${google.maps.geometry.encoding.encodePath(arrayToPath(elm.coordinates))}`;
            case 'polyline':
                return `&path=weight:${(_d = elm.strokeWeight) !== null && _d !== void 0 ? _d : 1}%7Ccolor:${specialColor((_e = elm.strokeColor) !== null && _e !== void 0 ? _e : '#fff')}%7Cenc:${google.maps.geometry.encoding.encodePath(arrayToPath(elm.coordinates))}`;
            case 'marker':
                return `&markers=color:blue%7Clabel:${encodeURIComponent((0,helpers.stripTags)((_f = elm.text) !== null && _f !== void 0 ? _f : '')
                    .charAt(0)
                    .toUpperCase())}%7C${elm.coordinates}`;
        }
        return '';
    })
        .join('');
}

;// CONCATENATED MODULE: ./src/plugins/google-maps/helpers/static-url.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

function staticUrl(uiMap) {
    const { state } = uiMap;
    return (`https://maps.googleapis.com/maps/api/staticmap?center=${state.center.join(',')}` +
        `&zoom=${state.zoom}` +
        `&size=${state.size.join('x')}` +
        `&maptype=${state.type}` +
        `&key=${uiMap.options.googleMaps.API_KEY}` +
        generateStaticElements(uiMap));
}

;// CONCATENATED MODULE: ./src/plugins/google-maps/ui/combo-box/combo-box.ts




class UIComboBox extends ui/* UIInput */.u3 {
    className() {
        return 'UIComboBox';
    }
    onReady() {
        const autocomplete = new google.maps.places.Autocomplete(this.nativeInput, {
            fields: ['address_components', 'geometry', 'name'],
            types: ['geocode']
        });
        autocomplete.addListener('place_changed', () => {
            var _a, _b;
            const place = autocomplete.getPlace();
            this.j.e.fire(this, 'select', (_a = place.geometry) === null || _a === void 0 ? void 0 : _a.location, (_b = place.geometry) === null || _b === void 0 ? void 0 : _b.viewport);
        });
    }
    async onInput() {
    }
}
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.hook)('ready')
], UIComboBox.prototype, "onReady", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('nativeInput:input'),
    (0,decorators.debounce)()
], UIComboBox.prototype, "onInput", null);

;// CONCATENATED MODULE: ./src/plugins/google-maps/helpers/generate-js-script.ts

function generateJSScript(jodit, state) {
    return `<${'script'} class="jodit-google-maps-init" type="text/javascript">
		var imgMap = document.getElementById('${state.uid}'),
			box = document.createElement('div'),
			mapBox = document.createElement('div'),
			parentBox = imgMap && imgMap.parentNode,
			assign = Object.assign || function (a, b) {
				return Object.keys(b).reduce(function(acc, key) {
					acc[key] = b[key];
					return acc;
				}, a)
			};

		box.id = 'b${state.uid}';
		parentBox ? parentBox.insertBefore(box, imgMap) : document.body.appendChild(box);
		imgMap && box.appendChild(imgMap);
		box.appendChild(mapBox);

		if (parentBox && parentBox.style.textAlign === 'center') {
			parentBox.style.margin = '0 auto';
		}

		box.style.cssText = imgMap.style.cssText;
		box.className = imgMap.className;

		var w = (imgMap && imgMap.offsetWidth) || ${state.size[0]},
				h = (imgMap && imgMap.offsetHeight) || ${state.size[1]};

		assign(box.style, {
			display: !imgMap.style.cssText ? 'inline-block' : undefined,
			width: w + 'px',
			height: h + 'px',
			position: 'relative'
		});

		assign(mapBox.style, {
			width: w + 'px',
			height: h + 'px',
			position: 'absolute',
			left: 0,
			top: 0
		});

		function CreateGMap${state.uid}() {
			if (!mapBox) {
				return;
			}

			var map = new google.maps.Map(mapBox, assign({
				zoom: ${state.zoom},
				center: { lat: ${state.center[0]}, lng: ${state.center[1]}},
				mapType: '${state.type}'
			}, ${JSON.stringify(state.controls)}));

			if (${state.layer !== 'default'}) {
				new google.maps.${(0,helpers.ucfirst)(state.layer)}Layer().setMap(map);
			}

			var infoWindow = new google.maps.InfoWindow();

			${JSON.stringify(state.elements)}.forEach(function (elm) {
				switch (elm.type) {
					case 'marker': {
						var obj = (new google.maps.Marker({
							position: {lat: elm.coordinates[0], lng: elm.coordinates[1]},
							map: map,
							title: elm.title
						}));

						elm.text && obj.addListener('click', function () {
							infoWindow.setContent(elm.text);
							infoWindow.open(map, this);
						});
						break;
					}

					case 'circle': {
						(new google.maps.Circle({
							center: {lat: elm.coordinates[0], lng: elm.coordinates[1]},
							radius: elm.radius,
							strokeColor: elm.strokeColor,
							fillColor: elm.fillColor,
							strokeWeight: elm.strokeWeight,
							fillOpacity: elm.fillOpacity,
							map: map,
						}));
						break;
					}

					case 'polygon':
					case 'polyline': {
						function toPath(array) {
							return array.map(function (item) {
								if (Array.isArray(item[0])) {
									return toPath(item);
								}

								return {lat: item[0], lng: item[1]};
							})
						}

						(new google.maps[elm.type === 'polyline' ? 'Polyline' : 'Polygon']({
							path: toPath(elm.coordinates),
							strokeColor: elm.strokeColor,
							fillColor: elm.fillColor,
							strokeWeight: elm.strokeWeight,
							fillOpacity: elm.fillOpacity,
							map: map,
						}));
						break;
					}
				}
			})
		}

		if (typeof google !== 'undefined' && typeof google.maps !=='undefined' && typeof google.maps.Map !== 'undefined') {
			CreateGMap${state.uid}();
		} else {
			var scr = document.createElement('script');
			scr.src = 'https://maps.googleapis.com/maps/api/js?key=${jodit.o.googleMaps.API_KEY}&language=${jodit.o.language}&callback=CreateGMap${state.uid}';
			document.appendChild(scr);
		}
		/*]]>*/</${'script'}>`.replace(/[\n\t]+/g, '');
}

;// CONCATENATED MODULE: ./src/plugins/google-maps/google-maps.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */


















window['JoditGoogleReadyHandler'] = GoogleReadyHandler;
class googleMaps extends core_plugin/* Plugin */.S {
    constructor() {
        super(...arguments);
        this.requires = ['license', 'color-picker'];
        this.buttons = [
            { group: 'media', name: 'googleMaps' }
        ];
        this.dialog = null;
    }
    className() {
        return 'google-maps';
    }
    afterInit(jodit) {
        jodit.registerCommand(COMMAND_OPEN_DIALOG, () => {
            void this.openMapEditor(null, {});
        });
    }
    beforeDestruct(jodit) { }
    onOpenOnDblClick(image) {
        if (image.dataset.googleMaps) {
            let json;
            try {
                json = JSON.parse(this.j.ow.atob(image.dataset.googleMaps));
            }
            catch (_a) { }
            void this.openMapEditor(image, json);
            return false;
        }
    }
    async openMapEditor(target, initialState) {
        const jodit = this.j;
        const dialog = this.getDialog();
        const state = this.j.o.googleMaps.saveStateInStorage
            ? dialog.storage.get(STORAGE_KEY)
            : undefined;
        const { apiUrl } = this.jodit.o.googleMaps;
        if (!isApiAvailable()) {
            void (0,helpers.appendScriptAsync)(this.jodit, apiUrl.replace(/\${([^}]+)}/g, (_, key) => { var _a; return (_a = this.get(key)) !== null && _a !== void 0 ? _a : ''; }));
        }
        const openState = {
            type: this.j.o.googleMaps.map.type,
            layer: this.j.o.googleMaps.map.layer,
            size: this.j.o.googleMaps.map.size,
            ...state,
            ...initialState
        };
        const uiMap = new UIMap(dialog, openState, this.j.options);
        uiMap.container.classList.add(dialog.getFullElName('map'));
        const search = new UIComboBox(jodit, {
            icon: 'search',
            placeholder: 'Search',
            clearButton: true
        }).setMod('in-header', true);
        search.container.classList.add(dialog.getFullElName('search'));
        this.j.async
            .promise((resolve) => {
            if (isApiAvailable()) {
                resolve(0);
                return;
            }
            const intervalChecker = () => {
                if (isApiAvailable()) {
                    resolve(0);
                }
                else {
                    this.j.async.setTimeout(intervalChecker, 100);
                }
            };
            intervalChecker();
            googleReady(resolve);
        })
            .then(() => {
            uiMap.setStatus('ready');
            search.setStatus('ready');
        });
        this.j.e.on(search, 'select', (marker, bound) => {
            if (bound) {
                uiMap.map.fitBounds(bound);
                return;
            }
            if (marker) {
                uiMap.state.center = [marker.lat(), marker.lng()];
            }
        });
        if (!state) {
            if (this.j.o.googleMaps.map.center === 'auto') {
                navigator.geolocation.getCurrentPosition((position) => {
                    uiMap.state.center = [
                        position.coords.latitude,
                        position.coords.longitude
                    ];
                }, () => {
                    uiMap.state.center =
                        this.j.o.googleMaps.map.defaultCenter;
                });
            }
            else {
                uiMap.state.center = this.j.o.googleMaps.map.center;
            }
        }
        dialog
            .setSize(...jodit.o.googleMaps.dialog.size)
            .setHeader([
            search,
            '&nbsp;',
            (0,ui_button/* Button */.zx)(jodit, 'eye').onAction(() => {
                const image = this.jodit.createInside.element('img');
                image.src = staticUrl(uiMap);
                image.dataset.googleMaps = btoa(uiMap.json());
                const data = { value: image.outerHTML };
                this.onAfterGetValueFromEditor(data);
                jodit.execCommand('preview', null, data.value);
            })
        ])
            .setContent((0,widget/* TabsWidget */.IL)(jodit, [
            {
                name: 'Map',
                icon: 'map',
                content: uiMap
            },
            {
                name: 'Settings',
                content: new UIMapsPropsForm(jodit, uiMap.state)
            },
            {
                name: 'Controls',
                icon: 'menu',
                content: new UIMapsControlsForm(jodit, uiMap.state)
            }
        ]))
            .setFooter([
            (0,ui_button/* Button */.zx)(jodit, 'cancel', 'Cancel', 'default').onAction(() => dialog.close()),
            (0,ui_button/* Button */.zx)(jodit, 'ok', target ? 'Save' : 'Insert', 'primary').onAction(() => {
                uiMap.destruct();
                search.destruct();
                dialog.e.off('beforeClose', onCLose);
                dialog.close();
                this.insertMap(target, uiMap);
            })
        ])
            .open();
        const onCLose = () => {
            if (uiMap.state.elements.length &&
                JSON.stringify(uiMap.state.elements) !==
                    JSON.stringify(openState.elements)) {
                if ( true && !confirm(this.i18n('Are you sure?'))) {
                    return false;
                }
            }
            uiMap.destruct();
            search.destruct();
            dialog.e.off('beforeClose', onCLose);
        };
        dialog.e.on('beforeClose', onCLose);
    }
    getDialog() {
        if (!this.dialog) {
            const dialog = new dialog_dialog/* Dialog */.V({
                language: this.j.o.language
            });
            dialog.container.classList.add(this.getFullElName(''));
            this.dialog = dialog;
        }
        return this.dialog;
    }
    insertMap(target, uiMap) {
        const image = target !== null && target !== void 0 ? target : this.jodit.createInside.element('img');
        image.src = staticUrl(uiMap);
        image.dataset.googleMaps = btoa(uiMap.json());
        target || this.jodit.s.insertImage(image);
    }
    onBeforeSetNativeEditorValue(data) {
        data.value = data.value.replace(/<script[^>]+jodit-google-maps-init[^>]+>.*?<\/script>/gs, '');
    }
    onAfterGetValueFromEditor(data, consumer) {
        if (this.j.o.googleMaps.useStaticImage ||
            consumer === constants.SOURCE_CONSUMER) {
            return;
        }
        data.value = data.value.replace(/(<img[^>]+)(["']?)data-google-maps\2\s*=(["'])([^"']+)\3([^>]*>)/gs, (_, _1, q, q2, jsonB64, rest) => {
            let json = {};
            try {
                json = JSON.parse(this.j.ow.atob(jsonB64));
            }
            catch (_a) { }
            return `${_1} id="${json.uid}" ${q}data-google-maps${q}=${q2}${jsonB64}${q2}${rest}${generateJSScript(this.j, json)}`;
        });
    }
}
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('?:openOnDblClick')
], googleMaps.prototype, "onOpenOnDblClick", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':beforeSetNativeEditorValue')
], googleMaps.prototype, "onBeforeSetNativeEditorValue", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':afterGetValueFromEditor')
], googleMaps.prototype, "onAfterGetValueFromEditor", null);
src.Jodit.plugins.add('google-maps', googleMaps);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(37209));
/******/ return __webpack_exports__;
/******/ }
]);
});