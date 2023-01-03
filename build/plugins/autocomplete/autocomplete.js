/*!
 * idist-jodit - Jodit is awesome and usefully wysiwyg editor with filebrowser
 * Author: KimSunWook <ceo@idist.ai> (https://xdsoft.net/)
 * Version: v3.20.4
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
return (self["webpackChunkidist_jodit"] = self["webpackChunkidist_jodit"] || []).push([[633],{

/***/ 63660:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 52423:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.autocomplete = void 0;
var tslib_1 = __webpack_require__(20255);
var plugin_1 = __webpack_require__(35570);
var config_1 = __webpack_require__(27537);
var decorators_1 = __webpack_require__(9901);
var helpers_1 = __webpack_require__(92654);
var modules_1 = __webpack_require__(46701);
var autocomplete_1 = __webpack_require__(86473);
var constants_1 = __webpack_require__(10063);
var index_1 = __webpack_require__(78460);
var helpers_2 = __webpack_require__(98972);
config_1.Config.prototype.autocomplete = {
    sources: [],
    maxItems: 50,
    isMatchedQuery: function (query, value) {
        return value.toLowerCase().indexOf(query.toLowerCase()) === 0;
    },
    itemRenderer: function (item) { var _a; return (_a = item.title) !== null && _a !== void 0 ? _a : item.value; },
    insertValueRenderer: function (item) { return item.value + '&nbsp;'; }
};
var autocomplete = (function (_super) {
    tslib_1.__extends(autocomplete, _super);
    function autocomplete() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.requires = ['enter', 'license'];
        _this.hasStyle = !index_1.Jodit.fatMode;
        _this.sources = [];
        return _this;
    }
    autocomplete.prototype.afterInit = function (jodit) {
        var _this = this;
        this.popup = new modules_1.Popup(jodit);
        this.popup.setMod('padding', false);
        this.list = new autocomplete_1.Autocomplete(jodit);
        this.popup.setContent(this.list.container);
        jodit.e
            .on('select.autocomplete', function (item) {
            var insertValue = item.value;
            if ((0, helpers_1.isFunction)(item.insertValueRenderer)) {
                insertValue = item.insertValueRenderer(item);
            }
            if (!modules_1.Dom.isNode(insertValue)) {
                insertValue = jodit.createInside.fromHTML(insertValue);
            }
            (0, helpers_2.replaceTextLeftOfCursorAfterSpace)(jodit.s.range, insertValue);
            _this.j.s.setCursorAfter(insertValue);
            _this.popup.close();
        })
            .on('keydown.autocomplete', this.onKeyDown)
            .on('keydown.autocomplete', this.onKeyControlDown, {
            top: true
        })
            .on('beforeEnter.autocomplete', this.onEnter, { top: true })
            .on('autocomplete.autocomplete', this.onAutoComplete)
            .on('registerAutocompleteSource.autocomplete', this.registerAutocompleteSource);
    };
    autocomplete.prototype.registerAutocompleteSource = function (source) {
        this.sources.push(source);
    };
    autocomplete.isControlKey = function (key) {
        return (key === constants_1.KEY_DOWN ||
            key === constants_1.KEY_UP ||
            key === constants_1.KEY_ENTER ||
            key === constants_1.KEY_TAB);
    };
    autocomplete.prototype.onKeyDown = function (e) {
        var _a, _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var s, range, query, result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (e.key === constants_1.KEY_ESC) {
                            this.popup.isOpened && this.popup.close();
                            return [2];
                        }
                        s = this.j.s;
                        if (autocomplete.isControlKey(e.key) ||
                            !s.isInsideArea ||
                            !s.isCollapsed) {
                            return [2];
                        }
                        range = ((_a = this.j.s.sel) === null || _a === void 0 ? void 0 : _a.rangeCount)
                            ? (_b = this.j.s.sel) === null || _b === void 0 ? void 0 : _b.getRangeAt(0)
                            : null;
                        query = range && (0, helpers_2.getTextLeftOfCursor)(range).split(' ').pop();
                        if (!(query && (0, helpers_1.trim)(query).length)) return [3, 2];
                        return [4, this.onAutoComplete(query)];
                    case 1:
                        result = _c.sent();
                        if (result.length) {
                            return [2, this.openPopup(result)];
                        }
                        _c.label = 2;
                    case 2:
                        if (this.popup.isOpened) {
                            this.popup.close();
                        }
                        return [2];
                }
            });
        });
    };
    autocomplete.prototype.onKeyControlDown = function (e) {
        if (this.popup.isOpened && autocomplete.isControlKey(e.key)) {
            switch (e.key) {
                case constants_1.KEY_DOWN:
                    this.list.selectNext();
                    break;
                case constants_1.KEY_UP:
                    this.list.selectPrevious();
                    break;
                case constants_1.KEY_TAB:
                    this.list.select();
                    break;
            }
            this.j.e.stopPropagation(e.type);
            return false;
        }
    };
    autocomplete.prototype.onEnter = function () {
        if (this.popup.isOpened) {
            this.list.select();
            return false;
        }
    };
    autocomplete.prototype.onAutoComplete = function (query) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = [];
                        return [4, Promise.all(this.sources
                                .concat(this.j.o.autocomplete.sources)
                                .map(function (source) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                var _a, _b, _c, _d;
                                return tslib_1.__generator(this, function (_e) {
                                    switch (_e.label) {
                                        case 0:
                                            _b = (_a = result.push).apply;
                                            _c = [result];
                                            _d = [[]];
                                            return [4, this.resolveFeed(query, source)];
                                        case 1:
                                            _b.apply(_a, _c.concat([tslib_1.__spreadArray.apply(void 0, _d.concat([tslib_1.__read.apply(void 0, [(_e.sent())]), false]))]));
                                            return [2];
                                    }
                                });
                            }); }))];
                    case 1:
                        _a.sent();
                        return [2, result];
                }
            });
        });
    };
    autocomplete.prototype.resolveFeed = function (query, feed, baseSource) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var parts, arrayFeed, isMatchedQuery_1, _a, itemRenderer_1, insertValueRenderer_1, maxItems;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(0, helpers_1.isPromise)(feed)) return [3, 2];
                        return [4, feed];
                    case 1:
                        feed = _b.sent();
                        _b.label = 2;
                    case 2:
                        if (!(0, helpers_1.isFunction)(feed)) return [3, 4];
                        return [4, feed(query)];
                    case 3:
                        parts = _b.sent();
                        return [3, 7];
                    case 4:
                        if (!(0, helpers_1.isArray)(feed)) return [3, 5];
                        arrayFeed = feed, isMatchedQuery_1 = this.j.o.autocomplete.isMatchedQuery;
                        parts = arrayFeed
                            .filter(function (item) {
                            if ((0, helpers_1.isString)(item)) {
                                return isMatchedQuery_1(query, item);
                            }
                            return isMatchedQuery_1(query, item.value);
                        })
                            .map(function (item) {
                            if ((0, helpers_1.isString)(item)) {
                                return { title: item, value: item };
                            }
                            return item;
                        });
                        return [3, 7];
                    case 5: return [4, this.resolveFeed(query, feed.feed, feed)];
                    case 6:
                        parts = _b.sent();
                        _b.label = 7;
                    case 7:
                        if (parts && (0, helpers_1.isArray)(parts)) {
                            _a = this.j.o.autocomplete, itemRenderer_1 = _a.itemRenderer, insertValueRenderer_1 = _a.insertValueRenderer, maxItems = _a.maxItems;
                            parts = parts.map(function (item) {
                                var _a, _b;
                                return (tslib_1.__assign({ itemRenderer: (_a = baseSource === null || baseSource === void 0 ? void 0 : baseSource.itemRenderer) !== null && _a !== void 0 ? _a : itemRenderer_1, insertValueRenderer: (_b = baseSource === null || baseSource === void 0 ? void 0 : baseSource.insertValueRenderer) !== null && _b !== void 0 ? _b : insertValueRenderer_1 }, item));
                            });
                            return [2, parts.slice(0, maxItems)];
                        }
                        return [2, []];
                }
            });
        });
    };
    autocomplete.prototype.openPopup = function (result) {
        var _this = this;
        this.list.build(result);
        this.popup.open(function () { return _this.j.s.range.getBoundingClientRect(); });
    };
    autocomplete.prototype.beforeDestruct = function (jodit) {
        jodit.e
            .off(this.list)
            .off('keydown.autocomplete', this.onKeyDown)
            .off('autocomplete.autocomplete', this.onAutoComplete)
            .off('.autocomplete');
        this.list.destruct();
        this.popup.destruct();
    };
    tslib_1.__decorate([
        decorators_1.autobind
    ], autocomplete.prototype, "registerAutocompleteSource", null);
    tslib_1.__decorate([
        (0, decorators_1.debounce)()
    ], autocomplete.prototype, "onKeyDown", null);
    tslib_1.__decorate([
        decorators_1.autobind
    ], autocomplete.prototype, "onKeyControlDown", null);
    tslib_1.__decorate([
        decorators_1.autobind
    ], autocomplete.prototype, "onEnter", null);
    tslib_1.__decorate([
        decorators_1.autobind
    ], autocomplete.prototype, "onAutoComplete", null);
    tslib_1.__decorate([
        decorators_1.autobind
    ], autocomplete.prototype, "resolveFeed", null);
    return autocomplete;
}(plugin_1.Plugin));
exports.autocomplete = autocomplete;
index_1.Jodit.plugins.add('autocomplete', autocomplete);


