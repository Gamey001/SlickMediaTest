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
      sx={{ height: "5.56rem", margin: "4.75rem 5.347222222222222222222222222222% 9.5rem" }}
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
          padding: "0.380859375em",
          width: "100%",
        }}
      />
    </Box>
  );
}

export default Search;
