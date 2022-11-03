/**
 * [[include:modules/widget/file-selector/README.md]]
 * @packageDocumentation
 * @module modules/widget/file-selector
 */
// Jodit
import type { IJodit } from 'jodit/types';
import type { ImageSelectorCallbacks } from 'jodit/modules/widget';
import { MediaLists } from 'jodit/modules/widget/search-selector/MediaLists';

// Style
import './search-selector.less';

// Variable Section
type imageFileType = 'image' | 'gif';

// Main section
export const SearchSelectorWidget = (
	editor: IJodit,
	callbacks: ImageSelectorCallbacks,
	fileType: imageFileType,
	close: () => void
): HTMLFormElement => {
	const fileTypeLowercase = fileType.toLowerCase();

	const form: HTMLFormElement = editor.c.fromHTML(
		`<form class="jodit-form jodit-search-${fileTypeLowercase}">` +
			'<div class="jodit-search-warpper">' +
			`<div class="jodit-search-${fileTypeLowercase}__search">` +
			`<input class="jodit-input" placeholder="${editor.i18n(
				'Search ' + fileTypeLowercase
			)}"/>` +
			'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.62338 1.88912C9.89411 1.88916 11.1384 2.25183 12.2102 2.93453C13.282 3.61723 14.1367 4.5916 14.6739 5.7432C15.2111 6.8948 15.4085 8.17578 15.2429 9.43568C15.0774 10.6956 14.5557 11.8821 13.7392 12.8558L17.7909 16.6808C17.9354 16.8403 18.0129 17.0494 18.0075 17.2645C18.0021 17.4797 17.9141 17.6846 17.7618 17.8367C17.6095 17.9888 17.4045 18.0765 17.1893 18.0816C16.9741 18.0867 16.7652 18.0088 16.6059 17.8641L12.5292 13.9808C11.3988 14.8017 10.0371 15.2429 8.64005 15.2408C7.76325 15.2408 6.89505 15.0681 6.085 14.7326C5.27495 14.397 4.53892 13.9052 3.91893 13.2852C3.29894 12.6652 2.80714 11.9292 2.47161 11.1192C2.13608 10.3091 1.96338 9.44091 1.96338 8.56412C1.96338 7.68733 2.13608 6.81912 2.47161 6.00907C2.80714 5.19902 3.29894 4.46299 3.91893 3.843C4.53892 3.22302 5.27495 2.73122 6.085 2.39568C6.89505 2.06015 7.76325 1.88745 8.64005 1.88745L8.62338 1.88912ZM8.62338 13.5733C9.61377 13.5733 10.5819 13.2796 11.4054 12.7294C12.2289 12.1791 12.8707 11.3971 13.2497 10.4821C13.6287 9.56707 13.7279 8.56023 13.5347 7.58887C13.3414 6.61751 12.8645 5.72526 12.1642 5.02495C11.4639 4.32464 10.5717 3.84772 9.60029 3.6545C8.62893 3.46129 7.62209 3.56045 6.70709 3.93946C5.79209 4.31846 5.01003 4.96029 4.45979 5.78377C3.90956 6.60725 3.61588 7.57539 3.61588 8.56578C3.61588 9.89386 4.14345 11.1675 5.08254 12.1066C6.02163 13.0457 7.29531 13.5733 8.62338 13.5733Z" fill="#A7A8AB"/></svg>' +
			'</div>' +
			`<div class="jodit-search-${fileTypeLowercase}__search-result"></div>` +
			'</div>' +
			'</form>'
	) as HTMLFormElement;
	const searchInput: HTMLSpanElement = form.querySelector(
		`.jodit-search-${fileTypeLowercase}__search > input`
	) as HTMLDivElement;
	const resultContainer: HTMLDivElement = form.querySelector(
		`.jodit-search-${fileTypeLowercase}__search-result`
	) as HTMLDivElement;

	const mediaLists = new MediaLists(editor, callbacks, fileType, close);
	resultContainer.appendChild(mediaLists.element);

	if (searchInput) {
		searchInput.addEventListener(
			'input',
			editor.async.debounce(event => {
				// @ts-ignore
				mediaLists.setSearch(event?.target?.value);
			}, editor.defaultTimeout)
		);
	}

	/**
	 * Unsplash API Guidelines: https://unsplash.com/api-terms
	 * Unsplash API Guidelines: https://support.giphy.com/hc/en-us/articles/360028134111-GIPHY-API-Terms-of-Service-
	 */
	let license;
	let licenseLink;
	switch (fileType) {
		case 'image':
			license = 'Unsplash';
			licenseLink = 'https://unsplash.com/api-terms';
			break;
		case 'gif':
			license = 'Giphy';
			licenseLink =
				'https://support.giphy.com/hc/en-us/articles/360028134111-GIPHY-API-Terms-of-Service-';
			break;
	}
	if (license) {
		form.appendChild(
			editor.c.fromHTML(
				`<div class="jodit-search-${fileTypeLowercase}__license"><a href="${licenseLink}" target="_blank">Powered by <b>${license}</b></a></div>`
			)
		);
	}

	return form;
};
