import React from "react";
import { useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const slides = [
  {
    image: [
      "https://images.unsplash.com/photo-1645707558064-c2bfd22a09e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFyYWJsZSUyMGZhcm1pbmd8ZW58MHx8MHx8fDA%3D",
      "https://media.istockphoto.com/id/1405435576/photo/sunny-plantation-with-growing-soya.webp?b=1&s=170667a&w=0&k=20&c=qRzk74gZEsajCyUCLY2mtEjay7-ynAmv7ZViIylr1lc=",
    ],
    title: "Arable Farming",
    link: "/arable",

    // description:
    //   "Arable farming refers to the cultivation of crops on fertile land",
  },
  {
    image: [
      "https://images.unsplash.com/photo-1686145546043-a847a2ff5741?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxpdmVzdG9jayUyMGZhcm1pbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1674122734030-d79c7fc0ddad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGl2ZXN0b2NrJTIwZmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D",
    ],
    title: "Livestock Farming",
    link: "/livestock",
    // description: "Lorem ipsum",
  },
  {
    image: [
      "https://images.unsplash.com/photo-1566218246241-934ad8b38ea6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9yZ2FuaWMlMjBmYXJtaW5nfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1529313780224-1a12b68bed16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JnYW5pYyUyMGZhcm1pbmd8ZW58MHx8MHx8fDA%3D",
    ],
    title: "Organic Farming",
    link: "/organic",
    // description: "Lorem ipsum",
  },

  {
    image: [
      "https://images.unsplash.com/photo-1605540691259-0bf8d0262ff5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TW9ub2N1bHR1cmV8ZW58MHx8MHx8fDA%3D",
      "https://static.vecteezy.com/system/resources/previews/032/037/789/non_2x/green-natural-tomatoes-growing-on-a-branch-in-a-greenhouse-free-photo.JPG",
    ],
    title: "Monoculture",
    link: "/monoculture",
    // description: "Lorem ipsum",
  },
  {
    image: [
      "https://images.unsplash.com/photo-1598902468171-0f50e32a7bf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxvcmljdWx0dXJlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1621371045485-c6c744e176a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmxvcmljdWx0dXJlfGVufDB8fDB8fHww",
    ],
    title: "Floriculture",
    link: "/floriculture",
    // description: "Lorem ipsum",
  },
  {
    image: [
      "https://images.unsplash.com/photo-1644217147349-4a3381dfbee5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvdWx0cnklMjBmYXJtaW5nfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1677851418214-df5caadf82a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBvdWx0cnklMjBmYXJtaW5nfGVufDB8fDB8fHww",
    ],
    title: "Poultry",
    link: "/poultry",
    // description: "Lorem ipsum",
  },
  {
    image: [
      "https://images.unsplash.com/photo-1590334280495-2bf3f02ac46d?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1555773443-464ec72c8515?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    title: "Apiculture",
    link: "/apiculture",
    // description: "Lorem ipsum",
  },

  {
    image: [
      "https://images.unsplash.com/photo-1527546712175-827fa4321096?q=80&w=1848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1464297162577-f5295c892194?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    title: "Fruit Farming",
    link: "/pomology",
    // description: "Lorem ipsum",
  },
  {
    image: [
      "https://images.unsplash.com/photo-1623408997823-e80db672ce79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmlzaCUyMGZhcm1pbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1591121213542-7020cc7a0b52?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    title: "Aquaculture",
    link: "/aquaculture",
    // description: "Lorem ipsum",
  },

  // Add more slides as needed
];

const farmSectionStyle = {
  // Add styles for the farm
  fontSize: "30px",
  font: "Calibri",
  padding: "50px",
  backgroundColor: "#222e50",
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
  margin: "45px 10px 0 10px", // top, right, bottom, left
  border: "2px solid",
  borderRadius: "15px",
};

const titleStyle = {
  fontSize: "24px",
  margin: "0 15px",
  color: "white",
  textAlign: "center",
  position: "absolute", // Change this line
  top: "50%", // Add this line
  transform: "translateY(500%)",
  font: "italic",
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const FarmSection = ({ onSearch, navigate }) => {
  return (
    <section style={farmSectionStyle}>
      <h1 style={{ color: "white", padding: "15px" }}>Explore With Us </h1>
      <Search onSearch={onSearch}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <Slider classNames={sliderClasses} autoplay={3000} duration={1000}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            {Array.isArray(slide.image) ? (
              slide.image.map((imageUrl, imageIndex) => (
                <img
                  onClick={() => navigate(slide.link)}
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
            {/* <div>{slide.description}</div> */}
          </div>
        ))}
      </Slider>
    </section>
  );
};

const EventsSection = () => (
  <section style={eventsSectionStyle}>
    <h1>Events</h1>
    <strong>COMING SOON...</strong>
    {/* Add your events content here */}
  </section>
);

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <FarmSection navigate={navigate} />
      <EventsSection />
    </>
  );
}

export default Dashboard;
