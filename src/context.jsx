import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const searchKeyword = "Avengers";
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchKeyword}`;

const AppContext = React.createContext();

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: false, msg: "" });

  const getMovie = async (API_URL) => {
    try {
      const response = await axios.get(API_URL);

      const data = response.data;

      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search || data);
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
    getMovie(API_URL);
  }, []);

  return (
    <AppContext.Provider value={{ isLoading, isError, movie }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
