import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

// Sample team members data
const teamMembers = [
  {
    name: "Jim James Gortland",
    role: "Project Manager",
    skills: ["Leadership", "Project Management"],
    imageUrl: "john-doe.jpg", // Replace with the actual image path
  },
  {
    name: "Ddumba Timothy",
    role: "Project Manager",
    skills: ["Leadership", ""],
    imageUrl: "jane-smith.jpg", // Replace with the actual image path
  },
  {
    name: "Nalule Tryphine Ruth",
    role: "FrontEnd Developer",
    skills: ["React", "Javascript"],
    imageUrl: "jane-smith.jpg", // Replace with the actual image path
  },
  {
    name: "Nabirye Joan",
    role: "BackEnd Developer",
    skills: ["Express js", "Node js"],
    imageUrl: "jane-smith.jpg", // Replace with the actual image path
  },
  {
    name: "Murungi Adam",
    role: "Marketer",
    skills: ["", ""],
    imageUrl: "jane-smith.jpg", // Replace with the actual image path
  },
  {
    name: "Namuwonge Josephine",
    role: "Marketer",
    skills: ["", ""],
    imageUrl: "jane-smith.jpg", // Replace with the actual image path
  },

  // Add more team members as needed
];

const AboutUs = () => {
  return (
    <div>
      <Typography variant="h4">
        <strong>ABOUT US</strong>
      </Typography>

      <Typography variant="h5">
        <p>
          Welcome to Agrogetaway, your go-to platform for discovering the latest
          farming methods and exploring different farms. Our mission is to
          connect farmers, enthusiasts, and everyone interested in agriculture.
        </p>
      </Typography>

      <Typography variant="h5">
        <p>
          At Agrogetaway, we believe in sustainable and innovative farming
          practices. Whether you are a seasoned farmer or just starting, our
          platform provides valuable resources and a community to support your
          journey.
        </p>
      </Typography>

      <Typography variant="h5">
        <p>
          Explore various farming methods, learn from experts, and connect with
          farms near you. We are passionate about fostering a community that
          shares knowledge and experiences to promote a thriving agricultural
          ecosystem.
        </p>
      </Typography>

      <Typography variant="h5">
        Thank you for being part of the Farming Explorer community. If you have
        any questions or suggestions, feel free to reach out to us.
      </Typography>

      <Typography variant="h5">
        {" "}
        <strong>
          <p>Our Team</p>
        </strong>
      </Typography>

      <Grid container spacing={3}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} style={{ padding: "16px" }}>
              <img
                src={member.imageUrl}
                alt={member.name}
                style={{ width: "100%", borderRadius: "8px" }}
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
  );
};

export default AboutUs;
