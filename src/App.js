import "./App.css";
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter, Switch } from "react-router-dom";
import  WelcomePage  from './containers/HomePageContainer'
import { getCurrentUser} from './actions/currentUser'
import Footer from './components/Footer'
import Login from './components/Login'
import SignUp from './components/SignUp'
import DayForm from './components/DayForm';
import ShoppingList from './containers/ShoppingList';
import HomePageContainer from "./containers/HomePageContainer";
import WeekContainer from './containers/WeekContainer';
import NavBar  from "./components/NavBar";


class App extends Component{

  componentDidMount(){
    this.props.getCurrentUser()

 }
  render(){
    const { loggedIn } = this.props
    return (      
      <div>
         <Switch>
                <Route exact path='/' render={()=> loggedIn ? <HomePageContainer/> : <WelcomePage/>} />
                <Route exact path = "/current-week" component={HomePageContainer}/> 
                <Route exact path = "/home"  render={props => <> <br/><br/><br/><WeekContainer {...props}/></>}/>
                <Route exact path = "/login" component={Login}/>  
                <Route exact path = "/signup" component={SignUp}/> 
                <Route exact path = "/days/new" render={props => <> <br/><br/><br/><DayForm {...props}/></>}/>
                <Route exact path = "/lists" render={props => <> <br/><br/><br/><ShoppingList {...props}/></>}/>
            
          </Switch>
          {loggedIn ? <NavBar/> : null}
  
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
