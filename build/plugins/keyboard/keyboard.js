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
return (self["webpackChunkidist_jodit"] = self["webpackChunkidist_jodit"] || []).push([[283],{

/***/ 20473:
/***/ (function(module) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M0 6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm2 0v2h2V6H2zm1 3v2h2V9H3zm-1 3v2h2v-2H2zm3 0v2h10v-2H5zm11 0v2h2v-2h-2zM6 9v2h2V9H6zm3 0v2h2V9H9zm3 0v2h2V9h-2zm3 0v2h2V9h-2zM5 6v2h2V6H5zm3 0v2h2V6H8zm3 0v2h2V6h-2zm3 0v2h4V6h-4z\"/> </svg>"

/***/ }),

/***/ 64235:
/***/ (function(module) {

module.exports = "<?xml version=\"1.0\" ?><svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 10l7-7h13v14H7l-7-7zm14.41 0l2.13-2.12-1.42-1.42L13 8.6l-2.12-2.13-1.42 1.42L11.6 10l-2.13 2.12 1.42 1.42L13 11.4l2.12 2.13 1.42-1.42L14.4 10z\"/></svg>"

/***/ }),

/***/ 97149:
/***/ (function(module) {

module.exports = "<svg viewBox=\"0 0 30 29\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M15 0.5L30 15.2625H22V24H8V15.2625H0L15 0.5Z\"/> <rect x=\"8\" y=\"26\" width=\"14\" height=\"3\"/> </svg>"

/***/ }),

/***/ 41331:
/***/ (function(module) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 24 24\" > <circle cy=\"12\" cx=\"12\" r=\"2.2\"/> <circle cy=\"12\" cx=\"5\" r=\"2.2\"/> <circle cy=\"12\" cx=\"19\" r=\"2.2\"/> </svg>"

/***/ }),

/***/ 21703:
/***/ (function(module) {

module.exports = "<svg viewBox=\"0 0 30 29\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M15 0.5L30 15.2625H22V29H8V15.2625H0L15 0.5Z\"/> </svg>"

/***/ }),

/***/ 73677:
/***/ (function(module) {

module.exports = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M23.17 14.83l7.17 7.17h-28.34v4h28.34l-7.17 7.17 2.83 2.83 12-12-12-12-2.83 2.83zm16.83-2.83v24h4v-24h-4z\"/> </svg>"

/***/ }),

/***/ 20022:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 65530:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var config_1 = __webpack_require__(27537);
config_1.Config.prototype.keyboard = {
    defaultLayoutSet: 'en',
    showLayoutSwitcher: true,
    extraKeyGroup: 'other',
    extraKeyButtons: [],
    delayKeyRepeat: 350,
    periodKeyRepeat: 100,
    layoutList: {
        en: {
            title: 'English',
            keys: [
                ['` ~ ±', '1 ! §', '2 @', '3 #', '4 $', '5 %', '6 ^', '7 &', '8 *', '9 (', '0 )', '- _', '= +', 'Backspace'],
                ['Tab', 'q Q', 'w W', 'e E', 'r R', 't T', 'y Y', 'u U', 'i I', 'o O', 'p P', '[ {', '] }', '\\ |'],
                ['Caps', 'a A', 's S', 'd D', 'f F', 'g G', 'h H', 'j J', 'k K', 'l L', '; :', '\' "', 'Enter'],
                ['Shift', 'z Z', 'x X', 'c C', 'v V', 'b B', 'n N', 'm M', ', <', '. >', '/ ?', 'Shift'],
                ['Options', 'Space', 'Options'],
            ]
        },
        es: {
            title: 'Español',
            keys: [
                ['º ` ~', '1 ! §', '2 @', '3 #', '4 $', '5 %', '6 ^', '7 &', '8 *', '9 (', '0 )', '- _ |', '¡ = +', 'Backspace'],
                ['Tab', 'q Q', 'w W', 'e E', 'r R', 't T', 'y Y', 'u U', 'i I', 'o O', 'p P', '[ {', '] }', 'ç Ç \\'],
                ['Caps', 'a A', 's S', 'd D', 'f F', 'g G', 'h H', 'j J', 'k K', 'l L', 'ñ Ñ ; :', '\' "', 'Enter'],
                ['Shift', 'z Z', 'x X', 'c C', 'v V', 'b B', 'n N', 'm M', ', <', '. >', '/ ?', 'Shift'],
                ['Options', 'Space', 'Options'],
            ]
        },
        de: {
            title: 'Deutsch',
            keys: [
                ['` ~ ±', '1 ! §', '2 @', '3 #', '4 $', '5 %', '6 ^', '7 &', '8 * :', '9 ( {', '0 ) }', '- _', '= +', 'Backspace'],
                ['Tab', 'q Q', 'w W', 'e E', 'r R', 't T', 'z Z', 'u U', 'i I', 'o O', 'p P', 'ü Ü [', '] }', '\\ |'],
                ['Caps', 'a A', 's S', 'd D', 'f F', 'g G', 'h H', 'j J', 'k K', 'l L', 'ö Ö ;', 'ä Ä \' "', 'Enter'],
                ['Shift', 'y Y', 'x X', 'c C', 'v V', 'b B', 'n N', 'm M', ', <', '. >', '/ ?', 'Shift'],
                ['Options', 'Space', 'Options'],
            ]
        },
        ru: {
            title: 'Русский',
            keys: [
                ['` ~ ±', '1 ! §', '2 @ "', '3 # :', '4 $ <', '5 % >', '6 ^', '7 &', '8 *', '9 (', '0 )', '- _', '= +', 'Backspace'],
                ['Tab', 'й Й', 'ц Ц', 'у У', 'к К', 'е Е', 'н Н', 'г Г', 'ш Ш', 'щ Щ', 'з З', 'х Х [', 'ъ ] {', '\\ | }'],
                ['Caps', 'ф Ф', 'ы Ы', 'в В', 'а А', 'п П', 'р Р', 'о О', 'л Л', 'д Д', 'ж Ж ;', 'э Э \'', 'Enter'],
                ['Shift', 'я Я', 'ч Ч', 'с С', 'м М', 'и И', 'т Т', 'ь Ь', 'б Б ,', 'ю Ю .', '/ ?', 'Shift'],
                ['Options', 'Space', 'Options'],
            ]
        },
        tr: {
            title: 'Türkçe',
            keys: [
                ['" é` ~', '1 ! §', '2 @ "', '3 # :', '4 $ <', '5 % >', '6 ^ ±', '7 &', '8 *', '9 ( {', '0 ) }', '- _ [', '= + ]', 'Backspace'],
                ['Tab', 'q Q', 'w W', 'e E', 'r R', 't T', 'y Y', 'u U', 'ı I', 'o O', 'p P', 'ğ Ğ', 'ü Ü', ', \\ |'],
                ['Caps', 'a A', 's S', 'd D', 'f F', 'g G', 'h H', 'j J', 'k K', 'l L', 'ş Ş', 'i̇ İ', 'Enter'],
                ['Shift', 'z Z', 'x X', 'c C', 'v V', 'b B', 'n N', 'm M', 'ö Ö <', 'ç Ç >', '. / ?', 'Shift'],
                ['Options', 'Space', 'Options'],
            ]
        },
        iw: {
            title: 'Hebrew',
            keys: [
                ['` ~ ±', '1 ! §', '2 @', '3 #', '4 $', '5 %', '6 ^', '7 &', '8 *', '9 (', '0 )', '- _', '= +', 'Backspace'],
                ['Tab', '/ q Q', '\' w W', 'ק e E', 'ר r R', 'א t T', 'ט y Y', 'ו u U', 'ן i I', 'ם o O', 'פ p P', '[ {', '] }', '\\ |'],
                ['Caps', 'ש a A', 'ד s S', 'ג d D', 'כ f F', 'ע g G', 'י h H', 'ח j J', 'ל k K', 'ך l L', 'ף ; :', '\' "', 'Enter'],
                ['Shift', 'ז z Z', 'ס x X', 'ב c C', 'ה v V', 'נ b B', 'מ n N', 'צ m M', ', <', '. >', '/ ?', 'Shift'],
                ['Options', 'Space', 'Options'],
            ]
        },
        tata: {
            title: 'Tata',
            keys: [
                ['һ Һ` ~', '1 ! §', '2 @ "', '3 # :', '4 $ <', '5 % >', '6 ^ ±', '7 &', '8 *', '9 ( {', '0 )', '- _', '= +', 'Backspace'],
                ['Tab', 'й Й', 'ө Ө', 'у У', 'к К', 'е Е', 'н Н', 'г Г', 'ш Ш', 'ә Ә', 'з З', 'х Х [', 'ү Ү ]', '\\ | }'],
                ['Caps', 'ф Ф', 'ы Ы', 'в В', 'а А', 'п П', 'р Р', 'о О', 'л Л', 'д Д', 'ң Ң ;', 'э Э \'', 'Enter'],
                ['Shift', 'я Я', 'ч Ч', 'с С', 'м М', 'и И', 'т Т', 'җ Җ', 'б Б ,', 'ю Ю .', 'ґ Ґ /', 'Shift'],
                ['Options', 'Space', 'Options'],
            ]
        }
    },
    layoutSwitchList: ['en', 'es', 'de', 'ru', 'tr', 'iw', 'tata'],
    keySize: 32,
    layout: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.5],
        [1.8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2.2],
        [2.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2.5],
        [3.5, 9, 3.5]
    ]
};
config_1.Config.prototype.controls.keyboard = {
    tooltip: 'Keyboard',
    icon: __webpack_require__(20473),
    isActive: function (editor) {
        return Boolean(editor.e.fire('isKeyboardOpened'));
    },
    command: 'toggleKeyboard'
};
config_1.Config.prototype.controls.extraKeyboardButtons = {};


