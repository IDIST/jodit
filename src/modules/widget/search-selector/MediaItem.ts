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
				`<p style="width: 100%; text-align: center;"><img style="display: inline-block; width: ${width};" src="${image}" alt="${alt}"/></p>
		<p></p>`
			);
			editor.s.insertHTML(img);
			if (close) close();
		});
	}
}
