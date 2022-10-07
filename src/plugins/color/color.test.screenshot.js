
require('../../../test/screenshots/bootstrap.screenshot.js');
const expect = require('expect');

describe('Color picker screenshot testing', () => {
	describe('Open color picker', () => {
		it('works', async function () {
			await page.evaluate(() => {
				return clickButton('brush', editor);
			});

			await page.waitForSelector('[role="popup"]');
			await page.evaluate(() => editor.async.requestIdlePromise());
			const element = await page.$(
				'[role="popup"] .jodit-popup__content'
			);
			const screenshot = await element.screenshot();
			expect(screenshot).toMatchImageSnapshot(this);
		}).timeout(10000);
	});
});
