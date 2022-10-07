
import type { IComponent, Nullable } from './src/types';
import type { IJodit } from './src/types';

export * from './src/types';
export * from './src/index';

declare global {
	const Jodit: IJodit;
	const isProd: boolean;
	const isESNext: boolean;
	const appVersion: string;
	const isTest: boolean;

	interface HTMLElement {
		component: Nullable<IComponent>;
	}

	interface CaretPosition {
		offsetNode: Node;
		offset: number;
	}

	interface IdleDeadline {
		readonly didTimeout: boolean;
		timeRemaining(): DOMHighResTimeStamp;
	}

	// https://github.com/xdan/jodit/issues/743
	interface IdleRequestCallback {
		(deadline: IdleDeadline): void;
	}

	interface Document {
		caretPositionFromPoint?(x: number, y: number): CaretPosition;
		caretRangeFromPoint(x: number, y: number): Range;
	}

	// https://github.com/xdan/jodit/issues/718
	interface ShadowRoot {
		getSelection(): ReturnType<Window['getSelection']>;
	}

	interface Function {
		originalConstructor: Function;
	}
}

export { Jodit };
