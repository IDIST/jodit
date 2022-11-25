/**
 * @module plugins/inline-popup
 */

import type { IControlType } from 'jodit/types';

import { deleteAction } from 'jodit/plugins/inline-popup/config/items/actions/delete';
import {
	floatAlignCenterAction,
	floatAlignLeftAction,
	floatAlignRightAction,
	textAlignLeftAction,
	textAlignRightAction
} from 'jodit/plugins/inline-popup/config/items/actions/align';

export default [
	floatAlignLeftAction,
	floatAlignCenterAction,
	floatAlignRightAction,
	textAlignLeftAction,
	textAlignRightAction,
	deleteAction
] as Array<IControlType | string>;
