import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm'

 const Login = ({loginForm, updateLoginForm}) => {

    const handleChange = event => {
        const formInfo = {
            ...loginForm,
            [event.target.name]: event.target.value
        }
        updateLoginForm(formInfo)
    }
    
    return(
        <form onSubmit={undefined}>
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
export default connect(mapStateToProps, {updateLoginForm}) (Login)