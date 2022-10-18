const path = require('path');

module.exports = ({ superDirname }) => {
	return {
		test: /\.(js)$/,
		use: [
			{
				loader: path.resolve(__dirname, '../loaders/lang-loader.js')
			}
		],
		include: path.resolve(superDirname, './src/langs'),
		exclude: path.resolve(superDirname, './src/langs/index.ts')
	};
};
