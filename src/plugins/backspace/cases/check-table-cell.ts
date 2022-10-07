
/**
 * @module plugins/backspace
 */

import type { IJodit } from 'jodit/types';
import { Dom } from 'jodit/core/dom/dom';

/**
 * Inside the CELL table - nothing to do
 *
 * @example
 * ```html
 * <table><tr><td>|test</td></tr></table>
 * ```
 * result
 * ```html
 * <table><tr><td>|test</td></tr></table>
 * ```
 *
 * @private
 */
export function checkTableCell(jodit: IJodit, fakeNode: Node): boolean {
	const cell = fakeNode.parentElement;

	if (Dom.isCell(cell)) {
		return true;
	}

	return false;
}
