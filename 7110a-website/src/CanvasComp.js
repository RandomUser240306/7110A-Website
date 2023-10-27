// CanvasComponent.js
import React from "react";

export default function CanvasComponent({ modelName }) {
  // Add logic here to customize the canvas content based on modelName
  return (
    <div>
      <h1>{modelName} Model</h1>
      <canvas width={400} height={400} style={{ border: "1px solid black" }}>
        {/* Your canvas content goes here */}
      </canvas>
    </div>
  );
}
