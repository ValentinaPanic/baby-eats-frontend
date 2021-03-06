import React from 'react';
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import {deleteDay} from '../actions/daysAction'
import { Container } from 'react-bootstrap';

const FoodCard = ({food, deleteDay, history}) => {

    const handleClick = () =>{
      deleteDay(food.day_id, history)
    }
  
    return food &&
         <>
           <Container fluid="sm">
           <ListGroup className="justify-content-md-center" >
            <ListGroup.Item action variant="danger" key={food.id} > <strong>{food.meal_type}</strong> - {food.name} 
            <span>
            <Button onClick={handleClick} variant="info" size="sm"> Delete </Button></span></ListGroup.Item>
             </ListGroup>  
            </Container>       
        </>
       
}

export default withRouter(connect(null, {deleteDay})(FoodCard))
