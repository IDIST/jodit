
/**
 * @module helpers/checker
 */

import type { IDictionary } from 'jodit/types';
import { isWindow } from './is-window';

/**
 * Check if element is simple plaint object
 */
export function isPlainObject<T>(
	obj: any | IDictionary<T>
): obj is IDictionary<T> {
	if (!obj || typeof obj !== 'object' || obj.nodeType || isWindow(obj)) {
		return false;
	}

	return !(
		obj.constructor &&
		!{}.hasOwnProperty.call(obj.constructor.prototype, 'isPrototypeOf')
	);
}
