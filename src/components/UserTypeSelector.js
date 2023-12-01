import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
/* styles.css */

const Selector = () => {
  const navigate = useNavigate();

  const [userType, setUserType] = useState("");

  const handleSelect = (selectedType) => {
    setUserType(selectedType);
    navigate("/da/shboard")
    navigate("/types");
  };

  const containerStyle = {
    maxWidth: "400px",
    margin: "auto",
    padding: "200px",
    border: "1px solid #ccc",
    borderRadius: "60px",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    // backgroundColor: '#f4f4f4',
    backgroundColor: "#f5f5dc",
  };

  const radioStyle = {
    margin: "20px",
  };

  return (
    <div style={containerStyle}>
      <h2>Are you an Organization or an Individual?</h2>
      <div>
        <label style={radioStyle}>
          <input
            type="radio"
            value="organization"
            checked={userType === "organization"}
            onChange={() => handleSelect("organization")}
          />
          Organization
        </label>
      </div>
      <div>
        <label style={radioStyle}>
          <input
            type="radio"
            value="individual"
            checked={userType === "individual"}
            onChange={() => handleSelect("individual")}
          />
          Individual
        </label>
      </div>

      {userType && (
        <div>
          {/* <p style={{ marginTop: '15px' }}>You selected: {userType}</p> */}
          {/* Additional content or logic based on the selected user type */}
        </div>
      )}
    </div>
  );
};

export default Selector;
