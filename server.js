const express = require('express');
const app = express();
app.use(express.json());
const movies = [{id: '0', name: 'Iron Fish: The Movie', likes: 0}, {id: '1', name: 'Alien: Covenant', likes: 0}];

// Mostrar todas las películas
app.get('/movies', (req, res) => {
    res.json(movies);
});

// Mostrar película con id específica
app.get('/movies/:id', (req, res) => {
    const movieId = req.params.id;
    const movie = movies.find(movie => movie.id === movieId);
    res.json(movie);
});

// Añadir una nueva película
app.post('/movies', (req, res) => {
    const newMovie = req.body;
    newMovie.id = movies.length;
    movies.push(newMovie);
    res.json(newMovie);
});

// Actualizar datos de una película
app.put('/movies', (req, res) => {
    const movieId = req.body.id;
    let moviePosition = movies.findIndex(movie => movie.id === movieId);
    if (moviePosition >= 0) {
        movies[moviePosition] = req.body;
    }
    res.json(movies);
});

// Añadir 'like' a una película
app.put('/movies/like/:id', (req, res) => {
    const movieId = req.params.id;
    let moviePosition = movies.findIndex(movie => movie.id === movieId);
    if (moviePosition >= 0) {
        movies[moviePosition].likes++;
    }
    res.json(movies);
});

// Borrar una película
app.delete('/movies/:id', (req, res) => {
    const movieId = req.params.id;
    const moviePosition = movies.findIndex(movie => movie.id === movieId);
    if (moviePosition >= 0) {
        movies.splice(moviePosition, 1);
    }
    res.json(movies);
});

app.listen(3000, () => console.log('Ready on port 3000!'));