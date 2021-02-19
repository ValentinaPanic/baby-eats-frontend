export const serCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user

    }
}

// async creator
export const login = credentials => {
        return dispatch => {
            fetch("http://localhost:3001/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            })
            .then(response => response.json())
            .then(console.log)

        }

    }