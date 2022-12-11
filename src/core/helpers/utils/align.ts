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
				marginRight: ''
			});
		} else {
			css(image, {
				float: '',
				display: 'block',
				marginLeft: 'auto',
				marginRight: 'auto'
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
			elm.style.display = '';
			elm.style.textAlign = '';
			elm.style.float = '';
			elm.style.marginLeft = '';
			elm.style.marginRight = '';

			if (!elm.style.cssText.trim().length) {
				elm.removeAttribute('style');
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

		switch (command.toLowerCase()) {
			case 'justifyfull':
				box.style.textAlign = 'justify';
				break;

			case 'justifyright':
				box.style.textAlign = 'right';
				break;

			case 'justifyleft':
				box.style.textAlign = 'left';
				break;

			case 'justifycenter':
				box.style.textAlign = 'center';
				break;
		}
	}
}
