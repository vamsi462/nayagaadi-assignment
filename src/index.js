import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './helpers/store';

// setup fake backend
import {configureMockBackend} from './helpers'
configureMockBackend();

ReactDOM.render(
  <Provider store={store}>
  <App/>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
