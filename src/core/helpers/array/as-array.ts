
/**
 * @module helpers/array
 */

import { isArray } from '../checker/is-array';

/**
 * Always return Array
 */
export const asArray = <T>(a: T[] | T): T[] => (isArray(a) ? a : [a]);
