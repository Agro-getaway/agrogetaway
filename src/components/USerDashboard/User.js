<<<<<<< HEAD
=======
<<<<<<< Updated upstream
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import PropTypes from "prop-types";
import * as React from "react";
=======
import * as React from 'react';
import PropTypes from 'prop-types';
//import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
//import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
>>>>>>> Stashed changes
//import Typography from '@mui/material/Typography';
>>>>>>> 911ceaa1c301462a574c7925c1e259236851f024
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
<<<<<<< HEAD
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
=======
>>>>>>> 911ceaa1c301462a574c7925c1e259236851f024
//import InboxIcon from '@mui/icons-material/MoveToInbox';
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DashboardIcon from "@mui/icons-material/Dashboard";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
//import MailIcon from '@mui/icons-material/Mail';
<<<<<<< HEAD
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Route, Routes } from "react-router-dom";
=======
<<<<<<< Updated upstream
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
=======
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//import { Route, Routes } from "react-router-dom";
//import Dashboard from '../Dashboard';
//import { Label } from '@mui/icons-material';
import ImgMediaCard from "./MainDashboard.js";
>>>>>>> Stashed changes
>>>>>>> 911ceaa1c301462a574c7925c1e259236851f024

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [currrentPage, setCurrentPage] = React.useState("Dashboard");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleItemClick = (text) => {
    // Your onClick logic here, you can use the 'text' parameter to identify which item was clicked
    setCurrentPage(text);
    console.log(`Clicked on: ${text}`);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>
<<<<<<< HEAD
        {["Dashbaord", "Model Farmer", "Schedule Tour", "Confirm Tour"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={({ key }) => {}}>
=======
<<<<<<< Updated upstream
        {["Dashbaord", "Model Farmer", "Schedule Tour", "Confirm Tour"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
>>>>>>> 911ceaa1c301462a574c7925c1e259236851f024
                <ListItemIcon>
                  {index % 2 === 0 ? <DashboardIcon /> : <CalendarMonthIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
<<<<<<< HEAD
=======
=======
        {['Dashboard', 
        'Model Farmer', 
        'Schedule Tour', 
        'Confirm Tour'].map((text, index) => (
          <ListItem key={text} disablePadding >
            <ListItemButton onClick={() => handleItemClick(text)}> 
              <ListItemIcon>
               {index % 2 === 0? <DashboardIcon /> : <CalendarMonthIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
>>>>>>> Stashed changes
>>>>>>> 911ceaa1c301462a574c7925c1e259236851f024
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#fff2b2",
        }}
      >
        <Toolbar>
          <div className="logo">
            <img
              src="logo.jpg"
              alt="Logo"
              style={{
                maxHeight: "50px",
                maxWidth: "50px",
                marginRight: "15px",
              }}
            />
          </div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" color={"#104911"}>
            Farming redefined
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
<<<<<<< HEAD
        <Content />
=======
<<<<<<< Updated upstream
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sudufarming.com%2Fbenefits-of-organic-farming%2F&psig=AOvVaw2zv35-RQBs-r4_2Xg9UCXs&ust=1700516485665000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCavamL0YIDFQAAAAAdAAAAABAE"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Organic Farming
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Discover the top model farmer in Organic farming
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Schedule a Tour</Button>
            <Button size="small">See details..</Button>
          </CardActions>
        </Card>
        <Typography paragraph></Typography>
=======
        {currrentPage === 'Dashboard' && <ImgMediaCard/>}
        {currrentPage === 'Model Farmer' && <p>This is a f</p>}
        {currrentPage === 'Schedule Tour' && <p>This is a d t</p>}
        {currrentPage === 'Confirm Tour' && <p>This is a Confirm Tour</p>}
>>>>>>> Stashed changes
>>>>>>> 911ceaa1c301462a574c7925c1e259236851f024
      </Box>
    </Box>
  );
}

<<<<<<< HEAD
function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Dashbaord</div>}></Route>
        <Route path="/modelFarmer" element={<div>Model Farmer</div>}></Route>
        <Route path="/scheduleTour" element={<div>Schedule Tour</div>}></Route>
        <Route path="/confirmTour" element={<div>Confirm Tour</div>}></Route>
      </Routes>
    </div>
  );
}
=======

>>>>>>> 911ceaa1c301462a574c7925c1e259236851f024

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
