/**
 * @module config
 */

import type {
	Attributes,
	ButtonsOption,
	Controls,
	IControlType,
	IDictionary,
	IExtraPlugin,
	InsertMode,
	IUIButtonState,
	IViewOptions,
	NodeFunction,
	Nullable
} from './types';
import * as consts from './core/constants';
import { INSERT_AS_HTML } from './core/constants';

const buttons = [
	// Media
	'emoji',
	'image',
	'gif',
	'video',
	'file',
	'\n',
	// Do
	// 'undo',
	// 'redo',
	// '|',
	// Font
	'paragraph',
	'brush',
	'bold',
	'italic',
	'underline',
	'strikethrough',
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
	// Demo
	// 'preview'
];

/**
 * Default Editor's Configuration
 */
export class Config implements IViewOptions {
	private static __defaultOptions: Config;
	/**
	 * Timeout of all asynchronous methods
	 */
	defaultTimeout: number = 500;
	namespace: string = '';
	/**
	 * Editor loads completely without plugins. Useful when debugging your own plugin.
	 */
	safeMode: boolean = false;
	// width: number | string = 'auto';
	/**
	 * Editor's width
	 *
	 * @example
	 * ```javascript
	 * Jodit.make('.editor', {
	 *    width: '100%',
	 * })
	 * ```
	 * @example
	 * ```javascript
	 * Jodit.make('.editor', {
	 *    width: 600, // equivalent for '600px'
	 * })
	 * ```
	 * @example
	 * ```javascript
	 * Jodit.make('.editor', {
	 *    width: 'auto', // autosize
	 * })
	 * ```
	 */
	width: number | string = '100%';
	/**
	 * Editor's height
	 *
	 * @example
	 * ```javascript
	 * Jodit.make('.editor', {
	 *    height: '100%',
	 * })
	 * ```
	 * @example
	 * ```javascript
	 * Jodit.make('.editor', {
	 *    height: 600, // equivalent for '600px'
	 * })
	 * ```
	 * @example
	 * ```javascript
	 * Jodit.make('.editor', {
	 *    height: 'auto', // default - autosize
	 * })
	 * ```
	 */
	// height: number | string = '100%';
	height: number | string = 'auto';
	/**
	 * List of plugins that will be initialized in safe mode.
	 *
	 * ```js
	 * Jodit.make('#editor', {
	 * 	safeMode: true,
	 * 	safePluginsList: ['about'],
	 * 	extraPlugins: ['yourPluginDev']
	 * });
	 * ```
	 */
	safePluginsList: string[] = ['about', 'enter', 'backspace'];
	commandToHotkeys!: IDictionary<string | string[]>;
	license: string = 'CC3FM-00670-AS5MN-T56AZ';
	preset: string = 'custom';
	presets: IDictionary = {
		inline: {
			inline: true,
			toolbar: false,
			toolbarInline: true,
			toolbarInlineForSelection: true,
			showXPathInStatusbar: false,
			showCharsCounter: false,
			showWordsCounter: false,
			showPlaceholder: false
		}
	};
	ownerDocument: Document = (typeof document !== 'undefined'
		? document
		: null) as Document;
	ownerWindow: Window = (typeof window !== 'undefined'
		? window
		: null) as Window;
	/**
	 * Shadow root if Jodit was created in it
	 */
	shadowRoot: Nullable<ShadowRoot> = null;
	/**
	 * Dictionary of variable values in css, a complete list can be found here
	 * https://github.com/xdan/jodit/blob/master/src/styles/variables.less#L25
	 *
	 * @example
	 * ```js
	 * const editor = Jodit.make('#editor', {
	 *   styleValues: {
	 *		'color-text': 'red',
	 *		colorBorder: 'black',
	 *		'color-panel': 'blue'
	 *   }
	 * });
	 * ```
	 */
	styleValues: IDictionary = {};
	/**
	 * z-index For editor
	 */
	zIndex: number = 1;
	/**
	 * Change the read-only state of the editor
	 */
	readonly: boolean = false;
	/**
	 * Change the disabled state of the editor
	 */
	disabled: boolean = false;
	activeButtonsInReadOnly: string[] = [
		'source',
		'fullsize',
		'print',
		'about',
		'dots',
		'selectall'
	];
	allowCommandsInReadOnly: string[] = ['selectall', 'preview', 'print'];
	/**
	 * Size of icons in the toolbar (can be "small", "middle", "large")
	 *
	 * @example
	 * ```javascript
	 * var editor  = new  Jodit(".dark_editor", {
	 *      toolbarButtonSize: "small"
	 * });
	 * ```
	 */
	toolbarButtonSize: IUIButtonState['size'] = 'large';
	inlinePopupToolbarButtonSize: IUIButtonState['size'] = 'large';
	toolbarStyle: 'top' | false = false;
	/**
	 * Allow navigation in the toolbar of the editor by Tab key
	 */
	allowTabNavigation: boolean = false;
	/**
	 * Inline editing mode
	 */
	inline: boolean = false;
	/**
	 * Theme (can be "dark")
	 * @example
	 * ```javascript
	 * var editor  = new  Jodit(".dark_editor", {
	 *      theme: "dark"
	 * });
	 * ```
	 */
	theme: string = 'default';
	/**
	 * if set true then the current mode is saved in a cookie , and is restored after a reload of the page
	 */
	saveModeInStorage: boolean = false;
	/**
	 * Class name that can be appended to the editor
	 *
	 * @see [[Config.iframeCSSLinks]]
	 * @see [[Config.iframeStyle]]
	 *
	 * @example
	 * ```javascript
	 * Jodit.make('#editor', {
	 *    editorCssClass: 'some_my_class'
	 * });
	 * ```
	 * ```html
	 * <style>
	 * .some_my_class p{
	 *    line-height: 16px;
	 * }
	 * </style>
	 * ```
	 */
	editorCssClass: false | string = false;
	/**
	 * The font of editor
	 *
	 * @example
	 * ```javascript
	 * Jodit.make('#editor', {
	 * 		style: {
	 * 		 font: '12px Arial'
	 * 		}
	 * });
	 * ```
	 */
	// style: false | IDictionary = false;
	style: false | IDictionary = {
		font: '16px Poppins'
	};
	/**
	 * After all changes in editors for textarea will call change trigger
	 *
	 * @example
	 * ```javascript
	 * var editor = Jodit.make('#editor');
	 * document.getElementById('editor').addEventListener('change', function () {
	 *      console.log(this.value);
	 * })
	 * ```
	 */
	triggerChangeEvent: boolean = true;
	/**
	 * The writing direction of the language which is used to create editor content. Allowed values are: ''
	 * (an empty string) – Indicates that content direction will be the same as either the editor UI direction or
	 * the page element direction. 'ltr' – Indicates a Left-To-Right text direction (like in English).
	 * 'rtl' – Indicates a Right-To-Left text direction (like in Arabic).
	 * @example
	 * ```javascript
	 * Jodit.make('.editor', {
	 *    direction: 'rtl'
	 * })
	 * ```
	 */
	direction: 'rtl' | 'ltr' | '' = '';
	/**
	 * Language by default. if `auto` language set by document.documentElement.lang ||
	 * (navigator.language && navigator.language.substr(0, 2)) ||
	 * (navigator.browserLanguage && navigator.browserLanguage.substr(0, 2)) || 'en'
	 *
	 * @example
	 * ```html
	 * <!-- include in you page lang file -->
	 * <script src="jodit/lang/de.js"></script>
	 * <script>
	 * var editor = Jodit.make('.editor', {
	 *    language: 'de'
	 * });
	 * </script>
	 * ```
	 */
	language: string = navigator.language && navigator.language.substr(0, 2);
	/**
	 * if true all Lang.i18n(key) return `{key}`
	 *
	 * @example
	 * ```html
	 * <script>
	 * var editor = Jodit.make('.editor', {
	 *    debugLanguage: true
	 * });
	 *
	 * console.log(editor.i18n("Test")); // {Test}
	 * </script>
	 * ```
	 */
	debugLanguage: boolean = false;
	/**
	 * Collection of language pack data `{en: {'Type something': 'Type something', ...}}`
	 *
	 * @example
	 * ```javascript
	 * const editor = Jodit.make('#editor', {
	 *     language: 'ru',
	 *     i18n: {
	 *         ru: {
	 *            'Type something': 'Начните что-либо вводить'
	 *         }
	 *     }
	 * });
	 * console.log(editor.i18n('Type something')) //Начните что-либо вводить
	 * ```
	 */
	i18n: IDictionary<IDictionary<string>> | false = {
		ko: {
			gif: 'GIF',
			Search: '검색',
			'Insert Emoji': '이모지 추가',
			'Insert a gif': 'Gif 추가',
			'Search emoji': '이모지 검색',
			'Smileys & Emotion': '스마일 & 감정',
			'People & Body': '사람 & 몸',
			'Animals & Nature': '동물 & 자연',
			'Food & Drink': '음식 & 음료',
			'Travel & Places': '여행 & 장소',
			Activities: '활동',
			Objects: '물체',
			Flags: '깃발',
			'Click to tune': '조정하려면 클릭',
			'Header 1': '제목 1',
			'Header 2': '제목 2',
			'Header 3': '제목 3',
			'Header 4': '제목 4',
			'Header 5': '제목 5',
			'Header 6': '제목 6',
			'Drop video': '비디오 드래그',
			'Drop gif': 'GIF 드래그',
			'Drop audio': '오디오 드래그',
			'Search image': '이미지 검색',
			'Search gif': 'Gif 검색',
			'Powered by: %s': '라이센스: %s'
		}
	};
	/**
	 * The tabindex global attribute is an integer indicating if the element can take
	 * input focus (is focusable), if it should participate to sequential keyboard navigation,
	 * and if so, at what position. It can take several values
	 */
	tabIndex: number = -1;
	/**
	 * Boolean, whether the toolbar should be shown.
	 * Alternatively, a valid css-selector-string to use an element as toolbar container.
	 */
	toolbar: boolean | string | HTMLElement = true;
	/**
	 * Boolean, whether the statusbar should be shown.
	 */
	statusbar: boolean = false;
	/**
	 * Show tooltip after mouse enter on the button
	 */
	showTooltip: boolean = true;
	/**
	 * Delay before show tooltip
	 */
	showTooltipDelay: number = 500;
	/**
	 * Instead of create custop tooltip - use native title tooltips
	 */
	useNativeTooltip: boolean = false;

