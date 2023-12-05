import "./Cads.css";

import { Link, Route, Routes } from "react-router-dom";
import React from 'react'

export default function CadCard( { modelName, index, modelImages } ) {
  return (
    <>
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
    </>
  )
}