 import React from "react";

const DayCard = ({days}) => {
  
   const arrayDays = days.days
    console.log(arrayDays)
    // return <div>hello</div>
      return arrayDays.map(day =>{
        const mealFood = day.attributes.foods.map(food =>  food.name)
        console.log(mealFood)
          return <div key={day.id}>
              {day.attributes.date}-{day.attributes.meal_type}: {mealFood}
          </div>  
            })
        
}
        

export default DayCard