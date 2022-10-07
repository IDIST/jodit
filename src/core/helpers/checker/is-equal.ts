
/**
 * @module helpers/checker
 */

import { stringify } from 'jodit/core/helpers/string/stringify';

/**
 * Check two element are equal
 */
export function isEqual(a: unknown, b: unknown): boolean {
	return a === b || stringify(a) === stringify(b);
}

export function isFastEqual(a: unknown, b: unknown): boolean {
	return a === b;
}
