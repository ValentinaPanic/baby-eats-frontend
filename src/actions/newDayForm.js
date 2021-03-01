export const updateDay = dayData => {
    return{
        type: "CHANGE_DAY_FORM",
        dayData
}
}

export const clearDayForm = () => {  
    return{
        type: "RESET_DAY",
}
}