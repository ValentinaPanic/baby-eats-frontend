import React, { Component } from 'react'
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
                <br/>
                 <WeekContainer/> 
                <DayForm/> 
               <DayCard days={days} today={today}/>
                </>
                 : <WelcomePage/>}
            </div>
        )
    }
    
 }
 const mapStateToProps = state => {
        const today = new Date(state.dayForm.date)
        console.log(typeof today)
    return{
        loggedIn: !!state.currentUser,
        days: state.days.days,
        today

    }
   
  }
 export default withRouter(connect(mapStateToProps, { getCurrentUser })(Home))