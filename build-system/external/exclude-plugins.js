
module.exports = ({ excludePlugins }) => {
	if (
		excludePlugins &&
		Array.isArray(excludePlugins) &&
		excludePlugins.filter(Boolean).length
	) {
		console.info('Exclude plugins:', excludePlugins);

		return excludePlugins.reduce((map, pluginName) => {
			map[`jodit/plugins/${pluginName}/${pluginName}`] = '{}';
			return map;
		}, {});
	}

	return {};
};
