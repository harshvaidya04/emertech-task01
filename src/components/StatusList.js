import React from "react";

const StatusList = ({ statuses, getColor }) => {
  return (
    <div className="space-y-2">
      <div className="flex space-x-4">
        <span style={{ color: getColor(statuses.OUT1) }}>OUT1</span>
        <span style={{ color: getColor(statuses.OUT2) }}>OUT2</span>
        <span style={{ color: getColor(statuses.AT) }}>AT</span>
      </div>
      <div className="flex space-x-4">
        <span style={{ color: getColor(statuses.AL1) }}>AL1</span>
        <span style={{ color: getColor(statuses.AL2) }}>AL2</span>
      </div>
      <div className="flex space-x-4">
        <span style={{ color: getColor(statuses.MAN) }}>MAN</span>
        <span style={{ color: getColor(statuses.SV1) }}>SV1</span>
      </div>
      <div className="flex space-x-4">
        <span style={{ color: getColor(statuses.SV2) }}>SV2</span>
        <span style={{ color: getColor(statuses.SV3) }}>SV3</span>
      </div>
    </div>
  );
};

export default StatusList;
