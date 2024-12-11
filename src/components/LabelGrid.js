import React from "react";

const LabelGrid = ({ colors, openColorPicker }) => {
  return (
    <div className="flex flex-col w-1/2">
      <div className="grid grid-cols-2 gap-4 text-lg">
        {Object.keys(colors).map((label) => (
          <span
            key={label}
            className="cursor-pointer"
            style={{ color: colors[label] }}
            onClick={() => openColorPicker(label)}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LabelGrid;
