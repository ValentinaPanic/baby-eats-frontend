import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router} from 'react-router-dom'

import newDayForm from './reducers/newDayForm'
import days from './reducers/daysReducer'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import signUpForm from './reducers/signUpForm'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 

const reducers = combineReducers({
  currentUser,
  loginForm,
  signUpForm,
  newDayForm,
  days,
})
const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router> 
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);


