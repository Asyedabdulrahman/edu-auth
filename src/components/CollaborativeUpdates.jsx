import React from "react";

const CollaborativeUpdates = () => {
  const updates = [
    {
      name: "John Doe",
      role: "Teacher",
      message: "Added new resources to the curriculum.",
    },
    {
      name: "Jane Smith",
      role: "Parent",
      message: "Requested a meeting regarding grades.",
    },
    {
      name: "Emma Johnson",
      role: "Student",
      message: "Completed all assignments for the week.",
    },
  ];

  return (
    <div className="bg-lightGray rounded-lg shadow-md p-4">
      <h2 className="text-md font-semibold text-primary mb-3">
        Collaborative Updates
      </h2>

      <ul className="space-y-3">
        {updates.map((update, index) => (
          <li
            key={index}
            className="flex space-x-3 items-start bg-white p-3 rounded-md shadow-sm"
          >
            {/* Vertical Line */}
            <div className="w-1 bg-primary h-16 rounded-full"></div>

            {/* Update Details */}
            <div>
              <h3 className="font-medium text-sm text-gray-700">
                {update.name}
              </h3>
              <p className="text-xs text-gray-500">{update.role}</p>
              <p className="text-sm text-gray-600 mt-1">{update.message}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollaborativeUpdates;
