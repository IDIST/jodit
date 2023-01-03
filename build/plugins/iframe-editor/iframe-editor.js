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
return (self["webpackChunkidist_jodit"] = self["webpackChunkidist_jodit"] || []).push([[382],{

/***/ 9613:
/***/ (function(module) {

module.exports = "<svg viewBox=\"0 0 32 32\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\"> <rect fill=\"none\" height=\"32\" width=\"32\"/> <path d=\"M28,14H18v2h10V14z M28,18H18v2h10V18z M24,22h-6v2h6V22z M14,14H4v10h10V14z M0,6v26h32V6H0z M30,30H2l0.08-20H30V30z\"/> </svg>"

/***/ }),

/***/ 92112:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 35439:
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
var helpers_1 = __webpack_require__(92654);
config_1.Config.prototype.controls.iframeEditor = {
    icon: __webpack_require__(9613),
    tooltip: 'Iframe Editor',
    exec: function (editor, iframe) {
        if (dom_1.Dom.isTag(iframe, 'jodit') &&
            dom_1.Dom.isTag(iframe.firstElementChild, 'iframe')) {
            iframe = iframe.firstElementChild;
        }
        editor.e.fire('toggleIframeEditor', dom_1.Dom.isTag(iframe, 'iframe') ? iframe : null);
    }
};
if ((0, helpers_1.isArray)(config_1.Config.prototype.popup.iframe)) {
    config_1.Config.prototype.popup.iframe.push('iframeEditor');
}


/***/ }),

/***/ 16475:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IframeEditor = void 0;
var tslib_1 = __webpack_require__(20255);
var plugin_1 = __webpack_require__(35570);
var modules_1 = __webpack_require__(46701);
var iframe_editor_1 = __webpack_require__(80051);
var decorators_1 = __webpack_require__(9901);
var dom_1 = __webpack_require__(94522);
var index_1 = __webpack_require__(78460);
var button_1 = __webpack_require__(44632);
var helpers_1 = __webpack_require__(92654);
__webpack_require__(35439);
var IframeEditor = (function (_super) {
    tslib_1.__extends(IframeEditor, _super);
    function IframeEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.requires = ['license', 'color-picker'];
        _this.buttons = [
            {
                group: 'form',
                name: 'iframeEditor'
            }
        ];
        return _this;
    }
    IframeEditor.prototype.afterInit = function (jodit) {
        jodit.e.on('toggleIframeEditor', this.toggleEditor);
    };
    IframeEditor.prototype.toggleEditor = function (target) {
        var _this = this;
        var _a, _b, _c, _d, _e;
        if (!this.__dialog) {
            this.__dialog = new modules_1.Dialog({
                language: this.j.o.language,
                theme: this.j.o.theme
            });
            this.__dialog.setHeader('Iframe Properties').setSize(470, 400);
        }
        if (target && !dom_1.Dom.isTag(target, ['iframe'])) {
            target = undefined;
        }
        var ui = new iframe_editor_1.UIIframeEditor(this.__dialog, {
            src: (_a = target === null || target === void 0 ? void 0 : target.src) !== null && _a !== void 0 ? _a : '',
            name: (_b = target === null || target === void 0 ? void 0 : target.name) !== null && _b !== void 0 ? _b : '',
            title: (_c = target === null || target === void 0 ? void 0 : target.title) !== null && _c !== void 0 ? _c : '',
            frameBorder: (target === null || target === void 0 ? void 0 : target.frameBorder) === '1' || (target === null || target === void 0 ? void 0 : target.frameBorder) === 'yes',
            width: (_d = target === null || target === void 0 ? void 0 : target.offsetWidth) !== null && _d !== void 0 ? _d : 700,
            height: (_e = target === null || target === void 0 ? void 0 : target.offsetHeight) !== null && _e !== void 0 ? _e : 400
        });
        this.__dialog.setContent(ui);
        var dlg = this.__dialog;
        if (dlg.isOpened) {
            dlg.close();
        }
        else {
            dlg.setFooter([
                (0, button_1.Button)(dlg, 'cancel', 'Cancel', 'default').onAction(function () {
                    return dlg.close();
                }),
                (0, button_1.Button)(dlg, 'ok', target ? 'Update' : 'Insert', 'primary').onAction(function () {
                    if (!ui.srcField.value) {
                        ui.srcField.validate();
                        ui.srcField.focus();
                        return;
                    }
                    if (!target) {
                        target = _this.j.createInside.element('iframe');
                        _this.j.s.insertNode(target, true, false);
                    }
                    target.className = ui.state.className || '';
                    (0, helpers_1.attr)(target, {
                        src: ui.state.src,
                        title: ui.state.title,
                        name: ui.state.name,
                        frameborder: ui.state.frameBorder ? '1' : '0',
                        width: ui.state.width,
                        height: ui.state.height
                    });
                    if (dom_1.Dom.isTag(target.parentElement, 'jodit')) {
                        (0, helpers_1.css)(target.parentElement, {
                            width: ui.state.width,
                            height: ui.state.height
                        });
                    }
                    _this.jodit.e.fire('synchro');
                    dlg.close();
                })
            ]).open();
            this.jodit.async.requestIdleCallback(function () {
                ui.srcField.focus();
            });
        }
    };
    IframeEditor.prototype.onDblClick = function (e) {
        if (dom_1.Dom.isTag(e.target, 'iframe')) {
            this.toggleEditor(e.target);
        }
    };
    IframeEditor.prototype.beforeDestruct = function (jodit) {
        var _a;
        (_a = this.__dialog) === null || _a === void 0 ? void 0 : _a.destruct();
    };
    tslib_1.__decorate([
        decorators_1.autobind
    ], IframeEditor.prototype, "toggleEditor", null);
    tslib_1.__decorate([
        (0, decorators_1.watch)(':dblclick')
    ], IframeEditor.prototype, "onDblClick", null);
    return IframeEditor;
}(plugin_1.Plugin));
exports.IframeEditor = IframeEditor;
index_1.Jodit.plugins.add('iframe-editor', IframeEditor);


