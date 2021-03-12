const initialState = {
    name: ""
}
 const listForm = (state = initialState, action) => {
   switch (action.type){
        case "CHANGE_LIST_FORM":
           return action.listData
        case "RESET_LIST":
            return initialState
        default:
           return state
   }
}

export default listForm
