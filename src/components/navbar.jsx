import React from "react";
import { FaSearch } from "react-icons/fa";
import profile from "../assets/Profile.jpg";
import notification_alert from "../assets/notification_alert.jpeg";
import { UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Left: Greeting */}
      <h1 className="ml-16 text-xl font-bold lg:text-2xl sm:ml-16 lg:ml-0">
        Dashboard
      </h1>

      {/* Right: Search and Profile */}
      <div className="flex items-center space-x-4">
        {/* Search (Hidden on small screens) */}

        <div className="relative hidden sm:block">
          <FaSearch className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2 focus:outline-primary" />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-primary"
          />
        </div>

        {/* Notification Icon */}
        <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg> */}
          <img src={notification_alert} alt="notification_alert" className="" />
        </button>

        {/* Profile (Condensed on small screens) */}
        <div className="flex items-center space-x-2">
          {/* <img
            src={user.imageUrl}
            alt="Profile"
            className="w-8 h-8 rounded-full lg:w-10 lg:h-10"
          /> */}
          <UserButton redirectUrl="/" />
          <span className="hidden text-gray-600 sm:inline">
            {user ? user.fullName : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
