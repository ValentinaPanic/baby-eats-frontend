 import React from "react";
 import { format } from "date-fns"
//  import format from 'date-fns/format'
import FoodCard from "./FoodCard";

const DayCard = ({days, today}) => {
     console.log(typeof today)
   const newToday = new Date(today)
 
   const dayFormat = "yyyy-MM-dd"
   const formattedDate = format( newToday,dayFormat)
 console.log(formattedDate)
     return(
        <div >
            <h3 style={{textAlign:"center"}}> Meals for {formattedDate}</h3>
           { days && days.filter(day => 
            
           day.attributes.date === formattedDate).map( day => { 
               return (day.attributes.foods.map(food =>{
                  return <FoodCard food={food} today={today}/> }
             ))
           })
                  
          }
        </div>
  
     )}


export default DayCard