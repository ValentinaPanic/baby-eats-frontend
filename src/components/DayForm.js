import React from 'react'
import { connect } from "react-redux"
import { createDay } from "../actions/dayForm"
// import { postDay } from "../actions/daysAction"
import { format } from "date-fns"

const DayForm = ({dayData, createDay, userId, history, handleSubmit}) => {

    const handleChange = (event) =>{
        const { name,value} = event.target 
        const updatedFormInfo = {
            ...dayData,
            [name]: value
          }
        createDay(updatedFormInfo) 
    }
    // const handleSubmit = (event) => {
    //     event.preventDefault()
        
    //     postDay({
    //         ...dayData,
    //         userId
    //     }, history)
    //     history.push('/')
    // }
       
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
     
        const dayFormat = "yyyy-MM-dd"
        const dateForm = dayData && format(dayData.date, dayFormat)
        return (
      
      <>
        <form onSubmit={event =>{
          handleSubmit(event, dayData, userId)}}>
          
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
        </>
    )
}
const mapStateToProps = state =>{
  console.log(state)
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
        dayData: state.dayForm,
        userId
    }
}

export default connect(mapStateToProps, { createDay })(DayForm)
