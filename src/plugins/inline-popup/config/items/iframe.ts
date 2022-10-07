
/**
 * @module plugins/inline-popup
 */

import type { IControlType, IJodit } from 'jodit/types';
import { align } from './img';

export default [
	{
		name: 'bin',
		tooltip: 'Delete',
		exec: (editor: IJodit, image): void => {
			image && editor.s.removeNode(image);
		}
	},
	align
] as Array<IControlType | string>;
