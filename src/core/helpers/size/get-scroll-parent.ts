
/**
 * @module helpers/size
 */

import type { Nullable } from 'jodit/types';
import { css } from 'jodit/core/helpers/utils';
import { Dom } from 'jodit/core/dom/dom';

export function getScrollParent(node: Nullable<Node>): Nullable<Element> {
	if (!node) {
		return null;
	}

	const isElement = Dom.isHTMLElement(node);
	const overflowY = isElement && css(node, 'overflowY');
	const isScrollable =
		isElement && overflowY !== 'visible' && overflowY !== 'hidden';

	if (isScrollable && node.scrollHeight >= node.clientHeight) {
		return node;
	}

	return (
		getScrollParent(node.parentNode) ||
		document.scrollingElement ||
		document.body
	);
}
