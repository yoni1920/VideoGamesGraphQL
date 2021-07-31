const pool = require('../dbConnection/db');

exports.addGameGenres = async (name, genre) => {
    const postQuery = `INSERT INTO game_store.game_genres(game_name, genre_name)
                        VALUES ($1, $2);`;
    const values = [name, genre];

    await pool.query(postQuery, values);
};

exports.allGames = async () => {
    const query = `SELECT * FROM game_store.video_games;`;

    const { rows } = await pool.query(query);

    return rows;
}

exports.allGameToGenres = async () => {
    const query = `SELECT 	game_genres.game_name, 
                        video_games.company_name,
                        video_games.release_date,
                        json_agg(game_genres.genre_name) AS genres
                    FROM game_store.game_genres as game_genres
                    INNER JOIN game_store.video_games as video_games
                    ON video_games.game_name = game_genres.game_name
                    GROUP BY game_genres.game_name, 
                        video_games.company_name,
                        video_games.release_date
                    ORDER BY game_genres.game_name ASC;`;
    
    const { rows } = await pool.query(query);

    // return rows

    return rows.map(game => {
        return {
            gameName: game.game_name,
            companyName: game.company_name,
            releaseDate: game.release_date,
            genres: game.genres
        }
    })
}