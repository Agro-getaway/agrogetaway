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
      name: "Blooming Gardens ",
      location: "Soroti, Uganda",
      image: one,
    },
    {
      name: "Serenity Blossoms",
      location: " Jinja District, Uganda",
      image: two,
    },
    {
      name: "Enchanted Floral Ventures",
      location: "Fort Portal, Uganda",
      image: three,
    },
    {
      name: "Harmony Floral Plantations",
      location: " Kabale District, Uganda",
      image: four,
    },
    {
      name: "Mystic Meadow Florals",
      location: " Luweero District, Uganda",
      image: five,
    },
    {
      name: "Whispering Willow Floral Gardens",
      location: " Kotido, Uganda",
      image: six,
    },
    {
      name: "Ethereal Blooms ",
      location: "Kalangala District, Uganda",
      image: seven,
    },
    {
      name: "Pastel Petals Plantations",
      location: " Kitgum District, Uganda",
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
