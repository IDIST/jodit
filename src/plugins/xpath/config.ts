
/**
 * @module plugins/xpath
 */

import { Config } from 'jodit/config';

declare module 'jodit/config' {
	interface Config {
		showXPathInStatusbar: boolean;
	}
}

Config.prototype.showXPathInStatusbar = false;
