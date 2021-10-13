import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import rootReducer from "./reducers/rootReducer";
import App from './App'
import './style/theme/default.css'
import ReactGA from 'react-ga';
ReactGA.initialize('UA-210094211-1');
ReactGA.pageview(window.location.pathname + window.location.search);
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);