/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */

import './styles/index.less';

import { JoditPro } from './JoditPro';
import * as Modules from './modules/';
import * as plugins from './plugins';
import {Jodit as DefaultJodit} from "./jodit";
import * as Icons from "./styles/icons";
import * as decorators from "./core/decorators";
import Languages from "./langs";


declare function require(moduleName: string): any;
const esFilter = (key: string): boolean => key !== '__esModule';

Object.keys(plugins).forEach((pluginName) =>
	JoditPro.plugins.add(pluginName, (plugins as any)[pluginName])
);

// Icons
Object.keys(Icons)
	.filter(esFilter)
	.forEach((key: string) => {
		Modules.Icon.set(key.replace('_', '-'), (Icons as any)[key]);
	});

// Modules
Object.keys(Modules)
	.filter(esFilter)
	.forEach((key: string) => {
		// @ts-ignore
		DefaultJodit.modules[key] = Modules[key];
	});

// Decorators
Object.keys(decorators)
	.filter(esFilter)
	.forEach((key: string) => {
		// @ts-ignore
		DefaultJodit.decorators[key] = decorators[key];
	});

['Confirm', 'Alert', 'Prompt'].forEach((key: string) => {
	// @ts-ignore
	DefaultJodit[key] = Modules[key];
});

// Languages
Object.keys(Languages)
	.filter(esFilter)
	.forEach((key: string) => {
		DefaultJodit.lang[key] = (Languages as any)[key];
	});

export const Jodit = JoditPro;
