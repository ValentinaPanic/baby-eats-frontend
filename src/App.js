import "./App.css";
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter, Switch } from "react-router-dom";
import  WelcomePage  from './containers/HomePageContainer'
import EditDayContainer from "./containers/EditDayContainer";
import { getCurrentUser} from './actions/currentUser'
import Footer from './components/Footer'
import Login from './components/Login'
import SignUp from './components/SignUp'
import DayForm from './components/DayForm';
import DayCard from "./components/DayCard";
import HomePageContainer from "./containers/HomePageContainer";
import WeekContainer from './containers/WeekContainer';


class App extends Component{

  componentDidMount(){
    this.props.getCurrentUser()

 }
  render(){
    // const { loggedIn } = this.props
    return (      
      <div>
         <Switch>
                <Route exact path = "/home" component={HomePageContainer}/> 
                <Route exact path = "/current-week" component={WeekContainer}/>
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
          <WelcomePage/> 
          <Footer/>
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
