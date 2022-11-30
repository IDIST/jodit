/**
 * @module plugins/inline-popup
 */

import type {
	IControlType,
	IJodit,
	ImageAlign,
	ImageHAlign
} from 'jodit/types';
import { Dom } from 'jodit/core/dom';
import { alignElement, hAlignElement } from 'jodit/core/helpers/utils/align';

const floatAlign = (
	editor: IJodit,
	elm: any,
	command: string
): void | false => {
	if (!Dom.isTag(elm, ['img', 'jodit', 'jodit-media'])) {
		return;
	}

	if (!command) {
		return false;
	}

	hAlignElement(elm, command as ImageHAlign);

	if (Dom.isTag(elm, ['jodit', 'jodit-media']) && elm.firstElementChild) {
		hAlignElement(
			elm.firstElementChild as HTMLElement,
			command as ImageHAlign
		);
	}

	editor.synchronizeValues();

	editor.e.fire('recalcPositionPopup');
};

const textAlign = (editor: IJodit, elm: any, command: string): void | false => {
	if (!Dom.isTag(elm, ['img', 'jodit', 'jodit-media'])) {
		return;
	}

	if (!command) {
		return false;
	}

	let currentBox = Dom.up(elm, Dom.isBlock, editor.editor) as HTMLElement;

	if (!currentBox) {
		currentBox = Dom.wrapInline(
			elm,
			editor.o.enterBlock,
			editor
		) as HTMLElement;
	}

	alignElement(command as ImageAlign, currentBox);

	editor.synchronizeValues();

	editor.e.fire('recalcPositionPopup');
};

export const floatAlignLeftAction: IControlType<IJodit> = {
	name: 'float align left',
	icon: 'float-align-left',
	exec: (editor: IJodit, elm, { control }): void | false => {
		floatAlign(editor, elm, 'left');
	},
	tooltip: 'Float Align Left'
};

export const floatAlignCenterAction: IControlType<IJodit> = {
	name: 'float align center',
	icon: 'float-align-center',
	exec: (editor: IJodit, elm, { control }): void | false => {
		floatAlign(editor, elm, 'center');
	},
	tooltip: 'Float Align Center'
};

export const floatAlignRightAction: IControlType<IJodit> = {
	name: 'float align right',
	icon: 'float-align-right',
	exec: (editor: IJodit, elm, { control }): void | false => {
		floatAlign(editor, elm, 'right');
	},
	tooltip: 'Float Align Right'
};

export const textAlignLeftAction: IControlType<IJodit> = {
	name: 'left',
	icon: 'left',
	exec: (editor: IJodit, elm, { control }): void | false => {
		textAlign(editor, elm, 'justifyleft');
	},
	tooltip: 'Left'
};

export const textAlignCenterAction: IControlType<IJodit> = {
	name: 'center',
	icon: 'center',
	exec: (editor: IJodit, elm, { control }): void | false => {
		textAlign(editor, elm, 'justifycenter');
	},
	tooltip: 'Center'
};

export const textAlignRightAction: IControlType<IJodit> = {
	name: 'right',
	icon: 'right',
	exec: (editor: IJodit, elm, { control }): void | false => {
		textAlign(editor, elm, 'justifyright');
	},
	tooltip: 'Right'
};
