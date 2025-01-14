import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-lightGray min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
