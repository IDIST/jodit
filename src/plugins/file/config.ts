import type {
	IControlType,
	// IFileBrowserCallBackData,
	IJodit
} from 'jodit/types';
import { Config } from 'jodit/config';
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
		const form = editor.c.div();
		form.appendChild(
			editor.c.fromHTML(
				`<div class="jodit-popup jodit-image-popup">
	<div class="upload">
		<div class="drag-and-drop">
			Drop video or click
		</div>
	</div>
</div>`
			)
		);

		return form;
	},
	tags: ['a'],
	tooltip: 'Insert a file'
} as IControlType;
