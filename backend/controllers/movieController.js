const Movie = require('../models/Movie');

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find()
      .sort({ releaseDate: -1 });

    res.json({
      success: true,
      data: { movies }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching movies',
      error: error.message
    });
  }
};

const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({
        success: false,
        message: 'Movie not found'
      });
    }

    res.json({
      success: true,
      data: { movie }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching movie',
      error: error.message
    });
  }
};

// const createMovie = async (req, res) => {
//   try {
//     const movie = await Movie.create(req.body);

//     res.status(201).json({
//       success: true,
//       message: 'Movie created successfully',
//       data: { movie }
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: 'Error creating movie',
//       error: error.message
//     });
//   }
// };

const createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    
    // Auto-create shows for the new movie
    await createShowsForNewMovie(movie._id);

    res.status(201).json({
      success: true,
      message: 'Movie created successfully with shows',
      data: { movie }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating movie',
      error: error.message
    });
  }
};


const createShowsForNewMovie = async (movieId) => {
  try {
    const Cinema = require('../models/Cinema');
    const Show = require('../models/Show');

    const cinemas = await Cinema.find().populate('screens');
    const currentDate = new Date();
    const showTimes = ['10:00', '13:30', '17:00', '20:30'];
    
    for (const cinema of cinemas) {
      if (cinema.screens && cinema.screens.length > 0) {
        const screen = cinema.screens[0]; // Use first screen
        
        // Create shows for next 7 days
        for (let day = 0; day < 7; day++) {
          for (const time of showTimes) {
            const showDate = new Date(currentDate);
            showDate.setDate(currentDate.getDate() + day);
            const [hours, minutes] = time.split(':');
            showDate.setHours(hours, minutes, 0, 0);

            await Show.create({
              movie: movieId,
              screen: screen._id,
              cinema: cinema._id,
              showTime: showDate,
              price: Math.floor(Math.random() * 200) + 250,
              bookedSeats: [],
              blockedSeats: []
            });
          }
        }
      }
    }
  } catch (error) {
    console.error('Error creating shows for new movie:', error);
  }
};

const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!movie) {
      return res.status(404).json({
        success: false,
        message: 'Movie not found'
      });
    }

    res.json({
      success: true,
      message: 'Movie updated successfully',
      data: { movie }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating movie',
      error: error.message
    });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);

    if (!movie) {
      return res.status(404).json({
        success: false,
        message: 'Movie not found'
      });
    }

    res.json({
      success: true,
      message: 'Movie deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting movie',
      error: error.message
    });
  }
};

module.exports = {
  getMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
  createShowsForNewMovie
};

