import { resetForm } from './loginForm'
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}
export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
        
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
                        dispatch(setCurrentUser(user.data))
                        dispatch(resetForm())
                    }
            }
            )

        }

    }

    export const logout = () => {
        return dispatch =>{
            dispatch(clearCurrentUser())
            return fetch( "http://localhost:3001/logout",{
                credentials: "include",
                method: "DELETE"
            })
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
                        dispatch(setCurrentUser(user.data))
                    }
            }
            )

        }

    }