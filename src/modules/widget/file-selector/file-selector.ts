/**
 * [[include:modules/widget/file-selector/README.md]]
 * @packageDocumentation
 * @module modules/widget/file-selector
 */
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
import { SearchSelectorWidget } from 'jodit/modules/widget/search-selector/search-selector';
import type { IUploaderData } from 'jodit/types';

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
	searchUnsplash?: true;
	searchGiphy?: true;

	/**
	 * Function that will be called when the user selects a file or using drag and drop files to the `Upload` tab
	 */
	upload?: ((this: IJodit, data: IUploaderData) => void) | true;
	uploadGif?: ((this: IJodit, data: IUploaderData) => void) | true;
	uploadVideo?: ((this: IJodit, data: IUploaderData) => void) | true;
	uploadFile?: ((this: IJodit, data: IUploaderData) => void) | true;
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
			name: 'Upload',
			content: DragAndDropWidget(editor, callbacks, 'image', close)
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
			content: DragAndDropWidget(editor, callbacks, 'video', close)
		});
	}

	if (
		callbacks.uploadFile &&
		editor.o.uploader &&
		(editor.o.uploader.url || editor.o.uploader.insertImageAsBase64URI)
	) {
		tabs.push({
			icon: 'upload',
			name: 'Upload',
			content: DragAndDropWidget(editor, callbacks, 'file', close)
		});
	}

	if (callbacks.searchUnsplash) {
		tabs.push({
			name: 'Search',
			content: SearchSelectorWidget(editor, callbacks, 'image', close)
		});
	}

	if (callbacks.searchGiphy) {
		tabs.push({
			name: 'Search',
			content: SearchSelectorWidget(editor, callbacks, 'gif', close)
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
