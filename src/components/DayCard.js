 import React from "react";

const DayCard = ({days}) => {

  return(
    <div>
      { days.days && days.days.map( day =>{
       
        const dayFood = day && day.attributes.foods.map(food =>{
          // console.log(food)
              return( <li key={food.id}><strong>{food.meal_type}</strong>- {food.name}</li> )
      
        }) 
        if (day){
             return(
          <div key={day.id}>
            {day.attributes.date} -{dayFood}
          </div>
        )
        }
       
      })}
    </div>
  )

}

export default DayCard