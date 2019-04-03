const data = require('../data');
const moment = require('moment');
//Count for id of each data object
let count = 7;

module.exports = {
  get: (req, res) => {
    data.sort((a, b) => {
      return new Date(b.date + ' ' + moment(b.time, ["h:mm A"]).format("HH:mm")) - new Date(a.date + ' ' + moment(a.time, ["h:mm A"]).format("HH:mm"));
    })
    res.status(200).send(data);
  },

  post: (req, res) => {
    req.body.date = moment(req.body.date, ['YYYY-MM-DD']).format('MM/DD/YYYY');
    req.body.time = moment(req.body.time, ['HH:mm']).format('h:mm A');
    let event = Object.assign({id: ++count}, req.body)
    data.push(event);
    res.status(201).send('Event saved successfully');
  },

  //To update attended or not
  update: (req, res) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === req.body.id) {
        data[i].attended = !data.attended;
      }
    }
    res.status(201).send('Event update successfully');
  }
};