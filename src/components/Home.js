import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const images = [
  "https://source.unsplash.com/random?fields",
  "https://source.unsplash.com/random?farm",
  "https://source.unsplash.com/random?crops",
  // "https://unsplash.com/photos/green-plant-on-brown-soil-DUPFowqI6oI",
  // "https://unsplash.com/photos/a-green-tractor-is-driving-through-a-field-eS6rqvLx7o0",
  // "https://unsplash.com/photos/green-leafed-plants-during-daytime-2oYMwuFgnTg",
];

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to move to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to automatically transition to the next image
  const autoTransition = useCallback(() => {
    nextImage();
  }, []);

  // Use useEffect to set up the interval for automatic transitions
  useEffect(() => {
    const intervalId = setInterval(autoTransition, 15000); // 10 seconds (10,000 milliseconds)

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [autoTransition]);

  return (
    <Paper
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        // backgroundColor: "grey",
        position: "relative", // Ensure relative positioning for the overlay
      }}
    >
      {/* Add a semi-transparent overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Change the color and opacity as needed
        }}
      />
      <Grid
        container
        alignItems="left"
        justifyContent="center"
        style={{ height: "100%" }}
      >
        <Container>
          <Typography
            variant="h1"
            style={{
              color: "white",
              textAlign: "left",
              fontSize: "3vw", // Responsive font size
              position: "relative",
              fontFamily: "Italics",
            }}
          >
            WELCOME TO AGROGETAWAY
          </Typography>

          <Typography
            variant="body1"
            color="white"
            style={{
              textAlign: "justify",
              padding: "8px 0",
              fontSize: "2.0vw", // Responsive font size
              position: "relative",
            }}
          >
            We identify top-ranked Farms and Farmers and give You the
            opportunity to reach, learn, and experience the beauty of farming
          </Typography>

          <Typography
            style={{
              variant: "h3",
              textAlign: "left",
              fontSize: "2.5vw", // Responsive font size
            }}
          >
            FARMING REDEFINED
          </Typography>

          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{
                display: "block",
                margin: "0 auto",
                marginTop: "20px",
              }}
            >
              Get Started
            </Button>
          </Link>
        </Container>
      </Grid>
    </Paper>
  );
};

export default LandingPage;
