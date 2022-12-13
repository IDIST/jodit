// Local
import { MediaList } from 'jodit/modules/widget/search-selector/MediaList';

// Third Party
import {
	GiphyFetch,
	SearchOptions,
	TrendingOptions
} from '@giphy/js-fetch-api';
import { MediaItem } from 'jodit/modules/widget/search-selector/MediaItem';
import type { IGif } from '@giphy/js-types';

// Variable Section
const giphyApi = new GiphyFetch('4q6HZ1M92uI1ePVGFMUTvssZTzJGSNJ0');

// Main Section
export class GifMediaList extends MediaList {
	// constructor(
	// 	editor: IJodit,
	// 	callbacks: ImageSelectorCallbacks,
	// 	searchWord: string,
	// 	close: () => void
	// ) {
	// 	super(editor, callbacks, searchWord, close);
	// 	this.fetchData();
	// 	this.element.style.paddingBottom = '210px';
	// 	this.element.addEventListener('scroll', () => {
	// 		if (
	// 			!this.loading &&
	// 			this.element.scrollTop >
	// 				this.element.scrollHeight - 2 * this.element.clientHeight
	// 		) {
	// 			this.loading = true;
	// 			this.fetchData();
	// 		}
	// 	});
	// }

	override async fetchData(): Promise<IGif[]> {
		try {
			let result;
			const option: TrendingOptions | SearchOptions = {
				limit: this.perPage,
				offset:
					this.mediaDataUpdateType === 'replace'
						? 0
						: this.items.length,
				rating: 'g',
				type: 'gifs'
			};

			if (this.searchWord.length) {
				result = await giphyApi.search(this.searchWord, {
					...option,
					sort: 'relevant',
					lang: 'ko'
				});
			} else {
				result = await giphyApi.trending(option);
			}

			// Pagination next 여부 판단
			const { offset, count, total_count } = result.pagination;
			if (offset + count >= total_count) this.hasNext = false;
			else this.hasNext = true;

			// console.log('\n\nfetchData result ------------------');
			// console.log('this.searchWord: ', this.searchWord || 'trendy!');
			// console.log('this.appendType: ', this.mediaDataUpdateType);
			// console.log('this.items.length: ', this.items.length, '\n');
			// console.log('totalCount: ', result.pagination.total_count);
			// console.log('currentCount: ', result.pagination.count);
			// console.log('offset: ', result.pagination.offset);
			return result?.data;
		} catch (error) {
			console.log(error);
			return [];
		}
	}

	override createMediaItems(gifList: IGif[]): MediaItem[] {
		return gifList?.map(
			result =>
				new MediaItem(
					this.editor,
					{
						url: result?.images?.fixed_width_small.webp,
						height: result.images.fixed_width_small.height,
						width: result.images.fixed_width_small.width
					},
					result?.images?.fixed_width.webp,
					result?.user?.username,
					this.close
				)
		);
	}
}
