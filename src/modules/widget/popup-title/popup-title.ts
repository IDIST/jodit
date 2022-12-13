/**
 * [[include:modules/widget/tabs/README.md]]
 * @packageDocumentation
 * @module modules/widget/tabs
 */

import { Button } from 'jodit/src/core/ui';
import type { IJodit } from 'jodit/src/types';
import './popup-title.less';

// import type { IDictionary, IJodit, IUIButton } from 'jodit/types';
// import { $$, isFunction } from 'jodit/core/helpers';
// import { Button, UIElement } from 'jodit/core/ui';
// import { Component } from 'jodit/core/component';

export const PopupTitleWidget = (
	jodit: IJodit,
	title: string,
	close: () => void
): HTMLDivElement => {
	const box = jodit.c.div('jodit-popup__title'),
		label = jodit.c.div('jodit-popup__title-label', jodit.i18n(title));

	box.appendChild(label);

	const icon = require('./popup-close-x.svg');
	const button = Button(jodit, icon);
	button.container.classList.add('jodit-popup__title-close-btn');

	jodit.e.on(button.container, 'mousedown', (e: MouseEvent) =>
		e.preventDefault()
	);
	button.onAction(close);
	box.appendChild(button.container);

	return box;
};
