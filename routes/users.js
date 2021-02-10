const router = require('express').Router();

router.get('/users/me', getUser);

module.exports = router;
