import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const images = [
  "https://source.unsplash.com/random?fields",
  "https://source.unsplash.com/random?farms",
  "https://source.unsplash.com/random?crops",
  // "https://unsplash.com/photos/green-plant-on-brown-soil-DUPFowqI6oI",
  // "https://unsplash.com/photos/a-green-tractor-is-driving-through-a-field-eS6rqvLx7o0",
  // "https://unsplash.com/photos/green-leafed-plants-during-daytime-2oYMwuFgnTg",
];

// ... (previous imports and code)

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [welcomeMessages] = useState([
    "WELCOME TO AGROGETAWAY",
    "EXPLORE THE WORLD OF FARMING",
    "JOIN US TO REDEFINE AGRICULTURE",
  ]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Function to move to the next image
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to move to the next welcome message
  const nextWelcomeMessage = useCallback(() => {
    setCurrentMessageIndex(
      (prevIndex) => (prevIndex + 1) % welcomeMessages.length
    );
  }, [welcomeMessages]);

  // Function to automatically transition to the next image and welcome message
  const autoTransition = useCallback(() => {
    nextImage();
    nextWelcomeMessage();
  }, [nextImage, nextWelcomeMessage]);

  // Use useEffect to set up the interval for automatic transitions
  useEffect(() => {
    const intervalId = setInterval(autoTransition, 10000); // 10 seconds (10,000 milliseconds)

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
        alignItems="center"
        justifyContent="center"
        style={{ height: "100%" }}
      >
        <Container>
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              padding: "10px",
              zIndex: 999,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* Logo on the left */}
              <img
                src="logo.jpg"
                alt="Logo"
                style={{
                  width: "100px",
                  height: "auto",
                  marginRight: "1100px",
                }}
              />

              {/* Sign In and Sign Up buttons on the right */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", backgroundColor: "#216c2e" }}
                >
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    style={{
                      display: "block",
                      color: "white",
                      border: "#216c2e",
                    }}
                  >
                    Sign Up
                  </Button>
                </Link>

                <Link
                  to="/signin"
                  style={{ textDecoration: "none", backgroundColor: "#216c2e" }}
                >
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    style={{
                      display: "block",
                      color: "white",
                      border: "#216c2e",
                    }}
                  >
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <Typography
            variant="h1"
            style={{
              color: "white",
              textAlign: "left",
              fontSize: "3vw", // Responsive font size
              position: "relative",
              fontFamily: "Times New Roman",
            }}
          >
            {welcomeMessages[currentMessageIndex]}
          </Typography>

          <Typography
            variant="body1"
            color="white"
            style={{
              textAlign: "justify",
              padding: "8px 0",
              fontSize: "2.0vw", // Responsive font size
              position: "relative",
              fontFamily: "italics",
            }}
          >
            Explore, learn, and experience the beauty of farming. Join farmers,
            schools, and organizations on a journey to redefine the future of
            agriculture.
          </Typography>

          <Typography
            style={{
              variant: "h3",
              textAlign: "left",
              fontSize: "2.5vw",
              color: "white",
              position: "relative",
              // Responsive font size
            }}
          >
            FARMING REDEFINED
          </Typography>

          <Link to="dashboard" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              size="large"
              style={{
                display: "block",
                margin: "0 auto",
                marginTop: "20px",
                backgroundColor: "#216c2e", // Set the background color to green
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
