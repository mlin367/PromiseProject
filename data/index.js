//Meant to emulate a database but all the data is stored in this file and data added here isn't persisted after server shuts down

let data = [
  {
    id: 1,
    type: 'Court Date',
    date: '04/08/19',
    time: '9:00 AM',
    note: '',
    attended: null
  },
  {
    id: 2,
    type: 'Reminder for Court Date',
    date: '04/07/19',
    time: '9:00 AM',
    note: 'Hello John, reminder that you have court tomorrow at 9:00 AM at 101 Washington St. Oakland. If you need assistance with transportation, please contact your case manager at 555-666-7777',
    attended: null
  },
  {
    id: 3,
    type: 'Case Manager Appointment',
    date: '02/27/19',
    time: '9:30 AM',
    note: '',
    attended: false
  },
  {
    id: 4,
    type: 'Reminder for Court Date',
    date: '02/26/19',
    time: '9:00 AM',
    note: 'Hello John, this is to confirm that Court Date has been added to your schedule for Monday, April 18th-9:00 am. Take care.',
    attended: null
  },
  {
    id: 5,
    type: 'Court Date',
    date: '02/25/19',
    time: '9:00 AM',
    note: '',
    attended: true
  },
  {
    id: 6,
    type: 'Client Data Updated',
    date: '01/31/19',
    time: '3:24 PM',
    note: '',
    attended: null
  },
  {
    id: 7,
    type: 'Case Manager Appointment',
    date: '01/15/19',
    time: '2:30 PM',
    note: '',
    attended: true
  },
]

module.exports = data;