export const updateDay =( name,value ) => {
    console.log("in action add day")
    return{
        type: "ADD_DAY",
        day: {name, value}
    }
}

// export const postDay = (day) => {
//     console.log(day)
//     return dispatch => {
//         fetch("http://localhost:3001/days", {
//             credentials: "include",
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
           
//         })
//         .then(response => response.json())
//         .then(data =>{
//             console.log(data )
//                 if (data.error){
//                     alert(data.error)
//                 } else {
//                     dispatch(updateDay(data.data))
//                 }
//             }
//         )
//     }
// }