// import { Button, Container, Grid, Paper, Typography } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const images = [
//   " https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2VlZGxpbmd8ZW58MHx8MHx8fDA%3D",
//   "https://images.unsplash.com/photo-1606041974734-0341c2d2d988?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// ];

// const LandingPage = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [welcomeMessages] = useState([
//     "WELCOME TO AGROGETAWAY",
//     "EXPLORE THE WORLD OF FARMING",
//     "JOIN US TO REDEFINE AGRICULTURE",
//   ]);

//   const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

//   // Function to move to the next image
//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   // Function to move to the next welcome message
//   const nextWelcomeMessage = () => {
//     setCurrentMessageIndex(
//       (prevIndex) => (prevIndex + 1) % welcomeMessages.length
//     );
//   };

//   // Function to automatically transition to the next image and welcome message
//   const autoTransition = () => {
//     nextImage();
//     nextWelcomeMessage();
//   };

//   // Use useEffect to set up the interval for automatic transitions
//   useEffect(() => {
//     const intervalId = setInterval(autoTransition, 10000); // 10 seconds

//     // Clean up the interval when the component unmounts
//     return () => {
//       clearInterval(intervalId);
//     };
//   });

//   return (
//     <Paper
//       style={{
//         backgroundImage: `url(${images[currentImageIndex]})`,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         height: "100vh",
//         position: "relative",
//       }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundColor: "rgba(0, 0, 0, 0.5)",
//         }}
//       />

//       <Grid alignItems="flex-start" style={{ height: "15%", width: "100%" }}>
//         <Container>
//           <div
//             style={{
//               position: "relative",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//               }}
//             >
//               <div>
//                 <img
//                   src="official.png"
//                   alt="Logo"
//                   style={{
//                     display: "flex",
//                     width: "200px",
//                     marginRight: "70%",
//                   }}
//                 />
//               </div>

//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   padding: "10px",
//                 }}
//               >
//                 <div
//                   style={{ display: "flex", alignItems: "center", gap: "20px" }}
//                 >
//                   <Link
//                     to="/signup"
//                     style={{
//                       textDecoration: "none",
//                       backgroundColor: "#216c2e",
//                     }}
//                   >
//                     <Button
//                       variant="outlined"
//                       color="primary"
//                       size="large"
//                       style={{
//                         color: "white",
//                         border: "#216c2e",
//                         fontFamily: "helvetica",
//                       }}
//                     >
//                       <strong>Sign Up</strong>
//                     </Button>
//                   </Link>

//                   <Link
//                     to="/signin"
//                     style={{
//                       textDecoration: "none",
//                       backgroundColor: "#216c2e",
//                     }}
//                   >
//                     <Button
//                       variant="outlined"
//                       color="primary"
//                       size="large"
//                       style={{
//                         color: "white",
//                         border: "#216c2e",
//                         fontFamily: "helvetica",
//                       }}
//                     >
//                       <strong>Sign In</strong>
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <Typography
//             variant="h1"
//             style={{
//               color: "white",
//               textAlign: "left",
//               fontSize: "4vw", // Responsive font size
//               position: "relative",
//               fontFamily: "helvetica",
//               marginTop: "100px",
//             }}
//           >
//             {welcomeMessages[currentMessageIndex]}
//           </Typography>

//           <Typography
//             variant="body1"
//             color="white"
//             style={{
//               textAlign: "justify",
//               padding: "8px 0",
//               fontSize: "2.5vw", // Responsive font size
//               position: "relative",
//               fontFamily: "helvetica",
//             }}
//           >
//             Explore, learn, and experience the beauty of farming. Join farmers,
//             schools, and organizations on a journey to redefine the future of
//             agriculture.
//           </Typography>

//           <Typography
//             style={{
//               variant: "h3",
//               textAlign: "left",
//               fontSize: "2vw", // Responsive font size
//               color: "white",
//               position: "relative",
//               fontFamily: "brush script mt",
//             }}
//           >
//             Farming Redefined
//           </Typography>

