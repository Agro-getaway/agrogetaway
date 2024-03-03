
import axios from "axios";

// import { useNavigate } from "react-router-dom";
import {
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    Paper,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import { Link } from "react-router-dom";
  
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
  
    const handleChange = async(e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleCheckboxChange =async (e) => {
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
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      try {
        // Make a POST request to the backend endpoint
      const response = await axios.post(
        "http://127.0.0.1:3011/booking/create-booking",
        formData
      );
      // Check the response and handle accordingly
      if (response.status === 200) {
        // Booking successful, show modal or navigate to another page
        setFormData({
          ...formData,
          showModal: true,
        });

      }
    //   setFormData({
    //     ...formData,
    //     showModal: true,
    //   });
    else {
        // Handle other status codes or errors
        console.error("Failed to create booking:", response.data);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Failed to create booking:", error);
    }
    };
  
    const closeModal = () => {
      setFormData({
        ...formData,
        showModal: false,
      });
    };
  
    return (
      <div
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/840111/pexels-photo-840111.jpeg?auto=compress&cs=tinysrgb&w=600')`,
          backgroundSize: "cover",
          minHeight: "100vh",
          maxHeight: "150vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={3}>
            {/* Farm Photo Section */}
  
            {/* Form Section */}
            <Grid item xs={12} md={6} sm={3}>
              <Paper
                elevation={5}
                style={{
                  backgroundColor: "#F2E4CF",
                  color: "#283618",
                  padding: "60px",
                  borderRadius: "20px",
                  alignItems: "center",
                  width: "150%",
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
  
                {/* Modal Section */}
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
                    <Link to="/types" style={{ textDecoration: "none" }}>
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
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  };
  
  export default BookingPage;
  