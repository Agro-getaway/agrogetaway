// src/Explore.js
import StarIcon from "@mui/icons-material/Star";
import {
  Button,
  Container,
  Grid,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import React from "react";

const farmsData = [
  {
    name: "Balikowa Mixed Farm",
    rank: 5,
    location: "Masaka",
    imageUrl:
      "https://images.unsplash.com/photo-1516906561371-53f48df1254d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Barcleys Wheat Farm",
    rank: 4,
    location: "Jinja",
    imageUrl:
      "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Uganda Corn Fields",
    rank: 3,
    location: "Iganga",
    imageUrl:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  // Add more farm data as needed
];

const exploreData = [
  {
    name: "Alexus Dairy Farm",
    rank: 3,
    location: "Luweero",
    imageUrl:
      "https://images.unsplash.com/photo-1597432480301-a3b64410d898?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cocoa Haven Plantations",
    rank: 5,
    location: "Jinja",
    imageUrl:
      "https://images.unsplash.com/photo-1507576164121-220762647800?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Eden Fruit Farm",
    rank: 4,
    location: "Mbale",
    imageUrl:
      "https://i.pinimg.com/736x/e9/4c/d0/e94cd0bee910879ce5274ef155e954b5.jpg",
  },
  // Add more explore data as needed
];

const experienceData = [
  {
    name: "Berry Bliss Farm",
    rank: 5,
    location: "Luzira",
    imageUrl:
      "https://images.unsplash.com/photo-1602083158217-c608d17c44e5?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Kwagalakwe Rooster Ranch",
    rank: 6,
    location: "Kampala",
    imageUrl:
      "https://www.shutterstock.com/image-photo/hen-lays-eggs-chicken-coop-600nw-2189634629.jpg",
  },
  {
    name: "Cabbage Crest Gardens",
    rank: 4,
    location: "Mukono",
    imageUrl:
      "https://images.unsplash.com/photo-1486328228599-85db4443971f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Explore = () => {
  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Learn, Explore, and Experience the Beauty Of Farming
      </Typography>

      <Grid container spacing={3}>
        {/* Learn Section */}
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "left" }}>
            <Typography variant="h5" gutterBottom>
              Explore top-ranked farms for engaging and captivating learning
              experiences.
            </Typography>
            <Grid container spacing={2}>
              {farmsData.map((farm) => (
                <Grid item xs={12} sm={6} md={4} key={farm.rank}>
                  <div style={{ marginBottom: "15px" }}>
                    <Typography variant="subtitle1">
                      <StarIcon
                        fontSize="small"
                        style={{ verticalAlign: "middle" }}
                      />
                      &nbsp; {farm.name}
                    </Typography>
                    <Typography variant="subtitle1">
                      &nbsp; {farm.location}
                    </Typography>
                    <Typography variant="caption">
                      <Rating
                        name={`farm-${farm.rank}`}
                        value={farm.rank}
                        readOnly
                      />
                    </Typography>
                    <div>
                      {/* Other content */}
                      <Link to="/signup">
                        <Button
                          style={{ backgroundColor: "#216c2e", color: "white" }}
                        >
                          Visit
                        </Button>
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
          </Paper>
        </Grid>

        {/* Explore Section */}
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "left" }}>
            <Typography variant="h5" gutterBottom>
              Explore top-ranked farms for an enriching exploration experience.
            </Typography>
            <Grid container spacing={2}>
              {exploreData.map((farm) => (
                <Grid item xs={12} sm={6} md={4} key={farm.rank}>
                  <div style={{ marginBottom: "15px" }}>
                    <Typography variant="subtitle1">
                      <StarIcon
                        fontSize="small"
                        style={{ verticalAlign: "middle" }}
                      />
                      &nbsp; {farm.name}
                    </Typography>
                    <Typography variant="subtitle1">
                      &nbsp; {farm.location}
                    </Typography>
                    <Typography variant="caption">
                      <Rating
                        name={`farm-${farm.rank}`}
                        value={farm.rank}
                        readOnly
                      />
                    </Typography>
                    <div>
                      <Link to="/signup">
                        <Button
                          style={{ backgroundColor: "#216c2e", color: "white" }}
                        >
                          Visit
                        </Button>
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
          </Paper>
        </Grid>

        {/* Experience Section */}
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "left" }}>
            <Typography variant="h5" gutterBottom>
              Discover top-ranked farms for experiencing the beauty of
              agriculture.
            </Typography>
            <Grid container spacing={2}>
              {experienceData.map((farm) => (
                <Grid item xs={12} sm={6} md={4} key={farm.rank}>
                  <div style={{ marginBottom: "15px" }}>
                    <Typography variant="subtitle1">
                      <StarIcon
                        fontSize="small"
                        style={{ verticalAlign: "middle" }}
                      />
                      &nbsp; {farm.name}
                    </Typography>
                    <Typography variant="subtitle1">
                      &nbsp; {farm.location}
                    </Typography>
                    <Typography variant="caption">
                      <Rating
                        name={`farm-${farm.rank}`}
                        value={farm.rank}
                        readOnly
                      />
                    </Typography>
                    <div>
                      <Link to="/signup">
                        <Button
                          style={{ backgroundColor: "#216c2e", color: "white" }}
                        >
                          Visit
                        </Button>
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
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Explore;
