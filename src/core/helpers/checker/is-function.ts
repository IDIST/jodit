
/**
 * @module helpers/checker
 */

/**
 * Check value is Function
 */
export function isFunction(value: unknown): value is Function {
	return typeof value === 'function';
}
