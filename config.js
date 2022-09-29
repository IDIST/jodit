/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

Jodit.defaultOptions.license = 'CC3FM-00670-AS5MN-T56AZ';

// buttons
// The list of buttons that appear in the editor's toolbar on large places (≥ options.sizeLG). Note - this is not the width of the device, the width of the editor
const buttons = [
	// Media
	'emoji',
	'image',
	'gif',
	'video',
	'file',
	'\n',
	// Do
	'undo',
	'redo',
	'|',
	// Font
	'paragraph',
	'brush',
	'bold',
	'italic',
	'|',
	'\n',
	// Align
	'left',
	'center',
	'right',
	'|',
	// List
	'ul',
	'ol',
	'|',
	// Table
	'table'
];
Jodit.defaultOptions.buttons = buttons;
Jodit.defaultOptions.buttonsMD = buttons; // The list of buttons that appear in the editor's toolbar on medium places (≥ options.sizeMD).
Jodit.defaultOptions.buttonsSM = buttons; // The list of buttons that appear in the editor's toolbar on small places (≥ options.sizeSM).
Jodit.defaultOptions.buttonsXS = buttons; // The list of buttons that appear in the editor's toolbar on small places (≥ options.sizeSM).
// Jodit.defaultOptions.extraButtons = {} // These buttons list will be added to option.buttons

// Plugins
// Init and download extra plugins. It will try load %SCRIPT_PATH%/plugins/emoji/emoji.js and after load will try init it
Jodit.defaultOptions.extraPlugins = [
	'autocomplete',
	'backup',
	'change-case',
	'color-picker',
	'emoji',
	'finder',
	'google-search',
	'paste-code',
	'keyboard',
	'show-blocks',
	'button-generator',
	'tune-block',
	'highlight-signature',
	'google-maps',
	'page-break',
	'export-docs',
	'iframe-editor',
	'paste-from-word-pro'
];

// createAttributes
// Default attributes for created inside editor elements
Jodit.defaultOptions.createAttributes = {
	// div: {
	// 	class: 'test'
	// },
	// ul: function (ul) {
	// 	ul.classList.add('ui-test');
	// },
	table: {
		style: 'border-collapse:collapse; width: 100%; border: 1px solid #bdbdbd;'
	},
	tbody: {
		style: 'display: table; width: 100%; height: 100%;'
	},
	th: {
		style: 'border: 1px solid #bdbdbd;'
	},
	td: {
		style: 'border: 1px solid #bdbdbd;'
	}
};

// Font
Jodit.defaultOptions.defaultLineHeight = 1.5; // Default line spacing for the entire editor

// iframe
Jodit.defaultOptions.iframe = false;

// editorCssClass
Jodit.defaultOptions.editorCssClass = 'superclub'; // Class name that can be appended to the editor

// Language
Jodit.defaultOptions.i18n = {
	ko: {
		gif: 'GIF',
		'Insert Emoji': '이모지 추가',
		'Search emoji': '이모지 검색',
		'Smileys & Emotion': 'Smileys & Emotion',
		'People & Body': 'People & Body',
		'Animals & Nature': 'Animals & Nature',
		'Food & Drink': 'Food & Drink',
		'Travel & Places': 'Travel & Places',
		Activities: 'Activities',
		Objects: 'Objects',
		Flags: 'Flags',
		'Click to tune': '조정하려면 클릭'
	}
};

// Style
Jodit.defaultOptions.zIndex = 1;
Jodit.defaultOptions.inline = false; // Inline editing mode
Jodit.defaultOptions.fullsize = false; // Open WYSIWYG in full screen
Jodit.defaultOptions.hidePoweredByJodit = true; // Hide the link to the Jodit site at the bottom of the editor
// Jodit.defaultOptions.indentMargin = 10; // The number of pixels to use for indenting the current line.
Jodit.defaultOptions.theme = 'default';
Jodit.defaultOptions.toolbar = true; // Boolean, whether the toolbar should be shown. Alternatively, a valid css-selector-string to use an element as toolbar container.

// Function
Jodit.defaultOptions.addNewLineOnDBLClick = true; // On dbl click on empty space of editor it add new P element
Jodit.defaultOptions.addNewLineDeltaShow = false; // Absolute delta between cursor position and edge(top or bottom) of element when show line
Jodit.defaultOptions.addNewLineTagsTriggers = [
	'span',
	'p',
	'h1',
	'h2',
	'h3',
	'h4',
	'h5',
	'h6',
	'table',
	'iframe',
	'img',
	'hr',
	'pre',
	'jodit'
];

// File
Jodit.defaultOptions.uploader = {
	url: 'https://xdsoft.net/jodit/finder/?action=fileUpload'
};
Jodit.defaultOptions.filebrowser = {
	ajax: { url: 'https://xdsoft.net/jodit/finder/' },
	height: 580
};

// Image
Jodit.defaultOptions.image = {
	// dialogWidth: number,
	editAlign: true, // Show Alignment selector
	editAlt: false, // Show edit 'alt' input
	editBorderRadius: false,
	editClass: false, // Show edit classNames input
	editId: false, // Show edit ID input
	editLink: false, // Show edit image link's options
	editMargins: false, // Show edit margin inputs
	editSize: true, // Show edit image size's inputs
	editSrc: false, // Show edit 'src' input
	editStyle: false, // Show style edit input
	editTitle: false, // Show edit 'title' input
	openOnDblClick: true, // Open editing dialog after double click on image
	selectImageAfterClose: true, // Select image after close dialog
	showPreview: true, // Show preview image
	useImageEditor: false // Show crop/resize btn
};

Jodit.defaultOptions.placeholder = ''; // Default placeholder
