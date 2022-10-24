/**
 * [[include:modules/widget/file-selector/README.md]]
 * @packageDocumentation
 * @module modules/widget/file-selector
 */
// Jodit
import type { IJodit } from 'jodit/types';
import type { ImageSelectorCallbacks } from 'jodit/modules/widget';
import { MediaLists } from 'jodit/modules/widget/search-selector/MediaLists';

// class SearchApi {
// 	private fileType: FileType;
//
// 	constructor(fileType: FileType) {
// 		this.fileType = fileType;
// 	}
//
//
// 	async searchItems(search: string): Promise<any> {
// 		let result;
//
// 		const mediaList = mediaLists.getList(search, this.fileType);
// 		mediaList.load();
//
// 			const result = await this.giphyApi.trending();
// 			const { response } = await this.unsplashApi.photos.list({});
// 			if (!response?.results?.length) return;
// 		}
// 		return result;
// 	}
//
// 	async getCategories(): Promise<any> {
// 		let result;
// 		if (this.fileType === 'GIF') {
// 			result = await this.giphyApi.categories();
// 		} else {
// 			result = await this.unsplashApi.topics.list({});
// 			console.log('getAll', result);
// 		}
// 		return result;
// 	}
// }

// Main section
export const SearchSelectorWidget = (
	editor: IJodit,
	callbacks: ImageSelectorCallbacks,
	fileType: 'IMAGE' | 'GIF',
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
