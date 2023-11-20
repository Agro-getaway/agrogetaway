// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
// import * as React from "react";

// export default function StaticDatePickerLandscape() {
//   const [farmerProfile, setFarmerProfile] = React.useState({
//     name: "John Doe",
//     birthDate: new Date(),
//     // Add other fields as needed
//   });

//   const handleFarmerProfileChange = (field, value) => {
//     setFarmerProfile((prevProfile) => ({
//       ...prevProfile,
//       [field]: value,
//     }));
//   };

//   return (
//     <div>
//       {/* Farmer Profile Section */}
//       <h2>Farmer Profile</h2>
//       <form>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={farmerProfile.name}
//             onChange={(e) => handleFarmerProfileChange("name", e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Birth Date:
//           <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <StaticDatePicker
//               orientation="landscape"
//               value={farmerProfile.birthDate}
//               onChange={(date) => handleFarmerProfileChange("birthDate", date)}
//             />
//           </LocalizationProvider>
//         </label>
//         {/* Add other fields as needed */}
//       </form>

//       {/* Date Picker Section */}
//       <h2>Date Picker</h2>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <StaticDatePicker orientation="landscape" />
//       </LocalizationProvider>
//     </div>
//   );
// }
