// FarmTypes.js
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const FarmContainer = styled("div")({
  marginBottom: (theme) => theme.spacing(2),
});

const useStyles = styled((theme) => ({
  root: {
    padding: theme.spacing(3),
    maxWidth: 600,
    margin: "auto",
    marginTop: theme.spacing(4),
  },
  farmContainer: {
    marginBottom: theme.spacing(2),
    display: "flex",
    flexDirection: "row", // Change this from "column" to "row"
    height: 200, // Adjust this value to your preferred fixed height
  },
  farmImage: {
    width: "33.33%", // Adjust the width to fit three images on the same line
    height: "100%", // Adjust this value to your preferred fixed height
    objectFit: "cover",
    marginBottom: theme.spacing(1),
  },
}));
const FarmTypes = () => {
  const classes = useStyles();

  const farmData = [
    {
      type: "Crop Farming",
      definition:
        "Crop farming involves growing plants for food, fiber, and other products.",
      conditions:
        "Requires fertile soil, adequate water, and appropriate climate conditions.",

      imageUrl: [
        "https://images.unsplash.com/photo-1486328228599-85db4443971f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FiYmFnZXN8ZW58MHx8MHx8fDA%3D",
        "https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2749165/pexels-photo-2749165.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
    },
    {
      type: "Livestock Farming",
      definition:
        "Livestock farming involves raising animals for meat, milk, wool, and other products.",
      conditions:
        "Depends on the specific type of livestock. Generally requires proper shelter, food, and veterinary care.",

      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Cattle_Feedlot_near_Rocky_Ford%2C_CO_IMG_5651-2.jpg/1200px-Cattle_Feedlot_near_Rocky_Ford%2C_CO_IMG_5651-2.jpg",
    },
    {
      type: "Aquaculture",
      definition:
        "Aquaculture involves cultivating aquatic organisms like fish and shellfish.",
      conditions:
        "Depends on the specific type of aquatic organisms. Generally requires suitable water quality, temperature, and feeding.",
      bestFarms: ["Salmon Farms", "Shrimp Farms", "Tilapia Farms"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ4QShwbeN87Zzpi2wIJ32BcN29d-8E9rnGg&usqp=CAU",
    },
    {
      type: "Poultry Farming",
      definition: "Poultry farming involves raising birds for meat and eggs.",
      conditions:
        "Requires proper housing, nutrition, and disease prevention measures for poultry birds.",
      bestFarms: ["Chicken Farms", "Duck Farms", "Turkey Farms"],
      imageUrl:
        "https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      type: "Organic Farming",
      definition:
        "Organic farming avoids synthetic pesticides and fertilizers, focusing on sustainable practices.",
      conditions:
        "Relies on natural methods for pest control and soil fertility. Requires organic certification.",
      bestFarms: [
        "Organic Vegetable Farms",
        "Organic Fruit Orchards",
        "Organic Dairy Farms",
      ],
      imageUrl:
        "https://c0.wallpaperflare.com/preview/788/726/501/onion-farm-food-vegetable.jpg",
    },
    {
      type: "Hydroponics",
      definition:
        "Hydroponics is a soilless method of growing plants using nutrient-rich water.",
      conditions:
        "Relies on a controlled environment, pH-balanced nutrient solutions, and proper lighting.",
      bestFarms: [
        "Hydroponic Lettuce Farms",
        "Hydroponic Tomato Farms",
        "Hydroponic Herb Gardens",
      ],
      imageUrl:
        "https://agribusinessedu.com/wp-content/uploads/2021/06/aeroponics-and-hydroponics-a-basic-introduction-2021-06-25-454658.jpg.webp",
    },
    // Add more farm types as needed
  ];

  return (
    <Paper elevation={3} className={classes.root}>
      <Typography variant="h4" align="center" gutterBottom>
        Farm Types and Conditions for Growth
      </Typography>
      <Grid container spacing={3}>
        {farmData.map((farm, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FarmContainer>
              <Card>
                <CardMedia
                  component="img"
                  className={classes.farmImage}
                  image={
                    Array.isArray(farm.imageUrl)
                      ? farm.imageUrl[0]
                      : farm.imageUrl
                  }
                  alt={farm.type}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {farm.type}
                  </Typography>
                  <Typography>
                    <strong>Definition:</strong> {farm.definition}
                  </Typography>
                  <Typography>
                    <strong>Conditions for Growth:</strong> {farm.conditions}
                  </Typography>
                </CardContent>
              </Card>
            </FarmContainer>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default FarmTypes;
