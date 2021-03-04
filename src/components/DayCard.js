 import React from "react";
 import { format } from "date-fns"
import FoodCard from "./FoodCard";

const DayCard = ({days, today}) => {

  const dayFormat = "yyyy-MM-dd"
  const formattedDate = format(today,dayFormat)
  
     return(
        <div className="col col-center">
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