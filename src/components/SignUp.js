// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Avatar from "@mui/material/Avatar";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Checkbox from "@mui/material/Checkbox";
// import CssBaseline from "@mui/material/CssBaseline";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Grid from "@mui/material/Grid";
// import Link from "@mui/material/Link";
// import Paper from "@mui/material/Paper";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import TextField from "@mui/material/TextField";
// import Typography from "@mui/material/Typography";
// import axios from "axios";
// import * as React from "react";
// import { useNavigate } from "react-router-dom";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://agrogetaway.vercel.app/">
//         Agrogetaway
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const defaultTheme = createTheme();

// // export default function SignUp() {
//     export default function SignUp() {
//   const navigate = useNavigate();

//   const adduser = async (member) => {
//     try {
//       const response = await axios.post(
//         "https://backend-production-f4cc.up.railway.app/user/",
//         member
//       );
//       if (response.status === 201) {
//         alert("Account created successfully");
//         navigate("/types");
//       } else {
//         alert("Error in creating the account");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const member = {
//       username: data.get("Name"),
//       email: data.get("email"),
//       password: data.get("password"),
//     };
//     adduser(member);
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Grid container component="main" sx={{ height: "100vh" }}>
//         <CssBaseline />
//         {/* <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             backgroundImage:
//               "url(https://img.freepik.com/free-photo/medium-shot-kid-working-cornfield_23-2149142840.jpg?w=900&t=st=1700771726~exp=1700772326~hmac=ef63127e315136f220658a3bf857d3e94644c5f367f336bab1762ad4676f02cc)",
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             top: "0",
//             left: "0",
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//           }}
//         /> */}
//          <Grid
//           item
//           xs={12}
//           sm={8}
//           md={3.5}
//           component={Paper}
//           elevation={6}
//           square
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center", // Center the content vertically
//           }}
//         ></Grid>

//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//               my: 3,
//               mx: 4,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: "#00390f" }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               {/* Sign Up */}
//               Create an account
//             </Typography>
//             <Box
//               component="form"
//               noValidate
//               onSubmit={handleSubmit}
//               sx={{ mt: 1, color: "#dee5d9" }}
//             >
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="Name"
//                 label="Name"
//                 name="Name"
//                 autoComplete="family-name"
//               />

//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//               />

//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="new-password"
//               />

//               <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" />}
//                 label="Remember me"
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2, background: "#216c2e" }}
//               >
//                 {/* Sign Up */}
//                 Create account
//               </Button>
//               <Grid
//                 item
//                 xs={12}
//                 sm={12}
//                 md={12}
//                 alignItems={"center"}
//                 justifyContent={"center"}
//                 display={"flex"}
//                 color={"#216c2e"}
//               >
//                 <Link href="/signin" variant="body2" sx={12}>
//                   Already Have an account? Sign In here
//                 </Link>
//               </Grid>

//               <Copyright sx={{ mt: 5 }} />
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }

import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from '@mui/material/Link';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import {
  Container,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  CssBaseline,
} from '@mui/material';

const defaultTheme = createTheme();

const styles = {
  root: {
    
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    borderRadius: '30px',
    boxShadow: '0 0 23px 0 rgba(0, 0, 0, 0.2)',
    padding: '40px',
    width: '400px',
    textAlign: 'center',
    marginleft: '20px'
  },
  logo: {
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
};

export default function SignUp() {
  // const navigate = useNavigate();
  const navigate = useNavigate();

  const adduser = async (member) => {
    try {
      const response = await axios.post(
        "https://backend-production-f4cc.up.railway.app/user/",
        member
      );
      if (response.status === 201) {
        alert("Account created successfully");
        navigate("/types");
      } else {
        alert("Error in creating the account");
      }
    } catch (error) {
      console.error(error);
    }
  };


  const handleSignup = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    const signupCredentials = {
      username: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      // Add additional signup fields as needed
    };

    if (!signupCredentials.email || !signupCredentials.password) {
      alert('Please fill in all the required fields.');
      return;
    }

    const response = adduser(signupCredentials)
    console.log(response)
    // TODO: Implement signup logic with your backend server
    alert('Signup functionality not implemented yet.');
    // Example: navigate('/login');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div style={styles.root}>
        <div style={styles.container}>
          <Link to="/" style={styles.logo}>
          
          </Link>
          <CssBaseline />
          <Container maxWidth="xs">
            <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
              <b>Sign up</b>
            </Typography>
            <Box component="form" onSubmit={handleSignup} sx={{ mt: 3 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
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
                autoComplete="new-password"  // Change to "new-password" for password inputs
              />
              {/* Add additional signup fields as needed */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2 }}
              >
                Sign Up
              </Button>
              <Grid container sx={{ mt: 2 }}>
                <Grid item xs>
                  {/* You can add additional links or information here */}
                </Grid>
                <Grid item>
                  <Link href="/signin" style={{ textDecoration: 'none' }}>
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </div>
      </div>
    </ThemeProvider>
  );
}
