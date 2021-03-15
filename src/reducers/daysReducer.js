
const days = (state = [], action) => {
        switch (action.type) {
        case "SET_DAYS":
            return  {
                days: action.days
            }
        case "ADD_DAY":   
        // console.log(action)      
             return {
                 days: state.days.concat(action.day)
             }
    
        case "DELETE_DAY":
           { const newDays = state.days.filter(day => day.id !== action.dayId )
            return {
                days: newDays
            }}
        case "DELETE_FOOD":   
            // console.log(state)    
        {let foods = state.days.map(day => day.attributes.foods).filter(food =>  food.id !== action.foodId)
            console.log(state)
    //    return state
        return {
                ...state.days,
                attributes:{
                    ...state.days.attributes,
                    foods: foods
                
            
        }}}
        

        case "CLEAR_DAYS":
            return state
     
        default:
            return state
    }
  }
  export default days