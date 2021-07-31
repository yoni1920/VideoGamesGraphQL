const express = require('express');
const router = express.Router();

const genreService = require('../Services/GenreService');

// router.post('/game-genres', async (req, res) => {
//     try {
//         // const output = await genreService.addGameGenres();
//         // res.send(output);

//         res.status(200).send();
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

router.get('/games', async (req, res) => {
    try {
        const output = await genreService.retrieveAllGames();

        res.send(output);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.get('/game-genres', async (req, res) => {
    try {
        const output = await genreService.retrieveGamesToGenres();

        res.send(output);
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
})

module.exports = router;