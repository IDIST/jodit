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
return (self["webpackChunkjodit"] = self["webpackChunkjodit"] || []).push([[382],{

/***/ 9613:
/***/ (function(module) {

module.exports = "<svg viewBox=\"0 0 32 32\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\"> <rect fill=\"none\" height=\"32\" width=\"32\"/> <path d=\"M28,14H18v2h10V14z M28,18H18v2h10V18z M24,22h-6v2h6V22z M14,14H4v10h10V14z M0,6v26h32V6H0z M30,30H2l0.08-20H30V30z\"/> </svg>"

/***/ }),

/***/ 64810:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "IframeEditor": function() { return /* binding */ IframeEditor; }
});

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(20255);
// EXTERNAL MODULE: ./src/core/plugin/index.ts
var core_plugin = __webpack_require__(35570);
// EXTERNAL MODULE: ./src/modules/index.ts + 15 modules
var modules = __webpack_require__(81165);
// EXTERNAL MODULE: ./src/core/ui/index.ts + 2 modules
var ui = __webpack_require__(41685);
// EXTERNAL MODULE: ./src/core/decorators/index.ts + 7 modules
var decorators = __webpack_require__(11169);
;// CONCATENATED MODULE: ./src/plugins/iframe-editor/ui/iframe-editor/iframe-editor.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */




let UIIframeEditor = class UIIframeEditor extends ui/* UIGroup */.qe {
    constructor(jodit, opt) {
        super(jodit);
        this.state = {
            src: '',
            className: '',
            width: 400,
            height: 200,
            frameBorder: false,
            enableScrollbars: false,
            name: '',
            title: ''
        };
        Object.assign(this.state, opt);
        this.srcField = new ui/* UIInput */.u3(jodit, {
            label: 'URL',
            type: 'url',
            required: true,
            value: this.state.src,
            onChange: (src) => {
                this.state.src = src;
            }
        });
        this.append([
            this.srcField,
            new ui/* UIBlock */.eC(jodit, [
                new ui/* UIInput */.u3(jodit, {
                    label: 'Width',
                    type: 'number',
                    value: this.state.width,
                    onChange: (v) => {
                        this.state.width = parseInt(v, 10) || 0;
                    }
                }),
                new ui/* UIInput */.u3(jodit, {
                    label: 'Height',
                    type: 'number',
                    value: this.state.height,
                    onChange: (v) => {
                        this.state.height = parseInt(v, 10) || 0;
                    }
                })
            ], {
                className: this.getFullElName('block'),
                align: 'center'
            }),
            new ui/* UIBlock */.eC(jodit, [
                new ui/* UICheckbox */.mA(jodit, {
                    label: 'Show frame border',
                    checked: Boolean(opt.frameBorder),
                    onChange: (value) => {
                        this.state.frameBorder = value === 'true';
                    }
                })
            ]),
            new ui/* UIInput */.u3(jodit, {
                label: 'Name',
                value: this.state.name,
                type: 'text',
                onChange: (v) => {
                    this.state.name = v;
                }
            }),
            new ui/* UIInput */.u3(jodit, {
                label: 'Title',
                value: this.state.title,
                type: 'text',
                onChange: (v) => {
                    this.state.title = v;
                }
            })
        ]);
    }
    className() {
        return 'UIIframeEditor';
    }
};
UIIframeEditor = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], UIIframeEditor);


// EXTERNAL MODULE: ./src/core/dom/index.ts
var dom = __webpack_require__(94522);
// EXTERNAL MODULE: ./src/index.ts + 157 modules
var src = __webpack_require__(33594);
// EXTERNAL MODULE: ./src/core/ui/button/index.ts + 2 modules
var ui_button = __webpack_require__(17460);
// EXTERNAL MODULE: ./src/core/helpers/index.ts + 14 modules
var helpers = __webpack_require__(52607);
// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(27537);
;// CONCATENATED MODULE: ./src/plugins/iframe-editor/config.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */



