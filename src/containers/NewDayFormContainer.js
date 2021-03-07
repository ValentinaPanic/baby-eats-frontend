// import React from 'react'
// import { connect } from "react-redux"
// import { postDay } from "../actions/daysAction"

// import DayForm from '../components/DayForm'

// const NewDayFomContainer = ({postDay, history}) => {
   
//     const handleSubmit = (event, dayData, userId) => {
//         event.preventDefault()
        
//         postDay({
//             ...dayData,
//             userId
//         }, history)
//         history.push('/')
//     }  
//   return  <DayForm history={history} handleSubmit={handleSubmit}/>   
    
    
// }

// export default connect(null, { postDay })(NewDayFomContainer)
