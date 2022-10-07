
const path = require('path');

module.exports = ({ ES, superDirname }) => {
	return {
		test: /\.(js|ts)$/,
		loader: 'ts-loader',
		options: {
			transpileOnly: true,
			allowTsInNodeModules: true,
			compilerOptions: {
				target: ES
			}
		},
		include: [path.resolve(superDirname, './node_modules')]
	};
};
