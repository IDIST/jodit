import type { Nullable } from 'jodit/types';
import { Dom } from 'jodit/core/dom';

/**
 * Is normal usual element
 * @private
 */
export function isNormalNode(elm: Nullable<Node>): boolean {
	return Boolean(elm && !Dom.isEmptyTextNode(elm) && !Dom.isTemporary(elm));
}
