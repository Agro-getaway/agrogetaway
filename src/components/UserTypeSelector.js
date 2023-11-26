// Profile.js

import { Button, Grid, Paper } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Profile = () => {

  const farmDetails = {
    ... (your farmDetails object)
    
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const imgStyle = {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "10px",
  };

  return (
    <div className="farm-profile-container">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="section">
            <h1>{farmDetails.location}</h1>
            <p className="farm-description">{farmDetails.about}</p>

            <h2>Farm Pictures</h2>
            <Slider {...sliderSettings}>
              {farmDetails.farmPictures.map((picture, index) => (
                <Paper key={index} elevation={3}>
                  <img
                    src={picture}
                    alt={`Farm ${index + 1}`}
                    style={imgStyle}
                  />
                </Paper>
              ))}
            </Slider>

            <h2>About Our Farming</h2>
            <p>{farmDetails.typeOfFarming}</p>
            <p>{farmDetails.farmingDescription}</p>

            <h2>About the Farmer</h2>
            <img
              src={farmDetails.farmerInfo.photo}
              alt={farmDetails.farmerInfo.name}
              style={imgStyle}
            />
            <p>
              <strong>Name:</strong> {farmDetails.farmerInfo.name}
            </p>
            <p>
              <strong>Experience:</strong> {farmDetails.farmerInfo.experience}
            </p>
            <p>
              <strong>Background:</strong> {farmDetails.farmerInfo.background}
            </p>

            <Button
              variant="contained"
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                borderRadius: "4px",
                marginTop: "20px",
              }}
            >
              Book Now
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
