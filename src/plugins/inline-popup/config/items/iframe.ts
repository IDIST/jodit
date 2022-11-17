/**
 * @module plugins/inline-popup
 */

import type { IControlType } from 'jodit/types';
import {
	centerAlignAction,
	leftAlignAction,
	rightAlignAction
} from 'jodit/plugins/inline-popup/config/items/actions/align';
import { deleteAction } from 'jodit/plugins/inline-popup/config/items/actions/delete';

export default [
	leftAlignAction,
	centerAlignAction,
	rightAlignAction,
	deleteAction
] as Array<IControlType | string>;
