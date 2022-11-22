/**
 * @module plugins/inline-popup
 */

import type { IControlType } from 'jodit/types';

import { deleteAction } from 'jodit/plugins/inline-popup/config/items/actions/delete';
import {
	centerHorizontalAlignAction,
	leftAlignAction,
	leftHorizontalAlignAction,
	rightAlignAction,
	rightHorizontalAlignAction
} from 'jodit/plugins/inline-popup/config/items/actions/align';

export default [
	leftHorizontalAlignAction,
	centerHorizontalAlignAction,
	rightHorizontalAlignAction,
	leftAlignAction,
	rightAlignAction,
	deleteAction
] as Array<IControlType | string>;
