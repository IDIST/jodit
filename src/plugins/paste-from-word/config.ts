
/**
 * @module plugins/paste-from-word
 */

import type { InsertMode, IUIOption } from 'jodit/types';
import { Config } from 'jodit/config';
import {
	INSERT_AS_HTML,
	INSERT_AS_TEXT,
	INSERT_ONLY_TEXT
} from 'jodit/core/constants';

declare module 'jodit/config' {
	interface Config {
		/**
		 * Show the paste dialog if the html is similar to what MSWord gives when copying.
		 */
		askBeforePasteFromWord: boolean;

		/**
		 * Handle pasting of HTML - similar to a fragment copied from MSWord
		 */
		processPasteFromWord: boolean;

		/**
		 * Default insert method from word, if not define, it will use defaultActionOnPaste instead
		 * @example
		 * ```js
		 * Jodit.make('#editor', {
		 *   defaultActionOnPasteFromWord: 'insert_clear_html'
		 * })
		 * ```
		 */
		defaultActionOnPasteFromWord: InsertMode | null;

		/**
		 * Options when inserting data from Word
		 */
		pasteFromWordActionList: IUIOption[];

		pasteFromWord: {
			/**
			 * Turn off heuristic analysis when pasting from word
			 */
			enable: boolean;

			/**
			 * Convert units to px
			 */
			convertUnitsToPixel: boolean;

			/**
			 * List of attributes which should not be removed when pasting from word
			 */
			allowedStyleProps?: string[];
		};
	}
}

Config.prototype.askBeforePasteFromWord = false;
Config.prototype.processPasteFromWord = false;
Config.prototype.defaultActionOnPasteFromWord = null;

Config.prototype.pasteFromWordActionList = [
	{ value: INSERT_AS_HTML, text: 'Keep' },
	{ value: INSERT_AS_TEXT, text: 'Clean' },
	{ value: INSERT_ONLY_TEXT, text: 'Insert only Text' }
];

Config.prototype.pasteFromWord = {
	enable: false,
	convertUnitsToPixel: false,
	allowedStyleProps: [
		'background',
		'background-color',
		'border',
		'border-.*',
		'color',
		'float',
		'font-family',
		'font-size',
		'font-style',
		'font-weight',
		'height',
		'line-height',
		'list-style-type',
		'margin',
		'margin-bottom',
		'margin-left',
		'margin-right',
		'margin-top',
		'padding',
		'text-align',
		'text-justify',
		'text-decoration',
		'text-indent',
		'vertical-align',
		'width'
	]
};
