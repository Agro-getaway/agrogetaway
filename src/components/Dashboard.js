import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const slides = [
  {
    image: [
      "https://media.istockphoto.com/id/1405435576/photo/sunny-plantation-with-growing-soya.webp?b=1&s=170667a&w=0&k=20&c=qRzk74gZEsajCyUCLY2mtEjay7-ynAmv7ZViIylr1lc=",
      "https://images.unsplash.com/photo-1645707558064-c2bfd22a09e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFyYWJsZSUyMGZhcm1pbmd8ZW58MHx8MHx8fDA%3D",
    ],
    title: "Arable Farming",
    description: "Lorem ipsum",
  },
  {
    image: [
      "https://images.unsplash.com/photo-1686145546043-a847a2ff5741?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxpdmVzdG9jayUyMGZhcm1pbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1674122734030-d79c7fc0ddad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGl2ZXN0b2NrJTIwZmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D",
    ],
    title: "Livestock Farming",
    description: "Lorem ipsum",
  },
  {
    image: [
      "https://images.unsplash.com/photo-1566218246241-934ad8b38ea6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9yZ2FuaWMlMjBmYXJtaW5nfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1529313780224-1a12b68bed16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JnYW5pYyUyMGZhcm1pbmd8ZW58MHx8MHx8fDA%3D",
    ],
    title: "Organic Farming",
    description: "Lorem ipsum",
  },

  {
    image: [
      "https://images.unsplash.com/photo-1605540691259-0bf8d0262ff5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TW9ub2N1bHR1cmV8ZW58MHx8MHx8fDA%3D",
      "https://static.vecteezy.com/system/resources/previews/032/037/789/non_2x/green-natural-tomatoes-growing-on-a-branch-in-a-greenhouse-free-photo.JPG",
    ],
    title: "Monoculture",
    description: "Lorem ipsum",
  },
  {
    image: [
      "https://images.unsplash.com/photo-1598902468171-0f50e32a7bf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxvcmljdWx0dXJlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1621371045485-c6c744e176a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmxvcmljdWx0dXJlfGVufDB8fDB8fHww",
    ],
    title: "Floriculture",
    description: "Lorem ipsum",
  },
  {
    image: [
      "https://images.unsplash.com/photo-1644217147349-4a3381dfbee5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvdWx0cnklMjBmYXJtaW5nfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1677851418214-df5caadf82a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBvdWx0cnklMjBmYXJtaW5nfGVufDB8fDB8fHww",
    ],
    title: "Poultry",
    description: "Lorem ipsum",
  },
  // Add more slides as needed
];

const farmSectionStyle = {
  // Add styles for the farm section
  padding: "50px",
  backgroundColor: "#f9f9f9",
};

const eventsSectionStyle = {
  // Add styles for the events section
  padding: "50px",
  backgroundColor: "#e5e5e5",
};

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
  margin: "45px 20px 0 20px", // top, right, bottom, left
};

const titleStyle = {
  fontSize: "24px",
  color: "#333",

  textAlign: "left",
  // Add more styles as needed
};

const FarmSection = () => (
  <section style={farmSectionStyle}>
    <h1>Farming Methods </h1>
    <Slider classNames={sliderClasses}>
      {slides.map((slide, index) => (
        <div key={index} className="slide">
          {Array.isArray(slide.image) ? (
            slide.image.map((imageUrl, imageIndex) => (
              <img
                alt={`Slide ${index + 1}`}
                style={imageStyle}
                key={imageIndex}
                src={imageUrl}
              />
            ))
          ) : (
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
  </section>
);

const EventsSection = () => (
  <section style={eventsSectionStyle}>
    <h1>Events</h1>
    {/* Add your events content here */}
  </section>
);

const Dashboard = () => (
  <>
    <FarmSection />
    <EventsSection />
  </>
);

export default Dashboard;
