import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import LandingPage from "./components/Home";
import LogOut from "./components/LogOut";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Navbar from "./components/navbar";

function App() {
  // const [isLogged, setIsLogged] = React.useState(true);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        {/* {isLogged &&  */}
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/logout" element={<LogOut />}></Route>
      </Routes>
    </>
  );
}

export default App;
