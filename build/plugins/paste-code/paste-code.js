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
return (self["webpackChunkjodit"] = self["webpackChunkjodit"] || []).push([[535],{

/***/ 94819:
/***/ (function(module) {

module.exports = "<svg viewBox=\"0 0 24 24\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M2.5244141,23.5h18.9511719c0.4140625,0,0.75-0.3359375,0.75-0.75V4.9208984 c0-0.1992188-0.0795898-0.390625-0.2207031-0.53125L18.3198242,0.71875C18.1791992,0.5786133,17.9887695,0.5,17.7905273,0.5 H2.5244141c-0.4140625,0-0.75,0.3359375-0.75,0.75v21.5C1.7744141,23.1640625,2.1103516,23.5,2.5244141,23.5z M20.7128296,5.2197266 h-2.6986694V2.531189L20.7128296,5.2197266z M3.2744141,2h13.2397461v3.9697266c0,0.4140625,0.3359375,0.75,0.75,0.75h3.4614258V22 H3.2744141V2z\" fill=\"#1D1D1D\"/> <path d=\"M8.75,10.25h1.75c0.4140625,0,0.75-0.3359375,0.75-0.75s-0.3359375-0.75-0.75-0.75H8 c-0.4140625,0-0.75,0.3359375-0.75,0.75v2.75H6c-0.4140625,0-0.75,0.3359375-0.75,0.75S5.5859375,13.75,6,13.75h1.25v2.75 c0,0.4140625,0.3359375,0.75,0.75,0.75h2.5c0.4140625,0,0.75-0.3359375,0.75-0.75s-0.3359375-0.75-0.75-0.75H8.75V10.25z\" fill=\"#1D1D1D\"/> <path d=\"M18.5,12.25h-1.25V9.5c0-0.4140625-0.3359375-0.75-0.75-0.75H14c-0.4140625,0-0.75,0.3359375-0.75,0.75 s0.3359375,0.75,0.75,0.75h1.75v5.5H14c-0.4140625,0-0.75,0.3359375-0.75,0.75s0.3359375,0.75,0.75,0.75h2.5 c0.4140625,0,0.75-0.3359375,0.75-0.75v-2.75h1.25c0.4140625,0,0.75-0.3359375,0.75-0.75S18.9140625,12.25,18.5,12.25z\" fill=\"#1D1D1D\"/></svg>"

/***/ }),

/***/ 49206:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 24837:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var config_1 = __webpack_require__(27537);
var helpers_1 = __webpack_require__(92654);
config_1.Config.prototype.controls.pasteCode = {
    icon: __webpack_require__(94819),
    tooltip: 'Paste code',
    command: 'pasteCode'
};
config_1.Config.prototype.pasteCode = {
    globalHighlightLib: false,
    canonicalLanguageCode: function (lang) {
        switch (lang) {
            case 'ts':
                return 'typescript';
            case 'js':
                return 'javascript';
            case 'markup':
                return 'html';
        }
        return lang;
    },
    highlightLib: {
        highlight: function (code, language) {
            return Prism.highlight(code, Prism.languages[language] || Prism.languages.plain, language);
        },
        isLangLoaded: function (lang) {
            return Boolean(Prism.languages[lang]);
        },
        js: [
            'https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/prism.min.js'
        ],
        langUrl: function (lang) {
            return "https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/components/prism-".concat(lang, ".min.js");
        },
        css: [
            'https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/themes/prism.min.css'
        ]
    },
    defaultLanguage: 'html',
    insertTemplate: function (jodit, language, value) {
        return "<pre class=\"language-".concat(language, "\">").concat((0, helpers_1.htmlspecialchars)(value), "</pre>");
    },
    languages: [
        { value: 'html', text: 'HTML/XML' },
        { value: 'plaintext', text: 'Plain' },
        { value: 'bash', text: 'Bash' },
        { value: 'javascript', text: 'JavaScript' },
        { value: 'css', text: 'CSS' },
        { value: 'php', text: 'PHP' },
        { value: 'ruby', text: 'Ruby' },
        { value: 'python', text: 'Python' },
        { value: 'java', text: 'Java' },
        { value: 'c', text: 'C' },
        { value: 'csharp', text: 'C#' },
        { value: 'cpp', text: 'C++' }
    ],
    dialog: {
        width: 700,
        height: 600
    }
};


/***/ }),

/***/ 63522:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pasteCode = void 0;
var tslib_1 = __webpack_require__(20255);
__webpack_require__(49206);
__webpack_require__(24837);
var plugin_1 = __webpack_require__(35570);
var ui_1 = __webpack_require__(14153);
var decorators_1 = __webpack_require__(9901);
var helpers_1 = __webpack_require__(92654);
var index_1 = __webpack_require__(78460);
var modules_1 = __webpack_require__(46701);
var pasteCode = (function (_super) {
    tslib_1.__extends(pasteCode, _super);
    function pasteCode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.requires = ['license'];
        _this.buttons = [
            {
                name: 'pasteCode',
                group: 'clipboard'
            }
        ];
        _this.prismJSIsLoaded = false;
        return _this;
    }
    pasteCode.prototype.afterInit = function (jodit) {
        var _this = this;
        jodit.registerCommand('pasteCode', function () { return _this.openCodeEditDialog(); });
    };
    pasteCode.prototype.openCodeEditDialog = function (defLanguage, defValue, pre) {
        var _this = this;
        var jodit = this.j;
        var form = this.createForm(), _a = (0, helpers_1.refs)(form), code = _a.code, language = _a.language;
        if (defLanguage) {
            language.value = defLanguage;
        }
        if (defValue) {
            code.value = defValue;
        }
        jodit.async.requestIdleCallback(function () {
            code.focus();
        });
        jodit.s.save();
        var dialog = this.createDialog(function () {
            if (form.validate()) {
                jodit.s.restore();
                var newPre = jodit.createInside.fromHTML(jodit.o.pasteCode.insertTemplate(jodit, language.value, code.value));
                if (pre) {
                    modules_1.Dom.replace(pre, newPre, jodit.createInside, false, true);
                }
                else {
                    var current = jodit.s.current(), block = modules_1.Dom.up(current, modules_1.Dom.isBlock, jodit.editor);
                    block
                        ? modules_1.Dom.after(block, newPre)
                        : jodit.s.insertNode(newPre);
                }
                _this.onChange();
                return;
            }
            return false;
        }, function () {
            jodit.s.restore();
        });
        dialog.setContent(form.container).open(true);
    };
    pasteCode.prototype.beforeDestruct = function (jodit) { };
    pasteCode.prototype.createForm = function () {
        var jodit = this.jodit;
        return new ui_1.UIForm(jodit, [
            new ui_1.UISelect(jodit, {
                name: 'language',
                label: 'Language',
                value: jodit.o.pasteCode.defaultLanguage,
                options: jodit.o.pasteCode.languages,
                required: true
            }),
            new ui_1.UITextArea(jodit, {
                label: 'Code view',
                resizable: false,
                name: 'code',
                required: true,
                className: 'jodit-paste-code__textarea'
            })
        ], {
            className: 'jodit-paste-code'
        });
    };
    pasteCode.prototype.createDialog = function (onSave, onCancel) {
        var dialog = new modules_1.Dialog({
            language: this.j.o.language
        });
        dialog
            .setHeader('Insert/Edit Code Sample')
            .setSize(this.j.o.pasteCode.dialog.width, this.j.o.pasteCode.dialog.height)
            .setFooter([
            (0, ui_1.Button)(dialog, '', 'Cancel', 'default').onAction(function () {
                dialog.close();
                onCancel();
            }),
            (0, ui_1.Button)(dialog, 'save', 'Save', 'primary').onAction(function () {
                dialog.close();
                onSave();
            })
        ]);
        return dialog;
    };
    pasteCode.prototype.onChange = function () {
        var _this = this;
        (0, helpers_1.$$)('pre', this.j.editor).forEach(function (pre) {
            if (!(0, helpers_1.attr)(pre, 'contenteditable')) {
                (0, helpers_1.attr)(pre, 'contenteditable', false);
                _this.highlightCode(pre);
            }
        });
    };
    pasteCode.prototype.highlightCode = function (pre) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, globalHighlightLib, _b, css, js, langUrl, highlight, isLangLoaded, language, container;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.j.o.pasteCode, globalHighlightLib = _a.globalHighlightLib, _b = _a.highlightLib, css = _b.css, js = _b.js, langUrl = _b.langUrl, highlight = _b.highlight, isLangLoaded = _b.isLangLoaded;
                        if (!(!this.prismJSIsLoaded && !globalHighlightLib)) return [3, 2];
                        return [4, Promise.all([
                                (0, helpers_1.loadNextStyle)(this.jodit, css),
                                (0, helpers_1.loadNext)(this.jodit, js)
                            ])];
                    case 1:
                        _c.sent();
                        this.prismJSIsLoaded = true;
                        _c.label = 2;
                    case 2:
                        language = this.parseLanguage(pre);
                        if (!(!isLangLoaded(language) && !globalHighlightLib)) return [3, 4];
                        return [4, (0, helpers_1.appendScriptAsync)(this.jodit, langUrl(language)).catch(function () { return null; })];
                    case 3:
                        _c.sent();
                        _c.label = 4;
                    case 4:
                        container = pre;
                        if (pre.firstElementChild === pre.lastElementChild &&
                            modules_1.Dom.isTag(pre.firstElementChild, 'code')) {
                            container = pre.firstElementChild;
                        }
                        container.innerHTML = highlight(container.innerText, language);
                        return [2];
                }
            });
        });
    };
    pasteCode.prototype.onPreEdit = function (e) {
        var pre = modules_1.Dom.isNode(e) && modules_1.Dom.isTag(e, 'pre')
            ? e
            : modules_1.Dom.closest(e.target, 'pre', this.j.editor);
        if (pre) {
            var language = this.parseLanguage(pre);
            this.openCodeEditDialog(language, pre.innerText, pre);
        }
    };
    pasteCode.prototype.parseLanguage = function (pre) {
        var language = null;
        var getLang = function (code) {
            return code.classList.forEach(function (className) {
                if (/language-/.test(className)) {
                    var lng = /language-(.*)/.exec(className);
                    if (lng && lng[1]) {
                        language = lng[1];
                    }
                }
            });
        };
        getLang(pre);
        if (language == null &&
            pre.firstElementChild === pre.lastElementChild &&
            modules_1.Dom.isTag(pre.firstElementChild, 'code')) {
            getLang(pre.firstElementChild);
        }
        return this.jodit.o.pasteCode.canonicalLanguageCode(language || 'html');
    };
    pasteCode.prototype.onAfterGetValueFromEditor = function (data) {
        data.value = data.value
            .replace(/(<pre[^>]*)contenteditable\s*=\s*(['"]?)false\2([^>]*>\s*<code[^>]*>)(.*?)(<\/code>\s*<\/pre>)/gis, function (_, pre, _1, endPreStart, content, endPre) {
            return "".concat(pre).concat(endPreStart).concat((0, helpers_1.htmlspecialchars)((0, helpers_1.stripTags)(content))).concat(endPre);
        })
            .replace(/(<pre[^>]*)contenteditable\s*=\s*(['"]?)false\2([^>]*>)(.*?)(<\/pre>)/gis, function (_, pre, _1, endPreStart, content, endPre) {
            return "".concat(pre).concat(endPreStart).concat((0, helpers_1.htmlspecialchars)((0, helpers_1.stripTags)(content))).concat(endPre);
        });
    };
    tslib_1.__decorate([
        decorators_1.autobind
    ], pasteCode.prototype, "openCodeEditDialog", null);
    tslib_1.__decorate([
        (0, decorators_1.watch)('?:change'),
        (0, decorators_1.debounce)()
    ], pasteCode.prototype, "onChange", null);
    tslib_1.__decorate([
        (0, decorators_1.watch)(['?:dblclick', '?:editPreInPasteCode'])
    ], pasteCode.prototype, "onPreEdit", null);
    tslib_1.__decorate([
        (0, decorators_1.watch)('?:afterGetValueFromEditor')
    ], pasteCode.prototype, "onAfterGetValueFromEditor", null);
    pasteCode = tslib_1.__decorate([
        decorators_1.component
    ], pasteCode);
    return pasteCode;
}(plugin_1.Plugin));
exports.pasteCode = pasteCode;
index_1.Jodit.plugins.add('paste-code', pasteCode);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(63522));
/******/ return __webpack_exports__;
/******/ }
]);
});