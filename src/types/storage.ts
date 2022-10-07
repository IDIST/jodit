
/**
 * @module types
 */

export type StorageValueType =
	| string
	| number
	| boolean
	| object
	| StorageValueType[];

export interface IStorage<T = StorageValueType> {
	set(key: string, value: T): IStorage<T>;
	delete(key: string): IStorage<T>;
	get<R = T>(key: string): R | void;
	exists(key: string): boolean;
	clear(): IStorage<T>;
}
