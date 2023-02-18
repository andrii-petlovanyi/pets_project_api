const { uploadPhoto } = require('./uploadPhoto');
const { idValidation } = require('./idValidation');
const { reqValidation } = require('./reqValidation');
const { wrapCtrl } = require('./wrapCtrl');
const { checkJWT } = require('./checkJWT');

module.exports = {
  uploadPhoto,
  idValidation,
  reqValidation,
  wrapCtrl,
  checkJWT,
};
