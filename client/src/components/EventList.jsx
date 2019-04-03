import React from 'react';
import Event from './Event';
import moment from 'moment';

const EventList = props => {

  let dataCopy = props.data.slice();
  if (props.data.length > 0) {
    dataCopy.unshift(props.now);
  
    for (let i = 0; i < dataCopy.length - 1; i++) {
      if (dataCopy[i] < new Date(dataCopy[i + 1].date + ' ' + moment(dataCopy[i + 1].time, ["h:mm A"]).format("HH:mm"))) {
        [dataCopy[i], dataCopy[i + 1]] = [dataCopy[i + 1], dataCopy[i]];
      }
    }
  }

  return (
  <div className="eventList">
    {dataCopy.map((obj, i) => {
      return obj.date ? <Event event={obj} key={i} /> : <h3>NOW</h3>
    })}
  </div>
  )
};

export default EventList;