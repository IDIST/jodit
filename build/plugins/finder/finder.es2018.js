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
return (self["webpackChunkjodit"] = self["webpackChunkjodit"] || []).push([[524],{

/***/ 18404:
/***/ (function(module) {

module.exports = "<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271 C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1 C283.3,86.999,310.67,59.628,365.4,59.628z\"/> </svg>"

/***/ }),

/***/ 13178:
/***/ (function(module) {

module.exports = "<svg viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M28.7,16.3l-12-13c-0.4-0.4-1.1-0.4-1.5,0l-12,13C3,16.6,2.9,17,3.1,17.4C3.2,17.8,3.6,18,4,18h3v10c0,0.6,0.4,1,1,1h16 c0.6,0,1-0.4,1-1V18h3c0.4,0,0.8-0.2,0.9-0.6C29.1,17,29,16.6,28.7,16.3z\"/> </svg>"

/***/ }),

/***/ 31189:
/***/ (function(module) {

module.exports = "<svg viewBox=\"0 0 252 252\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M0 16C0 7.16344 7.16344 0 16 0H85.6364C86.5205 0 87.3797 0.29288 88.0796 0.832871L120.92 26.1671C121.62 26.7071 122.48 27 123.364 27H227C235.837 27 243 34.1634 243 43V132.335C243 134.779 240.234 136.198 238.25 134.772L233 131L226.5 127L220 124L212.5 122L202.5 120L189 120.5L179.5 122.5L170.5 125.5L161.5 130.5L157 133.5L153 137L146.5 144L141 152L137 160L134 168L132.5 178L132 183.5V189.5L133 197.5L135 205.5L137.5 211.5L139.524 214.996C141.068 217.663 139.144 221 136.062 221H16C7.16344 221 0 213.837 0 205V16Z\"/> <circle cx=\"197\" cy=\"185\" r=\"56\"/> <path d=\"M188.364 215.955V151.591H204.636V215.955H188.364ZM164.318 191.909V175.636H228.682V191.909H164.318Z\" fill=\"white\"/> </svg>"

/***/ }),

/***/ 41969:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "finder": function() { return /* binding */ finder; }
});

// EXTERNAL MODULE: ./src/core/plugin/index.ts
var core_plugin = __webpack_require__(35570);
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(20255);
// EXTERNAL MODULE: ./src/core/ui/index.ts + 2 modules
var ui = __webpack_require__(41685);
// EXTERNAL MODULE: ./src/plugins/finder/ui/assets/icons/heart.svg
var heart = __webpack_require__(18404);
// EXTERNAL MODULE: ./src/plugins/finder/ui/assets/icons/home.svg
var home = __webpack_require__(13178);
// EXTERNAL MODULE: ./src/plugins/finder/ui/assets/icons/new-folder.svg
var new_folder = __webpack_require__(31189);
;// CONCATENATED MODULE: ./src/plugins/finder/ui/assets/icons/index.ts




ui/* Icon.set */.JO.set('heart', String(heart));
ui/* Icon.set */.JO.set('home', String(home));
ui/* Icon.set */.JO.set('new-folder', String(new_folder));

// EXTERNAL MODULE: ./src/modules/index.ts + 15 modules
var modules = __webpack_require__(81165);
// EXTERNAL MODULE: ./src/modules/dialog/index.ts + 3 modules
var dialog = __webpack_require__(91419);
// EXTERNAL MODULE: ./src/core/decorators/index.ts + 7 modules
var decorators = __webpack_require__(11169);
// EXTERNAL MODULE: ./src/modules/file-browser/builders/item.ts
var builders_item = __webpack_require__(47713);
// EXTERNAL MODULE: ./src/core/helpers/index.ts + 14 modules
var helpers = __webpack_require__(52607);
;// CONCATENATED MODULE: ./src/plugins/finder/ui/item/item.ts








let UIBrowserItem = class UIBrowserItem extends ui/* UIElement */.u1 {
    constructor(jodit, item) {
        super(jodit);
        this.item = builders_item/* FileBrowserItem.create */.Z.create(item);
        jodit.e.on(this.container, 'click contextmenu dblclick', (e) => {
            jodit.e.fire(e.type + 'Item.filebrowser', this.item, (0,helpers.ctrlKey)(e) || e.shiftKey, e);
            return false;
        });
    }
    className() {
        return 'UIBrowserItem';
    }
    render() {
        return `<div tabindex='-1'>
			<div class='&__image'></div>
			<div class='&__info'></div>
			<div class='&__heart'>*heart*</div>
		</div>`;
    }
    onClickFavorite() {
        this.bubble((box) => {
            this.jodit.e.fire(box, 'toggleFavoriteItem', this.item);
        });
        return false;
    }
    onAction(e) {
        this.jodit.e.fire(e.type + 'Item.filebrowser', this.item, (0,helpers.ctrlKey)(e) || e.shiftKey, e);
        return false;
    }
    update() {
        const image = this.getElm('image');
        (0,helpers.assert)(image != null, 'image element does not exists');
        (0,helpers.css)(image, 'backgroundImage', `url(${encodeURI(this.item.imageURL)})`);
        const { type, file, time, size } = this.item;
        this.setMod('is-file', this.item.isImage === false)
            .setMod('type', type !== null && type !== void 0 ? type : 'file')
            .setElementValue('name', file)
            .setElementValue('time', time)
            .setElementValue('filesize', size);
        (0,helpers.attr)(this.container, 'title', type !== 'folder' ? `${file} ${time} ${size}` : file);
        super.update();
    }
    setElementValue(name, value) {
        const elementClassName = this.getFullElName(name);
        let element = this.getElm(name);
        if (!value) {
            element && modules.Dom.safeRemove(element);
            return this;
        }
        if (!element) {
            const wrapper = this.getElm('info');
            (0,helpers.assert)(wrapper != null, 'wrapper element does not exist');
            element = this.j.create.div(elementClassName);
            wrapper.appendChild(element);
        }
        element.innerText = value;
        return this;
    }
};
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('heart:click')
], UIBrowserItem.prototype, "onClickFavorite", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(['container:click', 'container:contextmenu', 'container:dblclick'])
], UIBrowserItem.prototype, "onAction", null);
UIBrowserItem = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], UIBrowserItem);


// EXTERNAL MODULE: ./src/core/dom/index.ts
var dom = __webpack_require__(94522);
;// CONCATENATED MODULE: ./src/traits/select-items/select-items.ts



class UISelectItems {
    static remove(element) {
        dom/* Dom.safeRemove */.i.safeRemove(element.container.querySelector('.jodit-ui-select-items'));
        element.j.e.off(element.container, 'mousedown.uiselectitems touchstart.uiselectitems');
    }
    static install(element) {
        const bound = element.j.c.div('jodit-ui-select-items');
        element.j.e.on(element.container, 'mousedown.uiselectitems touchstart.uiselectitems', this.onStartSelect.bind(this, element, bound));
    }
    static onStartSelect(element, bound, e) {
        if (e.target !== element.container) {
            return;
        }
        (0,helpers.css)(bound, { width: 0, height: 0 });
        element.container.appendChild(bound);
        const start = {
            x: e.clientX,
            y: e.clientY,
            w: element.container.offsetWidth,
            h: element.container.offsetHeight
        }, onSelect = element.j.async.throttle(this.onSelect.bind(this, element, bound, start), element.j.defaultTimeout / 10);
        element.j.lock();
        element.j.e
            .on(element.j.ow, 'mousemove touchmove', onSelect)
            .one(element.j.ow, 'mouseup touchend', this.onEndSelect.bind(this, element, bound, onSelect));
        element.onSelectItems({
            left: start.x,
            top: start.y,
            width: 0,
            height: 0
        });
    }
    static onSelect(element, bound, start, e) {
        const left = start.x > e.clientX ? e.clientX : start.x;
        const top = start.y > e.clientY ? e.clientY : start.y;
        const selectBound = {
            left,
            top,
            width: Math.abs(start.x - e.clientX),
            height: Math.abs(start.y - e.clientY)
        };
        (0,helpers.css)(bound, selectBound);
        element.onSelectItems(selectBound);
    }
    static onEndSelect(element, bound, onResize, _) {
        dom/* Dom.safeRemove */.i.safeRemove(bound);
        element.j.e.off(element.j.ow, 'mousemove touchmove', onResize);
        element.j.unlock();
    }
}

;// CONCATENATED MODULE: ./src/plugins/finder/ui/virtual-scroll/virtual-scroll.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
var UIVirtualScroll_1;








let UIVirtualScroll = UIVirtualScroll_1 = class UIVirtualScroll extends ui/* UIGroup */.qe {
    constructor(jodit, stateManager) {
        super(jodit);
        this.stateManager = stateManager;
        this.syncMod = true;
        this.addItemsSelector();
    }
    className() {
        return 'UIVirtualScroll';
    }
    render() {
        return `<div>
				<div class="&__empty-message">~There are no files~</div>
				<div class='&__loader'></div>
				<div class='&__drag-area'>~Drop image~</div>
			</div>`;
    }
    reconcile(items) {
        const clearIndex = this.elements.findIndex((elm, index) => {
            return (!items[index] ||
                elm.item.uniqueHashKey !==
                    builders_item/* FileBrowserItem.create */.Z.create(items[index]).uniqueHashKey);
        });
        if (clearIndex > -1) {
            for (let i = clearIndex; i < this.elements.length; i += 1) {
                this.elements[i].destruct();
            }
            this.elements.length = clearIndex;
        }
        return clearIndex;
    }
    build(items) {
        const clearIndex = this.reconcile(items);
        items
            .slice(clearIndex > -1 ? clearIndex : this.elements.length)
            .forEach((item) => {
            const elm = new UIBrowserItem(this.jodit, item);
            Object.keys(this.mods).forEach((mod) => {
                elm.setMod(mod, this.mods[mod]);
            });
            this.append(elm);
        });
        this.setMod('empty', !this.elements.length);
    }
    onScrollLoadChunk() {
        if (!this.stateManager.isFavoriteItems &&
            this.container.scrollHeight -
                (this.container.scrollTop + this.container.offsetHeight) <
                this.j.o.pixelOffsetLoadNewChunk) {
            void this.j.loadingManager.loadItemsChunk();
        }
    }
    onDragOver(e) {
        e.preventDefault();
        this.setMod('dragover', true);
    }
    onDragLeave(e) {
        e.preventDefault();
        this.setMod('dragover', false);
    }
    addItemsSelector() {
        UISelectItems.install(this);
    }
    static intersectRect(r1, r2) {
        return !(r2.left > r1.left + r1.width ||
            r2.left + r2.width < r1.left ||
            r2.top > r1.top + r1.height ||
            r2.top + r2.height < r1.top);
    }
    onSelectItems(bound) {
        const selected = [];
        this.elements.forEach((elm) => {
            const pos = (0,helpers.position)(elm.container);
            if (UIVirtualScroll_1.intersectRect(pos, bound)) {
                selected.push(elm.item);
            }
        });
        this.stateManager.state.activeElements = selected;
    }
};
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':afterResize'),
    (0,decorators.watch)(':resize'),
    (0,decorators.watch)('container:scroll'),
    (0,decorators.throttle)()
], UIVirtualScroll.prototype, "onScrollLoadChunk", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('container:dragover')
], UIVirtualScroll.prototype, "onDragOver", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(['container:dragleave', 'container:drop'])
], UIVirtualScroll.prototype, "onDragLeave", null);
UIVirtualScroll = UIVirtualScroll_1 = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], UIVirtualScroll);


