import React, { Component } from 'react'
import Logout from '../components/Logout'
import WelcomePage from "../components/WelcomePage";
import { connect } from 'react-redux'
import { getCurrentUser} from '../actions/currentUser'
import { withRouter } from "react-router-dom";
import WeekContainer from './WeekContainer';
import DayCard from "../components/DayCard";
import DayForm from "../components/DayForm";
import NavBar from "../components/NavBar";


 class Home extends Component {
    componentDidMount(){
        this.props.getCurrentUser()
    
     }
    render(){
        const { loggedIn, days, today } = this.props
        return(
            <div>                           
                {loggedIn ? 
                <>
                <NavBar /> 
                <DayForm/>
                <WeekContainer/>
                <DayCard days={days} today={today}/> 
                </>
                 : <WelcomePage/>}
            </div>
        )
    }
    
 }
 const mapStateToProps = state => {
 
    return{
        loggedIn: !!state.currentUser,
        days: state.days.days,
        today: state.dayForm.date

    }
   
  }
 export default withRouter(connect(mapStateToProps, { getCurrentUser })(Home))