const myWeeks = (state = [], action) => {
    switch (action.type) {
       
        case "SET_MY_WEEKS":
             console.log(action)
            return action.weeks
      default:
        return state
    }
  }
  export default myWeeks