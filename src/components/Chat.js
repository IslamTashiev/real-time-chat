import { Avatar, Button, Grid, TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase";
import { useContext } from "react";
import { Context } from "..";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "./Loader";

export default function Chat() {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setvalue] = useState("");
  const [massages, loading] = useCollectionData(
    firestore.collection("massages").orderBy("createdAt")
  );
  const [tre, asx] = useCollectionData(
    firestore.collection("hello").orderBy("createdAt")
  );

  const sendMassage = async () => {
    firestore.collection("massages").add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setvalue("");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Grid
        justify="center"
        container
        style={{ height: window.innerHeight - 50, marginTop: 5 }}
      >
        <div
          style={{
            width: "80%",
            height: "70vh",
            border: "1px solid gray",
            overflowY: "auto",
          }}
        >
          {massages.map((massage) => (
            <div
              style={{
                margin: 15,
                border:
                  user.uid === massage.uid
                    ? "solid green 2px"
                    : "solid gray 2px",
                borderRadius: 10,
                padding: 10,
                display: "flex",
                alignItems: "center",
                backgroundColor:
                  user.uid === massage.uid
                    ? "rgba(104,234,113,0.3)"
                    : "rgba(165,177,175,0.3)",
              }}
            >
              <Grid container alignItems="center">
                <Avatar src={massage.photoURL} />
                <div>{massage.displayName}</div>
              </Grid>
              <div style={{ width: 400 }}>{massage.text}</div>
            </div>
          ))}
        </div>
        <Grid
          container
          direction="column"
          alignItems="flex-end"
          style={{ width: "80%" }}
        >
          <TextField
            value={value}
            onChange={(e) => setvalue(e.target.value)}
            fullWidth
            variant="outlined"
          />
          <Button onClick={sendMassage} variant="outlined">
            Отправить
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
