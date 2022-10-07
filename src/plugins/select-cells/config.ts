
/**
 * @module plugins/select-cells
 */

import { Config } from 'jodit/config';

declare module 'jodit/config' {
	interface Config {
		tableAllowCellSelection: boolean;
	}
}

Config.prototype.tableAllowCellSelection = true;
