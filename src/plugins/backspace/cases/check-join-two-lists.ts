
/**
 * @module plugins/backspace
 */

import type { IJodit } from 'jodit/types';
import { Dom } from 'jodit/core/dom/dom';
import { call } from 'jodit/core/helpers/utils/utils';

/**
 * Try join two UL elements
 *
 * @example
 * ```html
 * <ul><li>one</li></ul>|<ol><li>two</li></ol>
 * ```
 * Result
 * ```html
 * <ul><li>one|</li><li>two</li></ul>
 * ```
 * @private
 */
export function checkJoinTwoLists(
	jodit: IJodit,
	fakeNode: Node,
	backspace: boolean
): boolean {
	const next = Dom.findSibling(fakeNode, backspace),
		prev = Dom.findSibling(fakeNode, !backspace);

	if (
		!Dom.closest(fakeNode, Dom.isElement, jodit.editor) &&
		Dom.isTag(next, ['ul', 'ol']) &&
		Dom.isTag(prev, ['ul', 'ol']) &&
		Dom.isTag(next.lastElementChild, 'li') &&
		Dom.isTag(prev.firstElementChild, 'li')
	) {
		const { setCursorBefore, setCursorAfter } = jodit.s;

		const target = next.lastElementChild,
			second = prev.firstElementChild;

		call(!backspace ? Dom.append : Dom.prepend, second, fakeNode);

		Dom.moveContent(prev, next, !backspace);
		Dom.safeRemove(prev);

		call(backspace ? Dom.append : Dom.prepend, target, fakeNode);
		call(backspace ? setCursorBefore : setCursorAfter, fakeNode);

		return true;
	}

	return false;
}