;// CONCATENATED MODULE: ./src/plugins/finder/ui/messages/message.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */




let UIBrowserMessage = class UIBrowserMessage extends ui/* UIElement */.u1 {
    className() {
        return 'UIBrowserMessage';
    }
    constructor(jodit, message) {
        super(jodit);
        this.container.innerText = (0,helpers.isString)(message)
            ? message
            : message.message;
    }
};
UIBrowserMessage = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], UIBrowserMessage);


;// CONCATENATED MODULE: ./src/plugins/finder/ui/messages/messages.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */





let UIBrowserMessages = class UIBrowserMessages extends ui/* UIGroup */.qe {
    className() {
        return 'UIBrowserMessages';
    }
    build(items) {
        this.clear();
        items.forEach((item) => {
            const message = new UIBrowserMessage(this.jodit, item.message);
            message.setMod('type', item.type);
            this.append(message);
        });
    }
};
UIBrowserMessages = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], UIBrowserMessages);


;// CONCATENATED MODULE: ./src/traits/resize/resize.ts



class UIResize {
    static remove(element) {
        (0,helpers.css)(element.container, {
            width: null,
            height: null
        });
        element.container.classList.remove('jodit-ui-resize');
        dom/* Dom.safeRemove */.i.safeRemove(element.container.querySelector('.jodit-ui-resize__handle'));
    }
    static install(element, direction) {
        element.container.classList.add('jodit-ui-resize');
        if ((0,helpers.css)(element.container, 'position') === 'static') {
            (0,helpers.css)(element.container, 'position', 'relative');
        }
        const handle = element.j.c.div('jodit-ui-resize__handle');
        handle.classList.add('jodit-ui-resize__handle_type_' + direction);
        element.container.appendChild(handle);
        element.j.e.on(handle, 'mousedown touchstart', this.onStartResize.bind(this, element, direction));
    }
    static onStartResize(element, direction, e) {
        const start = {
            x: e.clientX,
            y: e.clientY,
            w: element.container.offsetWidth,
            h: element.container.offsetHeight,
            direction
        }, onResize = element.j.async.throttle(this.onResize.bind(this, element, start), element.j.defaultTimeout / 10);
        element.j.lock();
        element.j.e
            .on(element.j.ow, 'mousemove touchmove', onResize)
            .one(element.j.ow, 'mouseup touchend', this.onEndResize.bind(this, element, onResize));
    }
    static onResize(element, start, e) {
        const byWidth = ['left', 'right'].includes(start.direction), parentElement = element.container.parentElement;
        if (!parentElement) {
            return;
        }
        let diff;
        if (byWidth) {
            diff =
                (start.w +
                    (e.clientX - start.x) *
                        (start.direction === 'right' ? 1 : -1)) /
                    parentElement.offsetWidth;
        }
        else {
            diff =
                (start.h +
                    (e.clientY - start.y) *
                        (start.direction === 'top' ? 1 : -1)) /
                    parentElement.offsetHeight;
        }
        (0,helpers.css)(element.container, byWidth ? 'width' : 'height', diff * 100 + '%');
    }
    static onEndResize(element, onResize, _) {
        element.j.e.off(element.j.ow, 'mousemove touchmove', onResize);
        element.j.unlock();
    }
}

;// CONCATENATED MODULE: ./src/plugins/finder/ui/sidebar/sidebar.ts






let UISidebar = class UISidebar extends ui/* UIGroup */.qe {
    constructor(jodit, elements, state) {
        super(jodit, elements);
        this.state = state;
        this.onChangeFavorites();
    }
    className() {
        return 'UISidebar';
    }
    render() {
        return `<div>
			<div class='&__hide-btn'>*angle-left*</div>
			<div class='&__favorites'>*heart* ~Favorites~</div>
			<div class='&__box'></div>
		</div>`;
    }
    appendChildToContainer(childContainer) {
        const box = this.getElm('box');
        (0,helpers.assert)(box != null, 'box element does not exists');
        box.appendChild(childContainer);
    }
    addResize() {
        UIResize.remove(this);
        UIResize.install(this, screen.width > 450 ? 'right' : 'bottom');
    }
    onChangeFavorites() {
        this.setMod('has-favorites', Boolean(this.state.favorites.length));
    }
    onClickHideButton() {
        this.state.showSideBar = !this.state.showSideBar;
        return false;
    }
    onClickFavorites() {
        this.state.elements = this.state.favorites;
        return false;
    }
};
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.hook)('ready'),
    (0,decorators.watch)(':resize', window),
    (0,decorators.debounce)()
], UISidebar.prototype, "addResize", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.favorites')
], UISidebar.prototype, "onChangeFavorites", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('hide-btn:click')
], UISidebar.prototype, "onClickHideButton", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('favorites:click')
], UISidebar.prototype, "onClickFavorites", null);
UISidebar = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], UISidebar);


;// CONCATENATED MODULE: ./src/plugins/finder/ui/settings/settings.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */





let UIBrowserSettings = class UIBrowserSettings extends ui/* UIGroup */.qe {
    constructor(jodit, state) {
        super(jodit);
        this.state = state;
        const close = this.getElm('close');
        (0,helpers.assert)(close != null, 'close element does not exists');
        jodit.e.on(close, 'click', () => {
            this.state.showSettings = false;
        });
    }
    className() {
        return 'UIBrowserSettings';
    }
    render() {
        return `<div>
			<div class="${this.getFullElName('close')}">${ui/* Icon.get */.JO.get('cancel')}</div>
			<div class="${this.getFullElName('title')}">${this.j.i18n('Settings')}</div>
			<div class="${this.getFullElName('options')}"></div>
		</div>`;
    }
    appendChildToContainer(childContainer) {
        const options = this.getElm('options');
        (0,helpers.assert)(options != null, 'options element does not exists');
        options.appendChild(childContainer);
    }
    afterSetMod(name, value) {
        if (name === 'hidden' && value === false) {
            this.generateSettings();
        }
        super.afterSetMod(name, value);
    }
    onChangeView() {
        const tileSize = this.getElm('tile-size');
        if (tileSize) {
            tileSize.style.display =
                this.state.view === 'tiles' ? 'block' : 'none';
        }
    }
    generateSettings() {
        this.clear();
        const { j } = this;
        this.append([
            new ui/* UIButtonGroup */.BO(j, {
                label: 'Theme',
                name: 'theme',
                value: this.state.theme,
                radio: true,
                options: [
                    { value: 'default', text: 'Light' },
                    { value: 'dark', text: 'Dark' }
                ],
                onChange: (values) => {
                    if (this.state.theme !== 'default' &&
                        this.state.theme !== 'dark') {
                        this.state.theme = 'default';
                        return;
                    }
                    this.state.theme = values[0].value;
                }
            }),
            new ui/* UIButtonGroup */.BO(j, {
                label: 'Show favorites',
                name: 'showFavorites',
                value: this.state.showFavorites,
                radio: true,
                options: [
                    { value: true, text: 'Show' },
                    { value: false, text: 'Hide' }
                ],
                onChange: (values) => {
                    this.state.showFavorites = values[0].value;
                }
            }),
            new ui/* UIButtonGroup */.BO(j, {
                label: 'View',
                name: 'view',
                value: this.state.view,
                radio: true,
                options: [
                    { value: 'tiles', text: 'Tiles' },
                    { value: 'list', text: 'List' },
                    { value: 'compact', text: 'Compact' }
                ],
                onChange: (values) => {
                    this.state.view = values[0].value;
                }
            }),
            new ui/* UIButtonGroup */.BO(j, {
                label: 'Folders position',
                name: 'foldersPosition',
                value: this.state.foldersPosition,
                radio: true,
                options: [
                    { value: 'top', text: 'Top' },
                    { value: 'bottom', text: 'Bottom' },
                    { value: 'default', text: 'Default' }
                ],
                onChange: (values) => {
                    this.state.foldersPosition = values[0].value;
                }
            }),
            new ui/* UISelect */.Cj(j, {
                label: 'Sort by',
                name: 'sort-by',
                value: this.state.sortBy,
                options: [
                    {
                        value: 'changed-asc',
                        text: j.i18n('Sort by changed') + '(⬆)'
                    },
                    {
                        value: 'changed-desc',
                        text: j.i18n('Sort by changed') + '(⬇)'
                    },
                    {
                        value: 'name-asc',
                        text: j.i18n('Sort by name') + '(⬆)'
                    },
                    {
                        value: 'name-desc',
                        text: j.i18n('Sort by name') + '(⬇)'
                    },
                    {
                        value: 'size-asc',
                        text: j.i18n('Sort by size') + '(⬆)'
                    },
                    {
                        value: 'size-desc',
                        text: j.i18n('Sort by size') + '(⬇)'
                    }
                ],
                onChange: (value) => {
                    this.state.sortBy = value;
                }
            }),
            new ui/* UISelect */.Cj(j, {
                label: 'Tile size',
                name: 'tile-size',
                value: this.state.tileSize,
                options: [
                    {
                        value: 'xsmall',
                        text: 'Extra small'
                    },
                    {
                        value: 'small',
                        text: 'Small'
                    },
                    {
                        value: 'default',
                        text: 'Default'
                    },
                    {
                        value: 'large',
                        text: 'Large'
                    },
                    {
                        value: 'xlarge',
                        text: 'Extra large'
                    }
                ],
                onChange: (value) => {
                    this.state.tileSize =
                        value;
                }
            })
        ]);
        this.onChangeView();
    }
};
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.view')
], UIBrowserSettings.prototype, "onChangeView", null);
UIBrowserSettings = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], UIBrowserSettings);


