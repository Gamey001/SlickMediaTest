import React, { useCallback, useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import MovieCard from "./MovieCard";
import omdbData from "../helpers/apiKey";

function MovieSet({ title, keyword }) {
  const [movs, setMovs] = useState([]);

  const getMovies = useCallback((keyword) => {
    let results = [];
    fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=${omdbData.omdbKey}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) results = data.Search;
        setMovs(results);
      })
      .catch(() => ({
        error: { message: "Unable to connect to server. Please try again" },
      }));
  }, []);

  useEffect(() => {
    getMovies(keyword);
  }, [keyword, getMovies]);
  return (
    <>
      {Boolean(movs.length) && (
        <Box
          sx={{ overflowX: "scroll" }}
          marginBottom="9.56rem"
          marginLeft="4.19rem"
          className="App-main-body__mov-set"
        >
          <Box>
            <Box width="17.44rem" marginBottom="1.12rem">
              <Typography variant="h5">{title}</Typography>
            </Box>

            <Box sx={{ width: "97rem" }}>
              <Grid flexWrap="nowrap" container spacing="0.8125rem">
                {movs.map((movie) => (
                  <MovieCard key={movie.imdbID} movieName={movie.Title} />
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
