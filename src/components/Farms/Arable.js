import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const Arable = () => {
  // Sample data of images with names, locations, and URLs
  const images = [
    {
      name: "Image 1",
      location: "Location A",
      url: "https://images.unsplash.com/photo-1649099419977-2693f90934a8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      <h2>Arable Farms in Uganda</h2>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component="img"
                alt={`${image.name} - ${image.location}`}
                height="200"
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

export default Arable;
