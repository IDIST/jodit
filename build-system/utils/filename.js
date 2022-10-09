
module.exports.fileName = ({ argv, ES, isTest, excludeLangs, uglify }) => {
	if (argv.filename) {
		return argv.filename;
	}

	return name =>
		name +
		(ES === 'es5' || isTest ? '' : '.' + ES) +
		(excludeLangs ? '.en' : '') +
		(uglify ? '.min' : '');
};
