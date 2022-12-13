// Jodit
import type { IJodit } from 'jodit/types';

// Main Section

interface MediaSource {
	url: string;
	width: number;
	height: number;
}
export class MediaItem {
	element: HTMLElement;

	constructor(
		editor: IJodit,
		imageThumb: MediaSource,
		image?: string,
		alt?: string,
		close?: () => void
	) {
		this.element = editor.c.fromHTML(
			`<div class="jodit-media-item masonry-item hover-border-effect skeleton-loader">
					<img class="" src="${imageThumb?.url}"/>
			</div>`
		);
		this.element.style.gridRowEnd = `span ${Math.ceil(
			(imageThumb.height * 114) / imageThumb.width / 10
		)}`;
		this.element.style.marginBottom = '4px';

		// const img = this.element.querySelector('img');
		// if (img) {
		// 	img.style.height = `${imageThumb.height}px`;
		// 	img.style.width = `${imageThumb.width}`;
		// }
		// this.element.appendChild(
		// 	editor.c.fromHTML(
		// 		``
		// 	)
		// );
		// imageDom.style.height = `${
		// 	(imageThumb.height * 114) / imageThumb.width
		// }px`;
		// this.element.firstChild?.appendChild(imageDom);

		// const masonry = document.querySelector('.masonry');
		// if (masonry) {
		// 	// const masonryContainerStyle = getComputedStyle(masonry);
		// 	// const columnGap = parseInt(
		// 	// 	masonryContainerStyle.getPropertyValue('column-gap')
		// 	// );
		// 	// document.querySelectorAll('.masonry-item').forEach(elm => {
		// 	// 	const htmlElm = elm as HTMLElement;

		// 	// 	const gridRowEnd = `span ${Math.ceil(htmlElm.offsetHeight)}`;
		// 	// 	console.log(gridRowEnd);
		// 	// 	htmlElm.style.gridRowEnd = gridRowEnd;
		// 	// });
		// }

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
