import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar } from "@mui/material";
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
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://agrogetaway1.vercel.app/">
        Agrogetaway1
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  // Function to handle sign-in
  const signIn = async (credentials) => {
    try {
      const response = await axios.post(
        "https://agrogetawy.onrender.com/user/api/auth/signin/",
        // "http://localhost:3011/user/api/auth/signin/",
        credentials
      );
      // console.log(response);
      if (response.status === 200) {
        // alert("Sign-in successful");
        navigate("/users");
        // You can handle further actions after successful sign-in
      } else {
        alert("Error in sign-in");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
    const credentials = {
      email: data.get("email"),
      password: data.get("password"),
    };
    // console.log("sent data", credentials)
    signIn(credentials);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://img.freepik.com/free-photo/medium-shot-kid-working-cornfield_23-2149142840.jpg?w=900&t=st=1700771726~exp=1700772326~hmac=ef63127e315136f220658a3bf857d3e94644c5f367f336bab1762ad4676f02cc)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            bottom: "0%",
            Top: "100%",
            left: "35%",
            transform: "translateX(-60%)",
            justifyContent: "center",

            color: "#ffffff",
            textAlign: "left",
            textShadow: "5px 5px 10px #000000",
          }}
        >
          Redefining Agriculture With Agrogetaway
          <p sx={{}}>Learn,explore And Experience the Beauty of Farming</p>
        </Typography>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#00390f" }}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
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
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#216c2e" }}
              >
                <Link
                  to="/users"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <strong>Sign In</strong>
                </Link>
              </Button>
              <Grid container>
                <Grid
                  item
                  sx={12}
                  sm={12}
                  md={12}
                  alignItems={"center"}
                  justifyContent={"center"}
                  display={"flex"}
                >
                  <Link href="#" variant="body2" sx={12}>
                    Forgot password?
                  </Link>
                </Grid>

                <Grid
                  item
                  sx={12}
                  sm={12}
                  md={12}
                  alignItems={"center"}
                  justifyContent={"center"}
                  display={"flex"}
                >
                  <Link href="/signup" variant="body2" sx={12}>
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
