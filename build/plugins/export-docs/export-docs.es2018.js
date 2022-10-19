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

/***/ 49269:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExportDocs": function() { return /* binding */ ExportDocs; }
});

// EXTERNAL MODULE: ./src/core/plugin/index.ts
var core_plugin = __webpack_require__(35570);
// EXTERNAL MODULE: ./src/core/request/ajax.ts + 1 modules
var request_ajax = __webpack_require__(83282);
// EXTERNAL MODULE: ./src/index.ts + 160 modules
var src = __webpack_require__(85660);
// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(27537);
// EXTERNAL MODULE: ./src/core/dom/index.ts
var dom = __webpack_require__(94522);
;// CONCATENATED MODULE: ./src/plugins/export-docs/config.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */


config/* Config.prototype.exportDocs */.D.prototype.exportDocs = {
    css: '',
    pdf: {
        allow: true,
        options: {
            format: 'A4',
            page_orientation: 'portrait'
        }
    }
};
config/* Config.prototype.controls.exportDocs */.D.prototype.controls.exportDocs = {
    tooltip: 'Export',
    isDisabled: (editor) => dom/* Dom.isEmptyContent */.i.isEmptyContent(editor.editor),
    icon: __webpack_require__(33645),
    list: {
        exportToPdf: 'Export to PDF'
    },
    command: 'exportToPDF'
};

// EXTERNAL MODULE: ./src/plugins/print/lib/generate-critical-css.ts
var generate_critical_css = __webpack_require__(28895);
// EXTERNAL MODULE: ./src/core/helpers/utils/print.ts
var print = __webpack_require__(79775);
;// CONCATENATED MODULE: ./src/plugins/export-docs/export-docs.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */







class ExportDocs extends core_plugin/* Plugin */.S {
    constructor() {
        super(...arguments);
        this.requires = ['license'];
        this.buttons = [
            {
                name: 'exportDocs',
                group: 'media'
            }
        ];
    }
    afterInit(jodit) {
        jodit.registerCommand('exportToPDF', async () => {
            var _a;
            const css = (0,generate_critical_css/* generateCriticalCSS */.a)(jodit);
            const ajax = new request_ajax/* Ajax */.t(jodit, {
                ...((_a = jodit.o.exportDocs.ajax) !== null && _a !== void 0 ? _a : jodit.o.filebrowser.ajax),
                method: 'POST',
                responseType: 'blob',
                onProgress(percent) {
                    jodit.progressbar.show().progress(percent);
                },
                data: {
                    action: 'generatePdf',
                    html: `<style>${css + jodit.o.exportDocs.css}</style>${ExportDocs.getValue(jodit)}`
                }
            });
            try {
                const resp = await ajax.send();
                const buffer = await resp.blob();
                const link = this.j.create.a(), filename = 'document.pdf';
                link.href = URL.createObjectURL(buffer);
                link.download = filename;
                link.click();
                dom/* Dom.safeRemove */.i.safeRemove(link);
                URL.revokeObjectURL(link.href);
            }
            catch (e) {
                e.message && jodit.alert(e.message);
            }
            finally {
                jodit.progressbar.progress(100);
                await jodit.async.delay(200);
                jodit.progressbar.hide();
            }
        });
    }
    static getValue(jodit) {
        const div = (0,print/* previewBox */.$)(jodit);
        return div.innerHTML;
    }
    beforeDestruct() { }
}
src.Jodit.plugins.add('exportDocs', ExportDocs);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(49269));
/******/ return __webpack_exports__;
/******/ }
]);
});