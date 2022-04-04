import React, { useCallback } from "react";
import { Box, Typography, InputBase } from "@mui/material";
function Search({ searchKeyword, setSearchKeyword }) {
  const onChangeHandler = useCallback(
    (e) => {
      setSearchKeyword(e.target.value);
    },
    [setSearchKeyword]
  );
  return (
    <Box
      className="App-header__search-wrapper"
      sx={{ height: "5.56rem", margin: "4.75rem 3.62rem 9.5rem 3.62rem" }}
    >
      <Typography marginBottom="0.24rem" variant="h5">
        Search
      </Typography>
      <InputBase
        onChange={(e) => onChangeHandler(e)}
        value={searchKeyword}
        variant="outlined"
        className="App-header__search"
        sx={{
          border: ".1rem solid rgb(0,0,0)",
          padding: ".55rem",
          width: "100%",
        }}
      />
    </Box>
  );
}

export default Search;
