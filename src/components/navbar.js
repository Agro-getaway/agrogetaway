// Navbar.js
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "grey" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          //   color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          fontfamily="italics"
        ></IconButton>

        <div className="logo">
          <img
            src="logo.jpg"
            alt="Logo"
            style={{ maxHeight: "50px", maxWidth: "50px", marginRight: "15px" }}
          />
        </div>
        <Typography
          variant="h6"
          fontSize="2vw"
          fontfamily="italics"
          component="div"
          sx={{ flexGrow: 1 }}
          style={{ color: "white" }}
        >
          AgroGetaway
        </Typography>

        <Link to="/">
          <Button sx={{ color: "white", fontSize: "1vw" }}>Home</Button>
        </Link>
        <Link to="/signin">
          <Button sx={{ color: "white", fontSize: "1vw" }}>Sign In</Button>
        </Link>
        <Link to="/signup">
          <Button sx={{ color: "white", fontSize: "1vw" }}>Sign Up</Button>
        </Link>
        <Link to="/dashboard">
          <Button sx={{ color: "white", fontSize: "1vw" }}>Dashboard</Button>
        </Link>
        <Link to="/logout">
          <Button sx={{ color: "white", fontSize: "1vw" }}>Log Out</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
