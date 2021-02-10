const router = require('express').Router();

router.get('/movies', getMovies);
router.post('/movies', createMovie);
router.delete('/movies/:_id', deleteMovie);

module.exports = router;
