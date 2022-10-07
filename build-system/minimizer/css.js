
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = () =>
	new CssMinimizerPlugin({
		parallel: true,
		minimizerOptions: {
			preset: [
				'advanced',
				{
					discardComments: { removeAll: true },
					zindex: false
				}
			]
		}
	});
