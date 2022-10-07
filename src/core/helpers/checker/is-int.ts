
/**
 * @module helpers/checker
 */

import { isNumeric } from './is-numeric';
import { isString } from './is-string';

/**
 * Check value is Int
 */
export function isInt(value: number | string): boolean {
	if (isString(value) && isNumeric(value)) {
		value = parseFloat(value);
	}

	return typeof value === 'number' && Number.isFinite(value) && !(value % 1);
}
