
/**
 * @module helpers/utils
 */

import type { IEventEmitter, IViewComponent, Nullable } from 'jodit/types';
import { isViewObject } from '../checker/is-view-object';

const store = new WeakMap();

export const dataBind = <T = any>(
	elm: IViewComponent | Node | object,
	key: string,
	value?: T
): T => {
	let itemStore = store.get(elm);

	if (!itemStore) {
		itemStore = {};
		store.set(elm, itemStore);

		let e: Nullable<IEventEmitter> = null;

		if (isViewObject((elm as IViewComponent).j)) {
			e = (elm as IViewComponent).j.e;
		}

		if (isViewObject(elm)) {
			e = elm.e;
		}

		e &&
			e.on('beforeDestruct', () => {
				store.delete(elm);
			});
	}

	if (value === undefined) {
		return itemStore[key];
	}

	itemStore[key] = value;

	return value;
};
