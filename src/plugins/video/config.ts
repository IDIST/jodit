/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

/**
 * @module plugins/video
 */

import type { IControlType, IJodit } from 'jodit/types';
import { Config } from 'jodit/config';
import { FileSelectorWidget } from 'jodit/modules/widget';
import { $$ } from 'jodit/core/helpers';
import { Dom } from 'jodit/core/dom';

Config.prototype.controls.video = {
	popup: (editor: IJodit, current, control, close) => {
		let sourceVideo: HTMLImageElement | null = null;

		if (
			current &&
			!Dom.isText(current) &&
			Dom.isHTMLElement(current) &&
			(Dom.isTag(current, 'img') || $$('img', current).length)
		) {
			sourceVideo = Dom.isTag(current, 'img')
				? current
				: $$('img', current)[0];
		}

		editor.s.save();

		return FileSelectorWidget(
			editor,
			{
				uploadVideo: true,
				url: async (url: string, text: string) => {
					editor.s.restore();

					if (/^[a-z\d_-]+(\.[a-z\d_-]+)+/i.test(url)) {
						url = '//' + url;
					}

					const video: HTMLImageElement =
						sourceVideo || editor.createInside.element('img');

					video.setAttribute('src', url);
					video.setAttribute('alt', text);

					if (!sourceVideo) {
						await editor.s.insertImage(
							video,
							null,
							editor.o.imageDefaultWidth
						);
					}

					close();
				}
			},
			sourceVideo,
			close
		);
	},

	tags: ['video'],
	tooltip: 'Insert a video',
	icon: require('./ui/video.svg')
} as IControlType;
