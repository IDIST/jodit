
/**
 * @module helpers/array
 */

/**
 * Split separated elements
 */
export function splitArray(a: string): string[];

export function splitArray<T extends any[]>(a: T): T;

export function splitArray<T extends any[]>(a: T | string): T | string[];

export function splitArray<T extends any[]>(a: T | string): T | string[] {
	return Array.isArray(a) ? a : a.split(/[,\s]+/);
}
