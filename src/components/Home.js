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
        alignItems="flex-start"
        justifyContent="center"
        style={{ height: "15%" }}
      >
        <Container>
          <div
            style={{
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <img
                  src="official.png"
                  alt="Logo"
                  style={{
                    display: "flex",

                    width: "200px",
                    height: "auto",

                    // Adjusted margin for better spacing
                  }}
                />
              </div>

              {/* Logo on the left */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
              >
                {/* Sign In and Sign Up buttons on the left */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <Link
                    to="/signup"
                    style={{
                      textDecoration: "none",
                      backgroundColor: "#216c2e",
                    }}
                  >
                    <Button
                      variant="outlined"
                      color="primary"
                      size="large"
                      style={{
                        color: "white",
                        border: "#216c2e",
                      }}
                    >
                      <strong>Sign Up</strong>
                    </Button>
                  </Link>

                  <Link
                    to="/signin"
                    style={{
                      textDecoration: "none",
                      backgroundColor: "#216c2e",
                    }}
                  >
                    <Button
                      variant="outlined"
                      color="primary"
                      size="large"
                      style={{
                        color: "white",
                        border: "#216c2e",
                      }}
                    >
                      <strong>Sign In</strong>
                    </Button>
                  </Link>
                </div>

                {/* Logo on the right */}
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
              fontFamily: "helvetica",
              marginTop: "100px",
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
              fontFamily: "helvetica",
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
              // fontFamily: "blackadder itc",
              fontFamily: "brush script mt",
              // Responsive font size
            }}
          >
            Farming Redefined
          </Typography>

          <Link to="explore" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              size="large"
              style={{
                display: "block",
                margin: "0 auto",
                marginTop: "20px",
                backgroundColor: "#216c2e",
                fontFamily: "helvetica",
                // Set the background color to green
              }}
            >
              <strong>Explore</strong>
            </Button>
          </Link>
        </Container>
      </Grid>
    </Paper>
  );
};

export default LandingPage;
