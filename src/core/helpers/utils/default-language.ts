
/**
 * @module helpers/utils
 */

import { isString } from '../checker/is-string';

/**
 * Try define user language
 */
export const defaultLanguage = (
	language?: string,
	defaultLanguage: string = 'en'
): string => {
	if (language !== 'auto' && isString(language)) {
		return language;
	}

	if (navigator.language) {
		return navigator.language.substring(0, 2);
	}

	if (document.documentElement && document.documentElement.lang) {
		return document.documentElement.lang;
	}

	return defaultLanguage;
};
