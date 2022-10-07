
/**
 * @module modules/file-browser
 */

import type { IFileBrowser } from 'jodit/types';

/**
 * Removes a file from the server
 */
export function deleteFile(
	fb: IFileBrowser,
	name: string,
	source: string
): Promise<void> {
	return fb.dataProvider
		.fileRemove(fb.state.currentPath, name, source)
		.then(message => {
			fb.status(message || fb.i18n('File "%s" was deleted', name), true);
		})
		.catch(fb.status);
}
