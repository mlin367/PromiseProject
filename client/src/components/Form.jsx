import React from 'react';

const Form = props => (
  <div className="form">
    <select onChange={(e) => props.handleOnFormChange(e, 'eventType')}>
      <option defaultValue value="Court Date">Court Date</option>
      <option value="Reminder for Court Date">Reminder for Court Date</option>
      <option value="Case Manager Appointment">Case Manager Appointment</option>
      <option value="Client Data Updated">Client Data Updated</option>
    </select>
    <input onChange={(e) => props.handleOnFormChange(e, 'eventDate')} type="date" />
    <input onChange={(e) => props.handleOnFormChange(e, 'eventTime')} type="time"></input>
    <textarea
      rows="4"
      cols="50"
      onChange={(e) => props.handleOnFormChange(e, 'eventNote')}
      placeholder="Leave a note if desired..."
    />
    <div className="buttons">
      <button>Submit</button>
      <button onClick={props.handleOnClick}>
        Cancel
      </button>
    </div>
  </div>
);

export default Form;