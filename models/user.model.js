const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    city: {
      type: String,
      required: [true, 'City is required'],
      default: '',
    },
    birthday: {
      type: Date,
      default: Date.now,
    },
    phone: {
      type: String,
      unique: true,
      default: '',
    },
    accessToken: {
      type: String,
      default: null,
    },
    avatarURL: String,
    pets: [
      {
        name: {
          type: String,
          required: [true, 'Name is required'],
        },
        birth: {
          type: Date,
          default: Date.now,
        },
        breed: { type: String, default: '' },
        comments: { type: String, default: '' },
      },
    ],
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: 'notice',
      },
    ],
  },

  {
    timestamps: true,
  },
);
const UserScheme = mongoose.model("User", User);//DIANA
module.exports = { UserScheme };//DIANA
//module.exports = mongoose.model('User', User);
