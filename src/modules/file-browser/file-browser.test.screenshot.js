
require('../../../test/screenshots/bootstrap.screenshot.js');
const expect = require('expect');

describe('Filebrowser screenshot testing', () => {
	describe('Open filebrowser', () => {
		it('works', async function () {
			await page.evaluate(() => {
				return editor.filebrowser.open();
			});

			await page.waitForSelector('[data-jodit-filebrowser-item="true"]');
			const dialog = await page.$('[role="dialog"] .jodit-dialog__panel');
			const screenshot = await dialog.screenshot();
			expect(screenshot).toMatchImageSnapshot(this);
		}).timeout(10000);
	});
});
