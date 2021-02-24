import React, { Component } from 'react'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Logout from '../components/Logout'
import Home from "../components/Home";
import { connect } from 'react-redux'
import { getCurrentUser} from '../actions/currentUser'
import { Route, withRouter } from "react-router-dom";
import WeekContainer from './WeekContainer';
//  import WeekNotes from '../components/WeekNotes'


 class WelcomePage extends Component {
    componentDidMount(){
        this.props.getCurrentUser()
    
     }
    

    render(){
        const { loggedIn } = this.props
        return(
            <div>
                {loggedIn ? <Logout/> : null}
                
                <Route exact path = "/login" component={Login}/>  
                <Route exact path = "/signup" component={SignUp}/> 
                <Route exact path = "/weeks" component={WeekContainer}/>
                <h3>
                    Welcome to Baby Eats <br></br>
                    We are here to help you organize your baby meals.   
                </h3> 
                {loggedIn ? <WeekContainer/> : <Home/>}
            </div>
        )

    }
    
 }
 const mapStateToProps = state => {
    return{
        loggedIn: !!state.currentUser
    }
   
  }
 export default withRouter(connect(mapStateToProps, { getCurrentUser })(WelcomePage))