
/**
 * @module helpers/html
 */

/**
 *  Inserts HTML line breaks before all newlines in a string
 */
export function nl2br(html: string): string {
	return html.replace(/\r\n|\r|\n/g, '<br/>');
}
