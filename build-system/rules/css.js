
module.exports = vars => {
	return {
		test: /\.(less|css)$/,
		use: require('../loaders/style')(vars)
	};
};
