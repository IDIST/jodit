
const path = require('path');

module.exports = ({ superDirname, uglify, ES }) => {
	return {
		test: /\.ts$/,
		loader: 'ts-loader',
		options: {
			transpileOnly: uglify,
			allowTsInNodeModules: true,
			compilerOptions: {
				target: ES
			}
		},
		include: [path.resolve(superDirname, './src/')],
		exclude: [/langs\/[a-z]{2}\.ts/, /langs\/[a-z]{2}_[a-z]{2}\.ts/]
	};
};
