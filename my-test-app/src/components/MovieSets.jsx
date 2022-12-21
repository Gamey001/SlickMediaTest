import { Box } from "@mui/material";
import React from "react";
import MovieSet from "./MovieSet";

function MovieSets({ keywords, movieCategories, searchKeyword, getMovies }) {
  return (
    <>
      <Box>
        {Boolean(searchKeyword) && (
          <MovieSet
            keyword={searchKeyword}
            getMovies={getMovies}
            title="Search Results"
          />
        )}
        {keywords.length &&
          keywords.map((keyword, idx) => (
            <MovieSet
              key={keyword}
              keyword={keyword}
              title={movieCategories[idx]}
              getMovies={getMovies}
            />
          ))}
      </Box>
    </>
  );
}

export default MovieSets;
