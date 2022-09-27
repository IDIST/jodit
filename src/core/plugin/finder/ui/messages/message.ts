/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

import type { IViewBased } from 'jodit/types';
import { UIElement } from 'jodit/core/ui';
import { component } from 'jodit/core/decorators/index';
import { isString } from 'jodit/core/helpers';

@component
export class UIBrowserMessage extends UIElement {
	className(): string {
		return 'UIBrowserMessage';
	}

	constructor(jodit: IViewBased, message: string | Error) {
		super(jodit);
		this.container.innerText = isString(message)
			? message
			: message.message;
	}
}
