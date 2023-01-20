/*!
 * idist-jodit - Jodit is awesome and usefully wysiwyg editor with filebrowser
 * Author: KimSunWook <ceo@idist.ai> (https://xdsoft.net/)
 * Version: v3.20.11
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
return (self["webpackChunkidist_jodit"] = self["webpackChunkidist_jodit"] || []).push([[391],{

/***/ 44625:
/***/ (function(module) {

module.exports = "<?xml version=\"1.0\" ?><svg viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\"><title/><g id=\"Upload\"><path d=\"M16,26h8V50a2,2,0,0,0,2,2H38a2,2,0,0,0,2-2V26h8a2,2,0,0,0,1.4946-3.3291l-16-18a2,2,0,0,0-2.9892,0l-16,18A2,2,0,0,0,16,26ZM32,9.0107,43.5464,22H38a2,2,0,0,0-2,2V48H28V24a2,2,0,0,0-2-2H20.4536Z\"/><path d=\"M53,42a2,2,0,0,0-2,2V54a2.0023,2.0023,0,0,1-2,2H15a2.0023,2.0023,0,0,1-2-2V44a2,2,0,0,0-4,0V54a6.0066,6.0066,0,0,0,6,6H49a6.0066,6.0066,0,0,0,6-6V44A2,2,0,0,0,53,42Z\"/></g></svg>"

/***/ }),

/***/ 39138:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 32672:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 82433:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.backup = void 0;
var tslib_1 = __webpack_require__(20255);
__webpack_require__(47027);
var plugin_1 = __webpack_require__(35570);
var store_1 = __webpack_require__(57237);
var box_1 = __webpack_require__(78334);
var ui_1 = __webpack_require__(14153);
var decorators_1 = __webpack_require__(9901);
var index_1 = __webpack_require__(78460);
var backup = (function (_super) {
    tslib_1.__extends(backup, _super);
    function backup() {
        var _this = this;
        var _a;
        _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.requires = ['license'];
        _this.hasStyle = !index_1.Jodit.fatMode;
        _this.buttons = [
            {
                name: 'backup.restore',
                group: 'history'
            }
        ];
        _this.__box = new box_1.UIBackupBox(_this.j);
        _this.__dialog = null;
        _this.__storage = (_a = _this.jodit.o.backup.remoteStore) !== null && _a !== void 0 ? _a : new store_1.DefaultStorage(_this.jodit);
        _this.timeout = 0;
        return _this;
    }
    backup.prototype.afterInit = function (jodit) {
        var _this = this;
        jodit
            .registerCommand('saveBackup', this.onSaveBackup)
            .registerCommand('openBackupDialog', {
            exec: this.onOpenBackupDialog,
            hotkeys: jodit.o.backup.hotkeys
        });
        var startInterval = function () {
            _this.timeout = jodit.async.setTimeout(function () {
                _this.onSaveBackup();
                startInterval();
            }, jodit.o.backup.interval * 1000);
        };
        startInterval();
        jodit.e
            .on(this.__box, 'choose', this.onSelectItem)
            .on(jodit.ow, 'beforeunload.backup', function () {
            _this.onSaveBackup();
        });
    };
    backup.prototype.prepareDialog = function () {
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
    };
    backup.prototype.onSaveBackup = function () {
        this.__storage.add({
            created: new Date(),
            html: this.j.value
        });
    };
    backup.prototype.onOpenBackupDialog = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var __dialog, items;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.prepareDialog();
                        __dialog = this.__dialog;
                        if (!__dialog) {
                            return [2];
                        }
                        __dialog.open().setModal(true);
                        return [4, this.__storage.items()];
                    case 1:
                        items = _a.sent();
                        this.__box.build(tslib_1.__spreadArray([
                            {
                                created: new Date(),
                                html: this.j.value
                            }
                        ], tslib_1.__read(items), false));
                        __dialog.calcAutoSize();
                        __dialog.setPosition();
                        return [2];
                }
            });
        });
    };
    backup.prototype.onSelectItem = function (data) {
        var _a;
        (_a = this.__dialog) === null || _a === void 0 ? void 0 : _a.close();
        this.j.value = data.html;
        this.j.s.focus();
    };
    backup.prototype.addButtonsToDialog = function () {
        var _this = this;
        var _a;
        var jodit = this.jodit;
        var ok = (0, ui_1.Button)(jodit, {
            name: 'ok',
            tabIndex: 0,
            variant: 'primary',
            text: 'Ok'
        }), cancel = (0, ui_1.Button)(jodit, {
            variant: 'secondary',
            tabIndex: 0,
            text: 'Cancel'
        }), clear = (0, ui_1.Button)(jodit, {
            name: 'clear',
            tabIndex: 0,
            variant: 'secondary',
            text: 'Remove all'
        });
        ok.onAction(function () {
            _this.__box.chooseSelected();
        });
        cancel.onAction(function () {
            var _a;
            (_a = _this.__dialog) === null || _a === void 0 ? void 0 : _a.close();
        });
        clear.onAction(function () {
            jodit.confirm('Are you sure?', undefined, function (confirm) {
                var _a;
                if (confirm) {
                    _this.__storage.clear();
                    (_a = _this.__dialog) === null || _a === void 0 ? void 0 : _a.close();
                }
            });
        });
        var block = new ui_1.UIBlock(jodit, [clear, cancel, ok]);
        block.container.style.margin = '0';
        block.container.style.justifyContent = 'flex-end';
        block.container.style.width = '100%';
        (_a = this.__dialog) === null || _a === void 0 ? void 0 : _a.setFooter(block);
    };
    backup.prototype.beforeDestruct = function () {
        var _a;
        var j = this.j;
        j.async.clearTimeout(this.timeout);
        j.e
            .off(this.__box, 'choose', this.onSelectItem)
            .off(j.ow, 'beforeunload.backup');
        this.__box.destruct();
        (_a = this.__dialog) === null || _a === void 0 ? void 0 : _a.destruct();
    };
    tslib_1.__decorate([
        decorators_1.autobind
    ], backup.prototype, "onSaveBackup", null);
    tslib_1.__decorate([
        decorators_1.autobind
    ], backup.prototype, "onOpenBackupDialog", null);
    tslib_1.__decorate([
        decorators_1.autobind
    ], backup.prototype, "onSelectItem", null);
    return backup;
}(plugin_1.Plugin));
exports.backup = backup;
index_1.Jodit.plugins.add('backup', backup);


