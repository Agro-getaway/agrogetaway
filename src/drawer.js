import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./Drawer.css";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`drawer ${isOpen ? "open" : ""}`}>
      <button onClick={toggleDrawer} className="toggle-button">
        {isOpen ? "Close Drawer" : "Open Drawer"}
      </button>
      <div className="drawer-content">
        <Button>
          <Link to="/dashboard" onClick={toggleDrawer}>
            Dashboard
          </Link>
        </Button>

        <Button>
          <Link to="/model-farmer" onClick={toggleDrawer}>
            Model Farmer
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Drawer;
