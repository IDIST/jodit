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
return (self["webpackChunkjodit"] = self["webpackChunkjodit"] || []).push([[630],{

/***/ 33645:
/***/ (function(module) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M19,21H5a2,2,0,0,1-2-2V17a1,1,0,0,1,2,0v2H19V17a1,1,0,0,1,2,0v2A2,2,0,0,1,19,21Z\"/> <path d=\"M18,5H6A1,1,0,0,1,6,3H18a1,1,0,0,1,0,2Z\"/> <path d=\"M15.71,10.29l-3-3a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-3,3a1,1,0,0,0-.21,1.09A1,1,0,0,0,9,12h2v3a1,1,0,0,0,2,0V12h2a1,1,0,0,0,.92-.62A1,1,0,0,0,15.71,10.29Z\"/> </svg>"

/***/ }),

/***/ 2532:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var config_1 = __webpack_require__(27537);
var dom_1 = __webpack_require__(94522);
config_1.Config.prototype.exportDocs = {
    css: '',
    pdf: {
        allow: true,
        options: {
            format: 'A4',
            page_orientation: 'portrait'
        }
    }
};
config_1.Config.prototype.controls.exportDocs = {
    tooltip: 'Export',
    isDisabled: function (editor) { return dom_1.Dom.isEmptyContent(editor.editor); },
    icon: __webpack_require__(33645),
    list: {
        exportToPdf: 'Export to PDF'
    },
    command: 'exportToPDF'
};


/***/ }),

/***/ 45763:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExportDocs = void 0;
var tslib_1 = __webpack_require__(20255);
var plugin_1 = __webpack_require__(35570);
var ajax_1 = __webpack_require__(60828);
var index_1 = __webpack_require__(78460);
__webpack_require__(2532);
var generate_critical_css_1 = __webpack_require__(28895);
var dom_1 = __webpack_require__(94522);
var print_1 = __webpack_require__(79775);
var ExportDocs = (function (_super) {
    tslib_1.__extends(ExportDocs, _super);
    function ExportDocs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.requires = ['license'];
        _this.buttons = [
            {
                name: 'exportDocs',
                group: 'media'
            }
        ];
        return _this;
    }
    ExportDocs.prototype.afterInit = function (jodit) {
        var _this = this;
        jodit.registerCommand('exportToPDF', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var css, ajax, resp, buffer_1, link, filename, e_1;
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        css = (0, generate_critical_css_1.generateCriticalCSS)(jodit);
                        ajax = new ajax_1.Ajax(jodit, tslib_1.__assign(tslib_1.__assign({}, ((_a = jodit.o.exportDocs.ajax) !== null && _a !== void 0 ? _a : jodit.o.filebrowser.ajax)), { method: 'POST', responseType: 'blob', onProgress: function (percent) {
                                jodit.progressbar.show().progress(percent);
                            }, data: {
                                action: 'generatePdf',
                                html: "<style>".concat(css + jodit.o.exportDocs.css, "</style>").concat(ExportDocs.getValue(jodit))
                            } }));
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, 5, 7]);
                        return [4, ajax.send()];
                    case 2:
                        resp = _b.sent();
                        return [4, resp.blob()];
                    case 3:
                        buffer_1 = _b.sent();
                        link = this.j.create.a(), filename = 'document.pdf';
                        link.href = URL.createObjectURL(buffer_1);
                        link.download = filename;
                        link.click();
                        dom_1.Dom.safeRemove(link);
                        URL.revokeObjectURL(link.href);
                        return [3, 7];
                    case 4:
                        e_1 = _b.sent();
                        e_1.message && jodit.alert(e_1.message);
                        return [3, 7];
                    case 5:
                        jodit.progressbar.progress(100);
                        return [4, jodit.async.delay(200)];
                    case 6:
                        _b.sent();
                        jodit.progressbar.hide();
                        return [7];
                    case 7: return [2];
                }
            });
        }); });
    };
    ExportDocs.getValue = function (jodit) {
        var div = (0, print_1.previewBox)(jodit);
        return div.innerHTML;
    };
    ExportDocs.prototype.beforeDestruct = function () { };
    return ExportDocs;
}(plugin_1.Plugin));
exports.ExportDocs = ExportDocs;
index_1.Jodit.plugins.add('exportDocs', ExportDocs);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(45763));
/******/ return __webpack_exports__;
/******/ }
]);
});