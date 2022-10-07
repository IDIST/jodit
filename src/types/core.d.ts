
/**
 * @module types
 */

import type { IComponent, IDictionary } from './types';

export type DecoratorHandler = <T extends IComponent & IDictionary>(
	target: T,
	propertyKey: string
) => void | PropertyDescriptor;
