const Movie = require('../models/movie');
const ValidationError = require('../errors/validation-error');
const NotFoundError = require('../errors/not-found-error');
const ForbiddenError = require('../errors/forbidden-error');
const { notFoundMovie, forbiddenMovie } = require('../constants');

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
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;
  const owner = req.user._id;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    owner,
    movieId,
    nameRU,
    nameEN,
  })
    .then((movie) => res.send({ data: movie.toJSON() }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new ValidationError(`${Object.values(err.errors).map((error) => error.message).join(', ')}`));
      } else {
        next(err);
      }
    });
};

const deleteMovie = (req, res, next) => {
  const _id = req.params;
  Movie.findById(_id)
    .orFail(() => new NotFoundError(notFoundMovie))
    .then((result) => {
      const userId = String(req.user._id);
      const ownerId = String(result.owner);
      if (userId === ownerId) {
        Movie.findByIdAndRemove(_id)
          .then((movie) => res.send(movie))
          .catch(next);
      } else {
        throw new ForbiddenError(forbiddenMovie);
      }
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  getMovies, createMovie, deleteMovie,
};
