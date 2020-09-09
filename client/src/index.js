import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// -> Styling
import './Styles/index.scss';

// -> Redux
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Reducer from './Redux/Reducer';
const store = createStore(Reducer, applyMiddleware(thunk, logger));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);