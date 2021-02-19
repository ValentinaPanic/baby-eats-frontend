import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 
const users = () => []
const reducers = combineReducers({
  users
})
const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


