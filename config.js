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

// defaultAjaxOptions
// A set of key/value pairs that configure the Ajax request. All settings are optional
// defaultAjaxOptions: AjaxOptions

// Font
Jodit.defaultOptions.defaultLineHeight = 1.5; // Default line spacing for the entire editor

// defaultTimeout
// defaultTimeout: number = 100 // Timeout of all asynchronous methods

//	direction
// Jodit.defaultOptions.direction = 'ltr'; // The writing direction of the language which is used to create editor content. Allowed values are: '' (an empty string) – Indicates that content direction will be the same as either the editor UI direction or the page element direction. 'ltr' – Indicates a Left-To-Right text direction (like in English). 'rtl' – Indicates a Right-To-Left text direction (like in Arabic).

// disablePlugins
// disablePlugins: 'table,iframe', // Do not init these plugins

// draggableTags
// draggableTags: string | string[], // Draggable elements

// iframe
Jodit.defaultOptions.iframe = true;
// Jodit.defaultOptions.iframeStyle =
// 	'html{margin: 40px;}' +
// 	'body{padding:10px;background:transparent;color:#000;position:relative;z-index:2;user-select:auto;margin:0px;overflow:hidden; text-align: center;}' +
// 	'body:after{content:"";clear:both;display:block}';
// Jodit.defaultOptions.iframeCSSLinks = ['styles/default.css'];
// Jodit.defaultOptions.editHTMLDocumentMode = true; // Allow editing the entire HTML document(html, head)

// editorCssClass
Jodit.defaultOptions.editorCssClass = 'superclub'; // Class name that can be appended to the editor

// File
Jodit.defaultOptions.enableDragAndDropFileToEditor = true; // Enable drag and drop file editor

// Language
Jodit.defaultOptions.language =
	navigator.language && navigator.language.substr(0, 2); // Language by default. if auto language set by document.documentElement.lang || (navigator.language && navigator.language.substr(0, 2)) || (navigator.browserLanguage && navigator.browserLanguage.substr(0, 2)) || 'en'
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
Jodit.defaultOptions.processPasteFromWord = false; // Handle pasting of HTML - similar to a fragment copied from MSWord
Jodit.defaultOptions.processPasteHTML = false; // Handle pasted text - similar to HTML
Jodit.defaultOptions.askBeforePasteFromWord = false; // Show the paste dialog if the html is similar to what MSWord gives when copying.
Jodit.defaultOptions.askBeforePasteHTML = false; // Ask before paste HTML in WYSIWYG mode
// defaultActionOnPaste: InsertMode = INSERT_AS_HTML // Default insert method
// defaultActionOnPasteFromWord: 'insert_clear_html', // Default insert method from word, if not define, it will use defaultActionOnPaste instead
Jodit.defaultOptions.cleanHTML = {
	cleanOnPaste: false
	// allowTags: 'p,a[href],table,tr,td, img[src=1.png]' // allow only <p>,<a>,<table>,<tr>,<td>,<img> tags and for <a> allow only `href` attribute and <img> allow only `src` attribute == '1.png'
};

// Autofocus
Jodit.defaultOptions.autofocus = true;
Jodit.defaultOptions.cursorAfterAutofocus = 'end';

// Font
Jodit.defaultOptions.style = false; // The font of editor

// Color
Jodit.defaultOptions.colorPickerDefaultTab = 'color'; // The default tab color picker
Jodit.defaultOptions.colors = ['#ff0000', '#00ff00', '#0000ff']; // The colors in HEX representation to select a color for the background and for the text in colorpicker
Jodit.defaultOptions.showBrowserColorPicker = false; // shows a INPUT[type=color] to open the browser color picker, on the right bottom of widget color picker

// Media
// mediaBlocks
// mediaBlocks: string[]
// Media tags
//
// mediaFakeTag
// mediaFakeTag: string
// Decorate media element with tag
//
// 	mediaInFakeBlock
// mediaInFakeBlock: boolean
// Decorate media elements

// File
Jodit.defaultOptions.uploader = {
	url: 'https://xdsoft.net/jodit/finder/?action=fileUpload'
};
Jodit.defaultOptions.filebrowser = {
	ajax: { url: 'https://xdsoft.net/jodit/finder/' },
	height: 580
};

// Image
Jodit.defaultOptions.imageDefaultWidth = 500; // Image size defaults to a larger image
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
Jodit.defaultOptions.imageProcessor = { replaceDataURIToBlobIdInView: false };
// Jodit.defaultOptions.imageeditor: ImageEditorOptions

// Limit
Jodit.defaultOptions.limitChars = false; // limit chars count
Jodit.defaultOptions.limitHTML = false; // limit html chars count
Jodit.defaultOptions.limitWords = false; // limit words count

