// import React, { useState } from "react";
// import "./admin.css"; // Import CSS file for styling

// const FarmAdmin = () => {
//   const [farms, setFarms] = useState([
//     // Sample data, replace with your backend API call to fetch farms
//     {
//       id: 1,
//       name: "Farm 1",
//       status: "pending",
//       description:
//         "Farm 1 is located in a serene environment with beautiful landscapes.",
//       services: ["Organic produce", "Farm tours"],
//       image: "https://via.placeholder.com/150", // Sample image URL, replace with actual image URL
//     },
//     {
//       id: 2,
//       name: "Farm 2",
//       status: "approved",
//       description: "Farm 2 specializes in sustainable farming practices.",
//       services: ["CSA subscriptions", "Educational workshops"],
//       image: "https://via.placeholder.com/150", // Sample image URL, replace with actual image URL
//     },
//     {
//       id: 3,
//       name: "Farm 3",
//       status: "pending",
//       description: "Farm 3 offers farm-to-table dining experiences.",
//       services: ["Farm stays", "Harvest festivals"],
//       image: "https://via.placeholder.com/150", // Sample image URL, replace with actual image URL
//     },
//   ]);

//   const approveFarm = (id) => {
//     // Replace with your backend API call to update farm status
//     setFarms((prevFarms) =>
//       prevFarms.map((farm) =>
//         farm.id === id ? { ...farm, status: "approved" } : farm
//       )
//     );
//   };

//   const deleteFarm = (id) => {
//     // Replace with your backend API call to delete farm
//     setFarms((prevFarms) => prevFarms.filter((farm) => farm.id !== id));
//   };

//   return (
//     <div className="farm-admin-container">
//       <h1 className="farm-admin-heading">Farm Admin Panel</h1>
//       <table className="farm-table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Description</th>
//             <th>Services</th>
//             <th>Status</th>
//             <th>Action</th>
//             <th>Image</th>
//           </tr>
//         </thead>
//         <tbody>
//           {farms.map((farm) => (
//             <tr key={farm.id}>
//               <td>{farm.id}</td>
//               <td>{farm.name}</td>
//               <td>{farm.description}</td>
//               <td>
//                 <ul>
//                   {farm.services.map((service, index) => (
//                     <li key={index}>{service}</li>
//                   ))}
//                 </ul>
//               </td>
//               <td>{farm.status}</td>
//               <td>
//                 {farm.status === "pending" && (
//                   <button
//                     className="approve-btn"
//                     onClick={() => approveFarm(farm.id)}
//                   >
//                     Approve
//                   </button>
//                 )}
//                 <button
//                   className="delete-btn"
//                   onClick={() => deleteFarm(farm.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//               <td>
//                 <img className="farm-image" src={farm.image} alt={farm.name} />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default FarmAdmin;

import React, { useState } from "react";
import "./admin.css"; // Import CSS file for styling

const FarmAdmin = () => {
  const [farms, setFarms] = useState([
    // Sample data, replace with your backend API call to fetch farms
    {
      id: 1,
      farmName: "Farm 1",
      farmerName: "John Doe",
      status: "pending",
      description:
        "Farm 1 is located in a serene environment with beautiful landscapes.",
      services: ["Organic produce", "Farm tours"],
      farmerImage: "https://via.placeholder.com/150", // Sample image URL, replace with actual image URL
      image: "https://via.placeholder.com/150", // Sample image URL, replace with actual image URL
    },
    {
      id: 2,
      farmName: "Farm 2",
      farmerName: "Jane Smith",
      status: "approved",
      description: "Farm 2 specializes in sustainable farming practices.",
      services: ["CSA subscriptions", "Educational workshops"],
      farmerImage: "https://via.placeholder.com/150", // Sample image URL, replace with actual image URL
      image: "https://via.placeholder.com/150", // Sample image URL, replace with actual image URL
    },
    {
      id: 3,
      farmName: "Farm 3",
      farmerName: "Michael Johnson",
      status: "pending",
      description: "Farm 3 offers farm-to-table dining experiences.",
      services: ["Farm stays", "Harvest festivals"],
      farmerImage: "https://via.placeholder.com/150", // Sample image URL, replace with actual image URL
      image: "https://via.placeholder.com/150", // Sample image URL, replace with actual image URL
    },
  ]);

  const [filteredFarms, setFilteredFarms] = useState([...farms]); // Define filteredFarms state

  const approveFarm = (id) => {
    // Replace with your backend API call to update farm status
    setFarms((prevFarms) =>
      prevFarms.map((farm) =>
        farm.id === id ? { ...farm, status: "approved" } : farm
      )
    );
  };

  const deleteFarm = (id) => {
    // Replace with your backend API call to delete farm
    setFarms((prevFarms) => prevFarms.filter((farm) => farm.id !== id));
  };

  // Define filter function
  const filterFarms = (status) => {
    const filtered = farms.filter((farm) => farm.status === status);
    setFilteredFarms(filtered);
  };

  return (
    <div className="farm-admin-container">
      <h1 className="farm-admin-heading">Farm Admin Panel</h1>
      <div>
        {/* Add buttons to filter farms */}
        <button onClick={() => filterFarms("pending")}>Pending Farms</button>
        <button onClick={() => filterFarms("approved")}>Approved Farms</button>
        <button onClick={() => setFilteredFarms([...farms])}>Show All</button>
      </div>
      <table className="farm-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Farm Name</th>
            <th>Farmer Name</th>
            <th>Description</th>
            <th>Services</th>
            <th>Status</th>
            <th>Action</th>
            <th>Farmer Image</th>
            <th>Farm Image</th>
          </tr>
        </thead>
        <tbody>
          {filteredFarms.map((farm) => (
            <tr key={farm.id}>
              <td>{farm.id}</td>
              <td>{farm.farmName}</td>
              <td>{farm.farmerName}</td>
              <td>{farm.description}</td>
              <td>
                <ul>
                  {farm.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </td>
              <td>{farm.status}</td>
              <td>
                {farm.status === "pending" && (
                  <button
                    className="approve-btn"
                    onClick={() => approveFarm(farm.id)}
                  >
                    Approve
                  </button>
                )}
                <button
                  className="delete-btn"
                  onClick={() => deleteFarm(farm.id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <img
                  className="farmer-image"
                  src={farm.farmerImage}
                  alt={farm.farmerName}
                />
              </td>
              <td>
                <img
                  className="farm-image"
                  src={farm.image}
                  alt={farm.farmName}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FarmAdmin;
