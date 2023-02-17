const mongoose = require('mongoose');
const { SchemaTypes } = mongoose;
const Schema = mongoose.Schema;

const Notice = new Schema(
  {
    category: {
      type: String,
      enum: ['lost-found', 'for-free', 'sell'],
      default: 'sell',
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
      enum: ['male', 'female'],

      required: [true, 'Set pet sex'],
    },
    location: {
      type: String,
      required: [true, 'Set pet location'],
    },
    price: {
      type: Number,
    },
    petImage: {
      type: String,
    },
    comments: {
      type: String,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true },
);

module.exports = mongoose.model('Notice', Notice);
