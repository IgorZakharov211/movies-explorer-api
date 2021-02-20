const router = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { validateObjectId, validateMovieBody } = require('../middlewares/validations');

router.get('', getMovies);
router.post('', validateMovieBody, createMovie);
router.delete('/:_id', validateObjectId, deleteMovie);

module.exports = router;
