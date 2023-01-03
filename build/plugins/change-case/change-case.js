/*!
 * jodit - Jodit is awesome and usefully wysiwyg editor with filebrowser
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
return (self["webpackChunkjodit"] = self["webpackChunkjodit"] || []).push([[102],{

/***/ 87000:
/***/ (function(module) {

module.exports = "<svg width=\"19\" height=\"13\" viewBox=\"0 0 19 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M12.799 11.449V12H7.764V11.449L8.695 11.487C9.075 11.525 9.265 11.373 9.265 11.031C9.265 10.8157 9.20167 10.5687 9.075 10.29L8.144 8.048H3.717L2.843 10.176C2.66567 10.5687 2.577 10.8853 2.577 11.126C2.577 11.392 2.71633 11.5187 2.995 11.506L3.907 11.449V12H0.62V11.449L1.114 11.487H1.19C1.44333 11.487 1.65233 11.3667 1.817 11.126C2.007 10.8473 2.197 10.48 2.387 10.024L6.358 0.466999H6.852L10.861 10.062C11.0383 10.518 11.222 10.879 11.412 11.145C11.5893 11.373 11.811 11.487 12.077 11.487H12.172L12.799 11.449ZM3.945 7.516H7.916L5.921 2.728L3.945 7.516Z\"/> <path d=\"M18.45 11.61V12H16.32C16.33 11.93 16.34 11.84 16.35 11.73C16.37 11.61 16.38 11.515 16.38 11.445L16.41 10.86C16.19 11.29 15.905 11.6 15.555 11.79C15.215 11.98 14.805 12.075 14.325 12.075C13.695 12.075 13.215 11.935 12.885 11.655C12.565 11.365 12.405 10.94 12.405 10.38C12.405 9.61 12.725 9.045 13.365 8.685C14.015 8.315 15.03 8.13 16.41 8.13V7.26C16.41 6.79 16.3 6.455 16.08 6.255C15.86 6.055 15.505 5.955 15.015 5.955C14.255 5.955 13.875 6.165 13.875 6.585C13.875 6.665 13.895 6.76 13.935 6.87C13.985 6.97 14.01 7.065 14.01 7.155C14.01 7.325 13.955 7.455 13.845 7.545C13.735 7.625 13.595 7.665 13.425 7.665C13.215 7.665 13.05 7.6 12.93 7.47C12.82 7.34 12.765 7.17 12.765 6.96C12.765 6.54 12.985 6.2 13.425 5.94C13.865 5.68 14.455 5.55 15.195 5.55C16.865 5.55 17.7 6.255 17.7 7.665V11.355C17.7 11.545 17.765 11.64 17.895 11.64L18.45 11.61ZM14.775 11.535C15.215 11.535 15.59 11.355 15.9 10.995C16.21 10.625 16.38 10.15 16.41 9.57V8.535C15.47 8.535 14.795 8.675 14.385 8.955C13.975 9.225 13.77 9.66 13.77 10.26C13.77 10.68 13.855 11 14.025 11.22C14.205 11.43 14.455 11.535 14.775 11.535Z\"/> </svg>"

/***/ }),

/***/ 87379:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.changeCase = void 0;
var tslib_1 = __webpack_require__(20255);
__webpack_require__(89183);
var plugin_1 = __webpack_require__(35570);
var modules_1 = __webpack_require__(46701);
var helpers_1 = __webpack_require__(92654);
var index_1 = __webpack_require__(78460);
var changeCase = (function (_super) {
    tslib_1.__extends(changeCase, _super);
    function changeCase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.requires = ['license'];
        _this.buttons = [
            {
                name: 'changeCase',
                group: 'font-style'
            }
        ];
        return _this;
    }
    changeCase.prototype.afterInit = function (jodit) {
        var _this = this;
        jodit.registerCommand('changeCase', {
            exec: function (command, ignore, mode) {
                mode = mode.toLowerCase();
                var range = jodit.s.range, startContainer = range.startContainer, startOffset = range.startOffset;
                if (jodit.s.isCollapsed()) {
                    var current = jodit.s.current(true);
                    if (current && current.parentElement) {
                        _this.applyCase(mode, current.parentElement);
                    }
                    range.setStart(startContainer, startOffset);
                    jodit.s.selectRange(range);
                }
                else {
                    var left = range.cloneRange(), right = range.cloneRange(), fakeLeft = jodit.createInside.fake(), fakeRight = jodit.createInside.fake();
                    left.collapse(true);
                    right.collapse(false);
                    left.insertNode(fakeLeft);
                    right.insertNode(fakeRight);
                    modules_1.Dom.between(fakeLeft, fakeRight, function (node) {
                        _this.applyCase(mode, node);
                    });
                    range.setStartAfter(fakeLeft);
                    range.setEndBefore(fakeRight);
                    jodit.s.selectRange(range);
                    modules_1.Dom.safeRemove(fakeLeft);
                    modules_1.Dom.safeRemove(fakeRight);
                }
            }
        });
    };
    changeCase.prototype.applyCase = function (mode, node) {
        var _this = this;
        var change = function (str) {
            switch (mode) {
                case 'lowercase':
                    return str.toLowerCase();
                case 'uppercase':
                    return str.toUpperCase();
                default:
                    return str.split(' ').map(helpers_1.ucfirst).join(' ');
            }
        };
        if (modules_1.Dom.isText(node)) {
            var txt = node.nodeValue;
            if (txt) {
                node.nodeValue = change(txt);
            }
        }
        else {
            modules_1.Dom.each(node, function (child) {
                _this.applyCase(mode, child);
            });
        }
    };
    changeCase.prototype.beforeDestruct = function (jodit) { };
    return changeCase;
}(plugin_1.Plugin));
exports.changeCase = changeCase;
index_1.Jodit.plugins.add('change-case', changeCase);


/***/ }),

/***/ 89183:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var config_1 = __webpack_require__(27537);
var index_1 = __webpack_require__(92654);
config_1.Config.prototype.controls.changeCase = {
    tooltip: 'Change case',
    icon: __webpack_require__(87000),
    list: ['lowercase', 'UPPERCASE', 'Title Case'],
    isDisabled: function (e) {
        return !e.s.current();
    },
    exec: function (jodit, current, _a) {
        var control = _a.control;
        var key = control.command + 'Selected', mode = (control.args && control.args[0]) || (0, index_1.dataBind)(jodit, key);
        if (!mode || !control.command) {
            return false;
        }
        (0, index_1.dataBind)(jodit, key, mode);
        jodit.execCommand(control.command, null, mode);
    },
    command: 'changeCase'
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(87379));
/******/ return __webpack_exports__;
/******/ }
]);
});