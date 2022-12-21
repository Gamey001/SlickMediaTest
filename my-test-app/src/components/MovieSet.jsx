import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import MovieCard from "./MovieCard";
import { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";

function MovieSet({ title, keyword, getMovies }) {
  const [movs, setMovs] = useState([]);
  const list = useMemo(() => {
    console.log('run')
    return getMovies(keyword);
  }, [keyword, getMovies]);

  useEffect(() => {
    list.then((data=>setMovs(data.Search)))
  }, [keyword]);
  return (
    <>
      {!movs || !movs.length ? (
        ""
      ) : (
        <Box
          sx={{
            marginBottom: "9.56rem",
            marginLeft: "4.652777777777777777777777777778%",
          }}
          className="main-body__mov-set"
        >
          <Box>
            <Box sx={{ marginBottom: "1.12rem" }}>
              <Typography variant="h5">{title}</Typography>
            </Box>
            <Box sx={{ maxWidth: "1552px", overflowX: "auto" }}>
              <Grid sx={{ flexWrap: "nowrap" }} container spacing="0.8125em">
                {movs.map(({ imdbID, Title }) => (
                  <MovieCard key={imdbID} movieName={Title} />
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default MovieSet;
