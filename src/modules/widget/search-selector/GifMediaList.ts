// Local
import { MediaList } from 'jodit/modules/widget/search-selector/MediaList';

// Third Party
import { GiphyFetch } from '@giphy/js-fetch-api';
import type { IJodit } from 'jodit/types';
import { MediaItem } from 'jodit/modules/widget/search-selector/MediaItem';
import type { IGif } from '@giphy/js-types';
import type { ImageSelectorCallbacks } from 'jodit/modules/widget';

// Variable Section
const giphyApi = new GiphyFetch('4q6HZ1M92uI1ePVGFMUTvssZTzJGSNJ0');

// Main Section
export class GifMediaList extends MediaList {
	constructor(
		editor: IJodit,
		callbacks: ImageSelectorCallbacks,
		text: string,
		close: () => void
	) {
		super(editor, callbacks, text, close);
		this.search();
	}

	createMediaItems(dataMediaItems: IGif[]): void {
		const mediaItems = dataMediaItems?.map(
			result =>
				new MediaItem(
					this.editor,
					result?.images?.fixed_width_small.webp,
					result?.images?.fixed_width.webp,
					result?.user?.username,
					result?.url,
					result?.title,
					'500px',
					this.close
				)
		);
		for (let i = 0; i < mediaItems.length; i++) {
			this.element.appendChild(mediaItems[i].element);
		}
	}

	override async search(): Promise<any> {
		let dataMediaItems: IGif[];

		if (!this.text.length) {
			const { data } = await giphyApi.trending({
				limit: this.perPage,
				offset: this.items.length + 1,
				rating: 'g'
			});
			dataMediaItems = data;
		} else {
			const { data } = await giphyApi.search(this.text, {
				sort: 'relevant',
				lang: 'ko',
				limit: this.perPage,
				type: 'gifs'
			});
			dataMediaItems = data;
		}

		this.createMediaItems(dataMediaItems);
		return dataMediaItems;
	}
}