/***/ }),

/***/ 80051:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UIIframeEditor = void 0;
var tslib_1 = __webpack_require__(20255);
__webpack_require__(92112);
var ui_1 = __webpack_require__(14153);
var decorators_1 = __webpack_require__(9901);
var UIIframeEditor = (function (_super) {
    tslib_1.__extends(UIIframeEditor, _super);
    function UIIframeEditor(jodit, opt) {
        var _this = _super.call(this, jodit) || this;
        _this.state = {
            src: '',
            className: '',
            width: 400,
            height: 200,
            frameBorder: false,
            enableScrollbars: false,
            name: '',
            title: ''
        };
        Object.assign(_this.state, opt);
        _this.srcField = new ui_1.UIInput(jodit, {
            label: 'URL',
            type: 'url',
            required: true,
            value: _this.state.src,
            onChange: function (src) {
                _this.state.src = src;
            }
        });
        _this.append([
            _this.srcField,
            new ui_1.UIBlock(jodit, [
                new ui_1.UIInput(jodit, {
                    label: 'Width',
                    type: 'number',
                    value: _this.state.width,
                    onChange: function (v) {
                        _this.state.width = parseInt(v, 10) || 0;
                    }
                }),
                new ui_1.UIInput(jodit, {
                    label: 'Height',
                    type: 'number',
                    value: _this.state.height,
                    onChange: function (v) {
                        _this.state.height = parseInt(v, 10) || 0;
                    }
                })
            ], {
                className: _this.getFullElName('block'),
                align: 'center'
            }),
            new ui_1.UIBlock(jodit, [
                new ui_1.UICheckbox(jodit, {
                    label: 'Show frame border',
                    checked: Boolean(opt.frameBorder),
                    onChange: function (value) {
                        _this.state.frameBorder = value === 'true';
                    }
                })
            ]),
            new ui_1.UIInput(jodit, {
                label: 'Name',
                value: _this.state.name,
                type: 'text',
                onChange: function (v) {
                    _this.state.name = v;
                }
            }),
            new ui_1.UIInput(jodit, {
                label: 'Title',
                value: _this.state.title,
                type: 'text',
                onChange: function (v) {
                    _this.state.title = v;
                }
            })
        ]);
        return _this;
    }
    UIIframeEditor.prototype.className = function () {
        return 'UIIframeEditor';
    };
    UIIframeEditor = tslib_1.__decorate([
        decorators_1.component
    ], UIIframeEditor);
    return UIIframeEditor;
}(ui_1.UIGroup));
exports.UIIframeEditor = UIIframeEditor;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(16475));
/******/ return __webpack_exports__;
/******/ }
]);
});