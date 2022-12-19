import React, { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";

function Hero() {
  const isIphoneSEScreen = useMediaQuery({
    query: "(min-width: 576px)",
  });
  const isIphoneIpadScreen = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const bgImg = useMemo(() => {
    if (isIphoneSEScreen) return "Hero3";
    if (isIphoneIpadScreen) return "Hero";
    return "Hero2";
  });
  return (
    <Box
      className="landing-page-wrapper"
      sx={{
        background: `url(${require("../assets/images/" +
          bgImg +
          ".png")}) center no-repeat`,
        backgroundSize: "100% 100%",
        minHeight: "257px",
        padding: 1,
        textAlign: isIphoneSEScreen || isIphoneIpadScreen ? "left" : "center",
      }}
    >
      <Typography
        className="App-header__hero-caption" 
        sx={{
          margin: "6.8125rem 5.347222222222222222222222222222%",
          color: "rgb(255,255,255)",
          fontFamily: "DM Sans",
          fontWeight: "bold",
          fontSize: "4.5em",
          lineHeight: "6.25rem",
        }}
        variant="h1"
      >
        Watch <br /> something <br />
        incredible.
      </Typography>
    </Box>
  );
}

export default Hero;
