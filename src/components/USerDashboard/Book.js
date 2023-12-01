import { Link, Typography } from "@mui/material";
import React, { useState } from "react";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    Contact: "",
    farmingActivity: "",
    tourDate: "",
    numOfPeople: "",
    isSchool: false,
    numOfStudents: "",
    mainTeacher: "",
    showModal: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
      // Reset school-related fields when isSchool checkbox is unchecked
      ...(name === "isSchool" &&
        !checked && {
          numOfStudents: "",
          mainTeacher: "",
        }),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here, e.g., send to backend or perform necessary actions
    setFormData({
      ...formData,
      showModal: true,
    });
  };

  const closeModal = () => {
    setFormData({
      ...formData,
      showModal: false,
    });
  };

  return (
    <div
      style={{
        backgroundColor: "#F2E4CF",
        color: "#283618",
        padding: "20px",
        borderRadius: "10px",
        maxWidth: "30%",
        margin: "auto",
        marginTop: "40px",
      }}
    >
      <Typography component="h1" variant="h4" align="center">
        Book a model Farm Tour
      </Typography>
      <form onSubmit={handleSubmit}>
        <label style={{ color: "#283618" }}>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <label style={{ color: "#283618" }}>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <label style={{ color: "#283618" }}>Contact:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <label style={{ color: "#283618" }}>Farming Activity:</label>
        <input
          type="text"
          name="farmingActivity"
          value={formData.farmingActivity}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <label style={{ color: "#283618" }}>Tour Date:</label>
        <input
          type="date"
          name="tourDate"
          value={formData.tourDate}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <label style={{ color: "#283618" }}>Number of People:</label>
        <input
          type="number"
          name="numOfPeople"
          value={formData.numOfPeople}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <label style={{ color: "#283618" }}>
          <input
            type="checkbox"
            name="isSchool"
            checked={formData.isSchool}
            onChange={handleCheckboxChange}
            style={{ marginRight: "5px" }}
          />
          Is this a school tour?
        </label>

        {formData.isSchool && (
          <>
            <label style={{ color: "#283618" }}>Number of Students:</label>
            <input
              type="number"
              name="numOfStudents"
              value={formData.numOfStudents}
              onChange={handleChange}
              required
              style={{ width: "100%", marginBottom: "10px" }}
            />

            <label style={{ color: "#283618" }}>Main Teacher:</label>
            <input
              type="text"
              name="mainTeacher"
              value={formData.mainTeacher}
              onChange={handleChange}
              required
              style={{ width: "100%", marginBottom: "10px" }}
            />
          </>
        )}
        <Link To="/signup">
          <button
            type="submit"
            style={{
              backgroundColor: "#283618",
              color: "#F2E4CF",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Book
          </button>
        </Link>
      </form>

      {/* Confirmation Modal */}
      {formData.showModal && (
        <div
          style={{
            backgroundColor: "#F2E4CF",
            color: "#283618",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>Thank you for booking!</h2>
          <h3>You will receive an email Shortly</h3>
          <Link To="/types">
            <button
              style={{
                backgroundColor: "#283618",
                color: "#F2E4CF",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Back to Dashboard
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BookingPage;

// import React, { useState } from 'react';

// const BookingPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     location: '',
//     farmingActivity: '',
//     tourDate: '',
//     numOfPeople: '',
//     numOfStudents: '',
//     mainTeacher: '',
//     showModal: false,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Process form data here, e.g., send to backend or perform necessary actions
//     setFormData({
//       ...formData,
//       showModal: true,
//     });
//   };

//   const closeModal = () => {
//     setFormData({
//       ...formData,
//       showModal: false,
//     });
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: '#F2E4CF',
//         color: '#283618',
//         padding: '20px',
//         borderRadius: '10px',
//         maxWidth: '400px',
//         margin: 'auto',
//       }}
//     >
//       <form onSubmit={handleSubmit}>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           style={{ width: '100%', marginBottom: '10px' }}
//         />

//         {/* Add other form inputs similarly */}

//         <button
//           type="submit"
//           style={{
//             backgroundColor: '#283618',
//             color: '#F2E4CF',
//             padding: '8px 16px',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//           }}
//         >
//           Book
//         </button>
//       </form>

//       {/* Confirmation Modal */}
//       {formData.showModal && (
//         <div
//           style={{
//             backgroundColor: '#F2E4CF',
//             color: '#283618',
//             padding: '20px',
//             marginTop: '20px',
//             borderRadius: '10px',
//           }}
//         >
//           <h2>Thank you for booking a farm tour with Agrogetaway!</h2>
//           <button
//             onClick={closeModal}
//             style={{
//               backgroundColor: '#283618',
//               color: '#F2E4CF',
//               padding: '8px 16px',
//               border: 'none',
//               borderRadius: '5px',
//               cursor: 'pointer',
//             }}
//           >
//             Back to Dashboard
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookingPage;
