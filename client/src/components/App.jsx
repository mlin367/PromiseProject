import React from 'react';
import Form from './Form';
import EventList from './EventList';
import axios from 'axios';
import '../css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addEvent: false,
      eventType: 'Court Date',
      eventNote: '',
      eventDate: '',
      eventTime: '',
      data: []
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnFormChange = this.handleOnFormChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnIconClick = this.handleOnIconClick.bind(this);
    this.today;
  }

  componentDidMount() {
    this.fetch();
    this.today = new Date();
  }

  fetch() {
    axios
      .get('/api/events')
      .then(results => {
        this.setState({
          data: results.data
        });
      })
      .catch(err => console.error(err));
  }

  handleOnIconClick(event) {
    axios.put('/api/events', { id: event.id }).then(result => {
      this.fetch();
    });
  }

  handleOnClick() {
    this.setState({
      addEvent: !this.state.addEvent,
      eventType: 'Court Date',
      eventNote: '',
      eventDate: '',
      eventTime: ''
    });
  }

  handleOnSubmit() {
    if (this.state.eventDate === '' || this.state.eventTime === '') {
      alert('All fields except note have to be filled!');
    } else {
      axios
        .post('/api/events', {
          type: this.state.eventType,
          date: this.state.eventDate,
          time: this.state.eventTime,
          note: this.state.eventNote,
          attended: null
        })
        .then(result => {
          this.handleOnClick();
          this.fetch();
        })
        .catch(err => console.error(err));
    }
  }

  handleOnFormChange(e, formType) {
    this.setState({
      [formType]: e.target.value
    });
  }

  render() {
    return (
      <div className="app">
        <h1>Timeline</h1>
        <h4>Click on the icon of past attendable events to mark attended or not</h4>
        <EventList
          handleOnIconClick={this.handleOnIconClick}
          now={this.today}
          data={this.state.data}
        />
        {this.state.addEvent ? (
          <Form
            handleOnClick={this.handleOnClick}
            handleOnFormChange={this.handleOnFormChange}
            handleOnSubmit={this.handleOnSubmit}
          />
        ) : (
          <button onClick={this.handleOnClick} className="addEvent">
            + Add Event
          </button>
        )}
      </div>
    );
  }
}

export default App;
