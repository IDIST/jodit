
/**
 * @module modules/history
 */

import type { SnapshotType } from 'jodit/types';
import type { History } from './history';

export class Command {
	undo(): void {
		this.history.snapshot.restore(this.oldValue);
	}

	redo(): void {
		this.history.snapshot.restore(this.newValue);
	}

	constructor(
		readonly oldValue: SnapshotType,
		readonly newValue: SnapshotType,
		private readonly history: History,
		readonly tick: number
	) {}
}
