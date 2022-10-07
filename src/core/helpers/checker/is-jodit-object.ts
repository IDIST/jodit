
/**
 * @module helpers/checker
 */

import type { IJodit } from 'jodit/types';
import { isFunction } from './is-function';

/**
 * Check if element is instance of Jodit
 */
export function isJoditObject(jodit: unknown): jodit is IJodit {
	return Boolean(
		jodit &&
			jodit instanceof Object &&
			isFunction(jodit.constructor) &&
			// @ts-ignore
			((typeof Jodit !== 'undefined' && jodit instanceof Jodit) ||
				(jodit as IJodit).isJodit)
	);
}
