/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

import type { IControlType, IJodit } from 'jodit/types';
import type { IEmoji, IEmojiData } from './interface';
import type { IAutoCompleteItem } from '../autocomplete/interface';
import { Plugin } from 'jodit/core/plugin';
import { Config } from 'jodit/config';
import { Emoji } from './ui/emoji';
import { trim } from 'jodit/core/helpers';
import { autobind } from 'jodit/core/decorators';
import { Jodit } from '../../index';

declare module 'jodit/config' {
	interface Config {
		emoji: {
			data: () => Promise<IEmojiData>;
			enableAutoComplete: boolean;
			recentCountLimit: number;
		};
	}
}

Config.prototype.emoji = {
	data: (): any => require('./emoji.json'),
	enableAutoComplete: true,
	recentCountLimit: 10
};

Config.prototype.controls.emoji = {
	tooltip: 'Insert Emoji',
	icon: require('./emoji.svg'),
	popup: (editor: IJodit, _: any, _1: any, close: any): HTMLElement => {
		editor.s.save();

		const box = Emoji.getInstance(editor, (code) => {
			editor.s.restore();
			editor.s.insertNode(editor.createInside.text(code), true);
			close();
		});

		// @ts-ignore
		editor.e.one('beforePopupClose', () => {
			editor.s.restore();
		});

		return box.container;
	}
} as unknown as IControlType;

export class emoji extends Plugin {
	/** @override */
	override requires = ['autocomplete', 'license'];

	/** @override */
	override hasStyle = !Jodit.fatMode;

	/** @override */
	override buttons: Plugin['buttons'] = [
		{
			name: 'emoji',
			group: 'insert'
		}
	];

	private data!: IEmojiData<IEmoji[]>;

	/** @override */
	protected async afterInit(jodit: IJodit): Promise<void> {
		const data = await jodit.o.emoji.data();

		if (jodit.isInDestruct) {
			return;
		}

		this.data = {
			...data,
			emoji: data.emoji.map(Emoji.normalizeEmoji)
		};

		if (jodit.o.emoji.enableAutoComplete) {
			jodit.e.fire('registerAutocompleteSource', this.onAutoComplete);
		}

		jodit.async.requestIdleCallback(() => {
			Emoji.getInstance(jodit, () => {});
		});
	}

	@autobind
	private onAutoComplete(query: string): IAutoCompleteItem[] {
		if (query.length > 2 && query[0] === ':') {
			query = query.substr(1).toLowerCase();

			if (trim(query).length) {
				return this.data.emoji
					.filter((e) => e.description?.indexOf(query) === 0)
					.sort(
						(a, b) =>
							a.description.indexOf(query) -
							b.description.indexOf(query)
					)
					.map((e) => ({
						title: `${e.emoji} ${e.description}`,
						value: e.emoji
					}));
			}
		}

		return [];
	}

	/** @override */
	protected beforeDestruct(jodit: IJodit): void {}
}

Jodit.plugins.add('emoji', emoji);
