import React from 'react';

const Event = props => (
  <div className="event">
    <div className="dateTime">
      {props.event.date + ' ' + props.event.time}
    </div>
    <i>icon</i>
    <div className="eventWrapper">
      <h2 className="title">{props.event.type}</h2>
      <div className="note">{props.event.note}</div>
    </div>
  </div>
);

export default Event;
