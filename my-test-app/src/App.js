import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Search from "./components/Search";
import MovieSets from "./components/MovieSets";
import { useState, useCallback } from "react";
import { Box } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import omdbData from "./helpers/apiKey";

const movieSets = ["Science Fiction", "Fantasy"];
const keywords = ["inception", "the twilight saga"];

function App() {
  const [searchKeyword, setSearchKeyword] = useState("");

  const getMovies = useCallback(async (keyword) => {
    return await fetch(
      `https://www.omdbapi.com/?s=${keyword}&apikey=${omdbData.omdbKey}`
    )
      .then((res) => res.json())
      .then((data) => data)
      .catch(() => ({
        error: { message: "Unable to connect to server. Please try again" },
      }));
  }, []);

  //media queries
  const isMediumScreenSize = useMediaQuery({
    query: "(min-width: 576px)",
  });
  const isLargeScreenSize = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const mediaQs = { isMediumScreenSize, isLargeScreenSize };

  return (
    <Box className="app-container">
      <header className="App-header">
        <Navbar mediaQs={mediaQs} />
        <Hero mediaQs={mediaQs} />
        <Search
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        />
      </header>
      <MovieSets
        searchKeyword={searchKeyword}
        keywords={keywords}
        movieCategories={movieSets}
        getMovies={getMovies}
      />
    </Box>
  );
}

export default App;
