import * as React from 'react';
import Card from '@mui/material/Card';
//import Snackbar from '@mui/material/Snackbar';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Typography';
//import { makeStyles } from '@mui/styled-engine';
//import { useState } from 'react';
//import { Link } from "react-router-dom";





export default function ImgMediaCard({handleItemClick}) {
  

  return (
   <Grid
   container
   spacing={2}
   //direction="row"
   //justifyContent="space-between"
   //alignItems="flex"
   display={'flex'}
   >
    <Grid item xs={4} style={{ marginRight: 'auto', marginLeft: 'auto' }}>
    <Card  sx={{ maxWidth: 345 , backgroundColor: '#fefae0'}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="Organic-Farming.jpg"
      />
      <CardContent style={{ color: "#283618", fontSize:"5vw" }}>
        <Typography gutterBottom variant="h5" component="div">
        Organic Farming 
        </Typography>
        <Typography variant="body2" color="#283618">
        Embracing organic methods like crop rotation, composting, and natural pest control, they're transforming communities
        </Typography>
      </CardContent>
      <CardActions style={{ color: "#283618", fontSize:"5vw" }}>
        <Button size="small"  onClick={()=> handleItemClick('Model Farm')}>More Details..</Button>
      </CardActions>  
    </Card>
   </Grid>

   <Grid item xs={4} style={{ marginRight: 'auto', marginLeft: 'auto' }}>
        <Card sx={{ maxWidth: 345 , backgroundColor: '#fefae0'}}>
          <CardMedia
            component="img"
            alt="second card"
            height="140"
            image="vegetable.jpg"
          />
          <CardContent style={{ color: "#283618", fontSize:"5vw" }}>
            <Typography gutterBottom variant="h5" component="div">
              Modern Vegetables
            </Typography>
            <Typography variant="body2" >
            Explore the vibrant world of modern vegetable farming pioneered by our country's visionary farmers.
            </Typography>
          </CardContent>
          <CardActions style={{ color: "#283618", fontSize:"5vw" }}>
            <Button size="small" onClick={()=> handleItemClick('Model Farm')}>More Details..</Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={4} style={{ marginRight: 'auto', marginLeft: 'auto' }}>
        <Card sx={{ maxWidth: 345 , backgroundColor: '#fefae0' }}>
          <CardMedia
            component="img"
            alt="second card"
            height="140"
            image="cocoa.jpg"
          />
          <CardContent style={{ color: "#283618", fontSize:"5vw" }}>
            <Typography gutterBottom variant="h5" component="div">
             Cocoa Growing 
            </Typography>
            <Typography variant="body2" >
            Step into the world of modern agriculture and Learning cocoa from farming Uganda's top cocoa farmers
            </Typography>
          </CardContent>
          <CardActions style={{ color: "#283618", fontSize:"5vw" }}>
            {/* <Link to="./User/ModelFarmer"> */}
            <Button size="small" onClick={()=> handleItemClick('Model Farm')}>More Details..</Button>
            {/* </Link> */}
          </CardActions>
        </Card>
      </Grid> 
  </Grid>  
  );
}