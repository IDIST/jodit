
/**
 * @module plugins/backspace
 */

import type { IJodit } from 'jodit/types';

/**
 * On Not collapsed selection - should only remove whole selected content
 *
 * @example
 * ```html
 * <p>first | stop</p><p>second | stop</p>
 * ```
 * result
 * ```html
 * <p>first | stop</p>
 * ```
 * @private
 */
export function checkNotCollapsed(jodit: IJodit): boolean {
	if (!jodit.s.isCollapsed()) {
		jodit.execCommand('Delete');
		return true;
	}

	return false;
}
