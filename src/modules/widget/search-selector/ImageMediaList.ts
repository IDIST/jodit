// Local
import { MediaList } from 'jodit/modules/widget/search-selector/MediaList';

// Third Party
import { createApi } from 'unsplash-js';
import { MediaItem } from 'jodit/modules/widget/search-selector/MediaItem';
import type { Basic } from 'unsplash-js/dist/methods/photos/types';
const nodeFetch = require('node-fetch');

// Variable Section
const unsplashApi = createApi({
	accessKey: 'GJneOEj8Pwm9YNCh3REGQVUR8nhkz55NIiIT0r24Lvs',
	fetch: nodeFetch
});

// Main Section
export class ImageMediaList extends MediaList {
	// constructor(
	// 	editor: IJodit,
	// 	callbacks: ImageSelectorCallbacks,
	// 	text: string,
	// 	close: () => void
	// ) {
	// 	super(editor, callbacks, text, close);
	// }

	// override async search(): Promise<any> {
	// 	let dataMediaItems: Basic[] | undefined;

	// 	if (!this.searchWord.length) {
	// 		const { response } = await unsplashApi.photos.list({
	// 			page: ++this.page,
	// 			perPage: this.perPage
	// 		});
	// 		dataMediaItems = response?.results;
	// 	} else {
	// 		const { response } = await unsplashApi.search.getPhotos({
	// 			query: this.searchWord,
	// 			page: ++this.page,
	// 			perPage: this.perPage
	// 		});
	// 		dataMediaItems = response?.results;
	// 	}

	// 	this.createMediaItems(dataMediaItems);
	// 	return dataMediaItems;
	// }

	override async fetchData(): Promise<Basic[]> {
		try {
			let dataMediaItems: Basic[] | undefined;

			if (this.searchWord.length) {
				const { response } = await unsplashApi.search.getPhotos({
					query: this.searchWord,
					page: ++this.page,
					perPage: this.perPage
				});
				console.log(response);
				dataMediaItems = response?.results;
			} else {
				const { response } = await unsplashApi.photos.list({
					page: ++this.page,
					perPage: this.perPage
				});
				console.log(response);
				dataMediaItems = response?.results;
			}

			console.log(this.page);

			if (dataMediaItems) {
				return dataMediaItems;
			}
			return [];
		} catch (error) {
			console.log(error);
			return [];
		}
	}

	override createMediaItems(dataMediaItems: Basic[]): MediaItem[] {
		return dataMediaItems?.map(
			result =>
				new MediaItem(
					this.editor,
					{
						url: result?.urls?.small,
						width: result.width,
						height: result.height
					},
					result?.urls?.full,
					result?.user?.username,
					this.close
				)
		);
	}
}
