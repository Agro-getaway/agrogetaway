import { Grid, Paper } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Poultry = () => {
  const farmDetails = {
    location: "Florence Floriculture Farm",
    about:
      "Welcome to Florence Floriculture Farm! We specialize in cultivating a variety of beautiful flowers. Our mission is to spread joy through the beauty of nature.",
    typeOfFarming: "Flower Cultivation",
    farmingDescription:
      "At Florence Floriculture Farm, we engage in the cultivation of various flowers using sustainable and eco-friendly practices. Our goal is to provide fresh and vibrant flowers to our community.",
    farmerInfo: {
      name: "Isabella Rodriguez",
      experience: "20 years in Floriculture",
      background:
        "With two decades of experience in floriculture, Isabella has a deep passion for flowers and their cultivation. She is dedicated to creating stunning floral arrangements for our customers.",
      photo:
        "https://img.freepik.com/free-photo/medium-shot-man-carrying-pot_23-2149142853.jpg?w=900&t=st=1701421575~exp=1701422175~hmac=51d221d07660229613460d25bf5106de6c8d31150e9ab3933742fa474eba9808",
    },
    farmPictures: [
      "https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1300375/pexels-photo-1300375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/840111/pexels-photo-840111.jpeg?auto=compress&cs=tinysrgb&w=600",
      // Add more picture URLs as needed
    ],
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const pictureStyle = {
    width: "100%",
    height: "100%",
    position: "fixed",
  };

  const fixedImageHeight = "800px"; // You can adjust this value as needed

  const imgStyle = {
    width: "100%",
    height: fixedImageHeight,
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

export default Poultry;
