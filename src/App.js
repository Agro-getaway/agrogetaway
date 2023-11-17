import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Apiculture from "./components/Farms/Apiculture";
import Aquaculture from "./components/Farms/Aquaculture";
import Arable from "./components/Farms/Arable";
import Floriculture from "./components/Farms/Floriculture";
import Livestock from "./components/Farms/Livestock";
import Monoculture from "./components/Farms/Monoculture";
import Organic from "./components/Farms/Organic";
import Pomology from "./components/Farms/Pomology";
import Poultry from "./components/Farms/Poultry";
import Serenity from "./components/Farms/assets/floriculture/Serenity";
import FarmDetails from "./components/Farms/test";
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
        <Route path="/farmdetails" element={<FarmDetails />}></Route>
        {/* {isLogged &&  */}
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/arable" element={<Arable />}></Route>
        <Route path="/poultry" element={<Poultry />}></Route>
        <Route path="/livestock" element={<Livestock />}></Route>
        <Route path="/apiculture" element={<Apiculture />}></Route>
        <Route path="/monoculture" element={<Monoculture />}></Route>
        <Route path="/aquaculture" element={<Aquaculture />}></Route>
        <Route path="/organic" element={<Organic />}></Route>
        <Route path="/floriculture" element={<Floriculture />}></Route>
        <Route path="/pomology" element={<Pomology />}></Route>
        <Route path="/serenity" element={<Serenity />}></Route>
        <Route path="/logout" element={<LogOut />}></Route>
      </Routes>
    </>
  );
}

export default App;
