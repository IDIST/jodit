/**
 * @module modules/uploader
 */

import type {
	HandlerError,
	HandlerSuccess,
	IUploader
	// IUploaderData
} from 'jodit/types';
import { error, isFunction, isPlainObject, toArray } from 'jodit/core/helpers';
import { send } from 'jodit/modules/uploader/helpers/send';

/**
 * Send files to server
 */
export function sendFiles(
	uploader: IUploader,
	files: FileList | File[] | null,
	handlerSuccess?: HandlerSuccess,
	handlerError?: HandlerError,
	process?: (form: FormData) => void
): Promise<any> {
	if (!files) {
		return Promise.reject(error('Need files'));
	}

	const { o } = uploader;

	let fileList: File[] = toArray(files);

	if (!fileList.length) {
		return Promise.reject(error('Need files'));
	}

	const promises: Array<Promise<any>> = [];

	fileList = fileList.filter(a => a);

	if (!fileList.length) return Promise.all(promises);

	// Save files
	for (let i = 0; i < fileList.length; i += 1) {
		const form = new FormData();

		// form.append(o.pathVariableName, uploader.path);
		// form.append('source', uploader.source);

		const file: File = fileList[i];
		if (!file) continue;

		const hasRealExtension = /\.[\d\w]+$/.test(file.name);
		const match_type = file.type.match(/([a-z0-9]+)\//i) as string[];
		const match_extension = file.type.match(/\/([a-z0-9]+)/i) as string[];

		const fileType: string =
			match_type && match_type[1] ? match_type[1].toLowerCase() : '';
		const fileExtension: string =
			match_extension && match_extension[1]
				? match_extension[1].toLowerCase()
				: '';

		const time = String(new Date().getTime());
		let newName = file.name ? `${time}_${file.name}` : time;

		if (!hasRealExtension && fileExtension) {
			let extForReg = fileExtension;

			if (['jpeg', 'jpg'].includes(extForReg)) {
				extForReg = 'jpeg|jpg';
			}

			const reEnd = new RegExp('.(' + extForReg + ')$', 'i');

			if (!reEnd.test(newName)) {
				newName += '.' + fileExtension;
			}
		}

		const [key, iFile, name] = o.processFileName.call(
			uploader,
			o.filesVariableName(fileType, fileExtension),
			fileList[i],
			newName
		);
		// Add file
		form.append(key, iFile, name);

		if (process) {
			process(form);
		}

		if (o.data && isPlainObject(o.data)) {
			Object.keys(o.data).forEach((key: string) => {
				form.append(key, (o.data as any)[key]);
			});
		}

		o.prepareData.call(uploader, form);

		promises.push(
			send(uploader, form)
				.then(resp => {
					const handler = isFunction(handlerSuccess)
						? handlerSuccess
						: o.defaultHandlerSuccess;
					handler.call(uploader, o.process.call(uploader, resp));
					return resp;
				})
				.then(() => {
					uploader.j.events && uploader.j.e.fire('filesWereUploaded');
				})
		);
	}

	return Promise.all(promises);
}
