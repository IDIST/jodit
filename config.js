/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

Jodit.defaultOptions.license = 'CC3FM-00670-AS5MN-T56AZ';

// createAttributes
// Default attributes for created inside editor elements
Jodit.defaultOptions.createAttributes = {
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

Jodit.defaultOptions.toolbarTopButtonSizeUp = true;
