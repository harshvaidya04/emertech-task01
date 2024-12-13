import React, { useState, useEffect } from "react";
import Heading from "./Heading";
import MainDisplay from "./MainDisplay";
import StatusList from "./StatusList";
import RightPanel from "./RightPanel";

const DisplayPanel = () => {
  const [statuses, setStatuses] = useState({
    OUT1: null,
    OUT2: null,
    AT: null,
    AL1: null,
    AL2: null,
    MAN: null,
    SV1: null,
    SV2: 1,
    SV3: 1,
  });

  const fetchStatuses = async () => {
    try {
      const response = await fetch(""); // Replace with your API endpoint
      const data = await response.json();
      setStatuses({
        OUT1: data.OUT1,
        OUT2: data.OUT2,
        AT: data.AT,
        AL1: data.AL1,
        AL2: data.AL2,
        MAN: data.MAN,
        SV1: data.SV1,
        SV2: data.SV2,
        SV3: data.SV3,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchStatuses();
  }, []);

  const getColor = (value) => {
    return value === 1 ? "yellow" : "white";
  };

  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-white w-80">
      <Heading />
      <MainDisplay statuses={statuses} getColor={getColor} />
      <div className="flex justify-between">
        <StatusList statuses={statuses} getColor={getColor} />
        <RightPanel statuses={statuses} getColor={getColor} />
      </div>
    </div>
  );
};

export default DisplayPanel;
