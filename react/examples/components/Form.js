import React, { useState } from 'react';
import JoditEditor from '../../src/';
import './Form.css';

/**
 * @param {Jodit} jodit
 */
const Form = () => {
	// States
	const [config] = useState({
		iframe: false,
		toolbar: true,
		toolbarStyle: 'top',
		editorCssClass: '',
		minHeight: '500px'
	});
	const [textAreaValue] = useState('');

	return (
		<div>
			<JoditEditor config={config} />
			{textAreaValue}
		</div>
	);
};

export default Form;
