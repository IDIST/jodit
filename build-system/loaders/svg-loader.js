module.exports = function (content) {
	this.cacheable && this.cacheable();
	this.value = content;

	return (
		'module.exports = ' +
		JSON.stringify(
			content
				.replace(/[\n\t]+/g, ' ')
				.replace(/[\s]+/g, ' ')
				.trim()
		)
	);
};

module.exports.seperable = true;
