import React from "react";
import { Box } from "@mui/material";

function Navbar({ mediaQs }) {
  const { isLargeScreenSize } = mediaQs;
  const { isMediumScreenSize } = mediaQs;

  return (
    <div className="navbar-wrapper">
      <Box
        style={{
          background: "#282c34",
          textAlign: `${
            isMediumScreenSize || isLargeScreenSize ? "left" : "center"
          }`,
        }}
      >
        <img
          style={{
            margin: "2.5em 5.347222222222222222222222222222%",
            background: "#282c34",
          }}
          src={require("../assets/images/Logo_mytest.png")}
          alt="Mytest app logo"
        />
      </Box>
    </div>
  );
}

export default Navbar;
