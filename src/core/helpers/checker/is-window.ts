
/**
 * @module helpers/checker
 */

export function isWindow(obj: object): boolean {
	return obj != null && obj === (obj as Window).window;
}
