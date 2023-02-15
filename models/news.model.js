const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const News = new Schema({
  title: {
    type: String,
  },
  url: {
    type: String,
  },
  description: {
    type: String,
  },
  data: {
    type: Date,
  },
});

module.exports = mongoose.model('News', News);
