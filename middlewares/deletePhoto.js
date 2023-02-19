const { CustomError } = require('../helpers/errors');

const cloudinary = require('cloudinary');
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const deletePhoto = photoUrl => {
  const photoName = photoUrl.split('/').pop().slice(0, -4);

  cloudinary.v2.uploader.destroy(photoName, function (error, _) {
    if (error) {
      throw new CustomError('Something went wrong...');
    }
  });
};

module.exports = { deletePhoto };
