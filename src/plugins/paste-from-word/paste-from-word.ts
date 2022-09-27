/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

/**
 * [[include:plugins/paste-from-word/README.md]]
 * @packageDocumentation
 * @module plugins/paste-from-word
 */
import { Jodit } from '../../index';
import {
	INSERT_AS_HTML,
	INSERT_AS_TEXT,
	INSERT_ONLY_TEXT
} from 'jodit/core/constants';
import type { PastedData, PasteEvent } from 'jodit/src/plugins/paste/interface';
import type { IJodit, InsertMode } from 'jodit/types';

import { applyStylesPro } from './helpers';
import './config';
import {
	askInsertTypeDialog,
	pasteInsertHtml
} from 'jodit/src/plugins/paste/helpers';
import { Plugin } from 'jodit/core/plugin';
import {
	applyStyles,
	cleanFromWord,
	isHtmlFromWord,
	isString,
	stripTags
} from 'jodit/core/helpers';

import { watch } from 'jodit/core/decorators';

export class pasteFromWord extends Plugin {
	override requires = ['paste'];

	protected override afterInit(jodit: IJodit): void {}
	protected override beforeDestruct(jodit: IJodit): void {}

	/**
	 * Try if text is Word's document fragment and try process this
	 */
	@watch(':processHTML')
	protected processWordHTML(
		e: PasteEvent,
		text: string,
		texts: PastedData
	): boolean {
		const { j } = this,
			{
				processPasteFromWord,
				askBeforePasteFromWord,
				defaultActionOnPasteFromWord,
				defaultActionOnPaste,
				pasteFromWordActionList
			} = j.o;

		if (processPasteFromWord && isHtmlFromWord(text)) {
			if (askBeforePasteFromWord) {
				askInsertTypeDialog(
					j,
					'The pasted content is coming from a Microsoft Word/Excel document. ' +
						'Do you want to keep the format or clean it up?',
					'Word Paste Detected',
					insertType => {
						this.insertFromWordByType(e, text, insertType, texts);
					},
					pasteFromWordActionList
				);
			} else {
				this.insertFromWordByType(
					e,
					text,
					defaultActionOnPasteFromWord || defaultActionOnPaste,
					texts
				);
			}

			return true;
		}

		return false;
	}

	/**
	 * Clear extra styles and tags from Word's pasted text
	 */
	protected insertFromWordByType(
		e: PasteEvent,
		html: string,
		insertType: InsertMode,
		texts: PastedData
	): void {
		switch (insertType) {
			case INSERT_AS_HTML: {
				html = applyStyles(html);

				const value = this.j.events?.fire('beautifyHTML', html);

				if (isString(value)) {
					html = value;
				}

				break;
			}

			case INSERT_AS_TEXT: {
				html = cleanFromWord(html);
				break;
			}

			case INSERT_ONLY_TEXT: {
				html = stripTags(cleanFromWord(html));
				break;
			}
		}

		pasteInsertHtml(e, this.j, html);
	}
}

export class PasteFromWordPro extends pasteFromWord {
	protected override insertFromWordByType(
		e: PasteEvent,
		html: string,
		insertType: InsertMode,
		texts: PastedData
	): void {
		if (
			this.j.o.pasteFromWord.enable &&
			(insertType === INSERT_AS_HTML || insertType === INSERT_AS_TEXT)
		) {
			html = applyStylesPro(
				this.j,
				html,
				insertType === INSERT_AS_TEXT,
				texts.rtf
			);

			// @ts-ignore
			if (this.j.o.beautifyHTML) {
				const value = this.j.events?.fire('beautifyHTML', html);

				if (isString(value)) {
					html = value;
				}
			}

			pasteInsertHtml(e, this.j, html);
			return;
		}

		return super.insertFromWordByType(e, html, insertType, texts);
	}
}

Jodit.plugins.remove('pasteFromWord');
Jodit.plugins.add('pasteFromWordPro', PasteFromWordPro);
