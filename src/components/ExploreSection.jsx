import React from "react";

const ExploreSection = () => {
  const exploreItems = [
    {
      title: "Check Your\nLesson Plans", // Two lines
      colorFrom: "from-red-400",
      colorTo: "to-red-300",
    },
    {
      title: "View Your\nTimetable", // Two lines
      colorFrom: "from-red-400",
      colorTo: "to-red-300",
    },
    {
      title: "Explore the\nCurriculum", // Two lines
      colorFrom: "from-red-400",
      colorTo: "to-red-300",
    },
  ];

  return (
    <div className="p-4 mt-6 bg-white rounded-lg shadow">
      {/* Header */}
      <h2 className="mb-2 text-lg font-bold">Explore</h2>
      <p className="mb-4 text-sm text-gray-500">
        Let’s see what’s on the agenda for today!
      </p>

      {/* Explore Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {exploreItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-4 rounded-lg bg-gradient-to-r ${item.colorFrom} ${item.colorTo} text-white shadow-md cursor-pointer transition hover:scale-105`}
          >
            <h3 className="text-sm font-semibold whitespace-pre-line">
              {item.title}
            </h3>
            <span className="flex items-center justify-center w-8 h-8 text-black bg-white rounded-full">
              →
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;
