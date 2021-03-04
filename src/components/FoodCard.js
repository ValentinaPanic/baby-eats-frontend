import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import {deleteDay} from '../actions/daysAction'

const FoodCard = ({food, deleteDay, history}) => {

    const handleClick = () =>{
        // console.log(food)
      deleteDay(food.day_id, history)
    }
  
    return food &&
         <div>
            <li key={food.id}> <strong>{food.meal_type}</strong> - {food.name} 
            <span><Link to={`days/${food.day_id}/edit`} > Edit </Link >
            <button onClick={handleClick}> Delete </button></span></li>
                     
        </div>
       
}

export default withRouter(connect(null, {deleteDay})(FoodCard))
