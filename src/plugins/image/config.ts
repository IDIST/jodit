/**
 * @module plugins/image
 */

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

Icon.set('image', require('./image.svg'));

Config.prototype.controls.image = {
	popup: (editor: IJodit, current, self, close) => {
		const form = editor.c.div();
		form.appendChild(
			editor.c.fromHTML(
				`<div class="jodit-popup jodit-image-popup">
	<div class="tabs">
		<button>Search</button>
		<button>Upload</button>
	</div>
	<div class="search">
		<input placeholder="search" />
		<div>
			Get images from https://unsplash.com/
		</div>
	</div>
	<div class="upload">
		<div class="drag-and-drop">
			Drop image or click
		</div>
	</div>
</div>`
			)
		);

		return form;
	},
	tags: ['img'],
	tooltip: 'Insert a image'
} as IControlType;
