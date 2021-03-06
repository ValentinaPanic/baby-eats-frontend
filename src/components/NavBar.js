import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {connect} from 'react-redux'
import Logout from './Logout'
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {
    return (
        
          // <Navbar bg="light" variant="dark" fixed="top" expand="true">
            <div className="mr-auto"> 
            <NavLink href="#home" exact activeClassName="active" to='/home'> Home </NavLink>
            <NavLink exact activeClassName="active" to='/current-week'> Current Week </NavLink>
            <NavLink exact activeClassName="active" to='/days/new'> Create Meal </NavLink>
        
             {props.loggedIn  ? 
             <Logout/>  
              
            
            : null}
            </div>
        //  </Navbar>
   

    )}
const mapStateToProps = state => {
    console.log(state.currentUser)
    return{
        loggedIn: !!state.currentUser,
        currentUser: state.currentUser,
    }
   
  }

export default connect(mapStateToProps)(NavBar)
