
/**
 * @module modules/file-browser
 */

import type {
	IContextMenu,
	IFileBrowserDataProvider,
	IFileBrowserOptions,
	IUIElement,
	IViewBased
} from 'jodit/types';
import DataProvider from './data-provider';
import { ContextMenu } from '../context-menu/context-menu';

export function makeDataProvider(
	parent: IViewBased,
	options: IFileBrowserOptions
): IFileBrowserDataProvider {
	return new DataProvider(parent, options);
}

export function makeContextMenu(parent: IViewBased): IContextMenu & IUIElement {
	return new ContextMenu(parent);
}
