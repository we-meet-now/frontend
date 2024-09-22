import React from "react";

const ListIcon = ({ width = "16", height = "16", color = "#7997EC" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="1.5" cy="1.5" r="1.5" fill={color} />
      <path d="M4 1.5H36" stroke={color} stroke-width="1.5" />
      <circle cx="1.5" cy="8.5" r="1.5" fill={color} />
      <path d="M4 8.5H36" stroke={color} stroke-width="1.5" />
      <circle cx="1.5" cy="15.5" r="1.5" fill={color} />
      <path d="M4 15.5H36" stroke={color} stroke-width="1.5" />
    </svg>
  );
};

export default ListIcon;
