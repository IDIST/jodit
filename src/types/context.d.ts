
/**
 * @module types
 */

import type { IDestructible } from './types';
import type { IPopup } from './popup';

export interface IContextMenuAction {
	icon?: string;
	title?: string;
	exec?: (this: IContextMenu, e: MouseEvent) => false | void;
	enabled?: boolean;
}

export interface IContextMenu extends IDestructible, IPopup {
	show(
		x: number,
		y: number,
		actions: Array<false | IContextMenuAction>
	): void;
}