/***/ }),

/***/ 98972:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.replaceTextLeftOfCursorAfterSpace = exports.getTextLeftOfCursor = void 0;
var dom_1 = __webpack_require__(94522);
function getTextLeftOfCursor(range) {
    var _a, _b, _c, _d;
    var startContainer = range.startContainer, startOffset = range.startOffset;
    if (dom_1.Dom.isText(startContainer)) {
        return (_b = (_a = startContainer.nodeValue) === null || _a === void 0 ? void 0 : _a.substr(0, startOffset)) !== null && _b !== void 0 ? _b : '';
    }
    var node = startContainer.childNodes[startOffset];
    if (!node) {
        return '';
    }
    if (dom_1.Dom.isText(node)) {
        return (_c = node.nodeValue) !== null && _c !== void 0 ? _c : '';
    }
    var previous = dom_1.Dom.findNotEmptyNeighbor(node, true, startContainer);
    if (dom_1.Dom.isText(previous)) {
        return (_d = node.nodeValue) !== null && _d !== void 0 ? _d : '';
    }
    return '';
}
exports.getTextLeftOfCursor = getTextLeftOfCursor;
function replaceTextLeftOfCursorAfterSpace(range, elm) {
    var _a;
    var startContainer = range.startContainer, startOffset = range.startOffset;
    if (dom_1.Dom.isText(startContainer)) {
        var value = (_a = startContainer.nodeValue) !== null && _a !== void 0 ? _a : '', leftSide = value.substr(0, startOffset), rightSide = value.substr(startOffset);
        var words = leftSide.split(' ');
        words[words.length - 1] = '';
        var newLeftSide = words.join(' ');
        startContainer.nodeValue = newLeftSide + rightSide;
        range.setStart(startContainer, newLeftSide.length);
        range.insertNode(elm);
        return;
    }
}
exports.replaceTextLeftOfCursorAfterSpace = replaceTextLeftOfCursorAfterSpace;


