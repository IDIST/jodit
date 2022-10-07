
const webpack = require('webpack');

module.exports = ({ banner }) => {
	return new webpack.BannerPlugin({
		banner,
		raw: true,
		entryOnly: true
	});
};
