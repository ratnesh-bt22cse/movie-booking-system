// import { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Calendar, MapPin, Film } from 'lucide-react';
// import { showAPI, cinemaAPI } from '../utils/api';
// import { useBooking } from '../context/BookingContext';
// import { getNextSevenDays } from '../utils/helpers';
// import LoadingSpinner from '../components/Layout/LoadingSpinner';
// import MovieCard from '../components/Movie/MovieCard';
// import toast from 'react-hot-toast';

// const ShowList = () => {
//   const { cinemaId } = useParams();
//   const [cinema, setCinema] = useState(null);
//   const [movieShows, setMovieShows] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
//   const [loading, setLoading] = useState(true);
  
//   const { setSelectedCinema, setSelectedShow } = useBooking();

//   useEffect(() => {
//     fetchCinemaAndShows();
//   }, [cinemaId, selectedDate]);

//   const fetchCinemaAndShows = async () => {
//     try {
//       setLoading(true);
      
//       // Fetch cinema details
//       const cinemaResponse = await cinemaAPI.getById(cinemaId);
//       const cinemaData = cinemaResponse.data.data.cinema;
//       setCinema(cinemaData);
//       setSelectedCinema(cinemaData);

//       // Fetch shows for selected date
//       const showsResponse = await showAPI.getByCinema(cinemaId, selectedDate);
//       setMovieShows(showsResponse.data.data.movieShows);
      
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       toast.error('Failed to load shows');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleShowSelect = (show) => {
//     setSelectedShow(show);
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-64">
//         <LoadingSpinner size="large" />
//       </div>
//     );
//   }

//   if (!cinema) {
//     return (
//       <div className="text-center py-16">
//         <Film className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//         <h2 className="text-2xl font-semibold text-gray-700 mb-2">
//           Cinema Not Found
//         </h2>
//         <Link to="/cinemas" className="btn-primary">
//           Back to Cinemas
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-8">
//       {/* Cinema Header */}
//       <div className="bg-white rounded-lg shadow-sm border p-6">
//         <div className="flex items-start justify-between">
//           <div>
//             <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
//               {cinema.name}
//             </h1>
//             <div className="flex items-center text-gray-600 mb-4">
//               <MapPin className="w-5 h-5 mr-2" />
//               <span>{cinema.location}</span>
//             </div>
//             <div className="flex items-center space-x-4 text-sm text-gray-500">
//               <span>{cinema.screens?.length || 0} screens</span>
//               <span>•</span>
//               <span>{(cinema.screens?.length || 0) * 100} total seats</span>
//             </div>
//           </div>
//           <Link
//             to="/cinemas"
//             className="btn-secondary"
//           >
//             Change Cinema
//           </Link>
//         </div>
//       </div>

//       {/* Date Selector */}
//       <div className="bg-white rounded-lg shadow-sm border p-6">
//         <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
//           <Calendar className="w-5 h-5 mr-2" />
//           Select Date
//         </h2>
//         <div className="flex space-x-2 overflow-x-auto pb-2">
//           {getNextSevenDays().map((date) => (
//             <button
//               key={date.value}
//               onClick={() => setSelectedDate(date.value)}
//               className={`flex-shrink-0 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
//                 selectedDate === date.value
//                   ? 'bg-primary-600 text-white'
//                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//               }`}
//             >
//               <div className="text-center">
//                 <div>{date.label}</div>
//                 {date.isToday && (
//                   <div className="text-xs opacity-75">Today</div>
//                 )}
//               </div>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Movies and Shows */}
//       {movieShows.length === 0 ? (
//         <div className="text-center py-16 bg-white rounded-lg shadow-sm border">
//           <Film className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//           <h2 className="text-xl font-semibold text-gray-700 mb-2">
//             No Shows Available
//           </h2>
//           <p className="text-gray-500 mb-4">
//             No shows scheduled for {new Date(selectedDate).toLocaleDateString()}
//           </p>
//           <button
//             onClick={() => setSelectedDate(new Date().toISOString().split('T')[0])}
//             className="btn-primary"
//           >
//             View Today's Shows
//           </button>
//         </div>
//       ) : (
//         <div className="space-y-6">
//           {movieShows.map((movieShow) => (
//             <MovieCard 
//               key={movieShow.movie._id} 
//               movieShow={movieShow} 
//               onShowSelect={handleShowSelect}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShowList;

// import { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Calendar, MapPin, Film } from 'lucide-react';
// import { showAPI, cinemaAPI } from '../utils/api';
// import { useBooking } from '../context/BookingContext';
// import { getNextSevenDays } from '../utils/helpers';
// import LoadingSpinner from '../components/Layout/LoadingSpinner';
// import MovieCard from '../components/Movie/MovieCard';
// import toast from 'react-hot-toast';

// const ShowList = () => {
//   const { cinemaId } = useParams();
//   const [cinema, setCinema] = useState(null);
//   const [movieShows, setMovieShows] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
//   const [loading, setLoading] = useState(true);
  
//   const { setSelectedCinema, setSelectedShow } = useBooking();

//   // Fetch data on component mount and when dependencies change
//   useEffect(() => {
//     fetchCinemaAndShows();
//   }, [cinemaId, selectedDate]);

//   // Refresh data when user navigates back to this page
//   useEffect(() => {
//     const handleFocus = () => {
//       console.log('Window focused - refreshing data');
//       fetchCinemaAndShows();
//     };

//     window.addEventListener('focus', handleFocus);
//     return () => window.removeEventListener('focus', handleFocus);
//   }, [cinemaId, selectedDate]);

//   const fetchCinemaAndShows = async () => {
//     try {
//       setLoading(true);
      
//       // Fetch cinema details
//       const cinemaResponse = await cinemaAPI.getById(cinemaId);
//       const cinemaData = cinemaResponse.data.data.cinema;
//       setCinema(cinemaData);
//       setSelectedCinema(cinemaData);

//       // Fetch shows for selected date
//       const showsResponse = await showAPI.getByCinema(cinemaId, selectedDate);
//       setMovieShows(showsResponse.data.data.movieShows);
      
//       console.log('Fetched movie shows:', showsResponse.data.data.movieShows);
      
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       toast.error('Failed to load shows');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRefresh = () => {
//     toast.loading('Refreshing data...', { id: 'refresh' });
//     fetchCinemaAndShows().finally(() => {
//       toast.dismiss('refresh');
//       toast.success('Data refreshed!');
//     });
//   };

//   const handleShowSelect = (show) => {
//     setSelectedShow(show);
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-64">
//         <LoadingSpinner size="large" />
//       </div>
//     );
//   }

//   if (!cinema) {
//     return (
//       <div className="text-center py-16">
//         <Film className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//         <h2 className="text-2xl font-semibold text-gray-700 mb-2">
//           Cinema Not Found
//         </h2>
//         <Link to="/cinemas" className="btn-primary">
//           Back to Cinemas
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-8">
//       {/* Cinema Header with Refresh Button */}
//       <div className="bg-white rounded-lg shadow-sm border p-6">
//         <div className="flex items-start justify-between">
//           <div>
//             <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
//               {cinema.name}
//             </h1>
//             <div className="flex items-center text-gray-600 mb-4">
//               <MapPin className="w-5 h-5 mr-2" />
//               <span>{cinema.location}</span>
//             </div>
//             <div className="flex items-center space-x-4 text-sm text-gray-500">
//               <span>{cinema.screens?.length || 0} screens</span>
//               <span>•</span>
//               <span>{(cinema.screens?.length || 0) * 100} total seats</span>
//             </div>
//           </div>
//           <div className="flex space-x-2">
//             <button
//               onClick={handleRefresh}
//               className="btn-secondary"
//               title="Refresh data"
//             >
//               🔄 Refresh
//             </button>
//             <Link
//               to="/cinemas"
//               className="btn-secondary"
//             >
//               Change Cinema
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Date Selector */}
//       <div className="bg-white rounded-lg shadow-sm border p-6">
//         <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
//           <Calendar className="w-5 h-5 mr-2" />
//           Select Date
//         </h2>
//         <div className="flex space-x-2 overflow-x-auto pb-2">
//           {getNextSevenDays().map((date) => (
//             <button
//               key={date.value}
//               onClick={() => setSelectedDate(date.value)}
//               className={`flex-shrink-0 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
//                 selectedDate === date.value
//                   ? 'bg-primary-600 text-white'
//                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//               }`}
//             >
//               <div className="text-center">
//                 <div>{date.label}</div>
//                 {date.isToday && (
//                   <div className="text-xs opacity-75">Today</div>
//                 )}
//               </div>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Movies and Shows */}
//       {movieShows.length === 0 ? (
//         <div className="text-center py-16 bg-white rounded-lg shadow-sm border">
//           <Film className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//           <h2 className="text-xl font-semibold text-gray-700 mb-2">
//             No Shows Available
//           </h2>
//           <p className="text-gray-500 mb-4">
//             No shows scheduled for {new Date(selectedDate).toLocaleDateString()}
//           </p>
//           <div className="space-x-2">
//             <button
//               onClick={() => setSelectedDate(new Date().toISOString().split('T')[0])}
//               className="btn-primary"
//             >
//               View Today's Shows
//             </button>
//             <button
//               onClick={handleRefresh}
//               className="btn-secondary"
//             >
//               Refresh Data
//             </button>
//           </div>
//         </div>
//       ) : (
//         <div className="space-y-6">
//           <div className="flex items-center justify-between">
//             <h2 className="text-lg font-semibold text-gray-900">
//               Available Movies ({movieShows.length})
//             </h2>
//             <button
//               onClick={handleRefresh}
//               className="text-sm text-primary-600 hover:text-primary-700"
//             >
//               🔄 Refresh
//             </button>
//           </div>
//           {movieShows.map((movieShow) => (
//             <MovieCard 
//               key={movieShow.movie._id} 
//               movieShow={movieShow} 
//               onShowSelect={handleShowSelect}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShowList;


import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Film, Plus } from 'lucide-react';
import { showAPI, cinemaAPI, movieAPI } from '../utils/api';
import { useBooking } from '../context/BookingContext';
import { useAuth } from '../context/AuthContext';
import { getNextSevenDays } from '../utils/helpers';
import LoadingSpinner from '../components/Layout/LoadingSpinner';
import MovieCard from '../components/Movie/MovieCard';
import toast from 'react-hot-toast';

