// HamburgerMenu.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (status) => () => {
    setOpen(status);
  };

  return (
    <>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List>
          {/* Menu items */}
          <ListItem button component={Link} to="/admin">
            <ListItemText primary="Admin" />
          </ListItem>
          <ListItem button component={Link} to="/farms">
            <ListItemText primary="Farms" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
