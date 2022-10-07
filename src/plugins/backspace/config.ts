
/**
 * @module plugins/backspace
 */

import { Config } from 'jodit/config';

declare module 'jodit/config' {
	interface Config {
		delete: {
			hotkeys: {
				delete: string[];
				deleteWord: string[];
				deleteSentence: string[];
				backspace: string[];
				backspaceWord: string[];
				backspaceSentence: string[];
			};
		};
	}
}

Config.prototype.delete = {
	hotkeys: {
		delete: ['delete', 'cmd+backspace'],
		deleteWord: ['ctrl+delete', 'cmd+alt+backspace', 'ctrl+alt+backspace'],
		deleteSentence: ['ctrl+shift+delete', 'cmd+shift+delete'],
		backspace: ['backspace'],
		backspaceWord: ['ctrl+backspace'],
		backspaceSentence: ['ctrl+shift+backspace', 'cmd+shift+backspace']
	}
};
