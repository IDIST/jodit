
/**
 * @module helpers/checker
 */

export function isPromise(val: any | Promise<any>): val is Promise<any> {
	return val && typeof (val as Promise<any>).then === 'function';
}
