var express = require('express');
var router = express.Router();
var magic = require('./whereTheMagicHappens');

router.get('/', (req, res) => magic.getMovies);

router.get('/:id', (req, res) => magic.getMovie);

module.exports = router;