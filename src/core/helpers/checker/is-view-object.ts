
/**
 * @module helpers/checker
 */

import type { IViewBased } from 'jodit/types';
import { isFunction } from './is-function';

/**
 * Check if element is instance of View
 */
export function isViewObject(jodit: unknown): jodit is IViewBased {
	return Boolean(
		jodit &&
			jodit instanceof Object &&
			isFunction(jodit.constructor) &&
			(jodit as IViewBased).isView
	);
}
