/**
 * [[include:modules/widget/file-selector/README.md]]
 * @packageDocumentation
 * @module modules/widget/file-selector
 */
// Node modules
import axios from 'axios';

// Jodit
import type { IFileBrowserCallBackData, IJodit } from 'jodit/types';
import { isFunction, $$, attr, val } from 'jodit/core/helpers';
import { Dom } from 'jodit/core/dom';
import { UIBlock, UIForm, UIInput, UIButton } from 'jodit/core/ui';

// Widgets
import { TabOption, TabsWidget } from '../tabs/tabs';
import { DragAndDropWidget } from 'jodit/modules/widget/drag-and-drop/drag-and-drop';

// Less
import './file-selector.less';

// Inferfaces
export interface ImageSelectorCallbacks {
	/**
	 * Function that will be called when the user enters the URL of the tab image and alternative text for images
	 */
	url?: (this: IJodit, url: string, alt: string) => void;

	/**
	 * Function that will be called when the user clicks on the file browser tab,
	 * and then choose any image in the window that opens
	 */

	filebrowser?: (data: IFileBrowserCallBackData) => void;
	searchUnsplash?:
		| ((this: IJodit, data: IFileBrowserCallBackData) => void)
		| true;
	searchGiphy?:
		| ((this: IJodit, data: IFileBrowserCallBackData) => void)
		| true;

	/**
	 * Function that will be called when the user selects a file or using drag and drop files to the `Upload` tab
	 */
	upload?: ((this: IJodit, data: IFileBrowserCallBackData) => void) | true;
	uploadGif?: ((this: IJodit, data: IFileBrowserCallBackData) => void) | true;
	uploadVideo?:
		| ((this: IJodit, data: IFileBrowserCallBackData) => void)
		| true;
	uploadFile?:
		| ((this: IJodit, data: IFileBrowserCallBackData) => void)
		| true;
}

// Main Section
/**
 * Generate 3 tabs
 * upload - Use Drag and Drop
 * url - By specifying the image url
 * filebrowser - After opening the file browser . In the absence of one of the parameters will be less tabs
 *
 * @param editor
 * @param callbacks - Object with keys `url`, `upload` and `filebrowser`, values which are callback
 * functions with different parameters
 * @param elm
 * @param close
 * @param isImage
 * @example
 * ```javascript
 * let widget = new Jodit.modules.Widget(editor);
 *
 * return widget.c('ImageSelector', {
 *      url: function (url, alt) {
 *          editor.selections.insertImage(url);
 *      },
 *      upload: function (images) {
 *          editor.selections.insertImage(images[0]);
 *      },
 *      filebrowser: function (images) {
 *          editor.selections.insertImage(images[0]);
 *      }
 * }, image);
 * ```
 */
