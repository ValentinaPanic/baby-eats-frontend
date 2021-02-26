import React from 'react'
import { connect } from "react-redux"
import { updateDay } from "../actions/newDayForm"
import { postDay } from "../actions/daysAction"
const DayForm = ({dayData, updateDay, postDay, userId}) => {

    const handleChange = (event) =>{
        const { name,value} = event.target 
        updateDay(name, value) 
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        
        postDay({
            ...dayData,
            userId
        })
    }

    return (
        <form onSubmit={handleSubmit}>
           <select name="mealType" value={dayData.mealType} onChange={handleChange}>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Snack</option>
                <option>Dinner</option> 
            </select> 
          
            <input type="date" name="date" value={dayData.date} onChange={handleChange}/>
            <input type="text" name="foods" value={dayData.foods.name} onChange={handleChange}/>
            <input type="submit" />
        </form>
    )
}
const mapStateToProps = state =>{

    return {
        dayData: state.newDayForm,
        userId: state.currentUser.id
    }
}

export default connect(mapStateToProps, {updateDay, postDay})(DayForm)
