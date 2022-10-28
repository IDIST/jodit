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
return (self["webpackChunkjodit"] = self["webpackChunkjodit"] || []).push([[391],{

/***/ 44625:
/***/ (function(module) {

module.exports = "<?xml version=\"1.0\" ?><svg viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\"><title/><g id=\"Upload\"><path d=\"M16,26h8V50a2,2,0,0,0,2,2H38a2,2,0,0,0,2-2V26h8a2,2,0,0,0,1.4946-3.3291l-16-18a2,2,0,0,0-2.9892,0l-16,18A2,2,0,0,0,16,26ZM32,9.0107,43.5464,22H38a2,2,0,0,0-2,2V48H28V24a2,2,0,0,0-2-2H20.4536Z\"/><path d=\"M53,42a2,2,0,0,0-2,2V54a2.0023,2.0023,0,0,1-2,2H15a2.0023,2.0023,0,0,1-2-2V44a2,2,0,0,0-4,0V54a6.0066,6.0066,0,0,0,6,6H49a6.0066,6.0066,0,0,0,6-6V44A2,2,0,0,0,53,42Z\"/></g></svg>"

/***/ }),

/***/ 17433:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "backup": function() { return /* binding */ backup; }
});

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(20255);
// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(27537);
// EXTERNAL MODULE: ./src/core/ui/icon.ts
var icon = __webpack_require__(76381);
// EXTERNAL MODULE: ./src/core/global.ts
var global = __webpack_require__(58299);
;// CONCATENATED MODULE: ./src/plugins/backup/config.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */



config/* Config.prototype.backup */.D.prototype.backup = {
    interval: 30,
    limit: 50,
    dialogWidth: 700,
    hotkeys: ['ctrl+shift+b', 'cmd+shift+b']
};
config/* Config.prototype.controls.backup */.D.prototype.controls.backup = {
    store: {
        command: 'saveBackup',
        text: 'Save backup now'
    },
    restore: {
        tooltip: 'Restore',
        list: ['backup.store'],
        exec(editor) {
            editor.execCommand('openBackupDialog');
        }
    }
};
icon/* Icon.set */.J.set('restore', __webpack_require__(44625));
(0,global/* extendLang */.xl)(__webpack_require__(62800));

// EXTERNAL MODULE: ./src/core/plugin/index.ts
var core_plugin = __webpack_require__(35570);
;// CONCATENATED MODULE: ./src/plugins/backup/modules/store.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
class DefaultStorage {
    constructor(jodit) {
        this.jodit = jodit;
        this.key = 'backup.default.storage';
    }
    async add(item) {
        if (!item.html.trim().length) {
            return false;
        }
        const items = this.jodit.storage.get(this.key) || [];
        if (items.find((elm) => elm.html === item.html)) {
            return false;
        }
        items.unshift(item);
        if (items.length > this.jodit.o.backup.limit) {
            items.length = this.jodit.o.backup.limit;
        }
        this.jodit.storage.set(this.key, items);
        return false;
    }
    items() {
        return Promise.resolve(this.jodit.storage.get(this.key) || []);
    }
    clear() {
        this.jodit.storage.delete(this.key);
        return Promise.resolve(false);
    }
}

// EXTERNAL MODULE: ./src/core/decorators/index.ts + 7 modules
var decorators = __webpack_require__(11169);
// EXTERNAL MODULE: ./src/core/ui/index.ts + 2 modules
var ui = __webpack_require__(41685);
// EXTERNAL MODULE: ./src/core/helpers/index.ts + 14 modules
var helpers = __webpack_require__(52607);
;// CONCATENATED MODULE: ./src/plugins/backup/ui/item.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */



class UIBackupItem extends ui/* UIElement */.u1 {
    constructor(jodit, data) {
        super(jodit);
        this.data = data;
        this.container.innerHTML = this.formatDate(data.created);
        (0,helpers.attr)(this.container, 'tabIndex', 0);
    }
    className() {
        return 'UIBackupItem';
    }
    formatDate(timestamp) {
        const now = new Date();
        const date = (0,helpers.isString)(timestamp) ? new Date(timestamp) : timestamp, diff = (now.getTime() - date.getTime()) / 1000;
        if ((0,helpers.isFunction)(this.j.o.backup.formatDate)) {
            return this.j.o.backup.formatDate(date);
        }
        if (diff < 0.2) {
            return this.j.i18n('Current');
        }
        if (diff < 60) {
            return this.j.i18n('Less minute');
        }
        if (diff <= 3600) {
            return this.j.i18n('%s minutes ago', Math.floor(diff / 60));
        }
        if (diff <= 3600 * 24) {
            return this.j.i18n('%s hours  ago', Math.floor(diff / 3600));
        }
        return `${date.toDateString()} ${date.toLocaleTimeString()}`;
    }
    focus() {
        this.container.focus();
    }
}

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__(10063);
;// CONCATENATED MODULE: ./src/plugins/backup/ui/list.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */






let UIBackupList = class UIBackupList extends ui/* UIGroup */.qe {
    constructor(jodit) {
        super(jodit);
        this.elements = [];
        this.currentSelection = -1;
        jodit.e.on(this.container, 'keydown', (e) => {
            switch (e.key) {
                case constants.KEY_ENTER:
                    e.preventDefault();
                    e.stopPropagation();
                    this.onChoose(this.currentSelection);
                    break;
                case constants.KEY_DOWN:
                    this.selectNext();
                    break;
                case constants.KEY_UP:
                    this.selectPrevious();
                    break;
            }
        });
    }
    className() {
        return 'UIBackupList';
    }
    createContainer(options) {
        const div = super.createContainer(options);
        (0,helpers.attr)(div, 'tabIndex', '-1');
        return div;
    }
    build(items) {
        this.clear();
        items.forEach((data, index) => {
            const item = new UIBackupItem(this.jodit, data);
            this.append(item);
            this.j.e
                .on(item.container, 'focus', () => this.onSelect(index))
                .on(item.container, 'click', () => this.onSelect(index))
                .on(item.container, 'dblclick', () => this.onChoose(index));
        });
        this.currentSelection = 0;
        this.onChangeCurrentSelection(void 0, -1, 0);
    }
    onChangeCurrentSelection(_, old, index) {
        var _a, _b, _c;
        (_a = this.elements[old]) === null || _a === void 0 ? void 0 : _a.setMod('active', false);
        (_b = this.elements[index]) === null || _b === void 0 ? void 0 : _b.setMod('active', true);
        (_c = this.elements[index]) === null || _c === void 0 ? void 0 : _c.focus();
        this.j.e.fire(this, 'select', this.elements[index].data);
    }
    onSelect(index) {
        this.currentSelection = index;
    }
    onChoose(index) {
        this.j.e.fire(this, 'choose', this.elements[index !== null && index !== void 0 ? index : this.currentSelection].data);
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
};
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('currentSelection')
], UIBackupList.prototype, "onChangeCurrentSelection", null);
(0,tslib_es6/* __decorate */.gn)([
    decorators.autobind
], UIBackupList.prototype, "onSelect", null);
(0,tslib_es6/* __decorate */.gn)([
    decorators.autobind
], UIBackupList.prototype, "onChoose", null);
UIBackupList = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], UIBackupList);


