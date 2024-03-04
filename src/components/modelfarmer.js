// import {
//   Button,
//   FormControl,
//   Grid,
//   Input,
//   InputLabel,
//   List,
//   ListItem,
//   MenuItem,
//   Select,
//   TextField,
//   Typography,
// } from "@mui/material";
// import React, { useEffect, useState } from "react";

// const FarmerPage = () => {
//   const [farmDetails, setFarmDetails] = useState({
//     description: "",
//     services: [],
//     images: [],
//     location: "",
//     bookings: [],
//   });

//   useEffect(() => {
//     // Fetch farm details and bookings from backend API
//     // Update farmDetails state with the fetched data
//     fetchFarmData();
//   }, []); // Make sure to add dependencies if needed

//   const fetchFarmData = async () => {
//     try {
//       // Simulate fetching farm details and bookings from backend API
//       // Replace this with actual API calls
//       const initialFarmDetails = {
//         description: "Farm description",
//         services: ["Organic produce", "Farm tours"],
//         images: [
//           "https://via.placeholder.com/150",
//           "https://via.placeholder.com/150",
//           "https://via.placeholder.com/150",
//         ],
//         location: "Farm location",
//         bookings: [],
//       };
//       setFarmDetails(initialFarmDetails);
//     } catch (error) {
//       console.error("Error fetching farm data:", error);
//     }
//   };

//   const handleDescriptionChange = (event) => {
//     setFarmDetails({ ...farmDetails, description: event.target.value });
//   };

//   const handleServiceChange = (event) => {
//     const selectedServices = Array.from(
//       event.target.selectedOptions,
//       (option) => option.value
//     );
//     setFarmDetails({ ...farmDetails, services: selectedServices });
//   };

//   const handleImageChange = (event) => {
//     const selectedImages = Array.from(event.target.files);
//     setFarmDetails({ ...farmDetails, images: selectedImages });
//   };

//   const handleLocationChange = (event) => {
//     setFarmDetails({ ...farmDetails, location: event.target.value });
//   };

//   const handleServiceInput = (event) => {
//     // Add the new service to the list of services
//     const newService = event.target.value;
//     setFarmDetails({
//       ...farmDetails,
//       services: [...farmDetails.services, newService],
//     });
//   };

//   const handleBookingView = () => {
//     // Handle booking view logic
//   };

//   const handleSaveDetails = () => {
//     // Check if required fields are filled
//     if (
//       !farmDetails.description ||
//       !farmDetails.location ||
//       farmDetails.services.length === 0
//     ) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     // Here you would typically send the farm details to your backend API for saving
//     // You can make a fetch request or use any other method to send the data to your server

//     // For now, let's just log the farm details to the console as an example
//     console.log("Saving farm details:", farmDetails);

//     // Optionally, you can also display a success message to the user
//     alert("Farm details saved successfully!");
//   };
//   return (
//     <div style={{ padding: "20px" }}>
//       <Typography variant="h4">Farmer Page</Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <TextField
//             id="description"
//             label="Description"
//             multiline
//             rows={4}
//             value={farmDetails.description}
//             onChange={handleDescriptionChange}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <FormControl fullWidth>
//             <InputLabel id="services-label">Services</InputLabel>
//             <Select
//               labelId="services-label"
//               id="services"
//               multiple
//               value={farmDetails.services}
//               onChange={handleServiceChange}
//               input={<Input />}
//             >
//               {farmDetails.services.map((service, index) => (
//                 <MenuItem key={index} value={service}>
//                   {service}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             id="new-service"
//             label="Add New Service"
//             value={""}
//             onChange={handleServiceInput}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <input
//             type="file"
//             accept="image/*"
//             multiple
//             onChange={handleImageChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             id="location"
//             label="Location"
//             value={farmDetails.location}
//             onChange={handleLocationChange}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleSaveDetails}
//           >
//             Save Details
//           </Button>
//           <Button variant="contained" onClick={handleBookingView}>
//             View Bookings
//           </Button>
//         </Grid>
//         <Grid item xs={12}>
//           <Typography variant="h6">Bookings</Typography>
//           <List>
//             {farmDetails.bookings.map((booking, index) => (
//               <ListItem key={index}>
//                 <Typography>
//                   <strong>Booking ID:</strong> {booking.id}
//                   <br />
//                   <strong>Date:</strong> {booking.date}
//                   <br />
//                   <strong>Customer:</strong> {booking.customerName}
//                   <br />
//                   {/* Add more booking details as needed */}
//                 </Typography>
//               </ListItem>
//             ))}
//           </List>
//         </Grid>
//         <Grid item xs={12}>
//           <Typography variant="h6">Images</Typography>
//           <Grid container spacing={2}>
//             {farmDetails.images.map((imageUrl, index) => (
//               <Grid item key={index}>
//                 <img
//                   src={imageUrl}
//                   alt={`Farm ${index + 1}`}
//                   style={{ maxWidth: "150px" }}
//                 />
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default FarmerPage;

