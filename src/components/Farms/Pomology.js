import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import avocado from "./assets/fruits/Avocado.jpeg";
import banana from "./assets/fruits/Bananas.jpeg";
import mangoes from "./assets/fruits/Mangoes.jpeg";
import papaya from "./assets/fruits/Papaya.jpeg";
import pineapples from "./assets/fruits/Pineapples.jpeg";
import soursop from "./assets/fruits/Soursop.jpeg";
import sugarcane from "./assets/fruits/Sugarcane.jpeg";
import watermelon from "./assets/fruits/Watermelon.jpeg";

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
      name: "Tropical Fruit Symphony Farms",
      location: " Gulu District, Uganda",
      image: pineapples,
    },
    {
      name: " Blossom Estates",
      location: "Jinja District, Uganda",
      image: soursop,
    },
    {
      name: "Sunrise Sugars Fields",
      location: " Fort Portal, Uganda",
      image: sugarcane,
    },
    {
      name: "Juicy Melon Gardens",
      location: "Jinja District, Uganda",
      image: watermelon,
    },
    {
      name: "AvoHaven Agro Ventures",
      location: " Arua, Uganda",
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
