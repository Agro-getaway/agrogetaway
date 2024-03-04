import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  makeStyles,
} from "@mui/material";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const FarmerPage = () => {
  const classes = useStyles();

  const [farmDetails, setFarmDetails] = useState({
    description: "",
    services: [],
    images: [],
    location: "",
    bookings: [],
  });

  const handleDescriptionChange = (event) => {
    setFarmDetails({ ...farmDetails, description: event.target.value });
  };

  const handleServiceChange = (event) => {
    const selectedServices = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setFarmDetails({ ...farmDetails, services: selectedServices });
  };

  const handleImageChange = (event) => {
    const selectedImages = Array.from(event.target.files);
    setFarmDetails({ ...farmDetails, images: selectedImages });
  };

  const handleLocationChange = (event) => {
    setFarmDetails({ ...farmDetails, location: event.target.value });
  };

  const handleBookingView = () => {
    // Fetch bookings for the current farmer from backend
    // Update the bookings in the state
  };

  const handleSaveDetails = () => {
    // Save farm details to backend
    // Show success message to the farmer
  };

  return (
    <div>
      <Typography variant="h4">Farmer Page</Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="description"
          label="Description"
          multiline
          rows={4}
          value={farmDetails.description}
          onChange={handleDescriptionChange}
        />
        <FormControl className={classes.formControl}>
          <InputLabel id="services-label">Services</InputLabel>
          <Select
            labelId="services-label"
            id="services"
            multiple
            value={farmDetails.services}
            onChange={handleServiceChange}
            input={<Input />}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 300,
                  width: 250,
                },
              },
            }}
          >
            <MenuItem value="Organic produce">Organic produce</MenuItem>
            <MenuItem value="Farm tours">Farm tours</MenuItem>
            <MenuItem value="CSA subscriptions">CSA subscriptions</MenuItem>
            {/* Add more service options as needed */}
          </Select>
        </FormControl>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />
        <TextField
          id="location"
          label="Location"
          value={farmDetails.location}
          onChange={handleLocationChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSaveDetails}
          className={classes.button}
        >
          Save Details
        </Button>
        <Button
          variant="contained"
          onClick={handleBookingView}
          className={classes.button}
        >
          View Bookings
        </Button>
      </form>
      <Typography variant="h6">Bookings</Typography>
      <ul>
        {farmDetails.bookings.map((booking, index) => (
          <li key={index}>
            <strong>Booking ID:</strong> {booking.id}
            <br />
            <strong>Date:</strong> {booking.date}
            <br />
            <strong>Customer:</strong> {booking.customerName}
            <br />
            {/* Add more booking details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FarmerPage;