/***/ }),

/***/ 86473:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Autocomplete = void 0;
var tslib_1 = __webpack_require__(20255);
__webpack_require__(63660);
var decorators_1 = __webpack_require__(9901);
var ui_1 = __webpack_require__(14153);
var item_1 = __webpack_require__(64901);
var Autocomplete = (function (_super) {
    tslib_1.__extends(Autocomplete, _super);
    function Autocomplete() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.elements = [];
        _this.currentSelection = -1;
        return _this;
    }
    Autocomplete.prototype.className = function () {
        return 'Autocomplete';
    };
    Autocomplete.prototype.onChangeSelection = function (_, previous) {
        var _a;
        previous != null && ((_a = this.elements[previous]) === null || _a === void 0 ? void 0 : _a.setMod('active', false));
        this.elements[this.currentSelection].setMod('active', true);
        this.elements[this.currentSelection].container.scrollIntoView(false);
    };
    Autocomplete.prototype.build = function (list) {
        var _this = this;
        this.clear();
        list.forEach(function (elm, index) {
            var item = new item_1.AutocompleteItem(_this.jodit, elm);
            _this.j.e
                .on(item.container, 'mousedown touchstart', function (e) {
                e.preventDefault();
            })
                .on(item.container, 'click', function () {
                _this.currentSelection = index;
                _this.select();
            });
            _this.append(item);
        });
        this.currentSelection = 0;
        this.onChangeSelection();
    };
    Autocomplete.prototype.selectNext = function () {
        if (this.currentSelection + 1 <= this.elements.length - 1) {
            this.currentSelection += 1;
        }
        else {
            this.currentSelection = 0;
        }
    };
    Autocomplete.prototype.selectPrevious = function () {
        if (this.currentSelection - 1 >= 0) {
            this.currentSelection -= 1;
        }
        else {
            this.currentSelection = this.elements.length - 1;
        }
    };
    Autocomplete.prototype.select = function () {
        this.j.e.fire('select.autocomplete', this.elements[this.currentSelection].item);
    };
    tslib_1.__decorate([
        (0, decorators_1.watch)('currentSelection')
    ], Autocomplete.prototype, "onChangeSelection", null);
    Autocomplete = tslib_1.__decorate([
        decorators_1.component
    ], Autocomplete);
    return Autocomplete;
}(ui_1.UIGroup));
exports.Autocomplete = Autocomplete;


/***/ }),

/***/ 64901:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AutocompleteItem = void 0;
var tslib_1 = __webpack_require__(20255);
__webpack_require__(63660);
var ui_1 = __webpack_require__(14153);
var helpers_1 = __webpack_require__(92654);
var AutocompleteItem = (function (_super) {
    tslib_1.__extends(AutocompleteItem, _super);
    function AutocompleteItem(jodit, item) {
        var _this = this;
        var _a;
        _this = _super.call(this, jodit) || this;
        _this.item = item;
        var container = _this.container;
        if ((0, helpers_1.isFunction)(item.itemRenderer)) {
            var elm = item.itemRenderer(item);
            if ((0, helpers_1.isString)(elm)) {
                container.innerHTML = elm;
            }
            else {
                container.appendChild(elm);
            }
        }
        else {
            container.innerText = (_a = item.title) !== null && _a !== void 0 ? _a : item.value;
        }
        return _this;
    }
    AutocompleteItem.prototype.className = function () {
        return 'AutocompleteItem';
    };
    return AutocompleteItem;
}(ui_1.UIElement));
exports.AutocompleteItem = AutocompleteItem;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(52423));
/******/ return __webpack_exports__;
/******/ }
]);
});