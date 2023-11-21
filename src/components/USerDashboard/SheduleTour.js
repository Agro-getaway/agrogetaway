import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function TourConfirmation() {
  const [date, setDate] = useState(new Date());
  const farmerProfile = {
    name: "John Doe",
    location: "Farmville, Uganda",
    farmingCategory: "Organic Vegetable Farming",
    description:
      "A passionate farmer dedicated to sustainable and organic farming methods.",
    imageUrl: "url_to_farmer_image.jpg", // Replace with the URL to the farmer's image
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    // Handle logic for scheduling the tour on selected date
    console.log("Tour scheduled for:", newDate);
  };

  const confirmTour = () => {
    // Implement logic to confirm the tour schedule
    console.log("Tour confirmed for:", date);
    // You might want to send this information to a backend or display a confirmation message to the user
  };

  return (
    <Container maxWidth="md">
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={farmerProfile.imageUrl}
          alt="Farmer's Image"
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Farmer's Profile
          </Typography>
          <Typography variant="h6" gutterBottom>
            Name: {farmerProfile.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Location: {farmerProfile.location}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Farming Category: {farmerProfile.farmingCategory}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Description: {farmerProfile.description}
          </Typography>
        </CardContent>
      </Card>

      <Box my={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Schedule a Tour
        </Typography>
        <Calendar
          onChange={handleDateChange}
          value={date}
          minDate={new Date()} // Prevents past dates from being selected
        />
      </Box>

      <Box display="flex" justifyContent="center">
        <Button variant="contained" color="primary" onClick={confirmTour}>
          Confirm Tour
        </Button>
      </Box>
    </Container>
  );
}

export default TourConfirmation;
