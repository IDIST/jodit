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
return (self["webpackChunkjodit"] = self["webpackChunkjodit"] || []).push([[633],{

/***/ 40535:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "autocomplete": function() { return /* binding */ autocomplete; }
});

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(20255);
// EXTERNAL MODULE: ./src/core/plugin/index.ts + 1 modules
var core_plugin = __webpack_require__(91729);
// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(27537);
// EXTERNAL MODULE: ./src/core/decorators/index.ts + 7 modules
var decorators = __webpack_require__(11169);
// EXTERNAL MODULE: ./src/core/helpers/index.ts + 14 modules
var helpers = __webpack_require__(52607);
// EXTERNAL MODULE: ./src/modules/index.ts + 15 modules
var modules = __webpack_require__(81165);
// EXTERNAL MODULE: ./src/core/ui/index.ts + 2 modules
var ui = __webpack_require__(41685);
;// CONCATENATED MODULE: ./src/plugins/autocomplete/ui/item.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */



class AutocompleteItem extends ui/* UIElement */.u1 {
    constructor(jodit, item) {
        var _a;
        super(jodit);
        this.item = item;
        const { container } = this;
        if ((0,helpers.isFunction)(item.itemRenderer)) {
            const elm = item.itemRenderer(item);
            if ((0,helpers.isString)(elm)) {
                container.innerHTML = elm;
            }
            else {
                container.appendChild(elm);
            }
        }
        else {
            container.innerText = (_a = item.title) !== null && _a !== void 0 ? _a : item.value;
        }
    }
    className() {
        return 'AutocompleteItem';
    }
}

;// CONCATENATED MODULE: ./src/plugins/autocomplete/ui/autocomplete.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */





let Autocomplete = class Autocomplete extends ui/* UIGroup */.qe {
    constructor() {
        super(...arguments);
        this.elements = [];
        this.currentSelection = -1;
    }
    className() {
        return 'Autocomplete';
    }
    onChangeSelection(_, previous) {
        var _a;
        previous != null && ((_a = this.elements[previous]) === null || _a === void 0 ? void 0 : _a.setMod('active', false));
        this.elements[this.currentSelection].setMod('active', true);
        this.elements[this.currentSelection].container.scrollIntoView(false);
    }
    build(list) {
        this.clear();
        list.forEach((elm, index) => {
            const item = new AutocompleteItem(this.jodit, elm);
            this.j.e
                .on(item.container, 'mousedown touchstart', (e) => {
                e.preventDefault();
            })
                .on(item.container, 'click', () => {
                this.currentSelection = index;
                this.select();
            });
            this.append(item);
        });
        this.currentSelection = 0;
        this.onChangeSelection();
    }
    selectNext() {
        if (this.currentSelection + 1 <= this.elements.length - 1) {
            this.currentSelection += 1;
        }
        else {
            this.currentSelection = 0;
        }
    }
    selectPrevious() {
        if (this.currentSelection - 1 >= 0) {
            this.currentSelection -= 1;
        }
        else {
            this.currentSelection = this.elements.length - 1;
        }
    }
    select() {
        this.j.e.fire('select.autocomplete', this.elements[this.currentSelection].item);
    }
};
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('currentSelection')
], Autocomplete.prototype, "onChangeSelection", null);
Autocomplete = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], Autocomplete);


// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__(10063);
// EXTERNAL MODULE: ./src/index.ts + 157 modules
var src = __webpack_require__(33594);
// EXTERNAL MODULE: ./src/core/dom/index.ts
var dom = __webpack_require__(94522);
;// CONCATENATED MODULE: ./src/plugins/autocomplete/helpers.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

