import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";
import Movies from "./pages/Movies.jsx";
import Search from "./pages/Search.jsx";
import SingleMovie from "./pages/SingleMovie.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
