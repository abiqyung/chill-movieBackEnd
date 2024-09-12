const dbPool = require("../config/database");
const { mkcol } = require("../routes/movies");

const getAllmovies = () => {
  const SQLQuery = "SELECT * FROM movies";
  return dbPool.execute(SQLQuery);
};

const createNewMovie = (body) => {
  const SQLQuery = `INSERT INTO movies (movie_id, name, overview, original_language, genre_ids, release_date ) 
                    VALUES ("${body.movie_id}", "${body.name}", "${body.overview}", "${body.original_language}", "${body.genre_ids}", "${body.release_date}")`;
  return dbPool.execute(SQLQuery);
};

const updateMovie = (body, movie_id) => {
  const SQLQuery = `UPDATE movies 
                    SET name = "${body.name}", overview = "${body.overview}", original_language = "${body.original_language}", genre_ids = "${body.genre_ids}", release_date = "${body.release_date}" 
                    WHERE movie_id = ${movie_id}`;
  return dbPool.execute(SQLQuery);
};

const deleteMovie = (movie_id) => {
  const SQLQuery = `DELETE FROM movies WHERE movie_id = ${movie_id}`;
  return dbPool.execute(SQLQuery);
};

module.exports = { getAllmovies, createNewMovie, updateMovie, deleteMovie };
