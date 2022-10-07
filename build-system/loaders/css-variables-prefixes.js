
module.exports = function (source) {
	this.cacheable && this.cacheable(true);
	return source.replace(/--([a-z0-9_-]+)/g, '--jd-$1');
};

module.exports.seperable = true;
