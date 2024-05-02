//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componets/Home";
import Signup from "./componets/Signup";
import Navbar2 from "./componets/Navbar2";
import Login from "./componets/Login";
import AddStudent from "./componets/AddStudent";
import "./App.css";
import Dashboard from "./componets/Dashboard";
import TALogin from "./componets/TALogin";

function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar2 />
      <div className="container">
        <div className="cont">
          <Routes className="routes">
            <Route path="/" element={<Home />}></Route>
            <Route path="/addstudent" element={<AddStudent />}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>

            <Route path="/signup" element={<Signup />}></Route>
            {/* <Route path="/ta" element={<TALogin />}></Route> */}
            <Route path="/ta" element={<TALogin/>}></Route>
          </Routes>
      
        </div>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
