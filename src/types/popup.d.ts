/**
 * @module types
 */

import type { IBound, IDestructible } from './types';
import type { IUIElement } from './ui';

export type PopupStrategy =
	| 'leftBottom'
	| 'rightBottom'
	| 'leftTop'
	| 'rightTop'
	| 'centerTop'
	| 'centerBottom';

export interface IPopup extends IUIElement, IDestructible {
	container: HTMLElement;

	isOpened: boolean;
	strategy: PopupStrategy;
	viewBound: () => IBound;

	open(
		getBound: () => IBound,
		keepPosition?: boolean,
		parentContainer?: HTMLElement
	): this;

	setContent(
		content: IUIElement | HTMLElement | string,
		title?: IUIElement | HTMLElement | string,
		popupContentExtraClassName?: string
	): this;

	updatePosition(): this;

	close(): this;

	isOwnClick(e: MouseEvent): boolean;

	setZIndex(index: number): void;
}
