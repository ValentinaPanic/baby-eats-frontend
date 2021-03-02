
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
        case "CLEAR_DAYS":
            return state
     
        default:
            return state
    }
  }
  export default days