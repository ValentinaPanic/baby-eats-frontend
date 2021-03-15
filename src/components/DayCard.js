 import React from "react";
 import { format } from "date-fns";
import FoodCard from "./FoodCard";

const DayCard = ({days, today}) => {
  console.log(days)
    const dt = new Date(today)
    const dayFormat = "yyyy-MM-dd"
    const formattedDate = format( dt,dayFormat)
    // debugger
       return(
        <div >
            <h3 style={{textAlign:"center"}}> <strong> Meals for {formattedDate}</strong></h3>
           { days && days.filter(day => 
           
               day.attributes.date === formattedDate).map( day => { 
               return ( day.attributes.foods.map(food =>{
            
                  return <FoodCard key={food.id} food={food} dayId={day.id}/> }
                   
             ))
           })
                
          }
        </div>
  
     )}


export default DayCard