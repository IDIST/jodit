/**
 * @module types
 */

import type {IJodit} from './jodit';
import type {CanPromise, IDestructible, IInitable} from './types';
import type {IViewBased} from './view';
import type {ButtonGroup, IControlType} from './toolbar';

export interface IPluginButton {
	name: string;
	group?: ButtonGroup;
	position?: number;
	options?: IControlType;
}

export class IPlugin<T extends IViewBased = IViewBased>
	implements IDestructible, IInitable {
	static requires?: string[];
	requires?: string[];

	hasStyle?: boolean;

	/**
	 * Plugin buttons
	 */
	buttons?: IPluginButton[];

	constructor(jodit?: T);

	init(jodit: T): void;

	destruct(jodit?: T): void;
}

interface PluginFunction {
	// eslint-disable-next-line @typescript-eslint/no-misused-new
	constructor(jodit: IViewBased): void;
}

export type PluginType = typeof IPlugin | IPlugin | PluginFunction | Function;
export type PluginInstance = IPlugin | object;

export interface IExtraPlugin {
	name: string;
	url?: string;
}

export interface IPluginSystem {
	add(name: string, plugin: any): void;

	wait(name: string): Promise<void>;

	get(name: string): PluginType | void;

	remove(name: string): void;

	init(jodit: IJodit): CanPromise<void>;
}