export const FileSelectorWidget = (
	editor: IJodit,
	callbacks: ImageSelectorCallbacks,
	elm: HTMLElement | null,
	close: () => void,
	isImage: boolean = true
): HTMLDivElement => {
	let currentImage: any;

	const tabs: TabOption[] = [];

	if (
		callbacks.upload &&
		editor.o.uploader &&
		(editor.o.uploader.url || editor.o.uploader.insertImageAsBase64URI)
	) {
		tabs.push({
			icon: 'upload',
			name: 'Upload an image',
			content: DragAndDropWidget(editor, callbacks, 'IMAGE')
		});
	}

	if (
		callbacks.uploadVideo &&
		editor.o.uploader &&
		(editor.o.uploader.url || editor.o.uploader.insertImageAsBase64URI)
	) {
		tabs.push({
			icon: 'upload',
			name: 'Upload',
			content: DragAndDropWidget(editor, callbacks, 'VIDEO')
		});
	}

	if (
		callbacks.uploadFile &&
		editor.o.uploader &&
		(editor.o.uploader.url || editor.o.uploader.insertImageAsBase64URI)
	) {
		tabs.push({
			icon: 'upload',
			name: 'Upload a file',
			content: DragAndDropWidget(editor, callbacks, 'FILE')
		});
	}

	if (callbacks.searchUnsplash) {
		const form: HTMLFormElement = editor.c.fromHTML(
			'<form class="jodit-form jodit-unsplash">' +
				'<div class="jodit-unsplash-search"><input placeholder="Search image"/></div>' +
				'<div class="jodit-unsplash-search-result grid"></div>' +
				'</form>'
		) as HTMLFormElement;
		// const searchInput: HTMLSpanElement = form.querySelector(
		// 	'.jodit-unsplash-search > input'
		// ) as HTMLDivElement;
		const resultContainer: HTMLSpanElement = form.querySelector(
			'.jodit-unsplash-search-result'
		) as HTMLDivElement;

		axios({
			method: 'get',
			url: ' https://api.unsplash.com/photos',
			headers: {
				Authorization:
					'Client-ID GJneOEj8Pwm9YNCh3REGQVUR8nhkz55NIiIT0r24Lvs'
			}
		})
			.then(function (response) {
				const images = response.data;
				for (let i = 0; i < images.length; i++) {
					const item = editor.c.fromHTML(
						`<div class="jodit-unsplash-search-result-item grid-item hover-border-effect"><img class="" src="${images[i].urls.small}"></div>`
					);
					resultContainer.appendChild(item);
				}
			})
			.catch(function (error) {
				console.log(error);
			});

		tabs.push({
			name: 'Search an image',
			content: form
		});
	}

	if (callbacks.searchGiphy) {
		const form: HTMLFormElement = editor.c.fromHTML(
			'<form class="jodit-form jodit-giphy">' +
				'<div class="jodit-giphy-search"><input placeholder="Search gif"/></div>' +
				'<div class="jodit-giphy-search-result grid"></div>' +
				'</form>'
		) as HTMLFormElement;
		// const searchInput: HTMLSpanElement = form.querySelector(
		// 	'.jodit-unsplash-search > input'
		// ) as HTMLDivElement;
		const resultContainer: HTMLSpanElement = form.querySelector(
			'.jodit-giphy-search-result'
		) as HTMLDivElement;

		axios({
			method: 'get',
			url: 'https://api.giphy.com/v1/gifs/trending?api_key=4q6HZ1M92uI1ePVGFMUTvssZTzJGSNJ0&limit=10&rating=g'
		})
			.then(function (response) {
				const images = response.data.data;
				for (let i = 0; i < images.length; i++) {
					console.log(images[i]);
					const item = editor.c.fromHTML(
						`<div class="jodit-giphy-search-result-item grid-item hover-border-effect"><img class="" src="${images[i].images.fixed_height.webp}"/></div>`
					);
					resultContainer.appendChild(item);
				}
			})
			.catch(function (error) {
				console.log(error);
			});

		tabs.push({
			name: 'Search a GIF',
			content: form
		});
	}

	if (callbacks.filebrowser) {
		if (editor.o.filebrowser.ajax.url || editor.o.filebrowser.items.url) {
			tabs.push({
				icon: 'folder',
				name: 'Browse',
				content: () => {
					close && close();

					if (callbacks.filebrowser) {
						editor.filebrowser.open(callbacks.filebrowser, isImage);
					}
				}
			});
		}
	}

	if (callbacks.url) {
		const button = new UIButton(editor, {
				type: 'submit',
				variant: 'primary',
				text: 'Insert'
			}),
			form = new UIForm(editor, [
				new UIInput(editor, {
					required: true,
					label: 'URL',
					name: 'url',
					type: 'text',
					placeholder: 'https://'
				}),
				new UIInput(editor, {
					name: 'text',
					label: 'Alternative text'
				}),
				new UIBlock(editor, [button])
			]);

		currentImage = null;

		if (
			elm &&
			!Dom.isText(elm) &&
			(Dom.isTag(elm, 'img') || $$('img', elm).length)
		) {
			currentImage = elm.tagName === 'IMG' ? elm : $$('img', elm)[0];
			val(form.container, 'input[name=url]', attr(currentImage, 'src'));
			val(form.container, 'input[name=text]', attr(currentImage, 'alt'));
			button.state.text = 'Update';
		}

		if (elm && Dom.isTag(elm, 'a')) {
			val(form.container, 'input[name=url]', attr(elm, 'href'));
			val(form.container, 'input[name=text]', attr(elm, 'title'));
			button.state.text = 'Update';
		}

		form.onSubmit(data => {
			if (isFunction(callbacks.url)) {
				callbacks.url.call(editor, data.url, data.text);
			}
		});

		tabs.push({
			icon: 'link',
			name: 'URL',
			content: form.container
		});
	}

	return TabsWidget(editor, tabs);
};
