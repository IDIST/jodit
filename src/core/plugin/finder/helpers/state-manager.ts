/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

import type {
	IFileBrowserStatePro,
	IFileBrowserTreeItemPro
} from '../interface';
import type {
	IFileBrowserItem,
	IFileBrowserMessage,
	ISourcesFiles
} from 'jodit/types/file-browser';
import type { Nullable } from 'jodit/types';
import { autobind } from 'jodit/core/decorators';

export class StateManager {
	constructor(readonly state: IFileBrowserStatePro) {}

	@autobind
	getIndex(
		elm: IFileBrowserItem,
		elms: IFileBrowserItem[] = this.state.elements
	): number {
		return elms.findIndex(
			(item) => item.uniqueHashKey === elm.uniqueHashKey
		);
	}

	@autobind
	isActive(item: IFileBrowserItem): boolean {
		return Boolean(
			this.state.activeElements.find(
				(data) => data.uniqueHashKey === item.uniqueHashKey
			)
		);
	}

	@autobind
	isFavorite(item: IFileBrowserItem): boolean {
		return Boolean(
			this.state.favorites.find(
				(data) => data.uniqueHashKey === item.uniqueHashKey
			)
		);
	}

	addActive(item: IFileBrowserItem, multi: boolean): void {
		this.state.metaInfo = item;
		this.state.info = item.file ?? '';
		this.state.lastSelectedIndex = this.getIndex(item);
		this.state.activeElements = multi
			? [...this.state.activeElements, item]
			: [item];
	}

	callSelectHandler(): void {
		const act = this.state.activeElements;

		this.state.onSelectCallBack?.call(this, {
			baseurl: '',
			files: act.map((data) => data.fileURL),
			isImages: act.map((data) => Boolean(data.isImage))
		});
	}

	setFilter(value: string): void {
		this.state.filterWord = value;
	}

	addMessage(item: IFileBrowserMessage): void {
		const msgs = this.state.messages;

		if (msgs[msgs.length - 1]?.message !== item.message) {
			this.state.messages = [...msgs, item];
		}
	}

	removeMessage(item: IFileBrowserMessage): void {
		const index = this.state.messages.indexOf(item);
		if (index !== -1) {
			const messages = [...this.state.messages];
			messages.splice(index, 1);
			this.state.messages = messages;
		}
	}

	toggleFavorite(item: IFileBrowserItem): void {
		const favoriteIndex = this.getIndex(item, this.state.favorites);

		const favorites = [...this.state.favorites];

		if (favoriteIndex === -1) {
			favorites.push(item);
		} else {
			favorites.splice(favoriteIndex, 1);
		}

		this.state.favorites = favorites;
	}

	fillSources(sources: ISourcesFiles, path: string): void {
		const filterFolders = (folders: string[]): string[] =>
			folders.filter((folder) => folder !== '.' && folder !== '..');

		if (!this.state.tree.length || !path) {
			this.state.tree = sources.map(
				(source) =>
					<IFileBrowserTreeItemPro>{
						type: 'source',
						name: source.name,
						title: source.title,
						sourceName: source.name,
						path: '/',
						children: filterFolders(source.folders).map(
							(folder) => ({
								type: 'directory',
								name: folder,
								path: folder,
								sourceName: source.name,
								children: []
							})
						)
					}
			);
		} else {
			const findItem = (
				children: IFileBrowserTreeItemPro[],
				name: string
			): Nullable<IFileBrowserTreeItemPro> =>
				children.find((item) => item.name === name) ?? null;

			this.removeActive(this.state.tree);

			sources.forEach((source) => {
				const sourceItem = findItem(this.state.tree, source.name);

				if (sourceItem) {
					sourceItem.isActive = true;

					const resultItem = path
						.split('/')
						.reduce<Nullable<IFileBrowserTreeItemPro>>(
							(item, part) => {
								return item && findItem(item.children, part);
							},
							sourceItem
						);

					if (resultItem) {
						resultItem.isActive = true;

						resultItem.children = filterFolders(source.folders).map(
							(folder) => ({
								type: 'directory',
								name: folder,
								path: path + '/' + folder,
								sourceName: source.name,
								children: []
							})
						);
					}
				}
			});
		}
	}

	private removeActive(tree: IFileBrowserTreeItemPro[]): void {
		tree.forEach((item) => {
			item.isActive = false;
			this.removeActive(item.children);
		});
	}

	get isFavoriteItems(): boolean {
		return this.state.favorites === this.state.elements;
	}
}
