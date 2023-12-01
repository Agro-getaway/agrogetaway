// src/Explore.js
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const farmsData = [
  {
    name: "Florence Floriculture Farm",
    location: "Kampala",
    method: "Floriculture",
    imageUrl:
      "https://img.freepik.com/free-photo/flowers-production-cultivation-many-chrysanthemum-flowers-greenhouse-chrysanthemum-plantation_158595-6963.jpg?w=900&t=st=1701365575~exp=1701366175~hmac=ee348ef10c7bdc89c3959cc8980d2d1a9200b08d0f1e493a08d8bea53a6de86c",
  },
  {
    name: "Balikowa Mixed Farm",
    location: "Masaka",
    method: "Mixed Farming",
    imageUrl:
      "https://images.unsplash.com/photo-1516906561371-53f48df1254d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Barcleys Wheat Farm",
    location: "Jinja",
    method: "Commercial Farming",
    imageUrl:
      "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Kanbinga Vegetable Farm",
    location: "Mbale",
    method: "Hydroponics",
    imageUrl:
      "https://img.freepik.com/free-photo/closeup-african-american-worker-cultivating-organic-lettuce-checking-pests-hydroponic-enviroment-greenhouse-selective-focus-woman-hands-inspecting-plants-doing-quality-control_482257-50585.jpg?w=996&t=st=1701364379~exp=1701364979~hmac=ade2317b3ab819f125245b92929eeaec73344de1ec672ec00e267cc27e5dbd56",
  },
  {
    name: "Uganda Corn Fields",
    location: "Iganga",
    method: "Monoculture",
    imageUrl:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  // Add more farm data as needed
  {
    name: "Alexus Dairy Farm",
    location: "Luweero",
    method: "Livestock Farming",
    imageUrl:
      "https://images.unsplash.com/photo-1597432480301-a3b64410d898?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Aqua Link Farm",
    location: "Entebbe",
    method: "Aquaculture",
    imageUrl:
      "https://ogden_images.s3.amazonaws.com/www.motherearthnews.com/images/2022/01/05185440/backyard-fish-farming.jpg",
  },
  {
    name: "Cocoa Haven Plantations",
    location: "Jinja",
    method: "Agroforestry",
    imageUrl:
      "https://images.unsplash.com/photo-1507576164121-220762647800?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Eden Fruit Farm",
    location: "Mbale",
    method: "Fruit Farming",
    imageUrl:
      "https://i.pinimg.com/736x/e9/4c/d0/e94cd0bee910879ce5274ef155e954b5.jpg",
  },
  // Add more explore data as needed
  {
    name: "Berry Bliss Farm",
    location: "Luzira",
    method: "Fruit Farming",
    imageUrl:
      "https://images.unsplash.com/photo-1602083158217-c608d17c44e5?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Biyinzika Rooster Ranch",
    location: "Kampala",
    method: "Poultry Farming",
    imageUrl:
      "https://www.shutterstock.com/image-photo/hen-lays-eggs-chicken-coop-600nw-2189634629.jpg",
  },
  {
    name: "Cabbage Crest Gardens",
    location: "Mukono",
    method: "Organic Farming",
    imageUrl:
      "https://images.unsplash.com/photo-1486328228599-85db4443971f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Use farmsData as the initial data source
  const [filteredFarms, setFilteredFarms] = useState(farmsData);

  // Handle search logic
  const handleSearch = () => {
    const filteredFarmData = farmsData.filter(
      (farm) =>
        farm.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        farm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        farm.method.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update the state with the filtered data
    setFilteredFarms(filteredFarmData);
  };

  return (
    <Container style={{ backgroundColor: "#F2E4CF", fontFamily: "helvetica" }}>
      <Typography variant="h2" align="center" gutterBottom>
        Learn, Explore, and Experience the Beauty Of Farming
      </Typography>

      {/* Add the search bar */}
      <Paper
        elevation={3}
        style={{ padding: "20px", textAlign: "left", marginBottom: "20px" }}
      >
        <InputBase
          placeholder="Search Farms..."
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          endAdornment={
            <IconButton onClick={handleSearch} aria-label="search">
              <SearchIcon />
            </IconButton>
          }
        />
      </Paper>

      {/* Experience Section */}
      <Grid container spacing={2}>
        {filteredFarms.map((farm) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={farm.name}>
            <img
              src={farm.imageUrl}
              alt={farm.name}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                marginTop: "10px",
              }}
            />
            <div style={{ marginBottom: "15px" }}>
              <Typography variant="subtitle1">&nbsp; {farm.name}</Typography>
              <Typography variant="subtitle1">
                &nbsp; {farm.location}
              </Typography>
              <Typography variant="subtitle1">&nbsp; {farm.method}</Typography>
              <div>
                <Link to="/profile">
                  <Button style={{ backgroundColor: "green", color: "white" }}>
                    More Details
                  </Button>
                </Link>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Explore;
