
/**
 * @module helpers/checker
 */

import { isString } from './is-string';

export const isLicense = (license: string): boolean =>
	isString(license) &&
	license.length === 23 &&
	/^[a-z0-9]{5}-[a-z0-9]{5}-[a-z0-9]{5}-[a-z0-9]{5}$/i.test(license);