function getTextLeftOfCursor(range) {
    var _a, _b, _c, _d;
    const { startContainer, startOffset } = range;
    if (dom/* Dom.isText */.i.isText(startContainer)) {
        return (_b = (_a = startContainer.nodeValue) === null || _a === void 0 ? void 0 : _a.substr(0, startOffset)) !== null && _b !== void 0 ? _b : '';
    }
    const node = startContainer.childNodes[startOffset];
    if (!node) {
        return '';
    }
    if (dom/* Dom.isText */.i.isText(node)) {
        return (_c = node.nodeValue) !== null && _c !== void 0 ? _c : '';
    }
    const previous = dom/* Dom.findNotEmptyNeighbor */.i.findNotEmptyNeighbor(node, true, startContainer);
    if (dom/* Dom.isText */.i.isText(previous)) {
        return (_d = node.nodeValue) !== null && _d !== void 0 ? _d : '';
    }
    return '';
}
function replaceTextLeftOfCursorAfterSpace(range, elm) {
    var _a;
    const { startContainer, startOffset } = range;
    if (dom/* Dom.isText */.i.isText(startContainer)) {
        const value = (_a = startContainer.nodeValue) !== null && _a !== void 0 ? _a : '', leftSide = value.substr(0, startOffset), rightSide = value.substr(startOffset);
        const words = leftSide.split(' ');
        words[words.length - 1] = '';
        const newLeftSide = words.join(' ');
        startContainer.nodeValue = newLeftSide + rightSide;
        range.setStart(startContainer, newLeftSide.length);
        range.insertNode(elm);
        return;
    }
}

;// CONCATENATED MODULE: ./src/plugins/autocomplete/autocomplete.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */










