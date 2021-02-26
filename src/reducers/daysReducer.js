
const days = (state = [], action) => {
    switch (action.type) {
       
        case "SET_DAYS":
             
            return {
                days: action.days
            }
            case "ADD_DAY":   
                    
             return {
                 ...state,
                state: state.days.concat(action.day)
             }
             
        case "CLEAR_DAYS":
            return []
     
      default:
        return state
    }
  }
  export default days