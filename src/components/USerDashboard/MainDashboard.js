import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Typography';
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
    <Card  sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="Organic-Farming.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Organic Farming 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Embracing organic methods like crop rotation, composting, and natural pest control, they're transforming communities
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=> handleItemClick('Model Farm')}>More Details..</Button>
      </CardActions>  
    </Card>
   </Grid>

   <Grid item xs={4} style={{ marginRight: 'auto', marginLeft: 'auto' }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="second card"
            height="140"
            image="vegetable.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Modern Vegetables
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Explore the vibrant world of modern vegetable farming pioneered by our country's visionary farmers.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={()=> handleItemClick('Model Farm')}>More Details..</Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={4} style={{ marginRight: 'auto', marginLeft: 'auto' }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="second card"
            height="140"
            image="cocoa.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Cocoa Growing 
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Step into the world of modern agriculture and Learning cocoa from farming Uganda's top cocoa farmers
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Link to="./User/ModelFarmer"> */}
            <Button size="small" onClick={()=> handleItemClick('Model Farm')}>More Details..</Button>
            {/* </Link> */}
          </CardActions>
        </Card>
      </Grid>
  </Grid>  
  );
}