import { Button } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Flower1 from "./Flower 1.jpeg";
import Flower2 from "./Flower 2.jpeg";
import Flower6 from "./Flower 6.jpeg";

const Ethereal = () => {
  const images = [Flower1, Flower2, Flower6];

  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 4000, // Adjust as needed
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1", maxWidth: "60%" }}>
        {/* Image Slider */}
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Farm ${index + 1}`}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div style={{ flex: "1", padding: "20px" }}>
        {/* Farm Details */}
        <h2>Serenity Blossoms</h2>
        <p>Location: Jinja District,Uganda</p>
        <p>Description:</p>
        <Button onClick={() => alert("Book Now!")}>Book Now</Button>
      </div>
    </div>
  );
};

export default Ethereal;
