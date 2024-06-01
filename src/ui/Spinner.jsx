// src/components/Spinner.js
import React from "react";

const Spinner = ({ type = "" }) => {
  if (type === "small") return <div className="spinner"></div>;

  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
