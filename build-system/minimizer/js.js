
const MinimizeJSPlugin = require('terser-webpack-plugin');
const os = require('os');

module.exports = ({ ESNext, isTest, banner }) =>
	new MinimizeJSPlugin({
		parallel: os.cpus().length,
		extractComments: false,

		exclude: './src/langs',

		terserOptions: {
			ecma: ESNext ? 8 : 5,

			mangle: {
				reserved: ['Jodit']
			},

			compress: {
				unsafe_arrows: ESNext,
				unsafe_methods: ESNext,
				unsafe: ESNext,

				drop_console: !isTest,
				drop_debugger: !isTest,

				pure_getters: true,
				unsafe_comps: true,

				pure_funcs: ['assert'],

				passes: 4
			},

			output: {
				comments: false,
				beautify: false,
				preamble: banner
			}
		}
	});