/***/ }),

/***/ 18002:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.keyboard = void 0;
var tslib_1 = __webpack_require__(20255);
var plugin_1 = __webpack_require__(35570);
var index_1 = __webpack_require__(78460);
var keyboard_1 = __webpack_require__(58004);
var decorators_1 = __webpack_require__(9901);
__webpack_require__(65530);
var modules_1 = __webpack_require__(46701);
var ui_1 = __webpack_require__(14153);
var checker_1 = __webpack_require__(37379);
var config_1 = __webpack_require__(27537);
var keyboard = (function (_super) {
    tslib_1.__extends(keyboard, _super);
    function keyboard(jodit) {
        var _this = _super.call(this, jodit) || this;
        _this.hasStyle = !index_1.Jodit.fatMode;
        _this.requires = ['license'];
        _this.buttons = [
            {
                group: 'insert',
                name: 'keyboard'
            }
        ];
        var _a = jodit.o.keyboard, extraKeyButtons = _a.extraKeyButtons, extraKeyGroup = _a.extraKeyGroup;
        if (extraKeyButtons.length) {
            extraKeyButtons.forEach(function (key, index) {
                var id = (0, checker_1.isString)(key) ? key : key.key, hotkeys = (0, checker_1.isString)(key) || !key.hotkeys
                    ? ["ctrl+".concat(index + 1)]
                    : key.hotkeys;
                jodit.registerButton({
                    name: "extraKeyboardButtons.".concat(id),
                    group: extraKeyGroup
                });
                var extraKeyboardButtons = config_1.Config.defaultOptions
                    .controls.extraKeyboardButtons;
                extraKeyboardButtons[id] = {
                    name: id,
                    tooltip: id,
                    args: [id],
                    hotkeys: hotkeys,
                    command: 'insertChar'
                };
            });
        }
        return _this;
    }
    keyboard.prototype.afterInit = function (jodit) {
        var _this = this;
        jodit
            .registerCommand('toggleKeyboard', this.toggleKeyboard)
            .registerCommand('insertChar', this.insertChar);
        jodit.e.on('isKeyboardOpened', function () { var _a; return (_a = _this.__keyboard) === null || _a === void 0 ? void 0 : _a.isOpened; });
    };
    keyboard.prototype.insertChar = function (_, _1, insertChar) {
        this.j.s.insertNode(this.j.createInside.text(insertChar));
    };
    keyboard.prototype.toggleKeyboard = function () {
        if (!this.__keyboard) {
            this.__keyboard = new modules_1.Dialog({
                toolbarButtonSize: 'tiny'
            });
            var ui_2 = new keyboard_1.UIKeyboard(this.j);
            this.__keyboard
                .setMod('slim', true)
                .setMod('adaptive', false)
                .setContent(ui_2);
            var _a = this.j.o.keyboard, showLayoutSwitcher = _a.showLayoutSwitcher, layoutSwitchList = _a.layoutSwitchList, layoutList_1 = _a.layoutList;
            if (showLayoutSwitcher) {
                var switcher = new ui_1.UISelect(this.__keyboard, {
                    value: ui_2.state.currentLayout,
                    options: layoutSwitchList.map(function (key) {
                        var _a, _b;
                        var title = (_b = (_a = layoutList_1[key]) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : key;
                        return {
                            text: title,
                            value: key
                        };
                    }),
                    onChange: function (value) {
                        ui_2.state.currentLayout = value;
                    }
                });
                switcher
                    .setMod('size', 'tiny')
                    .setMod('width', 'auto')
                    .setMod('variant', 'outline');
                this.__keyboard.setHeader(switcher);
            }
        }
        if (this.__keyboard.isOpened) {
            this.__keyboard.close();
        }
        else {
            this.__keyboard.open();
        }
    };
    keyboard.prototype.beforeDestruct = function (jodit) {
        var _a;
        (_a = this.__keyboard) === null || _a === void 0 ? void 0 : _a.destruct();
    };
    tslib_1.__decorate([
        decorators_1.autobind
    ], keyboard.prototype, "insertChar", null);
    tslib_1.__decorate([
        decorators_1.autobind
    ], keyboard.prototype, "toggleKeyboard", null);
    return keyboard;
}(plugin_1.Plugin));
exports.keyboard = keyboard;
index_1.Jodit.plugins.add('keyboard', keyboard);


/***/ }),

