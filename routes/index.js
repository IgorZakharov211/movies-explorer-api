const router = require('express').Router();
const userRouter = require('./users');
const movieRouter = require('./movies');
const auth = require('../middlewares/auth');
const checkPassword = require('../middlewares/check-password');
const { validateUserBody, validateAuth } = require('../middlewares/validations');

const {
  createUser, login,
} = require('../controllers/users');

router.post('/signup', validateUserBody, createUser);
router.post('/signin', validateAuth, login);
router.use(auth);
router.use('/users', userRouter);
router.use('/movies', movieRouter);

module.exports = router;
