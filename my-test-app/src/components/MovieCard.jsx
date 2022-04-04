import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";

function MovieCard({ movieName }) {
  return (
    <>
      <Grid item>
        <Card sx={{ background: "rgb(0,0,0)", borderRadius: ".8rem" }}>
          <CardContent
            sx={{ height: "18.75rem", width: "18.75rem", position: "relative" }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "rgb(255,255,255)",
                textAlign: "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            >
              {movieName}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default MovieCard;
