import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const Organic = () => {
  // Sample data of images with names, locations, and URLs
  const images = [
    {
      name: "Image 1",
      location: "Location A",
      url: "https://example.com/image1.jpg",
    },
    {
      name: "Image 2",
      location: "Location B",
      url: "https://example.com/image2.jpg",
    },
    {
      name: "Image 3",
      location: "Location C",
      url: "https://example.com/image3.jpg",
    },
    {
      name: "Image 3",
      location: "Location C",
      url: "https://example.com/image3.jpg",
    },
    {
      name: "Image 3",
      location: "Location C",
      url: "https://example.com/image3.jpg",
    },
    {
      name: "Image 3",
      location: "Location C",
      url: "https://example.com/image3.jpg",
    },
    {
      name: "Image 3",
      location: "Location C",
      url: "https://example.com/image3.jpg",
    },
    {
      name: "Image 3",
      location: "Location C",
      url: "https://example.com/image3.jpg",
    },
    // Add more images as needed
  ];

  return (
    <div>
      <h2>Organic Farms in Uganda</h2>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component="img"
                alt={`${image.name} - ${image.location}`}
                height="150"
                image={image.url}
                style={{ objectFit: "cover" }}
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

export default Organic;
