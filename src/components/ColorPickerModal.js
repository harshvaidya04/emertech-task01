import React from "react";

const ColorPicker = ({
  currentLabel,
  colorPickerValue,
  setColorPickerValue,
  applyColor,
  closeColorPicker,
}) => {
  return (
    <div
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center bg-yellow-800 p-5 rounded-lg shadow-lg"
      aria-hidden="false"
    >
      <h2 className="mb-3">{`Select Color for ${currentLabel}`}</h2>
      <div className="flex items-center gap-3 mb-3">
        <input
          type="color"
          value={colorPickerValue}
          onChange={(e) => setColorPickerValue(e.target.value)}
          className="w-12 h-12 cursor-pointer"
        />
        <span>{colorPickerValue}</span>
      </div>
      <button
        onClick={applyColor}
        className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 mb-2"
      >
        Apply Color
      </button>
      <button
        onClick={closeColorPicker}
        className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Close
      </button>
    </div>
  );
};

export default ColorPicker;
