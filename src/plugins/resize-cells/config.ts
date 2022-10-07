
/**
 * @module plugins/resize-cells
 */

import { Config } from 'jodit/config';

declare module 'jodit/config' {
	interface Config {
		tableAllowCellResize: boolean;
	}
}

// TODO: 마지막 셀은 움직이면 안됨
Config.prototype.tableAllowCellResize = true;
