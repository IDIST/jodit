/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

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
