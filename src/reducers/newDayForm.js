const initialState =  {
   
    date: new Date(),
    foods: {
        mealType: "Breakfast",
        name: ""
    }
}
const newDayForm = (state = initialState, action) => {
    switch (action.type) {
      
        case "CHANGE_DAY_FORM":
            return {...action.dayData}
               
        case "RESET_DAY":
            return []
        default:
        return state
    }
  }
  export default newDayForm