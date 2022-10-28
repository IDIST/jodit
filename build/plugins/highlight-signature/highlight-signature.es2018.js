/*!
 * jodit - Jodit is awesome and usefully wysiwyg editor with filebrowser
 * Author: Chupurnov <chupurnov@gmail.com> (https://xdsoft.net/)
 * Version: v3.20.4
 * Url: https://xdsoft.net/jodit/
 * License(s): MIT
 */
	
"use strict";
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
return (self["webpackChunkjodit"] = self["webpackChunkjodit"] || []).push([[10],{

/***/ 56953:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "highlightSignature": function() { return /* binding */ highlightSignature; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20255);
/* harmony import */ var jodit_core_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35570);
/* harmony import */ var jodit_core_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11169);
/* harmony import */ var jodit_core_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94522);
/* harmony import */ var jodit_core_helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11358);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16136);
/* harmony import */ var jodit_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27537);
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */







jodit_config__WEBPACK_IMPORTED_MODULE_5__/* .Config.prototype.highlightSignature */ .D.prototype.highlightSignature = {
    schema: {},
    excludeTags: ['pre']
};
class highlightSignature extends jodit_core_plugin__WEBPACK_IMPORTED_MODULE_0__/* .Plugin */ .S {
    constructor() {
        super(...arguments);
        this.requires = ['license'];
        this.idleId = 0;
    }
    afterInit(jodit) {
        if (Object.keys(jodit.o.highlightSignature.schema).length) {
            jodit.e
                .on('change afterSetMode', this.walkNodes)
                .on('afterGetValueFromEditor', highlightSignature.removeUtilWrappers);
        }
    }
    beforeDestruct(jodit) {
        jodit.e
            .off('change afterSetMode', this.walkNodes)
            .off('afterGetValueFromEditor', highlightSignature.removeUtilWrappers);
    }
    walkNodes() {
        if (!this.j.isEditorMode()) {
            return;
        }
        this.checkUtilsBoxToSchema();
        const { j } = this, nodeIterator = j.ed.createNodeIterator(j.editor, NodeFilter.SHOW_TEXT);
        this.j.async.cancelIdleCallback(this.idleId);
        this.workLoop(nodeIterator);
    }
    runWorker(e, nodeIterator) {
        let node;
        this.j.e.mute();
        try {
            do {
                node = nodeIterator.nextNode();
                if (!node) {
                    return;
                }
                if (this.checkNormalizing(node)) {
                    return;
                }
                this.checkReplaceSchemas(node);
            } while (node && e.timeRemaining() > 0);
        }
        finally {
            this.j.e.unmute();
        }
        this.workLoop(nodeIterator);
    }
    workLoop(nodeIterator) {
        this.idleId = this.j.async.requestIdleCallback((e) => {
            this.runWorker(e, nodeIterator);
        }, {
            timeout: this.j.defaultTimeout
        });
    }
    checkNormalizing(node) {
        if (jodit_core_dom__WEBPACK_IMPORTED_MODULE_2__/* .Dom.isText */ .i.isText(node.nextSibling)) {
            this.j.editor.normalize();
            this.walkNodes();
            return true;
        }
        return false;
    }
    checkReplaceSchemas(node) {
        if (highlightSignature.hasUtilWrapper(node)) {
            return;
        }
        const value = node.nodeValue;
        if (value == null) {
            return;
        }
        const { j } = this, opts = j.o.highlightSignature;
        for (const schemaKey in opts.schema) {
            const regExp = RegExp(schemaKey);
            if (regExp.test(value)) {
                const matched = value.match(regExp);
                if (!matched || matched.index === undefined) {
                    continue;
                }
                const elm = opts.schema[schemaKey](this.j, matched);
                if (elm) {
                    jodit_core_dom__WEBPACK_IMPORTED_MODULE_2__/* .Dom.markTemporary */ .i.markTemporary(elm, {
                        dataHighlightSchema: schemaKey
                    });
                    this.replaceMatchedTextToElm(node, value, matched, elm);
                    return;
                }
            }
        }
    }
    replaceMatchedTextToElm(node, value, matched, elm) {
        var _a;
        const { j } = this, { range } = j.s, hasCursorInside = range.startContainer === node, offset = range.startOffset, index = (_a = matched.index) !== null && _a !== void 0 ? _a : 0;
        node.nodeValue = value.substr(0, index);
        const rightPartText = value.substr(index + matched[0].length);
        if (rightPartText.length) {
            const rightPart = j.createInside.text(rightPartText);
            jodit_core_dom__WEBPACK_IMPORTED_MODULE_2__/* .Dom.after */ .i.after(node, rightPart);
        }
        elm.innerText = matched[0];
        jodit_core_dom__WEBPACK_IMPORTED_MODULE_2__/* .Dom.after */ .i.after(node, elm);
        if (hasCursorInside) {
            this.restoreCursorPosition(offset, node, elm.firstChild, elm.nextSibling);
        }
    }
    static hasUtilWrapper(node) {
        return jodit_core_dom__WEBPACK_IMPORTED_MODULE_2__/* .Dom.isTemporary */ .i.isTemporary(node.parentElement);
    }
    static removeUtilWrappers(data) {
        data.value = jodit_core_dom__WEBPACK_IMPORTED_MODULE_2__/* .Dom.replaceTemporaryFromString */ .i.replaceTemporaryFromString(data.value);
    }
    restoreCursorPosition(offset, ...nodes) {
        for (const node of nodes) {
            if (node && node.nodeValue) {
                const value = node.nodeValue;
                if (value.length >= offset) {
                    const range = this.j.s.createRange();
                    range.setStart(node, offset);
                    this.j.s.selectRange(range, false);
                    break;
                }
                offset -= value.length;
            }
        }
    }
    checkUtilsBoxToSchema() {
        jodit_core_dom__WEBPACK_IMPORTED_MODULE_2__/* .Dom.temporaryList */ .i.temporaryList(this.j.editor).forEach((elm) => {
            var _a;
            const schema = (0,jodit_core_helpers_utils__WEBPACK_IMPORTED_MODULE_3__/* .attr */ .Lj)(elm, 'dataHighlightSchema');
            if (!schema) {
                return;
            }
            const reg = RegExp(schema), text = (_a = elm.innerText) !== null && _a !== void 0 ? _a : '';
            if (!reg.test(text) || text.replace(reg, '').length) {
                this.j.s.save();
                jodit_core_dom__WEBPACK_IMPORTED_MODULE_2__/* .Dom.unwrap */ .i.unwrap(elm);
                this.j.s.restore();
            }
        });
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__decorate */ .gn)([
    (0,jodit_core_decorators__WEBPACK_IMPORTED_MODULE_1__.debounce)()
], highlightSignature.prototype, "walkNodes", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__decorate */ .gn)([
    jodit_core_decorators__WEBPACK_IMPORTED_MODULE_1__.autobind
], highlightSignature.prototype, "runWorker", null);
_index__WEBPACK_IMPORTED_MODULE_4__.Jodit.plugins.add('highlight-signature', highlightSignature);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(56953));
/******/ return __webpack_exports__;
/******/ }
]);
});