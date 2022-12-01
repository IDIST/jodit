/**
 * @module view
 */

import './view-with-toolbar.less';

import type {
	IViewWithToolbar,
	IToolbarCollection,
	Buttons,
	IDictionary,
	IPluginButton,
	IViewOptions,
	ButtonsGroups
} from 'jodit/types';
import { View } from './view';
import { isString, resolveElement, splitArray } from 'jodit/core/helpers';
import { Dom } from 'jodit/core/dom';
import { makeCollection } from 'jodit/modules/toolbar/factory';
import { STATUSES } from '../component';
import { isButtonGroup } from '../ui/helpers/buttons';
import { autobind } from 'jodit/core/decorators';

export abstract class ViewWithToolbar extends View implements IViewWithToolbar {
	TOOLBAR!: IToolbarCollection;
	readonly toolbar: this['TOOLBAR'] = makeCollection(this);

	private defaultToolbarContainer: HTMLElement =
		this.c.div('jodit-toolbar__box');

	/**
	 * Container for toolbar
	 */
	get toolbarContainer(): HTMLElement {
		// console.log('get toolbarContainer');
		if (
			!this.o.fullsize &&
			(isString(this.o.toolbar) || Dom.isHTMLElement(this.o.toolbar))
		) {
			return resolveElement(this.o.toolbar, this.o.shadowRoot || this.od);
		}

		this.o.toolbar &&
			Dom.appendChildFirst(this.container, this.defaultToolbarContainer);

		return this.defaultToolbarContainer;
	}

	/**
	 * Change panel container
	 */
	setPanel(element: HTMLElement | string): void {
		// console.log('setPanel');
		this.o.toolbar = element;
		this.buildToolbar();
	}

	/**
	 * Helper for append toolbar in its place
	 */
	protected buildToolbar(): void {
		// console.log('buildToolbar');
		if (!this.o.toolbar) {
			return;
		}

		const buttons = this.o.buttons
			? (splitArray(this.o.buttons) as Buttons)
			: [];

		this.toolbar
			.setRemoveButtons(this.o.removeButtons)
			.build(buttons.concat(this.o.extraButtons || []))
			.appendTo(this.toolbarContainer);

		if (this.o.toolbarStyle === 'top') {
			// First line
			if (!this.toolbar.elements?.length) return;
			const lineFirst = this.toolbar.elements[0];
			lineFirst.container.classList.add('jodit-media-toolbar');

			// First line's group
			if (!lineFirst.elements?.length) return;
			const groupFirst = lineFirst.elements[0];
			if (!groupFirst?.elements?.length) return;

			// First line's buttons
			for (const element of groupFirst.elements) {
				if (element.text) element.text.innerText = element.name;
			}
		}
	}

	registeredButtons: Set<IPluginButton> = new Set();
	private groupToButtons: IDictionary<string[]> = {};

	getRegisteredButtonGroups(): IDictionary<string[]> {
		// console.log('getRegisteredButtonGroups');
		return this.groupToButtons;
	}

	/**
	 * Register button for group
	 */
	registerButton(btn: IPluginButton): this {
		// console.log('registerButton', btn);
		this.registeredButtons.add(btn);
		const group = btn.group ?? 'other';

		if (!this.groupToButtons[group]) {
			this.groupToButtons[group] = [];
		}

		if (btn.position != null) {
			this.groupToButtons[group][btn.position] = btn.name;
		} else {
			this.groupToButtons[group].push(btn.name);
		}

		return this;
	}

	/**
	 * Remove button from group
	 */
	unregisterButton(btn: IPluginButton): this {
		// console.log('unregisterButton');
		this.registeredButtons.delete(btn);

		const groupName = btn.group ?? 'other',
			group = this.groupToButtons[groupName];

		if (group) {
			const index = group.indexOf(btn.name);

			if (index !== -1) {
				group.splice(index, 1);
			}

			if (group.length === 0) {
				delete this.groupToButtons[groupName];
			}
		}

		return this;
	}

	/**
	 * Prepare toolbar items and append buttons in groups
	 */
	@autobind
	private beforeToolbarBuild(items: ButtonsGroups): ButtonsGroups | void {
		// console.log('beforeToolbarBuild');
		if (Object.keys(this.groupToButtons).length) {
			return items.map(item => {
				if (
					isButtonGroup(item) &&
					item.group &&
					this.groupToButtons[item.group]
				) {
					return {
						group: item.group,
						buttons: [
							...item.buttons,
							...this.groupToButtons[item.group]
						]
					};
				}

				return item;
			});
		}
	}

	override readonly isJodit: boolean = false;

	/** @override **/
	protected constructor(
		options?: Partial<IViewOptions>,
		isJodit: boolean = false
	) {
		// console.log('toolbar constructor');
		super(options, isJodit);
		this.isJodit = isJodit;

		// console.log('toolbar constructor2');
		this.e.on('beforeToolbarBuild', this.beforeToolbarBuild);
	}

	override destruct(): void {
		// console.log('toolbar destruct');
		if (this.isDestructed) {
			return;
		}

		this.setStatus(STATUSES.beforeDestruct);
		this.e.off('beforeToolbarBuild', this.beforeToolbarBuild);
		this.toolbar.destruct();
		super.destruct();
	}
}
