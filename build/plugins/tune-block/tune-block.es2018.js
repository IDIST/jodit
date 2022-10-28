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
return (self["webpackChunkjodit"] = self["webpackChunkjodit"] || []).push([[288],{

/***/ 22179:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "tuneBlock": function() { return /* binding */ tuneBlock; }
});

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(20255);
// EXTERNAL MODULE: ./src/core/plugin/index.ts
var core_plugin = __webpack_require__(35570);
// EXTERNAL MODULE: ./src/core/decorators/index.ts + 7 modules
var decorators = __webpack_require__(11169);
// EXTERNAL MODULE: ./src/index.ts + 153 modules
var src = __webpack_require__(16136);
// EXTERNAL MODULE: ./src/core/ui/index.ts + 2 modules
var ui = __webpack_require__(41685);
// EXTERNAL MODULE: ./src/core/dom/index.ts
var dom = __webpack_require__(94522);
// EXTERNAL MODULE: ./src/core/helpers/index.ts + 14 modules
var helpers = __webpack_require__(52607);
// EXTERNAL MODULE: ./src/modules/toolbar/factory.ts
var factory = __webpack_require__(42701);
;// CONCATENATED MODULE: ./src/plugins/tune-block/ui/tuner/tuner.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */







let UITuner = class UITuner extends ui/* UIElement */.u1 {
    constructor() {
        super(...arguments);
        this.isShown = false;
        this.toolbar = (0,factory/* makeCollection */.R)(this.j, this);
        this.popup = new ui/* Popup */.GI(this.j, false);
    }
    className() {
        return 'UITuner';
    }
    render() {
        return `<div>
			<div class='&__handle' title='~Click to tune~'/>
		</div>`;
    }
    show() {
        const target = this.j.s.current();
        if (!target) {
            return this.hide();
        }
        const block = dom/* Dom.isBlock */.i.isBlock(target)
            ? target
            : dom/* Dom.closest */.i.closest(target, (node) => Boolean(node &&
                this.j.o.tuneBlock.popup[node.nodeName.toLowerCase()]), this.j.editor);
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
    }
    hide() {
        if (this.isShown) {
            this.isShown = false;
            dom/* Dom.safeRemove */.i.safeRemove(this.container);
            this.closeToolbar();
        }
    }
    onEditorScroll() {
        if (this.isShown) {
            this.calcPosition();
        }
    }
    calcPosition() {
        const offset = 15;
        const marginLeft = (0,helpers.css)(this.j.editor, 'marginLeft');
        const paddingLeft = (0,helpers.css)(this.j.editor, 'paddingLeft');
        const marginTop = (0,helpers.css)(this.j.editor, 'marginTop');
        const left = this.currentBlock.offsetWidth - offset + marginLeft + paddingLeft;
        const top = this.currentBlock.offsetTop - this.j.editor.scrollTop + marginTop;
        (0,helpers.css)(this.container, {
            transform: `translate3d(${left}px, ${top}px, 0)`
        });
        if (this.popup.isOpened) {
            this.popup.updatePosition();
        }
    }
    onAfterExecTune(newBlock) {
        if (newBlock) {
            this.currentBlock = newBlock;
        }
        this.calcPosition();
        this.openToolbar();
    }
    onClickPrevent(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    onTargetClick() {
        this.toggleToolbar();
    }
    openToolbar() {
        this.setMod('opened', true);
        this.toolbar.build(this.j.o.tuneBlock.popup[this.currentBlock.tagName.toLowerCase()], this.currentBlock);
        this.popup.setContent(this.toolbar.container);
        if (!this.popup.isOpened) {
            const handle = this.getElm('handle');
            (0,helpers.assert)(handle != null, 'Handle element does not exist');
            this.popup.open(() => (0,helpers.position)(handle));
        }
    }
    closeToolbar() {
        this.setMod('opened', false);
        this.popup.close();
    }
    toggleToolbar() {
        this.getMod('opened') ? this.closeToolbar() : this.openToolbar();
    }
};
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':hideTuner.tune')
], UITuner.prototype, "hide", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('j.editor:scroll'),
    (0,decorators.throttle)(10)
], UITuner.prototype, "onEditorScroll", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':afterExecTune.tune'),
    (0,decorators.idle)()
], UITuner.prototype, "onAfterExecTune", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('container:click container:mousedown')
], UITuner.prototype, "onClickPrevent", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('handle:click')
], UITuner.prototype, "onTargetClick", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':closeTuner.tune')
], UITuner.prototype, "closeToolbar", null);
UITuner = (0,tslib_es6/* __decorate */.gn)([
    decorators.component
], UITuner);


// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(27537);
;// CONCATENATED MODULE: ./src/plugins/tune-block/config.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */



const common = ['tune.up', 'tune.remove', 'tune.down'], header = [
    'tune.h1',
    'tune.h2',
    'tune.h3',
    '\n',
    'tune.h4',
    'tune.h5',
    'tune.h6',
    '\n',
    ...common
];
config/* Config.prototype.tuneBlock */.D.prototype.tuneBlock = {
    popup: {
        p: common,
        table: common,
        img: common,
        blockquote: common,
        div: common,
        pre: ['tune.editPre', ...common],
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
        isActive(editor, control, button) {
            var _a;
            return ((_a = button === null || button === void 0 ? void 0 : button.target) === null || _a === void 0 ? void 0 : _a.tagName.toLowerCase()) === h;
        },
        exec(editor, target) {
            if (target) {
                editor.selection.save();
                const header = dom/* Dom.replace */.i.replace(target, h, editor.createInside);
                editor.selection.restore();
                editor.e.fire('synchro');
                editor.e.fire('afterExecTune.tune', header);
            }
            return true;
        }
    };
}
function moveTo(up) {
    const sibling = up ? 'previousSibling' : 'nextSibling';
    return {
        icon: up ? 'angle-up' : 'angle-down',
        isDisabled(editor, control, button) {
            var _a;
            return !((_a = button === null || button === void 0 ? void 0 : button.target) === null || _a === void 0 ? void 0 : _a[sibling]);
        },
        exec(editor, target) {
            const siblingNode = target === null || target === void 0 ? void 0 : target[sibling];
            if (target && siblingNode) {
                editor.selection.save();
                (0,helpers.call)(up ? dom/* Dom.before */.i.before : dom/* Dom.after */.i.after, siblingNode, target);
                editor.selection.restore();
            }
            editor.e.fire('synchro');
            editor.e.fire('afterExecTune.tune');
            return true;
        }
    };
}
config/* Config.prototype.controls.tune */.D.prototype.controls.tune = {
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
        exec(editor, target) {
            editor.e.fire('editPreInPasteCode', target);
        }
    },
    remove: {
        icon: 'bin',
        exec(editor, target) {
            dom/* Dom.safeRemove */.i.safeRemove(target);
            editor.e.fire('synchro');
            editor.e.fire('closeTuner.tune');
            editor.e.fire('hideTuner.tune');
        }
    }
};

;// CONCATENATED MODULE: ./src/plugins/tune-block/tune-block.ts
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */






class tuneBlock extends core_plugin/* Plugin */.S {
    constructor() {
        super(...arguments);
        this.requires = ['license'];
    }
    afterInit(jodit) {
        this.tuner = new UITuner(jodit);
    }
    hideTuner() {
        this.tuner.hide();
    }
    onChangeSelection() {
        if (!this.j.s.isCollapsed()) {
            this.hideTuner();
        }
    }
    onClickInBlock(_) {
        if (this.j.s.isCollapsed()) {
            this.tuner.show();
        }
    }
    beforeDestruct(jodit) {
        this.tuner.destruct();
    }
}
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':outsideClick :keydown')
], tuneBlock.prototype, "hideTuner", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)('j.ed:selectionchange'),
    (0,decorators.debounce)()
], tuneBlock.prototype, "onChangeSelection", null);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators.watch)(':click')
], tuneBlock.prototype, "onClickInBlock", null);
src.Jodit.plugins.add('tune-block', tuneBlock);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(22179));
/******/ return __webpack_exports__;
/******/ }
]);
});