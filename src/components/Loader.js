import { Box, Button, Container, Grid } from "@material-ui/core";
import React from "react";
import "../App.css";

export default function Loader() {
  return (
    <Container>
      <Grid
        container
        style={{
          height: window.innerHeight - 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container alignItems="center" direction="column">
          <div class="lds-hourglass"></div>
        </Grid>
      </Grid>
    </Container>
  );
}
