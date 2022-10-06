import React, { useCallback, useState } from 'react';

import JoditEditor, { Jodit } from '../../src/';
import './Form.css';

/**
 * @param {Jodit} jodit
 */
const Form = () => {
	// States
	const [config, setConfig] = useState({
		toolbar: true,
		minHeight: '500px'
	});
	const [textAreaValue] = useState('');

	// Callbacks
	const toggleToolbar = useCallback(
		() =>
			setConfig(config => ({
				...config,
				toolbar: !config.toolbar
			})),
		[]
	);

	const toggleReadOnly = useCallback(
		() =>
			setConfig(config => ({
				...config,
				readonly: !config.readonly
			})),
		[]
	);

	return (
		<div>
			<JoditEditor config={config} />
			{/*{textAreaValue}*/}
			{/*<button onClick={toggleReadOnly} type={'button'}>*/}
			{/*	{'Toggle Read-Only'}*/}
			{/*</button>*/}
			{/*<button onClick={toggleToolbar} type={'button'}>*/}
			{/*	{'Toggle Toolbar'}*/}
			{/*</button>*/}
		</div>
	);
};

export default Form;
