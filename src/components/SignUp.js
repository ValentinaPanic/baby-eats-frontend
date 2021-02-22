import React from 'react'
import { connect } from 'react-redux'
import { updateSignUpForm } from '../actions/signUpForm'
import { signUp } from '../actions/currentUser'

 const SignUp = ({signUpForm, updateSignUpForm, signUp}) => {

    const handleChange = event => {
        const formInfo = {
            ...signUpForm,
            [event.target.name]: event.target.value
        }
        updateSignUpForm(formInfo)
    }
    const handleSubmit = event => {
        event.preventDefault()
        signUp(signUpForm)
    }
    
    return(
        <form onSubmit={handleSubmit}>
             <input type="text" onChange={handleChange} name="name" value={signUpForm.name} placeholder="name"/>
            <input type="text" onChange={handleChange} name="username" value={signUpForm.username} placeholder="username"/>
            <input type="text" onChange={handleChange} name="password" value={signUpForm.password} placeholder="password"/>
            <input type="submit" name="signUp" value="Sign Up"/>
        </form>
    )

}
const mapStateToProps = state => {
    return {
        signUpForm: state.signUpForm
    }
}
export default connect(mapStateToProps, {updateSignUpForm, signUp})(SignUp)