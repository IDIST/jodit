
/**
 * @module types
 */

import type {
	CallbackFunction,
	CanUndef,
	IComponent,
	SnapshotType
} from './types';

export interface ICommand {
	tick: number;
	undo(): void;
	redo(): void;
}

export interface IStack {
	readonly length: number;
	clear(): void;
	push(command: ICommand): void;
	replace(command: ICommand): void;
	current(): CanUndef<ICommand>;
	undo(): boolean;
	redo(): boolean;
	canUndo(): boolean;
	canRedo(): boolean;
}

export interface ISnapshot {
	isBlocked: boolean;
	make(): SnapshotType;
	restoreOnlySelection(snapshot: SnapshotType): void;
	restore(snapshot: SnapshotType): void;
}

export interface IHistory {
	snapshot: ISnapshot;

	redo(): void;
	canRedo(): boolean;
	undo(): void;
	canUndo(): boolean;
	readonly length: number;

	processChanges(): void;

	clear(): void;
	upTick(): void;
}
