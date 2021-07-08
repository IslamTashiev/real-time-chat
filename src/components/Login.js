import { Box, Button, Container, Grid } from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { Context } from "..";
import firebase from "firebase";
export default function Login() {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
  };

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
        <Grid
          style={{ width: 400, backgroundColor: "lightgray" }}
          container
          alignItems="center"
          direction="column"
        >
          <Box p={5}>
            <Button onClick={login} variant="outlined">
              Войти с помощью Google{" "}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
