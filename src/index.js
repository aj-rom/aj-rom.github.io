import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import rootReducer from "./reducers/rootReducer";
import App from './App'
import TagManager from 'react-gtm-module';
import './style/theme/default.css'

const store = createStore(rootReducer, applyMiddleware(thunk))
const tagManager = { gtmId: 'G-GG59QNM49Y' }
TagManager.initialize(tagManager)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);