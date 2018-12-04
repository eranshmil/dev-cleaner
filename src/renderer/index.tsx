import React from 'react';
import { render } from 'react-dom';

import App from './App';

import './styles.scss';

render(<App />, document.getElementById('app'));

document.body.classList.add('mdc-typography')

let link = document.createElement('link')
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
document.body.appendChild(link)