import type {
	IControlType,
	// IFileBrowserCallBackData,
	IJodit
} from 'jodit/types';
// import { Dom } from 'jodit/core/dom';
// import { $$ } from 'jodit/core/helpers';
// import { FileSelectorWidget } from 'jodit/modules/widget';
import { Config } from 'jodit/config';
import { Icon } from 'jodit/core/ui/icon';
// import { UIForm, UIBlock, UIInput } from 'jodit/core/ui/form';

Icon.set('gif', require('./gif.svg'));

Config.prototype.controls.gif = {
	popup: (editor: IJodit, current, self, close) => {
		const form = editor.c.div();
		form.appendChild(
			editor.c.fromHTML(
				`<div class="jodit-popup jodit-gif-popup">
	<div class="search">
		<input placeholder="search" />
	</div>
	<div class="select">
		<div class="">
Get images from https://giphy.com/
		</div>
	</div>
</div>`
			)
		);

		return form;
	},
	tags: ['img'],
	tooltip: 'Insert a gif'
} as IControlType;
