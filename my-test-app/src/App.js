import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Search from "./components/Search";
import MovieSets from "./components/MovieSets";
import { useState } from "react";
import { Box } from "@mui/material";

/** Inline style is used for mostly used due to size of the app
 *  check App.css for all other styles
*/
function App() {
  const [sfMovies, setSfMovies] = useState([]);
  const [faMovies, setFaMovies] = useState([]);
  const [movieSets, setMovieSets] = useState(["Science Fiction", "Fantasy"]);
  const [keywords, setKeywords] = useState(["inception", "the twilight saga"]);
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <Box className="app-container">
      <header className="App-header">
        <Navbar />
        <Hero />
        <Search
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        />
      </header>
      <MovieSets
        searchKeyword={searchKeyword}
        keywords={keywords}
        sfMovies={sfMovies}
        faMovies={faMovies}
        movieCats={movieSets}
      />
    </Box>
  );
}

export default App;
