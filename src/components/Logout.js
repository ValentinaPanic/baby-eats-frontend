import React from 'react'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import  { logout }  from '../actions/currentUser'
import { withRouter } from 'react-router-dom'
 function Logout({ logout, history }) {


    const handleClick = event => {
        event.preventDefault()
        logout()
        history.push("/")

    }

    return <Button onClick={handleClick} variant="outline-primary" size="sm" > Logout </Button>

}

export default withRouter(connect(null, { logout })(Logout))