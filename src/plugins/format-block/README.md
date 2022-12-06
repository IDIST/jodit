# Apply block element H1,P,PRE,blockquote etc.

Plugin for inserting or changing the type of a block element: p => h1, h1 => h2 etc

All settings are reduced to adding a new field to `Config.prototype.controls.paragraph.list`

```js
Jodit.make('#editor', {
	controls: {
		paragraph: {
			list: {
				pre: 'Source code'
			}
		}
	}
});
```

If you want to completely override the list, you can do it with [[Jodit.atom]]

```js
Jodit.make('#editor', {
	controls: {
		paragraph: {
			list: Jodit.atom({
				p: 'Pharagraph',
				h1: 'Header 1',
				h2: 'Header 2',
				h3: 'Header 3',
				h4: 'Header 4',
				h5: 'Header 5',
				h6: 'Header 6',
				blockquote: 'Quote',
				div: 'Div',
				pre: 'Source code'
			})
		}
	}
});
```

[//]: # '-   [Changelog](plugins/format-block/CHANGELOG.md)'