/***/ }),

/***/ 47027:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var config_1 = __webpack_require__(27537);
var icon_1 = __webpack_require__(76381);
var global_1 = __webpack_require__(58299);
config_1.Config.prototype.backup = {
    interval: 30,
    limit: 50,
    dialogWidth: 700,
    hotkeys: ['ctrl+shift+b', 'cmd+shift+b']
};
config_1.Config.prototype.controls.backup = {
    store: {
        command: 'saveBackup',
        text: 'Save backup now'
    },
    restore: {
        tooltip: 'Restore',
        list: ['backup.store'],
        exec: function (editor) {
            editor.execCommand('openBackupDialog');
        }
    }
};
icon_1.Icon.set('restore', __webpack_require__(44625));
(0, global_1.extendLang)(__webpack_require__(62800));


/***/ }),

/***/ 62800:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 57237:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultStorage = void 0;
var tslib_1 = __webpack_require__(20255);
var DefaultStorage = (function () {
    function DefaultStorage(jodit) {
        this.jodit = jodit;
        this.key = 'backup.default.storage';
    }
    DefaultStorage.prototype.add = function (item) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var items;
            return tslib_1.__generator(this, function (_a) {
                if (!item.html.trim().length) {
                    return [2, false];
                }
                items = this.jodit.storage.get(this.key) || [];
                if (items.find(function (elm) { return elm.html === item.html; })) {
                    return [2, false];
                }
                items.unshift(item);
                if (items.length > this.jodit.o.backup.limit) {
                    items.length = this.jodit.o.backup.limit;
                }
                this.jodit.storage.set(this.key, items);
                return [2, false];
            });
        });
    };
    DefaultStorage.prototype.items = function () {
        return Promise.resolve(this.jodit.storage.get(this.key) || []);
    };
    DefaultStorage.prototype.clear = function () {
        this.jodit.storage.delete(this.key);
        return Promise.resolve(false);
    };
    return DefaultStorage;
}());
exports.DefaultStorage = DefaultStorage;


