import React from 'react';
import moment from 'moment';

const Event = props => {

  const checkIfAttendedPossibility = (event) => {
    if ((event.type === 'Court Date' || event.type === 'Case Manager Appointment') && 
    (props.now > new Date(event.date + ' ' + moment(event.time, ["h:mm A"]).format("HH:mm")))) {
      return true;
    }
    return false;
  }

  return (
    <div className="event">
      <div className="dateTime">
        {props.event.date + ' ' + props.event.time}
      </div>
      <i onClick={checkIfAttendedPossibility(props.event) ? () => props.handleOnIconClick(props.event) : null}>icon</i>
      <div className="eventWrapper">
        <h2 className="title">{props.event.type}</h2>
        <div className="note">{props.event.note}</div>
      </div>
    </div>
  )

};

export default Event;
