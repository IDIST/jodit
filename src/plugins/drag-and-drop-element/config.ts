/**
 * @module plugins/drag-and-drop-element
 */

import { Config } from 'jodit/config';

declare module 'jodit/config' {
	interface Config {
		/**
		 * Draggable elements
		 */
		draggableTags: string | string[];
	}
}

Config.prototype.draggableTags = [
	'img',
	'jodit-media',
	'jodit',
	'video',
	'iframe'
];
