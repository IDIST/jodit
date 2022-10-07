
/**
 * @module helpers/checker
 */

/**
 * Check value is undefined or null
 */
export function isVoid(value: unknown): value is undefined | null {
	// eslint-disable-next-line eqeqeq
	return value === undefined || value === null;
}
