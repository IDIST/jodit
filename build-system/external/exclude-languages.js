
module.exports = ({ excludeLanguages }) => {
	if (
		excludeLanguages &&
		Array.isArray(excludeLanguages) &&
		excludeLanguages.filter(Boolean).length
	) {
		console.info('Exclude languages:', excludeLanguages);

		return excludeLanguages.reduce((map, name) => {
			if (name === 'keys') {
				return map;
			}

			map[`./${name}.js`] = '{}';
			map[`jodit/langs/${name}`] = '{}';
			return map;
		}, {});
	}

	return {};
};
