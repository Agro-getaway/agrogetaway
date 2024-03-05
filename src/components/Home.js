import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2VlZGxpbmd8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1606041974734-0341c2d2d988?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
const aboutUsContent = {
  title: "About Us",
  description:
    "We are a team of passionate individuals committed to revolutionizing the agricultural industry.",
  goals: "Our Goals",
  mission: "Our Mission",
  objectives: "Our Objectives",
  purpose: "Purpose of the Project",
};

const services = [
  {
    name: "Crop Management",
    imageUrl: "url_to_crop_management_image",
  },
  {
    name: "Livestock Care",
    imageUrl: "url_to_livestock_care_image",
  },
  {
    name: "Soil Analysis",
    imageUrl: "url_to_soil_analysis_image",
  },
  {
    name: "Irrigation Solutions",
    imageUrl: "url_to_irrigation_solutions_image",
  },
  {
    name: "Market Analysis",
    imageUrl: "url_to_market_analysis_image",
  },
];

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [welcomeMessages] = useState([
    "WELCOME TO AGROGETAWAY",
    "EXPLORE THE WORLD OF FARMING",
    "JOIN US TO REDEFINE AGRICULTURE",
  ]);

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Function to move to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to move to the next welcome message
  const nextWelcomeMessage = () => {
    setCurrentMessageIndex(
      (prevIndex) => (prevIndex + 1) % welcomeMessages.length
    );
  };

  // Function to automatically transition to the next image and welcome message
  const autoTransition = () => {
    nextImage();
    nextWelcomeMessage();
  };

  // Use useEffect to set up the interval for automatic transitions
  useEffect(() => {
    const intervalId = setInterval(autoTransition, 10000); // 10 seconds

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div>
      <Paper
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        />

        <Grid alignItems="flex-start" style={{ height: "15%", width: "100%" }}>
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
                      marginRight: "70%",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
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
                          fontFamily: "helvetica",
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
                          fontFamily: "helvetica",
                        }}
                      >
                        <strong>Sign In</strong>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Typography
              variant="h1"
              style={{
                color: "white",
                textAlign: "left",
                fontSize: "4vw", // Responsive font size
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
                fontSize: "2.5vw", // Responsive font size
                position: "relative",
                fontFamily: "helvetica",
              }}
            >
              Explore, learn, and experience the beauty of farming. Join
              farmers, schools, and organizations on a journey to redefine the
              future of agriculture.
            </Typography>

            <Typography
              style={{
                variant: "h3",
                textAlign: "left",
                fontSize: "2vw", // Responsive font size
                color: "white",
                position: "relative",
                fontFamily: "brush script mt",
              }}
            >
              Farming Redefined
            </Typography>

            <Link to="farms" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                size="large"
                style={{
                  display: "block",
                  margin: "0 auto",
                  marginTop: "20px",
                  backgroundColor: "#216c2e",
                  fontFamily: "helvetica",
                }}
              >
                <strong>Explore</strong>
              </Button>
            </Link>
          </Container>
        </Grid>
      </Paper>

      <Grid container justifyContent="center" style={{ padding: "40px 0" }}>
        <Container>
          <Typography
            variant="h2"
            align="center"
            style={{
              color: "white",
              marginBottom: "20px",
              fontFamily: "helvetica",
            }}
          >
            {aboutUsContent.title}
          </Typography>
          <Typography
            variant="body1"
            align="center"
            style={{
              color: "white",
              fontFamily: "helvetica",
              marginBottom: "20px",
            }}
          >
            {aboutUsContent.description}
          </Typography>

          {/* Grid to organize goals, mission, objectives, and purpose */}
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper style={{ padding: "20px", backgroundColor: "#ffffffcc" }}>
                <Typography
                  variant="h4"
                  style={{ marginBottom: "10px", fontFamily: "helvetica" }}
                >
                  {aboutUsContent.goals}
                </Typography>
                <Typography variant="body1" style={{ fontFamily: "helvetica" }}>
                  - Goal 1<br />
                  - Goal 2<br />
                  - Goal 3<br />
                  {/* Add your goals here */}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper style={{ padding: "20px", backgroundColor: "#ffffffcc" }}>
                <Typography
                  variant="h4"
                  style={{ marginBottom: "10px", fontFamily: "helvetica" }}
                >
                  {aboutUsContent.mission}
                </Typography>
                <Typography variant="body1" style={{ fontFamily: "helvetica" }}>
                  {/* Add your mission statement here */}
                  Our mission is to...
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper style={{ padding: "20px", backgroundColor: "#ffffffcc" }}>
                <Typography
                  variant="h4"
                  style={{ marginBottom: "10px", fontFamily: "helvetica" }}
                >
                  {aboutUsContent.objectives}
                </Typography>
                <Typography variant="body1" style={{ fontFamily: "helvetica" }}>
                  - Objective 1<br />
                  - Objective 2<br />
                  - Objective 3<br />
                  {/* Add your objectives here */}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper style={{ padding: "20px", backgroundColor: "#ffffffcc" }}>
                <Typography
                  variant="h4"
                  style={{ marginBottom: "10px", fontFamily: "helvetica" }}
                >
                  {aboutUsContent.purpose}
                </Typography>
                <Typography variant="body1" style={{ fontFamily: "helvetica" }}>
                  {/* Add purpose of the project */}
                  The purpose of our project is to...
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      {/* Services Section */}
      <Grid container justifyContent="center" style={{ padding: "40px 0" }}>
        <Container>
          <Typography
            variant="h2"
            align="center"
            style={{
              color: "black",
              marginBottom: "20px",
              fontFamily: "helvetica",
            }}
          >
            Our Services
          </Typography>
          <Grid container spacing={3}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  style={{ padding: "20px", backgroundColor: "#ffffffcc" }}
                >
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    style={{ marginBottom: "10px", width: "100%" }}
                  />
                  <Typography
                    variant="h4"
                    style={{ marginBottom: "10px", fontFamily: "helvetica" }}
                  >
                    {service.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ fontFamily: "helvetica" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus sodales.
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>
    </div>
  );
};

export default LandingPage;
