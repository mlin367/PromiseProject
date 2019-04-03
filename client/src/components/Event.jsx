import React from 'react';
import moment from 'moment';
import '../css/Event.css'

const Event = props => {

  //Check to see if event type is attendable and if it has already past or not (future events can't be attended/not attended in this implementation)
  const checkIfAttendedPossibility = event => {
    if ((event.type === 'Court Date' || event.type === 'Case Manager Appointment') && 
    (props.now > new Date(event.date + ' ' + moment(event.time, ["h:mm A"]).format("HH:mm")))) {
      return true;
    }
    return false;
  }

  const checkIconType = event => {
    if (event.type === 'Court Date' || event.type === 'Case Manager Appointment') {
      if (event.attended === null) {
        return 'fa-calender';
      } else if (event.attended) {
        return 'fa-calender-check';
      } else {
        return 'fa-calender-times';
      }
    } else if (event.type === 'Reminder for Court Date') {
      return 'fa-comment-alt';
    } else if (event.type === 'Client Data Updated') {
      return 'fa-edit';
    }
  };

  return (
    <div className="event">
      <div className="eventContents">
        <div className="dateTime">
          {props.event.date + ' ' + props.event.time}
        </div>
        <i
        className={"far " + checkIconType(props.event)} 
        onClick={checkIfAttendedPossibility(props.event) ? () => props.handleOnIconClick(props.event) : null}
        >
        </i>
        <div className="eventWrapper">
          <h3 className="title">{props.event.type}</h3>
          <div className="note">{props.event.note}</div>
        </div>
      </div>
      <hr className="line"/>
    </div>
  )

};

export default Event;
