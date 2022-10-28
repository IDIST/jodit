// Jodit
import { ImageMediaList } from 'jodit/modules/widget/search-selector/ImageMediaList';
import { GifMediaList } from 'jodit/modules/widget/search-selector/GifMediaList';
import type { IJodit } from 'jodit/types';
import type { ImageSelectorCallbacks } from 'jodit/modules/widget';

// Variable Section
type imageFileType = 'image' | 'gif';

// Main Section
export class MediaLists {
	editor: IJodit;
	callbacks: ImageSelectorCallbacks;

	fileType: imageFileType;
	element: HTMLElement;
	mediaLists: { [key: string]: ImageMediaList | GifMediaList } = {};
	mediaList: ImageMediaList | GifMediaList | null = null;
	close: () => void;

	constructor(
		editor: IJodit,
		callbacks: ImageSelectorCallbacks,
		fileType: imageFileType,
		close: () => void
	) {
		this.editor = editor;
		this.callbacks = callbacks;
		this.fileType = fileType;
		this.close = close;
		this.element = editor.c.fromHTML(
			'<div class="jodit-media-lists"></div>'
		);
		const mediaList: ImageMediaList | GifMediaList =
			this.createMediaList('');
		this.setMediaList(mediaList);
	}

	private createMediaList(search: string): ImageMediaList | GifMediaList {
		let mediaList: ImageMediaList | GifMediaList;
		if (this.fileType === 'image') {
			mediaList = new ImageMediaList(
				this.editor,
				this.callbacks,
				search,
				this.close
			);
		} else {
			mediaList = new GifMediaList(
				this.editor,
				this.callbacks,
				search,
				this.close
			);
		}

		this.mediaLists[search] = mediaList;
		this.element.appendChild(mediaList.element);
		this.setMediaList(mediaList);
		return mediaList;
	}

	setMediaList(
		mediaList: ImageMediaList | GifMediaList
	): ImageMediaList | GifMediaList {
		if (this.mediaList) {
			this.mediaList.element.style.display = 'none';
		}
		this.mediaList = mediaList;
		this.mediaList.element.removeAttribute('style');
		return this.mediaList;
	}

	setSearch(search: string): ImageMediaList | GifMediaList {
		if (this.mediaLists[search]) return this.mediaLists[search];
		else return this.createMediaList(search);
	}
}
