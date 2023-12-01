import { Grid, Paper } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Poultry = () => {
  const farmDetails = {
    location: "Biyinzika Poultry Farm",
    about:
      "Welcome to Poultry Paradise Farm! We specialize in raising healthy and happy poultry. Our mission is to provide the community with fresh and high-quality poultry products.",
    typeOfFarming: "Free-Range Poultry Farming",
    farmingDescription:
      "Free-range poultry farming allows our chickens to roam freely outdoors, ensuring they have access to natural sunlight and fresh air. We prioritize their well-being and follow sustainable practices in poultry farming.",
    farmerInfo: {
      name: "Mukasa John",
      experience: "30 years in Poultry Farming",
      background:
        "With a passion for poultry farming, John has decades of experience in raising chickens. He is committed to delivering top-notch poultry products to the local community.",
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
              onClick={() => (window.location.href = "/signup")}
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
