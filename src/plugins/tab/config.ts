
/**
 * @module plugins/tab
 */

import { Config } from 'jodit/config';

declare module 'jodit/config' {
	interface Config {
		tab: {
			/**
			 * Pressing Tab inside LI will add an internal list
			 */
			tabInsideLiInsertNewList: boolean;
		};
	}
}

Config.prototype.tab = {
	tabInsideLiInsertNewList: true
};
