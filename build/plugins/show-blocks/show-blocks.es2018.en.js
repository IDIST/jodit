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
return (self["webpackChunkjodit"] = self["webpackChunkjodit"] || []).push([[876],{

/***/ 92778:
/***/ (function(module) {

module.exports = "<svg viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"> <g> <rect rx=\"10\" height=\"1620\" width=\"1620\" y=\"79.646973\" x=\"80\" stroke-width=\"100\" stroke-dasharray=\"8% 10%\" fill=\"none\"/> <path d=\"m1333.992706,381.692384l0,52.982419q0,21.04781 -12.98052,44.272981t-29.820114,23.22517q-35.082487,0 -37.889085,0.725787q-18.242893,4.354719 -22.452791,22.499384q-2.104949,7.983652 -2.104949,46.45034l0,836.106125q0,18.144664 -12.629695,31.208822t-30.170938,13.064158l-75.778171,0q-17.541243,0 -30.170938,-13.064158t-12.629695,-31.208822l0,-884.008038l-100.335911,0l0,884.008038q0,18.144664 -12.27887,31.208822t-30.521763,13.064158l-75.778171,0q-18.242893,0 -30.521763,-13.064158t-12.27887,-31.208822l0,-359.990137q-103.14251,-8.709439 -171.904184,-42.821407q-88.407866,-42.095621 -134.716748,-129.915795q-44.905583,-84.917028 -44.905583,-187.978721q0,-120.48057 61.745176,-207.574958q61.745176,-85.642815 146.644794,-115.400064q77.88312,-26.854103 292.587937,-26.854103l336.090221,0q17.541243,0 30.170938,13.064158t12.629695,31.208822z\"/> </g> </svg>"

/***/ }),

/***/ 36336:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ar": function() { return /* binding */ ar; },
/* harmony export */   "cs_cz": function() { return /* binding */ cs_cz; },
/* harmony export */   "de": function() { return /* binding */ de; },
/* harmony export */   "es": function() { return /* binding */ es; },
/* harmony export */   "fa": function() { return /* binding */ fa; },
/* harmony export */   "fr": function() { return /* binding */ fr; },
/* harmony export */   "he": function() { return /* binding */ he; },
/* harmony export */   "hu": function() { return /* binding */ hu; },
/* harmony export */   "id": function() { return /* binding */ id; },
/* harmony export */   "it": function() { return /* binding */ it; },
/* harmony export */   "ja": function() { return /* binding */ ja; },
/* harmony export */   "ko": function() { return /* binding */ ko; },
/* harmony export */   "nl": function() { return /* binding */ nl; },
/* harmony export */   "pl": function() { return /* binding */ pl; },
/* harmony export */   "pt_br": function() { return /* binding */ pt_br; },
/* harmony export */   "ru": function() { return /* binding */ ru; },
/* harmony export */   "tr": function() { return /* binding */ tr; },
/* harmony export */   "zh_cn": function() { return /* binding */ zh_cn; },
/* harmony export */   "zh_tw": function() { return /* binding */ zh_tw; }
/* harmony export */ });
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
const ar = __webpack_require__(96551);
const cs_cz = __webpack_require__(26464);
const de = __webpack_require__(7896);
const es = __webpack_require__(44660);
const fa = __webpack_require__(12990);
const fr = __webpack_require__(10187);
const he = __webpack_require__(7834);
const hu = __webpack_require__(46788);
const id = __webpack_require__(79955);
const it = __webpack_require__(48343);
const ja = __webpack_require__(8449);
const ko = __webpack_require__(36777);
const nl = __webpack_require__(27705);
const pl = __webpack_require__(7450);
const pt_br = __webpack_require__(17454);
const ru = __webpack_require__(48013);
const tr = __webpack_require__(47766);
const zh_cn = __webpack_require__(70198);
const zh_tw = __webpack_require__(50756);



/***/ }),

/***/ 21391:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "showBlocks": function() { return /* binding */ showBlocks; }
});

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(20255);
// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(27537);
;// CONCATENATED MODULE: ./src/plugins/show-blocks/config.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

