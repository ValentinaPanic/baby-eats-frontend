
const days = (state = [], action) => {
    console.log(action)
        switch (action.type) {
        case "SET_DAYS":
            return {
                days: action.days
            }
            case "ADD_DAY":   
           console.log(action)         
             return {
                 days: [...state.days, action.day]
             }
             
             
        case "CLEAR_DAYS":
            return []
     
      default:
        return state
    }
  }
  export default days