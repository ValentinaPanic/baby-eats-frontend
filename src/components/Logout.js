import React from 'react'
import { connect } from 'react-redux'
import  { logout }  from '../actions/currentUser'
import { withRouter } from 'react-router-dom'
 function Logout({ logout, history }) {


    const handleSubmit = event => {
        event.preventDefault()
        logout()
        history.push("/")

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="submit" name="logout" value="Log Out" />
        </form>
    )

}

export default withRouter(connect(null, { logout })(Logout))