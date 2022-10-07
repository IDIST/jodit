
/**
 * @module helpers/normalize
 */

export const normalizeUrl = (...urls: string[]): string => {
	return urls
		.filter(url => url.length)
		.map(url => url.replace(/\/$/, ''))
		.join('/')
		.replace(/([^:])[\\/]+/g, '$1/');
};
