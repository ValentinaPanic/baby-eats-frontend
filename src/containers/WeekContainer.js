import React from "react";
import "../Week.css";
import { startOfWeek,format, addDays, endOfWeek, isSameWeek, isSameDay, addWeeks, subWeeks,toDate } from "date-fns";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { changeDate } from '../actions/dayForm'

class Calendar extends React.Component {

  state = {
    currentWeek: new Date(),
    selectedDate: new Date()

  };

  renderHeader() {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevWeek}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{format(this.state.currentWeek, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextWeek}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "iiii";
    const days = [];

    let startDate = startOfWeek(this.state.currentWeek);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { currentWeek, selectedDate } = this.state;
    const WeekStart = startOfWeek(currentWeek);
    const WeekEnd = endOfWeek(WeekStart);
    const startDate = startOfWeek(WeekStart);
    const endDate = endOfWeek(WeekEnd);

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              !isSameWeek(day, WeekStart)
                ? "disabled"
                : isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(toDate(cloneDay))}
          > 
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
    
          </div>
        );
      
        day = addDays(day, 1);
        
      }
      
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );

      days = [];
    }
  
    return <div className="body">{rows}</div>;
  }

  onDateClick = (day) => {
    // console.log(typeof day)
  this.props.changeDate(day)
    this.setState({
       selectedDate: this.props.newDay.date
     
    })
     
   
  };

  nextWeek = () => {
    this.setState({
      currentWeek: addWeeks(this.state.currentWeek, 1)
    });
  };

  prevWeek = () => {
    this.setState({
      currentWeek: subWeeks(this.state.currentWeek, 1)
    });
  };

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}
const mapStateToProps = state => {

  return {
    days: state.days,
    newDay: state.dayForm

  }
}

export default withRouter(connect(mapStateToProps, { changeDate })(Calendar));
