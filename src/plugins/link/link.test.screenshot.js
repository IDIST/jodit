
require('../../../test/screenshots/bootstrap.screenshot.js');
const expect = require('expect');

describe('Link popup screenshot testing', () => {
	describe('Open link popup', () => {
		it('works', async function () {
			await page.evaluate(() => {
				return clickButton('link', editor);
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
