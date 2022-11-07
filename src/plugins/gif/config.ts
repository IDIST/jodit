/**
 * @module plugins/image
 */

import type { IControlType, IJodit } from 'jodit/types';
import { Dom } from 'jodit/core/dom';
import { $$ } from 'jodit/core/helpers';
import { FileSelectorWidget } from 'jodit/modules/widget';
import { Config } from 'jodit/config';

Config.prototype.controls.gif = {
	popup: (editor: IJodit, current, self, close) => {
		let sourceGif: HTMLImageElement | null = null;

		if (
			current &&
			!Dom.isText(current) &&
			Dom.isHTMLElement(current) &&
			(Dom.isTag(current, 'img') || $$('img', current).length)
		) {
			sourceGif = Dom.isTag(current, 'img')
				? current
				: $$('img', current)[0];
		}

		editor.s.save();

		return FileSelectorWidget(
			editor,
			{
				searchGiphy: true
			},
			sourceGif,
			close
		);
	},
	// tags: ['img'],
	tooltip: 'Insert a gif',
	icon: require('./ui/gif.svg')
} as IControlType;
