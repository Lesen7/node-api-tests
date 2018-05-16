const express = require('express');
const app = express();

const moviesRouter = require('./index.js');

app.use(express.json());
app.use('', moviesRouter);

app.listen(3000, () => {
    console.log('Ready on port 3000!');
});