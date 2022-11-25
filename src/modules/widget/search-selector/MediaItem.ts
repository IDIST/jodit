// Jodit
import type { IJodit } from 'jodit/types';

// Main Section
export class MediaItem {
	element: HTMLElement;

	constructor(
		editor: IJodit,
		imageThumb?: string,
		image?: string,
		username?: string,
		link?: string,
		alt?: string,
		width?: string,
		close?: () => void
	) {
		this.element = editor.c.fromHTML(
			`<div class="jodit-media-item grid-item hover-border-effect skeleton-loader"><img class="" src="${imageThumb}"/></div>`
		);

		this.element.addEventListener('click', () => {
			const img = editor.c.fromHTML(
				`<div><img style="width: ${
					editor.o.imageDefaultWidth || '100%'
				}px;" src="${image}" alt="${alt}"/></div><p></p>`
			);
			editor.s.insertHTML(img);
			if (close) close();
		});
	}
}
