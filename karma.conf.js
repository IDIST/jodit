/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

const superConfig = require('jodit/karma.conf');
const make = require('./make.js');
const path = require('path');

const pluginsEntries = make.paths.reduce((files, entry) => {
	const fullPath = path.resolve(process.cwd(), entry);
	const name = path.basename(fullPath);
	const rootPath = path.resolve(process.cwd(), './src');

	files.push(
		fullPath.replace(rootPath, 'src') + '/' + name + '.ts'
	);

	return files;
}, []);

module.exports = function (config) {
	superConfig(config);
	config.set({
		preprocessors: {
			'src/index.ts': ['webpack'],
			...pluginsEntries.reduce((acc, file) => {
				acc[file] = ['webpack'];
				return acc;
			}, {})
		},
		files: [
			'src/index.ts',
			...pluginsEntries,
			'node_modules/synchronous-promise/dist/synchronous-promise.js',
			'test/bootstrap.js',
			'./node_modules/jodit/test/bootstrap.js',
			'config.js',
			'src/**/*.test.js',
			'test/tests/acceptance/*.js',
		]
	});
};
