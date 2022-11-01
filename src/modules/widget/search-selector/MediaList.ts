import type { MediaItem } from 'jodit/modules/widget/search-selector/MediaItem';
import type { IJodit } from 'jodit/types';
import type { ImageSelectorCallbacks } from 'jodit/modules/widget';

// Main Section
export class MediaList {
	editor: IJodit;
	callbacks: ImageSelectorCallbacks;

	element: HTMLElement;
	text: string = '';
	page: number = 0;
	perPage: number = 30;
	items: MediaItem[] = [];
	close: () => void;

	constructor(
		editor: IJodit,
		callbacks: ImageSelectorCallbacks,
		text: string,
		close: () => void
	) {
		this.editor = editor;
		this.callbacks = callbacks;
		this.text = text;
		this.close = close;

		this.element = editor.c.fromHTML(
			`<div class="jodit-media-list grid" data-text="${this.text}"></div>`
		);
	}

	search(search: string): void {
		throw Error('Need implementation');
	}
}
