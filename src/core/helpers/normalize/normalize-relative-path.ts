
/**
 * @module helpers/normalize
 */

export const normalizeRelativePath = (path: string): string => {
	const sections = path.split('/'),
		builder = sections.reduce((builder, section) => {
			switch (section) {
				case '': {
					break;
				}
				case '.': {
					break;
				}
				case '..': {
					builder.pop();
					break;
				}
				default: {
					builder.push(section);
					break;
				}
			}
			return builder;
		}, [] as string[]);

	return builder.join('/') + (path.endsWith('/') ? '/' : '');
};