;// CONCATENATED MODULE: ./src/plugins/finder/ui/folder/folder.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */





let UIBrowserFolder = class UIBrowserFolder extends ui/* UIElement */.u1 {
    constructor(jodit, item) {
        super(jodit);
        this.item = item;
        this.syncMod = true;
        const name = this.getElm('name');
        (0,helpers.assert)(name != null, 'name element does not exists');
        name.innerText = item.name;
        jodit.e
            .on(this.container, 'click', () => {
            if (!this.getMod('active')) {
                this.setMod('loading', true);
            }
            return jodit.e.fire('openFolder', item);
        })
            .on(this.container, 'contextmenu', (e) => {
            return jodit.e.fire('contextmenuFolder.filebrowser', item, e);
        });
    }
    className() {
        return 'UIBrowserFolder';
    }
    render() {
        return `<div>
			<div class="&__icon">
				<div class='&__loader'></div>
				<div class="&__icon-wrapper">
					*folder*
				</div>
			</div>
			<div class="&__name"></div>
			<div class="&__arrow">*angle-right*</div>
		</div>`;
    }
};
UIBrowserFolder = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], UIBrowserFolder);


;// CONCATENATED MODULE: ./src/plugins/finder/ui/tree/tree.ts
var UITree_1;





let UITree = UITree_1 = class UITree extends ui/* UIGroup */.qe {
    constructor(jodit, items) {
        super(jodit);
        this.syncMod = true;
        this.build(items);
    }
    className() {
        return 'UITree';
    }
    build(items) {
        this.clear();
        items.forEach((item) => {
            const folder = new UIBrowserFolder(this.jodit, item);
            this.append(folder);
            if (item.isActive) {
                folder.setMod('active', true);
            }
            if (item.children.length) {
                this.append(new UITree_1(this.jodit, item.children));
            }
        });
    }
};
UITree = UITree_1 = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], UITree);


;// CONCATENATED MODULE: ./src/plugins/finder/ui/source/source.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */






let UIBrowserSource = class UIBrowserSource extends ui/* UIElement */.u1 {
    constructor(jodit, data) {
        super(jodit, data);
        this.data = data;
        this.tree = new UITree(this.j, this.data.children);
        this.syncMod = true;
        const name = this.getElm('name');
        (0,helpers.assert)(name != null, 'name element does not exists');
        name.innerText = data.title || data.name;
        const tree = this.getElm('tree');
        (0,helpers.assert)(tree != null, 'tree element does not exists');
        tree.appendChild(this.tree.container);
        jodit.e.on(this.container, 'contextmenu', (e) => {
            return jodit.e.fire('contextmenuSource.filebrowser', data, e);
        });
    }
    className() {
        return 'UIBrowserSource';
    }
    render() {
        return `<div>
			<div class="&__name"></div>
			<div class="&__tree"></div>
		</div>`;
    }
};
UIBrowserSource = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], UIBrowserSource);


;// CONCATENATED MODULE: ./src/plugins/finder/ui/sources/sources.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */





let UIBrowserSources = class UIBrowserSources extends ui/* UIGroup */.qe {
    constructor() {
        super(...arguments);
        this.syncMod = true;
    }
    className() {
        return 'UIBrowserSources';
    }
    build(items) {
        this.clear();
        items.forEach((item) => {
            this.append(new UIBrowserSource(this.jodit, item));
        });
    }
};
UIBrowserSources = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], UIBrowserSources);


;// CONCATENATED MODULE: ./src/plugins/finder/ui/statusbar/statusbar.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */





let UIBrowserStatusBar = class UIBrowserStatusBar extends ui/* UIElement */.u1 {
    className() {
        return 'UIBrowserStatusBar';
    }
    render() {
        return `<div>
			<div class='&__slot-left'></div>
			<div class='&__slot-center'></div>
			<div class='&__slot-right'></div>
		</div>`;
    }
    value(text, slot = 'left') {
        const slotElm = this.getElm(`slot-${slot}`);
        (0,helpers.assert)(slotElm != null, 'Slot does not exists');
        slotElm.innerText = text;
        return this;
    }
};
UIBrowserStatusBar = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], UIBrowserStatusBar);


;// CONCATENATED MODULE: ./src/plugins/finder/ui/preview/preview.ts









let UIPreview = class UIPreview extends ui/* UIGroup */.qe {
    constructor(jodit, state) {
        super(jodit);
        this.state = state;
        this.lastLoadPromise = null;
        this.onChangeMetaInfo();
    }
    className() {
        return 'UIPreview';
    }
    addResize() {
        UIResize.remove(this);
        UIResize.install(this, screen.width > 450 ? 'left' : 'top');
    }
    render() {
        return `<div>
				<div class="&__image"></div>
				<div class="&__info"></div>
				<div class="&__loader"></div>
				<div class="&__empty-message">~Select image~</div>
			</div>`;
    }
    afterSetMod(name, value) {
        if (name === 'hidden' && value === false) {
            this.onChangeMetaInfo();
        }
        super.afterSetMod(name, value);
    }
    onChangeMetaInfo() {
        var _a, _b;
        if (this.getMod('hidden')) {
            return;
        }
        const { metaInfo } = this.state;
        this.setMod('empty', !metaInfo);
        const info = this.getElm('info');
        (0,helpers.assert)(info != null, 'info element does not exists');
        dom/* Dom.detach */.i.detach(info);
        const image = this.getElm('image');
        (0,helpers.assert)(image != null, 'image element does not exists');
        (0,helpers.css)(image, {
            backgroundImage: null
        });
        if (!metaInfo) {
            return;
        }
        this.setMod('is-file', metaInfo.isImage === false).setMod('type', (_a = metaInfo.type) !== null && _a !== void 0 ? _a : 'file');
        UIBrowserItem.prototype.setElementValue.call(this, 'name', metaInfo.file);
        UIBrowserItem.prototype.setElementValue.call(this, 'time', metaInfo.time);
        UIBrowserItem.prototype.setElementValue.call(this, 'filesize', metaInfo.size);
        this.setMod('loading', true);
        (_b = this.lastLoadPromise) === null || _b === void 0 ? void 0 : _b.rejectCallback();
        this.lastLoadPromise = (0,helpers.loadImage)(metaInfo.isImage ? metaInfo.fileURL : metaInfo.imageURL, this.j);
        this.lastLoadPromise
            .then((image) => {
            const elm = this.getElm('image');
            (0,helpers.assert)(elm != null, 'image element does not exist');
            image &&
                (0,helpers.css)(elm, {
                    backgroundImage: `url(${image.src})`
                });
        })
            .finally(() => {
            this.setMod('loading', false);
        })
            .catch(() => { });
    }
};
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.hook)('ready'),
    (0,decorators.watch)(':resize', window),
    (0,decorators.debounce)()
], UIPreview.prototype, "addResize", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.metaInfo')
], UIPreview.prototype, "onChangeMetaInfo", null);
UIPreview = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], UIPreview);


;// CONCATENATED MODULE: ./src/plugins/finder/ui/panel/panel.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */












let UIBrowserPanel = class UIBrowserPanel extends ui/* UIGroup */.qe {
    constructor(jodit, stateManager) {
        super(jodit);
        this.stateManager = stateManager;
        this.syncMod = true;
        this.sources = new UIBrowserSources(this.j);
        this.sidebar = new UISidebar(this.jodit, [this.sources], this.stateManager.state);
        this.preview = new UIPreview(this.jodit, this.stateManager.state);
        this.statusbar = new UIBrowserStatusBar(this.j);
        this.items = new UIVirtualScroll(this.j, this.stateManager);
        this.settings = new UIBrowserSettings(this.jodit, this.stateManager.state);
        this.messages = new UIBrowserMessages(this.j);
        this.state = stateManager.state;
        this.append(this.sidebar, 'content');
        this.append(this.items, 'content');
        this.append(this.messages, 'footer');
        this.append(this.settings, 'content');
        this.append(this.preview, 'content');
        this.append(this.statusbar, 'footer');
        this.onChangeElements();
        this.onChangeSources();
        this.onChangeView();
        this.onChangeTileSize();
        this.onChangeShowFavorites();
        this.onChangeMessages();
        this.onChangeActiveElements();
        this.onChangeFavorites();
        this.onChangeShowSideBar();
        this.onChangeShowSettings();
        this.onChangeShowPreview();
        this.onChangeTheme();
    }
    className() {
        return 'UIBrowserPanel';
    }
    get countInRow() {
        if (this.state.view === 'list') {
            return 1;
        }
        const { container } = this.items.elements[0], margin = (0,helpers.css)(container, 'marginLeft');
        return Math.floor(this.items.container.offsetWidth /
            (container.offsetWidth + ((0,helpers.isNumber)(margin) ? margin : 0)));
    }
    get countInColumn() {
        const { container } = this.items.elements[0], margin = (0,helpers.css)(container, 'marginTop');
        return Math.floor(this.items.container.offsetHeight /
            (container.offsetHeight + ((0,helpers.isNumber)(margin) ? margin : 0)));
    }
    render() {
        return `<div>
			<div class='&__content'></div>
			<div class='&__footer'></div>
		</div>`;
    }
    onChangeTheme() {
        this.setMod('theme', this.stateManager.state.theme);
    }
    onChangeElements() {
        this.items.build(this.stateManager.state.elements);
    }
    onChangeActiveElements() {
        if (!this.state.activeElements.length) {
            this.state.info = '';
            this.state.metaInfo = null;
        }
        this.items.elements.forEach((elm) => {
            elm.setMod('active', Boolean(this.stateManager.isActive(elm.item)));
        });
        this.j.e.fire('changeSelection');
    }
    onChangeFavorites() {
        this.items.elements.forEach((elm) => {
            elm.setMod('favorite', Boolean(this.stateManager.isFavorite(elm.item)));
        });
    }
    onChangeSources() {
        this.sources.build(this.stateManager.state.tree);
    }
    onChangeLastSelectedIndex() {
        var _a;
        const container = (_a = this.items.elements[this.stateManager.state.lastSelectedIndex]) === null || _a === void 0 ? void 0 : _a.container;
        if (container) {
            (0,helpers.scrollIntoViewIfNeeded)(container, this.items.container, this.j.od);
            container.focus();
        }
    }
    onChangeInfo() {
        this.statusbar.value(this.state.info, 'center');
    }
    onChangePathOrSource() {
        this.statusbar.value(this.state.currentPath
            ? `${this.state.currentPath} (${this.state.currentSource})`
            : this.i18n('Home'), 'left');
    }
    onChangeShowSettings() {
        this.settings.setMod('hidden', !this.stateManager.state.showSettings);
    }
    onChangeShowPreview() {
        this.preview.setMod('hidden', !this.stateManager.state.showPreview);
    }
    onChangeShowSideBar() {
        this.sidebar.setMod('hidden', !this.stateManager.state.showSideBar);
    }
    onChangeView() {
        this.items.setMod('view', this.stateManager.state.view);
    }
    onChangeTileSize() {
        this.items.setMod('size', this.stateManager.state.tileSize);
    }
    onChangeShowFavorites() {
        this.sidebar.setMod('show-favorites', this.stateManager.state.showFavorites);
        this.items.setMod('show-favorites', this.stateManager.state.showFavorites);
    }
    onChangeMessages() {
        this.messages.build(this.stateManager.state.messages);
    }
    onItemDblClick() {
        this.j.e.fire('select.filebrowser');
        return false;
    }
    onItemClick(data, multi) {
        this.stateManager.addActive(data, multi);
    }
    onTogglePreview() {
        this.state.showPreview = !this.state.showPreview;
        return false;
    }
    onToggleFavoriteItem(data) {
        this.stateManager.toggleFavorite(data);
    }
    onFolderClick(data) {
        this.stateManager.state.currentSource = data.sourceName;
        this.stateManager.state.currentPath = data.path || '/';
        this.j.e.fire('afterOpenFolder.filebrowser');
    }
};
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.theme')
], UIBrowserPanel.prototype, "onChangeTheme", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.elements')
], UIBrowserPanel.prototype, "onChangeElements", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.activeElements')
], UIBrowserPanel.prototype, "onChangeActiveElements", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(['state.favorites', 'state.elements'])
], UIBrowserPanel.prototype, "onChangeFavorites", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.sources')
], UIBrowserPanel.prototype, "onChangeSources", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.lastSelectedIndex')
], UIBrowserPanel.prototype, "onChangeLastSelectedIndex", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.info')
], UIBrowserPanel.prototype, "onChangeInfo", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(['state.currentPath', 'state.currentSource'])
], UIBrowserPanel.prototype, "onChangePathOrSource", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.showSettings')
], UIBrowserPanel.prototype, "onChangeShowSettings", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.showPreview')
], UIBrowserPanel.prototype, "onChangeShowPreview", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.showSideBar')
], UIBrowserPanel.prototype, "onChangeShowSideBar", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.view')
], UIBrowserPanel.prototype, "onChangeView", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.tileSize')
], UIBrowserPanel.prototype, "onChangeTileSize", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.showFavorites')
], UIBrowserPanel.prototype, "onChangeShowFavorites", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.messages')
], UIBrowserPanel.prototype, "onChangeMessages", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':dblclickItem.filebrowser')
], UIBrowserPanel.prototype, "onItemDblClick", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':clickItem.filebrowser')
], UIBrowserPanel.prototype, "onItemClick", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':togglePreview.filebrowser')
], UIBrowserPanel.prototype, "onTogglePreview", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':toggleFavoriteItem')
], UIBrowserPanel.prototype, "onToggleFavoriteItem", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':openFolder')
], UIBrowserPanel.prototype, "onFolderClick", null);
UIBrowserPanel = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], UIBrowserPanel);


// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__(10063);
;// CONCATENATED MODULE: ./src/plugins/finder/helpers/state-manager.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */


class StateManager {
    constructor(state) {
        this.state = state;
    }
    getIndex(elm, elms = this.state.elements) {
        return elms.findIndex((item) => item.uniqueHashKey === elm.uniqueHashKey);
    }
    isActive(item) {
        return Boolean(this.state.activeElements.find((data) => data.uniqueHashKey === item.uniqueHashKey));
    }
    isFavorite(item) {
        return Boolean(this.state.favorites.find((data) => data.uniqueHashKey === item.uniqueHashKey));
    }
    addActive(item, multi) {
        var _a;
        this.state.metaInfo = item;
        this.state.info = (_a = item.file) !== null && _a !== void 0 ? _a : '';
        this.state.lastSelectedIndex = this.getIndex(item);
        this.state.activeElements = multi
            ? [...this.state.activeElements, item]
            : [item];
    }
    callSelectHandler() {
        var _a;
        const act = this.state.activeElements;
        (_a = this.state.onSelectCallBack) === null || _a === void 0 ? void 0 : _a.call(this, {
            baseurl: '',
            files: act.map((data) => data.fileURL),
            isImages: act.map((data) => Boolean(data.isImage))
        });
    }
    setFilter(value) {
        this.state.filterWord = value;
    }
    addMessage(item) {
        var _a;
        const msgs = this.state.messages;
        if (((_a = msgs[msgs.length - 1]) === null || _a === void 0 ? void 0 : _a.message) !== item.message) {
            this.state.messages = [...msgs, item];
        }
    }
    removeMessage(item) {
        const index = this.state.messages.indexOf(item);
        if (index !== -1) {
            const messages = [...this.state.messages];
            messages.splice(index, 1);
            this.state.messages = messages;
        }
    }
    toggleFavorite(item) {
        const favoriteIndex = this.getIndex(item, this.state.favorites);
        const favorites = [...this.state.favorites];
        if (favoriteIndex === -1) {
            favorites.push(item);
        }
        else {
            favorites.splice(favoriteIndex, 1);
        }
        this.state.favorites = favorites;
    }
    fillSources(sources, path) {
        const filterFolders = (folders) => folders.filter((folder) => folder !== '.' && folder !== '..');
        if (!this.state.tree.length || !path) {
            this.state.tree = sources.map((source) => ({
                type: 'source',
                name: source.name,
                title: source.title,
                sourceName: source.name,
                path: '/',
                children: filterFolders(source.folders).map((folder) => ({
                    type: 'directory',
                    name: folder,
                    path: folder,
                    sourceName: source.name,
                    children: []
                }))
            }));
        }
        else {
            const findItem = (children, name) => { var _a; return (_a = children.find((item) => item.name === name)) !== null && _a !== void 0 ? _a : null; };
            this.removeActive(this.state.tree);
            sources.forEach((source) => {
                const sourceItem = findItem(this.state.tree, source.name);
                if (sourceItem) {
                    sourceItem.isActive = true;
                    const resultItem = path
                        .split('/')
                        .reduce((item, part) => {
                        return item && findItem(item.children, part);
                    }, sourceItem);
                    if (resultItem) {
                        resultItem.isActive = true;
                        resultItem.children = filterFolders(source.folders).map((folder) => ({
                            type: 'directory',
                            name: folder,
                            path: path + '/' + folder,
                            sourceName: source.name,
                            children: []
                        }));
                    }
                }
            });
        }
    }
    removeActive(tree) {
        tree.forEach((item) => {
            item.isActive = false;
            this.removeActive(item.children);
        });
    }
    get isFavoriteItems() {
        return this.state.favorites === this.state.elements;
    }
}
(0,tslib_es6/* __decorate */.gn)([
    decorators.autobind
], StateManager.prototype, "getIndex", null);
(0,tslib_es6/* __decorate */.gn)([
    decorators.autobind
], StateManager.prototype, "isActive", null);
(0,tslib_es6/* __decorate */.gn)([
    decorators.autobind
], StateManager.prototype, "isFavorite", null);

// EXTERNAL MODULE: ./src/modules/toolbar/factory.ts
var factory = __webpack_require__(42701);
;// CONCATENATED MODULE: ./src/plugins/finder/ui/header/header.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */





let UIBrowserHeader = class UIBrowserHeader extends ui/* UIGroup */.qe {
    constructor(jodit, options, stateManager) {
        var _a;
        super(jodit);
        this.options = options;
        this.stateManager = stateManager;
        this.syncMod = true;
        this.toolbar = (0,factory/* makeCollection */.R)(this.j);
        this.filter = new ui/* UIInput */.u3(this.j, {
            icon: 'search',
            placeholder: 'Filter',
            clearButton: true,
            onChange: (value) => {
                this.stateManager.setFilter(value);
            }
        });
        this.append(this.toolbar).append(this.filter);
        this.filter.container.classList.add(this.getFullElName('filter'));
        this.toolbar
            .setMod('mode', 'header')
            .build((_a = this.options.toolbarButtons) !== null && _a !== void 0 ? _a : []);
    }
    className() {
        return 'UIBrowserHeader';
    }
};
UIBrowserHeader = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], UIBrowserHeader);


// EXTERNAL MODULE: ./src/modules/image-editor/image-editor.ts + 2 modules
var image_editor = __webpack_require__(21121);
// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(27537);
;// CONCATENATED MODULE: ./src/plugins/finder/ui/progress/progress.ts




let UIProgress = class UIProgress extends ui/* ProgressBar */.ko {
    constructor(jodit, state) {
        super(jodit);
        this.state = state;
        this.onProgress();
    }
    className() {
        return 'UIProgress';
    }
    onProgress() {
        if (this.state.progress) {
            this.show();
        }
        else {
            this.hide();
        }
        this.progress(this.state.progress);
    }
    hide() {
        this.setMod('hidden', true);
        return this;
    }
    progress(percentage) {
        this.container.style.width = percentage.toFixed(2) + '%';
        if (percentage >= 98) {
            this.j.async.setTimeout(() => {
                this.hide();
            }, {
                label: 'progress',
                timeout: 300
            });
        }
        return this;
    }
    show() {
        this.setMod('hidden', false);
        return this;
    }
};
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.progress')
], UIProgress.prototype, "onProgress", null);
UIProgress = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], UIProgress);


