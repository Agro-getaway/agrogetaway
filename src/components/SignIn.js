// import React from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Link from '@mui/material/Link';
// // import logo from "D:\agroget_away_backend\agrogetaway\src\Assets\Logo.png";
// import { useNavigate } from 'react-router-dom';
// import {
//   Container,
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Grid,
//   CssBaseline,
// } from '@mui/material';

// import axios from 'axios';

// const defaultTheme = createTheme();

// const styles = {
//   root: {
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   container: {
//     backgroundColor: 'white',
//     borderRadius: '30px',
//     boxShadow: '0 0 23px 0 rgba(0, 0, 0, 0.2)',
//     padding: '40px',
//     width: '400px',
//     textAlign: 'center',
//     marginLeft: '20px',
//   },
//   logo: {
//     textDecoration: 'none',
//     display: 'flex',
//     justifyContent: 'center',
//     marginBottom: '20px',
//   },
// };

// function SignInForm({ onSubmit }) {

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.target);

//     const loginCredentials = {
//       email: data.get('email'),
//       password: data.get('password'),
//     };

//     if (!loginCredentials.email || !loginCredentials.password) {
//       alert('Please fill in all the required fields.');
//       return;
//     }

//     // Call the provided onSubmit function with the login credentials
//     await onSubmit(loginCredentials);
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
//       <TextField
//         margin="normal"
//         required
//         fullWidth
//         id="email"
//         label="Email Address"
//         name="email"
//         autoComplete="email"
//         autoFocus
//       />
//       <TextField
//         margin="normal"
//         required
//         fullWidth
//         name="password"
//         label="Password"
//         type="password"
//         id="password"
//         autoComplete="current-password"
//       />
//       <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
//         Sign In
//       </Button>
//     </Box>
//   );
// }

// function SignIn({ onSubmit }) {
//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <div style={styles.root}>
//         <div style={styles.container}>
//           <Link to="/" style={styles.logo}>
//             {/* Add your logo here */}
//             {/* <img
//               src={logo}
//               alt="Your Logo"
//               width="150"
//             /> */}
//           </Link>
//           <CssBaseline />
//           <Container maxWidth="xs">
//             <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
//               <b>Sign in</b>
//             </Typography>
//             <SignInForm onSubmit={onSubmit} />
//             <Grid container sx={{ mt: 2 }}>
//               <Grid item xs>
//                 <Link href="/forgotpw" style={{ textDecoration: 'none' }}>
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="/signup" style={{ textDecoration: 'none' }}>
//                   Create an account
//                 </Link>
//               </Grid>
//             </Grid>
//           </Container>
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// }

// export default function SignInPage() {
//   const signIn = async (credentials) => {
//     try {
//       // Your sign-in logic using axios.post

//     const navigate = useNavigate();

//     // const adduser = async (member) => {
//       const  async = (member) => {
//       try {
//         const response = await axios.post(
//           "https://backend-production-f4cc.up.railway.app/user/",
//           member
//         );
//         if (response.status === 201) {
//           alert("Account created successfully");
//           navigate("/types");
//         } else {
//           alert("Error in creating the account");
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//       // Placeholder alert for successful login
//       alert('Login successful! Redirect to the next page.');
//     } catch (error) {
//       console.error(error);
//       // Handle error, e.g., show error message to the user
//       alert('Error in sign-in');
//     }
//   };

//   return <SignIn onSubmit={signIn} />;
// }

import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  CssBaseline,
} from "@mui/material";
import axios from "axios";

const defaultTheme = createTheme();

const styles = {
  root: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "white",
    borderRadius: "30px",
    boxShadow: "0 0 23px 0 rgba(0, 0, 0, 0.2)",
    padding: "40px",
    width: "400px",
    textAlign: "center",
    marginLeft: "20px",
  },
  logo: {
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
};

function SignInForm({ onSubmit }) {
  const handleSubmit = async (event) => {
    console.log("working");
    event.preventDefault();
    const data = new FormData(event.target);

    const loginCredentials = {
      email: data.get("email"),
      password: data.get("password"),
    };

    if (!loginCredentials.email || !loginCredentials.password) {
      alert("Please fill in all the required fields.");
      return;
    }

    // Call the provided onSubmit function with the login credentials
    await onSubmit(loginCredentials);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
        Sign In
      </Button>
    </Box>
  );
}

function SignIn({ onSubmit }) {
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

  const signIn = async (credentials) => {
    console.log("here28 ");
    try {
      // Your sign-in logic using axios.post
      // ...

      // Placeholder alert for successful login
      alert("Login successful! Redirect to the next page.");
    } catch (error) {
      console.error(error);
      // Handle error, e.g., show error message to the user
      alert("Error in sign-in");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div style={styles.root}>
        <div style={styles.container}>
          <Link to="/" style={styles.logo}>
            {/* Add your logo here */}
          </Link>
          <CssBaseline />
          <Container maxWidth="xs">
            <Typography
              component="h1"
              variant="h5"
              sx={{ textAlign: "center" }}
            >
              <b>Sign in</b>
            </Typography>
            <SignInForm onSubmit={onSubmit || signIn} />
            <Grid container sx={{ mt: 2 }}>
              <Grid item xs>
                <Link href="/forgotpw" style={{ textDecoration: "none" }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" style={{ textDecoration: "none" }}>
                  Create an account
                </Link>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default function SignInPage() {
  // Use this component for navigation if needed
  return <SignIn />;
}
