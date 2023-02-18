const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcryptjs = require('bcryptjs');

const userSchema = new Schema(
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
      type: String,
      default: '01.01.1977',
    },
    phone: {
      type: String,
      unique: true,
      default: '',
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: String,
    pets: [],
    // pets: [
    //   {
    //     name: {
    //       type: String,
    //       required: [true, 'Name is required'],
    //     },
    //     birth: {
    //       type: Date,
    //       default: '00.00.0000',
    //     },
    //     avatar: { type: String },
    //     breed: { type: String, default: '' },
    //     comments: { type: String, default: '' },
    //   },
    // ],
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Notice',
      },
    ],
  },

  { versionKey: false, timestamps: true },
);

userSchema.methods.setPassword = function (password) {
  this.password = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));
};

userSchema.methods.setToken = function (token) {
  this.token = token;
};

userSchema.methods.comparePassword = function (password) {
  return bcryptjs.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
