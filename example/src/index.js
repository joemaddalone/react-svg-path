
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// eslint-disable-next-line no-unused-vars
import i18n from './i18n/i18n';

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept();
}
