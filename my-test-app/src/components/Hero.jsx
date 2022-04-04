import React, { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";

function Hero() {
  const isIphoneSEScreen = useMediaQuery({
    query: "(max-width: 380px)",
  });
  const isIphoneIpadScreen = useMediaQuery({
    query: "(max-width: 834px)",
  });

  const bgImg = useMemo(()=>{
    if(isIphoneSEScreen) return "Hero2";
    if(isIphoneIpadScreen) return "Hero3";
    return "Hero";
})
  return (
    <Box sx={{ position: "relative" }}>
      <Typography
        className="App-header__hero-caption"
        sx={{
          position: "absolute",
          top: "4.12rem",
          left: "6rem",
          color: "rgb(255,255,255)",
          fontFamily: "DM Sans",
          fontWeight: "bold",
          fontSize: "4.8rem",
          lineHeight: "6.25rem",
        }}
        variant="h1"
      >
        <span style={{ whiteSpace: "nowrap" }}>
          Watch {!isIphoneSEScreen && <br />} something
        </span>
        <br />
        incredible.
      </Typography>
      <img
        style={{ height: "34.38rem", width: "100%" }}
        src={require(`../assets/images/${bgImg}.png`)}
        alt="hero"
      />
    </Box>
  );
}

export default Hero;
