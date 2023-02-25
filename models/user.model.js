const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcryptjs = require('bcryptjs');
const { ConflictError } = require('../helpers/errors');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: [true, 'Email is must be unique'],
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
    },
    phone: {
      type: String,
      unique: [true, 'Email is must be unique'],
      default: '',
    },
    accessToken: {
      type: String,
      default: null,
    },
    refreshToken: {
      type: String,
      default: null,
    },
    avatarURL: String,
    pets: [],
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Notice',
      },
    ],
  },

  { versionKey: false, timestamps: true },
);

userSchema.post('save', function (error, doc, next) {
  if (error.code === 11000) {
    next(
      new ConflictError(
        `User with number ${error.keyValue.phone} is exists`,
      ),
    );
  } else {
    next();
  }
});
userSchema.methods.setPassword = function (password) {
  this.password = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));
};

userSchema.methods.setToken = function (token) {
  this.accessToken = token;
};

userSchema.methods.comparePassword = function (password) {
  return bcryptjs.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
