
/**
 * @module helpers/checker
 */

/**
 * Check if function or method was not replaced on some custom implementation
 */
export function isNativeFunction(f: Function): boolean {
	return (
		Boolean(f) &&
		(typeof f).toLowerCase() === 'function' &&
		(f === Function.prototype ||
			/^\s*function\s*(\b[a-z$_][a-z0-9$_]*\b)*\s*\((|([a-z$_][a-z0-9$_]*)(\s*,[a-z$_][a-z0-9$_]*)*)\)\s*{\s*\[native code]\s*}\s*$/i.test(
				String(f)
			))
	);
}
