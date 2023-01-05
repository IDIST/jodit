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
return (self["webpackChunkidist_jodit"] = self["webpackChunkidist_jodit"] || []).push([[288],{

/***/ 92321:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 89584:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(20255);
var config_1 = __webpack_require__(27537);
var dom_1 = __webpack_require__(94522);
var helpers_1 = __webpack_require__(92654);
var common = ['tune.up', 'tune.remove', 'tune.down'], header = tslib_1.__spreadArray([
    'tune.h1',
    'tune.h2',
    'tune.h3',
    '\n',
    'tune.h4',
    'tune.h5',
    'tune.h6',
    '\n'
], tslib_1.__read(common), false);
config_1.Config.prototype.tuneBlock = {
    popup: {
        p: common,
        table: common,
        img: common,
        blockquote: common,
        div: common,
        pre: tslib_1.__spreadArray(['tune.editPre'], tslib_1.__read(common), false),
        h1: header,
        h2: header,
        h3: header,
        h4: header,
        h5: header,
        h6: header
    }
};
function headerControl(h) {
    return {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">' +
            '<text dominant-baseline="text-before-edge" style="font: 45px sans-serif" x="0" y="0">' +
            h.toUpperCase() +
            '</text>' +
            '</svg>',
        isActive: function (editor, control, button) {
            var _a;
            return ((_a = button === null || button === void 0 ? void 0 : button.target) === null || _a === void 0 ? void 0 : _a.tagName.toLowerCase()) === h;
        },
        exec: function (editor, target) {
            if (target) {
                editor.selection.save();
                var header_1 = dom_1.Dom.replace(target, h, editor.createInside);
                editor.selection.restore();
                editor.e.fire('synchro');
                editor.e.fire('afterExecTune.tune', header_1);
            }
            return true;
        }
    };
}
function moveTo(up) {
    var sibling = up ? 'previousSibling' : 'nextSibling';
    return {
        icon: up ? 'angle-up' : 'angle-down',
        isDisabled: function (editor, control, button) {
            var _a;
            return !((_a = button === null || button === void 0 ? void 0 : button.target) === null || _a === void 0 ? void 0 : _a[sibling]);
        },
        exec: function (editor, target) {
            var siblingNode = target === null || target === void 0 ? void 0 : target[sibling];
            if (target && siblingNode) {
                editor.selection.save();
                (0, helpers_1.call)(up ? dom_1.Dom.before : dom_1.Dom.after, siblingNode, target);
                editor.selection.restore();
            }
            editor.e.fire('synchro');
            editor.e.fire('afterExecTune.tune');
            return true;
        }
    };
}
config_1.Config.prototype.controls.tune = {
    h1: headerControl('h1'),
    h2: headerControl('h2'),
    h3: headerControl('h3'),
    h4: headerControl('h4'),
    h5: headerControl('h5'),
    h6: headerControl('h6'),
    up: moveTo(true),
    down: moveTo(false),
    editPre: {
        icon: 'pencil',
        exec: function (editor, target) {
            editor.e.fire('editPreInPasteCode', target);
        }
    },
    remove: {
        icon: 'bin',
        exec: function (editor, target) {
            dom_1.Dom.safeRemove(target);
            editor.e.fire('synchro');
            editor.e.fire('closeTuner.tune');
            editor.e.fire('hideTuner.tune');
        }
    }
};


/***/ }),

/***/ 62367:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tuneBlock = void 0;
var tslib_1 = __webpack_require__(20255);
var plugin_1 = __webpack_require__(35570);
var decorators_1 = __webpack_require__(9901);
var index_1 = __webpack_require__(78460);
var tuner_1 = __webpack_require__(63449);
__webpack_require__(89584);
var tuneBlock = (function (_super) {
    tslib_1.__extends(tuneBlock, _super);
    function tuneBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.requires = ['license'];
        return _this;
    }
    tuneBlock.prototype.afterInit = function (jodit) {
        this.tuner = new tuner_1.UITuner(jodit);
    };
    tuneBlock.prototype.hideTuner = function () {
        this.tuner.hide();
    };
    tuneBlock.prototype.onChangeSelection = function () {
        if (!this.j.s.isCollapsed()) {
            this.hideTuner();
        }
    };
    tuneBlock.prototype.onClickInBlock = function (_) {
        if (this.j.s.isCollapsed()) {
            this.tuner.show();
        }
    };
    tuneBlock.prototype.beforeDestruct = function (jodit) {
        this.tuner.destruct();
    };
    tslib_1.__decorate([
        (0, decorators_1.watch)(':outsideClick :keydown')
    ], tuneBlock.prototype, "hideTuner", null);
    tslib_1.__decorate([
        (0, decorators_1.watch)('j.ed:selectionchange'),
        (0, decorators_1.debounce)()
    ], tuneBlock.prototype, "onChangeSelection", null);
    tslib_1.__decorate([
        (0, decorators_1.watch)(':click')
    ], tuneBlock.prototype, "onClickInBlock", null);
    return tuneBlock;
}(plugin_1.Plugin));
exports.tuneBlock = tuneBlock;
index_1.Jodit.plugins.add('tune-block', tuneBlock);


/***/ }),

