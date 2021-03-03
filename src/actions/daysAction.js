import { clearDayForm } from "./dayForm";
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
                if (data.error){
                    alert(data.error)
                } else {
                    dispatch(setDays(data.data))
                   
                }
            }
        )
        .catch(console.log)
    }
}

export const postDay = (dayData, history) => {
    // console.log(dayData)
    const dbDayData = {
        day: {
            user_id: dayData.userId,
            date: dayData.date,
           
            foods: {
                name: dayData.foods.name,
                meal_type: dayData.foods.mealType
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
        .catch(console.log)
    }
}