/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

import type { IFileBrowserPro, IFileBrowserStatePro } from '../interface';
import type { IFileBrowserItem } from 'jodit/types';
import { ViewComponent } from 'jodit/core/component';
import { component, debounce, watch } from 'jodit/core/decorators';

@component
export class LoadingManager extends ViewComponent<IFileBrowserPro> {
	/** @override */
	className(): string {
		return 'LoadingManager';
	}

	/** @override */
	constructor(jodit: IFileBrowserPro, readonly state: IFileBrowserStatePro) {
		super(jodit);
	}

	@watch(':update.filebrowser')
	protected async onUpdateFileBrowser(): Promise<void> {
		this.j.state.activeElements = [];

		this.j.panel.setMod('loading', true);

		await Promise.all([this.loadFolders(), this.loadItems()]);

		this.j.panel.setMod('loading', false);
	}

	@watch(['state.currentPath', 'state.currentSource'])
	@debounce((ctx) => ({
		timeout: ctx.defaultTimeout,
		promisify: true
	}))
	async loadFolders(): Promise<void> {
		if (!this.j.isOpened) {
			return;
		}

		const { currentPath, currentSource } = this.j.state;

		try {
			const sources = await this.j.dataProvider.tree(
				currentPath,
				currentSource
			);

			this.j.stateManager.fillSources(sources, currentPath);
			this.j.state.sources = sources;
		} catch (e: any) {
			this.j.status(e);
		}
	}

	@watch([
		'state.currentPath',
		'state.currentSource',
		'state.sortBy',
		'state.onlyImages',
		'state.foldersPosition',
		'state.filterWord'
	])
	@debounce((ctx) => ({
		timeout: ctx.defaultTimeout,
		promisify: true
	}))
	async loadItems(): Promise<void> {
		if (!this.j.isOpened) {
			return;
		}

		try {
			this.offset = 0;
			this.stopLoadingParts = false;
			this.j.state.elements = await this.loadPartItems();

			this.stopLoadingParts =
				this.j.state.elements.length < this.countInOneChunk;

			while (
				!this.stopLoadingParts &&
				this.j.panel.countInColumn * this.j.panel.countInRow >=
					this.j.state.elements.length
			) {
				await this.loadItemsChunk();
			}
		} catch (e: any) {
			this.j.status(e);
		}
	}

	private offset: number = 0;
	private countInOneChunk: number = 20;
	private stopLoadingParts: boolean = false;

	@debounce((ctx) => ({
		timeout: ctx.defaultTimeout,
		promisify: true
	}))
	async loadItemsChunk(): Promise<void> {
		if (this.stopLoadingParts) {
			return;
		}

		try {
			this.offset += this.countInOneChunk;
			const elementsPart = await this.loadPartItems();
			this.stopLoadingParts = elementsPart.length < this.countInOneChunk;

			if (elementsPart.length) {
				this.j.state.elements =
					this.j.state.elements.concat(elementsPart);
			}
		} catch (e: any) {
			this.j.status(e);
		}
	}

	private loadPartItems(): Promise<IFileBrowserItem[]> {
		const {
			currentPath,
			currentSource,
			sortBy,
			withFolders,
			foldersPosition,
			onlyImages,
			filterWord
		} = this.j.state;

		return this.j.dataProvider.items(currentPath, currentSource, {
			offset: this.offset,
			limit: this.countInOneChunk,
			sortBy,
			withFolders,
			foldersPosition,
			onlyImages,
			filterWord
		});
	}
}
