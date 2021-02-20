import React, { Component } from 'react'
import Login from '../components/Login'
import Logout from '../components/Logout'
import { connect } from 'react-redux'
import { getCurrentUser} from '../actions/currentUser'


 class WelcomePage extends Component {
    componentDidMount(){
        this.props.getCurrentUser()
    
     }
    

    render(){
        console.log(this.props.currentUser)
        return(
            <div>
           {  this.props.currentUser ? <Logout/> : <Login/>}
           {  this.props.currentUser ? `Welcome ${this.props.currentUser.attributes.name}` : ""}

            <p>
                Welcome to Baby Eats <br></br>
                We are here to help you organize your baby meals. 
            </p>
               
            </div>
        )

    }
    
 }
 const mapStateToProps = state => {
    return{
       currentUser: state.currentUser
    }
   
  }
 export default connect(mapStateToProps, { getCurrentUser })(WelcomePage)