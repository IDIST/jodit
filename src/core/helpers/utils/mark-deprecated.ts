
/**
 * @module helpers/utils
 */

/**
 * By default, terser will remove all `console.*` but
 * if you use this object it will not be
 */
export const cns = console;

/**
 * Mark function as deprecated
 */
export function markDeprecated(
	method: Function,
	names: string[] = [''],
	ctx: any = null
) {
	return (...args: any[]): void => {
		cns.warn(
			`Method "${names[0]}" deprecated.` +
				(names[1] ? ` Use "${names[1]}" instead` : '')
		);
		return method.call(ctx, ...args);
	};
}
