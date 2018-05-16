const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/liked', (req, res) => {
    res.json(controller.getLiked());
});

router.get('/:id', (req, res) => {
    res.json(controller.getMovieById());
});

router.get('/', (req, res) => {
    res.json(controller.getMovies());
});

router.post('/', (req, res) => {
    const movie = req.body;
    controller.newMovie(movie, (err, movies) => {
      if (err) {
        res.error(err);
      } else {
        res.json(movies);
      }
    });
  });
  
  router.put('/', (req, res) => {
    controller.updateMovie(req.body, (err, movies) => {
      if (err) {
        res.error(err);
      } else {
        res.json(movies);
      }
    });
  });
  
  router.delete('/:id', (req, res) => {
    controller.deleteMovie(req.params.id, (err, movies) => {
      if (err) {
        res.error(err);
      } else {
        res.json(movies);
      }
    });
  });
  
  router.put('/like/:id', (req, res) => {
    controller.setLikes(req.params.id, true, (err, movies) => {
      if (err) {
        res.error(err);
      } else {
        res.json(movies);
      }
    });
  });
  
  router.put('/like/:id', (req, res) => {
    controller.setLikes(req.params.id, false, (err, movies) => {
      if (err) {
        res.error(err);
      } else {
        res.json(movies);
      }
    });
  });

/*files.loadData().then(moviesData => movies = moviesData);

// Mostrar todas las películas
router.get('/movies', (req, res) => {
    res.json(movies);
});

// Mostrar películas con likes
router.get('/movies/liked', (req, res) => {
    let likedMovies = [];
    movies.forEach(function(element) {
        if(element.likes && element.likes > 0) {
            likedMovies.push(element);
        }
    });
    res.json(likedMovies);
});

// Mostrar película con id específica
router.get('/movies/:id', (req, res) => {
    const movieId = req.params.id;
    const movie = movies.find(movie => movie.id === movieId);
    res.json(movie);
});

// Añadir una nueva película
router.post('/movies', (req, res) => {
    const newMovie = req.body;
    newMovie.id = movies.length;
    movies.push(newMovie);
    files.saveData(movies).then(() => res.json(newMovie))
              .catch((err) => res.status(503).send(err));
});

// Actualizar datos de una película
router.put('/movies', (req, res) => {
    const movieId = req.body.id;
    let moviePosition = movies.findIndex(movie => movie.id === movieId);
    if (moviePosition >= 0) {
        movies[moviePosition] = req.body;
    }
    files.saveData(movies).then(() => res.json(movies))
              .catch((err) => res.status(503).send(err));
});

// Añadir 'like' a una película
router.put('/movies/like/:id', (req, res) => {
    const movieId = req.params.id;
    let moviePosition = movies.findIndex(movie => movie.id === movieId);
    let movie = movies[moviePosition];
    if (moviePosition >= 0) {
        if (movie.likes != undefined)
        {
            console.log("hola");
            movie.likes++;
        } else {
            movie.likes = 0;
            movie.likes++;
        }
    }
    files.saveData(movies).then(() => res.json(movies))
              .catch((err) => res.status(503).send(err));
});

// Quitar 'like' a una película
router.put('/movies/dislike/:id', (req, res) => {
    const movieId = req.params.id;
    let moviePosition = movies.findIndex(movie => movie.id === movieId);
    let movie = movies[moviePosition];
    if (moviePosition >= 0) {
        if ('likes' in movie && movie.likes > 0)
        {
            movie.likes--;
        } else {
            movie.likes = 0;
        }
    }
    files.saveData(movies).then(() => res.json(movies))
              .catch((err) => res.status(503).send(err));
});

// Borrar una película
router.delete('/movies/:id', (req, res) => {
    const movieId = req.params.id;
    const moviePosition = movies.findIndex(movie => movie.id === movieId);
    if (moviePosition >= 0) {
        movies.splice(moviePosition, 1);
    }
    files.saveData(movies).then(() => res.json(movies))
              .catch((err) => res.status(503).send(err));
});*/

module.exports = router;