export const serCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user

    }
}

// async creator
export const login = credentials => {
        return dispatch => {
            fetch("http://localhost:3001")
            .then(response => response.json())
            .then(console.log)

        }

    }