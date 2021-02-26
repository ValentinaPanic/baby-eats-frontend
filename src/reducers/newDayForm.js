const initialState = {
    date: new Date(),
    mealType: "",
    foods: {
        name: ""
    }
}
const newDayForm = (state = initialState, action) => {
    
    console.log(action)
    switch (action.type) {
    
        case "ADD_DAY":
            return {
                ...state,
                [action.day.name]: action.day.value
            }
            case "RESET_DAY":
             
                return initialState
      default:
        return state
    }
  }
  export default newDayForm