/***/ 63449:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UITuner = void 0;
var tslib_1 = __webpack_require__(20255);
__webpack_require__(92321);
var ui_1 = __webpack_require__(14153);
var dom_1 = __webpack_require__(94522);
var helpers_1 = __webpack_require__(92654);
var decorators_1 = __webpack_require__(9901);
var factory_1 = __webpack_require__(42701);
var UITuner = (function (_super) {
    tslib_1.__extends(UITuner, _super);
    function UITuner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isShown = false;
        _this.toolbar = (0, factory_1.makeCollection)(_this.j, _this);
        _this.popup = new ui_1.Popup(_this.j, false);
        return _this;
    }
    UITuner.prototype.className = function () {
        return 'UITuner';
    };
    UITuner.prototype.render = function () {
        return "<div>\n\t\t\t<div class='&__handle' title='~Click to tune~'/>\n\t\t</div>";
    };
    UITuner.prototype.show = function () {
        var _this = this;
        var target = this.j.s.current();
        if (!target) {
            return this.hide();
        }
        var block = dom_1.Dom.isBlock(target)
            ? target
            : dom_1.Dom.closest(target, function (node) {
                return Boolean(node &&
                    _this.j.o.tuneBlock.popup[node.nodeName.toLowerCase()]);
            }, this.j.editor);
        if (!block ||
            block === this.j.editor ||
            !this.j.o.tuneBlock.popup[block.tagName.toLowerCase()]) {
            return this.hide();
        }
        this.currentBlock = block;
        this.isShown = true;
        this.closeToolbar();
        this.calcPosition();
        if (!this.container.parentNode) {
            this.j.workplace.append(this.container);
        }
    };
    UITuner.prototype.hide = function () {
        if (this.isShown) {
            this.isShown = false;
            dom_1.Dom.safeRemove(this.container);
            this.closeToolbar();
        }
    };
    UITuner.prototype.onEditorScroll = function () {
        if (this.isShown) {
            this.calcPosition();
        }
    };
    UITuner.prototype.calcPosition = function () {
        var offset = 15;
        var marginLeft = (0, helpers_1.css)(this.j.editor, 'marginLeft');
        var paddingLeft = (0, helpers_1.css)(this.j.editor, 'paddingLeft');
        var marginTop = (0, helpers_1.css)(this.j.editor, 'marginTop');
        var left = this.currentBlock.offsetWidth - offset + marginLeft + paddingLeft;
        var top = this.currentBlock.offsetTop - this.j.editor.scrollTop + marginTop;
        (0, helpers_1.css)(this.container, {
            transform: "translate3d(".concat(left, "px, ").concat(top, "px, 0)")
        });
        if (this.popup.isOpened) {
            this.popup.updatePosition();
        }
    };
    UITuner.prototype.onAfterExecTune = function (newBlock) {
        if (newBlock) {
            this.currentBlock = newBlock;
        }
        this.calcPosition();
        this.openToolbar();
    };
    UITuner.prototype.onClickPrevent = function (e) {
        e.preventDefault();
        e.stopPropagation();
    };
    UITuner.prototype.onTargetClick = function () {
        this.toggleToolbar();
    };
    UITuner.prototype.openToolbar = function () {
        this.setMod('opened', true);
        this.toolbar.build(this.j.o.tuneBlock.popup[this.currentBlock.tagName.toLowerCase()], this.currentBlock);
        this.popup.setContent(this.toolbar.container);
        if (!this.popup.isOpened) {
            var handle_1 = this.getElm('handle');
            (0, helpers_1.assert)(handle_1 != null, 'Handle element does not exist');
            this.popup.open(function () { return (0, helpers_1.position)(handle_1); });
        }
    };
    UITuner.prototype.closeToolbar = function () {
        this.setMod('opened', false);
        this.popup.close();
    };
    UITuner.prototype.toggleToolbar = function () {
        this.getMod('opened') ? this.closeToolbar() : this.openToolbar();
    };
    tslib_1.__decorate([
        (0, decorators_1.watch)(':hideTuner.tune')
    ], UITuner.prototype, "hide", null);
    tslib_1.__decorate([
        (0, decorators_1.watch)('j.editor:scroll'),
        (0, decorators_1.throttle)(10)
    ], UITuner.prototype, "onEditorScroll", null);
    tslib_1.__decorate([
        (0, decorators_1.watch)(':afterExecTune.tune'),
        (0, decorators_1.idle)()
    ], UITuner.prototype, "onAfterExecTune", null);
    tslib_1.__decorate([
        (0, decorators_1.watch)('container:click container:mousedown')
    ], UITuner.prototype, "onClickPrevent", null);
    tslib_1.__decorate([
        (0, decorators_1.watch)('handle:click')
    ], UITuner.prototype, "onTargetClick", null);
    tslib_1.__decorate([
        (0, decorators_1.watch)(':closeTuner.tune')
    ], UITuner.prototype, "closeToolbar", null);
    UITuner = tslib_1.__decorate([
        decorators_1.component
    ], UITuner);
    return UITuner;
}(ui_1.UIElement));
exports.UITuner = UITuner;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(62367));
/******/ return __webpack_exports__;
/******/ }
]);
});