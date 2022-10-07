
/**
 * @module plugins/paste
 */

import type { InsertMode } from 'jodit/types';

export type PasteEvent = ClipboardEvent | DragEvent;

export type PastedValue = {
	html: string | Node;
	action?: InsertMode;
};

export interface PastedData {
	html?: string;
	plain?: string;
	rtf?: string;
}
