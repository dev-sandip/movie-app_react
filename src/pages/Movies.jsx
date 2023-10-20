import { useGlobalContext } from "../context";

const Movies = () => {
  const { movie } = useGlobalContext();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {movie.map((movie) => (
        <div
          key={movie.imdbID}
          className="max-w-sm rounded overflow-hidden shadow-lg"
        >
          <img src={movie.Poster} alt={movie.Title} className="w-full" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{movie.Title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
