import React from 'react'
import { connect } from 'react-redux'
import {  withRouter} from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { createList } from "../actions/listForm"
import { postList } from "../actions/listActions"

export const ShoppingListForm = ({listData, userId, postList, createList, history}) => {

    const handleChange = event =>{
        const {name, value} = event.target
        const updatedListForm ={
            [name]: value
        }
        createList(updatedListForm)
    }
    const handleSubmit = event => {
        event.preventDefault()
        postList(listData, history)
    }
    return (
        <Form className="justify-content-md-center" inline onSubmit={handleSubmit}>
          <Form.Group >
           <Form.Control as='input' type="text" name="name" value={listData.name} onChange={handleChange}/>
           
            <Button variant="info" type="submit">
             Add To List
            </Button>
         </Form.Group>
        </Form>
    )
}

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
        listData: state.listForm,
        userId
    }
}


export default withRouter(connect(mapStateToProps, {postList, createList})(ShoppingListForm))
