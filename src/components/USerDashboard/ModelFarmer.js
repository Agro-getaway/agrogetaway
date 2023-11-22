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
        image="OrgFarm.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Kaynera Farm
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Our passion for organic farming blends tradition and innovation, cultivating sustainable, nutrient-rich produce. 
        Visit and Learn organic Farming from our Farm.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" >Visit Farm</Button>
      </CardActions>  
    </Card>
   </Grid>

   <Grid item xs={4} style={{ marginRight: 'auto', marginLeft: 'auto' }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="second card"
            height="140"
            image="VegFarm.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Highway Vegetable Farm
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Gain invaluable insights into sustainable farming practices while enjoying the freshness of our vibrant produce.
            Book your tour now for an immersive Learning experience.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" >Visit Farm</Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={4} style={{ marginRight: 'auto', marginLeft: 'auto' }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="second card"
            height="140"
            image="CocoaFarm.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Cocoa Farm 
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Discover the art of cultivating fine cocoa beans and learn the secrets behind our rich, velvety chocolates.
            Book your tour today and step into the flavorful world of SweetBloom Farm.
            </Typography>
          </CardContent>
          <CardActions>
            
            <Button size="small" >Visit Farm</Button>
    
          </CardActions>
        </Card>
      </Grid>
  </Grid>  
  );
}