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
    name: "Balikowa Mixed Farm",
    location: "Masaka",
    imageUrl:
      "https://images.unsplash.com/photo-1516906561371-53f48df1254d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Barcleys Wheat Farm",
    location: "Jinja",
    imageUrl:
      "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Uganda Corn Fields",
    location: "Iganga",
    imageUrl:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  // Add more farm data as needed
  {
    name: "Alexus Dairy Farm",
    location: "Luweero",
    imageUrl:
      "https://images.unsplash.com/photo-1597432480301-a3b64410d898?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cocoa Haven Plantations",
    location: "Jinja",
    imageUrl:
      "https://images.unsplash.com/photo-1507576164121-220762647800?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Eden Fruit Farm",
    location: "Mbale",
    imageUrl:
      "https://i.pinimg.com/736x/e9/4c/d0/e94cd0bee910879ce5274ef155e954b5.jpg",
  },
  // Add more explore data as needed
  {
    name: "Berry Bliss Farm",
    location: "Luzira",
    imageUrl:
      "https://images.unsplash.com/photo-1602083158217-c608d17c44e5?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Kwagalakwe Rooster Ranch",
    location: "Kampala",
    imageUrl:
      "https://www.shutterstock.com/image-photo/hen-lays-eggs-chicken-coop-600nw-2189634629.jpg",
  },
  {
    name: "Cabbage Crest Gardens",
    location: "Mukono",
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
        farm.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update the state with the filtered data
    setFilteredFarms(filteredFarmData);
  };

  return (
    <Container>
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
          <Grid item xs={12} sm={6} md={4} key={farm.name}>
            <div style={{ marginBottom: "15px" }}>
              <Typography variant="subtitle1">&nbsp; {farm.name}</Typography>
              <Typography variant="subtitle1">
                &nbsp; {farm.location}
              </Typography>
              <div>
                <Link to="/signup">
                  <Button>More Details</Button>
                </Link>
              </div>
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
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Explore;
