const { Joi, celebrate } = require('celebrate');
const { ObjectId } = require('mongoose').Types;
const validator = require('validator');

const validateUserBody = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email()
      .message('Поле "email" должно быть валидным email адресом')
      .messages({
        'any.required': 'Поле "email" обязательно для заполнения',
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
      }),
  }),
});

const validateAuth = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email()
      .message('Поле "email" должно быть валидным email адресом')
      .messages({
        'any.required': 'Поле "email" обязательно для заполнения',
      }),
    password: Joi.string().required()
      .messages({
        'any.required': 'Поле "password" обязательно для заполнения',
      }),
  }),
});

const validateObjectId = celebrate({
  params: Joi.object().keys({
    id: Joi.string().required().custom((value, helpers) => {
      if (ObjectId.isValid(value)) {
        return value;
      }
      return helpers.message('Невалидный id');
    }),
  }),
});

module.exports = {
  validateUserBody, validateAuth, validateObjectId,
};
