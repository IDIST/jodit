
/**
 * @module plugins/wrap-nodes
 */

import type { HTMLTagNames } from 'jodit/types';
import { Config } from 'jodit/config';

declare module 'jodit/config' {
	interface Config {
		wrapNodes: {
			exclude: HTMLTagNames[];
		};
	}
}

Config.prototype.wrapNodes = {
	exclude: ['hr', 'style', 'br']
};
