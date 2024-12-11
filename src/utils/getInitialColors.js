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
  
  export default getInitialColors;
  