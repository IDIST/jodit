
/**
 * @module plugins/placeholder
 */

import { Config } from 'jodit/config';

/**
 * Show placeholder
 */
declare module 'jodit/config' {
	interface Config {
		/**
		 * Show placeholder
		 * @example
		 * ```javascript
		 * var editor = new Jodit('#editor', {
		 *    showPlaceholder: false
		 * });
		 * ```
		 */
		showPlaceholder: boolean;

		/**
		 * Use a placeholder from original input field, if it was set
		 * @example
		 * ```javascript
		 * //<textarea id="editor" placeholder="start typing text ..." cols="30" rows="10"></textarea>
		 * var editor = new Jodit('#editor', {
		 *    useInputsPlaceholder: true
		 * });
		 * ```
		 */
		useInputsPlaceholder: boolean;

		/**
		 * Default placeholder
		 * @example
		 * ```javascript
		 * var editor = new Jodit('#editor', {
		 *    placeholder: 'start typing text ...'
		 * });
		 * ```
		 */
		placeholder: string;
	}
}

Config.prototype.showPlaceholder = true;
Config.prototype.placeholder = '';
Config.prototype.useInputsPlaceholder = true;
