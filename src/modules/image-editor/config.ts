
import type { ImageEditorOptions } from 'jodit/types';
import { Config } from 'jodit/config';
import { Icon } from 'jodit/core/ui/icon';

declare module 'jodit/config' {
	interface Config {
		imageeditor: ImageEditorOptions;
	}
}

Config.prototype.imageeditor = {
	min_width: 20,
	min_height: 20,
	closeAfterSave: false,
	width: '85%',
	height: '85%',
	crop: true,
	resize: true,
	resizeUseRatio: true,
	resizeMinWidth: 20,
	resizeMinHeight: 20,
	cropUseRatio: true,
	cropDefaultWidth: '70%',
	cropDefaultHeight: '70%'
};

Icon.set('crop', require('./icons/crop.svg')).set(
	'resize',
	require('./icons/resize.svg')
);
