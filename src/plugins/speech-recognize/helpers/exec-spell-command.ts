
/**
 * @module plugins/speech-recognize
 */

import type { IJodit } from 'jodit/types';

export function execSpellCommand(jodit: IJodit, commandSentence: string): void {
	const [command, value] = commandSentence.split('::');
	jodit.execCommand(command, null, value);
}
