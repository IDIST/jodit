/**
 * @module plugins/image
 */

import type { IControlType, IJodit } from 'jodit/types';
// import { Dom } from 'jodit/core/dom';
// import { $$ } from 'jodit/core/helpers';
import { FileSelectorWidget } from 'jodit/modules/widget';
import { Config } from 'jodit/config';
import { PopupTitleWidget } from 'jodit/src/modules/widget/popup-title/popup-title';

Config.prototype.controls.image = {
	popup: (editor: IJodit, current, self, close) => {
		// let sourceImage: HTMLImageElement | null = null;

		// if (
		// 	current &&
		// 	!Dom.isText(current) &&
		// 	Dom.isHTMLElement(current) &&
		// 	(Dom.isTag(current, 'img') || $$('img', current).length)
		// ) {
		// 	sourceImage = Dom.isTag(current, 'img')
		// 		? current
		// 		: $$('img', current)[0];
		// }

		// editor.s.save();

		return FileSelectorWidget(
			editor,
			{
				searchUnsplash: true,
				upload: true
			},
			// sourceImage,
			close
		);
	},
	popupTitle: (editor: IJodit, _: any, _1: any, close: any): HTMLElement =>
		PopupTitleWidget(editor, 'Image', close),
	popupContentExtraClassName: 'custom',
	tags: ['img'],
	tooltip: 'Insert a image',
	icon: require('./ui/image.svg')
} as IControlType;
