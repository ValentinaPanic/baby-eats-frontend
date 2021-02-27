import { resetForm } from './loginForm'
import { resetSignUpForm } from './signUpForm'
import { getDays, clearDays } from './daysAction'
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
    export const login = (credentials, history) => {
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
                        history.push("/")
                    }
            }
            )

        }

    }
    export const signUp =  (credentials, history) => {
        const user = {
            user: credentials
        }
        return dispatch => {
            fetch("http://localhost:3001/signup", {
                credentials: "include",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
            .then(response => response.json())
            .then(user =>{
                    if (user.error){
                        alert(user.error)
                    } else {
                        dispatch(setCurrentUser(user.data))
                        dispatch(resetSignUpForm())
                        history.push("/")
                    }
            }
            )

        }

    }


    export const logout = () => {
        return dispatch =>{
            dispatch(clearCurrentUser())
            dispatch(clearDays())

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
                        dispatch(getDays())
                    }
            }
            )

        }

    }