//           <Link to="explore" style={{ textDecoration: "none" }}>
//             <Button
//               variant="contained"
//               size="large"
//               style={{
//                 display: "block",
//                 margin: "0 auto",
//                 marginTop: "20px",
//                 backgroundColor: "#216c2e",
//                 fontFamily: "helvetica",
//               }}
//             >
//               <strong>Explore</strong>
//             </Button>
//           </Link>
//         </Container>
//       </Grid>
//     </Paper>
//   );
// };

// export default LandingPage;

import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Array of images for background
const images = [
  "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2VlZGxpbmd8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1606041974734-0341c2d2d988?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const LandingPage = () => {
  // State for current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // State for welcome messages
  const [welcomeMessages] = useState([
    "WELCOME TO AGROGETAWAY",
    "EXPLORE THE WORLD OF FARMING",
    "JOIN US TO REDEFINE AGRICULTURE",
  ]);
  // State for current welcome message index
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Function to move to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to move to the next welcome message
  const nextWelcomeMessage = () => {
    setCurrentMessageIndex(
      (prevIndex) => (prevIndex + 1) % welcomeMessages.length
    );
  };

  // Function to automatically transition to the next image and welcome message
  const autoTransition = () => {
    nextImage();
    nextWelcomeMessage();
  };

  // Use useEffect to set up the interval for automatic transitions
  useEffect(() => {
    const intervalId = setInterval(autoTransition, 10000); // 10 seconds

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <Paper
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />

      {/* Header Section */}
      <Grid alignItems="flex-start" style={{ height: "15%", width: "100%" }}>
        <Container>
          <div
            style={{
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* Logo */}
              <div>
                <img
                  src="official.png"
                  alt="Logo"
                  style={{
                    display: "flex",
                    width: "200px",
                    marginRight: "70%",
                  }}
                />
              </div>

              {/* Sign Up and Sign In Buttons */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <Link
                    to="/signup"
                    style={{
                      textDecoration: "none",
                      backgroundColor: "#216c2e",
                    }}
                  >
                    <Button
                      variant="outlined"
                      color="primary"
                      size="large"
                      style={{
                        color: "white",
                        border: "#216c2e",
                        fontFamily: "helvetica",
                      }}
                    >
                      <strong>Sign Up</strong>
                    </Button>
                  </Link>

                  <Link
                    to="/signin"
                    style={{
                      textDecoration: "none",
                      backgroundColor: "#216c2e",
                    }}
                  >
                    <Button
                      variant="outlined"
                      color="primary"
                      size="large"
                      style={{
                        color: "white",
                        border: "#216c2e",
                        fontFamily: "helvetica",
                      }}
                    >
                      <strong>Sign In</strong>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Welcome Message */}
          <Typography
            variant="h1"
            style={{
              color: "white",
              textAlign: "left",
              fontSize: "4vw", // Responsive font size
              position: "relative",
              fontFamily: "helvetica",
              marginTop: "100px",
            }}
          >
            {welcomeMessages[currentMessageIndex]}
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            color="white"
            style={{
              textAlign: "justify",
              padding: "8px 0",
              fontSize: "2.5vw", // Responsive font size
              position: "relative",
              fontFamily: "helvetica",
            }}
          >
            Explore, learn, and experience the beauty of farming. Join farmers,
            schools, and organizations on a journey to redefine the future of
            agriculture.
          </Typography>

          {/* Subtitle */}
          <Typography
            style={{
              variant: "h3",
              textAlign: "left",
              fontSize: "2vw", // Responsive font size
              color: "white",
              position: "relative",
              fontFamily: "brush script mt",
            }}
          >
            Farming Redefined
          </Typography>

          {/* Explore Button */}
          <Link to="explore" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              size="large"
              style={{
                display: "block",
                margin: "0 auto",
                marginTop: "20px",
                backgroundColor: "#216c2e",
                fontFamily: "helvetica",
              }}
            >
              <strong>Explore</strong>
            </Button>
          </Link>
        </Container>
      </Grid>
    </Paper>
  );
};

export default LandingPage;
