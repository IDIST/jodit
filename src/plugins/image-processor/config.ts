
import { Config } from 'jodit/config';

/**
 * @module plugins/image-processor
 */

declare module 'jodit/config' {
	interface Config {
		imageProcessor: {
			replaceDataURIToBlobIdInView: boolean;
		};
	}
}

Config.prototype.imageProcessor = {
	replaceDataURIToBlobIdInView: true
};
