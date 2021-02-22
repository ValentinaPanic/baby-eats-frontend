export const updateSignUpForm = formData => {
    return {
        type: "UPDATE_SIGNUP_FORM",
        formData

    }
}

export const resetForm = ()=> {
    return {
        type: "RESET_FORM",
        
    }
}