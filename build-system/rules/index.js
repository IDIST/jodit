
const path = require('path');

module.exports = variables => {
	return [
		require('./css')(variables),
		require('./extra-typescript')(variables),
		require('./langs')(variables),
		require('./internal-typescript')(variables),
		require('./svg')(variables)
	];
};
