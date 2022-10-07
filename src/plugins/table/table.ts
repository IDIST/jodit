
/**
 * [[include:plugins/table/README.md]]
 * @packageDocumentation
 * @module plugins/table
 */

import './table.less';

import type { IJodit } from 'jodit/types';
import { pluginSystem } from 'jodit/core/global';

import './config';

export function table(editor: IJodit): void {
	editor.registerButton({
		name: 'table',
		group: 'insert'
	});
}

pluginSystem.add('table', table);
