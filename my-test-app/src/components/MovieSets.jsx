import { Box } from "@mui/material";
import React from "react";
import MovieSet from "./MovieSet";

function MovieSets({ keywords, movieCats, searchKeyword }) {
  return (
    <>
      <Box>
        <MovieSet keyword={searchKeyword} title="Search Results" />
        {keywords.map((keyword, idx) => (
          <MovieSet keyword={keyword} title={movieCats[idx]} key={keyword} />
        ))}
      </Box>
    </>
  );
}

export default MovieSets;
