import React from "react";
import "../Week.css";
import { Route, Redirect } from 'react-router-dom'
import Login from '../components/Login'
import { startOfWeek,format, addDays, endOfWeek, isSameWeek, isSameDay, toDate, addWeeks, subWeeks } from "date-fns";


class Calendar extends React.Component {
  state = {
    currentWeek: new Date(),
    selectedDate: new Date(),
    meals: ["lunch"],
    foods: ["Avocado"]
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
            <div>{this.state.meals}: {this.state.foods}</div>
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

  onDateClick = day => {
    <Redirect to='/login' component={Login}/>
    console.log()
   
    this.setState({
      selectedDate: day,
      ...this.state.meals,
      ...this.state.foods


    });
     return(<dib>Hellooaoo</dib>)
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

export default Calendar;
