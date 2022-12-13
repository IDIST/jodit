import type { IJodit } from 'jodit/types';
import type { ImageSelectorCallbacks } from 'jodit/modules/widget';
import type { MediaItem } from './MediaItem';
import type { IGif } from '@giphy/js-types';
// import type { IGif } from '@giphy/js-types';
// import type { Basic } from 'unsplash-js/dist/methods/photos/types';

// Variable Section
type MediaDataUpdateType = 'replace' | 'append';

// Main Section
export class MediaList {
	editor: IJodit;
	callbacks: ImageSelectorCallbacks;

	element: HTMLElement;
	searchWord: string = '';
	page: number = 0;
	perPage: number = 30;
	hasNext: boolean = true;
	mediaDataUpdateType: MediaDataUpdateType;
	items: MediaItem[] = [];
	close: () => void;

	moreLoading: boolean = true;

	constructor(
		editor: IJodit,
		callbacks: ImageSelectorCallbacks,
		searchWord: string,
		close: () => void
	) {
		this.editor = editor;
		this.callbacks = callbacks;
		this.searchWord = searchWord;
		this.mediaDataUpdateType = 'replace';
		this.close = close;
		this.element = editor.c.fromHTML('<div class="jodit-media"></div>');
		this.load();
	}

	// load -> fetchData -> create MediaItems -> generate HTML Element
	async load(): Promise<void> {
		const data = await this.fetchData();
		if (data?.length || this.mediaDataUpdateType === 'append') {
			this.generateContent(this.createMediaItems(data));
		} else {
			this.generateEmpty();
		}
	}

	// 신규 검색
	search(searchWord: string): void {
		this.mediaDataUpdateType = 'replace';
		this.searchWord = searchWord;
		this.load();
	}

	// 데이터 로드
	async fetchData(): Promise<any> {
		throw Error('Need implementation');
		return [];
	}

	// new MediaItem 리스트 생성
	createMediaItems(data: IGif[] | any): MediaItem[] {
		throw Error('Need implementation');
		return [];
	}

	generateContent(mediaItems: MediaItem[]): void {
		// empty element 제거
		this.element.querySelector('.jodit-media-empty')?.remove();

		// 리스트 element
		const contentElm = this.element.querySelector('.jodit-media-list');
		// 없으면 만들기
		if (!contentElm) {
			this.element.appendChild(
				this.editor.c.fromHTML(
					`<div class="jodit-media-list masonry" data-text="${this.searchWord}"></div>`
				)
			);
			this.generateContent(mediaItems);
			return;
		}

		(contentElm as HTMLElement).style.paddingBottom = '24px';
		// 스크롤 더보기 기능
		contentElm.addEventListener('scroll', () => {
			if (
				contentElm.scrollTop >
					contentElm.scrollHeight - 2 * contentElm.clientHeight && // 스크롤이 특정 위치에 왔는지
				!this.moreLoading && // 로딩중인지
				this.hasNext // 다음 페이지가 있는지
			) {
				this.moreLoading = true;
				this.load();
			}
		});

		if (this.mediaDataUpdateType === 'replace') {
			contentElm.replaceChildren(...mediaItems.map(item => item.element));
			this.items = mediaItems;
			this.mediaDataUpdateType = 'append';
		} else {
			contentElm.append(...mediaItems.map(item => item.element));
			this.items = [...this.items, ...mediaItems];
		}

		this.moreLoading = false;
	}

	generateEmpty(): void {
		this.element.replaceChildren(
			...[
				this.editor.c.fromHTML(
					'<div class="jodit-media-empty">' +
						`No results found with \n\`${this.searchWord}\`.` +
						'</div>'
				)
			]
		);
		return;
	}
}
