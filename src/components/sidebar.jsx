import React, { useState } from "react";
import fire_logo from "../assets/fire_logo.jpeg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: "Dashboard", active: true },
    { name: "Lesson Plan", active: false },
    { name: "Updates", active: false },
    { name: "Highlights", active: false },
    { name: "Curriculum", active: false },
    { name: "Settings", active: false },
    { name: "Sign Out", active: false },
  ];

  return (
    <>
      {/* Hamburger Icon */}
      <button
        className="fixed z-50 p-2 text-gray-600 bg-white rounded-full top-4 left-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white p-6 flex flex-col justify-between transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:w-64`}
      >
        {/* Top Section */}
        <div>
          <h1
            className="text-xl font-bold cursor-pointer text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="flex items-center justify-center space-x-2">
              {/* Logo */}
              <img src={fire_logo} alt="logo" className="w-5 h-5" />{" "}
              {/* Text */}
              <span>EduCraft</span>
            </span>
          </h1>

          {/* Menu Items */}
          <ul className="flex flex-col items-center mt-6 space-y-6">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`${
                  item.active
                    ? "bg-red-500 text-white font-semibold" // Active state: red background and white text
                    : "text-gray-600 hover:text-primary"
                } cursor-pointer px-4 py-2 rounded-lg`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center p-4 text-white rounded-lg bg-primary">
          <img
            src={fire_logo}
            alt="logo"
            className="mb-2 rounded-lg"
            style={{ marginTop: "20px" }} // Add margin to push the image down
          />
          <h3 className="text-lg font-bold">EduCraft Pro</h3>
          <p className="my-2 text-sm text-center">
            Get access to all features at a discount!
          </p>
          <button className="px-4 py-2 mt-2 font-semibold bg-white rounded-full text-primary">
            Get Pro
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;


// import React, { useState } from "react";
// import fire_logo from "../assets/fire_logo.jpeg";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   const menuItems = [
//     { name: "Dashboard", active: true },
//     { name: "Lesson Plan", active: false },
//     { name: "Updates", active: false },
//     { name: "Highlights", active: false },
//     { name: "Curriculum", active: false },
//     { name: "Settings", active: false },
//     { name: "Sign Out", active: false },
//   ];

//   return (
//     <>
//       {/* Hamburger Icon */}
//       <button
//         className="fixed z-50 p-2 text-gray-600 bg-white rounded-full top-4 left-4 lg:hidden"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-6 h-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M4 6h16M4 12h16m-7 6h7"
//           />
//         </svg>
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-screen bg-white p-6 flex flex-col justify-between transform transition-transform duration-300 z-40 ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } lg:translate-x-0 lg:relative lg:w-64`}
//       >
//         {/* Top Section */}
//         <div>
//           <h1
//             className="text-xl font-bold cursor-pointer text-primary"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <span className="flex items-center justify-center space-x-2">
//               {/* Logo */}
//               <img src={fire_logo} alt="logo" className="w-5 h-5" />{" "}
//               {/* Text */}
//               <span>EduCraft</span>
//             </span>
//           </h1>

//           {/* Menu Items */}
//           <ul className="flex flex-col items-center mt-6 space-y-6">
//             {menuItems.map((item, index) => (
//               <li
//                 key={index}
//                 className={`${
//                   item.active
//                     ? "text-primary font-semibold"
//                     : "text-gray-600 hover:text-primary"
//                 } cursor-pointer`}
//               >
//                 {item.name}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Bottom Section */}
//         <div className="flex flex-col items-center p-4 text-white rounded-lg bg-primary">
//           <img src={fire_logo} alt="logo" className="mb-2 rounded-lg" />
//           <h3 className="text-lg font-bold">EduCraft Pro</h3>
//           <p className="my-2 text-sm text-center">
//             Get access to all features at a discount!
//           </p>
//           <button className="px-4 py-2 mt-2 font-semibold bg-white rounded-full text-primary">
//             Get Pro
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;