config/* Config.prototype.controls.iframeEditor */.D.prototype.controls.iframeEditor = {
    icon: __webpack_require__(9613),
    tooltip: 'Iframe Editor',
    exec: (editor, iframe) => {
        if (dom/* Dom.isTag */.i.isTag(iframe, 'jodit') &&
            dom/* Dom.isTag */.i.isTag(iframe.firstElementChild, 'iframe')) {
            iframe = iframe.firstElementChild;
        }
        editor.e.fire('toggleIframeEditor', dom/* Dom.isTag */.i.isTag(iframe, 'iframe') ? iframe : null);
    }
};
if ((0,helpers.isArray)(config/* Config.prototype.popup.iframe */.D.prototype.popup.iframe)) {
    config/* Config.prototype.popup.iframe.push */.D.prototype.popup.iframe.push('iframeEditor');
}

;// CONCATENATED MODULE: ./src/plugins/iframe-editor/iframe-editor.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */










class IframeEditor extends core_plugin/* Plugin */.S {
    constructor() {
        super(...arguments);
        this.requires = ['license', 'color-picker'];
        this.buttons = [
            {
                group: 'form',
                name: 'iframeEditor'
            }
        ];
    }
    afterInit(jodit) {
        jodit.e.on('toggleIframeEditor', this.toggleEditor);
    }
    toggleEditor(target) {
        var _a, _b, _c, _d, _e;
        if (!this.__dialog) {
            this.__dialog = new modules.Dialog({
                language: this.j.o.language,
                theme: this.j.o.theme
            });
            this.__dialog.setHeader('Iframe Properties').setSize(470, 400);
        }
        if (target && !dom/* Dom.isTag */.i.isTag(target, ['iframe'])) {
            target = undefined;
        }
        const ui = new UIIframeEditor(this.__dialog, {
            src: (_a = target === null || target === void 0 ? void 0 : target.src) !== null && _a !== void 0 ? _a : '',
            name: (_b = target === null || target === void 0 ? void 0 : target.name) !== null && _b !== void 0 ? _b : '',
            title: (_c = target === null || target === void 0 ? void 0 : target.title) !== null && _c !== void 0 ? _c : '',
            frameBorder: (target === null || target === void 0 ? void 0 : target.frameBorder) === '1' || (target === null || target === void 0 ? void 0 : target.frameBorder) === 'yes',
            width: (_d = target === null || target === void 0 ? void 0 : target.offsetWidth) !== null && _d !== void 0 ? _d : 700,
            height: (_e = target === null || target === void 0 ? void 0 : target.offsetHeight) !== null && _e !== void 0 ? _e : 400
        });
        this.__dialog.setContent(ui);
        const dlg = this.__dialog;
        if (dlg.isOpened) {
            dlg.close();
        }
        else {
            dlg.setFooter([
                (0,ui_button/* Button */.zx)(dlg, 'cancel', 'Cancel', 'default').onAction(() => dlg.close()),
                (0,ui_button/* Button */.zx)(dlg, 'ok', target ? 'Update' : 'Insert', 'primary').onAction(() => {
                    if (!ui.srcField.value) {
                        ui.srcField.validate();
                        ui.srcField.focus();
                        return;
                    }
                    if (!target) {
                        target = this.j.createInside.element('iframe');
                        this.j.s.insertNode(target, true, false);
                    }
                    target.className = ui.state.className || '';
                    (0,helpers.attr)(target, {
                        src: ui.state.src,
                        title: ui.state.title,
                        name: ui.state.name,
                        frameborder: ui.state.frameBorder ? '1' : '0',
                        width: ui.state.width,
                        height: ui.state.height
                    });
                    if (dom/* Dom.isTag */.i.isTag(target.parentElement, 'jodit')) {
                        (0,helpers.css)(target.parentElement, {
                            width: ui.state.width,
                            height: ui.state.height
                        });
                    }
                    this.jodit.e.fire('synchro');
                    dlg.close();
                })
            ]).open();
            this.jodit.async.requestIdleCallback(() => {
                ui.srcField.focus();
            });
        }
    }
    onDblClick(e) {
        if (dom/* Dom.isTag */.i.isTag(e.target, 'iframe')) {
            this.toggleEditor(e.target);
        }
    }
    beforeDestruct(jodit) {
        var _a;
        (_a = this.__dialog) === null || _a === void 0 ? void 0 : _a.destruct();
    }
}
(0,tslib_es6/* __decorate */.gn)([
    decorators.autobind
], IframeEditor.prototype, "toggleEditor", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':dblclick')
], IframeEditor.prototype, "onDblClick", null);
src.Jodit.plugins.add('iframe-editor', IframeEditor);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(64810));
/******/ return __webpack_exports__;
/******/ }
]);
});