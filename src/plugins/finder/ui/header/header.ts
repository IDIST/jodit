/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

import './header.less';

import type { IViewBased } from 'jodit/types';
import type { IFileBrowserOptionsPro } from '../../interface';
import type { StateManager } from '../../helpers/state-manager';
import { UIGroup, UIInput } from 'jodit/core/ui';
import { component } from 'jodit/core/decorators';
import { makeCollection } from 'jodit/modules/toolbar/factory';

@component
export class UIBrowserHeader extends UIGroup {
	/** @override */
	override syncMod: boolean = true;

	private toolbar = makeCollection(this.j);

	private filter = new UIInput(this.j, {
		icon: 'search',
		placeholder: 'Filter',
		clearButton: true,
		onChange: (value: string): void => {
			this.stateManager.setFilter(value);
		}
	});

	/** @override */
	override className(): string {
		return 'UIBrowserHeader';
	}

	constructor(
		jodit: IViewBased,
		override readonly options: IFileBrowserOptionsPro,
		readonly stateManager: StateManager
	) {
		super(jodit);

		this.append(this.toolbar).append(this.filter);

		this.filter.container.classList.add(this.getFullElName('filter'));

		this.toolbar
			.setMod('mode', 'header')
			.build(this.options.toolbarButtons ?? []);
	}
}
