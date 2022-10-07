
const webpack = require('webpack');

module.exports = ({ pkg, isProd, ESNext, isTest, ES, mode, excludeLangs }) => {
	return new webpack.DefinePlugin({
		appVersion: JSON.stringify(pkg.version),
		isProd,
		isTest,
		isESNext: ESNext,
		'process.env': {
			HOMEPAGE: JSON.stringify(pkg.homepage),
			TARGET_ES: JSON.stringify(ES),
			NODE_ENV: JSON.stringify(mode),
			EXCLUDE_LANGS: JSON.stringify(excludeLangs)
		}
	});
};
