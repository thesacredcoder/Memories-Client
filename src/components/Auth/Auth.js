import React from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";

import useStyles from "./styles.js";

function Auth(props) {
  const classes = useStyles();
  const isSignUp = false;

  const handleSubmit = () => {};
  const handleChange = () => {};

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <TextField
                  name="firstName"
                  label="First Name"
                  onChange={handleChange}
                  autoFocus
                  xs={6}
                />
                <TextField
                  name="lastName"
                  label="Last Name"
                  onChange={handleChange}
                  autoFocus
                  xs={6}
                />
              </>
            )}
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default Auth;
