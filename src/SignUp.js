import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { signUpAuth } from "./redux/signUpSlice";
import { useDispatch } from "react-redux";
import Link from "@mui/material/Link";
/////HAMZAZZZZZZZZZAAAAAAAA
const SignUp = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

  const signUpClient = () => {
    const user = { name, email, password };
    console.log(user, "user");
    dispatch(signUpAuth(user));
  };
  return (
    <>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            CloudTek
          </a>
        </div>
      </nav>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                variant="outlined"
                // required
                fullWidth
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  // setErrorMessage('');
                }}
                label="Enter Name"
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                // required
                fullWidth
                label="Enter Your Email"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  // setErrorMessage('');
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                // required
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  // setErrorMessage('');
                }}
                autoComplete="current-password"
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => {
              signUpClient();
            }}
          >
            Sign Up
          </Button>

          <Grid container>
            <Grid item>
              <Link href="/" variant="body2">
                {"Don't have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};
///////AAAAAAAAAAAAAAAAAAAAAAASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
export default SignUp;
