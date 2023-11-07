import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Members from "./Members";
import Cads from "./cads";
import CanvasComp from "./CanvasComp";

export default function App() {
  return (
    <Router>
      <div className="App Index">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/members" exact element={<Members />} />
          <Route path="/cads/*" element={<Cads />} />
          <Route path="/cads/:modelName" element={<CanvasComp />} />
        </Routes>
      </div>
    </Router>
  );
}