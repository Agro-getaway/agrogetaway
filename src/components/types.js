import PersonIcon from "@mui/icons-material/Person";
import {
  AppBar,
  Avatar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const farmData = [
  {
    type: "Crop Farming",
    definition:
      "Crop farming involves growing plants for food, fiber, and other products.",
    conditions:
      "Requires fertile soil, adequate water, and appropriate climate conditions.",
    imageUrl:
      "https://images.unsplash.com/photo-1486328228599-85db4443971f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FiYmFnZXN8ZW58MHx8MHx8fDA%3D",
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
  {
    type: "Precision Farming",
    definition:
      "Precision farming involves using technology for optimized and controlled agricultural practices.",
    conditions:
      "Relies on sensors, GPS, IoT devices, and data analytics for precise management of resources.",
    bestFarms: [
      "GPS-guided Tractor Farming",
      "Sensor-based Irrigation Systems",
      "Drone-assisted Crop Monitoring",
    ],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj_ywoZga0XfVLjuwqU8krxhNNubpHm3yuQg&usqp=CAU",
  },
  {
    type: "Agroforestry",
    definition:
      "Agroforestry combines agriculture and forestry practices by integrating trees and shrubs into crop and animal farming systems.",
    conditions:
      "Requires careful selection of tree and crop species to achieve ecological and economic benefits.",
    bestFarms: [
      "Silvopasture Systems",
      "Alley Cropping",
      "Windbreak Agroforestry",
    ],
    imageUrl:
      "https://media.istockphoto.com/id/1361446534/photo/coconut-agroforestry-mix-faming.webp?b=1&s=170667a&w=0&k=20&c=c4aMZtH7BTmbOm7CJJZqQAwB619y4wsrnhrm2m8ARgI=",
  },
  {
    type: "Permaculture",
    definition:
      "Permaculture is a holistic approach to agriculture that aims to design sustainable and self-sufficient ecosystems based on natural patterns.",
    conditions:
      "Relies on principles like diversity, companion planting, and sustainable land use planning.",
    bestFarms: ["Food Forests", "Permaculture Homesteads", "Keyhole Gardens"],
    imageUrl:
      "https://thumbs.dreamstime.com/b/silverbeet-broccoli-farm-permaculture-growing-lots-beautiful-colours-heirloom-variety-seeds-59005989.jpg",
  },
  {
    type: "Floriculture",
    definition:
      "Floriculture is the cultivation of flowering and ornamental plants for decorative and aesthetic purposes.",
    conditions:
      "Requires specific climate conditions, controlled environments, and knowledge of various plant species.",
    bestFarms: ["Rose Gardens", "Tulip Farms", "Orchid Cultivation Centers"],
    imageUrl:
      "https://img.freepik.com/free-photo/flowers-production-cultivation-many-chrysanthemum-flowers-greenhouse-chrysanthemum-plantation_158595-6963.jpg?w=900&t=st=1701365575~exp=1701366175~hmac=ee348ef10c7bdc89c3959cc8980d2d1a9200b08d0f1e493a08d8bea53a6de86c",
  },
  {
    type: "Monoculture",
    definition:
      "Monoculture involves cultivating a single crop or plant species over a large area.",
    conditions:
      "Requires specialized farming practices, often involves the use of pesticides and fertilizers.",
    bestFarms: [
      "Large-Scale Corn Fields",
      "Soybean Monoculture Farms",
      "Wheat Monoculture Plantations",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "Fruit Farming",
    definition:
      "Fruit farming involves the cultivation of fruit-bearing plants for harvesting fruits.",
    conditions:
      "Varies by fruit type, generally requires suitable climate, soil, and care.",
    bestFarms: ["Apple Orchards", "Citrus Fruit Groves", "Mango Plantations"],
    imageUrl:
      "https://i.pinimg.com/736x/e9/4c/d0/e94cd0bee910879ce5274ef155e954b5.jpg",
  },
];

const Types = () => {
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#216c2e" }}>
        <Toolbar>
          {/* Logo */}
          <img
            src="official.png"
            alt="Farming Logo"
            style={{ width: "50px" }}
          />

          {/* Title */}
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            Agrogetaway
          </Typography>

          {/* Buttons */}

          <Button color="inherit" component={Link} to="/farms">
            <strong>Farms</strong>
          </Button>
          <Button color="inherit" component={Link} to="/aboutus">
            <strong>About Us</strong>
          </Button>
          <Avatar style={{ marginLeft: "10px" }}>
            <PersonIcon />
          </Avatar>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "left" }}>
            <Typography variant="h3" gutterBottom>
              <strong> Explore The Various Farming Methods</strong>
            </Typography>
            <Grid container spacing={2}>
              {farmData.map((farm, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    style={{
                      Width: "100%",
                      height: "100%",
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt={farm.type}
                      height="300"
                      image={farm.imageUrl}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        <strong>{farm.type}</strong>
                      </Typography>
                      <Typography variant="body1" paragraph>
                        {farm.definition}
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        {farm.conditions}
                      </Typography>
                      <div>
                        <Link to="/dashboard">
                          <Button
                            style={{
                              backgroundColor: "#216c2e",
                              color: "white",
                            }}
                          >
                            Visit
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Types;
