import './emoji.less';

import type { IEmoji, IEmojiData, IEmojiList, IShortEmoji } from '../interface';
import type { IDictionary, IJodit } from 'jodit/types';
import { UIElement } from 'jodit/core/ui';
import { attr, isString } from 'jodit/core/helpers';
import {
	autobind,
	component,
	hook,
	persistent,
	throttle
} from 'jodit/core/decorators';
import { Dom } from 'jodit/modules';

@component
export class Emoji extends UIElement<IJodit> {
	private static __instance: Emoji | null;
	// private input!: UIInput;
	private categories!: HTMLDivElement;
	private list!: HTMLDivElement;

	private data!: IEmojiData;

	/**
	 * Recent emojis
	 */
	@persistent
	private recent: IEmoji[] = [];

	private map: IDictionary<IEmoji> = {};
	private activeCategoryId = 0;
	private cache: IDictionary<HTMLElement> = {};

	/** @override */
	constructor(jodit: IJodit, private onInsert: (code: string) => void) {
		super(jodit);

		this.setMod('loading', true);

		(async (): Promise<void> => {
			this.data = await jodit.o.emoji.data();
			this.setMod('loading', false);

			// emoji.json파일 데이터를 Emoji객체에 바인딩
			this.data.emoji.forEach(e => {
				const emoji = Emoji.normalizeEmoji(e);
				this.map[emoji.emoji] = emoji;
			});

			// ??
			this.setItems(this.defaultList);

			/**
			 * this.categories 에 this.generateCategoriesList 추가
			 * this.categories: HTMLDivElement
			 */
			Dom.append(
				this.categories,
				this.generateCategoriesList(this.data.categories)
			);

			this.setActiveCategory(-1);
		})();
	}

	get defaultList(): IEmojiList {
		return (this.recent as IEmojiList).concat(this.data.emoji);
	}

	static getInstance(jodit: IJodit, onInsert: (code: string) => void): Emoji {
		if (!this.__instance) {
			this.__instance = new Emoji(jodit, onInsert);
		}

		this.__instance.onInsert = onInsert;

		// 조작 내역이 있으면 초기화 (스크롤, 카테고리 선택 등)
		if (this.__instance.data) {
			this.__instance.reset();
		}

		return this.__instance;
	}

	static normalizeEmoji(emoji: IShortEmoji | IEmoji): IEmoji {
		if (Emoji.isShortCat(emoji)) {
			return {
				emoji: emoji.e,
				description: emoji.d,
				category: emoji.c,
				aliases: emoji.a,
				tags: emoji.t
			};
		}

		return emoji;
	}

	private static isShortCat(emoji: IDictionary): emoji is IShortEmoji {
		return emoji && isString(emoji.e);
	}

	/** @override */
	className(): string {
		return 'Emoji';
	}

	/**
	 * Reset default state
	 */
	reset(): void {
		// this.input.nativeInput.value = '';
		this.setItems(this.defaultList);
		this.setActiveCategory(-1);
	}

	@hook('ready')
	onReady(): void {
		this.j.e
			// .on(this.input.nativeInput, 'input', this.onInputFilter)
			.on(this.categories, 'click', this.onClickCategory)
			.on(this.list, 'scroll', this.onScrollList)
			.on(this.list, 'mousedown touchstart', this.onClickItem);
	}

	/** @override */
	override destruct(): any {
		Emoji.__instance = null;
		// this.input.destruct();
		return super.destruct();
	}

	// UIElement의 constructor 에서 createContainer 실행 -> super(jodit);
	/** @override */
	protected override createContainer(options?: IDictionary): HTMLElement {
		const container = this.j.c.div('jodit-emoji');

		// this.input = new UIInput(this.j, {
		// 	name: 'search',
		// 	icon: 'search',
		// 	autocomplete: false,
		// 	clearButton: true,
		// 	placeholder: 'Search emoji'
		// });

		// this.input.container.classList.add(this.getFullElName('input'));

		this.categories = this.j.c.div(this.getFullElName('categories'));
		this.list = this.j.c.div(this.getFullElName('emojis'));

		const navigateContainer = this.j.c.div(this.getFullElName('navigate'));

		// Dom.append(navigateContainer, [this.input.container, this.categories]);
		Dom.append(navigateContainer, [this.categories]);
		Dom.append(container, [navigateContainer, this.list]);

		return container;
	}

	private setItems(items: IEmojiList): void {
		this.list.scrollTo(0, 0);

		Dom.detach(this.list);

		Dom.append(
			this.list,
			this.generateEmojiList(items, this.data.categories)
		);
	}

	private setActiveCategory(
		categoryId: number,
		scrollIntoView: boolean = false
	): void {
		const cats = this.getElms('category'),
			oldActive = cats.find(
				categoryButton =>
					parseInt(attr(categoryButton, 'category-id') || '-1') ===
					this.activeCategoryId
			);

		// 뭔지 모르겠음
		// if (!cats[index]) {
		// 	// index = cats.length - 1;
		// 	index = cats.length - 1;
		// }

		const newActive = cats.find(
			categoryButton =>
				parseInt(attr(categoryButton, 'category-id') || '-1') ===
				categoryId
		);

		// console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
		// console.log({
		// 	prevActiveCategoryId: this.activeCategoryId,
		// 	categoryId
		// });
		// if (oldActive) {
		// 	console.log('oldActive', attr(oldActive, 'category-id'));
		// }
		// if (newActive) {
		// 	console.log('newActive', attr(newActive, 'category-id'));
		// }

		const activeClass = this.getFullElName('category', 'active', true);

		if (oldActive) {
			oldActive.classList.remove(activeClass);
		}

		if (newActive) {
			newActive.classList.add(activeClass);
		}

		if (scrollIntoView) {
			const titles = this.getElms('category-title');
			titles
				.find(
					titleDom =>
						parseInt(attr(titleDom, 'category-id') || '-1') ===
						categoryId
				)
				?.scrollIntoView();
		}

		this.activeCategoryId = categoryId;
	}

