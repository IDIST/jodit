/*!
 * idist-jodit - Jodit is awesome and usefully wysiwyg editor with filebrowser
 * Author: KimSunWook <ceo@idist.ai> (https://xdsoft.net/)
 * Version: v3.20.4
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
return (self["webpackChunkidist_jodit"] = self["webpackChunkidist_jodit"] || []).push([[876],{

/***/ 92778:
/***/ (function(module) {

module.exports = "<svg viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"> <g> <rect rx=\"10\" height=\"1620\" width=\"1620\" y=\"79.646973\" x=\"80\" stroke-width=\"100\" stroke-dasharray=\"8% 10%\" fill=\"none\"/> <path d=\"m1333.992706,381.692384l0,52.982419q0,21.04781 -12.98052,44.272981t-29.820114,23.22517q-35.082487,0 -37.889085,0.725787q-18.242893,4.354719 -22.452791,22.499384q-2.104949,7.983652 -2.104949,46.45034l0,836.106125q0,18.144664 -12.629695,31.208822t-30.170938,13.064158l-75.778171,0q-17.541243,0 -30.170938,-13.064158t-12.629695,-31.208822l0,-884.008038l-100.335911,0l0,884.008038q0,18.144664 -12.27887,31.208822t-30.521763,13.064158l-75.778171,0q-18.242893,0 -30.521763,-13.064158t-12.27887,-31.208822l0,-359.990137q-103.14251,-8.709439 -171.904184,-42.821407q-88.407866,-42.095621 -134.716748,-129.915795q-44.905583,-84.917028 -44.905583,-187.978721q0,-120.48057 61.745176,-207.574958q61.745176,-85.642815 146.644794,-115.400064q77.88312,-26.854103 292.587937,-26.854103l336.090221,0q17.541243,0 30.170938,13.064158t12.629695,31.208822z\"/> </g> </svg>"

/***/ }),

/***/ 88612:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var config_1 = __webpack_require__(27537);
config_1.Config.prototype.showBlocks = {
    enable: false,
    color: '#ccc',
    tagList: [
        'html',
        'body',
        'div',
        'span',
        'applet',
        'object',
        'iframe',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'blockquote',
        'pre',
        'a',
        'abbr',
        'acronym',
        'address',
        'big',
        'cite',
        'code',
        'del',
        'dfn',
        'em',
        'img',
        'ins',
        'kbd',
        'q',
        's',
        'samp',
        'small',
        'strike',
        'strong',
        'sub',
        'sup',
        'tt',
        'var',
        'b',
        'u',
        'i',
        'center',
        'dl',
        'dt',
        'dd',
        'fieldset',
        'form',
        'label',
        'legend',
        'caption',
        'th',
        'td',
        'li',
        'ol',
        'ul',
        'article',
        'aside',
        'canvas',
        'details',
        'embed',
        'figure',
        'figcaption',
        'footer',
        'header',
        'hgroup',
        'menu',
        'nav',
        'output',
        'ruby',
        'section',
        'summary',
        'time',
        'mark',
        'audio',
        'video'
    ]
};
config_1.Config.prototype.controls.showBlocks = {
    isActive: function (editor) {
        return Boolean(editor.e.fire('showBlocksEnabled'));
    },
    tooltip: 'Show Blocks',
    command: 'toggleShowBlocks'
};


/***/ }),

/***/ 36336:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.zh_tw = exports.zh_cn = exports.tr = exports.ru = exports.pt_br = exports.pl = exports.nl = exports.ko = exports.ja = exports.it = exports.id = exports.hu = exports.he = exports.fr = exports.fa = exports.es = exports.de = exports.cs_cz = exports.ar = void 0;
var ar = __webpack_require__(96551);
exports.ar = ar;
var cs_cz = __webpack_require__(26464);
exports.cs_cz = cs_cz;
var de = __webpack_require__(7896);
exports.de = de;
var es = __webpack_require__(44660);
exports.es = es;
var fa = __webpack_require__(12990);
exports.fa = fa;
var fr = __webpack_require__(10187);
exports.fr = fr;
var he = __webpack_require__(7834);
exports.he = he;
var hu = __webpack_require__(46788);
exports.hu = hu;
var id = __webpack_require__(79955);
exports.id = id;
var it = __webpack_require__(48343);
exports.it = it;
var ja = __webpack_require__(8449);
exports.ja = ja;
var ko = __webpack_require__(36777);
exports.ko = ko;
var nl = __webpack_require__(27705);
exports.nl = nl;
var pl = __webpack_require__(7450);
exports.pl = pl;
var pt_br = __webpack_require__(17454);
exports.pt_br = pt_br;
var ru = __webpack_require__(48013);
exports.ru = ru;
var tr = __webpack_require__(47766);
exports.tr = tr;
var zh_cn = __webpack_require__(70198);
exports.zh_cn = zh_cn;
var zh_tw = __webpack_require__(50756);
exports.zh_tw = zh_tw;


/***/ }),

