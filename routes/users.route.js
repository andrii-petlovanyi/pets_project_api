const express = require('express');
const router = express.Router();
// const multer = require('multer');
// const upload = multer();

const { wrapCtrl } = require('../middlewares/wrapCtrl');
const checkJWT = require('../middlewares/checkJWT');
const { userInfo } = require('../controllers/users/userInfo.controller');
const {
  updateUserInfo,
} = require('../controllers/users/updateUser.controller');
const { reqValidation } = require('../middlewares/reqValidation');
const { schemaUser } = require('../validations/user.validation');
const { exitUser } = require('../controllers/users/logout');

router.get('/current', checkJWT, wrapCtrl(userInfo));
router.patch(
  '/',
  checkJWT,
  reqValidation(schemaUser),
  wrapCtrl(updateUserInfo),
);

// router.patch(
//   '/avatars',
//   checkJWT,
//   upload.single('avatar'),
//   async (req, res, next) => {
//     const user = await updateAvatar(req.user.userId, req.file.path);
//     return res.status(200).send({
//       avatarURL: user.avatarURL,
//     });
//   },
// );
router.get('/logout', checkJWT, wrapCtrl(exitUser));

module.exports = router;
