import { clearListForm } from "./listForm";
export const setLists = lists => {
   
    return {
        type: "SET_LISTS",
        lists
    }
}
export const addList = list => {
    return {
        type: "ADD_LIST",
        list
    }
      
}
 
export const deleteListSuccess = listId => {
    return {
        type: "DELETE_LIST",
        listId
    }
      
}
export const clearLists =() => {
    return {
        type: "CLEAR_LISTS"
    }
}



export const getLists = () => {
    return dispatch => {
        fetch("http://localhost:3001/lists", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
           
        })
        .then(response => response.json())
        .then(data =>{
            // console.log(data)
                if (data.error){
                    alert(data.error)
                } else {
                    dispatch(setLists(data.data))
                   
                }
            }
        )
        .catch(console.log)
    }
}

export const postList = (listData, history) => {
    // const dbListData = {
    //     name: listData.name}
    return dispatch => {
        fetch("http://localhost:3001/lists", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
           body: JSON.stringify(listData)
        })
        .then(response => response.json())
        .then(data =>{
                if (data.error){
                    alert(data.error)
                } else {
                  
                    dispatch(addList(data.data))
                    dispatch(clearListForm())
                    history.push('/lists')
                }
            }
        )
        .catch(console.log)
    }
}


export const deleteList = (listId) => {
    // console.log(listId)
    return dispatch => {
        fetch(`http://localhost:3001/lists/${listId}`, {
            credentials: "include",
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
       
        })
        .then(response => response.json())
        .then(data =>{
                if (data.error){
                    alert(data.error)
                } else {
                   dispatch(deleteListSuccess(listId))

                   
                }
            }
        )
        .catch(console.log)
    }}
   