import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm'
import { login } from '../actions/currentUser'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

 const Login = ({loginForm, updateLoginForm, login, history}) => {

    const handleChange = event => {
        const formInfo = {
            ...loginForm,
            [event.target.name]: event.target.value
        }
        updateLoginForm(formInfo)
    }
    const handleSubmit = event => {
        event.preventDefault()
        login(loginForm, history)
    }
    
    return(
       
        <Container fluid="sm">
             <Link to="/">Go Back</Link>
            <Form className="justify-content-md-center"  onSubmit={handleSubmit}>
                <Form.Group >
                    <Form.Label>Username</Form.Label>
                    <Form.Control as="input" type="text" placeholder="Enter username" onChange={handleChange} name="username" value={loginForm.username} />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control as="input" type="password" placeholder="Password" onChange={handleChange} name="password" value={loginForm.password}/>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form.Group> 
            </Form> 
        </Container>
    )

}
const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
    }
}
export default connect(mapStateToProps, {updateLoginForm, login})(Login)