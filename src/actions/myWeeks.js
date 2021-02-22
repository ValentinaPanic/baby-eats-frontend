export const setMyWeeks = weeks => {
    return {
        type: "SET_MY_WEEKS",
        weeks
        
    }
}

export const getMyTrips = () => {
       
    return dispatch => {
        fetch("http://localhost:3001/weeks", {
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
                    dispatch(setMyWeeks(data.data))
                }
        }
        )

    }

}