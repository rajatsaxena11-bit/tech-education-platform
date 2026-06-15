import React, { useEffect, useState } from "react";
import {
  FaLaptopCode,
  FaServer,
  FaLayerGroup,
  FaBug,
} from "react-icons/fa";

import "../../../assets/mycss/courses/frontend/courseslider.css";
import { useNavigate } from "react-router-dom";

export default function ModernCourseSlider() {

  const navigate = useNavigate()

   const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 400); // 2 second loading
  
      return () => clearTimeout(timer);
    }, []);
  
  

  const courses = [
    {
      icon: <FaLaptopCode />,
      title: "Frontend Development",
      desc: "HTML, CSS, JavaScript, React",
      path: "/frontenddeveloper",
    },

    {
      icon: <FaServer />,
      title: "Backend Development",
      desc: "Node.js, Express, MongoDB",
       path: "/backenddeveloper",
    },

    {
      icon: <FaLayerGroup />,
      title: "MERN Stack",
      desc: "MongoDB, Express, React, Node",
      path: "/merndeveloper",
    },

    {
      icon: <FaBug />,
      title: "Software Testing",
      desc: "Manual + Automation Testing",
       path: "/softwaretestingdeveloper",
    },
  ];

    if (loading) {
      return (
        <div className="frontend-loader">
          <div className="spinner"></div>
          <h3>Loading...</h3>
        </div>
      );
    }

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

            <button onClick={() => navigate(item.path)}>
              Explore Course
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}