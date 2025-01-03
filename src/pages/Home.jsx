import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";
import vector from "../assets/Vector.png";
import vector1 from "../assets/vector1.png";
import vector2 from "../assets/vector2.png";
import vector3 from "../assets/vector3.png";
import vector4 from "../assets/vector4.png";
import mac from "../assets/mac.png";
import board from "../assets/board.png";
import clock from "../assets/clock.png";
import shape from "../assets/Shape.png";
import shapefea from "../assets/shapefea.png";
import target from "../assets/target.png";

import red from "../assets/red.png";
import blue from "../assets/blue.png";
import green from "../assets/green.png";
import orange from "../assets/orange.png";
import pink from "../assets/pink.png";
import violet from "../assets/violet.png";
import money from "../assets/money.png";
import smart from "../assets/smart.png";
import effort from "../assets/effort.png";
import custom from "../assets/custom.png";
import builder from "../assets/builder.png";
import benefit1 from "../assets/benefit1.png";
import benefit2 from "../assets/benefit2.png";
import benefit3 from "../assets/benefit3.png";
import benefit4 from "../assets/benefit4.png";

const Home = () => {
  const features = [
    {
      id: 1,
      title: "Real-Time Collaboration",
      description:
        "Work together with colleagues to create lesson plans in real-time. No more waiting for updates!",
      image: money,
      color: "#7EA0E7",
    },
    {
      id: 2,
      title: "Curriculum Mapping",
      description:
        "Easily align your lesson plans with state and national educational standards using our intuitive mapping tools.",
      image: violet,
      color: "#7562E0",
    },
    {
      id: 3,
      title: "Assessment Builder",
      description:
        "Create quizzes and assignments linked directly to your lesson objectives, making assessment a breeze.",
      image: orange,
      color: "#FA865F",
    },
    {
      id: 4,
      title: "Feedback Loop",
      description:
        "Receive constructive feedback from peers on your lesson plans to enhance their effectiveness.",
      image: green,
      color: "#5BC17F",
    },

    {
      id: 5,
      title: "Version Control",
      description:
        "Track changes to your lesson plans with version history, ensuring you can always revert if needed.",
      image: red,
      color: "#FF553E",
    },
    {
      id: 6,
      title: "Resource Library",
      description:
        "Access a vast library of teaching resources, including documents, videos, and images, all in one place.",
      image: pink,
      color: "#FF92D7",
    },
  ];

  const aiFeatures = [
    {
      id: 1,
      title: "Smart Assistant",
      description:
        "Transform lesson planning with intelligent, AI-driven support.",
      image: smart,
    },
    {
      id: 2,
      title: "Customized Content",
      description:
        "Generate quizzes, assignments, and tasks tailored to your students.",
      image: effort,
    },
    {
      id: 3,
      title: "Effortless Planning",
      description: "Create engaging lesson plans with just a few prompts.",
      image: custom,
    },
  ];

  const benefits = [
    {
      id: 1,
      title: "Enhanced Collaboration",
      description:
        "Work seamlessly with colleagues in real-time, breaking down silos and fostering teamwork.",
      image: benefit1,
      color: "#41A1FD",
    },
    {
      id: 2,
      title: "Streamlined Resources",
      description:
        "Access a centralized library to easily upload, store, and share educational materials.",
      image: benefit2,
      color: "#F962B1",
    },
    {
      id: 3,
      title: "Aligned Curriculum",
      description:
        "Ensure lesson plans meet educational standards with our intuitive curriculum mapping tools.",
      image: benefit3,
      color: "#3282B8",
    },
    {
      id: 4,
      title: "Continuous Improvement",
      description:
        "Utilize community feedback to refine and enhance lesson plans over time.",
      image: benefit4,
      color: "#FF714A",
    },
  ];

  return (
    <>
      <section id="home">
        <img className="vector4" src={vector4} />

        <img src={vector} className="vector" />
        <img src={clock} className="clock" />

        <div className="content">
          <h1 className="heading-collab">
            A Collaborative Lesson Planner that you Need
          </h1>
          <p className="unite-para">
            Unite with Educators to Collaboratively Design Engaging and<br></br>{" "}
            Impactful Lesson Plans That Inspire Future Generations!
          </p>
          <img className="shape" src={shape} />
          <button className="freetrail-button">Start Free Trial</button>
        </div>
        <img className="mac" src={mac} />
        <img className="vector2" src={vector2} />

        <img className="board" src={board} />
        <img className="vector3" src={vector3} />
        <img className="vector1" src={vector1} />
      </section>

      <div class="stats-container">
        <div>
          <h1>1k+</h1>
          <p>Active User</p>
        </div>
        <div>
          <h1>2k+</h1>
          <p>Download</p>
        </div>
        <div>
          <h1>1k</h1>
          <p>Customer</p>
        </div>
      </div>

      <section id="features">
        <div className="features-container">
          <h1>Some Excellent Features For You</h1>
          <img class="shape-features" src={shapefea}></img>
          <p className="power-feature">
            Powerful features designed to enhance collaboration, streamline
            planning, and simplify <br></br>resource sharing. Elevate your
            teaching experience with ease and efficiency!
          </p>
        </div>

        <div className="feature-contain">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="feature-card"
              style={{ backgroundColor: feature.color }}
            >
              <img src={feature.image} alt={feature.image} />
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-para">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="ai" className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column */}
            <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
              <img
                src={builder}
                alt="Mobile Preview"
                className="img-fluid"
             
              />
            </div>

            {/* Right Column */}
            <div className="col-lg-6 col-md-12">
              {/* Features List */}
              <h1 className="text-center text-lg-start text-md-start mt-4">
                How <span className="text-primary">AI Works</span>
              </h1>
              <p className="text-center text-lg-start text-md-start">
                Effortlessly plan lessons with AI-driven support, creating
                tailored quizzes, assignments, and tasks in seconds.
              </p>

              <div className="features-list">
                {aiFeatures.map((feature) => (
                  <div
                    key={feature.id}
                    className="d-flex align-items-center mb-3 flex-column flex-sm-row text-center text-sm-start"
                  >
                    {/* Icon/Image */}
                    <div className="me-sm-3 mb-2 mb-sm-0">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="img-fluid"
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    </div>
                    {/* Text */}
                    <div>
                      <h4 className="mb-1">{feature.title}</h4>
                      <p className="mb-0">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid" style={{ display: "grid", justifyContent: "end", alignItems: "center" }}>
  <img className="target" src={target} alt="Target" />
</div>

      <section id="benefits" className="py-5">

  {/* Benefits Header */}
  <div className="benefits-header text-center mb-5">
    <h1 className="benefits-title">Benefits</h1>
    <img class="shape-benefits" src="/src/assets/shapefea.png"></img>
    <p className="benefits-description" style={{ color: "#40201E" }}>
  Save time and effort with AI-powered assistance, create personalized learning
  materials, and focus more on teaching while we handle the planning.
</p>
  </div>

  {/* Benefits Content */}
  <div className="benefits-list container">
    {benefits.map((benefit, index) => (
      <div
        key={benefit.id || index}
        className="mb-4 rounded"
        style={{ backgroundColor: benefit.color || "#f5f5f5" }} // Default background color
      >
        {/* Content Wrapped in a Single Box */}
        <div
          className={`benefit-box d-flex align-items-center  p-4 rounded ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
        >
          {/* Image */}
          <img
            src={benefit.image || "default-image.jpg"} // Provide a fallback image if none exists
            alt={benefit.title}
            className="benefit-image img-fluid me-3"
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          {/* Content */}
          <div className="benefit-content">
            <h3 className="benefit-title mb-2">{benefit.title}</h3>
            <p className="benefit-description mb-0">{benefit.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


    </>
  );
};

export default Home;
