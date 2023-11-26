// UserTypeSelector.js

import {
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Selector = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("");

  const handleSelect = (selectedType) => {
    setUserType(selectedType);
    // navigate("/dashboard")
    navigate("/users");
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "15px",
        backgroundColor: "#f5f5dc",
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Are you an Organization or an Individual?
      </Typography>

      <RadioGroup
        row
        aria-label="userType"
        name="userType"
        value={userType}
        onChange={(event) => handleSelect(event.target.value)}
      >
        <Tooltip title="Select as an Organization" arrow>
          <FormControlLabel
            value="organization"
            control={<Radio />}
            label="Organization"
          />
        </Tooltip>
        <Tooltip title="Select as an Individual" arrow>
          <FormControlLabel
            value="individual"
            control={<Radio />}
            label="Individual"
          />
        </Tooltip>
      </RadioGroup>

      {userType && (
        <div>
          {/* Additional content or logic based on the selected user type */}
        </div>
      )}
    </Container>
  );
};

export default Selector;
