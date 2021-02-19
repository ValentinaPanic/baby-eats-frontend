import React from 'react'
import { connect } from 'react-redux'

 const Login = () => {

    return(
        <form onSubmit={undefined}>
            <input type="text" onChange={undefined} name="username" value={undefined} placeholder="username"/>
            <input type="text" onChange={undefined} name="password" value={undefined} placeholder="password"/>
            <input type="submit" name="login" value="Log In"/>
        </form>
    )

}
const mapStateToProps = state => {
    return {
        username: state.loginForm.username,
        password: state.loginForm.password
    }
}
export default connect(mapStateToProps) (Login)