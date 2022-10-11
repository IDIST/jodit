/**
 * [[include:plugins/image/README.md]]
 * @packageDocumentation
 * @module plugins/image
 */

import type { IJodit } from 'jodit/types';
import { pluginSystem } from 'jodit/core/global';

import './config';

export function image(editor: IJodit): void {
	editor.registerButton({
		name: 'image',
		group: 'media'
	});
}

pluginSystem.add('image', image);
