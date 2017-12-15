import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from '../lib';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Calendar show />, document.getElementById('root'));
registerServiceWorker();
