
/**
 * @module plugins/enter
 */

import type { IJodit } from 'jodit/types';
import { Dom } from 'jodit/core/dom/dom';

/**
 * @private
 */
export function hasPreviousBlock(jodit: IJodit, current: Node): boolean {
	return Boolean(
		Dom.prev(
			current,
			elm => Dom.isBlock(elm) || Dom.isImage(elm),
			jodit.editor
		)
	);
}
