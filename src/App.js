import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import Book from "./components/Book.js";
// import Types from "./components/Dash.js";
// import Explore from "./components/Dashboard.js";
// import Farms from "./components/Farms.js";
// import LandingPage from "./components/Home.js";
// import Profile from "./components/Profile.js";
import SignIn from "./components/SignIn.js";
import SignUp from "./components/SignUp.js";
// import AboutUs from "./components/aboutus.js";
// import Poultry from "./components/poultry.js";
// import FarmTypes from "./components/types.js";
// import UserProfile from "./components/user.js";
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
        {/* <Route path="/poultry" element={<Poultry />}></Route> */}
        {/* <Route path="/dashboard" element={<Types />}></Route> */}
        {/* {isLogged &&  */}
        {/* <Route path="/explore" element={<Explore />}></Route>
        <Route path="/book" element={<Book />}></Route>
        <Route path="/types" element={<FarmTypes />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/userprofile" element={<UserProfile />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
