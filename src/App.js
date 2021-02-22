import React, { Component } from 'react'
import  WelcomePage  from './containers/WelcomePageContainer'
import  WeekContainer  from './containers/WeekContainer'
import Login from './components/Login'


import { Route } from 'react-router-dom'
import SignUp from './components/SignUp'

class App extends Component{

  render(){
    return (      
      <div>
        {/* <Route exact path = "/login" component={Login}/>  */}
        {/* <Route exact path = "/signup" component={SignUp}/>  */}
        <SignUp/>
        <WelcomePage/> 
        <WeekContainer/>
      </div>

    )
  } 
}

export default App
