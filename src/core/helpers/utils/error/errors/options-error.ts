
/**
 * @module helpers/utils
 */

export class OptionsError extends TypeError {
	constructor(m: string) {
		super(m);
		Object.setPrototypeOf(this, OptionsError.prototype);
	}
}
