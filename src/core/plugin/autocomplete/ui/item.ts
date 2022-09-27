/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

import './autocomplete.less';

import type { IAutoCompleteItem } from '../interface';
import { UIElement } from 'jodit/core/ui';
import { isFunction, isString } from 'jodit/core/helpers';

export class AutocompleteItem extends UIElement {
	/** @override */
	className(): string {
		return 'AutocompleteItem';
	}

	constructor(
		jodit: AutocompleteItem['jodit'],
		public item: IAutoCompleteItem
	) {
		super(jodit);

		const { container } = this;

		if (isFunction(item.itemRenderer)) {
			const elm = item.itemRenderer(item);

			if (isString(elm)) {
				container.innerHTML = elm;
			} else {
				container.appendChild(elm);
			}
		} else {
			container.innerText = item.title ?? item.value;
		}
	}
}
