
/**
 * @module helpers/normalize
 */

import { trim } from '../string';

/**
 * Replaces back slashes and correctly concatenates several parts of the path.
 */
export const normalizePath = (...path: string[]): string => {
	return path
		.filter(part => trim(part).length)
		.map((part, index) => {
			part = part.replace(/([^:])[\\/]+/g, '$1/');

			if (index) {
				part = part.replace(/^\//, '');
			}

			if (index !== path.length - 1) {
				part = part.replace(/\/$/, '');
			}

			return part;
		})
		.join('/');
};
