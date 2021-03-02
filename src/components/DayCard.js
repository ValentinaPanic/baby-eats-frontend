 import React from "react";
 import { format } from "date-fns"

const DayCard = ({days, today}) => {
  const dayFormat = "yyyy-MM-dd"
  const formattedDate = format(today,dayFormat)
     return(
          <div>
              { days.days && days.days.filter(day => day.attributes.date ===     formattedDate).map( day => {
                
                return (day.attributes.foods.map(food =>{
                
                  return (
                    <li key={day.id}> <strong>{food.meal_type}</strong> - {food.name}</li>
                    )
                }))
              })
                  
                }
    
         
    </div>
  
     )}


export default DayCard