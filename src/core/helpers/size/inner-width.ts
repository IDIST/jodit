
/**
 * @module helpers/size
 */

export const innerWidth = (element: HTMLElement, win: Window): number => {
	const computedStyle: CSSStyleDeclaration = win.getComputedStyle(element);

	let elementWidth: number = element.clientWidth; // width with padding

	elementWidth -=
		parseFloat(computedStyle.paddingLeft || '0') +
		parseFloat(computedStyle.paddingRight || '0');

	return elementWidth;
};
