import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/Home.js";
import LogOut from "./components/LogOut.js";
import SignIn from "./components/SignIn.js";
import SignUp from "./components/SignUp.js";

import Dashboard from "./components/Dashboard.js";
import User from "./components/USerDashboard/User.js";

function App() {
  // const [isLogged, setIsLogged] = React.useState(true);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        {/* {isLogged &&  */}
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/logout" element={<LogOut />}></Route>
        <Route path="/users" element={<User />}></Route>
      </Routes>
    </>
  );
}

export default App;
