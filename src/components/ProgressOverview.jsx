// import React from "react";
import ProgressCard from "./ProgressCard";
import { FiDownload } from "react-icons/fi";

const ProgressOverview = () => {
  const cards = [
    {
      title: "Lessons",
      subtitle: "15/20 lessons completed",
      progress: "Recent: Algebra - Ch 5",
      percentage: 75,
      bgColor: "bg-red-50",
      iconColor: "#FF6F61",
    },
    {
      title: "Assessment Test",
      subtitle: "9/20 assessments completed",
      progress: "Recent: Math - Ch 7",
      percentage: 45,
      bgColor: "bg-yellow-50",
      iconColor: "#F59E0B",
    },
    {
      title: "Project",
      subtitle: "15/20 projects completed",
      progress: "Recent: Science - Ch 3",
      percentage: 85,
      bgColor: "bg-purple-50",
      iconColor: "#8B5CF6",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-bold">Progress Overview</h2>
        {/* Export Button */}
        <button className="flex items-center space-x-2 text-xs font-semibold text-gray-600 bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-200 hover:text-gray-700 transition">
          <FiDownload className="w-4 h-4" />
          <span>Export</span>
        </button>
      </div>
      <p className="text-xs text-gray-500 mb-4">Summary</p>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <ProgressCard
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            progress={card.progress}
            percentage={card.percentage}
            bgColor={card.bgColor}
            iconColor={card.iconColor}
            small // Pass prop to adjust card size
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressOverview;
