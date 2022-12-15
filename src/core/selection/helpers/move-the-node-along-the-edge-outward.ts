/**
 * @module selection
 */

import type { Nullable } from 'jodit/types';
import { Dom } from 'jodit/core/dom';

export function moveTheNodeAlongTheEdgeOutward(
	node: Node,
	start: boolean,
	root: HTMLElement
): void {
	// console.log(
	// 	'🚀 ~ file: move-the-node-along-the-edge-outward.ts:10 ~ moveTheNodeAlongTheEdgeOutward'
	// );
	let item: Nullable<Node> = node;

	while (item && item !== root) {
		const sibling = Dom.findSibling(item, start);

		if (sibling) {
			return;
		}

		item = item.parentElement;

		if (item && item !== root) {
			start ? Dom.before(item, node) : Dom.after(item, node);
		}
	}

	return;
}
