export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user

    }
}

// async creator
export const login = credentials => {
        console.log(credentials)
        return dispatch => {
            fetch("http://localhost:3001/login", {
                credentials: "include",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            })
            .then(response => response.json())
            .then(user =>{
                    if (user.error){
                        alert(user.error)
                    } else {
                        dispatch(setCurrentUser(user))
                    }
            }
            )

        }

    }

    export const getCurrentUser = () => {
       
        return dispatch => {
            fetch("http://localhost:3001/get_current_user", {
                credentials: "include",
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
               
            })
            .then(response => response.json())
            .then(user =>{
                    if (user.error){
                        alert(user.error)
                    } else {
                        dispatch(setCurrentUser(user))
                    }
            }
            )

        }

    }