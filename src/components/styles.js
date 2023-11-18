import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import Slider from "react-animated-slider";
import { slides } from "./data";
import {
  farmSectionStyle,
  imageStyle,
  sliderClasses,
  titleStyle,
} from "./styles"; // Import styles

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
          </div>
        ))}
      </Slider>
    </section>
  );
};

export const SchoolSection = () => {
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
