
/**
 * @module helpers/string
 */

/**
 * Make a string's first character uppercase
 */
export function ucfirst(value: string): string {
	if (!value.length) {
		return '';
	}

	return value[0].toUpperCase() + value.substr(1);
}
