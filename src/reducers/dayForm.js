
const initialState =  {

    date: new Date(),
    foods: {
        mealType: "Breakfast",
        name: ""
    }
}
const dayForm = (state = initialState, action) => {
   
    switch (action.type) {
     
        case "CHANGE_DAY_FORM":
             
            return {...action.dayData}
        case "CHANGE_DATE":
            console.log(action)
            return {
                ...state,
                date: action.date
            }   
        case "RESET_DAY":
            return initialState
        case "SET_FORM_DATA_FOR_EDIT":
            console.log(action)
            return action.dayFormData.dayData
        default:
            return state
    }
  }
  export default dayForm