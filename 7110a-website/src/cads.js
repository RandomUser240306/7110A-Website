// Cads.js
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import CanvasComp from "./CanvasComp";
import "./Cads.css";
import CadCard from "./CadCard";


const modelImages = {
  Intake: require("./Images/Intake.JPG"),
  Sled: require("./Images/Sled.JPG"),
  Ratchet: require("./Images/Ratchet.JPG"),
  Slapper: require("./Images/Slapper.JPG"),
  Launcher: require("./Images/Launcher.JPG"),
  Wing: require("./Images/Wing.JPG"),
  Drivetrain: require("./Images/Drivetrain.JPG"),
  Elevation: require("./Images/Elevation.JPG"),
};

export default function Cads() {
  const modelNames = ["Intake", "Sled", "Ratchet", "Slapper", "Launcher", "Wing", "Drivetrain", "Elevation"];

  return (
    <div className="models-grid">
      <CadCard model={modelName} index={index} />
      {modelNames.map((modelName, index) => (
        <div key={index} className="model-square">
              <div className="model-links-container">
      <Link to={`/cads/${modelName}`} className="model-link">
        {modelName}
      </Link>
      <Link to={`/cads/${modelName}`} className="model-link">
        <img src={modelImages[modelName]} className="model-image" alt={`${modelName} Image`} />
      </Link>
    </div>
        </div>
      ))}

      <Routes>
        {modelNames.map((modelName, index) => (
          <Route key={index} path={`/${modelName}`} element={<CanvasComp modelName={modelName} />} />
        ))}
      </Routes>
    </div>
  );
}