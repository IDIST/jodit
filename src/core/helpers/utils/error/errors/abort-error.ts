
/**
 * @module helpers/utils
 */

export class AbortError extends Error {
	constructor(m: string) {
		super(m);
		Object.setPrototypeOf(this, AbortError.prototype);
	}
}
