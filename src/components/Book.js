import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    contact: "",
    farmingActivity: "",
    tourDate: "",
    numOfPeople: "",
    isSchool: false,
    numOfStudents: "",
    mainTeacher: "",
    showModal: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
      ...(name === "isSchool" &&
        !checked && {
          numOfStudents: "",
          mainTeacher: "",
        }),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      showModal: true,
    });
  };

  const closeModal = () => {
    setFormData({
      ...formData,
      showModal: false,
    });
  };

  return (
    <Container maxWidth="md">
      <Paper
        elevation={3}
        style={{
          backgroundColor: "#F2E4CF",
          color: "#283618",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "40px",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Book a Model Farm Tour
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Location"
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Contact"
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Farming Activity"
                type="text"
                name="farmingActivity"
                value={formData.farmingActivity}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Tour Date"
                type="date"
                name="tourDate"
                value={formData.tourDate}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Number of People"
                type="number"
                name="numOfPeople"
                value={formData.numOfPeople}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="isSchool"
                    checked={formData.isSchool}
                    onChange={handleCheckboxChange}
                  />
                }
                label="Is this a school tour?"
                style={{ marginTop: "10px" }}
              />
            </Grid>
            {formData.isSchool && (
              <>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Number of Students"
                    type="number"
                    name="numOfStudents"
                    value={formData.numOfStudents}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Main Teacher"
                    type="text"
                    name="mainTeacher"
                    value={formData.mainTeacher}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
              </>
            )}
          </Grid>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
          >
            Book
          </Button>
        </form>

        {formData.showModal && (
          <Paper
            elevation={3}
            style={{
              backgroundColor: "#F2E4CF",
              color: "#283618",
              padding: "20px",
              marginTop: "20px",
              borderRadius: "10px",
            }}
          >
            <Typography variant="h6">Thank you for booking!</Typography>
            <Typography variant="subtitle1">
              You will receive an email shortly.
            </Typography>
            <Link to="/farms" style={{ textDecoration: "none" }}>
              <Button
                onClick={closeModal}
                variant="contained"
                color="primary"
                style={{ marginTop: "20px" }}
              >
                Thank you
              </Button>
            </Link>
          </Paper>
        )}
      </Paper>
    </Container>
  );
};

export default BookingPage;