// EXTERNAL MODULE: ./src/modules/file-browser/factories.ts
var factories = __webpack_require__(43708);
// EXTERNAL MODULE: ./src/core/traits/index.ts + 3 modules
var traits = __webpack_require__(34821);
// EXTERNAL MODULE: ./src/core/component/index.ts + 1 modules
var component = __webpack_require__(26655);
;// CONCATENATED MODULE: ./src/plugins/finder/helpers/persistent-store.ts




let PersistentStore = class PersistentStore extends component/* ViewComponent */.Hr {
    constructor(jodit, state) {
        super(jodit);
        this.state = state;
        this.sortBy = 'changed-desc';
        this.view = 'tiles';
        this.foldersPosition = 'top';
        this.tileSize = 'default';
        this.favorites = [];
        this.showSideBar = true;
        this.showPreview = false;
        this.showFavorites = true;
    }
    className() {
        return 'PersistentStore';
    }
    onChangeThemeSetField() {
        this.theme = this.state.theme;
    }
    onChangeView() {
        this.view = this.state.view;
    }
    onChangeSortBy() {
        this.sortBy = this.state.sortBy;
    }
    onChangeTileSize() {
        this.tileSize = this.state.tileSize;
    }
    onChangeFavorites() {
        this.favorites = this.state.favorites;
    }
    onChangeShowSideBar() {
        this.showSideBar = this.state.showSideBar;
    }
    onChangeShowPreview() {
        this.showPreview = this.state.showPreview;
    }
    onChangeShowFavorites() {
        this.showFavorites = this.state.showFavorites;
    }
    onChangeFoldersPosition() {
        this.foldersPosition = this.state.foldersPosition;
    }
    syncWithState() {
        this.state.tileSize = this.tileSize;
        this.state.favorites = this.favorites.map((item) => {
            if (item instanceof builders_item/* FileBrowserItem */.Z) {
                return item;
            }
            return builders_item/* FileBrowserItem.create */.Z.create(item);
        });
        this.state.view = this.view;
        this.state.theme = this.theme;
        this.state.showSideBar = this.showSideBar;
        this.state.showPreview = this.showPreview;
        this.state.showFavorites = this.showFavorites;
        this.state.sortBy = this.sortBy;
        this.state.foldersPosition = this.foldersPosition;
    }
};
(0,tslib_es6/* __decorate */.gn)([
    decorators.persistent
], PersistentStore.prototype, "theme", void 0);
(0,tslib_es6/* __decorate */.gn)([
    decorators.persistent
], PersistentStore.prototype, "sortBy", void 0);
(0,tslib_es6/* __decorate */.gn)([
    decorators.persistent
], PersistentStore.prototype, "view", void 0);
(0,tslib_es6/* __decorate */.gn)([
    decorators.persistent
], PersistentStore.prototype, "foldersPosition", void 0);
(0,tslib_es6/* __decorate */.gn)([
    decorators.persistent
], PersistentStore.prototype, "tileSize", void 0);
(0,tslib_es6/* __decorate */.gn)([
    decorators.persistent
], PersistentStore.prototype, "favorites", void 0);
(0,tslib_es6/* __decorate */.gn)([
    decorators.persistent
], PersistentStore.prototype, "showSideBar", void 0);
(0,tslib_es6/* __decorate */.gn)([
    decorators.persistent
], PersistentStore.prototype, "showPreview", void 0);
(0,tslib_es6/* __decorate */.gn)([
    decorators.persistent
], PersistentStore.prototype, "showFavorites", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.theme')
], PersistentStore.prototype, "onChangeThemeSetField", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.view')
], PersistentStore.prototype, "onChangeView", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.sortBy')
], PersistentStore.prototype, "onChangeSortBy", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.tileSize')
], PersistentStore.prototype, "onChangeTileSize", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.favorites')
], PersistentStore.prototype, "onChangeFavorites", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.showSideBar')
], PersistentStore.prototype, "onChangeShowSideBar", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.showPreview')
], PersistentStore.prototype, "onChangeShowPreview", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.showFavorites')
], PersistentStore.prototype, "onChangeShowFavorites", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.foldersPosition')
], PersistentStore.prototype, "onChangeFoldersPosition", null);
PersistentStore = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], PersistentStore);


;// CONCATENATED MODULE: ./src/plugins/finder/helpers/history-manager.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */




let HistoryManager = class HistoryManager extends component/* ViewComponent */.Hr {
    constructor(jodit, state) {
        super(jodit);
        this.state = state;
        this.history = [];
        this.historyIndex = 0;
    }
    className() {
        return 'HistoryManager';
    }
    canNext() {
        return this.historyIndex < this.history.length - 1;
    }
    canPrevious() {
        return this.historyIndex > 0;
    }
    push(item) {
        let { historyIndex } = this;
        const current = this.history[historyIndex];
        if (current &&
            current.currentSource === item.currentSource &&
            current.currentPath === item.currentPath) {
            return;
        }
        let history = [...this.history];
        if (history.length - 1 !== historyIndex) {
            history = history.slice(0, historyIndex + 1);
        }
        history.push(item);
        if (current) {
            historyIndex += 1;
        }
        this.history = history;
        this.historyIndex = historyIndex;
    }
    next() {
        if (this.canNext()) {
            this.historyIndex += 1;
            this.updateState();
        }
    }
    previous() {
        if (this.canPrevious()) {
            this.historyIndex -= 1;
            this.updateState();
        }
    }
    updateCurrent() {
        this.history[this.historyIndex] = {
            currentSource: this.state.currentSource,
            currentPath: this.state.currentPath,
            tree: (0,helpers.fastClone)(this.state.tree),
            elements: [...this.state.elements]
        };
    }
    onHome() {
        this.state.currentPath = '';
        this.state.currentSource = '';
        this.j.e.fire('afterOpenFolder.filebrowser update.filebrowser');
    }
    onOpenFolder() {
        this.push({
            tree: [],
            elements: [],
            currentPath: this.state.currentPath,
            currentSource: this.state.currentSource
        });
        this.j.e.fire('changeSelection');
    }
    updateState() {
        const { tree, elements, currentSource, currentPath } = this.history[this.historyIndex];
        this.state.activeElements = [];
        this.state.elements = [...elements];
        this.state.tree = [...tree];
        this.state.currentSource = currentSource;
        this.state.currentPath = currentPath;
        this.j.e.fire('changeSelection');
    }
};
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(['state.elements', 'state.tree'])
], HistoryManager.prototype, "updateCurrent", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':goHome.filebrowser')
], HistoryManager.prototype, "onHome", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':afterOpenFolder.filebrowser')
], HistoryManager.prototype, "onOpenFolder", null);
HistoryManager = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], HistoryManager);


;// CONCATENATED MODULE: ./src/plugins/finder/helpers/context-menu.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */




let ContextMenuManager = class ContextMenuManager extends component/* ViewComponent */.Hr {
    className() {
        return 'ContextMenuManager';
    }
    onFolderContext(item, e) {
        this.buildContextItemMenu(this.getFolderContextActions(item), e);
        return false;
    }
    onItemContext(item, _, e) {
        this.buildContextItemMenu(this.getItemContextActions(item), e);
        return false;
    }
    onSourceContext(item, e) {
        this.buildContextItemMenu(this.getSourceContextActions(item), e);
        return false;
    }
    buildContextItemMenu(actions, e) {
        if (!this.j.o.contextMenu) {
            return;
        }
        const context = (0,factories/* makeContextMenu */.L)(this.j).setMod('theme', this.j.state.theme);
        context.show(e.clientX, e.clientY, actions.filter((a) => a && a.enabled !== false));
        this.j.e.on(this.j, 'afterClose', () => {
            if (context.isOpened) {
                context.close();
            }
        });
    }
    getItemContextActions(item) {
        if (!this.j.stateManager.isActive(item)) {
            this.j.stateManager.addActive(item, this.j.state.activeElements.length > 1);
        }
        if (item.type === 'folder') {
            return this.getFolderContextActions({
                type: 'directory',
                children: [],
                name: item.name || '',
                path: item.path,
                sourceName: item.sourceName
            });
        }
        const opt = this.j.options, dp = this.j.dataProvider, single = this.j.state.activeElements.length === 1;
        return [
            {
                icon: 'pencil',
                title: 'Edit',
                enabled: Boolean(item.isImage) &&
                    opt.editImage &&
                    single &&
                    (dp.canI('ImageResize') || dp.canI('ImageCrop')),
                exec: () => {
                    this.j.e.fire('edit.filebrowser');
                }
            },
            {
                icon: 'italic',
                title: 'Rename',
                enabled: dp.canI('FileRename') && single,
                exec: () => this.j.e.fire('fileRename.filebrowser', item)
            },
            {
                icon: 'bin',
                title: 'Delete',
                enabled: dp.canI('FileRemove'),
                exec: () => this.j.e.fire('fileRemove.filebrowser', item)
            },
            {
                icon: 'eye',
                title: 'Preview',
                enabled: Boolean(item.isImage || item.type === 'file') &&
                    opt.preview &&
                    single,
                exec: () => this.j.e.fire('openLightBox.filebrowser', item)
            },
            {
                icon: 'upload',
                title: 'Download',
                exec: () => {
                    if (item.fileURL) {
                        this.j.ow.open(item.fileURL);
                    }
                }
            }
        ];
    }
    getFolderContextActions(item) {
        const dp = this.j.dataProvider;
        return [
            {
                icon: 'pencil',
                title: 'Rename',
                exec: () => {
                    this.j.e.fire('folderRename.filebrowser', item);
                },
                enabled: dp.canI('FolderRename')
            },
            {
                icon: 'bin',
                title: 'Delete',
                exec: () => {
                    this.j.e.fire('folderRemove.filebrowser', item);
                },
                enabled: dp.canI('FolderRemove')
            },
            {
                icon: 'plus',
                title: 'Add folder',
                exec: () => {
                    this.j.e.fire('folderCreate.filebrowser', item);
                },
                enabled: dp.canI('FolderCreate')
            }
        ];
    }
    getSourceContextActions(item) {
        return [
            {
                icon: 'plus',
                title: 'Create folder',
                exec: () => {
                    this.j.e.fire('folderCreate.filebrowser', item);
                }
            }
        ];
    }
};
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':contextmenuFolder.filebrowser')
], ContextMenuManager.prototype, "onFolderContext", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':contextmenuItem.filebrowser')
], ContextMenuManager.prototype, "onItemContext", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':contextmenuSource.filebrowser')
], ContextMenuManager.prototype, "onSourceContext", null);
ContextMenuManager = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], ContextMenuManager);


