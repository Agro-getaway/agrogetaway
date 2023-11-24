//import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
//import InboxIcon from "@mui/icons-material/MoveToInbox";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
//import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import MainDashboard from "./MainDashboard.js";
import ModelFarm from "./ModelFarmer.js";
import ScheduleTour from "./SheduleTour.js";
import ConfirmTour from "./ConfirmTour.js";
import  { useCallback, useEffect, useState } from "react";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState("Dashboard");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleItemClick = (text) => {
    setCurrentPage(text);
    setMobileOpen(false);
  };
  const drawer = (
    <div >
      <Toolbar />
      <Divider />
      <List sx={{ backgroundColor: "#fefae0" }}>
        {['Dashboard', 'Model Farm', 'Farmer Profile', 'Book Tour'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{
            backgroundColor: text === currentPage ? "#fefae0" : "#fefae0",
            text: text === currentPage ? "#fefae0" : "#283618",
            borderRadius: text === currentPage ? "15%" : "0",
            //marginX: "5px",
            marginRight: "15px"
          }}>
            <ListItemButton onClick={() => handleItemClick(text)}>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [welcomeMessages] = useState([
    'Discover the world of organic farming!',
    'Explore the vibrant world of modern vegetable farming.',
    'Step into the world of cocoa growing.'
  ]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const nextWelcomeMessage = useCallback(() => {
    setCurrentMessageIndex(
      (prevIndex) => (prevIndex + 1) % welcomeMessages.length
    );
  }, [welcomeMessages]);

  const autoTransition = useCallback(() => {
    nextWelcomeMessage();
  }, [ nextWelcomeMessage]);

  useEffect(() => {
    const intervalId = setInterval(autoTransition, 10000); // 10 seconds (10,000 milliseconds)

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [autoTransition]);

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div style={{ backgroundColor: '#dda15e'}}>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#fefae0",
        }}
      >
        <Toolbar
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <div className="logo">
            <img
              src="agrogetaway-high-resolution-logo-removebg-preview (1).png"
              alt="Logo"
              style={{
                maxHeight: "50px",
                maxWidth: "50px",
                marginRight: "15px",
              }}
            />
          </div> */}
          <Typography
            variant="h6"
            fontSize="3vw"
            fontFamily="italics"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ color: "#283618" }}
          >
            Farming Redefined
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
        <Typography paragraph>
        {currentPage === 'Dashboard' && <MainDashboard handleItemClick={handleItemClick}/>}
          {currentPage === 'Model Farm' && <ModelFarm/>}
          {currentPage === 'Farmer Profile' && <ScheduleTour/>}
          {currentPage === 'Book Tour' && <ConfirmTour/>}
        </Typography>
      </Box>
      
    </Box>
    <Box>
      <Typography
            variant="h1"
            style={{
              color: "white",
              textAlign: "left",
              fontSize: "3vw", // Responsive font size
              // position: "relative",
              fontFamily: "helvetica",
              marginTop: "10%",
              marginLeft: "30%"
              
             
            }}
          >
            {welcomeMessages[currentMessageIndex]}
          </Typography>
          </Box>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
