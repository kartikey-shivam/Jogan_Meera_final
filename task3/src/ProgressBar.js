import React from "react";
import { useEffect, useState, useReff } from "react";
export default function ProgressBar(props) {
  const { size, progress, strokeWidth, circleOneStroke, circleTwoStroke } =
    props;
  const [offset, setOffset] = useState(0);

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;

  const circumference = 2 * Math.PI * radius;
  useEffect(() => {
    const progressOffSet = ((100 - progress) / 100) * circumference;
    setOffset(progressOffSet);
  }, [setOffset, progress, circumference, offset]);
  return (
    <div className="progressBar">
      <svg
        className="circular-chart"
        // height={size * (3.1 / 4)}
        // width={size * 1}
        viewBox="0 0 100 100"
      >
        <path
          d="M20,20 
          A40,40 0 1,1 
          20,80"
          fill="none"
          stroke="white"
        ></path>
        {/* <circle
          className="circular-bg"
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        ></circle>
        <circle
          className="circle"
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        ></circle> */}
      </svg>
    </div>
  );
}
