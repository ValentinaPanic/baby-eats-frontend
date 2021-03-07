import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { updateSignUpForm } from '../actions/signUpForm'
import { signUp } from '../actions/currentUser'

 const SignUp = ({signUpForm, updateSignUpForm, signUp, history}) => {

    const handleChange = event => {
        const formInfo = {
            ...signUpForm,
            [event.target.name]: event.target.value
        }
        updateSignUpForm(formInfo)
    }
    const handleSubmit = event => {
        event.preventDefault()
        signUp(signUpForm, history)
    }
    
    return(

        <Container fluid="sm">
        <Form className="justify-content-md-center"  onSubmit={handleSubmit}>

            <Form.Group >
                <Form.Label>Name</Form.Label>
                <Form.Control as="input" type="text" placeholder="Enter your name" onChange={handleChange} name="name" value={signUpForm.name} />
            </Form.Group>
            <Form.Group >
                <Form.Label>Username</Form.Label>
                <Form.Control as="input" type="text" placeholder="Enter username" onChange={handleChange} name="username" value={signUpForm.username} />
            </Form.Group>
            <Form.Group >
                <Form.Label>Password</Form.Label>
                <Form.Control as="input" type="password" placeholder="Password" onChange={handleChange} name="password" value={signUpForm.password}/>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form.Group> 
        </Form> 
     </Container> 
    )

}
const mapStateToProps = state => {
    return {
        signUpForm: state.signUpForm
    }
}
export default connect(mapStateToProps, {updateSignUpForm, signUp})(SignUp)