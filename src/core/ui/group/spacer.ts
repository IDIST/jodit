
/**
 * @module ui/group
 */

import { UIElement } from 'jodit/core/ui/element';
import { component } from 'jodit/core/decorators/component/component';

@component
export class UISpacer extends UIElement {
	override className(): string {
		return 'UISpacer';
	}
}