import {
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const FarmerPage = () => {
  const [farmDetails, setFarmDetails] = useState({
    description: "",
    services: [],
    images: [],
    location: "",
    bookings: [],
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isDetailsSaved, setIsDetailsSaved] = useState(false);
  const [newService, setNewService] = useState("");
  const [imageFiles, setImageFiles] = useState([]);

  useEffect(() => {
    // Fetch farm details and bookings from backend API
    // Update farmDetails state with the fetched data
    fetchFarmData();
  }, []); // Make sure to add dependencies if needed

  useEffect(() => {
    // Check if details have been saved to enable edit button
    if (isDetailsSaved) {
      setIsEditing(true);
    }
  }, [isDetailsSaved]);

  const fetchFarmData = async () => {
    try {
      // Simulate fetching farm details and bookings from backend API
      // Replace this with actual API calls
      const initialFarmDetails = {
        description: "Farm description",
        services: ["Organic produce", "Farm tours"],
        images: [
          "https://via.placeholder.com/150",
          "https://via.placeholder.com/150",
          "https://via.placeholder.com/150",
        ],
        location: "Farm location",
        bookings: [],
      };
      setFarmDetails(initialFarmDetails);
    } catch (error) {
      console.error("Error fetching farm data:", error);
    }
  };

  const handleDescriptionChange = (event) => {
    setFarmDetails({ ...farmDetails, description: event.target.value });
  };

  const handleServiceChange = (event) => {
    const selectedServices = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setFarmDetails({ ...farmDetails, services: selectedServices });
  };

  const handleLocationChange = (event) => {
    setFarmDetails({ ...farmDetails, location: event.target.value });
  };

  const handleBookingView = () => {
    // Handle booking view logic
  };

  const handleEditDetails = () => {
    setIsEditing(true);
  };

  const handleSaveDetails = () => {
    // Check if required fields are filled
    if (
      !farmDetails.description ||
      !farmDetails.location ||
      farmDetails.services.length === 0
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Save the entered details
    setIsDetailsSaved(true);
    setIsEditing(false);
  };

  const handleAddNewService = () => {
    if (newService.trim() !== "") {
      setFarmDetails({
        ...farmDetails,
        services: [...farmDetails.services, newService],
      });
      setNewService("");
    }
  };

  const handleImageChange = (event) => {
    const files = event.target.files;
    setImageFiles([...imageFiles, ...files]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4">Farmer Page</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="description"
            label="Description"
            multiline
            rows={4}
            value={farmDetails.description}
            onChange={handleDescriptionChange}
            fullWidth
            disabled={!isEditing}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="services-label">Services</InputLabel>
            <Select
              labelId="services-label"
              id="services"
              multiple
              value={farmDetails.services}
              onChange={handleServiceChange}
              input={<Input />}
              disabled={!isEditing}
            >
              {farmDetails.services.map((service, index) => (
                <MenuItem key={index} value={service}>
                  {service}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            id="new-service"
            label="Add New Service"
            value={newService}
            onChange={(e) => setNewService(e.target.value)}
            disabled={!isEditing}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddNewService}
            disabled={!isEditing}
          >
            Add Service
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="location"
            label="Location"
            value={farmDetails.location}
            onChange={handleLocationChange}
            fullWidth
            disabled={!isEditing}
          />
        </Grid>
        <Grid item xs={12}>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            disabled={!isEditing}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={isEditing ? handleSaveDetails : handleEditDetails}
            disabled={isDetailsSaved && !isEditing}
          >
            {isEditing ? "Save Details" : "Edit Details"}
          </Button>
          <Button variant="contained" onClick={handleBookingView}>
            View Bookings
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Bookings</Typography>
          <List>
            {farmDetails.bookings.map((booking, index) => (
              <ListItem key={index}>
                <Typography>
                  <strong>Booking ID:</strong> {booking.id}
                  <br />
                  <strong>Date:</strong> {booking.date}
                  <br />
                  <strong>Customer:</strong> {booking.customerName}
                  <br />
                  {/* Add more booking details as needed */}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Images</Typography>
          <Grid container spacing={2}>
            {imageFiles.map((file, index) => (
              <Grid item key={index}>
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Farm Image ${index + 1}`}
                  style={{ maxWidth: "150px" }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default FarmerPage;
