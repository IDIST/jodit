/**
 * [[include:modules/widget/file-selector/README.md]]
 * @packageDocumentation
 * @module modules/widget/file-selector
 */

// Jodit
import type { IJodit } from 'jodit/types';
import { isFunction } from 'jodit/core/helpers';
import type { ImageSelectorCallbacks } from 'jodit/modules/widget';

// Styles
import './drag-and-drop.less';

type mediaFileType = 'image' | 'gif' | 'video' | 'file' | 'audio';

// Main section
export const DragAndDropWidget = (
	editor: IJodit,
	callbacks: ImageSelectorCallbacks,
	fileType: mediaFileType,
	close: () => void
): HTMLElement => {
	let inputAccept;
	switch (fileType) {
		case 'image':
			inputAccept = 'image/*';
			break;
		case 'gif':
			inputAccept = 'image/gif';
			break;
		case 'video':
			inputAccept = 'video/gif';
			break;
		case 'file':
			inputAccept = '*';
			break;
		case 'audio':
			inputAccept = 'audio/*';
			break;
		default:
			inputAccept = '*';
	}

	// const placeholder =
	// 	editor.i18n('Drop ' + fileType.toLowerCase()) +
	// 	' ' +
	// 	editor.i18n('or click');

	// let svgPath = null;
	// switch (fileType) {
	// 	case 'video':
	// 		svgPath =
	// 			'<path d="M15.9998 29.3343C13.3628 29.3343 10.7851 28.5524 8.59249 27.0873C6.39992 25.6223 4.69103 23.54 3.6819 21.1037C2.67277 18.6675 2.40874 15.9867 2.92318 13.4004C3.43763 10.8141 4.70746 8.43842 6.57208 6.57379C8.43671 4.70917 10.8124 3.43934 13.3987 2.92489C15.985 2.41044 18.6658 2.67448 21.102 3.68361C23.5383 4.69273 25.6206 6.40163 27.0856 8.5942C28.5506 10.7868 29.3326 13.3645 29.3326 16.0015C29.3326 17.7524 28.9877 19.4861 28.3177 21.1037C27.6477 22.7214 26.6656 24.1912 25.4275 25.4292C24.1894 26.6673 22.7197 27.6494 21.102 28.3194C19.4844 28.9894 17.7507 29.3343 15.9998 29.3343ZM15.9998 26.6671C18.1096 26.6671 20.172 26.0415 21.9262 24.8694C23.6804 23.6972 25.0476 22.0312 25.855 20.0821C26.6624 18.1329 26.8736 15.9881 26.462 13.9188C26.0504 11.8496 25.0345 9.94889 23.5426 8.45706C22.0508 6.96522 20.1501 5.94927 18.0809 5.53767C16.0116 5.12608 13.8668 5.33732 11.9176 6.1447C9.96846 6.95207 8.30247 8.31932 7.13035 10.0735C5.95822 11.8277 5.3326 13.8901 5.3326 15.9999C5.3326 18.829 6.45646 21.5423 8.45695 23.5428C10.4574 25.5432 13.1707 26.6671 15.9998 26.6671ZM14.163 11.2207L20.6686 15.5567C20.7419 15.6053 20.802 15.6713 20.8435 15.7488C20.8851 15.8262 20.9069 15.9128 20.9069 16.0007C20.9069 16.0886 20.8851 16.1752 20.8435 16.2527C20.802 16.3301 20.7419 16.3961 20.6686 16.4447L14.1614 20.7807C14.0812 20.8339 13.9881 20.8643 13.8919 20.8688C13.7958 20.8733 13.7002 20.8517 13.6154 20.8063C13.5305 20.7608 13.4596 20.6932 13.4101 20.6107C13.3606 20.5282 13.3344 20.4338 13.3342 20.3375V11.6623C13.3342 11.5658 13.3603 11.4711 13.4099 11.3883C13.4595 11.3055 13.5307 11.2378 13.6158 11.1923C13.7008 11.1468 13.7967 11.1252 13.8931 11.13C13.9895 11.1347 14.0828 11.1655 14.163 11.2191V11.2207Z"/>';
	// 		break;
	// 	case 'file':
	// 		svgPath =
	// 			'<path d="M7.51457 5.66676H13.5999C13.9544 5.66573 14.3056 5.73508 14.6332 5.87081C14.9607 6.00653 15.258 6.20593 15.5079 6.45743L17.8786 8.82809L17.9079 8.85609C17.9724 8.92091 18.049 8.97231 18.1335 9.00732C18.2179 9.04234 18.3085 9.06027 18.3999 9.06009H24.4839C25.4229 9.06115 26.3233 9.43428 26.9878 10.0978C27.6523 10.7613 28.0268 11.6611 28.0292 12.6001V22.7814C28.0299 23.7225 27.6569 24.6254 26.992 25.2915C26.3272 25.9576 25.425 26.3324 24.4839 26.3334H7.51457C6.57462 26.3324 5.67346 25.9585 5.00881 25.2939C4.34416 24.6292 3.9703 23.728 3.96924 22.7881V9.21209C3.9703 8.27214 4.34416 7.37098 5.00881 6.70633C5.67346 6.04168 6.57462 5.66782 7.51457 5.66676ZM16.5266 10.3041L16.4906 10.2708L14.0906 7.87076C14.026 7.8056 13.9492 7.7539 13.8645 7.71866C13.7798 7.68341 13.689 7.66532 13.5972 7.66543H7.51457C7.1046 7.66578 6.71154 7.82889 6.42177 8.11891C6.13201 8.40892 5.96924 8.80212 5.96924 9.21209V22.7881C5.96959 23.1978 6.13252 23.5907 6.42225 23.8804C6.71198 24.1701 7.10483 24.3331 7.51457 24.3334H24.4839C24.8936 24.3331 25.2865 24.1701 25.5762 23.8804C25.866 23.5907 26.0289 23.1978 26.0292 22.7881V12.6001C26.0289 12.1904 25.866 11.7975 25.5762 11.5078C25.2865 11.218 24.8936 11.0551 24.4839 11.0548H18.3986C17.7006 11.058 17.0289 10.7887 16.5266 10.3041Z"/>';
	// 		break;
	// 	default:
	// 		svgPath =
	// 			'<path d="M8.828 25L8.808 25.02L8.787 25H6.987C6.72468 24.9984 6.47365 24.8931 6.28872 24.707C6.10379 24.521 6 24.2693 6 24.007V7.993C6.00183 7.73038 6.1069 7.47902 6.29251 7.29322C6.47813 7.10742 6.72938 7.00209 6.992 7H25.008C25.2712 7.00027 25.5235 7.105 25.7095 7.2912C25.8955 7.47739 26 7.72981 26 7.993V24.007C25.9982 24.2696 25.8931 24.521 25.7075 24.7068C25.5219 24.8926 25.2706 24.9979 25.008 25H8.828ZM24 19V9H8V23L18 13L24 19ZM24 21.828L18 15.828L10.828 23H24V21.828ZM12 15C11.6044 15 11.2178 14.8827 10.8889 14.6629C10.56 14.4432 10.3036 14.1308 10.1522 13.7654C10.0009 13.3999 9.96126 12.9978 10.0384 12.6098C10.1156 12.2219 10.3061 11.8655 10.5858 11.5858C10.8655 11.3061 11.2219 11.1156 11.6098 11.0384C11.9978 10.9613 12.3999 11.0009 12.7654 11.1522C13.1308 11.3036 13.4432 11.56 13.6629 11.8889C13.8827 12.2178 14 12.6044 14 13C14 13.5304 13.7893 14.0391 13.4142 14.4142C13.0391 14.7893 12.5304 15 12 15Z"/>';
	// }

	const placeholder = editor.i18n('Drag and drop your files here.');

	const dragAndDropWidget = editor.c.fromHTML(
		'<div class="jodit-media-dnd">' +
			'<div class="drag-and-drop">' +
			'<div class="icon" ></div>' +
			`<span>${placeholder}</span>` +
			`<input type="file" accept="${inputAccept}" tabindex="-1" dir="auto" multiple=""/>` +
			'</div>' +
			'</div>'
	);

	editor.uploader.bind(
		dragAndDropWidget,
		resp => {
			// console.trace('resp1', resp);
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

	return dragAndDropWidget;
};
