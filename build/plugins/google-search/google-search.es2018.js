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
return (self["webpackChunkjodit"] = self["webpackChunkjodit"] || []).push([[799],{

/***/ 9234:
/***/ (function(module) {

module.exports = "<svg width=\"11\" height=\"15\" viewBox=\"0 0 11 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10.925 7.122V14H9.747L9.462 13.164C9.044 13.4933 8.55 13.7467 7.98 13.924C7.42267 14.1013 6.82733 14.19 6.194 14.19C5.054 14.19 4.066 13.9177 3.23 13.373C2.394 12.8157 1.75433 12.024 1.311 10.998C0.867667 9.972 0.646 8.756 0.646 7.35C0.646 5.96933 0.880333 4.766 1.349 3.74C1.83033 2.714 2.50167 1.92233 3.363 1.365C4.237 0.794999 5.25667 0.509999 6.422 0.509999C7.41 0.509999 8.284 0.693666 9.044 1.061C9.804 1.42833 10.3613 1.935 10.716 2.581L9.747 3.55C9.41767 3.03067 8.968 2.638 8.398 2.372C7.84067 2.09333 7.18833 1.954 6.441 1.954C5.17433 1.954 4.18633 2.429 3.477 3.379C2.76767 4.329 2.413 5.65267 2.413 7.35C2.413 9.07267 2.755 10.4153 3.439 11.378C4.13567 12.3407 5.10467 12.822 6.346 12.822C6.92867 12.822 7.46067 12.7397 7.942 12.575C8.436 12.4103 8.854 12.1697 9.196 11.853V8.414H6.023V7.122H10.925Z\"/> </svg>"

/***/ }),

/***/ 1104:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "googleSearch": function() { return /* binding */ googleSearch; }
/* harmony export */ });
/* harmony import */ var jodit_core_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35570);
/* harmony import */ var jodit_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27537);
/* harmony import */ var jodit_core_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52607);
/* harmony import */ var jodit_plugins_placeholder_placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43257);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85660);
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */





jodit_config__WEBPACK_IMPORTED_MODULE_1__/* .Config.prototype.controls.google */ .D.prototype.controls.google = {
    tooltip: 'Google search',
    icon: __webpack_require__(9234),
    isDisabled(e) {
        return (0,jodit_plugins_placeholder_placeholder__WEBPACK_IMPORTED_MODULE_3__/* .isEditorEmpty */ .u)(e.editor);
    },
    command: 'startSearch'
};
class googleSearch extends jodit_core_plugin__WEBPACK_IMPORTED_MODULE_0__/* .Plugin */ .S {
    constructor() {
        super(...arguments);
        this.requires = ['license'];
        this.buttons = [
            {
                name: 'google',
                group: 'search'
            }
        ];
    }
    afterInit(jodit) {
        jodit.registerCommand('startSearch', {
            exec: () => {
                var _a, _b, _c;
                let query;
                const { s } = jodit;
                if (s.isCollapsed()) {
                    query = (_b = (_a = s.current()) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.innerText;
                }
                else {
                    query = (_c = s.sel) === null || _c === void 0 ? void 0 : _c.toString();
                }
                if (query) {
                    const url = 'https://www.google.com/search?q=' +
                        encodeURIComponent((0,jodit_core_helpers__WEBPACK_IMPORTED_MODULE_2__.trim)(query));
                    window.open(url, '_blank');
                }
            }
        });
    }
    beforeDestruct(jodit) { }
}
_index__WEBPACK_IMPORTED_MODULE_4__.Jodit.plugins.add('google-search', googleSearch);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(1104));
/******/ return __webpack_exports__;
/******/ }
]);
});