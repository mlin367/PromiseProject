import React from 'react';
import Form from './Form';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addEvent: false,
      eventType: '',
      eventNote: '',
      eventDate: '',
      eventTime: ''
    }
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnFormChange = this.handleOnFormChange.bind(this);
  }

  handleOnClick() {
    this.setState({
      addEvent: !this.state.addEvent,
      eventType: '',
      eventNote: '',
      eventDate: '',
      eventTime: ''
    })
  }

  handleOnSubmit() {
    axios.post('/api/events', {
      type: this.state.eventType,
      date: this.state.eventDate,
      time: this.state.eventTime,
      note: this.state.eventNote
    })
    .then(result => console.log(result))
    .catch(err => console.error(err));
  }

  handleOnFormChange(e, formType) {
    this.setState({
      [formType] : e.target.value
    })
  }

  render() {
    return (
      <div className="app">
        <h1>Timeline</h1>
        {this.state.addEvent ? <Form handleOnFormChange={this.handleOnFormChange} /> : <button onClick={() => this.setState({addEvent: !this.state.addEvent})} className="addEvent">+ Add Event</button>}
        
      </div>
    )
  }
}

export default App;