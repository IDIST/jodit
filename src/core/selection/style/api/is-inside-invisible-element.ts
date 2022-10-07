
import { Dom } from 'jodit/core/dom';

/**
 * Check if FONT inside STYLE or SCRIPT element
 * @private
 */
export function isInsideInvisibleElement(
	font: HTMLElement,
	root: HTMLElement
): boolean {
	return Boolean(Dom.closest(font, ['style', 'script'], root));
}
