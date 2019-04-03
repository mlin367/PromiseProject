import React from 'react';
import Event from './Event';
import moment from 'moment';
import '../css/EventList.css';

const EventList = props => {

  let dataCopy = props.data.slice();
  //In order to insert today for the NOW relative to the events, we use insertion sort logic
  if (props.data.length > 0) {
    dataCopy.unshift(props.now);
  
    for (let i = 0; i < dataCopy.length - 1; i++) {
      if (dataCopy[i] < new Date(dataCopy[i + 1].date + ' ' + moment(dataCopy[i + 1].time, ["h:mm A"]).format("HH:mm"))) {
        [dataCopy[i], dataCopy[i + 1]] = [dataCopy[i + 1], dataCopy[i]];
      }
    }
  }

  let now = <div key={Math.random()} className="nowWrapper">
    <h4>NOW</h4>
    <div className="nowLine"></div>
  </div>

  return (
  <div className="eventList">
    {dataCopy.map((obj, i) => {
      return obj.date ? 
      <Event
      now={props.now} 
      handleOnIconClick={props.handleOnIconClick} 
      event={obj} 
      key={i} /> : now
    })}
  </div>
  )
};

export default EventList;