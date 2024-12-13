import React from "react";

const RightPanel = ({ statuses, getColor }) => {
  return (
    <div className="space-y-2 text-right">
      <span style={{ color: getColor(statuses.PV) }}>%</span>
      <span style={{ color: getColor(statuses.PV) }}>°F</span>
      <span style={{ color: getColor(statuses.PV) }}>°C</span>
      <div className="mt-4">
        <h2
          className="text-2xl font-mono inline-block"
          style={{
            color: getColor(statuses.SV),
            fontFamily: "Orbitron, sans-serif",
          }}
        >
          8.8.8.8
        </h2>
        <span
          className="text-sm align-middle ml-2"
          style={{
            color: getColor(statuses.SV),
            fontSize: "18px",
            verticalAlign: "middle",
          }}
        >
          SV
        </span>
      </div>
    </div>
  );
};

export default RightPanel;
