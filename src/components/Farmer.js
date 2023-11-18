import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function Farmers() {
  const [formData, setFormData] = useState({
    images: [],
    location: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e, index) => {
    const newImages = [...formData.images];
    newImages[index] = e.target.value;
    setFormData({ ...formData, images: newImages });
  };

  const handleAddImage = () => {
    setFormData({ ...formData, images: [...formData.images, ""] });
  };

  const handleRemoveImage = (index) => {
    const newImages = [...formData.images];
    newImages.splice(index, 1);
    setFormData({ ...formData, images: newImages });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission (e.g., API calls, data storage)
    console.log("Form data submitted:", formData);
  };

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Farm Image Upload
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {formData.images.map((image, index) => (
            <Grid item xs={12} key={index}>
              <TextField
                fullWidth
                label={`Image URL ${index + 1}`}
                name={`image${index}`}
                variant="outlined"
                value={image}
                onChange={(e) => handleImageChange(e, index)}
              />
              <Button
                type="button"
                variant="outlined"
                color="secondary"
                onClick={() => handleRemoveImage(index)}
              >
                Remove
              </Button>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button
              type="button"
              variant="outlined"
              color="primary"
              onClick={handleAddImage}
            >
              Add Image
            </Button>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Location"
              name="location"
              variant="outlined"
              value={formData.location}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Details"
              name="details"
              multiline
              rows={4}
              variant="outlined"
              value={formData.details}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Upload
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Farmers;
