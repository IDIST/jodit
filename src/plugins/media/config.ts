// /**
//  * @module plugins/media
//  */
//
// import { Config } from 'jodit/config';
//
// declare module 'jodit/config' {
// 	interface Config {
// 		/**
// 		 * Decorate media elements
// 		 */
// 		mediaInFakeBlock: boolean;
//
// 		/**
// 		 * Decorate media element with tag
// 		 */
// 		mediaFakeTag: string;
//
// 		/**
// 		 * Media tags
// 		 */
// 		mediaBlocks: string[];
// 	}
// }
//
// Config.prototype.mediaFakeTag = 'jodit-media';
// Config.prototype.mediaInFakeBlock = true;
// Config.prototype.mediaBlocks = ['video', 'audio'];
