import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router} from 'react-router-dom'

import dayForm from './reducers/dayForm'
import days from './reducers/daysReducer'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import signUpForm from './reducers/signUpForm'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 

const reducers = combineReducers({
  currentUser,
  loginForm,
  signUpForm,
  dayForm,
  days,
})
const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router> 
      <App className="App"/>
    </Router>
  </Provider>,
  document.getElementById('root')
);


