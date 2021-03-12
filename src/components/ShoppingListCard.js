import React from 'react'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import { deleteList } from '../actions/listActions'


 const ShoppingListCard = ({lists, history,  deleteList}) => {
    const handleClick = (listId) =>{
        deleteList(listId)
        history.push('/lists')
      }
     
    return (
     
        <Container fluid="sm">
            <ListGroup className="justify-content-md-center" >
            {lists && lists.length > 0 ? lists.map(list =>{
              
           return  <ListGroup.Item variant="success" key={list.id}><strong>{list.attributes.name }</strong>
           <Button onClick={() => handleClick(list.id)} variant="info" size="sm"> Delete </Button>
           </ListGroup.Item>}
        ) : null}
         </ListGroup>
        </Container>

    )
}
const mapStateToProps = state => {
      const lists = state.lists ? state.lists : null

    return {
        lists: lists
       
    }
   
}
export default withRouter(connect(mapStateToProps, {deleteList})(ShoppingListCard))