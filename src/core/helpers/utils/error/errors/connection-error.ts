
/**
 * @module helpers/utils
 */

export class ConnectionError extends Error {
	constructor(m: string) {
		super(m);
		Object.setPrototypeOf(this, ConnectionError.prototype);
	}
}