/***/ }),

/***/ 78334:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UIBackupBox = void 0;
var tslib_1 = __webpack_require__(20255);
__webpack_require__(39138);
var decorators_1 = __webpack_require__(9901);
var ui_1 = __webpack_require__(14153);
var list_1 = __webpack_require__(97098);
var UIBackupBox = (function (_super) {
    tslib_1.__extends(UIBackupBox, _super);
    function UIBackupBox(jodit) {
        var _this = _super.call(this, jodit) || this;
        _this.list = new list_1.UIBackupList(_this.j);
        _this.preview = _this.j.c.div(_this.getFullElName('preview'));
        _this.container.appendChild(_this.list.container);
        _this.container.appendChild(_this.preview);
        _this.list.container.classList.add(_this.getFullElName('list'));
        jodit.e
            .on(_this.list, 'select', _this.onSelectItem)
            .on(_this.list, 'choose', _this.onChooseItem);
        return _this;
    }
    UIBackupBox.prototype.className = function () {
        return 'UIBackupBox';
    };
    UIBackupBox.prototype.build = function (items) {
        this.preview.innerHTML = '';
        this.list.build(items);
    };
    UIBackupBox.prototype.destruct = function () {
        this.j.e.off(this.list, 'select', this.onSelectItem);
        this.list.destruct();
        return _super.prototype.destruct.call(this);
    };
    UIBackupBox.prototype.onSelectItem = function (item) {
        this.latestSelected = item;
        this.preview.innerHTML =
            item.html ||
                "<div class=\"".concat(this.getFullElName('empty'), "\">").concat(this.j.i18n('Empty'), "</div>");
    };
    UIBackupBox.prototype.onChooseItem = function (item) {
        this.j.e.fire(this, 'choose', item);
    };
    UIBackupBox.prototype.chooseSelected = function () {
        this.onChooseItem(this.latestSelected);
    };
    tslib_1.__decorate([
        decorators_1.autobind
    ], UIBackupBox.prototype, "onSelectItem", null);
    tslib_1.__decorate([
        decorators_1.autobind
    ], UIBackupBox.prototype, "onChooseItem", null);
    UIBackupBox = tslib_1.__decorate([
        decorators_1.component
    ], UIBackupBox);
    return UIBackupBox;
}(ui_1.UIElement));
exports.UIBackupBox = UIBackupBox;


/***/ }),

/***/ 69353:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UIBackupItem = void 0;
var tslib_1 = __webpack_require__(20255);
__webpack_require__(32672);
var ui_1 = __webpack_require__(14153);
var helpers_1 = __webpack_require__(92654);
var UIBackupItem = (function (_super) {
    tslib_1.__extends(UIBackupItem, _super);
    function UIBackupItem(jodit, data) {
        var _this = _super.call(this, jodit) || this;
        _this.data = data;
        _this.container.innerHTML = _this.formatDate(data.created);
        (0, helpers_1.attr)(_this.container, 'tabIndex', 0);
        return _this;
    }
    UIBackupItem.prototype.className = function () {
        return 'UIBackupItem';
    };
    UIBackupItem.prototype.formatDate = function (timestamp) {
        var now = new Date();
        var date = (0, helpers_1.isString)(timestamp) ? new Date(timestamp) : timestamp, diff = (now.getTime() - date.getTime()) / 1000;
        if ((0, helpers_1.isFunction)(this.j.o.backup.formatDate)) {
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
        return "".concat(date.toDateString(), " ").concat(date.toLocaleTimeString());
    };
    UIBackupItem.prototype.focus = function () {
        this.container.focus();
    };
    return UIBackupItem;
}(ui_1.UIElement));
exports.UIBackupItem = UIBackupItem;


/***/ }),

