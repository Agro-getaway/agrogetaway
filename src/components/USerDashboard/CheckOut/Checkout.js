




































// import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// //import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// //import Toolbar from '@mui/material/Toolbar';
// import Paper from '@mui/material/Paper';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
// import Typography from '@mui/material/Typography';
// import AddressForm from './AddressForm';
// // import PaymentForm from './PaymentForm';
// //import Review from './Review';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="./MainDashboard.js">
//         www.agrogetaway.com
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const steps = ['Personal Details'];

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <AddressForm />;
//     // case 1:
//     //   return <PaymentForm />;
//     // case 2:
//     //   return <Review />;
//     default:
//       throw new Error('Unknown step');
//   }
// }

// export default function Checkout() {
//   const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep(activeStep );
//   };

//   const handleBack = () => {
//     setActiveStep(activeStep );
//   };

//   return (
//     <React.Fragment>
//       <CssBaseline />
//       {/* <AppBar
//         position="absolute"
//         color="default"
//         elevation={0}
//         sx={{
//           position: 'relative',
//           borderBottom: (t) => `1px solid ${t.palette.divider}`,
//         }}
//       >
//         <Toolbar>
//           <Typography variant="h6" color="inherit" noWrap>
//             Company name
//           </Typography>
//         </Toolbar>
//       </AppBar> */}
//       <Container component="main" maxWidth="sm" sx={{ mb: 4 }} style={{ color: "#283618" }}>
//         <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} style={{ color: "#283618" }}>
//           <Typography component="h1" variant="h4" align="center">
//             Book
//           </Typography>
//           <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }} color={'#283618'}>
//             {steps.map((label) => (
//               <Step key={label}>
//                 <StepLabel>{label}</StepLabel>
//               </Step>
//             ))}
//           </Stepper>
//           {activeStep === steps.length ? (
//             <React.Fragment>
//               <Typography variant="h5" gutterBottom>
//                 Thank you for booking a farm tour with us.
//               </Typography>
//               <Typography variant="subtitle1">
//                 Your booking with a model farmer has been received and confirmed.
//                 we have emailed you a receipt of payment and a ticket having confirmed dates.
//               </Typography>
//             </React.Fragment>
//           ) : (
//             <React.Fragment>
//               {getStepContent(activeStep)}
//               <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//                 {activeStep === 0 && (
//                   <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }} color={'#283618'}>
//                     Book
//                   </Button>
//                 )}

//                 <Button
//                   variant="contained"
//                   onClick={handleNext}
//                   sx={{ mt: 2, ml: 1 }}
                  
//                 >
//                   {activeStep === 0? 'Confirm Booking' : 'Book'}
//                 </Button>
//               </Box>
//             </React.Fragment>
//           )}
//         </Paper>
//         <Copyright />
//       </Container>
//     </React.Fragment>
//   );
// }
