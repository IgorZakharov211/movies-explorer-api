const router = require('express').Router();
const userRouter = require('./users');
const movieRouter = require('./movies');
const auth = require('../middlewares/auth');
const checkPassword = require('../middlewares/check-password');

const {
  createUser, login,
} = require('../controllers/users');

router.post('/signup', createUser);
router.post('/signin', login);
router.use(auth);
router.use('/users', userRouter);
router.use('/movies', movieRouter);

module.exports = router;
