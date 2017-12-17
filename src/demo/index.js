import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from '../lib';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Calendar
    onSelect={(date) => console.log(date)}
    show
    keyboardInput
  />, document.getElementById('root'));
registerServiceWorker();
