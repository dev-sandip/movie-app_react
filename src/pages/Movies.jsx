import { useGlobalContext } from "../context";

const Movies = () => {
  const { movie, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-700"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {movie.map((movie) => {
        return (
          <div
            key={movie.imdbID}
            className="max-w-sm rounded overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:cursor-pointer mb-4 hover:bg-gray-300"
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
        );
      })}
    </div>
  );
};

export default Movies;
