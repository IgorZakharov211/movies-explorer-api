const { Joi, celebrate } = require('celebrate');
const { ObjectId } = require('mongoose').Types;
const validator = require('validator');

const {
  invalidId,
  invalidEmail,
  requiredEmail,
  emptyEmail,
  minName,
  maxName,
  requiredName,
  requiredPassword,
  emptyPassword,
  requiredCountry,
  emptyCountry,
  requiredDirector,
  emptyDirector,
  requiredDuration,
  emptyDuration,
  requiredYear,
  emptyYear,
  requiredDescription,
  emptyDescription,
  invalidImage,
  requiredImage,
  emptyImage,
  invalidTrailer,
  requiredTrailer,
  emptyTrailer,
  invalidThumbnail,
  requiredThumbnail,
  emptyThumbnail,
  invalidMovieId,
  requiredMovieId,
  emptyMovieId,
  requiredNameRU,
  emptyNameRU,
  requiredNameEN,
  emptyNameEN,
} = require('../constants');

const validateUserBody = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email()
      .message(invalidEmail)
      .messages({
        'any.required': requiredEmail,
        'string.empty': emptyEmail,
      }),
    name: Joi.string().required().min(2).max(30)
      .messages({
        'string.min': minName,
        'string.max': maxName,
        'any.required': requiredName,
      }),
    password: Joi.string().required()
      .messages({
        'any.required': requiredPassword,
        'string.empty': emptyPassword,
      }),
  }),
});

const validateAuth = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email()
      .message(invalidEmail)
      .messages({
        'any.required': requiredEmail,
        'string.empty': emptyEmail,
      }),
    password: Joi.string().required()
      .messages({
        'any.required': requiredPassword,
        'string.empty': emptyPassword,
      }),
  }),
});

const validateObjectId = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().required().custom((value, helpers) => {
      if (ObjectId.isValid(value)) {
        return value;
      }
      return helpers.message(invalidId);
    }),
  }),
});

const validateUpdateProfile = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email()
      .message(invalidEmail)
      .messages({
        'any.required': requiredEmail,
        'string.empty': emptyEmail,
      }),
    name: Joi.string().required().min(2).max(30)
      .messages({
        'string.min': minName,
        'string.max': maxName,
        'any.required': requiredName,
      }),
  }),
});

const validateMovieBody = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required()
      .messages({
        'any.required': requiredCountry,
        'string.empty': emptyCountry,
      }),
    director: Joi.string().required()
      .messages({
        'any.required': requiredDirector,
        'string.empty': emptyDirector,
      }),
    duration: Joi.number().required()
      .messages({
        'any.required': requiredDuration,
        'string.empty': emptyDuration,
      }),
    year: Joi.string().required()
      .messages({
        'any.required': requiredYear,
        'string.empty': emptyYear,
      }),
    description: Joi.string().required()
      .messages({
        'any.required': requiredDescription,
        'string.empty': emptyDescription,
      }),
    image: Joi.string().required().custom((value, helpers) => {
      if (validator.isURL(value)) {
        return value;
      }
      return helpers.message(invalidImage);
    })
      .messages({
        'any.required': requiredImage,
        'string.empty': emptyImage,
      }),
    trailer: Joi.string().required().custom((value, helpers) => {
      if (validator.isURL(value)) {
        return value;
      }
      return helpers.message(invalidTrailer);
    })
      .messages({
        'any.required': requiredTrailer,
        'string.empty': emptyTrailer,
      }),
    thumbnail: Joi.string().required().custom((value, helpers) => {
      if (validator.isURL(value)) {
        return value;
      }
      return helpers.message(invalidThumbnail);
    })
      .messages({
        'any.required': requiredThumbnail,
        'string.empty': emptyThumbnail,
      }),
    movieId: Joi.string().required().custom((value, helpers) => {
      if (ObjectId.isValid(value)) {
        return value;
      }
      return helpers.message(invalidMovieId);
    })
      .messages({
        'any.required': requiredMovieId,
        'string.empty': emptyMovieId,
      }),
    nameRU: Joi.string().required()
      .messages({
        'any.required': requiredNameRU,
        'string.empty': emptyNameRU,
      }),
    nameEN: Joi.string().required()
      .messages({
        'any.required': requiredNameEN,
        'string.empty': emptyNameEN,
      }),
  }),
});

module.exports = {
  validateUserBody, validateAuth, validateObjectId, validateUpdateProfile, validateMovieBody,
};
