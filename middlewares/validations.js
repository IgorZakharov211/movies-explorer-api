const { Joi, celebrate } = require('celebrate');
const { ObjectId } = require('mongoose').Types;
const validator = require('validator');

const validateUserBody = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email()
      .message('Поле "email" должно быть валидным email адресом')
      .messages({
        'any.required': 'Поле "email" обязательно для заполнения',
        'string.empty': 'Поле "email" не должно быть пустым',
      }),
    name: Joi.string().required().min(2).max(30)
      .messages({
        'string.min': 'Минимальная длина поля "name" - 2',
        'string.max': 'Максимальная длина поля "name" - 30',
        'any.required': 'Поле "name" обязательно для заполнения',
      }),
    password: Joi.string().required()
      .messages({
        'any.required': 'Поле "password" обязательно для заполнения',
        'string.empty': 'Поле "password" не должно быть пустым',
      }),
  }),
});

const validateAuth = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email()
      .message('Поле "email" должно быть валидным email адресом')
      .messages({
        'any.required': 'Поле "email" обязательно для заполнения',
        'string.empty': 'Поле "email" не должно быть пустым',
      }),
    password: Joi.string().required()
      .messages({
        'any.required': 'Поле "password" обязательно для заполнения',
        'string.empty': 'Поле "password" не должно быть пустым',
      }),
  }),
});

const validateObjectId = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().required().custom((value, helpers) => {
      if (ObjectId.isValid(value)) {
        return value;
      }
      return helpers.message('Невалидный id');
    }),
  }),
});

const validateUpdateProfile = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email()
      .message('Поле "email" должно быть валидным email адресом')
      .messages({
        'any.required': 'Поле "email" обязательно для заполнения',
        'string.empty': 'Поле "email" не должно быть пустым',
      }),
    name: Joi.string().required().min(2).max(30)
      .messages({
        'string.min': 'Минимальная длина поля "name" - 2',
        'string.max': 'Максимальная длина поля "name" - 30',
        'any.required': 'Поле "name" обязательно для заполнения',
      }),
  }),
});

const validateMovieBody = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required()
      .messages({
        'any.required': 'Поле "country" обязательно для заполнения',
        'string.empty': 'Поле "country" не должно быть пустым',
      }),
    director: Joi.string().required()
      .messages({
        'any.required': 'Поле "director" обязательно для заполнения',
        'string.empty': 'Поле "director" не должно быть пустым',
      }),
    duration: Joi.number().required()
      .messages({
        'any.required': 'Поле "duration" обязательно для заполнения',
        'string.empty': 'Поле "duration" не должно быть пустым',
      }),
    year: Joi.string().required()
      .messages({
        'any.required': 'Поле "year" обязательно для заполнения',
        'string.empty': 'Поле "year" не должно быть пустым',
      }),
    description: Joi.string().required()
      .messages({
        'any.required': 'Поле "description" обязательно для заполнения',
        'string.empty': 'Поле "description" не должно быть пустым',
      }),
    image: Joi.string().required().custom((value, helpers) => {
      if (validator.isURL(value)) {
        return value;
      }
      return helpers.message('Поле "image" должно быть валидным url-адресом');
    })
      .messages({
        'any.required': 'Поле "image" обязательно для заполнения',
        'string.empty': 'Поле "image" не должно быть пустым',
      }),
    trailer: Joi.string().required().custom((value, helpers) => {
      if (validator.isURL(value)) {
        return value;
      }
      return helpers.message('Поле "trailer" должно быть валидным url-адресом');
    })
      .messages({
        'any.required': 'Поле "trailer" обязательно для заполнения',
        'string.empty': 'Поле "trailer" не должно быть пустым',
      }),
    thumbnail: Joi.string().required().custom((value, helpers) => {
      if (validator.isURL(value)) {
        return value;
      }
      return helpers.message('Поле "thumbnail" должно быть валидным url-адресом');
    })
      .messages({
        'any.required': 'Поле "thumbnail" обязательно для заполнения',
        'string.empty': 'Поле "thumbnail" не должно быть пустым',
      }),
    movieId: Joi.string().required().custom((value, helpers) => {
      if (ObjectId.isValid(value)) {
        return value;
      }
      return helpers.message('Невалидный id поля "movieId"');
    })
      .messages({
        'any.required': 'Поле "movieId" обязательно для заполнения',
        'string.empty': 'Поле "movieId" не должно быть пустым',
      }),
    nameRU: Joi.string().required()
      .messages({
        'any.required': 'Поле "nameRU" обязательно для заполнения',
        'string.empty': 'Поле "nameRU" не должно быть пустым',
      }),
    nameEN: Joi.string().required()
      .messages({
        'any.required': 'Поле "nameEN" обязательно для заполнения',
        'string.empty': 'Поле "nameEN" не должно быть пустым',
      }),
  }),
});

module.exports = {
  validateUserBody, validateAuth, validateObjectId, validateUpdateProfile, validateMovieBody,
};