;// CONCATENATED MODULE: ./src/plugins/finder/helpers/helpers.ts
const parentPath = (path) => {
    const parts = path.split('/').filter((p) => p.length);
    parts.pop();
    return parts.join('/') || '/';
};

// EXTERNAL MODULE: ./src/index.ts + 153 modules
var src = __webpack_require__(16136);
// EXTERNAL MODULE: ./src/plugins/license/helpers/helpers.js
var helpers_helpers = __webpack_require__(11777);
;// CONCATENATED MODULE: ./src/plugins/license/license.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */




class license extends core_plugin/* Plugin */.S {
    static make(jodit) {
        return new license(jodit);
    }
    afterInit(jodit) {
        this.j.e.on('checkReserve', async () => {
            const code = this.j.o.license, domain = location.host;
            let valid = (0,helpers_helpers/* validateLicense */.sx)(code, domain);
            if (!valid && code[12] > 'A' && !false) {
                valid = await this.validateLicenseRemote(code, domain);
            }
            return valid ? 'normal' : '';
        });
    }
    beforeDestruct(jodit) { }
    async validateLicenseRemote(code, domain) {
        const storageKey = 'validateJoditLicenseRemote', newCode = this.j.storage.get(storageKey);
        if (newCode && (0,helpers_helpers/* validateLicense */.sx)(newCode, domain)) {
            return true;
        }
        const s = document.createElement('script');
        s.src = `https://xdsoft.net/jodit/pro/api/licenses/validate/?code=${encodeURIComponent(code)}&host=${encodeURIComponent(domain)}`;
        document.body.appendChild(s);
        return new Promise((res) => {
            window['onJoditResolveKeyCode'] = (newCode) => {
                try {
                    if ((0,helpers.isBoolean)(newCode)) {
                        return res(newCode);
                    }
                    if ((0,helpers_helpers/* validateLicense */.sx)(newCode, domain)) {
                        this.j.storage.set(storageKey, newCode);
                        res(true);
                    }
                    else {
                        res(false);
                    }
                }
                finally {
                    modules.Dom.safeRemove(s);
                }
            };
            setTimeout(() => {
                res(false);
                modules.Dom.safeRemove(s);
            }, 3000);
        });
    }
}

;// CONCATENATED MODULE: ./src/plugins/finder/ui/lightboox/lightbox.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
var UILightBox_1;







let UILightBox = UILightBox_1 = class UILightBox extends modules.UIElement {
    constructor(jodit, current, elements) {
        super(jodit);
        this.current = current;
        this.elements = elements;
        this.dialog = new modules.Dialog();
        const { dialog } = this;
        dialog
            .setMod('theme', jodit.state.theme)
            .toolbar.setMod('mode', 'header');
        dialog.open(this);
        this.elements = this.elements.filter((e) => e.isImage);
        dialog.e.on(dialog, 'afterClose', () => {
            this.destruct();
        });
        this.addGlobalListeners();
        this.onChangeCurrent();
        dialog.toolbar.build([
            {
                icon: 'check',
                exec: () => {
                    jodit.stateManager.addActive(this.current, false);
                    jodit.e.fire('select.filebrowser');
                    dialog.close();
                }
            },
            'dialog.close'
        ]);
    }
    className() {
        return 'UILightBox';
    }
    render() {
        return `<div>
			<div class='&__previous'>*angle-left*</div>
			<div class='&__preview'></div>
			<div class='&__loader'></div>
			<div class='&__next'>*angle-right*</div>
		</div>`;
    }
    async onChangeCurrent() {
        const { current } = this;
        this.setMod('loading', true);
        const preview = this.getElm('preview');
        (0,helpers.assert)(preview != null, 'preview element does not exist');
        modules.Dom.detach(preview);
        (0,helpers.css)(preview, {
            backgroundImage: null
        });
        if (current.isImage) {
            const image = await (0,helpers.loadImage)(current.fileURL, this.j);
            this.dialog.setPosition();
            (0,helpers.css)(preview, {
                width: Math.min(this.jodit.ow.innerWidth, image.naturalWidth),
                height: Math.min(this.jodit.ow.innerHeight - 100, image.naturalHeight),
                backgroundImage: `url(${image.src})`
            });
        }
        else {
            const iframe = await this.makeIframe(current.fileURL);
            preview.appendChild(iframe);
        }
        this.dialog.setSize();
        this.dialog.setPosition();
        this.setMod('loading', false);
    }
    makeIframe(url) {
        const iframe = this.j.c.element('iframe');
        iframe.classList.add(this.getFullElName('office-iframe'));
        iframe.src = /\.pdf/.test(url)
            ? url
            : this.j.o.previewOfficeURL + encodeURIComponent(url);
        return iframe;
    }
    onPreviousClick() {
        const { current } = this;
        let index = this.j.stateManager.getIndex(current, this.elements);
        if (index <= 0) {
            index = this.elements.length - 1;
        }
        else {
            index -= 1;
        }
        this.current = this.elements[index];
    }
    onNextClick() {
        const { current } = this;
        let index = this.j.stateManager.getIndex(current, this.elements);
        if (index >= this.elements.length - 1) {
            index = 0;
        }
        else {
            index += 1;
        }
        this.current = this.elements[index];
    }
    static open(jodit, current, elements) {
        return new UILightBox_1(jodit, current, elements);
    }
    addGlobalListeners() {
        this.j.e.on(this.j.od, 'keydown', this.onKeyPress);
    }
    onKeyPress(e) {
        if (e.key === constants.KEY_LEFT || e.key === constants.KEY_RIGHT || e.key === constants.KEY_SPACE) {
            e.key === constants.KEY_LEFT ? this.onPreviousClick() : this.onNextClick();
            return false;
        }
    }
    removeGlobalListeners() {
        this.j.e.off(this.j.od, 'keydown', this.onKeyPress);
    }
    destruct() {
        this.removeGlobalListeners();
        this.dialog.destruct();
        return super.destruct();
    }
};
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('current')
], UILightBox.prototype, "onChangeCurrent", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('previous:click')
], UILightBox.prototype, "onPreviousClick", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('next:click')
], UILightBox.prototype, "onNextClick", null);
(0,tslib_es6/* __decorate */.gn)([
    decorators.autobind
], UILightBox.prototype, "onKeyPress", null);
UILightBox = UILightBox_1 = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], UILightBox);


;// CONCATENATED MODULE: ./src/plugins/finder/helpers/loading-manager.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */



let LoadingManager = class LoadingManager extends component/* ViewComponent */.Hr {
    constructor(jodit, state) {
        super(jodit);
        this.state = state;
        this.offset = 0;
        this.countInOneChunk = 20;
        this.stopLoadingParts = false;
        this.__isLoadingPart = false;
        this.__callQueueCount = 0;
    }
    className() {
        return 'LoadingManager';
    }
    async onUpdateFileBrowser() {
        this.j.state.activeElements = [];
        this.j.panel.setMod('loading', true);
        await Promise.all([this.loadFolders(), this.loadItems()]);
        this.j.panel.setMod('loading', false);
    }
    async loadFolders() {
        if (!this.j.isOpened) {
            return;
        }
        const { currentPath, currentSource } = this.j.state;
        try {
            const sources = await this.j.dataProvider.tree(currentPath, currentSource);
            this.j.stateManager.fillSources(sources, currentPath);
            this.j.state.sources = sources;
        }
        catch (e) {
            this.j.status(e);
        }
    }
    async loadItems() {
        if (!this.j.isOpened) {
            return;
        }
        try {
            this.offset = 0;
            this.stopLoadingParts = false;
            this.__callQueueCount = 0;
            this.j.state.elements = await this.loadPartItems();
            this.stopLoadingParts =
                this.j.state.elements.length < this.countInOneChunk;
            while (!this.stopLoadingParts &&
                this.j.panel.countInColumn * this.j.panel.countInRow >=
                    this.j.state.elements.length) {
                await this.loadItemsChunk();
            }
        }
        catch (e) {
            this.j.status(e);
        }
    }
    async __loadItemsChunk() {
        if (this.__isLoadingPart) {
            this.__callQueueCount += 1;
            return;
        }
        if (this.stopLoadingParts) {
            this.__callQueueCount = 0;
            return;
        }
        this.__isLoadingPart = true;
        this.j.panel.items.setMod('chunk-loading', true);
        try {
            this.offset += this.countInOneChunk;
            const elementsPart = await this.loadPartItems();
            this.stopLoadingParts = elementsPart.length < this.countInOneChunk;
            if (elementsPart.length) {
                this.j.state.elements =
                    this.j.state.elements.concat(elementsPart);
            }
        }
        catch (e) {
            this.j.status(e);
        }
        this.j.panel.items.setMod('chunk-loading', false);
        this.__isLoadingPart = false;
        if (this.__callQueueCount > 0) {
            this.__callQueueCount -= 1;
            return this.__loadItemsChunk();
        }
    }
    loadItemsChunk() {
        return this.__loadItemsChunk();
    }
    loadPartItems() {
        const { currentPath, currentSource, sortBy, withFolders, foldersPosition, onlyImages, filterWord } = this.j.state;
        return this.j.dataProvider.items(currentPath, currentSource, {
            offset: this.offset,
            limit: this.countInOneChunk,
            sortBy,
            withFolders,
            foldersPosition,
            onlyImages,
            filterWord
        });
    }
};
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':update.filebrowser')
], LoadingManager.prototype, "onUpdateFileBrowser", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(['state.currentPath', 'state.currentSource']),
    (0,decorators.debounce)((ctx) => ({
        timeout: ctx.defaultTimeout,
        promisify: true
    }))
], LoadingManager.prototype, "loadFolders", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)([
        'state.currentPath',
        'state.currentSource',
        'state.sortBy',
        'state.onlyImages',
        'state.foldersPosition',
        'state.filterWord'
    ]),
    (0,decorators.debounce)((ctx) => ({
        timeout: ctx.defaultTimeout,
        promisify: true
    }))
], LoadingManager.prototype, "loadItems", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.debounce)((ctx) => ({
        timeout: ctx.defaultTimeout,
        promisify: true
    }))
], LoadingManager.prototype, "loadItemsChunk", null);
LoadingManager = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], LoadingManager);


