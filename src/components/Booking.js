// Install Material-UI
// npm install @mui/material @emotion/react @emotion/styled

// BookingPage.js
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Book = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: 40 }}>
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h4" gutterBottom>
          Book Your Event
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Date"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
          {/* Add more input fields as needed for your booking form */}

          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              Proceed to Payment
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Book;
