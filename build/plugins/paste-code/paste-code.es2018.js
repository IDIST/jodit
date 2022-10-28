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

/***/ 94546:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "pasteCode": function() { return /* binding */ pasteCode; }
});

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(20255);
// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(27537);
// EXTERNAL MODULE: ./src/core/helpers/index.ts + 14 modules
var helpers = __webpack_require__(52607);
;// CONCATENATED MODULE: ./src/plugins/paste-code/config.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */


config/* Config.prototype.controls.pasteCode */.D.prototype.controls.pasteCode = {
    icon: __webpack_require__(94819),
    tooltip: 'Paste code',
    command: 'pasteCode'
};
config/* Config.prototype.pasteCode */.D.prototype.pasteCode = {
    globalHighlightLib: false,
    canonicalLanguageCode(lang) {
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
        highlight(code, language) {
            return Prism.highlight(code, Prism.languages[language] || Prism.languages.plain, language);
        },
        isLangLoaded(lang) {
            return Boolean(Prism.languages[lang]);
        },
        js: [
            'https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/prism.min.js'
        ],
        langUrl: (lang) => `https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/components/prism-${lang}.min.js`,
        css: [
            'https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/themes/prism.min.css'
        ]
    },
    defaultLanguage: 'html',
    insertTemplate: (jodit, language, value) => `<pre class="language-${language}">${(0,helpers.htmlspecialchars)(value)}</pre>`,
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

// EXTERNAL MODULE: ./src/core/plugin/index.ts
var core_plugin = __webpack_require__(35570);
// EXTERNAL MODULE: ./src/core/ui/index.ts + 2 modules
var ui = __webpack_require__(41685);
// EXTERNAL MODULE: ./src/core/decorators/index.ts + 7 modules
var decorators = __webpack_require__(11169);
// EXTERNAL MODULE: ./src/index.ts + 153 modules
var src = __webpack_require__(16136);
// EXTERNAL MODULE: ./src/modules/index.ts + 15 modules
var modules = __webpack_require__(81165);
;// CONCATENATED MODULE: ./src/plugins/paste-code/paste-code.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */









let pasteCode = class pasteCode extends core_plugin/* Plugin */.S {
    constructor() {
        super(...arguments);
        this.requires = ['license'];
        this.buttons = [
            {
                name: 'pasteCode',
                group: 'clipboard'
            }
        ];
        this.prismJSIsLoaded = false;
    }
    afterInit(jodit) {
        jodit.registerCommand('pasteCode', () => this.openCodeEditDialog());
    }
    openCodeEditDialog(defLanguage, defValue, pre) {
        const jodit = this.j;
        const form = this.createForm(), { code, language } = (0,helpers.refs)(form);
        if (defLanguage) {
            language.value = defLanguage;
        }
        if (defValue) {
            code.value = defValue;
        }
        jodit.async.requestIdleCallback(() => {
            code.focus();
        });
        jodit.s.save();
        const dialog = this.createDialog(() => {
            if (form.validate()) {
                jodit.s.restore();
                const newPre = jodit.createInside.fromHTML(jodit.o.pasteCode.insertTemplate(jodit, language.value, code.value));
                if (pre) {
                    modules.Dom.replace(pre, newPre, jodit.createInside, false, true);
                }
                else {
                    const current = jodit.s.current(), block = modules.Dom.up(current, modules.Dom.isBlock, jodit.editor);
                    block
                        ? modules.Dom.after(block, newPre)
                        : jodit.s.insertNode(newPre);
                }
                this.onChange();
                return;
            }
            return false;
        }, () => {
            jodit.s.restore();
        });
        dialog.setContent(form.container).open(true);
    }
    beforeDestruct(jodit) { }
    createForm() {
        const { jodit } = this;
        return new ui/* UIForm */.x4(jodit, [
            new ui/* UISelect */.Cj(jodit, {
                name: 'language',
                label: 'Language',
                value: jodit.o.pasteCode.defaultLanguage,
                options: jodit.o.pasteCode.languages,
                required: true
            }),
            new ui/* UITextArea */.GJ(jodit, {
                label: 'Code view',
                resizable: false,
                name: 'code',
                required: true,
                className: 'jodit-paste-code__textarea'
            })
        ], {
            className: 'jodit-paste-code'
        });
    }
    createDialog(onSave, onCancel) {
        const dialog = new modules.Dialog({
            language: this.j.o.language
        });
        dialog
            .setHeader('Insert/Edit Code Sample')
            .setSize(this.j.o.pasteCode.dialog.width, this.j.o.pasteCode.dialog.height)
            .setFooter([
            (0,ui/* Button */.zx)(dialog, '', 'Cancel', 'default').onAction(() => {
                dialog.close();
                onCancel();
            }),
            (0,ui/* Button */.zx)(dialog, 'save', 'Save', 'primary').onAction(() => {
                dialog.close();
                onSave();
            })
        ]);
        return dialog;
    }
    onChange() {
        (0,helpers.$$)('pre', this.j.editor).forEach((pre) => {
            if (!(0,helpers.attr)(pre, 'contenteditable')) {
                (0,helpers.attr)(pre, 'contenteditable', false);
                this.highlightCode(pre);
            }
        });
    }
    async highlightCode(pre) {
        const { globalHighlightLib, highlightLib: { css, js, langUrl, highlight, isLangLoaded } } = this.j.o.pasteCode;
        if (!this.prismJSIsLoaded && !globalHighlightLib) {
            await Promise.all([
                (0,helpers.loadNextStyle)(this.jodit, css),
                (0,helpers.loadNext)(this.jodit, js)
            ]);
            this.prismJSIsLoaded = true;
        }
        const language = this.parseLanguage(pre);
        if (!isLangLoaded(language) && !globalHighlightLib) {
            await (0,helpers.appendScriptAsync)(this.jodit, langUrl(language)).catch(() => null);
        }
        let container = pre;
        if (pre.firstElementChild === pre.lastElementChild &&
            modules.Dom.isTag(pre.firstElementChild, 'code')) {
            container = pre.firstElementChild;
        }
        container.innerHTML = highlight(container.innerText, language);
    }
    onPreEdit(e) {
        const pre = modules.Dom.isNode(e) && modules.Dom.isTag(e, 'pre')
            ? e
            : modules.Dom.closest(e.target, 'pre', this.j.editor);
        if (pre) {
            const language = this.parseLanguage(pre);
            this.openCodeEditDialog(language, pre.innerText, pre);
        }
    }
    parseLanguage(pre) {
        let language = null;
        const getLang = (code) => code.classList.forEach((className) => {
            if (/language-/.test(className)) {
                const lng = /language-(.*)/.exec(className);
                if (lng && lng[1]) {
                    language = lng[1];
                }
            }
        });
        getLang(pre);
        if (language == null &&
            pre.firstElementChild === pre.lastElementChild &&
            modules.Dom.isTag(pre.firstElementChild, 'code')) {
            getLang(pre.firstElementChild);
        }
        return this.jodit.o.pasteCode.canonicalLanguageCode(language || 'html');
    }
    onAfterGetValueFromEditor(data) {
        data.value = data.value
            .replace(/(<pre[^>]*)contenteditable\s*=\s*(['"]?)false\2([^>]*>\s*<code[^>]*>)(.*?)(<\/code>\s*<\/pre>)/gis, (_, pre, _1, endPreStart, content, endPre) => {
            return `${pre}${endPreStart}${(0,helpers.htmlspecialchars)((0,helpers.stripTags)(content))}${endPre}`;
        })
            .replace(/(<pre[^>]*)contenteditable\s*=\s*(['"]?)false\2([^>]*>)(.*?)(<\/pre>)/gis, (_, pre, _1, endPreStart, content, endPre) => {
            return `${pre}${endPreStart}${(0,helpers.htmlspecialchars)((0,helpers.stripTags)(content))}${endPre}`;
        });
    }
};
(0,tslib_es6/* __decorate */.gn)([
    decorators.autobind
], pasteCode.prototype, "openCodeEditDialog", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('?:change'),
    (0,decorators.debounce)()
], pasteCode.prototype, "onChange", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(['?:dblclick', '?:editPreInPasteCode'])
], pasteCode.prototype, "onPreEdit", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('?:afterGetValueFromEditor')
], pasteCode.prototype, "onAfterGetValueFromEditor", null);
pasteCode = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], pasteCode);

src.Jodit.plugins.add('paste-code', pasteCode);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(94546));
/******/ return __webpack_exports__;
/******/ }
]);
});