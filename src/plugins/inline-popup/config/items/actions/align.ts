/**
 * @module plugins/inline-popup
 */

import type { IControlType, IJodit, ImageHAlign } from 'jodit/types';
import { Dom } from 'jodit/core/dom';
import { hAlignElement } from 'jodit/core/helpers/utils/align';

const align = (editor: IJodit, elm: any, command: string): void | false => {
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

export const leftAlignAction: IControlType<IJodit> = {
	name: 'left',
	icon: 'left',
	exec: (editor: IJodit, elm, { control }): void | false => {
		align(editor, elm, 'left');
	},
	tooltip: 'Left'
};

export const centerAlignAction: IControlType<IJodit> = {
	name: 'center',
	icon: 'center',
	exec: (editor: IJodit, elm, { control }): void | false => {
		align(editor, elm, 'center');
	},
	tooltip: 'Center'
};

export const rightAlignAction: IControlType<IJodit> = {
	name: 'right',
	icon: 'right',
	exec: (editor: IJodit, elm, { control }): void | false => {
		align(editor, elm, 'right');
	},
	tooltip: 'Right'
};
