/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import './app.css';

import React from 'react';
import Form from './components/Form';

// For React < 18
// import ReactDOM from 'react-dom';
// ReactDOM.render(<Form />, document.getElementById('editor'));

import { createRoot } from 'react-dom/client';
const container = document.getElementById('editor');
const root = createRoot(container);
root.render(<Form />);
