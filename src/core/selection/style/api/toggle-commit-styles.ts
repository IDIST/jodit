
import type { CommitStyle } from '../commit-style';
import { Dom } from 'jodit/core/dom';

/**
 * Add or remove styles to element
 * @param elm - The element to switch styles
 * @private
 */
export function toggleCommitStyles(
	commitStyle: CommitStyle,
	elm: HTMLElement
): boolean {
	if (
		commitStyle.elementIsBlock ||
		(Dom.isTag(elm, commitStyle.element) && !commitStyle.elementIsDefault)
	) {
		Dom.unwrap(elm);
		return true;
	}

	return false;
}