const ShowList = () => {
  const { cinemaId } = useParams();
  const [cinema, setCinema] = useState(null);
  const [movieShows, setMovieShows] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [loading, setLoading] = useState(true);
  const [showAllMovies, setShowAllMovies] = useState(false);
  
  const { setSelectedCinema, setSelectedShow } = useBooking();
  const { isAdmin } = useAuth();

  useEffect(() => {
    fetchCinemaAndShows();
  }, [cinemaId, selectedDate]);

  const fetchCinemaAndShows = async () => {
    try {
      setLoading(true);
      
      // Fetch cinema details
      const cinemaResponse = await cinemaAPI.getById(cinemaId);
      const cinemaData = cinemaResponse.data.data.cinema;
      setCinema(cinemaData);
      setSelectedCinema(cinemaData);

      // Fetch shows for selected date
      const showsResponse = await showAPI.getByCinema(cinemaId, selectedDate);
      setMovieShows(showsResponse.data.data.movieShows);
      
      // Fetch all movies for admin
      if (isAdmin) {
        const moviesResponse = await movieAPI.getAll();
        setAllMovies(moviesResponse.data.data.movies);
      }
      
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Failed to load shows');
    } finally {
      setLoading(false);
    }
  };

  const handleShowSelect = (show) => {
    setSelectedShow(show);
  };

  const getMoviesWithoutShows = () => {
    const moviesWithShows = movieShows.map(ms => ms.movie._id);
    return allMovies.filter(movie => !moviesWithShows.includes(movie._id));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (!cinema) {
    return (
      <div className="text-center py-16">
        <Film className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Cinema Not Found
        </h2>
        <Link to="/cinemas" className="btn-primary">
          Back to Cinemas
        </Link>
      </div>
    );
  }

  const moviesWithoutShows = getMoviesWithoutShows();

  return (
    <div className="space-y-8">
      {/* Cinema Header */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {cinema.name}
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{cinema.location}</span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>{cinema.screens?.length || 0} screens</span>
              <span>•</span>
              <span>{(cinema.screens?.length || 0) * 100} total seats</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {isAdmin && (
              <button
                onClick={() => setShowAllMovies(!showAllMovies)}
                className="btn-secondary text-sm"
              >
                {showAllMovies ? 'Hide All Movies' : 'Show All Movies'}
              </button>
            )}
            <Link
              to="/cinemas"
              className="btn-secondary"
            >
              Change Cinema
            </Link>
          </div>
        </div>
      </div>

      {/* Date Selector */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Calendar className="w-5 h-5 mr-2" />
          Select Date
        </h2>
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {getNextSevenDays().map((date) => (
            <button
              key={date.value}
              onClick={() => setSelectedDate(date.value)}
              className={`flex-shrink-0 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                selectedDate === date.value
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="text-center">
                <div>{date.label}</div>
                {date.isToday && (
                  <div className="text-xs opacity-75">Today</div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Movies with Shows */}
      {movieShows.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Movies Playing Today ({movieShows.length})
          </h2>
          {movieShows.map((movieShow) => (
            <MovieCard 
              key={movieShow.movie._id} 
              movieShow={movieShow} 
              onShowSelect={handleShowSelect}
            />
          ))}
        </div>
      )}

      {/* Movies without Shows (Admin Only) */}
      {isAdmin && showAllMovies && moviesWithoutShows.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">
              Movies without Shows ({moviesWithoutShows.length})
            </h2>
            <div className="text-sm text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
              Admin View
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800 text-sm">
              <strong>Note:</strong> These movies don't have scheduled shows yet. 
              Create shows for these movies to make them visible to customers.
            </p>
          </div>
          {moviesWithoutShows.map((movie) => (
            <div key={movie._id} className="bg-white rounded-lg shadow-sm border p-6 opacity-75">
              <div className="flex items-start space-x-4">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-24 h-36 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/200x300?text=Movie+Poster';
                  }}
                />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {movie.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {movie.description}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span>{movie.duration} min</span>
                    {movie.rating && <span>Rating: {movie.rating}/10</span>}
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {movie.genre.map((g, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                      >
                        {g}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="btn-primary text-sm">
                      <Plus className="w-4 h-4 mr-1" />
                      Schedule Shows
                    </button>
                    <span className="text-red-500 text-sm">No shows scheduled</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Shows Message */}
      {movieShows.length === 0 && (
        <div className="text-center py-16 bg-white rounded-lg shadow-sm border">
          <Film className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            No Shows Available
          </h2>
          <p className="text-gray-500 mb-4">
            No shows scheduled for {new Date(selectedDate).toLocaleDateString()}
          </p>
          {isAdmin && (
            <div className="space-y-2">
              <button
                onClick={() => setSelectedDate(new Date().toISOString().split('T')[0])}
                className="btn-primary mr-2"
              >
                View Today's Shows
              </button>
              <button
                onClick={() => setShowAllMovies(true)}
                className="btn-secondary"
              >
                View All Movies
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ShowList;