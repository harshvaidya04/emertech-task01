import React from "react";

const Controls = ({ colors, openColorPicker, resetColors, currentLabel }) => {
  return (
    <div className="flex flex-col items-center mt-5">
      <select
        onChange={(e) => openColorPicker(e.target.value)}
        value={currentLabel || ""}
        className="bg-gray-700 text-white px-4 py-2 rounded mb-3"
      >
        <option value="" disabled>
          Select Element to Change Color
        </option>
        {Object.keys(colors).map((label) => (
          <option key={label} value={label}>
            {label}
          </option>
        ))}
      </select>

      <button
        onClick={resetColors}
        className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Reset Colors
      </button>
    </div>
  );
};

export default Controls;
