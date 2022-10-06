/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import * as React from 'react';
import { IJodit } from 'jodit/types/jodit';

declare module 'jodit-react' {
	export interface IJoditEditorProps {
		value: string;
		config?: Partial<IJodit['options']>;
		onChange: (newValue: string) => void;
		onBlur: (newValue: string) => void;
	}
	const JoditEditor: React.ForwardRefExoticComponent<
		React.PropsWithoutRef<IJoditEditorProps> & React.RefAttributes<IJodit>
	>;
	export default JoditEditor;
	export { IJodit };
}
