/**
 * @module plugins/inline-popup
 */

import type { IControlType } from 'jodit/types';

import { deleteAction } from 'jodit/plugins/inline-popup/config/items/actions/delete';
import {
	textAlignCenterAction,
	textAlignLeftAction,
	textAlignRightAction
} from 'jodit/plugins/inline-popup/config/items/actions/align';

export default [
	textAlignLeftAction,
	textAlignCenterAction,
	textAlignRightAction,
	'|',
	deleteAction
] as Array<IControlType | string>;
