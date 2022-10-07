
/**
 * @module plugins/limit
 */

import { Config } from 'jodit/config';

declare module 'jodit/config' {
	interface Config {
		/**
		 * limit words count
		 */
		limitWords: false | number;

		/**
		 * limit chars count
		 */
		limitChars: false | number;

		/**
		 * limit html chars count
		 */
		limitHTML: false;
	}
}

Config.prototype.limitWords = false;
Config.prototype.limitChars = false;
Config.prototype.limitHTML = false;
