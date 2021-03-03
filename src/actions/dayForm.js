export const createDay = dayData => {
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
export const changeDate = (date) => {  
    return{
        type: "CHANGE_DATE",
        date
}
}

export const setFormDataForEdit = day => {
    const dayFormData = {
      date: day.attributes.date,
      mealType: day.attributes.foods.meal_type,
      name: day.attributes.foods.name
    }
    return {
      type: "SET_FORM_DATA_FOR_EDIT",
      dayFormData
    }
  }