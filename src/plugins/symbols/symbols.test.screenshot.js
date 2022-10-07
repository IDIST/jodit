
require('../../../test/screenshots/bootstrap.screenshot.js');
const expect = require('expect');

describe('Symbols screenshot testing', () => {
	describe('Open symbols dialog', () => {
		it('works', async function () {
			await page.evaluate(() => {
				return clickButton('symbols', editor);
			});

			await page.waitForSelector('[role="dialog"]');
			const element = await page.$(
				'[role="dialog"] .jodit-dialog__panel'
			);
			const screenshot = await element.screenshot();
			expect(screenshot).toMatchImageSnapshot(this);
		});
	});
});
