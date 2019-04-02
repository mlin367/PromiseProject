import React from 'react';
import Form from './Form';
import EventList from './EventList';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addEvent: false,
      eventType: '',
      eventNote: '',
      eventDate: '',
      eventTime: '',
      data: []
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnFormChange = this.handleOnFormChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    axios.get('/api/events')
      .then(results => {
        console.log(results)
        this.setState({
          data: results.data
        })
      })
      .catch(err => console.error(err));
  }

  handleOnClick() {
    this.setState({
      addEvent: !this.state.addEvent,
      eventType: '',
      eventNote: '',
      eventDate: '',
      eventTime: ''
    });
  }

  handleOnSubmit() {
    axios
      .post('/api/events', {
        type: this.state.eventType,
        date: this.state.eventDate,
        time: this.state.eventTime,
        note: this.state.eventNote,
        attended: null
      })
      .then(result => {
        console.log(result);
        this.handleOnClick();
        this.fetch();
      })
      .catch(err => console.error(err));
  }

  handleOnFormChange(e, formType) {
    console.log(e.target.value)
    this.setState({
      [formType]: e.target.value
    });
  }

  render() {
    return (
      <div className="app">
        <h1>Timeline</h1>
        <EventList data={this.state.data}/>
        {this.state.addEvent ? (
          <Form
            handleOnClick={this.handleOnClick}
            handleOnFormChange={this.handleOnFormChange}
            handleOnSubmit={this.handleOnSubmit}
          />
        ) : (
          <button
            onClick={this.handleOnClick}
            className="addEvent"
          >
            + Add Event
          </button>
        )}
      </div>
    );
  }
}

export default App;