/***/ 45762:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.showBlocks = void 0;
var tslib_1 = __webpack_require__(20255);
__webpack_require__(88612);
var plugin_1 = __webpack_require__(35570);
var modules_1 = __webpack_require__(46701);
var ui_1 = __webpack_require__(14153);
var global_1 = __webpack_require__(58299);
var decorators_1 = __webpack_require__(9901);
var index_1 = __webpack_require__(78460);
function svgToUrl(svg) {
    return "data:image/svg+xml;utf8,".concat(escape(svg));
}
var showBlocks = (function (_super) {
    tslib_1.__extends(showBlocks, _super);
    function showBlocks(jodit) {
        var _this = _super.call(this, jodit) || this;
        _this.requires = ['license'];
        _this.buttons = [
            {
                name: 'showBlocks',
                group: 'state'
            }
        ];
        _this.isEnabled = false;
        (0, global_1.extendLang)(__webpack_require__(36336));
        ui_1.Icon.set('showBlocks', __webpack_require__(92778));
        return _this;
    }
    showBlocks.prototype.enable = function () {
        var _this = this;
        this.isEnabled = true;
        var root = this.j.o.iframe ? 'body' : '.jodit-wysiwyg';
        var _a = this.j.o.showBlocks, tagList = _a.tagList, color = _a.color;
        this.style.innerHTML = tagList
            .map(function (tag) { return "".concat(root, " ").concat(tag, "{\n\t\t\t\t\toutline: 1px dashed ").concat(color, ";\n\t\t\t\t\tbackground-image: url(\"").concat(svgToUrl('<svg xmlns="http://www.w3.org/2000/svg" width="50px">' +
            '<text dominant-baseline="hanging" text-anchor="end" style="fill: ' +
            color +
            ';font: 10px sans-serif" x="50px" y="0">' +
            tag +
            '</text>' +
            '</svg>'), "\");\n\t\t\t\t\tbackground-position: top 2px ").concat(_this.j.o.direction === 'rtl' ? 'left' : 'right', " 4px;\n\t\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\t\tposition: relative;\n\t\t\t\t}"); })
            .join('');
    };
    showBlocks.prototype.disable = function () {
        this.isEnabled = false;
        this.style.innerHTML = '';
    };
    showBlocks.prototype.toggle = function () {
        this.isEnabled ? this.disable() : this.enable();
        this.j.e.fire('updateToolbar');
    };
    showBlocks.prototype.afterInit = function (jodit) {
        var _this = this;
        this.style = (0, global_1.getContainer)(jodit, showBlocks, 'style', true);
        jodit.e.on('showBlocksEnabled', function () { return _this.isEnabled; });
        jodit
            .registerCommand('enableShowBlocks', this.enable)
            .registerCommand('disableShowBlocks', this.disable)
            .registerCommand('toggleShowBlocks', this.toggle);
        if (this.j.o.showBlocks.enable) {
            this.enable();
        }
    };
    showBlocks.prototype.beforeDestruct = function (jodit) {
        this.disable();
        modules_1.Dom.safeRemove(this.style);
    };
    tslib_1.__decorate([
        decorators_1.autobind
    ], showBlocks.prototype, "enable", null);
    tslib_1.__decorate([
        decorators_1.autobind
    ], showBlocks.prototype, "disable", null);
    tslib_1.__decorate([
        decorators_1.autobind
    ], showBlocks.prototype, "toggle", null);
    return showBlocks;
}(plugin_1.Plugin));
exports.showBlocks = showBlocks;
index_1.Jodit.plugins.add('show-blocks', showBlocks);


/***/ }),

/***/ 96551:
/***/ (function(module) {

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

module.exports = {
	'Show Blocks': 'تظهر كتل'
};


/***/ }),

/***/ 26464:
/***/ (function(module) {

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

module.exports = {
	'Show Blocks': 'Ukázat Bloky'
};


/***/ }),

/***/ 7896:
/***/ (function(module) {

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

module.exports = {
	'Show Blocks': 'Zeigen Blöcke'
};


/***/ }),

/***/ 44660:
/***/ (function(module) {

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

module.exports = {
	'Show Blocks': 'Mostrar Bloques'
};


/***/ }),

/***/ 12990:
/***/ (function(module) {

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

module.exports = {
	'Show Blocks': 'نشان می دهد بلوک'
};


/***/ }),

/***/ 10187:
/***/ (function(module) {

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

module.exports = {
	'Show Blocks': 'Afficher Les Blocs'
};


/***/ }),

/***/ 7834:
/***/ (function(module) {

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

module.exports = {
	'Show Blocks': 'תראה רחובות'
};


/***/ }),

/***/ 46788:
/***/ (function(module) {

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

module.exports = {
	'Show Blocks': 'Mutasd Meg Blokkok'
};


/***/ }),

/***/ 79955:
/***/ (function(module) {

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

module.exports = {
	'Show Blocks': 'Menunjukkan Blok'
};


/***/ }),

/***/ 48343:
/***/ (function(module) {

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

module.exports = {
	'Show Blocks': 'Visualizza Blocchi'
};


/***/ }),

/***/ 8449:
/***/ (function(module) {

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

module.exports = {
	'Show Blocks': 'ショーのブロック'
};


/***/ }),

/***/ 36777:
/***/ (function(module) {

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

module.exports = {
	'Show Blocks': '쇼 블록'
};


/***/ }),

/***/ 27705:
/***/ (function(module) {

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

module.exports = {
	'Show Blocks': 'Toon Blokken'
};


/***/ }),

/***/ 7450:
/***/ (function(module) {

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

module.exports = {
	'Show Blocks': 'Pokaż Bloki'
};


/***/ }),

/***/ 17454:
/***/ (function(module) {

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

module.exports = {
	'Show Blocks': 'Mostrar Blocos'
};


/***/ }),

/***/ 48013:
/***/ (function(module) {

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

module.exports = {
	'Show Blocks': 'Показать Блоки'
};


/***/ }),

/***/ 47766:
/***/ (function(module) {

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

module.exports = {
	'Show Blocks': 'Haritayı Blokları'
};


/***/ }),

/***/ 70198:
/***/ (function(module) {

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

module.exports = {
	'Show Blocks': '显示块'
};


/***/ }),

/***/ 50756:
/***/ (function(module) {

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

module.exports = {
	'Show Blocks': 'แสดงช่วงตึก'
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(45762));
/******/ return __webpack_exports__;
/******/ }
]);
});