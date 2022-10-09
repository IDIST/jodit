import React, { useState } from 'react';
import JoditEditor from '../../src/';
import './Form.css';

/**
 * @param {Jodit} jodit
 */
const Form = () => {
	// States
	const [config] = useState({
		toolbarStyle: 'top',
		minHeight: '500px',
		uploader: {
			url: 'https://xdsoft.net/jodit/finder/index.php?action=fileUpload'
		}
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
