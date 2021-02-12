const router = require('express').Router();
const { getUser, updateProfile } = require('../controllers/users');

router.get('/me', getUser);
router.patch('/me', updateProfile);

module.exports = router;