;// CONCATENATED MODULE: ./src/plugins/backup/ui/box.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */





let UIBackupBox = class UIBackupBox extends ui/* UIElement */.u1 {
    constructor(jodit) {
        super(jodit);
        this.list = new UIBackupList(this.j);
        this.preview = this.j.c.div(this.getFullElName('preview'));
        this.container.appendChild(this.list.container);
        this.container.appendChild(this.preview);
        this.list.container.classList.add(this.getFullElName('list'));
        jodit.e
            .on(this.list, 'select', this.onSelectItem)
            .on(this.list, 'choose', this.onChooseItem);
    }
    className() {
        return 'UIBackupBox';
    }
    build(items) {
        this.preview.innerHTML = '';
        this.list.build(items);
    }
    destruct() {
        this.j.e.off(this.list, 'select', this.onSelectItem);
        this.list.destruct();
        return super.destruct();
    }
    onSelectItem(item) {
        this.latestSelected = item;
        this.preview.innerHTML =
            item.html ||
                `<div class="${this.getFullElName('empty')}">${this.j.i18n('Empty')}</div>`;
    }
    onChooseItem(item) {
        this.j.e.fire(this, 'choose', item);
    }
    chooseSelected() {
        this.onChooseItem(this.latestSelected);
    }
};
(0,tslib_es6/* __decorate */.gn)([
    decorators.autobind
], UIBackupBox.prototype, "onSelectItem", null);
(0,tslib_es6/* __decorate */.gn)([
    decorators.autobind
], UIBackupBox.prototype, "onChooseItem", null);
UIBackupBox = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], UIBackupBox);


// EXTERNAL MODULE: ./src/index.ts + 153 modules
var src = __webpack_require__(16136);
;// CONCATENATED MODULE: ./src/plugins/backup/backup.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */








