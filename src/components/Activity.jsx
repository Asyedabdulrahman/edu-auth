import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Activity = () => {
  const [activeFilter, setActiveFilter] = useState("week");

  // Dummy data for the chart based on the selected filter
  const dataOptions = {
    day: {
      labels: ["Morning", "Afternoon", "Evening", "Night"],
      data: [10, 20, 30, 15],
    },
    week: {
      labels: ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"],
      data: [10, 15, 25, 20, 50, 30, 40],
    },
    month: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      data: [100, 150, 120, 170],
    },
  };

  const chartData = {
    labels: dataOptions[activeFilter].labels,
    datasets: [
      {
        label: "Activity",
        data: dataOptions[activeFilter].data,
        backgroundColor: (context) => {
          const index = context.dataIndex;
          const colors = [
            "rgba(255, 111, 97, 0.3)", // Default bars
            "rgba(255, 111, 97, 0.6)",
          ];
          return index === 4 ? colors[1] : colors[0]; // Highlight specific bar
        },
        borderRadius: 8,
        barThickness: 20,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines on the X-axis
        },
        ticks: {
          color: "#A0A0A0", // Adjust the color of X-axis labels
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          display: false, // Hide grid lines on the Y-axis
        },
        ticks: {
          display: false, // Hide the Y-axis labels
        },
      },
    },
  };

  // Filters for Day, Week, and Month
  const filters = ["day", "week", "month"];

  return (
    <div className="bg-green-300 rounded-lg shadow-md p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-md font-semibold text-primary">Activity</h2>
        <div className="flex space-x-2">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-1 rounded-md ${
                activeFilter === filter
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Bar Chart */}
      <div className="h-fit">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Activity;
