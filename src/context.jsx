import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

const AppContext = React.createContext();

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: false, msg: "" });
  const [query, setQuery] = useState("Avengers");

  const getMovie = async (API_URL) => {
    try {
      const response = await axios.get(API_URL);

      const data = response.data;

      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search || data);
        setIsError({
          show: false,
          msg: null,
        });
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (query.length >= 3) {
      let timer = setTimeout(() => {
        getMovie(`${API_URL}&s=${query}`);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [query]);

  return (
    <AppContext.Provider value={{ isLoading, isError, movie, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export { AppContext, AppProvider, useGlobalContext };
