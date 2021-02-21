import React, { Component } from 'react'
import  WelcomePage  from './containers/WelcomePageContainer'
import  WeekContainer  from './containers/WeekContainer'

class App extends Component{

  render(){
    return (      
      <div>
        <WelcomePage/> 
        <WeekContainer/>
      </div>

    )
  } 
}

export default App
