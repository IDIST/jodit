
/**
 * @module plugins/speech-recognize
 */

import type { ISpeechRecognizeConstructor } from '../interface';

export const SpeechRecognition: ISpeechRecognizeConstructor =
	(window as any).SpeechRecognition ||
	(window as any).webkitSpeechRecognition;
