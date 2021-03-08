import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from "react-redux"
import {  withRouter} from 'react-router-dom';
// import { format } from "date-fns";
import { createDay } from "../actions/dayForm"
import { postDay } from "../actions/daysAction"

const DayForm = ({dayData, createDay, postDay, userId, history}) => {
    const handleChange = (event) =>{
        const { name,value} = event.target 
        const updatedFormInfo = {
            ...dayData,
            [name]: value
          }
        createDay(updatedFormInfo) 
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        
        postDay({
            ...dayData,
            userId
        }, history)

    }
       
      const handleFoodsChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
          ...dayData,
          foods: {
            ...dayData.foods,
            [name]: value
          }
        }
        createDay(updatedFormInfo)
      }
        
        // const dayFormat = "yyyy-MM-dd"
        // const newDate = new Date(dayData.date)
        
        // const dateForm = format(newDate, dayFormat)
        //  debugger
    return (
      <Form className="justify-content-md-center" inline onSubmit={handleSubmit}>
        <Form.Group >
           <Form.Control as='input' type="date" name="date" value={dayData.date} onChange={handleChange}/>
           <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom
                name="mealType" value={dayData.foods.mealType} onChange={handleFoodsChange}>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Snack</option>
                <option>Dinner</option> 
             </Form.Control>

            
            <Form.Control as="input" type="text" name="name" value={dayData.foods.name} onChange={handleFoodsChange}/>  
            <Button variant="info" type="submit">
             Add Meal
            </Button>
         </Form.Group>
        </Form>
    )
}
const mapStateToProps = state =>{
  console.log(state.dayForm.date)
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
        dayData: state.dayForm,
        userId
    }
}

export default withRouter(connect(mapStateToProps, {createDay, postDay})(DayForm))