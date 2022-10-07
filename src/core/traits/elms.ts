
/**
 * @module traits
 */

import type { IComponent, IContainer, IElms, Nullable } from 'jodit/types';
import { toArray } from 'jodit/core/helpers/array/to-array';

export abstract class Elms implements IElms {
	/**
	 * Return element with BEM class name
	 */
	getElm<T extends IComponent & IContainer & IElms>(
		this: T,
		elementName: string
	): Nullable<HTMLElement> {
		return this.container.querySelector(
			`.${this.getFullElName(elementName)}`
		) as Nullable<HTMLElement>;
	}

	/**
	 * Return elements with BEM class name
	 */
	getElms<T extends IComponent & IContainer & IElms>(
		this: T,
		elementName: string
	): HTMLElement[] {
		return toArray(
			this.container.querySelectorAll(
				`.${this.getFullElName(elementName)}`
			)
		);
	}
}
