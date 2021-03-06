import React from 'react'
import { Link } from "react-router-dom";


const WelcomePage = () => {
    return (
        <div>
            Please <Link to='/signup'> Sign Up </Link> or <Link to='/login'> Log In </Link>
        </div>
    )
}

export default WelcomePage
