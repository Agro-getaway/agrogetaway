import { Grid, Paper } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Profile = () => {
  const farmDetails = {
    location: "Green Valley, Countryside",
    about:
      "Welcome to Green Acres Farm! We are a family-owned and operated farm dedicated to sustainable and organic farming practices.",
    typeOfFarming: "Organic Vegetable Farming",
    farmerInfo: {
      name: "John Doe",
      experience: "20 years",
      background:
        "Raised on a farm, John has a deep-rooted passion for agriculture. He has pursued various courses in sustainable farming and is committed to providing fresh, organic produce to the local community.",
    },
    farmPictures: [
      "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhcm1pbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1599138900450-3d06e89ad309?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      // Add more picture URLs as needed
    ],
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const pictureStyle = {
    width: "100%",
    borderRadius: "8px",
    overflow: "hidden",
  };

  const imgStyle = {
    width: "100%",
    height: "auto",
    position: "fixed",
    objectFit: "cover",
  };

  return (
    <div className="farm-profile-container">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className="section">
            <h2>Farm Pictures</h2>
            <Slider {...sliderSettings}>
              {farmDetails.farmPictures.map((picture, index) => (
                <Paper key={index} elevation={3} style={pictureStyle}>
                  <img
                    src={picture}
                    alt={`Farm ${index + 1}`}
                    style={imgStyle}
                  />
                </Paper>
              ))}
            </Slider>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="section">
            <h1>{farmDetails.location}</h1>
            <p className="farm-description">{farmDetails.about}</p>

            <h2>About Our Farming</h2>
            <p>{farmDetails.typeOfFarming}</p>

            <h2>About the Farmer</h2>
            <p>
              <strong>Name:</strong> {farmDetails.farmerInfo.name}
            </p>
            <p>
              <strong>Experience:</strong> {farmDetails.farmerInfo.experience}
            </p>
            <p>
              <strong>Background:</strong> {farmDetails.farmerInfo.background}
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
