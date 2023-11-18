import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import Slider from "react-animated-slider";
import { slides } from "./data";

export const farmSectionStyle = {
  // Add styles for the farm
  fontSize: "30px",
  font: "Calibri",
  padding: "50px",
  backgroundColor: "#dee5d9",
};

// const eventsSectionStyle = {
//   // Add styles for the events section
//   padding: "50px",
//   backgroundColor: "#e5e5e5",
// };

export const sliderClasses = {
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

export const imageStyle = {
  objectFit: "cover",
  width: "45%",
  height: "100%",
  margin: "45px 10px 0 10px", // top, right, bottom, left
  border: "2px solid",
  borderRadius: "15px",
};

export const titleStyle = {
  fontSize: "24px",
  margin: "0 15px",
  color: "white",
  textAlign: "center",
  position: "absolute", // Change this line
  top: "50%", // Add this line
  transform: "translateY(500%)",
  font: "italic",
};

export const Search = styled("div")(({ theme }) => ({
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

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
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

export const FarmSection = ({ onSearch, navigate }) => {
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