// Link
// link: { followOnDblClick: boolean; formClassName?: string; formTemplate: ((editor: IJodit) => string | HTMLElement | IUIForm); hotkeys: string[]; modeClassName: "input" | "select"; noFollowCheckbox: boolean; openInNewTabCheckbox: boolean; processPastedLink: boolean; processVideoLink: boolean; selectMultipleClassName: boolean; selectOptionsClassName: IUIOption[]; selectSizeClassName?: number }
// Jodit.defaultOptions.link = {
// 	followOnDblClick: boolean, // Follow link address after dblclick
// 	formClassName?: string,
// 	formTemplate: ((editor: IJodit) => string | HTMLElement | IUIForm),
// 	hotkeys: string[],
// 	modeClassName: "input" | "select", // Use an input text to ask the classname or a select or not ask
// 	noFollowCheckbox: boolean, // Show no follow checkbox in link dialog.
// 	openInNewTabCheckbox: boolean, // Show Open in new tab checkbox in link dialog.
// 	processPastedLink: boolean, // Wrap inserted link
// 	processVideoLink: boolean, // Replace inserted youtube/vimeo link to iframe
// 	selectMultipleClassName: boolean, // Allow multiple choises (to use with modeClassName="select")
// 	selectOptionsClassName: IUIOption[], // The list of the option for the select (to use with modeClassName="select")
// 	selectSizeClassName: number // The size of the select (to use with modeClassName="select")
// }

// memorizeChoiceWhenPasteFragment
// memorizeChoiceWhenPasteFragment: boolean
// When the user inserts a piece of HTML, the plugin will ask - How to insert it. If after that user insert the same fragment again, the previous option will be used without extra question.
//
// namespace
// namespace: string = ''
// nl2brInPlainText
// nl2brInPlainText: boolean
// Inserts HTML line breaks before all newlines in a string
//
// observer
// observer: { enable: boolean; maxHistoryLength: number; timeout: number }
// Deprecated
// Instead use history
//
// Type declaration
// enable: boolean
// maxHistoryLength: number
// Limit of history length
//
// timeout: 0Delay on every change

// placeholder
Jodit.defaultOptions.placeholder = ''; // Default placeholder
Jodit.defaultOptions.useInputsPlaceholder = true; // Use a placeholder from original input field, if it was set

// popup
// popup: IDictionary<(string | IControlType<IViewBased<IViewOptions> | IJodit | IFileBrowser<IFileBrowserOptions>, IToolbarButton>)[] | ((editor: IJodit, target: undefined | HTMLElement, close: (() => void)) => string | HTMLElement | (string | IControlType<IViewBased<IViewOptions> | IJodit | IFileBrowser<IFileBrowserOptions>, IToolbarButton>)[]), string>

// Readonly
Jodit.defaultOptions.readonly = false; // Change the read-only state of the editor

// removeButtons
// removeButtons: string[] = []
// Do not display these buttons that are on the list
//
// Example
// Jodit.make('#editor2', {
// 	removeButtons: ['hr', 'source']
// });

// Resize
Jodit.defaultOptions.resizer = {
	useAspectRatio: ['img'], // save only for images (default value)
	min_width: 100,
	min_height: 100
};
Jodit.defaultOptions.allowResizeX = false;
Jodit.defaultOptions.allowResizeY = false;
Jodit.defaultOptions.allowResizeTags = [
	'img',
	'iframe',
	// 'table',
	'jodit'
];

// Safe
// Jodit.defaultOptions.safePluginsList = ['about'];
// Jodit.defaultOptions.extraPlugins = ['yourPluginDev'];

// Save
// saveHeightInStorage: boolean;
// saveModeInStorage: boolean = false; // if set true then the current mode is saved in a cookie , and is restored after a reload of the page
// saveSelectionOnBlur: boolean;

// Search
// Jodit.make('#editor', {
// 	search: {
// 		fuzzySearch: (needle, haystack, offset) => { // Function to search for a string within a substring. The default implementation is fuzzySearchIndex But you can write your own. It must implement the FuzzySearch interface.
// 			return [haystack.indexOf(needle, offset), needle.length];
// 		}
// 	}
// })

// select
Jodit.defaultOptions.select = {
	normalizeSelectionBeforeCutAndCopy: false
	// When the user selects the elements of the list - from the beginning to the end from the inside - when copying, we change the selection to cover the entire selected container,
	// <ul><li>|test|</li></ul> will be |<ul><li>test</li></ul>| <ul><li>|test|</li><li>|test</li></ul> will be <ul>|<li>test</li><li>|test</li></ul>
};

// ShadowRoot
// shadowRoot: Nullable<ShadowRoot> = null // Shadow root if Jodit was created in it

// ShowBrowserColorPicker