;// CONCATENATED MODULE: ./src/plugins/finder/browser.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
























let FileBrowserPro = class FileBrowserPro extends dialog/* Dialog */.Vq {
    constructor(options) {
        super((0,helpers.ConfigProto)(Object.assign(options || {}, {
            resizable: true,
            draggable: true,
            toolbarButtons: (options === null || options === void 0 ? void 0 : options.toolbarButtons) ||
                config/* Config.defaultOptions.filebrowser.buttons */.D.defaultOptions.filebrowser.buttons,
            buttons: src.Jodit.atom([
                'filebrowser.settings',
                'fullsize',
                'dialog.close'
            ])
        }), config/* Config.defaultOptions.filebrowser */.D.defaultOptions.filebrowser));
        this.dataProvider = (0,factories/* makeDataProvider */.S)(this, this.options);
        this.state = (0,modules.observable)({
            onSelectCallBack: null,
            theme: 'default',
            showSideBar: true,
            showFavorites: true,
            showSettings: false,
            showPreview: false,
            withFolders: true,
            foldersPosition: 'bottom',
            info: '',
            metaInfo: null,
            currentPath: '',
            currentSource: '',
            currentBaseUrl: '',
            tree: [],
            activeElements: [],
            favorites: [],
            progress: 0,
            lastSelectedIndex: 0,
            elements: [],
            messages: [],
            sources: [],
            view: 'tiles',
            tileSize: 'default',
            sortBy: 'name-asc',
            filterWord: '',
            onlyImages: false
        });
        this.persistent = new PersistentStore(this, this.state);
        this.loadingManager = new LoadingManager(this, this.state);
        this.stateManager = new StateManager(this.state);
        this.historyManager = new HistoryManager(this, this.state);
        this.contextMenuManager = new ContextMenuManager(this);
        this.header = new UIBrowserHeader(this, this.options, this.stateManager);
        this.panel = new UIBrowserPanel(this, this.stateManager);
        this.files = this.panel;
        this.tree = this.panel;
        this.progressbar = new UIProgress(this, this.stateManager.state);
        license.make(this);
        if (!this.persistent.theme && this.options.theme) {
            this.persistent.theme = this.options.theme;
        }
        this.panel.append(this.progressbar);
        this.toolbar.setMod('mode', 'header');
        this.setSize(Math.min(this.options.width, screen.width), Math.min(this.options.height, screen.height)).setHeader(this.header);
        this.onResizeWindow();
        this.initUploader();
        this.onChangeTheme();
        this.fullFillOptions();
        this.dataProvider.onProgress((percentage) => {
            if (percentage === 0) {
                percentage = 30;
            }
            this.state.progress = percentage;
        });
        this.e.on('beforeClose', this.removeGlobalListeners);
        this.e.fire('afterInit');
        src.Jodit.prototype.afterInitHook.call(this);
    }
    className() {
        return 'FileBrowserPro';
    }
    lock(name = 'any') {
        this.container.classList.add('jodit_disabled');
        return super.lock(name);
    }
    unlock() {
        this.container.classList.remove('jodit_disabled');
        return super.unlock();
    }
    status(message, success = !(message instanceof Error)) {
        if ((0,helpers.isAbort)(message)) {
            return;
        }
        const item = {
            message: (0,helpers.isString)(message) ? message : message.message,
            type: success ? 'success' : 'error'
        };
        this.stateManager.addMessage(item);
        this.async.setTimeout(() => {
            this.stateManager.removeMessage(item);
        }, this.options.howLongShowMsg);
    }
    addDisclaimer(elm) {
        this.dialog.appendChild(elm);
    }
    async open(callback = this.o
        .defaultCallback, onlyImages) {
        this.state.onlyImages = Boolean(onlyImages);
        this.prepareOpening(callback);
        super.open(this.panel.container);
        return this.e.fire('update.filebrowser');
    }
    onResizeWindow() {
        (0,helpers.css)(this.dialog, {
            maxWidth: screen.width,
            minHeight: Math.min(this.options.height, screen.height),
            minWidth: Math.min(this.options.width, screen.width)
        });
    }
    onChangePath() {
        const { currentPath, currentSource } = this.state;
        this.uploader.setPath(currentPath);
        this.uploader.setSource(currentSource);
    }
    onChangeTheme() {
        this.setMod('theme', this.state.theme);
        this.header.setMod('theme', this.state.theme);
        this.panel.setMod('theme', this.state.theme);
        this.options.theme = this.state.theme;
    }
    onToggleSettings() {
        this.state.showSettings = !this.state.showSettings;
    }
    prepareOpening(callback) {
        this.registerGlobalListeners();
        if (callback) {
            this.state.onSelectCallBack = (data) => {
                this.close();
                callback(data);
            };
        }
        this.persistent.syncWithState();
    }
    registerGlobalListeners() {
        this.e.on(this.ow, 'keydown', this.onKeyPress);
    }
    onKeyPress(e) {
        const { activeElement } = this.od;
        if (!this.state.activeElements.length ||
            !activeElement ||
            !modules.Dom.isOrContains(this.panel.items.container, activeElement)) {
            return;
        }
        const elms = this.state.elements;
        switch (e.key) {
            case constants.KEY_ENTER: {
                return this.onChooseItems();
            }
            case constants.KEY_DELETE: {
                return this.onFileRemove();
            }
            case constants.KEY_RIGHT:
            case constants.KEY_LEFT:
            case constants.KEY_DOWN:
            case constants.KEY_UP: {
                const next = e.key === constants.KEY_RIGHT || e.key === constants.KEY_DOWN, index = this.state.lastSelectedIndex;
                let nextIndex;
                if ([constants.KEY_RIGHT, constants.KEY_LEFT].includes(e.key)) {
                    if (next) {
                        nextIndex = !elms[index + 1] ? 0 : index + 1;
                    }
                    else {
                        nextIndex = !elms[index - 1]
                            ? elms.length - 1
                            : index - 1;
                    }
                }
                else {
                    const { countInRow } = this.panel;
                    nextIndex = Math.round(((index + 1) / countInRow + (next ? 1 : -1)) *
                        countInRow -
                        1);
                }
                elms[nextIndex] &&
                    this.stateManager.addActive(elms[nextIndex], e.shiftKey);
                return false;
            }
        }
    }
    removeGlobalListeners() {
        this.e.off(this.ow, 'keydown', this.onKeyPress);
    }
    onFileRemove() {
        if (this.state.activeElements.length) {
            this.confirm('Are you sure?', '', (yes) => {
                if (yes) {
                    const promises = [];
                    this.state.activeElements.forEach((item) => {
                        if (this.stateManager.isFavorite(item)) {
                            this.stateManager.toggleFavorite(item);
                        }
                        promises.push(this.deleteFile(item.file || item.name || '', item.sourceName));
                    });
                    this.state.activeElements = [];
                    Promise.all(promises).then(() => {
                        this.loadingManager.loadItems();
                    });
                }
            }).bindDestruct(this);
        }
    }
    onFileEdit() {
        if (this.state.activeElements.length === 1) {
            const [file] = this.state.activeElements;
            image_editor/* openImageEditor.call */.r.call(this, file.fileURL, file.file || '', file.path, file.sourceName, undefined, this.status);
        }
    }
    onFolderRename(data) {
        this.prompt('Enter new name', 'Rename', (newName) => {
            if (!(0,helpers.isValidName)(newName) || newName === data.name) {
                this.status(this.i18n('Enter new name'));
                return false;
            }
            this.dataProvider
                .folderRename(parentPath(data.path), data.name, newName, data.sourceName)
                .then((message) => {
                this.state.activeElements = [];
                this.status(message, true);
                this.state.currentPath =
                    parentPath(data.path) + '/' + newName;
                this.state.currentSource = data.sourceName;
                this.historyManager.updateCurrent();
                this.loadingManager.loadFolders();
            })
                .catch(this.status);
            return;
        }, this.i18n('type name'), data.name).bindDestruct(this);
    }
    onFolderRemove(data) {
        this.confirm('Are you sure?', 'Delete', (yes) => {
            if (yes) {
                this.dataProvider
                    .folderRemove(parentPath(data.path), data.name, data.sourceName)
                    .then((message) => {
                    this.status(message, true);
                    this.state.currentPath = parentPath(data.path);
                    this.state.currentSource = data.sourceName;
                    this.loadingManager.loadFolders();
                })
                    .catch(this.status);
            }
        }).bindDestruct(this);
    }
    onFolderCreate(data) {
        this.prompt('Enter Directory name', 'Create directory', (name) => {
            const path = data.path || '/';
            this.dataProvider
                .createFolder(name, data.path || '/', data.sourceName)
                .then(() => {
                if (this.state.currentSource === data.sourceName &&
                    this.state.currentPath === path) {
                    this.e.fire('update.filebrowser');
                }
                else {
                    this.state.currentSource = data.sourceName;
                    this.state.currentPath = path;
                }
                this.historyManager.updateCurrent();
            }, this.status);
        }, this.i18n('type name')).bindDestruct(this);
    }
    onFileRename(item) {
        const name = item.file || item.name || '';
        if (this.state.activeElements.length === 1 && name) {
            this.prompt('Enter new name', 'Rename', (newName) => {
                if (!(0,helpers.isValidName)(newName)) {
                    this.status(this.i18n('Enter new name'));
                    return false;
                }
                this.dataProvider
                    .fileRename(this.state.currentPath, name, newName, this.state.currentSource)
                    .then((message) => {
                    this.state.activeElements = [];
                    this.status(message, true);
                    this.loadingManager.loadItems();
                })
                    .catch(this.status);
                return;
            }, this.i18n('type name'), name).bindDestruct(this);
        }
    }
    onChooseItems() {
        const act = this.stateManager.state.activeElements;
        if (act.length) {
            if (act[0].type === 'folder') {
                this.state.currentPath =
                    this.state.currentPath + '/' + act[0].name;
                this.state.currentSource = act[0].sourceName;
                this.e.fire('afterOpenFolder.filebrowser');
                return;
            }
            if (this.state.onSelectCallBack) {
                this.stateManager.callSelectHandler();
            }
            else {
                this.onOpenLightBox(act[0]);
            }
        }
    }
    onOpenLightBox(item) {
        UILightBox.open(this, item, this.state.elements);
    }
    deleteFile(name, source) {
        return this.dataProvider
            .fileRemove(this.state.currentPath, name, source)
            .then((message) => {
            this.status(message || this.i18n('File "%s" was deleted', name), true);
        })
            .catch(this.status);
    }
    initUploader() {
        const self = this, uploaderOptions = (0,helpers.ConfigProto)(self.o.uploader || {}, config/* Config.defaultOptions.uploader */.D.defaultOptions.uploader);
        const uploadHandler = () => this.loadingManager.loadItems();
        self.uploader = self.getInstance('Uploader', uploaderOptions);
        self.uploader.bind(self.panel.container, uploadHandler, self.status);
        self.e.on('bindUploader.filebrowser', (button) => {
            self.uploader.bind(button, uploadHandler, self.status);
        });
    }
    destruct() {
        this.removeGlobalListeners();
        this.header.destruct();
        this.panel.destruct();
        super.destruct();
    }
    fullFillOptions() {
        const keys = [
            'getLocalFileByUrl',
            'crop',
            'resize',
            'create',
            'fileMove',
            'folderMove',
            'fileRename',
            'folderRename',
            'fileRemove',
            'folderRemove',
            'folder',
            'items',
            'permissions'
        ];
        keys.forEach((key) => {
            if (this.options[key] != null) {
                this.options[key] = (0,helpers.ConfigProto)(this.options[key], this.o.ajax);
            }
        });
    }
};
(0,tslib_es6/* __decorate */.gn)([
    decorators.autobind
], FileBrowserPro.prototype, "status", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':resize', window)
], FileBrowserPro.prototype, "onResizeWindow", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(['state.currentPath', 'state.currentSource'])
], FileBrowserPro.prototype, "onChangePath", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('state.theme')
], FileBrowserPro.prototype, "onChangeTheme", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':toggleSettings.filebrowser')
], FileBrowserPro.prototype, "onToggleSettings", null);
(0,tslib_es6/* __decorate */.gn)([
    decorators.autobind
], FileBrowserPro.prototype, "onKeyPress", null);
(0,tslib_es6/* __decorate */.gn)([
    decorators.autobind
], FileBrowserPro.prototype, "removeGlobalListeners", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':fileRemove.filebrowser')
], FileBrowserPro.prototype, "onFileRemove", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':edit.filebrowser')
], FileBrowserPro.prototype, "onFileEdit", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':folderRename.filebrowser')
], FileBrowserPro.prototype, "onFolderRename", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':folderRemove.filebrowser')
], FileBrowserPro.prototype, "onFolderRemove", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':folderCreate.filebrowser')
], FileBrowserPro.prototype, "onFolderCreate", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':fileRename.filebrowser')
], FileBrowserPro.prototype, "onFileRename", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':select.filebrowser')
], FileBrowserPro.prototype, "onChooseItems", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':openLightBox.filebrowser')
], FileBrowserPro.prototype, "onOpenLightBox", null);
FileBrowserPro = (0,tslib_es6/* __decorate */.gn)([
    decorators.component,
    (0,decorators.derive)(traits/* Dlgs */.lf)
], FileBrowserPro);

