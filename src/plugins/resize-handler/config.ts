
/**
 * @module plugins/resize-handler
 */

import { Config } from 'jodit/config';

declare module 'jodit/config' {
	interface Config {
		allowResizeX: boolean;
		allowResizeY: boolean;
	}
}

Config.prototype.allowResizeX = false;
Config.prototype.allowResizeY = true;
