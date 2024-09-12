const MoviesModel = require("../models/movies");

const getAllmovies = async (req, res) => {
  try {
    const [data] = await MoviesModel.getAllmovies();

    res.json({
      message: "Get Movie Suksess",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessege: error,
    });
  }
};

const createNewMovie = async (req, res) => {
  const { body } = req;

  try {
    await MoviesModel.createNewMovie(body);
    res.json({
      message: "Membuat Movie baru Suksess",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessege: error,
    });
  }
};

const updateMovie = async (req, res) => {
  const { movie_id } = req.params;
  const { body } = req;
  try {
    await MoviesModel.updateMovie(body, movie_id);
    res.json({
      message: "Update Movie Suksess",
      data: {
        movie_id: movie_id,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessege: error,
    });
  }
};

const deleteMovie = async (req, res) => {
  const { Movie_id } = req.params;
  try {
    await MoviesModel.deleteMovie(Movie_id);
    res.json({
      message: "Delete Movie Suksess",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessege: error,
    });
  }
};

module.exports = {
  getAllmovies,
  createNewMovie,
  updateMovie,
  deleteMovie,
};
