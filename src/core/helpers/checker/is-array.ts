
/**
 * @module helpers/checker
 */

/**
 * Check if element is array
 */
export function isArray<T = any>(elm: unknown): elm is T[] {
	return Array.isArray(elm);
}
