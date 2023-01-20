/*!
 * idist-jodit - Jodit is awesome and usefully wysiwyg editor with filebrowser
 * Author: KimSunWook <ceo@idist.ai> (https://xdsoft.net/)
 * Version: v3.20.11
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
return (self["webpackChunkidist_jodit"] = self["webpackChunkidist_jodit"] || []).push([[790],{

/***/ 92512:
/***/ (function(module) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M2.5 12C2.5 11.5858 2.83579 11.25 3.25 11.25H4.75C5.16421 11.25 5.5 11.5858 5.5 12C5.5 12.4142 5.16421 12.75 4.75 12.75H3.25C2.83579 12.75 2.5 12.4142 2.5 12Z\"/> <path d=\"M6.5 12C6.5 11.5858 6.83579 11.25 7.25 11.25H8.75C9.16421 11.25 9.5 11.5858 9.5 12C9.5 12.4142 9.16421 12.75 8.75 12.75H7.25C6.83579 12.75 6.5 12.4142 6.5 12Z\" /> <path d=\"M10.5 12C10.5 11.5858 10.8358 11.25 11.25 11.25H12.75C13.1642 11.25 13.5 11.5858 13.5 12C13.5 12.4142 13.1642 12.75 12.75 12.75H11.25C10.8358 12.75 10.5 12.4142 10.5 12Z\" /> <path d=\"M14.5 12C14.5 11.5858 14.8358 11.25 15.25 11.25H16.75C17.1642 11.25 17.5 11.5858 17.5 12C17.5 12.4142 17.1642 12.75 16.75 12.75H15.25C14.8358 12.75 14.5 12.4142 14.5 12Z\" /> <path d=\"M18.5 12C18.5 11.5858 18.8358 11.25 19.25 11.25H20.75C21.1642 11.25 21.5 11.5858 21.5 12C21.5 12.4142 21.1642 12.75 20.75 12.75H19.25C18.8358 12.75 18.5 12.4142 18.5 12Z\" /> <path d=\"M4.75 2C4.33579 2 4 2.33579 4 2.75V7C4 8.104 4.896 9 6 9H18C19.104 9 20 8.104 20 7V2.75C20 2.33579 19.6642 2 19.25 2C18.8358 2 18.5 2.33579 18.5 2.75V7C18.5 7.275 18.276 7.5 18 7.5H6C5.724 7.5 5.5 7.275 5.5 7V2.75C5.5 2.33579 5.16421 2 4.75 2Z\" /> <path d=\"M19.25 22C19.6642 22 20 21.6642 20 21.25V17C20 15.896 19.104 15 18 15L6 15C4.896 15 4 15.896 4 17L4 21.25C4 21.6642 4.33579 22 4.75 22C5.16421 22 5.5 21.6642 5.5 21.25L5.5 17C5.5 16.725 5.724 16.5 6 16.5L18 16.5C18.276 16.5 18.5 16.725 18.5 17V21.25C18.5 21.6642 18.8358 22 19.25 22Z\" /> </svg>"

/***/ }),

/***/ 77985:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 17114:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ("[data-jodit-page-break] {\n\tdisplay: flex;\n\theight: 24px;\n\tbox-sizing: border-box;\n\n\talign-items: center;\n\tjustify-content: center;\n\n\tborder: 1px dashed #ccc;\n\n\tfont-size: 12px;\n\tpage-break-before: always;\n\ttext-transform: uppercase;\n}\n\n[data-jodit-page-break]:active {\n\tborder-color: #818181;\n}\n");

/***/ }),

/***/ 9073:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var config_1 = __webpack_require__(27537);
var styles = (__webpack_require__(17114)/* ["default"] */ .Z);
config_1.Config.prototype.pageBreak = {
    separator: '<div style="page-break-before: always"></div>'
};
config_1.Config.prototype.controls.pageBreak = {
    tooltip: 'Insert page break',
    icon: __webpack_require__(92512),
    command: 'insertPageBreak'
};
config_1.Config.prototype.iframeStyle = String(config_1.Config.prototype.iframeStyle) + styles;


/***/ }),

/***/ 64679:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PageBreak = void 0;
var tslib_1 = __webpack_require__(20255);
__webpack_require__(77985);
var plugin_1 = __webpack_require__(35570);
var index_1 = __webpack_require__(78460);
__webpack_require__(9073);
var dom_1 = __webpack_require__(94522);
var decorators_1 = __webpack_require__(9901);
var helpers_1 = __webpack_require__(92654);
var PageBreak = (function (_super) {
    tslib_1.__extends(PageBreak, _super);
    function PageBreak() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.requires = ['license'];
        _this.buttons = [
            {
                name: 'pageBreak',
                group: 'insert'
            }
        ];
        return _this;
    }
    PageBreak.prototype.afterInit = function (jodit) {
        var _this = this;
        jodit.registerCommand('insertPageBreak', function () {
            var pageBreak = jodit.createInside.div('', {});
            _this.decoratePageBreak(pageBreak);
            jodit.s.insertNode(pageBreak, false, false);
            var parentNode = pageBreak.parentNode;
            while (parentNode && parentNode !== jodit.editor) {
                dom_1.Dom.after(parentNode, pageBreak);
                if (dom_1.Dom.isBlock(parentNode)) {
                    break;
                }
                parentNode = pageBreak.parentNode;
            }
            jodit.s.setCursorAfter(pageBreak);
            jodit.setEditorValue();
        });
    };
    PageBreak.prototype.decoratePageBreak = function (pageBreak) {
        (0, helpers_1.attr)(pageBreak, {
            'data-jodit-page-break': true,
            contenteditable: false
        });
        pageBreak.innerText = this.j.i18n('Page break');
    };
    PageBreak.prototype.beforeDestruct = function () { };
    PageBreak.prototype.onChange = function () {
        var _this = this;
        (0, helpers_1.$$)('[style*="page-break-after"],[style*="page-break-before"]', this.j.editor).forEach(function (div) {
            if (dom_1.Dom.isEmpty(div) && !(0, helpers_1.attr)(div, 'data-jodit-page-break')) {
                _this.decoratePageBreak(div);
            }
        });
    };
    PageBreak.prototype.onAfterGetValueFromEditor = function (data) {
        data.value = data.value.replace(/<div[^>]+data-jodit-page-break[^>]+>[^]*?<\/div>/gi, this.j.o.pageBreak.separator);
    };
    tslib_1.__decorate([
        (0, decorators_1.watch)([':change', ':afterSetMode']),
        (0, decorators_1.debounce)()
    ], PageBreak.prototype, "onChange", null);
    tslib_1.__decorate([
        (0, decorators_1.watch)(':afterGetValueFromEditor')
    ], PageBreak.prototype, "onAfterGetValueFromEditor", null);
    return PageBreak;
}(plugin_1.Plugin));
exports.PageBreak = PageBreak;
index_1.Jodit.plugins.add('pageBreak', PageBreak);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(64679));
/******/ return __webpack_exports__;
/******/ }
]);
});