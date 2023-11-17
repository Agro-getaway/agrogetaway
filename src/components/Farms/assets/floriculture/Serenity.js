import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Flower1 from "./Flower 1.jpeg";
const Serenity = () => {
  const images = [
    // Add your farm images here
    "Flower 1.jpeg",
    "Flower 1.jpeg",
    "Flower 1.jpeg",
  ];

  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 2000, // Adjust as needed
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
                src={Flower1}
                alt={`Farm ${index + 1}`}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div style={{ flex: "1", padding: "20px" }}>
        {/* Farm Details */}
        <h2>Farm Name</h2>
        <p>Location: Farm Location</p>
        <p>Description: Farm Description</p>
        <button onClick={() => alert("Book Now!")}>Book Now</button>
      </div>
    </div>
  );
};

export default Serenity;