config/* Config.prototype.showBlocks */.D.prototype.showBlocks = {
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
config/* Config.prototype.controls.showBlocks */.D.prototype.controls.showBlocks = {
    isActive(editor) {
        return Boolean(editor.e.fire('showBlocksEnabled'));
    },
    tooltip: 'Show Blocks',
    command: 'toggleShowBlocks'
};

// EXTERNAL MODULE: ./src/core/plugin/index.ts
var core_plugin = __webpack_require__(35570);
// EXTERNAL MODULE: ./src/modules/index.ts + 15 modules
var modules = __webpack_require__(81165);
// EXTERNAL MODULE: ./src/core/ui/index.ts + 2 modules
var ui = __webpack_require__(41685);
// EXTERNAL MODULE: ./src/core/global.ts
var global = __webpack_require__(58299);
// EXTERNAL MODULE: ./src/core/decorators/index.ts + 7 modules
var decorators = __webpack_require__(11169);
// EXTERNAL MODULE: ./src/index.ts + 157 modules
var src = __webpack_require__(33594);
;// CONCATENATED MODULE: ./src/plugins/show-blocks/show-blocks.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */








function svgToUrl(svg) {
    return `data:image/svg+xml;utf8,${escape(svg)}`;
}
class showBlocks extends core_plugin/* Plugin */.S {
    constructor(jodit) {
        super(jodit);
        this.requires = ['license'];
        this.buttons = [
            {
                name: 'showBlocks',
                group: 'state'
            }
        ];
        this.isEnabled = false;
        (0,global/* extendLang */.xl)(__webpack_require__(36336));
        ui/* Icon.set */.JO.set('showBlocks', __webpack_require__(92778));
    }
    enable() {
        this.isEnabled = true;
        const root = this.j.o.iframe ? 'body' : '.jodit-wysiwyg';
        const { tagList, color } = this.j.o.showBlocks;
        this.style.innerHTML = tagList
            .map((tag) => `${root} ${tag}{
					outline: 1px dashed ${color};
					background-image: url("${svgToUrl('<svg xmlns="http://www.w3.org/2000/svg" width="50px">' +
            '<text dominant-baseline="hanging" text-anchor="end" style="fill: ' +
            color +
            ';font: 10px sans-serif" x="50px" y="0">' +
            tag +
            '</text>' +
            '</svg>')}");
					background-position: top 2px ${this.j.o.direction === 'rtl' ? 'left' : 'right'} 4px;
					background-repeat: no-repeat;
					position: relative;
				}`)
            .join('');
    }
    disable() {
        this.isEnabled = false;
        this.style.innerHTML = '';
    }
    toggle() {
        this.isEnabled ? this.disable() : this.enable();
        this.j.e.fire('updateToolbar');
    }
    afterInit(jodit) {
        this.style = (0,global/* getContainer */.ZO)(jodit, showBlocks, 'style', true);
        jodit.e.on('showBlocksEnabled', () => this.isEnabled);
        jodit
            .registerCommand('enableShowBlocks', this.enable)
            .registerCommand('disableShowBlocks', this.disable)
            .registerCommand('toggleShowBlocks', this.toggle);
        if (this.j.o.showBlocks.enable) {
            this.enable();
        }
    }
    beforeDestruct(jodit) {
        this.disable();
        modules.Dom.safeRemove(this.style);
    }
}
(0,tslib_es6/* __decorate */.gn)([
    decorators.autobind
], showBlocks.prototype, "enable", null);
(0,tslib_es6/* __decorate */.gn)([
    decorators.autobind
], showBlocks.prototype, "disable", null);
(0,tslib_es6/* __decorate */.gn)([
    decorators.autobind
], showBlocks.prototype, "toggle", null);
src.Jodit.plugins.add('show-blocks', showBlocks);


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
/******/ var __webpack_exports__ = (__webpack_exec__(21391));
/******/ return __webpack_exports__;
/******/ }
]);
});