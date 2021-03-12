export const createList = listData => {
    return{
        type: "CHANGE_LIST_FORM",
        listData
}
}
export const clearListForm = () => {  
    return{
        type: "RESET_LIST",
}
}