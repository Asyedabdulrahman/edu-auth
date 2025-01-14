import React from "react";

const ProgressCard = ({
  title,
  subtitle,
  progress,
  recent,
  percentage,
  iconColor,
  bgColor,
}) => {
  return (
    <div
      className={`flex flex-col p-5 rounded-lg shadow-md border border-gray-200 ${bgColor}`}
    >
      {/* Top Section with Circular Progress */}
      <div className="flex items-center mb-4">
        {/* Circular Progress */}
        <div className="relative w-12 h-12">
          <svg className="absolute top-0 left-0 w-12 h-12" viewBox="0 0 36 36">
            {/* Background Circle */}
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#f2f2f2"
              strokeWidth="3"
            />
            {/* Inner Circle for Background */}
            <circle
              cx="18"
              cy="18"
              r="12"
              fill={iconColor} // Background color for the inner circle
              stroke="none"
            />
            {/* Progress Circle */}
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke={iconColor}
              strokeWidth="3"
              strokeDasharray={`${percentage}, 100`}
              strokeLinecap="round"
            />
          </svg>
          {/* Percentage Text */}
          <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">
            {percentage}%
          </div>
        </div>
        <h3 className="text-lg font-bold ml-3">{title}</h3>
      </div>

      {/* Subtitle */}
      <p className="text-sm text-gray-700 mb-4">{subtitle}</p>

      {/* Progress and Recent */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">{progress}</p>
        <p className="text-xs text-gray-500">{recent}</p>
      </div>
    </div>
  );
};

export default ProgressCard;
