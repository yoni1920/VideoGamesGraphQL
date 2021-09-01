// const gameGenres = require('../Data/GameGenres');
const GenreRepository = require('../Repositories/GenreRepository');

exports.retrieveAllGames = async () => {
    return await GenreRepository.allGames();
}

exports.retrieveGamesToGenres = async () => {
    return await GenreRepository.allGameToGenres();
}