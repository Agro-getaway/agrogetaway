import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Book from "./components/Book.js";
// import Booking from "./components/Booking.js";
// import Types from "./components/Dash.js";
// import types from "./components/Dashboard.js";

// import Explore from "./components/Dashboard.js";
// import Farms from "./components/Farms.js";
import Dashboard from "./components/Dashboard1.js";
// import LandingPage from "./components/Home.js";
// import Profile from "./components/Profile.js";
// import HamburgerMenu from "./components/HamburgerMenu";
import SignIn from "./components/SignIn.js";
import SignUp from "./components/SignUp.js";
import BeeKeeping from "./components/BeeKeeping.js";
// import AboutUs from "./components/aboutus.js";
// import Poultry from "./components/poultry.js";
import Livestock from "./components/Livestock.js";
import FarmTypes from "./components/types.js";
// import UserProfile from "./components/user.js";
import Farms from "./components/Farms.js";
function App() {
  // const [isLogged, setIsLogged] = React.useState(true);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* { <Route path="/" element={<LandingPage />}></Route> */}
        <Route path="/signin" element={<SignIn />}></Route>
        {/* <Route path="/aboutus" element={<AboutUs />}></Route> */}
        <Route path="/signup" element={<SignUp />}></Route>
        {/* <Route path="/farms" element={<Farms />}></Route> */}
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        {/* <Route path="/poultry" element={<Poultry />}></Route> */}
        <Route path="/livestock" element={<Livestock />}></Route>
        {/* <Route path="/Dashboard" element={<Dashboard />}></Route> */}
        <Route path="/Farms" element={<Farms />}></Route>
        {/* <Route path="/HamburgerMenu" element={<HamburgerMenu />}></Route> */}
        {/* {isLogged &&  */}
        {/* { <Route path="/explore" element={<Explore />}></Route> */}
        <Route path="/book" element={<Book />}></Route>
        {/* <Route path="/booking" element={<Booking />}></Route> */}
        <Route path="/types" element={<FarmTypes />}></Route>
        {/* <Route path="/profile" element={<Profile />}></Route> */}
        {/* <Route path="/userprofile" element={<UserProfile />}></Route> */} 
        <Route path="/BeeKeeping" element={<BeeKeeping />}></Route>
      </Routes>
    </>
  );
}

export default App;
