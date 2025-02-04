import {
  ArrowLeft,
  ArrowUp,
  MessageCircle,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";
import TimeTableBig from "../assets/TimeTableBig.png";
import fileIcon from "../assets/fileIcon.png";
import pastyearicon from "../assets/pastyearicon.png";
import feedbackIcon from "../assets/feedbackIcon.png";
import resourceIcon from "../assets/resourceIcon.png";
import customizeimg from "../assets/customizeimg.png";
import headerArrowUp from "../assets/headerArrowUp.png";
import headerPlus from "../assets/headerPlus.png";
import { useNavigate } from "react-router-dom";

const TimeTable = () => {
  const navigate = useNavigate();
  return (
    <div className=" min-h-screen p-6 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center ">
        <button
          className="flex items-center gap-2 text-gray-800 hover:text-gray-600"
          onClick={() => navigate("/dashboard")}
        >
          <ArrowLeft className="w-5 h-5" />
          <p className="font-semibold text-xl mt-3">Timetable</p>
        </button>
        <div className="inline-flex gap-4 pb-6 cursor-pointer ">
          {[headerArrowUp, headerPlus].map((text, index) => (
            <div key={index}>
              <img
                src={text}
                alt="headersIcon"
                className="w-10 h-10 items-center justify-center"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Timetable Information */}
      <div className="bg-white rounded-lg p-6 border">
        {/* Subject & Total Class - Positioned Above Image */}
        <div className="flex justify-between items-center w-full max-w-[58%] mx-auto mb-2 ">
          <h3 className="text-lg font-semibold text-gray-900">
            Subject: Physics
          </h3>
          <p className="text-gray-600">Total class: 8 hours</p>
        </div>

        {/* Timetable Image */}
        <img
          src={TimeTableBig}
          alt="Timetable for Physics"
          className="max-w-full max-h-[70vh] object-contain mx-auto "
        />

        {/* Comments & Modify Section */}
        <div className="flex justify-between items-center mt-2 max-w-[60%] mx-auto">
          <p className="font-medium text-xl">Comments</p>
          <div className="flex gap-2 text-gray-600">
            <ThumbsUp className="w-5 h-5 cursor-pointer hover:text-gray-800" />
            <MessageCircle className="w-5 h-5 cursor-pointer hover:text-gray-800" />
            <ThumbsDown className="w5 h-5 cursor-pointer hover:text-gray-800" />
          </div>
          <button className="text-blue-600 hover:underline">Modify →</button>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="font-medium text-gray-700">
          TimeTable Planning Toolkit
        </h2>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {[
            {
              text: "Current year \n lesson plan",
              img: fileIcon,
            },
            {
              text: "Past years \n lesson plans",
              img: pastyearicon,
            },
            {
              text: "Feedback",
              img: feedbackIcon,
            },
            {
              text: "Resources",
              img: resourceIcon,
            },
          ].map((toolkit, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-4 gap-2 border border-gray-200 cursor-pointer"
            >
              {/* <div className="h-12 w-12 bg-gray-300 rounded-full mb-2"></div> */}
              <img src={toolkit?.img} alt="toolkitIcon" className="h-14 w-14" />
              <p className="text-gray-700 text-lg font-semibold text-center whitespace-pre-line">
                {toolkit.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Customization Section */}
      <div className="mt-20 px-4 md:px-8 flex flex-row items-center justify-center gap-6">
        <div className="bg-white rounded-lg p-6 md:flex-row items-center gap-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 text-left md:text-left justify-center flex">
            Customize with Our Templates
          </h3>
          <img
            src={customizeimg}
            alt="Timetable customization preview"
            className="w-full md:w-1/2 md:mx-auto rounded-md shadow-sm -translate-x-0 lg:w-screen "
          />
        </div>
        <div className="flex flex-col font-medium text-xl md:w-[70%] text-start justify-start">
          <p className="mb-3">
            Free, customizable timetable templates <br /> for collaboration.
          </p>
          <p className="mb-3">
            Coordinate schedules and share <br /> responsibilities easily.
          </p>
          <p className="mb-3">Adapt templates to fit specific needs.</p>
          <p className="mb-3">
            Boost communication and organization for <br /> efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimeTable;
