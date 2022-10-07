
/**
 * @module helpers/normalize
 */

/**
 * Normalize value to CSS meters
 */
export const normalizeSize = (value: string | number): string => {
	if (/^[0-9]+$/.test(value.toString())) {
		return value + 'px';
	}
	return value.toString();
};
