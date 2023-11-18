// BookingPage.js
import {
  Button,
  Container,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const BookingPage = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: 40 }}>
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h4" gutterBottom>
          Book Farm Tour
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
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
          {/* Add more input fields as needed for your booking form */}
          <Grid item xs={12}>
            <Link to="/payment">
              <Button variant="contained" color="primary" fullWidth>
                Proceed to Payment
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default BookingPage;
