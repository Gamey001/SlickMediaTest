import React, { useMemo } from "react";
import { Box, Typography } from "@mui/material";

function Hero({ mediaQs }) {
  const { isLargeScreenSize } = mediaQs;
  const { isMediumScreenSize } = mediaQs;

  const bgImg = useMemo(() => {
    if (isMediumScreenSize) return "Hero3";
    if (isLargeScreenSize) return "Hero";
    return "Hero2";
  }, [isMediumScreenSize, isLargeScreenSize]);
  
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
        textAlign: isMediumScreenSize || isLargeScreenSize ? "left" : "center",
      }}
    >
      <Typography
        className="landing-page-wraper__display-text"
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
