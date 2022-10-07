
/**
 * @module helpers/html
 */

/**
 * Convert special characters to HTML entities
 */
export function htmlspecialchars(html: string): string {
	const tmp = document.createElement('div');
	tmp.textContent = html;
	return tmp.innerHTML;
}
