// Local
import { MediaList } from 'jodit/modules/widget/search-selector/MediaList';

// Third Party
import { createApi } from 'unsplash-js';
import type { IJodit } from 'jodit/types';
import { MediaItem } from 'jodit/modules/widget/search-selector/MediaItem';
import type { Basic } from 'unsplash-js/dist/methods/photos/types';
import type { ImageSelectorCallbacks } from 'jodit/modules/widget';
const nodeFetch = require('node-fetch');

// Variable Section
const unsplashApi = createApi({
	accessKey: 'GJneOEj8Pwm9YNCh3REGQVUR8nhkz55NIiIT0r24Lvs',
	fetch: nodeFetch
});

// Main Section
export class ImageMediaList extends MediaList {
	constructor(
		editor: IJodit,
		callbacks: ImageSelectorCallbacks,
		text: string,
		close: () => void
	) {
		super(editor, callbacks, text, close);
		this.search();
	}

	createMediaItems(dataMediaItems: Basic[] | undefined): void {
		const mediaItems: MediaItem[] | undefined = dataMediaItems?.map(
			result =>
				new MediaItem(
					this.editor,
					result?.urls?.small,
					result?.urls?.full,
					result?.user?.username,
					result?.links?.html,
					result?.alt_description || undefined,
					'750px',
					this.close
				)
		);
		if (!mediaItems) return;
		for (let i = 0; i < mediaItems.length; i++) {
			this.element.appendChild(mediaItems[i].element);
		}
	}

	override async search(): Promise<any> {
		let dataMediaItems: Basic[] | undefined;

		if (!this.text.length) {
			const { response } = await unsplashApi.photos.list({
				page: ++this.page,
				perPage: this.perPage
			});
			dataMediaItems = response?.results;
		} else {
			const { response } = await unsplashApi.search.getPhotos({
				query: this.text,
				page: ++this.page,
				perPage: this.perPage
			});
			dataMediaItems = response?.results;
		}

		this.createMediaItems(dataMediaItems);
		return dataMediaItems;
	}
}
