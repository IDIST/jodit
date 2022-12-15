/**
 * @module plugins/clean-html
 */

import type { IJodit, Nullable } from 'jodit/types';
import { Dom } from 'jodit/core/dom/dom';
import { INSEPARABLE_TAGS } from 'jodit/core/constants';

/**
 * For collapsed selection move cursor outside or split inline block
 * @private
 */
export function removeFormatForCollapsedSelection(
	jodit: IJodit,
	fake?: Node
): Nullable<Text> | void {
	// console.log(
	// 	'🚀 ~ file: remove-format-for-collapsed-selection.ts:14 ~ removeFormatForCollapsedSelection'
	// );
	const { s } = jodit;

	let fakeNode = fake;

	if (!fakeNode) {
		fakeNode = jodit.createInside.fake();
		const { range } = s;
		Dom.safeInsertNode(range, fakeNode);
		range.collapse();
	}

	const mainInline = Dom.furthest(fakeNode, isInlineBlock, jodit.editor);

	if (mainInline) {
		if (s.cursorOnTheLeft(mainInline)) {
			Dom.before(mainInline, fakeNode);
		} else if (s.cursorOnTheRight(mainInline)) {
			Dom.after(mainInline, fakeNode);
		} else {
			const leftHand = s.splitSelection(mainInline);
			leftHand && Dom.after(leftHand, fakeNode);
		}
	}

	if (!fake) {
		s.setCursorBefore(fakeNode);
		Dom.safeRemove(fakeNode);
	}
}

/**
 * Element has inline display mode
 */
export function isInlineBlock(node: Nullable<Node>): node is Node {
	// console.log(
	// 	'🚀 ~ file: remove-format-for-collapsed-selection.ts:54 ~ isInlineBlock ~ isInlineBlock'
	// );
	return Dom.isInlineBlock(node) && !Dom.isTag(node, INSEPARABLE_TAGS);
}
