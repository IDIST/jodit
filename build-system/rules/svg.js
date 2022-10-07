
const path = require('path');

module.exports = ({ superDirname }) => {
	return {
		test: /\.svg$/i,
		use: {
			loader: path.resolve(
				superDirname,
				'./build-system/loaders/svg-loader'
			)
		}
	};
};
