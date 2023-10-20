import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import LoadingPage from "../components/LoadingPage";
const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;
const SingleMovie = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  const getMovie = async (API_URL) => {
    try {
      const response = await axios.get(API_URL);
      const data = response.data;

      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data);
      } else {
        null;
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovie(`${API_URL}&i=${id}`);
  }, [id]);
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="max-w-4xl rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform hover:shadow-2xl hover:cursor-pointer bg-gray-200 ">
        <div className="md:flex md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="text-3xl font-bold mb-2">{movie.Title}</div>
            <p className="text-base text-gray-700 mb-2">
              <span className="font-bold">Released:</span> {movie.Released}
            </p>
            <p className="text-base text-gray-700 mb-2">
              <span className="font-bold">Type:</span>{" "}
              {movie.Type.toUpperCase()}
            </p>
            <p className="text-base text-gray-700 mb-2">
              <span className="font-bold">Country:</span> {movie.Country}
            </p>
            <p className="text-base text-gray-700 mb-2">
              <span className="font-bold">Runtime:</span> {movie.Runtime}
            </p>
            <p className="text-base text-gray-700 mb-2">
              <span className="font-bold">Genre:</span> {movie.Genre}
            </p>
            <p className="text-base text-gray-700 mb-2">
              <span className="font-bold">Language:</span> {movie.Language}
            </p>
            <p className="text-base text-gray-700 mb-2">
              <span className="font-bold"> Director:</span> {movie.Director}
            </p>
            <p className="text-base text-gray-700 mb-2">
              <span className="font-bold"> Actors:</span> {movie.Actors}
            </p>
            <p className="text-base text-gray-700 mb-2">
              <span className="font-bold">Plot:</span> {movie.Plot}
            </p>
            <p className="text-base text-gray-700 mb-2">
              <span className="font-bold">Rated:</span> {movie.Rated}
            </p>
            <p className="text-base text-gray-700 mb-2">
              <span className="font-bold">Awards:</span> {movie.Awards}
            </p>
            <p className="text-base text-gray-700 mb-2">
              <span className="font-bold">IMDb Rating:</span> {movie.imdbRating}
            </p>
            <p className="text-base text-gray-700 mb-2">
              <span className="font-bold">IMDb Votes:</span> {movie.imdbVotes}
            </p>
            <p className="text-base text-gray-700 mb-2">
              <span className="font-bold">Box Office Collection:</span>{" "}
              {movie.BoxOffice}
            </p>
            <div className="mt-8 flex items-center justify-center">
              <Link
                to="/"
                className=" w-auto bg-green-500 text-white rounded-xl p-3 hover:bg-green-600 transition duration-300"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
