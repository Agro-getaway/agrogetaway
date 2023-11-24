// Types.js

import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import * as React from "react";
import { Link } from "react-router-dom";

export default function Types({ handleItemClick }) {
  const cardData = [
    {
      title: "Organic Farming",
      description:
        "Embracing organic methods like crop rotation, composting, and natural pest control, they're transforming communities",
      image: "Organic-Farming.jpg",
      alt: "green iguana",
    },
    {
      title: "Modern Vegetables",
      description:
        "Explore the vibrant world of modern vegetable farming pioneered by our country's visionary farmers.",
      image: "vegetable.jpg",
      alt: "second card",
    },
    {
      title: "Cocoa Growing",
      description:
        "Step into the world of modern agriculture and learn cocoa farming from Uganda's top cocoa farmers.",
      image: "cocoa.jpg",
      alt: "third card",
    },
    // Add more card data as needed
  ];

  return (
    <Grid container spacing={2} display={"flex"}>
      {cardData.map((data, index) => (
        <Grid
          key={index}
          item
          xs={4}
          style={{ marginRight: "auto", marginLeft: "auto" }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt={data.alt}
              height="140"
              image={data.image}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
              >
                {data.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "1.2rem" }}
              >
                {data.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/farms">
                <Button size="small">More Details..</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
