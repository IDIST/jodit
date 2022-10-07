
/**
 * [[include:plugins/image/README.md]]
 * @packageDocumentation
 * @module plugins/image
 */

import type {
	IControlType,
	IFileBrowserCallBackData,
	IJodit
} from 'jodit/types';
import { Dom } from 'jodit/core/dom';
import { $$ } from 'jodit/core/helpers';
import { FileSelectorWidget } from 'jodit/modules/widget';
import { Config } from 'jodit/config';
import { pluginSystem } from 'jodit/core/global';
import { Icon } from 'jodit/core/ui/icon';

Icon.set('gif', require('./gif.svg'));

Config.prototype.controls.gif = {
	popup: (editor: IJodit, current, self, close) => {
		let sourceImage: HTMLImageElement | null = null;

		if (
			current &&
			!Dom.isText(current) &&
			Dom.isHTMLElement(current) &&
			(Dom.isTag(current, 'img') || $$('img', current).length)
		) {
			sourceImage = Dom.isTag(current, 'img')
				? current
				: $$('img', current)[0];
		}

		editor.s.save();

		return FileSelectorWidget(
			editor,
			{
				filebrowser: (data: IFileBrowserCallBackData) => {
					editor.s.restore();

					data.files &&
						data.files.forEach(file =>
							editor.s.insertImage(
								data.baseurl + file,
								null,
								editor.o.imageDefaultWidth
							)
						);

					close();
				},
				upload: true,
				url: async (url: string, text: string) => {
					editor.s.restore();

					if (/^[a-z\d_-]+(\.[a-z\d_-]+)+/i.test(url)) {
						url = '//' + url;
					}

					const image: HTMLImageElement =
						sourceImage || editor.createInside.element('img');

					image.setAttribute('src', url);
					image.setAttribute('alt', text);

					if (!sourceImage) {
						await editor.s.insertImage(
							image,
							null,
							editor.o.imageDefaultWidth
						);
					}

					close();
				}
			},
			sourceImage,
			close
		);
	},
	tags: ['img'],
	tooltip: 'Insert Image'
} as IControlType;

export function gif(editor: IJodit): void {
	editor.registerButton({
		name: 'gif',
		group: 'media'
	});
}

pluginSystem.add('gif', gif);
