/**
 * @module helpers/utils
 */

import type { ImageHAlign } from 'jodit/types';
import { Dom } from 'jodit/core/dom';
import { clearCenterAlign, css } from '../utils/css';

/**
 * Align image
 */
export function hAlignElement(image: HTMLElement, align: ImageHAlign): void {
	if (align && align !== 'normal') {
		if (align !== 'center') {
			css(image, {
				display: '',
				float: align,
				marginLeft: '',
				marginRight: '',
				overflow: 'auto'
			});
		} else {
			css(image, {
				float: '',
				display: 'block',
				marginLeft: 'auto',
				marginRight: 'auto',
				overflow: 'auto'
			});
		}
	} else {
		if (
			css(image, 'float') &&
			['right', 'left'].indexOf(
				css(image, 'float').toString().toLowerCase()
			) !== -1
		) {
			css(image, 'float', '');
		}

		clearCenterAlign(image);
	}
}

/**
 * Remove text-align style for all selected children
 */
export function clearAlign(node: Node): void {
	Dom.each(node, elm => {
		if (Dom.isHTMLElement(elm)) {
			if (elm.style.textAlign) {
				elm.style.textAlign = '';

				if (!elm.style.cssText.trim().length) {
					elm.removeAttribute('style');
				}
			}
		}
	});
}

/**
 * Apply align for element
 */
export function alignElement(command: string, box: HTMLElement): void {
	if (Dom.isNode(box) && Dom.isElement(box)) {
		clearAlign(box);
		box.style.overflow = 'auto';

		switch (command.toLowerCase()) {
			case 'justifyfull':
				box.style.textAlign = 'justify';
				break;

			case 'justifyright':
				box.style.textAlign = 'right';
				console.log('right');
				break;

			case 'justifyleft':
				box.style.textAlign = 'left';
				console.log('left');
				break;

			case 'justifycenter':
				box.style.textAlign = 'center';
				console.log('center');
				break;
		}
	}
}
