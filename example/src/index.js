import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// eslint-disable-next-line no-unused-vars
import i18n from './i18n/i18n';
import './util/no-focus-event';

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
