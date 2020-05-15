import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from "redux-logger";
import thunk from "redux-thunk";

import {nasaReducer} from './reducers/nasaReducer';

//need to confirm above^^^

const store = createStore(nasaReducer, applyMiddleware(thunk, logger));
console.log(store.getState(), 'What we getting here in STORE ???????!!!!!!')


const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
