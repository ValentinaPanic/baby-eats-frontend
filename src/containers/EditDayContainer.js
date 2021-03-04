import React, { Component } from 'react'
import { connect } from "react-redux"
import { editDay } from "../actions/daysAction"
import { setFormDataForEdit } from "../actions/dayForm"
import DayForm from '../components/DayForm'

export class EditDayContainer extends Component {

    componentDidMount(){
        console.log("I am here", this.props.day)
        this.props.day && this.props.setFormDataForEdit(this.props.day)
    }

     handleSubmit = (event, dayData, userId) => {
        event.preventDefault()
       const {editDay, day, history} = this.props
       console.log(day)
        editDay({
            ...dayData,
            userId,
            dayId: day.id,
        }, history)
        history.push('/')
    }  
    render() {
        const {history} = this.props
        return (
            <div>
                 <DayForm history={history} handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default connect(null, { editDay, setFormDataForEdit }) (EditDayContainer)
