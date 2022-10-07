
/**
 * @module helpers/checker
 */

/**
 * Check if name has normal format
 */
export function isValidName(name: string): boolean {
	if (!name.length) {
		return false;
	}

	return !/[^0-9A-Za-zа-яА-ЯЁё\w\-_.]/.test(name);
}
