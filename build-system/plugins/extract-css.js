
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { fileName } = require('../utils/filename');

module.exports = vars => {
	return new MiniCssExtractPlugin({
		filename: fileName(vars)('[name]') + '.css'
	});
};
