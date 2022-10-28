/**
 * [[include:modules/widget/file-selector/README.md]]
 * @packageDocumentation
 * @module modules/widget/file-selector
 */
// Jodit
import type { IJodit } from 'jodit/types';
import type { ImageSelectorCallbacks } from 'jodit/modules/widget';
import { MediaLists } from 'jodit/modules/widget/search-selector/MediaLists';

// Variable Section
type imageFileType = 'image' | 'gif';

// Main section
export const SearchSelectorWidget = (
	editor: IJodit,
	callbacks: ImageSelectorCallbacks,
	fileType: imageFileType,
	close: () => void
): HTMLFormElement => {
	const fileTypeLowercase = fileType.toLowerCase();

	const form: HTMLFormElement = editor.c.fromHTML(
		`<form class="jodit-form jodit-search-${fileTypeLowercase}">` +
			`<div class="jodit-search-${fileTypeLowercase}__search"><input placeholder="${editor.i18n(
				'Search ' + fileTypeLowercase
			)}"/></div>` +
			`<div class="jodit-search-${fileTypeLowercase}__search-result"></div>` +
			'</form>'
	) as HTMLFormElement;
	const searchInput: HTMLSpanElement = form.querySelector(
		`.jodit-search-${fileTypeLowercase}__search > input`
	) as HTMLDivElement;
	const resultContainer: HTMLDivElement = form.querySelector(
		`.jodit-search-${fileTypeLowercase}__search-result`
	) as HTMLDivElement;

	const mediaLists = new MediaLists(editor, callbacks, fileType, close);
	resultContainer.appendChild(mediaLists.element);

	if (searchInput) {
		searchInput.addEventListener('input', event => {
			// @ts-ignore
			mediaLists.setSearch(event?.target?.value);
		});
	}

	return form;
};
