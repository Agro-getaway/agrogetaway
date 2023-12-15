import PersonIcon from "@mui/icons-material/Person";
import {
  AppBar,
  Avatar,
  Button,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

// Sample team members data
const teamMembers = [
  {
    name: "Jim James Gortland",
    role: "Project Manager",
    skills: ["Leadership", "Project Management", "Adaptability"],
    imageUrl: "jim.jpg", // Replace with the actual image path
  },
  {
    name: "Ddumba Timothy",
    role: "Project Manager",
    skills: ["Leadership", "Problem Solving"],
    imageUrl: "timothy.jpg", // Replace with the actual image path
  },

  {
    name: "Nabirye Joan",
    role: "BackEnd Developer",
    skills: ["Express js", "Node js", "Python", "php"],
    imageUrl: "joan.jpg", // Replace with the actual image path
  },
  {
    name: "Murungi Adam",
    role: "Sales Personnel",
    skills: ["Data Analysis", "Brand Management", "Content Creation"],
    imageUrl: "adam.jpg", // Replace with the actual image path
  },
  {
    name: "Namuwonge Josephine",
    role: "Marketer",
    skills: ["Communication Skills", "Collaboration"],
    imageUrl: "josephine.jpg", // Replace with the actual image path
  },
  {
    name: "Nalule Tryphine Ruth",
    role: "FrontEnd Developer",
    skills: ["React", "Javascript", "Python"],
    imageUrl: "decoy.webp", // Replace with the actual image path
  },
  // Add more team members as needed
];

const AboutUs = () => {
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
          <Button color="inherit" component={Link} to="/types">
            <strong>Methods</strong>
          </Button>
          <Button color="inherit" component={Link} to="/farms">
            <strong>Farms</strong>
          </Button>

          <Avatar style={{ marginLeft: "10px" }}>
            <PersonIcon />
          </Avatar>
        </Toolbar>
      </AppBar>
      <div>
        <div style={{ textAlign: "justify", margin: "auto" }}>
          <Typography variant="h4" style={{ textAlign: "center" }}>
            <strong>ABOUT US</strong>
          </Typography>

          <Typography variant="h5" style={{ marginTop: "16px" }}>
            Welcome to Agrogetaway, your go-to platform for discovering the
            latest farming methods and exploring different farms. Our mission is
            to connect farmers, enthusiasts, and everyone interested in
            agriculture.
          </Typography>

          <Typography variant="h5" style={{ marginTop: "16px" }}>
            At Agrogetaway, we believe in sustainable and innovative farming
            practices. Whether you are a seasoned farmer or just starting, our
            platform provides valuable resources and a community to support your
            journey.
          </Typography>

          <Typography variant="h5" style={{ marginTop: "16px" }}>
            Explore various farming methods, learn from experts, and connect
            with farms near you. We are passionate about fostering a community
            that shares knowledge and experiences to promote a thriving
            agricultural ecosystem.
          </Typography>

          <Typography variant="h5" style={{ marginTop: "16px" }}>
            Thank you for being part of the Farming Explorer community. If you
            have any questions or suggestions, feel free to reach out to us.
          </Typography>

          <Typography variant="h5" style={{ marginTop: "16px" }}>
            <strong>Our Team</strong>
          </Typography>
        </div>
        <Grid container spacing={3}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={3} style={{ padding: "16px" }}>
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  style={{
                    width: "100%",
                    height: "500px", // Adjust the height as needed
                    objectFit: "cover", // Ensure the image covers the specified dimensions
                    borderRadius: "8px",
                  }}
                />
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="subtitle1">{member.role}</Typography>
                <Typography variant="body2">
                  Skills: {member.skills.join(", ")}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default AboutUs;
