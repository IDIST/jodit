
/**
 * @module plugins/indent
 */

import { Dom } from 'jodit/core/dom/dom';

/**
 * Get style rule key for current direction
 * @internal
 */
export const getKey = (
	direction: string,
	box: HTMLElement
): 'marginLeft' | 'marginRight' | 'paddingLeft' | 'paddingRight' =>
	`${Dom.isCell(box) ? 'padding' : 'margin'}${
		direction === 'rtl' ? 'Right' : 'Left'
	}`;
