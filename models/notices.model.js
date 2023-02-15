const mongoose = require('mongoose');
const { SchemaTypes } = mongoose;
const Schema = mongoose.Schema;

const Notices = new Schema({
  category: {
    type: String,
    required: [true, 'Set add category'],
  },
  title: {
    type: String,
    required: [true, 'Set add title'],
  },
  petName: {
    type: String,
    required: [true, 'Set pet name'],
  },
  birth: {
    type: Date,
  },
  breed: {
    type: String,
  },
  petSex: {
    type: String,
    required: [true, 'Set pet sex'],
  },
  location: {
    type: String,
    required: [true, 'Set pet location'],
  },
  price: {
    type: Number,
    required: [true, 'Set pet price'],
  },
  petImage: {
    type: String,
  },
  comments: {
    type: String,
  },
});

module.exports = mongoose.model('Notices', Notices);
