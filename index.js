var express = require('express');
var router = express.Router();
var movies = loadMovies();

router.get('/', (req, res) => {
    res.json(movies);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const movie = movies.find(movie => movie.id === id);
    return res.send(movie);
});

module.exports = movie;