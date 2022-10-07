
/**
 * @module ui/form
 */

import type { IUIInputValidator } from 'jodit/types';
import { trim } from 'jodit/core/helpers/string/trim';

/**
 * Select is required
 */
export const required = <IUIInputValidator>function (select): boolean {
	if (!trim(select.value).length) {
		select.error = 'Please fill out this field';
		return false;
	}

	return true;
};
