import React from 'react'
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
        history.push('/')
    }
       
      const handleFoodsChange = event => {
        const { name, value } = event.target
        console.log(name)
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
    
        <form onSubmit={handleSubmit}>
           <input type="text" name="date" value={dateForm} onChange={handleChange}/>
           <select name="mealType" value={dayData.foods.mealType} onChange={handleFoodsChange}>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Snack</option>
                <option>Dinner</option> 
            </select> 
          
            
            <input type="text" name="name" value={dayData.foods.name} onChange={handleFoodsChange}/>
            <input type="submit" />
        </form>
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