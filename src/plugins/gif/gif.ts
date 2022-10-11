/**
 * [[include:plugins/image/README.md]]
 * @packageDocumentation
 * @module plugins/image
 */

import type { IJodit } from 'jodit/types';
import { pluginSystem } from 'jodit/core/global';

import './config';

export function gif(editor: IJodit): void {
	editor.registerButton({
		name: 'gif',
		group: 'media'
	});
}

pluginSystem.add('gif', gif);
