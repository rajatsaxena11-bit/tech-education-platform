import React from "react";
import {
  FaLaptopCode,
  FaServer,
  FaLayerGroup,
  FaBug,
} from "react-icons/fa";

import "../../../assets/mycss/courses/frontend/courseslider.css";

export default function ModernCourseSlider() {

  const courses = [
    {
      icon: <FaLaptopCode />,
      title: "Frontend Development",
      desc: "HTML, CSS, JavaScript, React",
    },

    {
      icon: <FaServer />,
      title: "Backend Development",
      desc: "Node.js, Express, MongoDB",
    },

    {
      icon: <FaLayerGroup />,
      title: "MERN Stack",
      desc: "MongoDB, Express, React, Node",
    },

    {
      icon: <FaBug />,
      title: "Software Testing",
      desc: "Manual + Automation Testing",
    },
  ];

  return (

    <div className="moderncourse-wrapper">

      <div className="moderncourse-container">

        {courses.map((item, index) => (

          <div key={index} className="moderncourse-card">

            <div className="moderncourse-icon">
              {item.icon}
            </div>

            <h2>{item.title}</h2>

            <p>{item.desc}</p>

            <button>
              Explore Course
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}