
/**
 * [[include:plugins/tab/README.md]]
 * @packageDocumentation
 * @module plugins/tab
 */

import type { IJodit } from 'jodit/types';
import { Plugin } from 'jodit/core/plugin';
import { watch } from 'jodit/core/decorators';
import { KEY_TAB } from 'jodit/core/constants';
import { pluginSystem } from 'jodit/core/global';

import { onTabInsideLi } from './cases';
import './config';

class tab extends Plugin {
	protected afterInit(jodit: IJodit): void {}

	@watch(':keydown.tab')
	protected onTab(event: KeyboardEvent): false | void {
		if (event.key === KEY_TAB && onTabInsideLi(this.j)) {
			return false;
		}
	}

	protected beforeDestruct(jodit: IJodit): void {}
}

pluginSystem.add('tab', tab);
