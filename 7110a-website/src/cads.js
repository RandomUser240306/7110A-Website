// Cads.js
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import CanvasComp from "./CanvasComp";
import "./Cads.css";
export default function Cads() {
  const modelNames = ["Intake", "Sled", "Ratchet", "Slapper", "Launcher", "Wing", "Drivetrain", "Elevation"];

  return (
    <div className="models-grid">
      {modelNames.map((modelName, index) => (
        <div key={index} className="model-square">
          <Link to={`/cads/${modelName}`} className="model-link">
            {modelName}
            <img src={`${modelName}.png`} className="model-image" />
          </Link>
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
