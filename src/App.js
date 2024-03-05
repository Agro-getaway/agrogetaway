import React from "react";
import { Route, Routes } from "react-router-dom";
import Book from "./components/Book.js";
import Home from "./components/Home";

import Floriculture from "./components/Floriculture.js";
import Mixed from "./components/Mixed.js";
import FarmerPage from "./components/modelfarmer.js";


import Dashboard from "./components/Dashboard1.js";

import FarmAdmin from "./components/Admin.js";
import BeeKeeping from "./components/BeeKeeping.js";
import SignIn from "./components/SignIn.js";
import SignUp from "./components/SignUp.js";
import Poultry from "./components/poultry.js";

import FarmTypes from "./components/types.js";

import Farms from "./components/Farms.js";
function App() {
  // const [isLogged, setIsLogged] = React.useState(true);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<FarmAdmin />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
   
        <Route path="/signup" element={<SignUp />}></Route>
  
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/poultry" element={<Poultry />}></Route>

        <Route path="/Farms" element={<Farms />}></Route>
        <Route path="/Mixed" element={<Mixed />}></Route>
        <Route path="/Floriculture" element={<Floriculture />}></Route>
 
        <Route path="/book" element={<Book />}></Route>

        <Route path="/types" element={<FarmTypes />}></Route>
        
        <Route path="/BeeKeeping" element={<BeeKeeping />}></Route>

      </Routes>
    </>
  );
}

export default App;
