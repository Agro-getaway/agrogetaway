import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import firebase from "firebase/app";
import React, { useState } from "react";

const Booking = () => {
  const [user, setUser] = useState(null);
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    numGuests: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleInputChange = (event) => {
    setBookingData({
      ...bookingData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    const { name, email, phone, date, time, numGuests, message } = bookingData;

    if (!name || !email || !phone || !date || !time || !numGuests) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    try {
      await firebase
        .database()
        .ref("bookings/" + user.uid)
        .set({
          name,
          email,
          phone,
          date,
          time,
          numGuests,
          message,
        });
      setSuccessMessage(
        "Booking Successful! We will send a confirmation email shortly."
      );
    } catch (error) {
      setErrorMessage("Booking Failed. Please try again.");
    }
  };

  useState(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  if (!user) {
    return <Typography>Please sign in to book a tour.</Typography>;
  }

  return (
    <Paper elevation={3}>
      <Box p={3}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5">Book Your Farm Tour</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Name"
                name="name"
                value={bookingData.name}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                name="email"
                value={bookingData.email}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone"
                name="phone"
                value={bookingData.phone}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Date"
                name="date"
                value={bookingData.date}
                onChange={handleInputChange}
                type="date"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Time"
                name="time"
                value={bookingData.time}
                onChange={handleInputChange}
                type="time"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Number of Guests"
                name="numGuests"
                value={bookingData.numGuests}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                name="message"
                value={bookingData.message}
                onChange={handleInputChange}
                fullWidth
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Book Tour
              </Button>
            </Grid>
            {errorMessage && (
              <Grid item xs={12}>
                <Typography color="error">{errorMessage}</Typography>
              </Grid>
            )}
            {successMessage && (
              <Grid item xs={12}>
                <Typography color="success">{successMessage}</Typography>
              </Grid>
            )}
          </Grid>
        </form>
      </Box>
    </Paper>
  );
};

export default Booking;
