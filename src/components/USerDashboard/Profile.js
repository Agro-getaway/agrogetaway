import { Grid, Paper } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// ... (your imports and other code)

const Profile = () => {
  const farmDetails = {
    location: "Green Valley, Countryside",
    about:
      "Welcome to Green Acres Farm! We are a family-owned and operated farm dedicated to sustainable and organic farming practices. Our mission is to provide the community with fresh, healthy, and locally grown produce.",
    typeOfFarming: "Organic Vegetable Farming",
    farmingDescription:
      "Organic vegetable farming refers to a method of growing vegetables without the use of synthetic pesticides, herbicides, fertilizers, genetically modified organisms (GMOs), or other artificial additives. Instead, organic farmers rely on natural and sustainable agricultural practices to cultivate crops.",
    farmerInfo: {
      name: "Mukasa John",
      experience: "60 years",
      background:
        "Raised on a farm, John has a deep-rooted passion for agriculture. He has pursued various courses in sustainable farming and is committed to providing fresh, organic produce to the local community.",
      photo:
        "https://img.freepik.com/free-photo/one-farmer-harvesting-fresh-organic-vegetables-outdoors-generated-by-ai_188544-44273.jpg?size=626&ext=jpg",
    },
    farmPictures: [
      "https://images.unsplash.com/photo-1529313780224-1a12b68bed16?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1628444756989-ea3f47c0ebb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU5fHxmYXJtaW5nfGVufDB8fDB8fHww",
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
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000,
  };

  const pictureStyle = {
    width: "100%",
    height: "100%",
    position: "fixed",
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    padding: "20px",
  };

  return (
    <div className="farm-profile-container">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} style={pictureStyle}>
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
        <Grid item xs={12} md={6} style={{ marginLeft: "50%" }}>
          <div className="section">
            <h1>{farmDetails.location}</h1>
            <p className="farm-description">{farmDetails.about}</p>

            <h2>About Our Farming</h2>
            <p>{farmDetails.typeOfFarming}</p>
            <p>{farmDetails.farmingDescription}</p>

            <h2>About the Farmer</h2>
            <img
              src={farmDetails.farmerInfo.photo}
              alt={farmDetails.farmerInfo.name}
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
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

            <button
              onClick={() => (window.location.href = "/book")}
              style={{
                padding: "10px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                marginTop: "20px",
              }}
            >
              Book Now
            </button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
