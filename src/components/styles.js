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
  border: "1px solid",
  borderRadius: "10px",
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

export const FarmSection = ({ navigate }) => {
  return (
    <section style={farmSectionStyle}>
      <h1 style={{ color: "white", padding: "15px" }}>Explore With Us </h1>
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

const SchoolSection = () => {
    return (
      <Container sx={{ mt: 8, mb: 12 }}>
        <Paper elevation={3} sx={{ padding: 4, textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>
            Empower Your School with AgroGetaway App
          </Typography>
          <Typography variant="body1" paragraph>
            Discover the benefits of using the AgroGetaway app for your school.
            Engage students in agriculture, promote sustainable practices, and
            enhance the learning experience.
          </Typography>
          <Typography variant="body1" paragraph>
            Our app provides educational resources, virtual farm tours,
            interactive lessons, and much more. Join AgroGetaway and bring the
            world of farming to your classroom.
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Download App
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    );
  };
  );
};
