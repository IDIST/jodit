/**
 * [[include:modules/widget/file-selector/README.md]]
 * @packageDocumentation
 * @module modules/widget/file-selector
 */

import type { IFileBrowserCallBackData, IJodit } from 'jodit/types';
import { isFunction, $$, attr, val } from 'jodit/core/helpers';
import { Dom } from 'jodit/core/dom';
import { UIBlock, UIForm, UIInput, UIButton } from 'jodit/core/ui';
import { TabOption, TabsWidget } from '../tabs/tabs';
import './file-selector.less';
import axios from 'axios';

interface ImageSelectorCallbacks {
	/**
	 * Function that will be called when the user enters the URL of the tab image and alternative text for images
	 */
	url?: (this: IJodit, url: string, alt: string) => void;

	/**
	 * Function that will be called when the user clicks on the file browser tab,
	 * and then choose any image in the window that opens
	 */

	filebrowser?: (data: IFileBrowserCallBackData) => void;
	searchUnsplash?: true;
	searchGiphy?: true;

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

/**
 * Generate 3 tabs
 * upload - Use Drag and Drop
 * url - By specifying the image url
 * filebrowser - After opening the file browser . In the absence of one of the parameters will be less tabs
 *
 * @param callbacks - Object with keys `url`, `upload` and `filebrowser`, values which are callback
 * functions with different parameters
 *
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
		const dragBox = editor.c.fromHTML(
			'<div class="jodit-drag-and-drop__file-box">' +
				'<div><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">' +
				'<path fill-rule="evenodd" clip-rule="evenodd" d="M27.7141 9.28501L24.7141 6.28501C24.619 6.19397 24.5068 6.12261 24.3841 6.07501C24.1406 5.975 23.8676 5.975 23.6241 6.07501C23.5013 6.12261 23.3892 6.19397 23.2941 6.28501L20.2941 9.28501C20.1058 9.47332 20 9.72871 20 9.99501C20 10.2613 20.1058 10.5167 20.2941 10.705C20.4824 10.8933 20.7378 10.9991 21.0041 10.9991C21.2704 10.9991 21.5258 10.8933 21.7141 10.705L23.0041 9.40501V14.995C23.0041 15.2602 23.1094 15.5146 23.297 15.7021C23.4845 15.8897 23.7389 15.995 24.0041 15.995C24.2693 15.995 24.5237 15.8897 24.7112 15.7021C24.8987 15.5146 25.0041 15.2602 25.0041 14.995V9.40501L26.2941 10.705C26.3871 10.7987 26.4977 10.8731 26.6195 10.9239C26.7414 10.9747 26.8721 11.0008 27.0041 11.0008C27.1361 11.0008 27.2668 10.9747 27.3887 10.9239C27.5105 10.8731 27.6211 10.7987 27.7141 10.705C27.8078 10.6121 27.8822 10.5014 27.933 10.3796C27.9838 10.2577 28.0099 10.127 28.0099 9.99501C28.0099 9.863 27.9838 9.7323 27.933 9.61044C27.8822 9.48858 27.8078 9.37798 27.7141 9.28501ZM17 16L10 23H23V22L17 16ZM23 19C23 18.4477 23.4477 18 24 18C24.5523 18 25 18.4477 25 19V23V24C25 24.5523 24.5523 25 24 25H6C5.44772 25 5 24.5523 5 24V23V9V8C5 7.44772 5.44772 7 6 7H18C18.5523 7 19 7.44772 19 8C19 8.55228 18.5523 9 18 9H7V23L17 13L23 19ZM11 15C12.1046 15 13 14.1046 13 13C13 11.8954 12.1046 11 11 11C9.89543 11 9 11.8954 9 13C9 14.1046 9.89543 15 11 15Z" fill="#A7A8AB"/>' +
				'</svg></div>' +
				`<span>${
					editor.i18n('Drop image') + ' ' + editor.i18n('or click')
				}</span>` +
				'<input type="file" accept="image/*" tabindex="-1" dir="auto" multiple=""/>' +
				'</div>'
		);

		editor.uploader.bind(
			dragBox,
			resp => {
				const handler = isFunction(callbacks.upload)
					? callbacks.upload
					: editor.o.uploader.defaultHandlerSuccess;

				if (isFunction(handler)) {
					handler.call(editor, resp);
				}

				editor.e.fire('closeAllPopups');
			},
			error => {
				editor.e.fire('errorMessage', error.message);

				editor.e.fire('closeAllPopups');
			}
		);

		tabs.push({
			icon: 'upload',
			name: 'Upload',
			content: dragBox
		});
	}

	if (
		callbacks.uploadVideo &&
		editor.o.uploader &&
		(editor.o.uploader.url || editor.o.uploader.insertImageAsBase64URI)
	) {
		const dragBox = editor.c.fromHTML(
			'<div class="jodit-drag-and-drop__file-box">' +
				'<div><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M15.9998 29.3343C13.3628 29.3343 10.7851 28.5524 8.59249 27.0873C6.39992 25.6223 4.69103 23.54 3.6819 21.1037C2.67277 18.6675 2.40874 15.9867 2.92318 13.4004C3.43763 10.8141 4.70746 8.43842 6.57208 6.57379C8.43671 4.70917 10.8124 3.43934 13.3987 2.92489C15.985 2.41044 18.6658 2.67448 21.102 3.68361C23.5383 4.69273 25.6206 6.40163 27.0856 8.5942C28.5506 10.7868 29.3326 13.3645 29.3326 16.0015C29.3326 17.7524 28.9877 19.4861 28.3177 21.1037C27.6477 22.7214 26.6656 24.1912 25.4275 25.4292C24.1894 26.6673 22.7197 27.6494 21.102 28.3194C19.4844 28.9894 17.7507 29.3343 15.9998 29.3343ZM15.9998 26.6671C18.1096 26.6671 20.172 26.0415 21.9262 24.8694C23.6804 23.6972 25.0476 22.0312 25.855 20.0821C26.6624 18.1329 26.8736 15.9881 26.462 13.9188C26.0504 11.8496 25.0345 9.94889 23.5426 8.45706C22.0508 6.96522 20.1501 5.94927 18.0809 5.53767C16.0116 5.12608 13.8668 5.33732 11.9176 6.1447C9.96846 6.95207 8.30247 8.31932 7.13035 10.0735C5.95822 11.8277 5.3326 13.8901 5.3326 15.9999C5.3326 18.829 6.45646 21.5423 8.45695 23.5428C10.4574 25.5432 13.1707 26.6671 15.9998 26.6671ZM14.163 11.2207L20.6686 15.5567C20.7419 15.6053 20.802 15.6713 20.8435 15.7488C20.8851 15.8262 20.9069 15.9128 20.9069 16.0007C20.9069 16.0886 20.8851 16.1752 20.8435 16.2527C20.802 16.3301 20.7419 16.3961 20.6686 16.4447L14.1614 20.7807C14.0812 20.8339 13.9881 20.8643 13.8919 20.8688C13.7958 20.8733 13.7002 20.8517 13.6154 20.8063C13.5305 20.7608 13.4596 20.6932 13.4101 20.6107C13.3606 20.5282 13.3344 20.4338 13.3342 20.3375V11.6623C13.3342 11.5658 13.3603 11.4711 13.4099 11.3883C13.4595 11.3055 13.5307 11.2378 13.6158 11.1923C13.7008 11.1468 13.7967 11.1252 13.8931 11.13C13.9895 11.1347 14.0828 11.1655 14.163 11.2191V11.2207Z" fill="#A7A8AB"/></svg></div>' +
				`<span>${
					editor.i18n('Drop video') + ' ' + editor.i18n('or click')
				}</span>` +
				'<input type="file" accept="video/*" tabindex="-1" dir="auto" multiple=""/>' +
				'</div>'
		);

		editor.uploader.bind(
			dragBox,
			resp => {
				const handler = isFunction(callbacks.upload)
					? callbacks.upload
					: editor.o.uploader.defaultHandlerSuccess;

				if (isFunction(handler)) {
					handler.call(editor, resp);
				}

				editor.e.fire('closeAllPopups');
			},
			error => {
				editor.e.fire('errorMessage', error.message);

				editor.e.fire('closeAllPopups');
			}
		);

		tabs.push({
			icon: 'upload',
			name: 'Upload',
			content: dragBox
		});
	}

	if (
		callbacks.uploadFile &&
		editor.o.uploader &&
		(editor.o.uploader.url || editor.o.uploader.insertImageAsBase64URI)
	) {
		const dragBox = editor.c.fromHTML(
			'<div class="jodit-drag-and-drop__file-box">' +
				'<div><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M7.51457 5.66676H13.5999C13.9544 5.66573 14.3056 5.73508 14.6332 5.87081C14.9607 6.00653 15.258 6.20593 15.5079 6.45743L17.8786 8.82809L17.9079 8.85609C17.9724 8.92091 18.049 8.97231 18.1335 9.00732C18.2179 9.04234 18.3085 9.06027 18.3999 9.06009H24.4839C25.4229 9.06115 26.3233 9.43428 26.9878 10.0978C27.6523 10.7613 28.0268 11.6611 28.0292 12.6001V22.7814C28.0299 23.7225 27.6569 24.6254 26.992 25.2915C26.3272 25.9576 25.425 26.3324 24.4839 26.3334H7.51457C6.57462 26.3324 5.67346 25.9585 5.00881 25.2939C4.34416 24.6292 3.9703 23.728 3.96924 22.7881V9.21209C3.9703 8.27214 4.34416 7.37098 5.00881 6.70633C5.67346 6.04168 6.57462 5.66782 7.51457 5.66676ZM16.5266 10.3041L16.4906 10.2708L14.0906 7.87076C14.026 7.8056 13.9492 7.7539 13.8645 7.71866C13.7798 7.68341 13.689 7.66532 13.5972 7.66543H7.51457C7.1046 7.66578 6.71154 7.82889 6.42177 8.11891C6.13201 8.40892 5.96924 8.80212 5.96924 9.21209V22.7881C5.96959 23.1978 6.13252 23.5907 6.42225 23.8804C6.71198 24.1701 7.10483 24.3331 7.51457 24.3334H24.4839C24.8936 24.3331 25.2865 24.1701 25.5762 23.8804C25.866 23.5907 26.0289 23.1978 26.0292 22.7881V12.6001C26.0289 12.1904 25.866 11.7975 25.5762 11.5078C25.2865 11.218 24.8936 11.0551 24.4839 11.0548H18.3986C17.7006 11.058 17.0289 10.7887 16.5266 10.3041Z" fill="#A7A8AB"/></svg></div>' +
				`<span>${
					editor.i18n('Drop file') + ' ' + editor.i18n('or click')
				}</span>` +
				'<input type="file" accept="*" tabindex="-1" dir="auto" multiple=""/>' +
				'</div>'
		);

		editor.uploader.bind(
			dragBox,
			resp => {
				const handler = isFunction(callbacks.upload)
					? callbacks.upload
					: editor.o.uploader.defaultHandlerSuccess;

				if (isFunction(handler)) {
					handler.call(editor, resp);
				}

				editor.e.fire('closeAllPopups');
			},
			error => {
				editor.e.fire('errorMessage', error.message);

				editor.e.fire('closeAllPopups');
			}
		);

		tabs.push({
			name: 'Upload',
			content: dragBox
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
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
				Authorization:
					'Client-ID GJneOEj8Pwm9YNCh3REGQVUR8nhkz55NIiIT0r24Lvs'
			},
			withCredentials: false
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
			name: 'Search',
			content: form
		});
	}

	if (callbacks.searchGiphy) {
		const form: HTMLFormElement = editor.c.fromHTML(
			'<form class="jodit-form jodit-giphy">' +
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
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
				Authorization:
					'Client-ID GJneOEj8Pwm9YNCh3REGQVUR8nhkz55NIiIT0r24Lvs'
			},
			withCredentials: false
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
			name: 'Search Unsplash',
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
