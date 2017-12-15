import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './Calendar';

it('Calendar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calendar />, div);
});
