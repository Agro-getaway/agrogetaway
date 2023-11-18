import { Button, Link } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Flower1 from "./Flower 1.jpeg";
import Flower2 from "./Flower 2.jpeg";
import Flower6 from "./Flower 6.jpeg";

const Serenity = () => {
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
                style={{ width: "100%", height: "50%" }}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div style={{ flex: "1", padding: "10px" }}>
        {/* Farm Details */}
        <h2>Serenity Blossoms</h2>
        <p>Location: Jinja District,Uganda</p>
        <p>
          Description:Located in the lush countryside of Uganda, Blossom Haven
          owes its success to the rich soil and favorable climate that the
          region provides. Dr. Nalubega, with a passion for sustainable
          agriculture and a dream to create a haven of beauty, began with a
          modest plot of land and a handful of carefully chosen flower
          varieties. Over the years, the farm has flourished into a breathtaking
          landscape of diverse blooms.
        </p>
        <p>
          Blossom Haven specializes in cultivating a wide array of flowers,
          including indigenous varieties and exotic imports, creating a unique
          blend that captivates the senses. The farm has implemented
          eco-friendly and organic farming practices, ensuring the health of
          both the environment and the flowers that grace its fields.
        </p>
        <p>
          The farm's commitment to community engagement is evident in its
          employment of local residents, providing them with valuable skills in
          horticulture and contributing to the economic development of the
          region. Visitors are welcomed to explore the fields, participate in
          guided tours, and even try their hand at floral arrangement workshops.
        </p>
        <p>
          As Blossom Haven enters its third decade, it stands as a testament to
          the vision and dedication of Dr. Olivia Nalubega. The farm not only
          produces a bounty of exquisite flowers but also serves as a haven for
          those seeking a respite from the hustle and bustle of daily life,
          inviting all who enter to experience the beauty of nature in full
          bloom.
        </p>
      </div>
      <Link to="/booking">
        <Button>Book Now</Button>
      </Link>
    </div>
  );
};

export default Serenity;
