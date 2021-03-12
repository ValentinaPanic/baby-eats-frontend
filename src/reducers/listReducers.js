
const lists = (state = [], action) => {
   
    switch (action.type) {
    case "SET_LISTS":
        return action.lists
        
    case "ADD_LIST":    
         return [...state, action.list]
         
    case "DELETE_LIST":
        const newList = state.filter(list => list.id !== action.listId)
        return newList

    case "CLEAR_LISTS":
        return []
 
    default:
        return state
}
}
export default lists