
module.exports = vars => ({
	...require('./exclude-plugins')(vars),
	...require('./exclude-languages')(vars)
});
