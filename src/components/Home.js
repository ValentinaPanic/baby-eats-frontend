import React from 'react'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Logout from '../components/Logout'
import { Link } from "react-router-dom";


function Home() {
    return (
        <div>
            {/* {  this.props.currentUser ? `Welcome ${this.props.currentUser.attributes.name}` : ""}
            {  this.props.currentUser ? <Logout/> : <Login/> } */}
            Please <Link to='/signup'> Sign Up </Link> or <Link to='/login'> Log In </Link>
        </div>
    )
}

export default Home
