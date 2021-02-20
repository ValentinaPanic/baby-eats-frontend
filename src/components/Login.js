import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm'
import { login } from '../actions/currentUser'

 const Login = ({loginForm, updateLoginForm, login}) => {

    const handleChange = event => {
        const formInfo = {
            ...loginForm,
            [event.target.name]: event.target.value
        }
        updateLoginForm(formInfo)
    }
    const handleSubmit = event => {
        event.preventDefault()
        login(loginForm)
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} name="username" value={loginForm.username} placeholder="username"/>
            <input type="text" onChange={handleChange} name="password" value={loginForm.password} placeholder="password"/>
            <input type="submit" name="login" value="Log In"/>
        </form>
    )

}
const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
    }
}
export default connect(mapStateToProps, {updateLoginForm, login})(Login)