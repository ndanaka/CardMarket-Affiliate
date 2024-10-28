import React, { useState, useEffect } from "react";

const CircleChart = ({ now, end }) => {
  const [progress, setProgress] = useState(76);
  const radius = 100; // Changed to twice the previous size (50 * 2)
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    // Ensure now and end are valid numbers and end is not zero
    if (now > end) {
      setProgress(100);
    } else {
      if (typeof now === "number" && typeof end === "number" && end !== 0) {
        const temp = (now / end) * 100;
        setProgress(Math.round(temp));
      }
    }
  }, [now, end]); // Added dependencies to avoid infinite loops

  return (
    <div className="flex flex-col items-center">
      <svg
        viewBox="0 0 240 240" // Adjusted viewBox to fit the larger circles
        className="w-56 h-56" // Size of the SVG container
      >
        <circle
          cx="120" // Center x of the circle
          cy="120" // Center y of the circle
          r={radius}
          fill="none"
          stroke="#eaeaea"
          strokeWidth="11" // Adjust stroke width as needed
        />
        <circle
          cx="120"
          cy="120"
          r={radius}
          fill="none"
          stroke="#759ce4"
          strokeWidth="11" // Adjust stroke width as needed
          strokeDasharray={circumference}
          strokeDashoffset={(1 - progress / 100) * circumference}
          transform="rotate(-90 120 120)"
        />
        <circle
          cx={
            120 +
            radius * Math.cos((2 * Math.PI * progress) / 100 - Math.PI / 2)
          }
          cy={
            120 +
            radius * Math.sin((2 * Math.PI * progress) / 100 - Math.PI / 2)
          }
          r="5.5" // Radius of the moving point
          fill="#759ce4"
          className="cursor-pointer text-[gray]"
        ></circle>
      </svg>
    </div>
  );
};

export default CircleChart;
