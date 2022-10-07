
/**
 * @module helpers/string
 */

/**
 * Convert (kebab-case or snake_case) to camelCase
 */
export const camelCase = (key: string): string => {
	return key.replace(/([-_])(.)/g, (m, code, letter) => {
		return letter.toUpperCase();
	});
};
