import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import avocado from "./assets/pomology/Avocado.jpeg";
import banana from "./assets/pomology/Bananas.jpeg";
import mangoes from "./assets/pomology/Mangoes.jpeg";
import papaya from "./assets/pomology/Papaya.jpeg";
import pineapples from "./assets/pomology/Pineapples.jpeg";
import soursop from "./assets/pomology/Soursop.jpeg";
import sugarcane from "./assets/pomology/Sugarcane.jpeg";
import watermelon from "./assets/pomology/Watermelon.jpeg";

const Pomology = () => {
  // Sample data of images with names, locations, and imported images
  const images = [
    {
      name: "Fruitful Haven Plantations",
      location: "Mbale, Uganda",
      image: banana,
    },
    {
      name: "Mango Magic Pomology",
      location: "Soroti, Uganda",
      image: mangoes,
    },
    {
      name: "Exotic Fruits Orchards Ltd.",
      location: "Kabarole District, Uganda",
      image: papaya,
    },
    {
      name: "Image 3",
      location: "Location C",
      image: pineapples,
    },
    {
      name: "Image 3",
      location: "Location C",
      image: soursop,
    },
    {
      name: "Image 3",
      location: "Location C",
      image: sugarcane,
    },
    {
      name: "Image 3",
      location: "Location C",
      image: watermelon,
    },
    {
      name: "Image 3",
      location: "Location C",
      image: avocado,
    },
    // Add more images as needed
  ];

  return (
    <div>
      <h2>Pomology Farms in Uganda</h2>
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

export default Pomology;
