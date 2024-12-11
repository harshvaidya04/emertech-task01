import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import LabelGrid from "./components/LabelGrid";
import Controls from "./components/Controls";
import ColorPicker from "./components/ColorPickerModal";

const App = () => {
  const getInitialColors = () => {
    const savedColors = localStorage.getItem("tk4s-colors");
    if (savedColors) {
      try {
        return JSON.parse(savedColors);
      } catch (error) {
        console.error("Error parsing saved colors:", error);
      }
    }
    return {
      OUT1: "#FFFFFF",
      OUT2: "#FFFFFF",
      AL1: "#FFFFFF",
      AL2: "#FFFFFF",
      MAN: "#FFFFFF",
      SV1: "#FFFFFF",
      SV2: "#FFFFFF",
      SV3: "#FFFFFF",
    };
  };

  const [colors, setColors] = useState(getInitialColors);
  const [currentLabel, setCurrentLabel] = useState(null);
  const [colorPickerValue, setColorPickerValue] = useState("#000000");

  useEffect(() => {
    localStorage.setItem("tk4s-colors", JSON.stringify(colors));
  }, [colors]);

  const openColorPicker = (labelId) => {
    setCurrentLabel(labelId);
    setColorPickerValue(colors[labelId]);
  };

  const applyColor = () => {
    if (currentLabel) {
      setColors((prevColors) => ({
        ...prevColors,
        [currentLabel]: colorPickerValue,
      }));
      closeColorPicker();
    }
  };

  const closeColorPicker = () => {
    setCurrentLabel(null);
  };

  const resetColors = () => {
    const defaultColors = {
      OUT1: "#FFFFFF",
      OUT2: "#FFFFFF",
      AL1: "#FFFFFF",
      AL2: "#FFFFFF",
      MAN: "#FFFFFF",
      SV1: "#FFFFFF",
      SV2: "#FFFFFF",
      SV3: "#FFFFFF",
    };
    setColors(defaultColors);
    localStorage.removeItem("tk4s-colors");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white font-orbitron">
      <div className="inline-block bg-gray-800 p-2 rounded-small shadow-lg w-full max-w-xl">
        <div className="flex justify-between items-start">
          <LabelGrid colors={colors} openColorPicker={openColorPicker} />
          <Header />
        </div>
      </div>
      <Controls
        colors={colors}
        openColorPicker={openColorPicker}
        resetColors={resetColors}
        currentLabel={currentLabel}
      />
      {currentLabel && (
        <ColorPicker
          currentLabel={currentLabel}
          colorPickerValue={colorPickerValue}
          setColorPickerValue={setColorPickerValue}
          applyColor={applyColor}
          closeColorPicker={closeColorPicker}
        />
      )}
    </div>
  );
};

export default App;
