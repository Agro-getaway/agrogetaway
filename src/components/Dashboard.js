import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const slides = [
  {
    title: "Arable Farming",
    description: "Lorem ipsum",
    image: [
      "https://media.istockphoto.com/id/1405435576/photo/sunny-plantation-with-growing-soya.webp?b=1&s=170667a&w=0&k=20&c=qRzk74gZEsajCyUCLY2mtEjay7-ynAmv7ZViIylr1lc=",
      "https://images.unsplash.com/photo-1645707558064-c2bfd22a09e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFyYWJsZSUyMGZhcm1pbmd8ZW58MHx8MHx8fDA%3D",
    ],
  },
  {
    title: "Livestock Farming",
    description: "Lorem ipsum",
    image:
      "https://images.unsplash.com/photo-1686145546043-a847a2ff5741?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxpdmVzdG9jayUyMGZhcm1pbmd8ZW58MHx8MHx8fDA%3D",
  },
  // Add more slides as needed
];

const Dashboard = () => {
  // Add CSS classes to the slider components
  const sliderClasses = {
    slider: "slider",
    previousButton: "previousButton",
    nextButton: "nextButton",
    buttonDisabled: "disabled",
    track: "track",
    slide: "slide",
    hidden: "hidden",
    previous: "previous",
    current: "current",
    next: "next",
    animateIn: "animateIn",
    animateOut: "animateOut",
  };

  const imageStyle = {
    objectFit: "cover",
    width: "45%",
    height: "100%",
    margin: "15px 15px 5 15px", // top, right, bottom, left
  };

  const titleStyle = {
    fontSize: "24px",
    color: "#333",
    margin: "40px 0",
    textAlign: "center",
    // Add more styles as needed
  };

  return (
    <Slider classNames={sliderClasses}>
      {slides.map((slide, index) => (
        <div key={index} className="slide">
          {Array.isArray(slide.image) ? (
            // If the image is an array, render multiple images
            slide.image.map((imageUrl, imageIndex) => (
              <img
                key={imageIndex}
                src={imageUrl}
                alt={`Slide ${index + 1}`}
                style={imageStyle}
              />
            ))
          ) : (
            // If the image is a string, render a single image
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              style={imageStyle}
            />
          )}
          <h2 style={titleStyle}>{slide.title}</h2>
          <div>{slide.description}</div>
        </div>
      ))}
    </Slider>
  );
};

export default Dashboard;
