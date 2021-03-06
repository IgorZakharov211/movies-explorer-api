const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (v) => {
        /(http|https):\/\/?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/gi.test(v);
      },
      message: (props) => `${props.value} неправильно указана ссылка!`,
    },
  },
  trailer: {
    type: String,
    required: true,
    validate: {
      validator: (v) => {
        /(http|https):\/\/?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/gi.test(v);
      },
      message: (props) => `${props.value} неправильно указана ссылка!`,
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: (v) => {
        /(http|https):\/\/?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/gi.test(v);
      },
      message: (props) => `${props.value} неправильно указана ссылка!`,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: String,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
