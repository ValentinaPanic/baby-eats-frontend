import React from 'react'
import Form from 'react-bootstrap/Form'
import { connect } from "react-redux"
import { format } from "date-fns";
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
        //  debugger
        const dayFormat = "yyyy-MM-dd"
        const dateForm = format(dayData.date, dayFormat)
    return (
      <Form className="justify-content-md-center" inline onSubmit={handleSubmit}>
        <Form.Group controlId="formGroupEmail">
           <Form.Control as='input' type="text" name="date" value={dateForm} onChange={handleChange}/>
           <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom
                name="mealType" value={dayData.foods.mealType} onChange={handleFoodsChange}>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Snack</option>
                <option>Dinner</option> 
             </Form.Control>

            
            <Form.Control as="input" type="text" name="name" value={dayData.foods.name} onChange={handleFoodsChange}/>  
            <Form.Control as="input" type="submit"className="mb-2" variant="info"/>   
         </Form.Group>
        </Form>
    )
}
const mapStateToProps = state =>{
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
        dayData: state.dayForm,
        userId
    }
}

export default connect(mapStateToProps, {createDay, postDay})(DayForm)