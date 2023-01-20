/**
 * @module modules/uploader
 */

import type {
	IJodit,
	IUploader,
	IUploaderAnswer,
	IUploaderData,
	IUploaderOptions,
} from 'jodit/types';
import { Config } from 'jodit/config';
import { isArray } from 'jodit/core/helpers/checker/is-array';
import { isJoditObject } from 'jodit/core/helpers/checker/is-jodit-object';

declare module 'jodit/config' {
	interface Config {
		/**
		 * Enable drag and drop file editor
		 */
		enableDragAndDropFileToEditor: boolean;
		uploader: IUploaderOptions<IUploader>;
		uploaderApi: string;
	}
}

/**
 * Module for processing download documents and images by Drag and Drop
 * Drag and Drop files
 */

Config.prototype.enableDragAndDropFileToEditor = true;

Config.prototype.uploader = {
	url: (editor: IJodit, form: FormData) => {
		// Check file
		if (!(form && form.get('file'))) return;

		// Custom Server
		const file = form.get('file');

		// @ts-ignore
		const matchType = file.type.match(/([a-z0-9]+)\//i) as string[];
		// @ts-ignore
		const matchExtension = file.type.match(/\/([a-z0-9]+)/i) as string[];
		const fileType: string =
			matchType && matchType[1] ? matchType[1].toLowerCase() : '';
		const fileExtension: string =
			matchExtension && matchExtension[1]
				? matchExtension[1].toLowerCase()
				: '';

		let path;
		switch (fileType) {
			case 'image':
				if (fileExtension === 'gif') path = 'gif';
				else path = 'image';
				break;
			case 'video':
				path = 'video';
				break;
			default:
				path = 'file';
				break;
		}

		// @ts-ignore
		console.log(editor.o.uploaderApi);
		// @ts-ignore
		return new URL(
			path,
			editor.o.uploaderApi
		).href;
	},

	insertImageAsBase64URI: false,
	imagesExtensions: ['jpg', 'png', 'jpeg', 'gif'],
	headers: (authToken: string) => {
		if (authToken) {
			return { token: 'Authorization: ' + authToken };
		} else {
			return null;
		}
	},
	data: null,
	authToken: null,

	filesVariableName(): string {
		// return 'files[0]';
		return 'file';
	},

	withCredentials: false,
	pathVariableName: 'path',

	format: 'json',

	method: 'POST',

	prepareData(this: IUploader, formData: FormData) {
		return formData;
	},

	isSuccess(this: IUploader, resp: IUploaderAnswer): boolean {
		return resp.success;
	},

	getMessage(this: IUploader, resp: IUploaderAnswer) {
		return resp.data.message !== undefined && isArray(resp.data.message)
			? resp.data.message.join(' ')
			: '';
	},

	/**
	 * @see [[IUploader.processFileName]]
	 */
	processFileName(
		this: IUploader,
		key: string,
		file: File,
		name: string
	): [string, File, string] {
		return [key, file, name];
	},

	process(this: IUploader, resp: IUploaderAnswer): IUploaderData {
		return resp.data;
	},

	error(this: IUploader, e: Error) {
		this.j.e.fire('errorMessage', e.message, 'error', 4000);
	},

	getDisplayName(this: IUploader, filename: string): string {
		return filename;
	},

	defaultHandlerSuccess(this: IUploader, resp: IUploaderData) {
		const j = this.j || this;

		if (!isJoditObject(j)) {
			return;
		}

		if (!resp.file) return;

		let element;
		switch (resp.type) {
			case 'image':
				element = j.c.fromHTML(
					`<p><img style="width: ${
						j.o.imageDefaultWidth || 500
					}px;" src="${resp.url}" alt="${resp.file}"/></p><p></p>`
				);
				break;
			case 'gif':
				element = j.c.fromHTML(
					`<p><jodit-gif style="width: ${
						j.o.imageDefaultWidth || 500
					}px;" src="${resp.url}" alt="${resp.file}"/></p><p></p>`
				);
				break;
			case 'video':
				element = j.c.fromHTML(
					`<p><video controls style="width: ${
						j.o.imageDefaultWidth || 500
					}px;" src="${resp.url}" alt="${resp.file}"/></p><p></p>`
				);
				break;
			case 'file':
				element = j.c.fromHTML(
					`<jodit-file href="${resp.url}" alt="${resp.file}">${resp.file}</jodit-file><p></p>`
				);
				break;
			case 'audio':
				element = j.c.fromHTML(
					`<p><audio controls src="${resp.url}" alt="${resp.file}"></audio></p><p></p>`
				);
				break;
			default:
				element = j.c.fromHTML(
					`<p><a href="${resp.url}">${resp.file}</a></p><p></p>`
				);
				break;
		}
		j.s.insertHTML(element);
	},

	defaultHandlerError(this: IUploader, e: Error) {
		this.j.e.fire('errorMessage', e.message);
	},

	contentType(this: IUploader, requestData: any) {
		return (this.ow as any).FormData !== undefined &&
			typeof requestData !== 'string'
			? false
			: 'application/x-www-form-urlencoded; charset=UTF-8';
	}
} as IUploaderOptions<IUploader>;
