const { addMyPetCtrl } = require('./addMyPet.controller');
const { currentUserCtrl } = require('./currentUser.controller');
const { delMyPetCtrl } = require('./delMyPet.controller');
const { loginCtrl } = require('./login.controller');
const { logOutCtrl } = require('./logout.controller');
const { registerCtrl } = require('./register.controller');
const { updateUserCtrl } = require('./updateUser.controller');

module.exports = {
  currentUserCtrl,
  delMyPetCtrl,
  loginCtrl,
  logOutCtrl,
  registerCtrl,
  updateUserCtrl,
};