Object.defineProperty(src.Jodit.modules, 'FileBrowserPro', {
    value: FileBrowserPro,
    writable: false,
    enumerable: true,
    configurable: true
});

// EXTERNAL MODULE: ./src/core/global.ts
var global = __webpack_require__(58299);
;// CONCATENATED MODULE: ./src/plugins/finder/config.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */


(0,global/* extendLang */.xl)(__webpack_require__(60561));
const fb = config/* Config.prototype.controls.filebrowser */.D.prototype.controls.filebrowser;
fb.settings = {
    icon: 'settings',
    tooltip: 'Settings',
    exec: (editor) => {
        var _a;
        const view = (_a = editor.parent) !== null && _a !== void 0 ? _a : editor;
        view.e.fire('toggleSettings.filebrowser');
    }
};
fb.home = {
    icon: 'home',
    tooltip: 'Home',
    exec: (editor) => {
        editor.e.fire('goHome.filebrowser');
    }
};
fb.preview = {
    icon: 'eye',
    tooltip: 'Preview',
    isDisabled(fb) {
        return fb.state.activeElements.length === 0;
    },
    exec: (editor) => {
        editor.e.fire('togglePreview.filebrowser');
    }
};
fb.next = {
    icon: 'angle-right',
    tooltip: 'History next',
    isDisabled: (browser) => !browser.historyManager.canNext(),
    exec: (editor) => {
        editor.historyManager.next();
    }
};
fb.previous = {
    icon: 'angle-left',
    tooltip: 'History previous',
    isDisabled: (browser) => !browser.historyManager.canPrevious(),
    exec: (editor) => {
        editor.historyManager.previous();
    }
};
fb['new-folder'] = {
    icon: 'new-folder',
    exec: (editor) => {
        editor.e.fire('folderCreate.filebrowser', {
            path: editor.state.currentPath,
            sourceName: editor.state.currentSource
        });
    },
    tooltip: 'New folder'
};
Object.assign(config/* Config.prototype.filebrowser */.D.prototype.filebrowser, {
    buttons: [
        'filebrowser.home',
        'filebrowser.previous',
        'filebrowser.next',
        '|',
        'filebrowser.upload',
        'filebrowser.new-folder',
        'filebrowser.remove',
        'filebrowser.update',
        'filebrowser.select',
        'filebrowser.edit',
        '|',
        'filebrowser.preview',
        'about'
    ],
    sort: false,
    pixelOffsetLoadNewChunk: 200,
    width: 780,
    height: 400,
    previewOfficeURL: 'https://view.officeapps.live.com/op/view.aspx?src='
});

;// CONCATENATED MODULE: ./src/plugins/finder/finder.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */




class finder extends core_plugin/* Plugin */.S {
    constructor() {
        super(...arguments);
        this.requires = ['license'];
        this.hasStyle = !src.Jodit.fatMode;
    }
    afterInit(jodit) {
        jodit.e.on('getInstanceFileBrowser', (options) => {
            if (!this.__instance) {
                this.__instance = new FileBrowserPro(options);
            }
            return this.__instance;
        });
    }
    beforeDestruct(jodit) {
        var _a;
        jodit.e.off('getInstanceFileBrowser');
        (_a = this.__instance) === null || _a === void 0 ? void 0 : _a.destruct();
    }
}
src.Jodit.plugins.add('finder', finder);


/***/ }),

/***/ 60561:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ru": function() { return /* binding */ ru; }
/* harmony export */ });
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
const ru = __webpack_require__(99425);



/***/ }),

/***/ 99425:
/***/ (function(module) {

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

module.exports = {
	Favorites: 'Избранное',
	Settings: 'Настройки',
	Light: 'Светлая',
	Dark: 'Темная',
	Theme: 'Тема',
	Show: 'Показать',
	Hide: 'Скрыть',
	'Show favorites': 'Показывать избранное',
	Tiles: 'Плитка',
	List: 'Список',
	Compact: 'Компактный',
	View: 'Отображение',
	'Folders position': 'Позиция папок',
	'Sort by': 'Сортировать по',
	'Extra small': 'Очень маленькие',
	Small: 'Маленькие',
	Large: 'Большие',
	'Extra large': 'Очень большие',
	'Tile size': 'Размер плитки'
};


/***/ }),

/***/ 11777:
/***/ (function(module) {

var __webpack_unused_export__;
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

/* eslint-disable tsdoc/syntax */

/**
 * Validate license
 * @param {string} code
 * @param {string} domain
 * @return {boolean}
 */
function validateLicense(code, domain) {
	if (validateEntLicense(code)) {
		return true;
	}

	const domainsParts = domainsHash(domain);

	const parts = [
		'[A-F013456][A-F0-9]{3}{part}',
		'([0-3]){part}[E-L4-8]{2}\\1',
		'[A-D]{part}[J-P5-6]{3}',
		'{part}[A-R0-9]{3}[X-Z]'
	].map((part, index) => {
		return part.replace('{part}', domainsParts[index] || '[R-T]');
	});

	const reg = RegExp(`^${parts.join('-')}$`, 'i');
	const type = code.substring(12, 13);

	const result = reg.test(code);
	if (!result && type === (typeof !domain).toUpperCase()[5]) {
		const parts = domain.split('.');
		parts.shift();
		return parts.length ? validateLicense(code, parts.join('.')) : false;
	}

	return result;
}

module.exports.sx = validateLicense;

function validateEntLicense(code) {
	return /[A-Z0-9][013456][A-P0-9]{2}[ABC]-([0-3])[ELPDF][E-L4-8]{2}\1-[A-D][R0][J-P5-6]{3}-[DPGHYE][GFPOD]{3}[A-SX-Z]/.test(
		code
	);
}

__webpack_unused_export__ = validateEntLicense;

function domainsHash(domain) {
	const domains = domain.split('.');

	return domains
		.map((p) => {
			if (p[0] && p[0].charCodeAt(0)) {
				return String.fromCharCode(p[0].charCodeAt(0) + 1);
			}

			return p[0];
		})
		.concat(
			domains.map((p) => {
				if (p[p.length - 1] && p[p.length - 1].charCodeAt(0)) {
					return String.fromCharCode(
						p[p.length - 1].charCodeAt(0) - 1
					);
				}

				return p[p.length - 1];
			})
		);
}

__webpack_unused_export__ = domainsHash;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(41969));
/******/ return __webpack_exports__;
/******/ }
]);
});