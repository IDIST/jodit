/**
 * [[include:plugins/file/README.md]]
 * @packageDocumentation
 * @module plugins/file
 */

import type { IJodit } from 'jodit/types';
import { pluginSystem } from 'jodit/core/global';

import './config';

export function file(editor: IJodit): void {
	editor.registerButton({
		name: 'file',
		group: 'media'
	});
}

pluginSystem.add('file', file);
