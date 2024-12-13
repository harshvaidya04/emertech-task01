import React from "react";

const MainDisplay = ({ statuses, getColor }) => {
  return (
    <div className="text-left my-4">
      <h2
        className="text-6xl font-mono inline-block"
        style={{
          color: getColor(statuses.OUT1),
          fontFamily: "Orbitron, sans-serif",
        }}
      >
        8.8.8.8
      </h2>
      <span
        className="text-sm align-middle ml-2"
        style={{
          color: getColor(statuses.PV),
          fontSize: "18px",
          verticalAlign: "middle",
        }}
      >
        PV
      </span>
    </div>
  );
};

export default MainDisplay;
