
/**
 * @module helpers/size
 */

export const getContentWidth = (element: HTMLElement, win: Window): number => {
	const pi = (value: string): number => parseInt(value, 10),
		style: CSSStyleDeclaration = win.getComputedStyle(element),
		width: number = element.offsetWidth,
		paddingLeft: number = pi(style.getPropertyValue('padding-left') || '0'),
		paddingRight: number = pi(
			style.getPropertyValue('padding-right') || '0'
		);

	return width - paddingLeft - paddingRight;
};
