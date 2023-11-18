import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import one from "./assets/flowers/Flower1.jpeg";
import two from "./assets/flowers/Flower2.jpeg";
import three from "./assets/flowers/Flower3.jpeg";
import four from "./assets/flowers/Flower4.jpeg";
import five from "./assets/flowers/Flower5.jpeg";
import six from "./assets/flowers/Flower6.jpeg";
import seven from "./assets/flowers/Flower7.jpeg";
import eight from "./assets/flowers/Flower8.jpeg";

const Floriculture = () => {
  const images = [
    {
      name: "Blooming Gardens",
      location: "Soroti, Uganda",
      image: one,
      link: "/blooming",
    },
    {
      name: "Serenity Blossoms",
      location: "Jinja District, Uganda",
      image: two,
      link: "/serenity",
    },
    {
      name: "Enchanted Floral Ventures",
      location: "Fort Portal, Uganda",
      image: three,
      link: "/enchanted",
    },
    {
      name: "Harmony Floral Plantations",
      location: "Kabale District, Uganda",
      image: four,
      link: "/harmony",
    },
    {
      name: "Mystic Meadow Florals",
      location: "Luweero District, Uganda",
      image: five,
      link: "/mystic",
    },
    {
      name: "Whispering Willow Floral Gardens",
      location: "Kotido, Uganda",
      image: six,
      link: "/whispering",
    },
    {
      name: "Ethereal Blooms",
      location: "Kalangala District, Uganda",
      image: seven,
      link: "/ethereal",
    },
    {
      name: "Pastel Petals Plantations",
      location: "Kitgum District, Uganda",
      image: eight,
      link: "/pastel",
    },
  ];

  return (
    <div>
      <h2>Floriculture Farms in Uganda</h2>
      <Grid containerspacing={2}>
        {images.map((image, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component="img"
                alt={`${image.name} - ${image.location}`}
                height="250"
                image={image.image}
                style={{
                  objectFit: "cover",
                  padding: "10px",
                  cursor: "pointer",
                }}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {image.name}
                </Typography>
                <Typography color="textSecondary">{image.location}</Typography>
                <Link to={image.link}>
                  <Button>Book</Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Floriculture;
