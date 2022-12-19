import React from "react";
import { Box } from "@mui/material";
import { useMediaQuery } from "react-responsive";

function Navbar() {
  const isIphoneSEScreen = useMediaQuery({
    query: "(min-width: 576px)",
  });
  const isIphoneIpadScreen = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <div className="App-header__nav-wrapper">
      <Box
        style={{
          background: "#282c34",
          textAlign: `${
            isIphoneSEScreen || isIphoneIpadScreen ? "left" : "center"
          }`,
        }}
      >
        <img
          style={{
            margin: "2.5rem 5.347222222222222222222222222222%",
            background: "#282c34",
          }}
          src={require("../assets/images/Logo_mytest.png")}
        />
      </Box>
    </div>
  );
}

export default Navbar;