	// TODO
	// autosave: false, // false or url
	// autosaveCallback: false, // function
	// interval: 60, // seconds
	/**
	 * Default insert method
	 * @default insert_as_html
	 */
	defaultActionOnPaste: InsertMode = INSERT_AS_HTML;
	/**
	 * Element that will be created when you press Enter
	 */
	enter: 'p' | 'div' | 'br' = consts.PARAGRAPH;
	/**
	 * When this option is enabled, the editor's content will be placed in an iframe and isolated from the rest of the page.
	 *
	 * @example
	 * ```javascript
	 * Jodit.make('#editor', {
	 *    iframe: true,
	 *    iframeStyle: 'html{margin: 0px;}body{padding:10px;background:transparent;color:#000;position:relative;z-index:2;\
	 *    user-select:auto;margin:0px;overflow:hidden;}body:after{content:"";clear:both;display:block}';
	 * });
	 * ```
	 */
	iframe: boolean = false;
	/**
	 * Allow editing the entire HTML document(html, head)
	 * > Works together with the iframe option.
	 * @example
	 * ```js
	 * const editor = Jodit.make('#editor', {
	 *   iframe: true,
	 *   editHTMLDocumentMode: true
	 * });
	 * editor.value = '<!DOCTYPE html><html lang="en" style="overflow-y:hidden">' +
	 * 	'<head><title>Jodit Editor</title></head>' +
	 * 	'<body spellcheck="false"><p>Some text</p><p> a </p></body>' +
	 * 	'</html>';
	 * ```
	 */
	editHTMLDocumentMode: boolean = false;
	/**
	 * Use when you need insert new block element
	 * use enter option if not set
	 */
	enterBlock: 'p' | 'div' =
		this.enter !== 'br' ? this.enter : consts.PARAGRAPH;
	/**
	 * Jodit.MODE_WYSIWYG The HTML editor allows you to write like MSWord,
	 * Jodit.MODE_SOURCE syntax highlighting source editor
	 * @example
	 * ```javascript
	 * var editor = Jodit.make('#editor', {
	 *     defaultMode: Jodit.MODE_SPLIT
	 * });
	 * console.log(editor.getRealMode())
	 * ```
	 */
	defaultMode: number = consts.MODE_WYSIWYG;
	/**
	 * Use split mode
	 */
	useSplitMode: boolean = false;
	/**
	 * The colors in HEX representation to select a color for the background and for the text in colorpicker
	 * @example
	 * ```javascript
	 *  Jodit.make('#editor', {
	 *     colors: ['#ff0000', '#00ff00', '#0000ff']
	 * })
	 * ```
	 */
	colors: IDictionary<string[]> | string[] = {
		dark: [
			'#182742',
			'#0F4196',
			'#2A8099',
			'#1F593E',
			'#F59237',
			'#AC3017',
			'#343084'
		],
		middle: [
			'#8D96A4',
			'#4A91F7',
			'#38ADD0',
			'#4AA677',
			'#FABD39',
			'#F15836',
			'#564FB1'
		],
		light: [
			'#FFFFFF',
			'#ADCEFB',
			'#B3F1FD',
			'#ADF0CD',
			'#FEEDB1',
			'#F8B8A6',
			'#E6E3FD'
		]
	};
	/**
	 * The default tab color picker
	 * @example
	 * ```javascript
	 * Jodit.make('#editor2', {
	 *     colorPickerDefaultTab: 'color'
	 * })
	 * ```
	 */
	colorPickerDefaultTab: 'background' | 'color' = 'color';
	/**
	 * Image size defaults to a larger image
	 */
	imageDefaultWidth: number = 500;
	/**
	 * Do not display these buttons that are on the list
	 * @example
	 * ```javascript
	 * Jodit.make('#editor2', {
	 *     removeButtons: ['hr', 'source']
	 * });
	 * ```
	 */
	removeButtons: string[] = [];
	/**
	 * Do not init these plugins
	 * @example
	 * ```typescript
	 * var editor = Jodit.make('.editor', {
	 *    disablePlugins: 'table,iframe'
	 * });
	 * //or
	 * var editor = Jodit.make('.editor', {
	 *    disablePlugins: ['table', 'iframe']
	 * });
	 * ```
	 */
	disablePlugins: string[] | string = [];
	/**
	 * Init and download extra plugins
	 * @example
	 * ```typescript
	 * var editor = Jodit.make('.editor', {
	 *    extraPlugins: ['emoji']
	 * });
	 * ```
	 * It will try load %SCRIPT_PATH%/plugins/emoji/emoji.js and after load will try init it
	 */
	extraPlugins: Array<string | IExtraPlugin> = [
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
		// 'tune-block',
		'highlight-signature',
		'google-maps',
		'page-break',
		'export-docs',
		'iframe-editor',
		'paste-from-word-pro'
	];
	/**
	 * Base path for download extra plugins
	 */
	basePath?: string;
	/**
	 * These buttons list will be added to option.buttons
	 */
	extraButtons: Array<string | IControlType> = [];
	/**
	 * By default, you can only install an icon from the Jodit suite.
	 * You can add your icon to the set using the `Jodit.modules.Icon.set (name, svg Code)` method.
	 * But for a declarative declaration, you can use this option.
	 *
	 * @example
	 * ```js
	 * Jodit.modules.Icon.set('someIcon', '<svg><path.../></svg>');
	 * const editor = Jodit.make({
	 *   extraButtons: [{
	 *     name: 'someButton',
	 *     icon: 'someIcon'
	 *   }]
	 * });
	 *
	 * @example
	 * const editor = Jodit.make({
	 *   extraIcons: {
	 *     someIcon: '<svg><path.../></svg>'
	 *   },
	 *   extraButtons: [{
	 *     name: 'someButton',
	 *     icon: 'someIcon'
	 *   }]
	 * });
	 * ```
	 * @example
	 * ```js
	 * const editor = Jodit.make({
	 *   extraButtons: [{
	 *     name: 'someButton',
	 *     icon: '<svg><path.../></svg>'
	 *   }]
	 * });
	 * ```
	 */
	extraIcons: IDictionary<string> = {};
	/**
	 * Default attributes for created inside editor elements
	 * @example
	 * ```js
	 * const editor2 = Jodit.make('#editor', {
	 * 	createAttributes: {
	 * 		div: {
	 * 			class: 'test'
	 * 		},
	 * 		ul: function (ul) {
	 * 			ul.classList.add('ui-test');
	 * 		}
	 * 	}
	 * });
	 *
	 * const div2 = editor2.createInside.div();
	 * expect(div2.className).equals('test');
	 *
	 * const ul = editor2.createInside.element('ul');
	 * expect(ul.className).equals('ui-test');
	 * ```
	 * Or JSX in React
	 * @example
	 * ```jsx
	 * import React, {useState, useRef} from 'react';
	 * import JoditEditor from "jodit-react";
	 *
	 * const config = {
	 * 	createAttributes: {
	 * 		div: {
	 * 			class: 'align-center'
	 * 		}
	 * 	}
	 * };
	 *
	 * <JoditEditor config={config}/>
	 * ```
	 */
	createAttributes: IDictionary<Attributes | NodeFunction> = {
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
	/**
	 * The width of the editor, accepted as the biggest. Used to the responsive version of the editor
	 */
	sizeLG: number = 900;
	/**
	 * The width of the editor, accepted as the medium. Used to the responsive version of the editor
	 */
	sizeMD: number = 700;
	/**
	 * The width of the editor, accepted as the small. Used to the responsive version of the editor
	 */
	sizeSM: number = 400;
	/**
	 * The list of buttons that appear in the editor's toolbar on large places (≥ options.sizeLG).
	 * Note - this is not the width of the device, the width of the editor
	 * @example
	 * ```javascript
	 * Jodit.make('#editor', {
	 *     buttons: ['bold', 'italic', 'source'],
	 *     buttonsMD: ['bold', 'italic'],
	 *     buttonsXS: ['bold', 'fullsize'],
	 * });
	 * ```
	 * @example
	 * ```javascript
	 * Jodit.make('#editor2', {
	 *     buttons: [{
	 *         name: 'empty',
	 *         icon: 'source',
	 *         exec: function (editor) {
	 *             const dialog = new Jodit.modules.Dialog({}),
	 *                 text = editor.c.element('textarea');
	 *
	 *             dialog.setHeader('Source code');
	 *             dialog.setContent(text);
	 *             dialog.setSize(400, 300);
	 *
	 *             Jodit.modules.Helpers.css(elm, {
	 *                 width: '100%',
	 *                 height: '100%'
	 *             })

	 *             dialog.open();
	 *         }
	 *     }]
	 * });
	 * ```
	 * @example
	 * ```javascript
	 * Jodit.make('#editor2', {
	 *     buttons: Jodit.defaultOptions.buttons.concat([{
	 *        name: 'listsss',
	 *        iconURL: 'stuf/dummy.png',
	 *        list: {
	 *            h1: 'insert Header 1',
	 *            h2: 'insert Header 2',
	 *            clear: 'Empty editor',
	 *        },
	 *        exec: ({originalEvent, control, btn}) => {
	 *             var key = control.args[0],
	 *                value = control.args[1];
	 *             if (key === 'clear') {
	 *                 this.val('');
	 *                 return;
	 *             }
	 *             this.s.insertNode(this.c.element(key, ''));
	 *             this.e.fire('errorMessage', 'Was inserted ' + value);
	 *        },
	 *        template: function (key, value) {
	 *            return '<div>' + value + '</div>';
	 *        }
	 *  });
	 * ```
	 */
	buttons: ButtonsOption = buttons;
	/**
	 * The list of buttons that appear in the editor's toolbar on medium places (≥ options.sizeMD).
	 */
	buttonsMD: ButtonsOption = buttons;
	/**
	 * The list of buttons that appear in the editor's toolbar on small places (≥ options.sizeSM).
	 */
	buttonsSM: ButtonsOption = buttons;
	/**
	 * The list of buttons that appear in the editor's toolbar on extra small places `(< options.sizeSM)`.
	 */
	buttonsXS: ButtonsOption = [
		// Media
		'emoji',
		'image',
		'gif',
		'video',
		'\n',
		// Font
		'paragraph',
		'brush',
		'bold',
		'italic',
		'|',
		// List
		'ul',
		'ol'
	];

	// events: IDictionary<(...args: any[]) => any> = {};
	/**
	 * Behavior for buttons
	 */
	controls!: Controls;
	/**
	 * Buttons in toolbat without SVG - only texts
	 */
	textIcons: boolean = false;
	/**
	 * Hide the link to the Jodit site at the bottom of the editor
	 */
	hidePoweredByJodit: boolean = true;
	/**
	 * shows a INPUT[type=color] to open the browser color picker, on the right bottom of widget color picker
	 */
	showBrowserColorPicker: boolean = false;
	/**
	 * Use a placeholder from original input field, if it was set
	 */
	useInputsPlaceholder: boolean = false;
	showXPathInStatusbar: boolean = false;
	showWordsCounter: boolean = false;

	static get defaultOptions(): Config {
		if (!Config.__defaultOptions) {
			Config.__defaultOptions = new Config();
		}

		return Config.__defaultOptions;
	}
}

Config.prototype.controls = {
	font: {
		list: {
			'andale mono,monospace': 'Andale Mono',
			'arial,helvetica,sans-serif': 'Arial',
			'arial black,sans-serif': 'Arial Black',
			'book antiqua,palatino,serif': 'Book Antiqua',
			'comic sans ms,sans-serif': 'Comic Sans MS',
			'courier new,courier,monospace': 'Courier New',
			'georgia,palatino,serif': 'Georgia',
			'helvetica,arial,sans-serif': 'Helvetica',
			'impact,sans-serif': 'Impact',
			'symbol,sans-serif': 'Symbol',
			'tahoma,arial,helvetica,sans-serif': 'Tahoma',
			'terminal,monaco,monospace': 'Terminal',
			'times new roman,times,serif': 'Times New Roman',
			'trebuchet ms,geneva,sans-serif': 'Trebuchet MS',
			'verdana,geneva,sans-serif': 'Verdana',
			webdings: 'Webdings',
			'wingdings,zapf dingbats': 'Wingdings'
		}
	}
};
