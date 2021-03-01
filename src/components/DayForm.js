import React from 'react'
import { connect } from "react-redux"
import { updateDay } from "../actions/newDayForm"
import { postDay } from "../actions/daysAction"
const DayForm = ({dayData, updateDay, postDay, userId, history}) => {

    const handleChange = (event) =>{
        const { name,value} = event.target 
        const updatedFormInfo = {
            ...dayData,
            [name]: value
          }
        updateDay(updatedFormInfo) 
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
        updateDay(updatedFormInfo)
      }
        //  debugger
    return (
    
        <form onSubmit={handleSubmit}>
           <input type="text" name="date" value={dayData.date} onChange={handleChange}/>
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
        dayData: state.newDayForm,
        userId
    }
}

export default connect(mapStateToProps, {updateDay, postDay})(DayForm)
