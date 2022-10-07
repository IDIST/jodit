
/**
 * @module helpers/size
 */

import { isArray, isPlainObject, isString } from '../checker';
import type { CanUndef } from 'jodit/types';

export function size(
	subject: CanUndef<object | string | Array<unknown>>
): number {
	if (isString(subject) || isArray(subject)) {
		return subject.length;
	}

	if (isPlainObject(subject)) {
		return Object.keys(subject).length;
	}

	return 0;
}
