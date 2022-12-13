import React, { useState } from 'react';
// import JoditEditor from '../../src/';
import JoditEditor from '../../build/jodit-react';
import './Form.css';

/**
 * @param {Jodit} jodit
 */
const Form = () => {
	// States
	const [config] = useState({
		toolbarStyle: 'top',
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
