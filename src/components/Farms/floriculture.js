import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import one from "./assets/floriculture/Flower 1.jpeg";
import two from "./assets/floriculture/Flower 2.jpeg";
import three from "./assets/floriculture/Flower 3.jpeg";
import four from "./assets/floriculture/Flower 4.jpeg";
import five from "./assets/floriculture/Flower 5.jpeg";
import six from "./assets/floriculture/Flower 6.jpeg";
import seven from "./assets/floriculture/Flower 7.jpeg";
import eight from "./assets/floriculture/Flower 8.jpeg";
const Floriculture = () => {
  // Sample data of images with names, locations, and URLs
  const images = [
    {
      name: "Image 1",
      location: "Location A",
      image: one,
    },
    {
      name: "Image 1",
      location: "Location A",
      image: two,
    },
    {
      name: "Image 1",
      location: "Location A",
      image: three,
    },
    {
      name: "Image 1",
      location: "Location A",
      image: four,
    },
    {
      name: "Image 1",
      location: "Location A",
      image: five,
    },
    {
      name: "Image 1",
      location: "Location A",
      image: six,
    },
    {
      name: "Image 1",
      location: "Location A",
      image: seven,
    },
    {
      name: "Image 1",
      location: "Location A",
      image: eight,
    },

    // Add more images as needed
  ];

  return (
    <div>
      <h2>Floriculture Farms in Uganda</h2>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component="img"
                alt={`${image.name} - ${image.location}`}
                height="250"
                image={image.image}
                style={{ objectFit: "cover", padding: "10px" }}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {image.name}
                </Typography>
                <Typography color="textSecondary">{image.location}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Floriculture;
