import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import * as React from "react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const adduser = async (member) => {
    try {
      const response = await axios.post(
        "https://agrogetawy.onrender.com/user/",
        member
      );
      // const response =await axios.post("{{URL}}/user", member)
      console.log(response);
      if (response.status === 201) {
        alert("Account created sucessfully");
      } else {
        alert("Error in creating the account");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   username: data.get("Name"),
    //   email: data.get("email"),
    //   password: data.get("password")
    // });

    const member = {
      username: data.get("Name"),
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(member);
    adduser(member);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{ bottom: 0, position: "absolute", top: "64px" }}
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random?crops)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // color: "#dee5d9",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#00390f" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1, color: "#dee5d9" }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="FirstName"
                label="First Name"
                name="FirstName"
                autoComplete="family-name"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Link to="/users" style={{ textDecoration: "none" }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, background: "#216c2e" }}
                >
                  Sign Up
                </Button>
              </Link>
              <Grid
                item
                sx={12}
                sm={12}
                md={12}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                color={"#216c2e"}
              >
                <Link href="/signin" variant="body2" sx={12}>
                  Already Have account? Sign In
                </Link>
              </Grid>

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