config/* Config.prototype.autocomplete */.D.prototype.autocomplete = {
    sources: [],
    maxItems: 50,
    isMatchedQuery: (query, value) => value.toLowerCase().indexOf(query.toLowerCase()) === 0,
    itemRenderer: (item) => { var _a; return (_a = item.title) !== null && _a !== void 0 ? _a : item.value; },
    insertValueRenderer: (item) => item.value + '&nbsp;'
};
class autocomplete extends core_plugin/* Plugin */.Sy {
    constructor() {
        super(...arguments);
        this.requires = ['enter', 'license'];
        this.hasStyle = !src.Jodit.fatMode;
        this.sources = [];
    }
    afterInit(jodit) {
        this.popup = new modules.Popup(jodit);
        this.popup.setMod('padding', false);
        this.list = new Autocomplete(jodit);
        this.popup.setContent(this.list.container);
        jodit.e
            .on('select.autocomplete', (item) => {
            let insertValue = item.value;
            if ((0,helpers.isFunction)(item.insertValueRenderer)) {
                insertValue = item.insertValueRenderer(item);
            }
            if (!modules.Dom.isNode(insertValue)) {
                insertValue = jodit.createInside.fromHTML(insertValue);
            }
            replaceTextLeftOfCursorAfterSpace(jodit.s.range, insertValue);
            this.j.s.setCursorAfter(insertValue);
            this.popup.close();
        })
            .on('keydown.autocomplete', this.onKeyDown)
            .on('keydown.autocomplete', this.onKeyControlDown, {
            top: true
        })
            .on('beforeEnter.autocomplete', this.onEnter, { top: true })
            .on('autocomplete.autocomplete', this.onAutoComplete)
            .on('registerAutocompleteSource.autocomplete', this.registerAutocompleteSource);
    }
    registerAutocompleteSource(source) {
        this.sources.push(source);
    }
    static isControlKey(key) {
        return (key === constants.KEY_DOWN ||
            key === constants.KEY_UP ||
            key === constants.KEY_ENTER ||
            key === constants.KEY_TAB);
    }
    async onKeyDown(e) {
        var _a, _b;
        if (e.key === constants.KEY_ESC) {
            this.popup.isOpened && this.popup.close();
            return;
        }
        const { s } = this.j;
        if (autocomplete.isControlKey(e.key) ||
            !s.isInsideArea ||
            !s.isCollapsed) {
            return;
        }
        const range = ((_a = this.j.s.sel) === null || _a === void 0 ? void 0 : _a.rangeCount)
            ? (_b = this.j.s.sel) === null || _b === void 0 ? void 0 : _b.getRangeAt(0)
            : null;
        const query = range && getTextLeftOfCursor(range).split(' ').pop();
        if (query && (0,helpers.trim)(query).length) {
            const result = await this.onAutoComplete(query);
            if (result.length) {
                return this.openPopup(result);
            }
        }
        if (this.popup.isOpened) {
            this.popup.close();
        }
    }
    onKeyControlDown(e) {
        if (this.popup.isOpened && autocomplete.isControlKey(e.key)) {
            switch (e.key) {
                case constants.KEY_DOWN:
                    this.list.selectNext();
                    break;
                case constants.KEY_UP:
                    this.list.selectPrevious();
                    break;
                case constants.KEY_TAB:
                    this.list.select();
                    break;
            }
            this.j.e.stopPropagation(e.type);
            return false;
        }
    }
    onEnter() {
        if (this.popup.isOpened) {
            this.list.select();
            return false;
        }
    }
    async onAutoComplete(query) {
        const result = [];
        await Promise.all(this.sources
            .concat(this.j.o.autocomplete.sources)
            .map(async (source) => {
            result.push(...(await this.resolveFeed(query, source)));
        }));
        return result;
    }
    async resolveFeed(query, feed, baseSource) {
        let parts;
        if ((0,helpers.isPromise)(feed)) {
            feed = await feed;
        }
        if ((0,helpers.isFunction)(feed)) {
            parts = await feed(query);
        }
        else if ((0,helpers.isArray)(feed)) {
            const arrayFeed = feed, { isMatchedQuery } = this.j.o.autocomplete;
            parts = arrayFeed
                .filter((item) => {
                if ((0,helpers.isString)(item)) {
                    return isMatchedQuery(query, item);
                }
                return isMatchedQuery(query, item.value);
            })
                .map((item) => {
                if ((0,helpers.isString)(item)) {
                    return { title: item, value: item };
                }
                return item;
            });
        }
        else {
            parts = await this.resolveFeed(query, feed.feed, feed);
        }
        if (parts && (0,helpers.isArray)(parts)) {
            const { itemRenderer, insertValueRenderer, maxItems } = this.j.o.autocomplete;
            parts = parts.map((item) => {
                var _a, _b;
                return ({
                    itemRenderer: (_a = baseSource === null || baseSource === void 0 ? void 0 : baseSource.itemRenderer) !== null && _a !== void 0 ? _a : itemRenderer,
                    insertValueRenderer: (_b = baseSource === null || baseSource === void 0 ? void 0 : baseSource.insertValueRenderer) !== null && _b !== void 0 ? _b : insertValueRenderer,
                    ...item
                });
            });
            return parts.slice(0, maxItems);
        }
        return [];
    }
    openPopup(result) {
        this.list.build(result);
        this.popup.open(() => this.j.s.range.getBoundingClientRect());
    }
    beforeDestruct(jodit) {
        jodit.e
            .off(this.list)
            .off('keydown.autocomplete', this.onKeyDown)
            .off('autocomplete.autocomplete', this.onAutoComplete)
            .off('.autocomplete');
        this.list.destruct();
        this.popup.destruct();
    }
}
(0,tslib_es6/* __decorate */.gn)([
    decorators.autobind
], autocomplete.prototype, "registerAutocompleteSource", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.debounce)()
], autocomplete.prototype, "onKeyDown", null);
(0,tslib_es6/* __decorate */.gn)([
    decorators.autobind
], autocomplete.prototype, "onKeyControlDown", null);
(0,tslib_es6/* __decorate */.gn)([
    decorators.autobind
], autocomplete.prototype, "onEnter", null);
(0,tslib_es6/* __decorate */.gn)([
    decorators.autobind
], autocomplete.prototype, "onAutoComplete", null);
(0,tslib_es6/* __decorate */.gn)([
    decorators.autobind
], autocomplete.prototype, "resolveFeed", null);
src.Jodit.plugins.add('autocomplete', autocomplete);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(40535));
/******/ return __webpack_exports__;
/******/ }
]);
});