//
// showCharsCounter
// showCharsCounter: boolean
// showPlaceholder
// showPlaceholder: boolean
// Show placeholder
//
// Example
// var editor = new Jodit('#editor', {
// 	showPlaceholder: false
// });
// showTooltip
// showTooltip: boolean = true
// Show tooltip after mouse enter on the button
//
// showTooltipDelay
// showTooltipDelay: number = 1000
// Delay before show tooltip
//

//
// sourceEditor
// sourceEditor: "area" | "ace" | ((jodit: IJodit) => ISourceEditor)
// sourceEditorCDNUrlsJS
// sourceEditorCDNUrlsJS: string[]
// CDN URLs for ACE editor
//
// sourceEditorNativeOptions
// sourceEditorNativeOptions: { highlightActiveLine: boolean; mode: string; showGutter: boolean; theme: string; wrap: string | number | boolean }
// Options for ace editor
//
// Example
// Jodit.make('#editor', {
// 	showGutter: true,
// 	theme: 'ace/theme/idle_fingers',
// 	mode: 'ace/mode/html',
// 	wrap: true,
// 								§		 * 	highlightActiveLine: true
// })
// Type declaration
// highlightActiveLine: boolean
// mode: string
// showGutter: boolean
// theme: string
// wrap: string | number | boolean
// specialCharacters
// specialCharacters: string[]
// spellcheck
// spellcheck: boolean
// Options specifies whether the editor is to have its spelling and grammar checked or not
//
// See
// http://www.w3schools.com/tags/att_global_spellcheck.asp
//
// 	statusbar
// statusbar: boolean = true
// Boolean, whether the statusbar should be shown.
//

//
// Example
// Jodit.make('#editor', {
// 	style: {
// 		font: '12px Arial'
// 	}
// });
// styleValues
// styleValues: IDictionary<any, string> = {}
// Dictionary of variable values in css, a complete list can be found here https://github.com/xdan/jodit/blob/master/src/styles/variables.less#L25
//
// 	Example
// const editor = Jodit.make('#editor', {
// 	styleValues: {
// 		'color-text': 'red',
// 		colorBorder: 'black',
// 		'color-panel': 'blue'
// 	}
// });
// tab
// tab: { tabInsideLiInsertNewList: boolean }
// Type declaration
// tabInsideLiInsertNewList: boolean
// Pressing Tab inside LI will add an internal list
//
// tabIndex
// tabIndex: number = -1
// The tabindex global attribute is an integer indicating if the element can take input focus (is focusable), if it should participate to sequential keyboard navigation, and if so, at what position. It can take several values

// Table
Jodit.defaultOptions.table = {
	selectionCellStyle: true,
	useExtraClassesOptions: true
};
Jodit.defaultOptions.tableAllowCellResize = true;
Jodit.defaultOptions.tableAllowCellSelection = true;

// Toolbar
Jodit.defaultOptions.toolbarAdaptive = false; // After resize it will change buttons set for different sizes
Jodit.defaultOptions.toolbarButtonSize = 'large'; // Size of icons in the toolbar (can be "small", "middle", "large")
Jodit.defaultOptions.toolbarDisableStickyForMobile = false;
Jodit.defaultOptions.toolbarInline = false;
// toolbarInlineDisableFor: string | string[]
// toolbarInlineDisabledButtons: string[]
// toolbarInlineForSelection: boolean
Jodit.defaultOptions.toolbarSticky = false;
// toolbarStickyOffset: 100 // For example, in Joomla, the top menu bar closes Jodit toolbar when scrolling. Therefore, it is necessary to move the toolbar Jodit by this amount more

// triggerChangeEvent
// triggerChangeEvent: boolean = true
// After all changes in editors for textarea will call change trigger
//
// Example
// var editor = Jodit.make('#editor');
// document.getElementById('editor').addEventListener('change', function () {
// 	console.log(this.value);
// })

// useNativeTooltip
// useNativeTooltip: boolean = false
// Instead of create custop tooltip - use native title tooltips
//
// usePopupForSpecialCharacters
// usePopupForSpecialCharacters: boolean
// useSearch
// useSearch: boolean
// Enable custom search plugin search
//
// useSplitMode
// useSplitMode: boolean = false
// Use split mode
//
// wrapNodes
// wrapNodes: { exclude: (keyof HTMLElementTagNameMap)[] }
// Type declaration
// exclude: (keyof HTMLElementTagNameMap)[]

// showWordsCounter
Jodit.defaultOptions.showWordsCounter = false;
Jodit.defaultOptions.showXPathInStatusbar = false;
Jodit.defaultOptions.sizeLG = 900; // The width of the editor, accepted as the biggest. Used to the responsive version of the editor
Jodit.defaultOptions.sizeMD = 700; // The width of the editor, accepted as the medium. Used to the responsive version of the editor
Jodit.defaultOptions.sizeSM = 400; // The width of the editor, accepted as the small. Used to the responsive version of the editor
