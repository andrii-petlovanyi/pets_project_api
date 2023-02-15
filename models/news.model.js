const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const News = new Schema({
  title: {
    type: String,
  },
  text: {
    type: String,
  },
  data: {
    type: String,
  },
  link: {
    type: String,
  },
});

module.exports = mongoose.model('News', News);
