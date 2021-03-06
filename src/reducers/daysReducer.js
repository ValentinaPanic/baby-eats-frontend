
const days = (state = [], action) => {
        switch (action.type) {
        case "SET_DAYS":
            return {
                days: action.days
            }
        case "ADD_DAY":         
             return {
                 days: [...state.days, action.day]
             }
        case "EDIT_DAY":     
        console.log(action) 
             return state.map(day => day.id === action.day.id ? action.day : day)
        case "DELETE_DAY":
            return state.days.filter(day => day.id !== action.dayId ? true : false)

        case "CLEAR_DAYS":
            return state
     
        default:
            return state
    }
  }
  export default days