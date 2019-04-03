import React from 'react';
import '../css/Form.css'

const Form = props => (
  <div className="form">
    Event Type: <select className="type" onChange={(e) => props.handleOnFormChange(e, 'eventType')}>
      <option defaultValue value="Court Date">Court Date</option>
      <option value="Reminder for Court Date">Reminder for Court Date</option>
      <option value="Case Manager Appointment">Case Manager Appointment</option>
      <option value="Client Data Updated">Client Data Updated</option>
    </select>
    Date: <input className="date" onChange={(e) => props.handleOnFormChange(e, 'eventDate')} type="date" />
    Time: <input className="time" onChange={(e) => props.handleOnFormChange(e, 'eventTime')} type="time"></input>
    Note: <textarea
      className="text"
      rows="4"
      cols="50"
      onChange={(e) => props.handleOnFormChange(e, 'eventNote')}
      placeholder="Leave a note if desired..."
    />
    <div className="buttons">
      <button onClick={props.handleOnSubmit}>Submit</button>
      <button onClick={props.handleOnClick}>
        Cancel
      </button>
    </div>
  </div>
);

export default Form;