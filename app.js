const editor = new Jodit('#editor', {
	iframe: false,
	toolbar: true,
	toolbarStyle: 'top',
	editorCssClass: '',
	minHeight: '500px',
	// Media
	uploader: {
		url: 'https://xdsoft.net/jodit/finder/index.php?action=fileUpload'
	},
	filebrowser: {
		ajax: {
			url: 'https://xdsoft.net/jodit/finder/index.php'
		}
	}
});

editor.waitForReady().then(() => {
	const names = [
		'@mary',
		'@jain',
		'@entany',
		'@isaak',
		'@ivan',
		'@fedya',
		'@yakov',
		'@jhon',
		'@lena',
		'@elvin'
	];

	editor.e.fire('registerAutocompleteSource', query => {
		return names
			.filter(value => value.indexOf(query) === 0)
			.map(value => ({
				title: value,
				value
			}));
	});
});

var today = new Date();
var date =
	today.getFullYear() + '.' + (today.getMonth() + 1) + '.' + today.getDate();
var time = today.getHours() + ':' + today.getMinutes();
var dateTime = date + ' ' + time;
document.querySelector('#time').innerHTML = dateTime
