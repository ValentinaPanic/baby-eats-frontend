import React from 'react'
import { connect } from 'react-redux'
import  { logout }  from '../actions/currentUser'

 function Logout({ logout }) {


    const handleSubmit = event => {
        event.preventDefault()
        logout()

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="submit" name="logout" value="Log Out" />
        </form>
    )

}

export default connect(null, { logout })(Logout)