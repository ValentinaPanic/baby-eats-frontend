import React from 'react';
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import {deleteFood} from '../actions/daysAction'
import { Container } from 'react-bootstrap';

const FoodCard = ({food, dayId, deleteFood, history}) => {
console.log(dayId)
    const handleClick = () =>{
      
      deleteFood(dayId, food.id, history)
    }
  
    return( 
            <Container fluid="sm" style={{width:"50%"}}>
             <ListGroup className="justify-content-md-center" >
                <span><ListGroup.Item  variant="danger" key={food.id} > <strong>{food.meal_type} - {food.name} </strong>
                
                <Button onClick={handleClick} variant="info" size="sm"> Delete </Button>
                </ListGroup.Item></span>
              </ListGroup>  
            </Container>       
     )
       
}

export default withRouter(connect(null, {deleteFood})(FoodCard))