/***/ 97098:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UIBackupList = void 0;
var tslib_1 = __webpack_require__(20255);
var ui_1 = __webpack_require__(14153);
var decorators_1 = __webpack_require__(9901);
var item_1 = __webpack_require__(69353);
var constants_1 = __webpack_require__(10063);
var helpers_1 = __webpack_require__(92654);
var UIBackupList = (function (_super) {
    tslib_1.__extends(UIBackupList, _super);
    function UIBackupList(jodit) {
        var _this = _super.call(this, jodit) || this;
        _this.elements = [];
        _this.currentSelection = -1;
        jodit.e.on(_this.container, 'keydown', function (e) {
            switch (e.key) {
                case constants_1.KEY_ENTER:
                    e.preventDefault();
                    e.stopPropagation();
                    _this.onChoose(_this.currentSelection);
                    break;
                case constants_1.KEY_DOWN:
                    _this.selectNext();
                    break;
                case constants_1.KEY_UP:
                    _this.selectPrevious();
                    break;
            }
        });
        return _this;
    }
    UIBackupList.prototype.className = function () {
        return 'UIBackupList';
    };
    UIBackupList.prototype.createContainer = function (options) {
        var div = _super.prototype.createContainer.call(this, options);
        (0, helpers_1.attr)(div, 'tabIndex', '-1');
        return div;
    };
    UIBackupList.prototype.build = function (items) {
        var _this = this;
        this.clear();
        items.forEach(function (data, index) {
            var item = new item_1.UIBackupItem(_this.jodit, data);
            _this.append(item);
            _this.j.e
                .on(item.container, 'focus', function () { return _this.onSelect(index); })
                .on(item.container, 'click', function () { return _this.onSelect(index); })
                .on(item.container, 'dblclick', function () { return _this.onChoose(index); });
        });
        this.currentSelection = 0;
        this.onChangeCurrentSelection(void 0, -1, 0);
    };
    UIBackupList.prototype.onChangeCurrentSelection = function (_, old, index) {
        var _a, _b, _c;
        (_a = this.elements[old]) === null || _a === void 0 ? void 0 : _a.setMod('active', false);
        (_b = this.elements[index]) === null || _b === void 0 ? void 0 : _b.setMod('active', true);
        (_c = this.elements[index]) === null || _c === void 0 ? void 0 : _c.focus();
        this.j.e.fire(this, 'select', this.elements[index].data);
    };
    UIBackupList.prototype.onSelect = function (index) {
        this.currentSelection = index;
    };
    UIBackupList.prototype.onChoose = function (index) {
        this.j.e.fire(this, 'choose', this.elements[index !== null && index !== void 0 ? index : this.currentSelection].data);
    };
    UIBackupList.prototype.selectNext = function () {
        if (this.currentSelection + 1 <= this.elements.length - 1) {
            this.currentSelection += 1;
        }
        else {
            this.currentSelection = 0;
        }
    };
    UIBackupList.prototype.selectPrevious = function () {
        if (this.currentSelection - 1 >= 0) {
            this.currentSelection -= 1;
        }
        else {
            this.currentSelection = this.elements.length - 1;
        }
    };
    tslib_1.__decorate([
        (0, decorators_1.watch)('currentSelection')
    ], UIBackupList.prototype, "onChangeCurrentSelection", null);
    tslib_1.__decorate([
        decorators_1.autobind
    ], UIBackupList.prototype, "onSelect", null);
    tslib_1.__decorate([
        decorators_1.autobind
    ], UIBackupList.prototype, "onChoose", null);
    UIBackupList = tslib_1.__decorate([
        decorators_1.component
    ], UIBackupList);
    return UIBackupList;
}(ui_1.UIGroup));
exports.UIBackupList = UIBackupList;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(82433));
/******/ return __webpack_exports__;
/******/ }
]);
});