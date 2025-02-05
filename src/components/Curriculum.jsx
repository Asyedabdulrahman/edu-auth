import aimImg from "../assets/aimImg.png";
import curFileImg from "../assets/curFileImg.png";
import teaching from "../assets/teachingImg.png";
import ResourceandMaterialImg from "../assets/ResourceandMaterialImg.png";
import modelQnImg from "../assets/modelQnImg.png";
import facultiedImg from "../assets/facultiesImg.png";
import examScheduleImg from "../assets/examScheduleImg.png";
import atheleteRunImg from "../assets/atheleteRunImg.png";
import hackathonImg from "../assets/hackathonImg.png";
import posterImg from "../assets/posterImg.png";

const CurriculumFramework = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white ">
      <div className="flex flex-col items-center justify-center h-[80vh] bg-white pt-16 ">
        {/* Vision Section */}
        <div className="flex items-center w-full max-w-7xl bg-red-100 p-6 rounded-xl mb-6 shadow-md justify-start">
          <img src={aimImg} alt="Vision Icon" className="w-40 h-40 mr-4" />
          <div>
            <h1 className="text-6xl font-medium mb-2">Vision</h1>
            <p className="text-gray-700">
              To cultivate a nurturing and innovative learning environment where
              every student is empowered to achieve their full potential and
              become lifelong learners.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex items-center w-full max-w-7xl bg-red-100 p-6 rounded-xl shadow-md justify-end">
          <div className="text-right flex-1">
            <h2 className="text-6xl font-medium mb-2">Mission</h2>
            <p className="text-gray-700">
              To provide a comprehensive education that fosters academic
              excellence, critical thinking, and personal growth, while
              promoting values of respect, responsibility, and community
              engagement.
            </p>
          </div>
          <img src={aimImg} alt="Mission Icon" className="w-40 h-40 ml-4" />
        </div>
      </div>

      <div className="w-full h-[2px] bg-pink-300/70 my-24"></div>

      <div className="w-[80%]">
        <h4>Curriculum FrameWork</h4>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {[
            {
              text: "Curriculum plan \n for 2024 ",
              img: curFileImg,
            },
            {
              text: "Lesson plan based \n on Curriculum",
              img: teaching,
            },
            {
              text: "Faculties guide",
              img: facultiedImg,
            },
          ].map((toolkit, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white shadow-xl rounded-lg p-4 gap-2 border border-gray-200 cursor-pointer"
            >
              <img src={toolkit?.img} alt="toolkitIcon" className="h-16 w-16" />
              <p className="text-gray-700 text-lg font-semibold text-center whitespace-pre-line">
                {toolkit.text}
              </p>
            </div>
          ))}
        </div>

        <h4 className="mt-20">Gear Up for Exams</h4>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {[
            {
              text: "Exam Schedule",
              img: examScheduleImg,
            },
            {
              text: "Model Qn paper",
              img: modelQnImg,
            },
            {
              text: "Resources & Materials",
              img: ResourceandMaterialImg,
            },
          ].map((toolkit, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white shadow-xl rounded-lg p-4 gap-2 border border-gray-200 cursor-pointer"
            >
              <img src={toolkit?.img} alt="toolkitIcon" className="h-16 w-16" />
              <p className="text-gray-700 text-lg font-semibold text-center whitespace-pre-line">
                {toolkit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[2px] bg-pink-300/70 my-24"></div>

      {/* Footer */}
      <div className="w-full bg-pink-200 shadow-md p-6  ">
        <div className="flex flex-col items-center">
          <h1>Campus Buzz</h1>
          <p>
            Exiciting event where students can shine and share their
            acheivements with teachers
          </p>
        </div>
        <div className="flex items-start justify-between gap-4 mt-4 ">
          <div className="flex flex-col items-start ">
            {" "}
            {/* Changed items-center to items-start */}
            <img src={atheleteRunImg} alt="atheleteRunImg" />
            <p className="mt-2 text-left">
              100m race athletic talent and determination.
            </p>
          </div>
          <div className="flex flex-col items-start">
            {" "}
            {/* Changed items-center to items-start */}
            <img src={hackathonImg} alt="hackathonImg" />
            <p className="mt-2 text-left">
              Hackathon sparked innovation and teamwork.
            </p>
          </div>
          <div className="flex flex-col items-start">
            {" "}
            {/* Changed items-center to items-start */}
            <img src={posterImg} alt="posterImg" />
            <p className="mt-2 text-left">
              Poster-making encouraged creative expression.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumFramework;
