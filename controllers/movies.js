const Movie = require('../models/movie');
const ValidationError = require('../errors/validation-error');
const NotFoundError = require('../errors/not-found-error');
const ForbiddenError = require('../errors/forbidden-error');

const getMovies = (req, res, next) => {
  Movie.find({})
    .then((movies) => res.send(movies))
    .catch(next);
};

const createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
  } = req.body;
  const { owner } = req.user._id;
  Movie.countDocuments()
    .then((count) => {
      Movie.create({
        id: count,
        owner,
        country,
        director,
        duration,
        year,
        description,
        image,
        trailer,
        nameRU,
        nameEN,
        thumbnail,
      })
        .then((movie) => res.send({ data: movie.toJSON() }))
        .catch((err) => {
          if (err.name === 'ValidationError') {
            next(new ValidationError(`${Object.values(err.errors).map((error) => error.message).join(', ')}`));
          } else {
            next(err);
          }
        });
    });
};

const deleteMovie = (req, res, next) => {
  const { _id } = req.params;
  Movie.findById(_id)
    .orFail(() => new NotFoundError('Фильм по заданному id не найден'))
    .then((result) => {
      if (req.user._id === result.owner) {
        Movie.findByIdAndRemove(_id)
          .then((movie) => res.send(movie))
          .catch(next);
      } else {
        throw new ForbiddenError('Невозможно удалить чужой фильм!');
      }
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  getMovies, createMovie, deleteMovie,
};
