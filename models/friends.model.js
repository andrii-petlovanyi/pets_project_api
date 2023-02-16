const mongoose = require('mongoose');
const { SchemaTypes } = mongoose;
const Schema = mongoose.Schema;

const Friends = new Schema({
  title: {
    type: SchemaTypes.String,
    required: [true, 'Set name for partner'],
  },
  url: {
    type: SchemaTypes.String,
  },
  addressUrl: {
    type: SchemaTypes.String,
  },
  imageUrl: {
    type: SchemaTypes.String,
  },
  address: {
    type: SchemaTypes.String,
  },
  workDays: {
    type: SchemaTypes.Array,
  },
  phone: {
    type: SchemaTypes.String,
  },
  email: {
    type: SchemaTypes.String,
  },
});

module.exports = mongoose.model('Friends', Friends);