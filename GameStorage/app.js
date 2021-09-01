const express = require('express');
const cors = require('cors');
const logger = require('morgan');
// require("./dbConnection/db");

// const profileController = require('./controllers/profileController');
// const wordController = require('./controllers/wordController');
// const postController = require('./controllers/postController');
// const userController = require('./controllers/userController');
const GenreController = require('./Controllers/GenreController');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 9000

app.use(logger('dev'));
app.use(express.json());

app.use('/', GenreController);
// app.use('/profile', profileController);
// app.use('/words', wordController);
// app.use('/posts', postController);
// app.use('/users', userController);

// Rest Setup
const restServer = app.listen(port, () => console.log(`RestServer is listening on port ${PORT}`));
