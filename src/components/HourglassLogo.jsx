import React from "react";


export function HourglassLogo({ className = "", style = {} }) {
  return (
    <img
      src="/hourglass-bg.svg"
      alt="Timewarp Hourglass"
      aria-hidden="true"
      draggable="false"
      className={`tw-hw-mark ${className}`}
      style={style}
    />
  );
}

export default HourglassLogo;