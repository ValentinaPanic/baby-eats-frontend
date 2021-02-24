import React, { Component } from 'react'
import  WelcomePage  from './containers/WelcomePageContainer'
// import  WeekContainer  from './containers/WeekContainer'
// import Home from './components/Home'

import { connect } from 'react-redux'
import { getCurrentUser} from './actions/currentUser'
import { withRouter } from "react-router-dom";


import { Route } from 'react-router-dom'
import SignUp from './components/SignUp'

class App extends Component{

  componentDidMount(){
    this.props.getCurrentUser()

 }


  render(){
    const { loggedIn } = this.props
    return (      
      <div>
          <WelcomePage/> 
       
      </div>

    )
  } 
}

const mapStateToProps = state => {
  return{

     loggedIn: !!state.currentUser
  }
 
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App))
