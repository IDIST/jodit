
/**
 * @module plugins/stat
 */

import { Config } from 'jodit/config';

declare module 'jodit/config' {
	interface Config {
		showCharsCounter: boolean;
		countHTMLChars: boolean;
		showWordsCounter: boolean;
	}
}

Config.prototype.showCharsCounter = true;
Config.prototype.countHTMLChars = false;
Config.prototype.showWordsCounter = true;
