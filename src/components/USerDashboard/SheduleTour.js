import React from 'react';
import { Typography, Button, Grid, Divider, List, ListItem, ListItemText, Paper, Card } from '@mui/material';

function FarmerProfile() {
  const farmerDetails = {
    name: ' Nalwanga Sarah',
    location: ' Lives in Takajjunge Mukono',
    farmingCategory: ' Mainly does Organic Vegetable Farming',
    description: '  A passionate farmer dedicated to sustainable and organic farming methods.Nalwanga Sarah is a farmer in Mukono who grows vegetables without chemicals. She takes care of the land and plants in a way thats good for nature. When people visit her farm, they can learn how she grows veggies and help with things like making compost and picking crops. Come join Sarah at her farm to see how she does things naturally and enjoy the beauty of farming!' ,
    imageUrl: 'Organic-Farming.jpg',
    // image:'VegFarm.jpg', // Replace with the URL to the farmer's image
    farmActivities: [
      'Crop Rotation',
      'Composting',
      'Natural Pest Control',
      'Harvesting Workshops',
      'Soil Conservation Programs',
    ], // List of farm activities
  
  };

  const handleBookTour = () => {
    // Logic to handle booking a farm tour
    console.log('Farm tour booked!');
    // You can implement the booking functionality here
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: "#283618" }}>
     <Card style={{ padding: '20px', width: '80%', minHeight: '80vh', justifyContent: 'center', backgroundColor: '#fefae0'}}>
    {/* <Paper style={{ padding: '20px', margin: '20px', alignItems: 'center', minHeight: '80vh', backgroundColor: '#fefae0'}}> */}
    <Grid container direction="column" spacing={3} style={{ color: "#283618" }}>
      <Grid item xs={12} marginLeft={'25%'} marginTop={'300px'}>
      <Typography variant="h5">Meet your Model Farmer</Typography>
        <img src={farmerDetails.imageUrl} alt="Farmer" style={{ width: '100%', maxWidth: '400px' }} />
        <Typography variant="h4">{farmerDetails.name}</Typography>
        <Typography variant="subtitle1">{farmerDetails.location}</Typography>
        <Typography variant="subtitle2">{farmerDetails.farmingCategory}</Typography>
        <Typography variant="body1" style={{ color: "#283618", fontSize:"1vw" }}>{farmerDetails.description}</Typography>
      </Grid>
      <Divider />
      <Grid item xs={12} marginLeft={'25%'}>
        <Typography variant="h5" style={{ color: "#283618", fontSize:"3vw" }}>Offered Farm Activities</Typography>
        <List style={{ color: "#283618", fontSize:"2vw" }}>
          {farmerDetails.farmActivities.map((activity, index) => (
            <ListItem key={index}>
              <ListItemText primary={activity} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Divider />
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleBookTour}>
          Book Farm Tour
        </Button>
      </Grid>
      <Grid item xs={12} style={{ marginTop: 'auto' }}>
        <Paper style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f0f0f0' }}>
          <Typography variant="body2">agrogetaway - Your gateway to sustainable farming experiences</Typography>
        </Paper>
      </Grid>
    </Grid>
    {/* </Paper> */}
    </Card>
    </div>
  );
}

export default FarmerProfile;
