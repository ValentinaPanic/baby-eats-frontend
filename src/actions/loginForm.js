export const updateLoginForm = formData => {
    return {
        type: "UPDATE_LOGIN_FORM",
        formData

    }
}

export const resetForm = ()=> {
    return {
        type: "RESET_FORM",
        
    }
}