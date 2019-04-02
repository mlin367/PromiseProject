const data = require('../data');
//Count for id of each data object
let count = 7;

//To convert standard time to military time
const timeConversion = (time) => {
  let minutes = time.split(':')[1].slice(0, 2);
  if (time.slice(-2) === 'PM') {
    if (time.slice(0, 2) === '12') {
      return '12:' + minutes;
    } else {
      return (parseInt(time.split(':')[0], 10) + 12).toString() + ':' + minutes;
    }
  } else if (time.slice(0, 2) === '12') {
    return '00:' + minutes;
  } else {
    return time.split(' ')[0];
  }
}

module.exports = {
  get: (req, res) => {
    data.sort((a, b) => {
      return new Date(b.date + ' ' + timeConversion(b.date)) - new Date(a.date + ' ' + timeConversion(a.time));
    })
    res.status(200).send(data);
  },

  post: (req, res) => {
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
    res.send(201).send('Event update successfully');
  }
};