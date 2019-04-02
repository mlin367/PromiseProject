import React from 'react';
import Event from './Event';

const EventList = props => (
  <div className="eventList">
    {props.data.map((obj, i) => (
      <Event event={obj} key={i} />
    ))}
  </div>
);

export default EventList;