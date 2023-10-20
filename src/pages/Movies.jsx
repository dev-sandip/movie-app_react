import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";
import LoadingPage from "../components/LoadingPage";

const Movies = () => {
  const { movie, isLoading } = useGlobalContext();

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {movie.map((movie) => {
        return (
          <NavLink to={`movie/${movie.imdbID}`} key={movie.imdbID}>
            <div
              key={movie.imdbID}
              className="max-w-sm rounded overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:cursor-pointer mb-4 hover:bg-gray-200"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{movie.Title}</div>
              </div>
              <div style={{ flex: 1, padding: "10px" }}>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Movies;