	private generateCategoriesList(categories: string[]): HTMLElement[] {
		/**
		 * categories = ['Smileys & Emotion', 'People & Body', 'Animals & Nature', 'Food & Drink', 'Travel & Places', 'Activities', 'Objects', 'Symbols', 'Flags']
		 *
		 * People & Body, Animals & Nature 는 카테고리 버튼에서 안보이게
		 */
		const _categories = categories
			.map((cat, index) => ({ label: cat, id: index }))
			.filter((_, i) => i !== 1 && i !== 2);
		return _categories.map(cat => {
			// const icon = require(`./assets/${cat}.svg`);
			return this.j.c.fromHTML(
				`<button class="jodit-emoji__category" category-id="${cat.id}" title="${cat.label}"></button>`
			);
		});
	}

	private generateEmojiList(
		emojis: Array<IEmoji | IShortEmoji>,
		categories: string[]
	): HTMLElement[] {
		let currentCategory = '';

		return emojis.reduce((acc, emoji, i) => {
			emoji = Emoji.normalizeEmoji(emoji);

			if (categories[emoji.category] !== currentCategory) {
				currentCategory = categories[emoji.category];

				const category =
					this.cache[currentCategory] ??
					this.j.c.div(
						this.getFullElName('category-title'),
						{ 'category-id': emoji.category },
						currentCategory ? this.j.i18n(currentCategory) : ''
					);
				this.cache[currentCategory] = category;
				acc.push(category);
			}

			const elm =
				this.cache[emoji.emoji + emoji.category] ??
				this.j.c.div(
					this.getFullElName('emoji'),
					{ 'data-id': i, 'data-value': emoji.emoji },
					emoji.emoji
				);

			this.cache[emoji.emoji + emoji.category] = elm;

			acc.push(elm);

			return acc;
		}, [] as HTMLElement[]);
		// return emojis.reduce((acc, emoji, i) => {
		// 	emoji = Emoji.normalizeEmoji(emoji);

		// 	if (categories[emoji.category] !== currentCategory) {
		// 		currentCategory = categories[emoji.category];

		// 		const category =
		// 			this.cache[currentCategory] ??
		// 			this.j.c.div(
		// 				this.getFullElName('category-title'),
		// 				currentCategory ? this.j.i18n(currentCategory) : ''
		// 			);

		// 		this.cache[currentCategory] = category;
		// 		acc.push(category);
		// 	}

		// 	const elm =
		// 		this.cache[emoji.emoji + emoji.category] ??
		// 		this.j.c.div(
		// 			this.getFullElName('emoji'),
		// 			{ 'data-id': i, 'data-value': emoji.emoji },
		// 			emoji.emoji
		// 		);

		// 	this.cache[emoji.emoji + emoji.category] = elm;

		// 	acc.push(elm);

		// 	return acc;
		// }, [] as HTMLElement[]);
	}

	private onInsertCode(code: string): void {
		this.onInsert(code);

		const emoji = this.map[code];

		// Add emoji in recent list in the first position
		if (emoji) {
			let newRecent = [...this.recent]; // need for persistent storage
			const index = newRecent.findIndex(e => e.emoji === code);

			if (index !== -1) {
				newRecent.splice(index, 1);
			}

			newRecent.unshift({
				...emoji,
				category: -1
			});

			// Limit recent emojis count
			newRecent = newRecent.slice(0, 7);

			this.recent = newRecent;
		}
	}

	/**
	 * Scroll handler
	 */
	@throttle()
	private onScrollList(): void {
		const scrollTop = this.list.scrollTop,
			titles = this.getElms('category-title');

		let active = -1;
		titles.forEach(titleDom => {
			const pos = titleDom.offsetTop - this.list.offsetTop - 20;
			if (scrollTop > pos) {
				active = parseInt(attr(titleDom, 'category-id') || '-1');
			}
		});

		this.setActiveCategory(active);
	}

	@autobind
	private onClickCategory(e: MouseEvent): void {
		// this.clearFilter();

		const target = e.target as HTMLElement;

		if (target.classList.contains(this.getFullElName('category'))) {
			this.setActiveCategory(
				parseInt(attr(target, 'category-id') || '-1', 10) || 0,
				true
			);
		}
	}

	@autobind
	private onClickItem(e: MouseEvent): void {
		const target = e.target as HTMLElement;

		if (target.classList.contains(this.getFullElName('emoji'))) {
			const key = attr(target, '-value') || '';

			if (key) {
				this.onInsertCode(key);
			}
		}

		e.preventDefault();
	}

	// @debounce()
	// private onInputFilter(): void {
	// 	const value = this.input.value.toLowerCase();

	// 	if (!value.length) {
	// 		return this.setItems(this.defaultList);
	// 	}

	// 	this.setItems(
	// 		this.defaultList.filter(e => {
	// 			const emoji = Emoji.normalizeEmoji(e);

	// 			return (
	// 				emoji.description?.toLowerCase().includes(value) ||
	// 				emoji.tags?.join(' ').toLowerCase().includes(value) ||
	// 				emoji.aliases?.join(' ').toLowerCase().includes(value)
	// 			);
	// 		})
	// 	);
	// }

	// private clearFilter(): void {
	// 	if (this.input.nativeInput.value.length) {
	// 		this.reset();
	// 	}
	// }
}