class backup extends core_plugin/* Plugin */.S {
    constructor() {
        var _a;
        super(...arguments);
        this.requires = ['license'];
        this.hasStyle = !src.Jodit.fatMode;
        this.buttons = [
            {
                name: 'backup.restore',
                group: 'history'
            }
        ];
        this.__box = new UIBackupBox(this.j);
        this.__dialog = null;
        this.__storage = (_a = this.jodit.o.backup.remoteStore) !== null && _a !== void 0 ? _a : new DefaultStorage(this.jodit);
        this.timeout = 0;
    }
    afterInit(jodit) {
        jodit
            .registerCommand('saveBackup', this.onSaveBackup)
            .registerCommand('openBackupDialog', {
            exec: this.onOpenBackupDialog,
            hotkeys: jodit.o.backup.hotkeys
        });
        const startInterval = () => {
            this.timeout = jodit.async.setTimeout(() => {
                this.onSaveBackup();
                startInterval();
            }, jodit.o.backup.interval * 1000);
        };
        startInterval();
        jodit.e
            .on(this.__box, 'choose', this.onSelectItem)
            .on(jodit.ow, 'beforeunload.backup', () => {
            this.onSaveBackup();
        });
    }
    prepareDialog() {
        if (!this.__dialog) {
            this.__dialog = this.j
                .dlg({
                minWidth: this.j.o.backup.dialogWidth,
                buttons: ['fullsize', 'dialog.close']
            })
                .setContent(this.__box.container);
        }
        this.__dialog.setHeader(this.jodit.i18n('Restore'));
        this.addButtonsToDialog();
    }
    onSaveBackup() {
        this.__storage.add({
            created: new Date(),
            html: this.j.value
        });
    }
    async onOpenBackupDialog() {
        this.prepareDialog();
        const { __dialog } = this;
        if (!__dialog) {
            return;
        }
        __dialog.open().setModal(true);
        const items = await this.__storage.items();
        this.__box.build([
            {
                created: new Date(),
                html: this.j.value
            },
            ...items
        ]);
        __dialog.calcAutoSize();
        __dialog.setPosition();
    }
    onSelectItem(data) {
        var _a;
        (_a = this.__dialog) === null || _a === void 0 ? void 0 : _a.close();
        this.j.value = data.html;
        this.j.s.focus();
    }
    addButtonsToDialog() {
        var _a;
        const { jodit } = this;
        const ok = (0,ui/* Button */.zx)(jodit, {
            name: 'ok',
            tabIndex: 0,
            variant: 'primary',
            text: 'Ok'
        }), cancel = (0,ui/* Button */.zx)(jodit, {
            variant: 'secondary',
            tabIndex: 0,
            text: 'Cancel'
        }), clear = (0,ui/* Button */.zx)(jodit, {
            name: 'clear',
            tabIndex: 0,
            variant: 'secondary',
            text: 'Remove all'
        });
        ok.onAction(() => {
            this.__box.chooseSelected();
        });
        cancel.onAction(() => {
            var _a;
            (_a = this.__dialog) === null || _a === void 0 ? void 0 : _a.close();
        });
        clear.onAction(() => {
            jodit.confirm('Are you sure?', undefined, (confirm) => {
                var _a;
                if (confirm) {
                    this.__storage.clear();
                    (_a = this.__dialog) === null || _a === void 0 ? void 0 : _a.close();
                }
            });
        });
        const block = new ui/* UIBlock */.eC(jodit, [clear, cancel, ok]);
        block.container.style.margin = '0';
        block.container.style.justifyContent = 'flex-end';
        block.container.style.width = '100%';
        (_a = this.__dialog) === null || _a === void 0 ? void 0 : _a.setFooter(block);
    }
    beforeDestruct() {
        var _a;
        const { j } = this;
        j.async.clearTimeout(this.timeout);
        j.e
            .off(this.__box, 'choose', this.onSelectItem)
            .off(j.ow, 'beforeunload.backup');
        this.__box.destruct();
        (_a = this.__dialog) === null || _a === void 0 ? void 0 : _a.destruct();
    }
}
(0,tslib_es6/* __decorate */.gn)([
    decorators.autobind
], backup.prototype, "onSaveBackup", null);
(0,tslib_es6/* __decorate */.gn)([
    decorators.autobind
], backup.prototype, "onOpenBackupDialog", null);
(0,tslib_es6/* __decorate */.gn)([
    decorators.autobind
], backup.prototype, "onSelectItem", null);
src.Jodit.plugins.add('backup', backup);


/***/ }),

/***/ 62800:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(17433));
/******/ return __webpack_exports__;
/******/ }
]);
});