import React, { Component } from 'react'
import Login from './components/Login'
import Logout from './components/Logout'
import { connect } from 'react-redux'
import { getCurrentUser} from './actions/currentUser'
// import currentUsers from './reducers/currentUser'


class App extends Component{
 
  componentDidMount(){
    this.props.getCurrentUser()

 }

  render(){
   
    return (
        this.props.currentUser ? <Logout/> : <Login/>
    );
  } 
}
const mapStateToProps = state => {
  return{
     currentUser: state.currentUser
  }
 
}

export default connect(mapStateToProps, { getCurrentUser })(App);
