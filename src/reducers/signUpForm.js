const initialState ={
    name: "",
    username: "",
    password: ""
}

const signUpForm = (state = initialState, action) => {

    switch (action.type){
        case "UPDATE_SIGNUP_FORM":
            return action.formData
        case "RESET_FORM":
            return initialState
        default:
            return state
    }

}

export default signUpForm