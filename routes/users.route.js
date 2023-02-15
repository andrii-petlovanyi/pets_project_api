const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();

const wrapCtrl = require('../middlewares/wrapCtrl');
const checkJWT = require('../middlewares/checkJWT');
const { editAvatar } = require('../middlewares/avatar');
const { userInfo } = require('../controllers/users/userInfo.controller');
const {
  updateUserInfo,
} = require('../controllers/users/updateUser.controller');

// router.get('/logout', checkJWT, async (req, res, next) => {
//   await logout(req.user.userId);
//   return res.status(204).send({});
// });

router.get('/current', checkJWT, wrapCtrl(userInfo));
router.patch('/', checkJWT, wrapCtrl(updateUserInfo));
router.patch(
  '/avatars',
  checkJWT,
  upload.single('avatar'),
  editAvatar,
  async (req, res, next) => {
    const user = await updateAvatar(req.user.userId, req.file.path);
    return res.status(200).send({
      avatarURL: user.avatarURL,
    });
  },
);

module.exports = router;
