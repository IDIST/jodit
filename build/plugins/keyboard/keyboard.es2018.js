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
return (self["webpackChunkjodit"] = self["webpackChunkjodit"] || []).push([[283],{

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

/***/ 80831:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "keyboard": function() { return /* binding */ keyboard; }
});

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(20255);
// EXTERNAL MODULE: ./src/core/plugin/index.ts
var core_plugin = __webpack_require__(35570);
// EXTERNAL MODULE: ./src/index.ts + 160 modules
var src = __webpack_require__(85660);
// EXTERNAL MODULE: ./src/core/ui/index.ts + 2 modules
var core_ui = __webpack_require__(41685);
// EXTERNAL MODULE: ./src/core/decorators/index.ts + 7 modules
var decorators = __webpack_require__(11169);
// EXTERNAL MODULE: ./src/core/helpers/utils/index.ts + 11 modules
var utils = __webpack_require__(11358);
// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__(10063);
// EXTERNAL MODULE: ./node_modules/autobind-decorator/lib/esm/index.js
var esm = __webpack_require__(70631);
;// CONCATENATED MODULE: ./src/plugins/keyboard/ui/keyboard/keyboard.ts
var UIKeyboard_1;







let UIKeyboard = UIKeyboard_1 = class UIKeyboard extends core_ui/* UIElement */.u1 {
    constructor(jodit) {
        super(jodit);
        this.state = {
            caps: false,
            shift: false,
            options: false,
            currentLayout: this.j.o.keyboard.defaultLayoutSet
        };
        this._keys = this.getElms('key');
        this.pressed = false;
        this.reKeyDownTimeout = 0;
        this.onStateChange();
    }
    className() {
        return 'UIKeyboard';
    }
    render() {
        const { layout, keySize } = this.j.options.keyboard, rowCount = layout.length;
        return `<div>${(() => {
            const rows = [];
            for (let i = 0; i < rowCount; i += 1) {
                const row = [];
                for (let j = 0; j < layout[i].length; j += 1) {
                    row.push(`<div style="width:${keySize * layout[i][j]}px;height:${keySize}px;" class="&__key"></div>`);
                }
                rows.push(`<div class='&__row'>${row.join('\n')}</div>`);
            }
            return rows.join('\n');
        })()}</div>`;
    }
    onStateChange() {
        const { currentLayout, options, shift, caps } = this.state, { keys } = this.j.o.keyboard.layoutList[currentLayout];
        let index = 0;
        for (let i = 0; i < keys.length; i += 1) {
            for (let j = 0; j < keys[i].length; j += 1) {
                const values = keys[i][j].split(' ');
                let value = values[0];
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
    }
    static isLetter(c) {
        return c.toLowerCase() !== c.toUpperCase();
    }
    setKeyValue(index, value) {
        const elm = this._keys[index];
        if (!elm) {
            return;
        }
        let active = false;
        const { options, shift, caps } = this.state;
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
        (0,utils/* attr */.Lj)(elm, '-key', value);
    }
    onKeyUp() {
        if (this.pressed) {
            this.stopPress();
        }
    }
    onReady() {
        this.j.e.on(this.getElms('key'), 'mouseenter', this.stopPress);
    }
    stopPress() {
        if (this.pressed) {
            this.pressed = false;
            this.j.async.clearTimeout(this.reKeyDownTimeout);
            this._keys.forEach((elm) => {
                elm.classList.remove(this.getFullElName('key', 'pressed', true));
            });
        }
    }
    onKeyDown(e, timeout = 0) {
        const target = e.target;
        if (!target || !target.classList.contains(this.getFullElName('key'))) {
            return false;
        }
        this.pressed = true;
        target.classList.add(this.getFullElName('key', 'pressed', true));
        const key = (0,utils/* attr */.Lj)(target, '-key');
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
                    key,
                    preventDefault() { }
                });
                break;
            case 'Space':
            case 'Tab':
                this.j.s.insertNode(this.j.createInside.text(constants.NBSP_SPACE));
                break;
            default:
                if (this.state.shift) {
                    this.state.shift = false;
                }
                key && this.j.s.insertNode(this.j.createInside.text(key));
        }
        const { periodKeyRepeat, delayKeyRepeat } = this.j.o.keyboard;
        this.reKeyDownTimeout = this.j.async.setTimeout(() => this.onKeyDown(e, periodKeyRepeat), timeout || delayKeyRepeat);
        return false;
    }
    static decorate(value) {
        switch (value) {
            case 'Space':
                return '';
            case 'Enter':
                return core_ui/* Icon.get */.JO.get('enter');
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
    }
};
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)([
        'state.currentLayout',
        'state.options',
        'state.shift',
        'state.caps'
    ])
], UIKeyboard.prototype, "onStateChange", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(['ow:mouseup'])
], UIKeyboard.prototype, "onKeyUp", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.hook)('ready')
], UIKeyboard.prototype, "onReady", null);
(0,tslib_es6/* __decorate */.gn)([
    esm/* default */.ZP
], UIKeyboard.prototype, "stopPress", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(['container:mousedown'], ['container:touchstart'])
], UIKeyboard.prototype, "onKeyDown", null);
UIKeyboard = UIKeyboard_1 = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], UIKeyboard);


// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(27537);
;// CONCATENATED MODULE: ./src/plugins/keyboard/config.ts

config/* Config.prototype.keyboard */.D.prototype.keyboard = {
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
config/* Config.prototype.controls.keyboard */.D.prototype.controls.keyboard = {
    tooltip: 'Keyboard',
    icon: __webpack_require__(20473),
    isActive(editor) {
        return Boolean(editor.e.fire('isKeyboardOpened'));
    },
    command: 'toggleKeyboard'
};
config/* Config.prototype.controls.extraKeyboardButtons */.D.prototype.controls.extraKeyboardButtons = {};

// EXTERNAL MODULE: ./src/modules/index.ts + 15 modules
var modules = __webpack_require__(81165);
// EXTERNAL MODULE: ./src/core/helpers/checker/index.ts + 7 modules
var checker = __webpack_require__(99160);
;// CONCATENATED MODULE: ./src/plugins/keyboard/keyboard.ts










class keyboard extends core_plugin/* Plugin */.S {
    constructor(jodit) {
        super(jodit);
        this.hasStyle = !src.Jodit.fatMode;
        this.requires = ['license'];
        this.buttons = [
            {
                group: 'insert',
                name: 'keyboard'
            }
        ];
        const { extraKeyButtons, extraKeyGroup } = jodit.o.keyboard;
        if (extraKeyButtons.length) {
            extraKeyButtons.forEach((key, index) => {
                const id = (0,checker/* isString */.HD)(key) ? key : key.key, hotkeys = (0,checker/* isString */.HD)(key) || !key.hotkeys
                    ? [`ctrl+${index + 1}`]
                    : key.hotkeys;
                jodit.registerButton({
                    name: `extraKeyboardButtons.${id}`,
                    group: extraKeyGroup
                });
                const { extraKeyboardButtons } = config/* Config.defaultOptions.controls */.D.defaultOptions.controls;
                extraKeyboardButtons[id] = {
                    name: id,
                    tooltip: id,
                    args: [id],
                    hotkeys,
                    command: 'insertChar'
                };
            });
        }
    }
    afterInit(jodit) {
        jodit
            .registerCommand('toggleKeyboard', this.toggleKeyboard)
            .registerCommand('insertChar', this.insertChar);
        jodit.e.on('isKeyboardOpened', () => { var _a; return (_a = this.__keyboard) === null || _a === void 0 ? void 0 : _a.isOpened; });
    }
    insertChar(_, _1, insertChar) {
        this.j.s.insertNode(this.j.createInside.text(insertChar));
    }
    toggleKeyboard() {
        if (!this.__keyboard) {
            this.__keyboard = new modules.Dialog({
                toolbarButtonSize: 'tiny'
            });
            const ui = new UIKeyboard(this.j);
            this.__keyboard
                .setMod('slim', true)
                .setMod('adaptive', false)
                .setContent(ui);
            const { showLayoutSwitcher, layoutSwitchList, layoutList } = this.j.o.keyboard;
            if (showLayoutSwitcher) {
                const switcher = new core_ui/* UISelect */.Cj(this.__keyboard, {
                    value: ui.state.currentLayout,
                    options: layoutSwitchList.map((key) => {
                        var _a, _b;
                        const title = (_b = (_a = layoutList[key]) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : key;
                        return {
                            text: title,
                            value: key
                        };
                    }),
                    onChange(value) {
                        ui.state.currentLayout = value;
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
    }
    beforeDestruct(jodit) {
        var _a;
        (_a = this.__keyboard) === null || _a === void 0 ? void 0 : _a.destruct();
    }
}
(0,tslib_es6/* __decorate */.gn)([
    decorators.autobind
], keyboard.prototype, "insertChar", null);
(0,tslib_es6/* __decorate */.gn)([
    decorators.autobind
], keyboard.prototype, "toggleKeyboard", null);
src.Jodit.plugins.add('keyboard', keyboard);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(80831));
/******/ return __webpack_exports__;
/******/ }
]);
});