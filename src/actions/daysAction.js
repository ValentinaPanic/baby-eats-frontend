import { clearDayForm } from "./newDayForm";
export const setDays = days => {
   
    return {
        type: "SET_DAYS",
        days
    }
}
export const addDay = day => {
   
    return {
        type: "ADD_DAY",
        day
    }
}
export const clearDays =() => {
    return {
        type: "CLEAR_DAYS"
    }
}



export const getDays = () => {
    return dispatch => {
        fetch("http://localhost:3001/days", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
           
        })
        .then(response => response.json())
        .then(data =>{
            console.log(data )
                if (data.error){
                    alert(data.error)
                } else {
                    dispatch(setDays(data.data))
                }
            }
        )
    }
}

export const postDay = (dayData, history) => {
    const dbDayData = {
        day: {
            user_id: dayData.userId,
            date: dayData.date,
            meal_type: dayData.mealType,
            foods: {
                name: dayData.foods.name

        }}
    }
 
    return dispatch => {
        fetch("http://localhost:3001/days", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
           body: JSON.stringify(dbDayData)
        })
        .then(response => response.json())
        .then(data =>{
         
                if (data.error){
                    alert(data.error)
                } else {
                    dispatch(addDay(data.data))
                    dispatch(clearDayForm())
                    history.push('/')
                }
            }
        )
    }
}