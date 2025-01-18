import headerArrowUp from "../assets/headerArrowUp.png";
import headerPlus from "../assets/headerPlus.png";
import headerLeftArrow from "../assets/headerLeftArrow.png";
import pdfIcon from "../assets/pdfIcon.png";
import headerrightIcon from "../assets/headerrightIcon.png";
import fileIcon from "../assets/fileIcon.png";
import pastyearicon from "../assets/pastyearicon.png";
import feedbackIcon from "../assets/feedbackIcon.png";
import resourceIcon from "../assets/resourceIcon.png";

const LessonPlanPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* super header */}
      <div className="flex justify-between">
        <p className="font-semibold text-2xl inline-flex gap-2 items-center">
          <span>
            <img
              src={headerLeftArrow}
              alt="headerleftArrow"
              className="w-8 h-8"
            />
          </span>{" "}
          Lesson Plan
        </p>
        <div className="inline-flex gap-4 pb-6 cursor-pointer">
          {[headerArrowUp, headerPlus].map((text, index) => (
            <div key={index}>
              <img src={text} alt="headersIcon" className="w-10 h-10" />
            </div>
          ))}
        </div>
      </div>
      {/* Header */}
      <div className="bg-orange-100/40 p-4 min-h-[60px] flex items-center">
        <p className="text-lg leading-relaxed">
          <span className="text-base font-medium ">Prof. Riya </span>uploaded a
          lesson plan for{" "}
          <span className="text-[#FF7043] cursor-pointer font-bold inline-flex items-center gap-2">
            Water Cycle{" "}
            <img
              src={headerrightIcon}
              alt="headerrightIcon"
              className="w-3 h-3 "
            />
          </span>
        </p>
      </div>

      {/* Recently Viewed */}
      <div className="mt-4 px-10">
        <h2 className="font-semibold text-gray-700">Recently viewed</h2>
        <div className="flex gap-3 mt-2 ">
          {[
            "lp_Electron.pdf",
            "lp_Nucleus.pdf",
            "lp_Environmental_Issues.pdf",
          ].map((file, index) => (
            <div
              key={index}
              className="bg-gray-100 flex-1 flex justify-center items-center px-4 py-2 rounded-md text-black cursor-pointer gap-2 border border-black shadow-md"
            >
              <img src={pdfIcon} alt="pdfIcon" />
              {/* <span className="h-6 w-6 rounded-full bg-black"></span> */}
              {file}
            </div>
          ))}
        </div>
      </div>

      {/* Lesson Planning Toolkit */}
      <div className="mt-24">
        <h2 className="font-semibold text-gray-700">Lesson Planning Toolkit</h2>
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
              <img src={toolkit?.img} alt="toolkitIcon" className="h-14 w-14"  />
              <p className="text-gray-700 text-lg font-semibold text-center whitespace-pre-line">
              {toolkit.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Templates Section */}
      <div className="mt-12 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Try Our Templates
        </h2>
        <p className="text-gray-600 mt-2">
          Access free, professionally designed lesson plan templates to
          streamline your teaching process.
        </p>
        <p className="text-gray-600 mt-1">
          Templates are fully customizable and aligned with educational
          standards for structured planning.
        </p>
        <div className="mt-6 flex gap-4">
          {/* Placeholder for Template Cards */}
          <div className="flex-1 bg-gray-100 h-40 rounded-md"></div>
          <div className="flex-1 bg-gray-100 h-40 rounded-md"></div>
          <div className="flex-1 bg-gray-100 h-40 rounded-md"></div>
        </div>
        <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md">
          Explore Templates
        </button>
      </div>

      {/* Creative Teaching Ideas */}
      <div className="mt-12 bg-yellow-100 rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Creative Teaching Ideas
        </h2>
        <div className="flex mt-4">
          <div className="flex-1">
            <p className="text-gray-600">
              Create personalized videos to make lessons engaging and relatable.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="h-40 w-40 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPlanPage;
