/**
 * @module plugins/inline-popup
 */

import type { IControlType, IJodit } from 'jodit/types';

export const deleteAction: IControlType<IJodit> = {
	name: 'delete',
	icon: 'bin',
	tooltip: 'Delete',
	exec: (editor: IJodit, image): void => {
		image && editor.s.removeNode(image);
	}
};
