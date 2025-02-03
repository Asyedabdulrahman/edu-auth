import headerArrowUp from "../assets/headerArrowUp.png";
import headerPlus from "../assets/headerPlus.png";
import headerLeftArrow from "../assets/headerLeftArrow.png";
import pdfIcon from "../assets/pdfIcon.png";
import headerrightIcon from "../assets/headerrightIcon.png";
import fileIcon from "../assets/fileIcon.png";
import pastyearicon from "../assets/pastyearicon.png";
import feedbackIcon from "../assets/feedbackIcon.png";
import resourceIcon from "../assets/resourceIcon.png";
import tryourTemplate from "../assets/tryourTemplate.png";
import maleImage from "../assets/maleImage.png";
import pinImg from "../assets/pinImg.png";
import { useNavigate } from "react-router-dom";

const LessonPlanPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* super header done by syed */}
      <div className="flex justify-between">
        <p
          className="font-semibold text-2xl inline-flex gap-2 items-center cursor-pointer"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
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
      {/*  header done by syed*/}
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
        <div className="flex gap-3 mt-2 flex-wrap justify-start">
          {[
            "lp_Electron.pdf",
            "lp_Nucleus.pdf",
            "lp_Environmental_Issues.pdf",
          ].map((file, index) => (
            <div
              key={index}
              className="bg-gray-100 flex-1 sm:flex-auto flex justify-center items-center px-4 py-2 rounded-md text-black cursor-pointer gap-2 border border-black shadow-md w-full sm:w-auto"
            >
              <img src={pdfIcon} alt="pdfIcon" />
              {file}
            </div>
          ))}
        </div>
      </div>

      {/* lesson planing block done by Syed */}
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
              <img src={toolkit?.img} alt="toolkitIcon" className="h-14 w-14" />
              <p className="text-gray-700 text-lg font-semibold text-center whitespace-pre-line">
                {toolkit.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Templates Section done by syed */}
      <div className=" grid grid-cols-2 mt-12 gap-10 items-center bg-red-100/20 rounded-lg shadow-md p-6">
        <div>
          <img
            src={tryourTemplate}
            alt="tryourTemplate"
            className="w-full h-auto max-w-[600px] object-cover rounded-md"
            loading="lazy"
          />
        </div>
        <div>
          <p className="mt-2  font-medium text-lg">
            Access free, professionally designed lesson plan templates to
            streamline your teaching process.
          </p>
          <p className="mt-2 font-medium text-lg">
            Templates are fully customizable and aligned with educational
            standards for structured planning.
          </p>
          <p className="mt-2  font-medium text-lg">
            Save time and focus on creating engaging learning experiences for
            students.
          </p>
          <p className="mt-2  font-medium text-lg">
            Explore our library to simplify and enhance your <br />
            <span className="text-[#FC3314]">lesson planning today!</span>
          </p>
        </div>
      </div>

      {/* Creative Teaching Ideas done by syed */}
      <div className="mt-12 bg-[#FFF3F5] rounded-lg p-10 relative w-full">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex-1">
            <h2 className="text-3xl mb-12 font-bold text-gray-900 text-center lg:text-left">
              Creative Teaching Ideas
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                {
                  text: "Incorporate personalized videos to make lessons engaging and relatable.",
                },
                {
                  text: "Add hands-on activities or experiments to apply concepts in real-world scenarios.",
                },
                {
                  text: "Create interactive, fun quizzes to encourage participation and reduce test anxiety.",
                },
                {
                  text: "Introduce supplementary materials or advanced topics to spark deeper interest.",
                },
                {
                  text: "Use visually appealing templates to create a stimulating learning environment.",
                },
              ].map((idea, index) => (
                <li key={index} className="flex items-start gap-3 text-lg">
                  <img src={pinImg} alt="pinImg" className="w-7 h-7 mt-1" />
                  <span className="text-gray-800">
                    {idea.text.split(" ").map((word, i) => (
                      <span
                        key={i}
                        className={
                          [
                            "personalized",
                            "hands-on",
                            "fun",
                            "supplementary",
                            "appealing",
                          ].includes(word.toLowerCase())
                            ? "text-red-500 font-semibold"
                            : " "
                        }
                      >
                        {word}{" "}
                      </span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 flex items-center justify-end mt-10 lg:mt-0 left-0">
            <div className="shadow-lg p-2 rounded-full">
              <img
                src={maleImage}
                alt="maleImage"
                className="w-100 h-100 object-fill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPlanPage;
