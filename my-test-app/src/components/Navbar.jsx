import React from "react";
import { Box } from "@mui/material";

function Navbar() {
  return (
    <div className="App-header__nav-wrapper">
      <Box style={{ background: "#282c34" }}>
        <img
          style={{ margin: "2.38rem 4.88rem 2.5rem", background: "#282c34" }}
          src={require("../assets/images/Logo_mytest.png")}
        />
      </Box>
    </div>
  );
}

export default Navbar;
