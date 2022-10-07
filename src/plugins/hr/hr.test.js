
describe('Test insert plugins', function () {
	describe('hr', function () {
		it('Should insert horizontal line', function () {
			const editor = getJodit();
			editor.execCommand('insertHorizontalRule');
			editor.execCommand('insertHorizontalRule');
			editor.execCommand('insertHorizontalRule');
			expect(editor.value).equals('<hr><hr><hr><p></p>');
		});
	});
});
