/**
 * @module plugins/inline-popup
 */

import type { IControlType } from 'jodit/types';
import { isJoditObject, isString } from 'jodit/core/helpers/checker';

const cmd = (control: IControlType): string =>
	control.args && isString(control.args[0])
		? control.args[0].toLowerCase()
		: '';

export default [
	// {
	// 	name: 'tablesplitv',
	// 	list: {
	// 		tablesplitv: 'Split vertical',
	// 		tablesplitg: 'Split horizontal'
	// 	},
	// 	tooltip: 'Split'
	// },

	// {
	// 	name: 'splitv',
	// 	list: {
	// 		tablesplitv: 'Split vertical',
	// 		tablesplitg: 'Split horizontal'
	// 	},
	// 	tooltip: 'Split'
	// },
	{
		name: 'split vertical',
		// icon: 'split-vertical',
		command: 'tablesplitv',
		tooltip: 'Split vertical'
	},
	{
		name: 'split horizontal',
		// icon: 'split-horizontal',
		command: 'tablesplitg',
		tooltip: 'Split horizontal'
	},
	{
		name: 'addcolumn',
		list: {
			tableaddcolumnbefore: 'Insert column before',
			tableaddcolumnafter: 'Insert column after'
		},
		exec: (editor, table, { control }): void => {
			if (!isJoditObject(editor)) {
				return;
			}

			const command = cmd(control);

			editor.execCommand(command, false, table);
		},
		tooltip: 'Add column'
	},
	{
		name: 'addrow',
		list: {
			tableaddrowbefore: 'Insert row above',
			tableaddrowafter: 'Insert row below'
		},
		exec: (editor, table, { control }): void => {
			if (!isJoditObject(editor)) {
				return;
			}

			const command = cmd(control);

			editor.execCommand(command, false, table);
		},
		tooltip: 'Add row'
	},
	{
		name: 'delete',
		icon: 'bin',
		list: {
			tablebin: 'Delete table',
			tablebinrow: 'Delete row',
			tablebincolumn: 'Delete column',
			tableempty: 'Empty cell'
		},
		exec: (editor, table, { control }): void => {
			if (!isJoditObject(editor)) {
				return;
			}

			const command = cmd(control);

			editor.execCommand(command, false, table);
			editor.e.fire('hidePopup');
		},
		tooltip: 'Delete'
	}
] as Array<IControlType | string>;
