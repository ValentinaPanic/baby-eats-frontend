export const updateDay = dayData => {
    return{
        type: "ADD_DAY",
        dayData
}
}

export const clearDayForm = () => {  
    return{
        type: "RESET_DAY",
}
}