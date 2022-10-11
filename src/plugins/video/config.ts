/**
 * @module plugins/video
 */

import type { IControlType, IJodit } from 'jodit/types';
import { Config } from 'jodit/config';
// import { TabOption, TabsWidget } from 'jodit/modules/widget';
// import { convertMediaUrlToVideoEmbed } from 'jodit/core/helpers';
// import { UIForm, UIBlock, UIInput } from 'jodit/core/ui/form';
// import { Button } from 'jodit/core/ui/button';
import { Icon } from 'jodit/core/ui/icon';

Icon.set('video', require('./video.svg'));

Config.prototype.controls.video = {
	popup: (editor: IJodit, current, control, close) => {
		const form = editor.c.div();
		form.appendChild(
			editor.c.fromHTML(
				`<div class="jodit-popup jodit-image-popup">
	<div class="tabs">
		<button>Upload</button>
		<button>URL</button>
	</div>
	<div class="search">
		<input placeholder="search" />
	</div>
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

	tags: ['video'],
	tooltip: 'Insert a video'
} as IControlType;
