import React, { useCallback, useState } from 'react';

import JoditEditor, { Jodit } from '../../src/';
import './Form.css';

/**
 * @param {Jodit} jodit
 */
const Form = () => {
	// States
	const [config] = useState({
		toolbar: true,
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