/***/ 58004:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UIKeyboard = void 0;
var tslib_1 = __webpack_require__(20255);
__webpack_require__(20022);
var ui_1 = __webpack_require__(14153);
var decorators_1 = __webpack_require__(9901);
var utils_1 = __webpack_require__(73344);
var constants_1 = __webpack_require__(10063);
var autobind_decorator_1 = __webpack_require__(70631);
var UIKeyboard = (function (_super) {
    tslib_1.__extends(UIKeyboard, _super);
    function UIKeyboard(jodit) {
        var _this = _super.call(this, jodit) || this;
        _this.state = {
            caps: false,
            shift: false,
            options: false,
            currentLayout: _this.j.o.keyboard.defaultLayoutSet
        };
        _this._keys = _this.getElms('key');
        _this.pressed = false;
        _this.reKeyDownTimeout = 0;
        _this.onStateChange();
        return _this;
    }
    UIKeyboard_1 = UIKeyboard;
    UIKeyboard.prototype.className = function () {
        return 'UIKeyboard';
    };
    UIKeyboard.prototype.render = function () {
        var _a = this.j.options.keyboard, layout = _a.layout, keySize = _a.keySize, rowCount = layout.length;
        return "<div>".concat((function () {
            var rows = [];
            for (var i = 0; i < rowCount; i += 1) {
                var row = [];
                for (var j = 0; j < layout[i].length; j += 1) {
                    row.push("<div style=\"width:".concat(keySize * layout[i][j], "px;height:").concat(keySize, "px;\" class=\"&__key\"></div>"));
                }
                rows.push("<div class='&__row'>".concat(row.join('\n'), "</div>"));
            }
            return rows.join('\n');
        })(), "</div>");
    };
    UIKeyboard.prototype.onStateChange = function () {
        var _a = this.state, currentLayout = _a.currentLayout, options = _a.options, shift = _a.shift, caps = _a.caps, keys = this.j.o.keyboard.layoutList[currentLayout].keys;
        var index = 0;
        for (var i = 0; i < keys.length; i += 1) {
            for (var j = 0; j < keys[i].length; j += 1) {
                var values = keys[i][j].split(' ');
                var value = values[0];
                if (shift) {
                    value = values[1];
                }
                if (!shift &&
                    caps &&
                    values[1] &&
                    UIKeyboard_1.isLetter(values[0])) {
                    value = values[1];
                }
                if (options) {
                    value = values[2];
                }
                this.setKeyValue(index, value !== null && value !== void 0 ? value : values[0]);
                index += 1;
            }
        }
    };
    UIKeyboard.isLetter = function (c) {
        return c.toLowerCase() !== c.toUpperCase();
    };
    UIKeyboard.prototype.setKeyValue = function (index, value) {
        var elm = this._keys[index];
        if (!elm) {
            return;
        }
        var active = false;
        var _a = this.state, options = _a.options, shift = _a.shift, caps = _a.caps;
        switch (value) {
            case 'Caps':
                active = caps;
                break;
            case 'Options':
                active = options;
                break;
            case 'Shift':
                active = shift;
                break;
        }
        elm.innerHTML = UIKeyboard_1.decorate(value);
        elm.classList.toggle(this.getFullElName('key', 'active', true), active);
        (0, utils_1.attr)(elm, '-key', value);
    };
    UIKeyboard.prototype.onKeyUp = function () {
        if (this.pressed) {
            this.stopPress();
        }
    };
    UIKeyboard.prototype.onReady = function () {
        this.j.e.on(this.getElms('key'), 'mouseenter', this.stopPress);
    };
    UIKeyboard.prototype.stopPress = function () {
        var _this = this;
        if (this.pressed) {
            this.pressed = false;
            this.j.async.clearTimeout(this.reKeyDownTimeout);
            this._keys.forEach(function (elm) {
                elm.classList.remove(_this.getFullElName('key', 'pressed', true));
            });
        }
    };
    UIKeyboard.prototype.onKeyDown = function (e, timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = 0; }
        var target = e.target;
        if (!target || !target.classList.contains(this.getFullElName('key'))) {
            return false;
        }
        this.pressed = true;
        target.classList.add(this.getFullElName('key', 'pressed', true));
        var key = (0, utils_1.attr)(target, '-key');
        switch (key) {
            case 'Caps':
                this.state.caps = !this.state.caps;
                break;
            case 'Shift':
                this.state.shift = !this.state.shift;
                break;
            case 'Options':
                this.state.options = !this.state.options;
                break;
            case 'Enter':
            case 'Backspace':
                this.j.e.fire('keydown', {
                    key: key,
                    preventDefault: function () { }
                });
                break;
            case 'Space':
            case 'Tab':
                this.j.s.insertNode(this.j.createInside.text(constants_1.NBSP_SPACE));
                break;
            default:
                if (this.state.shift) {
                    this.state.shift = false;
                }
                key && this.j.s.insertNode(this.j.createInside.text(key));
        }
        var _a = this.j.o.keyboard, periodKeyRepeat = _a.periodKeyRepeat, delayKeyRepeat = _a.delayKeyRepeat;
        this.reKeyDownTimeout = this.j.async.setTimeout(function () { return _this.onKeyDown(e, periodKeyRepeat); }, timeout || delayKeyRepeat);
        return false;
    };
    UIKeyboard.decorate = function (value) {
        switch (value) {
            case 'Space':
                return '';
            case 'Enter':
                return ui_1.Icon.get('enter');
            case 'Backspace':
                return __webpack_require__(64235);
            case 'Shift':
                return __webpack_require__(21703);
            case 'Caps':
                return __webpack_require__(97149);
            case 'Options':
                return __webpack_require__(41331);
            case 'Tab':
                return __webpack_require__(73677);
            default:
                return value;
        }
    };
    var UIKeyboard_1;
    tslib_1.__decorate([
        (0, decorators_1.watch)([
            'state.currentLayout',
            'state.options',
            'state.shift',
            'state.caps'
        ])
    ], UIKeyboard.prototype, "onStateChange", null);
    tslib_1.__decorate([
        (0, decorators_1.watch)(['ow:mouseup'])
    ], UIKeyboard.prototype, "onKeyUp", null);
    tslib_1.__decorate([
        (0, decorators_1.hook)('ready')
    ], UIKeyboard.prototype, "onReady", null);
    tslib_1.__decorate([
        autobind_decorator_1.default
    ], UIKeyboard.prototype, "stopPress", null);
    tslib_1.__decorate([
        (0, decorators_1.watch)(['container:mousedown'], ['container:touchstart'])
    ], UIKeyboard.prototype, "onKeyDown", null);
    UIKeyboard = UIKeyboard_1 = tslib_1.__decorate([
        decorators_1.component
    ], UIKeyboard);
    return UIKeyboard;
}(ui_1.UIElement));
exports.UIKeyboard = UIKeyboard;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(18002));
/******/ return __webpack_exports__;
/******/ }
]);
});