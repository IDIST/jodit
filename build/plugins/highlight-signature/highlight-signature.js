/*!
 * idist-jodit - Jodit is awesome and usefully wysiwyg editor with filebrowser
 * Author: KimSunWook <ceo@idist.ai> (https://xdsoft.net/)
 * Version: v3.20.9
 * Url: https://github.com/IDIST/jodit
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
return (self["webpackChunkidist_jodit"] = self["webpackChunkidist_jodit"] || []).push([[10],{

/***/ 56953:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.highlightSignature = void 0;
var tslib_1 = __webpack_require__(20255);
var plugin_1 = __webpack_require__(35570);
var decorators_1 = __webpack_require__(9901);
var dom_1 = __webpack_require__(94522);
var utils_1 = __webpack_require__(73344);
var index_1 = __webpack_require__(78460);
var config_1 = __webpack_require__(27537);
config_1.Config.prototype.highlightSignature = {
    schema: {},
    excludeTags: ['pre']
};
var highlightSignature = (function (_super) {
    tslib_1.__extends(highlightSignature, _super);
    function highlightSignature() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.requires = ['license'];
        _this.idleId = 0;
        return _this;
    }
    highlightSignature.prototype.afterInit = function (jodit) {
        if (Object.keys(jodit.o.highlightSignature.schema).length) {
            jodit.e
                .on('change afterSetMode', this.walkNodes)
                .on('afterGetValueFromEditor', highlightSignature.removeUtilWrappers);
        }
    };
    highlightSignature.prototype.beforeDestruct = function (jodit) {
        jodit.e
            .off('change afterSetMode', this.walkNodes)
            .off('afterGetValueFromEditor', highlightSignature.removeUtilWrappers);
    };
    highlightSignature.prototype.walkNodes = function () {
        if (!this.j.isEditorMode()) {
            return;
        }
        this.checkUtilsBoxToSchema();
        var j = this.j, nodeIterator = j.ed.createNodeIterator(j.editor, NodeFilter.SHOW_TEXT);
        this.j.async.cancelIdleCallback(this.idleId);
        this.workLoop(nodeIterator);
    };
    highlightSignature.prototype.runWorker = function (e, nodeIterator) {
        var node;
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
    };
    highlightSignature.prototype.workLoop = function (nodeIterator) {
        var _this = this;
        this.idleId = this.j.async.requestIdleCallback(function (e) {
            _this.runWorker(e, nodeIterator);
        }, {
            timeout: this.j.defaultTimeout
        });
    };
    highlightSignature.prototype.checkNormalizing = function (node) {
        if (dom_1.Dom.isText(node.nextSibling)) {
            this.j.editor.normalize();
            this.walkNodes();
            return true;
        }
        return false;
    };
    highlightSignature.prototype.checkReplaceSchemas = function (node) {
        if (highlightSignature.hasUtilWrapper(node)) {
            return;
        }
        var value = node.nodeValue;
        if (value == null) {
            return;
        }
        var j = this.j, opts = j.o.highlightSignature;
        for (var schemaKey in opts.schema) {
            var regExp = RegExp(schemaKey);
            if (regExp.test(value)) {
                var matched = value.match(regExp);
                if (!matched || matched.index === undefined) {
                    continue;
                }
                var elm = opts.schema[schemaKey](this.j, matched);
                if (elm) {
                    dom_1.Dom.markTemporary(elm, {
                        dataHighlightSchema: schemaKey
                    });
                    this.replaceMatchedTextToElm(node, value, matched, elm);
                    return;
                }
            }
        }
    };
    highlightSignature.prototype.replaceMatchedTextToElm = function (node, value, matched, elm) {
        var _a;
        var j = this.j, range = j.s.range, hasCursorInside = range.startContainer === node, offset = range.startOffset, index = (_a = matched.index) !== null && _a !== void 0 ? _a : 0;
        node.nodeValue = value.substr(0, index);
        var rightPartText = value.substr(index + matched[0].length);
        if (rightPartText.length) {
            var rightPart = j.createInside.text(rightPartText);
            dom_1.Dom.after(node, rightPart);
        }
        elm.innerText = matched[0];
        dom_1.Dom.after(node, elm);
        if (hasCursorInside) {
            this.restoreCursorPosition(offset, node, elm.firstChild, elm.nextSibling);
        }
    };
    highlightSignature.hasUtilWrapper = function (node) {
        return dom_1.Dom.isTemporary(node.parentElement);
    };
    highlightSignature.removeUtilWrappers = function (data) {
        data.value = dom_1.Dom.replaceTemporaryFromString(data.value);
    };
    highlightSignature.prototype.restoreCursorPosition = function (offset) {
        var e_1, _a;
        var nodes = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            nodes[_i - 1] = arguments[_i];
        }
        try {
            for (var nodes_1 = tslib_1.__values(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
                var node = nodes_1_1.value;
                if (node && node.nodeValue) {
                    var value = node.nodeValue;
                    if (value.length >= offset) {
                        var range = this.j.s.createRange();
                        range.setStart(node, offset);
                        this.j.s.selectRange(range, false);
                        break;
                    }
                    offset -= value.length;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (nodes_1_1 && !nodes_1_1.done && (_a = nodes_1.return)) _a.call(nodes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    highlightSignature.prototype.checkUtilsBoxToSchema = function () {
        var _this = this;
        dom_1.Dom.temporaryList(this.j.editor).forEach(function (elm) {
            var _a;
            var schema = (0, utils_1.attr)(elm, 'dataHighlightSchema');
            if (!schema) {
                return;
            }
            var reg = RegExp(schema), text = (_a = elm.innerText) !== null && _a !== void 0 ? _a : '';
            if (!reg.test(text) || text.replace(reg, '').length) {
                _this.j.s.save();
                dom_1.Dom.unwrap(elm);
                _this.j.s.restore();
            }
        });
    };
    tslib_1.__decorate([
        (0, decorators_1.debounce)()
    ], highlightSignature.prototype, "walkNodes", null);
    tslib_1.__decorate([
        decorators_1.autobind
    ], highlightSignature.prototype, "runWorker", null);
    return highlightSignature;
}(plugin_1.Plugin));
exports.highlightSignature = highlightSignature;
index_1.Jodit.plugins.add('highlight-signature', highlightSignature);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(56953));
/******/ return __webpack_exports__;
/******/ }
]);
});