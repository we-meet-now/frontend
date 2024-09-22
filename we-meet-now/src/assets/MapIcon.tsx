import React from "react";

const MapIcon = ({ width = "16", height = "16", color = "#7997EC" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35 0L34.68 0.0458375L23 2.44706L11 0L0.72 2.14118C0.3 2.24824 0 2.52353 0 2.87529V25.2353C0 25.6635 0.44 26 1 26L1.32 25.9541L11 23.5529L23 26L35.28 23.8588C35.7 23.7518 36 23.4765 36 23.1247V11.9447V0.764706C36 0.336471 35.56 0 35 0ZM12 1.48353L22 3.62471V24.5165L12 22.3753V1.48353ZM2 3.05882L10 1.45294V22.4059L2 24.18V3.05882ZM34 23.0024L24 24.5471V3.60941L34 1.83529V23.0024Z"
        fill={color}
      />
    </svg>
  );
};

export default MapIcon;
