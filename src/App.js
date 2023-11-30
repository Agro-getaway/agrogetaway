import React from "react";
import { Route, Routes } from "react-router-dom";
import Types from "./components/Dash.js";
import Explore from "./components/Dashboard.js";
import Farms from "./components/Farms.js";
import LandingPage from "./components/Home.js";
import LogOut from "./components/LogOut.js";
import SignIn from "./components/SignIn.js";
import SignUp from "./components/SignUp.js";
import Book from "./components/USerDashboard/Book.js";
import Profile from "./components/USerDashboard/Profile.js";

import Messaging from "./components/USerDashboard/message.js";
import FarmTypes from "./components/USerDashboard/types.js";
import Selector from "./components/UserTypeSelector.js";
function App() {
  // const [isLogged, setIsLogged] = React.useState(true);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/messages" element={<Messaging />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/farms" element={<Farms />}></Route>
        <Route path="/dashboard" element={<Types />}></Route>
        {/* {isLogged &&  */}
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/logout" element={<LogOut />}></Route>
        <Route path="/book" element={<Book />}></Route>
        <Route path="/types" element={<FarmTypes />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/selector" element={<Selector />}></Route>
      </Routes>
    </>
  );
}

export default App;
