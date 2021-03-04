import React, { Component } from 'react'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Logout from '../components/Logout'
import Home from "../components/Home";
import { connect } from 'react-redux'
import { getCurrentUser} from '../actions/currentUser'
import { Route, withRouter, Switch } from "react-router-dom";
import WeekContainer from './WeekContainer';
import DayForm from "../components/DayForm";
import DayCard from "../components/DayCard";
import NewDayFormContainer from "./NewDayFormContainer";
import EditDayContainer from "./EditDayContainer";
// import FoodCard from "../components/FoodCard";



 class WelcomePage extends Component {
    componentDidMount(){
        this.props.getCurrentUser()
    
     }
    render(){
        const { loggedIn } = this.props
        return(
            <div>
                 <h3>
                    Welcome to BabyEats <br></br>
                    We are here to help you organize your baby meals.   
                </h3>
                {loggedIn ? <><Logout/></> : null}
                <Switch>
                <Route exact path = "/login" component={Login}/>  
                <Route exact path = "/signup" component={SignUp}/> 
                <Route exact path = "/days/new" component={DayForm}/>
                <Route exact path = "/days/:id/" render={props => {
                     const day = this.props.days && this.props.days.find(day => day.id === props.match.params.id)

                    return <DayCard day={day} {...props}/>}}
                    
                />
                <Route exact path = "/days/:id/edit" render={props => {
                     const day = this.props.days && this.props.days.find(day => day.id === props.match.params.id)
                        console.log(day)
                    return <EditDayContainer day={day} {...props}/>}}
                    
                />
                </Switch>
                {loggedIn ? 
                <>
                <DayCard days={this.props.days} today={this.props.today}/> 
                <WeekContainer/>   </>
                 : <Home/>}
            </div>
        )

    }
    
 }
 const mapStateToProps = state => {
    // console.log(state.days.days)
    return{
        loggedIn: !!state.currentUser,
        days: state.days.days,
        today: state.dayForm.date

    }
   
  }
 export default withRouter(connect(mapStateToProps, { getCurrentUser })(WelcomePage))