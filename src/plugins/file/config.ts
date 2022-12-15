import type {
	IControlType,
	// IFileBrowserCallBackData,
	IJodit
} from 'jodit/types';
import { Config } from 'jodit/config';
// import { Dom } from 'jodit/core/dom';
// import { $$ } from 'jodit/core/helpers';
import { FileSelectorWidget } from 'jodit/modules/widget';
import { PopupTitleWidget } from 'jodit/src/modules/widget/popup-title/popup-title';
// import { Dom } from 'jodit/core/dom/dom';
// import { FileSelectorWidget } from 'jodit/modules/widget';
// import { UIForm, UIBlock, UIInput } from 'jodit/core/ui/form';

Config.prototype.controls.file = {
	popup: (
		editor: IJodit,
		current: Node | false,
		self: IControlType,
		close
	) => {
		// let sourceFile: HTMLImageElement | null = null;

		// if (
		// 	current &&
		// 	!Dom.isText(current) &&
		// 	Dom.isHTMLElement(current) &&
		// 	(Dom.isTag(current, 'img') || $$('img', current).length)
		// ) {
		// 	sourceFile = Dom.isTag(current, 'img')
		// 		? current
		// 		: $$('img', current)[0];
		// }

		// editor.s.save();

		return FileSelectorWidget(
			editor,
			{
				uploadFile: true
			},
			// sourceFile,
			close
		);
	},
	popupTitle: (editor: IJodit, _: any, _1: any, close: any): HTMLElement =>
		PopupTitleWidget(editor, 'File', close),
	popupContentExtraClassName: 'custom',
	tags: ['a'],
	tooltip: 'Insert a file',
	icon: require('./ui/file.svg')
} as IControlType;
