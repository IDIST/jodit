/**
 * @module helpers/utils
 */

export const val = (
	elm: HTMLInputElement | HTMLElement,
	selector: string,
	value?: string | null
): string => {
	const child = elm.querySelector(selector) as HTMLInputElement;

	if (!child) {
		return '';
	}

	if (value) {
		child.value = value;
	}

	return child.value;
};
