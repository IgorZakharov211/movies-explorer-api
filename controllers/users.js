const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const { JWT_SECRET } = require('../config');
const AuthError = require('../errors/auth-error');
const ConflictError = require('../errors/conflict-error');
const ValidationError = require('../errors/validation-error');
const NotFoundError = require('../errors/not-found-error');
const {
  conflictEmail,
  notFoundUser,
  invalidId,
} = require('../constants');

const login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        JWT_SECRET,
        { expiresIn: '7d' },
      );
      res.send({ token });
    })
    .catch((err) => {
      next(new AuthError(err.message));
    });
};

const createUser = (req, res, next) => {
  const { email, password, name } = req.body;
  return bcrypt.hash(password, 10)
    .then((hash) => User.create({
      email, password: hash, name,
    })
      .then((user) => res.send({ email: user.email, name: user.name }))
      .catch((err) => {
        if (err.code === 11000) {
          next(new ConflictError(conflictEmail));
        }
        if (err.name === 'ValidationError') {
          next(new ValidationError(`${Object.values(err.errors).map((error) => error.message).join(', ')}`));
        } else {
          next(err);
        }
      }));
};

const getUser = (req, res, next) => {
  const id = req.user._id;
  User.findById(id)
    .orFail(() => new NotFoundError(notFoundUser))
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        next(new ValidationError(invalidId));
      } else {
        next(err);
      }
    });
};

const updateProfile = (req, res, next) => {
  const { email, name } = req.body;
  const id = req.user._id;
  User.findByIdAndUpdate(id, { email, name },
    { new: true })
    .orFail(() => NotFoundError(notFoundUser))
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        next(new ValidationError(invalidId));
      }
      if (err.name === 'ValidationError') {
        next(new ValidationError(`${Object.values(err.errors).map((error) => error.message).join(', ')}`));
      }
      if (err.code === 11000) {
        next(new ConflictError(conflictEmail));
      } else {
        next(err);
      }
    });
};

module.exports = {
  login, createUser, getUser, updateProfile,
};
